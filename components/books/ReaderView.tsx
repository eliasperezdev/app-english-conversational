'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import type { BookChapter } from '@/lib/types'
import { BackButton } from '@/components/ui/back-button'
import { splitSentences } from '@/lib/tts'

interface Props {
  slug: string
  chapter: BookChapter
  prevChapter: number | null
  nextChapter: number | null
  totalChapters: number
  bookTitle: string
}

type Speed = 0.75 | 1 | 1.25 | 1.5
const SPEEDS: Speed[] = [0.75, 1, 1.25, 1.5]

interface WordSpan {
  word: string
  charStart: number
}

function buildWordSpans(text: string): WordSpan[] {
  const result: WordSpan[] = []
  const regex = /\S+/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(text)) !== null) {
    result.push({ word: match[0], charStart: match.index })
  }
  return result
}

function findWordIdx(spans: WordSpan[], charIndex: number): number {
  let idx = 0
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].charStart <= charIndex) idx = i
    else break
  }
  return idx
}

export default function ReaderView({ slug, chapter, prevChapter, nextChapter, bookTitle }: Props) {
  const [activePara, setActivePara] = useState<number | null>(null)
  const [activeSentence, setActiveSentence] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState<Speed>(1)

  // Refs to avoid stale closures in TTS callbacks
  const isPlayingRef = useRef(false)
  const activeParaIdxRef = useRef<number | null>(null)
  const activeSentenceIdxRef = useRef<number | null>(null)
  const sentencesRef = useRef<string[]>([])
  const wordOffsetRef = useRef<number>(0)
  const speedRef = useRef<Speed>(1)
  const wordSpansRef = useRef<WordSpan[]>([])
  const activeWordElRef = useRef<HTMLElement | null>(null)
  const paraRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const speakSentenceRef = useRef<((paraIdx: number, sentenceIdx: number, rate: Speed) => void) | null>(null)

  // Timing-based highlight fallback
  const wordTimersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  // Set to true once onboundary fires — timing fallback will stand down
  const usingBoundaryRef = useRef(false)

  const clearWordHighlight = useCallback(() => {
    if (activeWordElRef.current) {
      activeWordElRef.current.style.backgroundColor = ''
      activeWordElRef.current.style.borderRadius = ''
      activeWordElRef.current.style.color = ''
      activeWordElRef.current.style.padding = ''
      activeWordElRef.current = null
    }
    // Also cancel any pending timing-based timers
    wordTimersRef.current.forEach(clearTimeout)
    wordTimersRef.current = []
  }, [])

  const applyWordHighlight = useCallback((paraIdx: number, globalIdx: number) => {
    const paraEl = paraRefs.current[paraIdx]
    const el = paraEl?.querySelector<HTMLElement>(`[data-wi="${globalIdx}"]`)
    if (el) {
      el.style.backgroundColor = 'rgba(196, 26, 26, 0.55)'
      el.style.borderRadius = '3px'
      el.style.color = '#ffffff'
      el.style.padding = '0 2px'
      activeWordElRef.current = el
    }
  }, [])

  const speakSentence = useCallback((paraIdx: number, sentenceIdx: number, rate: Speed) => {
    window.speechSynthesis.cancel()
    // Android Chrome bug: cancel() can leave synthesis in a paused state.
    window.speechSynthesis.resume()
    clearWordHighlight()
    usingBoundaryRef.current = false

    const paraText = chapter.paragraphs[paraIdx]
    if (!paraText) return

    const sentences = splitSentences(paraText)
    sentencesRef.current = sentences

    const text = sentences[sentenceIdx]
    if (!text) return

    // Compute paragraph-global word offset for this sentence
    let wordOffset = 0
    for (let i = 0; i < sentenceIdx; i++) {
      wordOffset += buildWordSpans(sentences[i]).length
    }
    wordOffsetRef.current = wordOffset

    const spans = buildWordSpans(text)
    wordSpansRef.current = spans

    setActiveSentence(sentenceIdx)
    activeSentenceIdxRef.current = sentenceIdx

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = rate

    // PRIMARY: onboundary gives perfect per-word sync when supported
    utterance.onboundary = (event) => {
      if (event.name !== 'word') return
      if (!usingBoundaryRef.current) {
        // onboundary is working — cancel all timing timers
        usingBoundaryRef.current = true
        wordTimersRef.current.forEach(clearTimeout)
        wordTimersRef.current = []
      }
      const localIdx = findWordIdx(wordSpansRef.current, event.charIndex)
      const globalIdx = wordOffsetRef.current + localIdx
      clearWordHighlight()
      applyWordHighlight(paraIdx, globalIdx)
    }

    // FALLBACK: timing-based highlight for browsers where onboundary doesn't fire.
    // ~12 chars/second at 1x rate is a reasonable estimate for English TTS.
    utterance.onstart = () => {
      const CHARS_PER_SEC = 12 * rate
      let cumulativeDelay = 250 // initial TTS startup latency

      spans.forEach((ws, i) => {
        const wordMs = ((ws.word.length + 1) / CHARS_PER_SEC) * 1000
        const delay = cumulativeDelay
        cumulativeDelay += wordMs

        const id = setTimeout(() => {
          if (usingBoundaryRef.current) return // onboundary took over
          clearWordHighlight()
          applyWordHighlight(paraIdx, wordOffsetRef.current + i)
        }, delay)
        wordTimersRef.current.push(id)
      })
    }

    utterance.onend = () => {
      clearWordHighlight()
      if (!isPlayingRef.current) return

      const nextSentence = sentenceIdx + 1
      if (nextSentence < sentencesRef.current.length) {
        speakSentenceRef.current?.(paraIdx, nextSentence, speedRef.current)
      } else {
        const nextPara = paraIdx + 1
        if (nextPara < chapter.paragraphs.length) {
          setActivePara(nextPara)
          activeParaIdxRef.current = nextPara
          paraRefs.current[nextPara]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          speakSentenceRef.current?.(nextPara, 0, speedRef.current)
        } else {
          setIsPlaying(false)
          isPlayingRef.current = false
        }
      }
    }

    utterance.onerror = (event) => {
      if (event.error === 'interrupted' || event.error === 'canceled') return
      clearWordHighlight()
      setIsPlaying(false)
      isPlayingRef.current = false
    }

    window.speechSynthesis.speak(utterance)
  }, [chapter.paragraphs, clearWordHighlight, applyWordHighlight])

  // Keep speakSentenceRef current so onend can call the latest version
  useEffect(() => {
    speakSentenceRef.current = speakSentence
  }, [speakSentence])

  // Pre-load voices so first speak() works immediately on mobile
  useEffect(() => {
    window.speechSynthesis.getVoices()
  }, [])

  // Cancel TTS on unmount (navigation)
  useEffect(() => {
    return () => { window.speechSynthesis?.cancel() }
  }, [])

  const handlePlay = useCallback(() => {
    const para = activeParaIdxRef.current ?? 0
    const sent = activeSentenceIdxRef.current ?? 0
    setActivePara(para)
    activeParaIdxRef.current = para
    setIsPlaying(true)
    isPlayingRef.current = true
    speakSentence(para, sent, speedRef.current)
  }, [speakSentence])

  const handlePause = useCallback(() => {
    window.speechSynthesis.cancel()
    clearWordHighlight()
    setIsPlaying(false)
    isPlayingRef.current = false
  }, [clearWordHighlight])

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel()
    clearWordHighlight()
    setIsPlaying(false)
    isPlayingRef.current = false
    setActivePara(null)
    activeParaIdxRef.current = null
    setActiveSentence(null)
    activeSentenceIdxRef.current = null
  }, [clearWordHighlight])

  const handleParaClick = useCallback((idx: number) => {
    setActivePara(idx)
    activeParaIdxRef.current = idx
    setIsPlaying(true)
    isPlayingRef.current = true
    speakSentence(idx, 0, speedRef.current)
  }, [speakSentence])

  const handleSentenceClick = useCallback((paraIdx: number, sentenceIdx: number) => {
    setActivePara(paraIdx)
    activeParaIdxRef.current = paraIdx
    setIsPlaying(true)
    isPlayingRef.current = true
    speakSentence(paraIdx, sentenceIdx, speedRef.current)
  }, [speakSentence])

  const handleSpeedChange = useCallback((newSpeed: Speed) => {
    speedRef.current = newSpeed
    setSpeed(newSpeed)
    if (isPlayingRef.current && activeParaIdxRef.current !== null) {
      speakSentence(activeParaIdxRef.current, activeSentenceIdxRef.current ?? 0, newSpeed)
    }
  }, [speakSentence])

  const progress = activePara !== null
    ? ((activePara + 1) / chapter.paragraphs.length) * 100
    : 0

  return (
    <>
      {/* Topbar */}
      <header className="sticky top-0 z-10 bg-[#0e0e0f]/95 backdrop-blur border-b border-[#2a2a2e]">
        <div className="max-w-[680px] mx-auto px-6 h-14 flex items-center gap-3">
          <BackButton label={bookTitle} href={`/books/${slug}`} />

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate leading-tight">
              {chapter.heading}
            </p>
            {chapter.title && (
              <p className="text-xs text-[#555] truncate leading-tight mt-0.5">{chapter.title}</p>
            )}
          </div>

          <div className="flex items-center gap-0.5 shrink-0">
            {prevChapter !== null ? (
              <Link
                href={`/books/${slug}/${prevChapter}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#888] hover:text-white hover:bg-[#1c1c1f] transition-colors text-lg leading-none"
                title="Previous chapter"
              >
                ‹
              </Link>
            ) : (
              <span className="w-8 h-8 flex items-center justify-center text-[#333] text-lg leading-none">‹</span>
            )}
            {nextChapter !== null ? (
              <Link
                href={`/books/${slug}/${nextChapter}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#888] hover:text-white hover:bg-[#1c1c1f] transition-colors text-lg leading-none"
                title="Next chapter"
              >
                ›
              </Link>
            ) : (
              <span className="w-8 h-8 flex items-center justify-center text-[#333] text-lg leading-none">›</span>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[680px] mx-auto px-6 py-10 pb-36">
        {chapter.paragraphs.map((para, idx) => {
          const isActivePara = activePara === idx
          const sentences = isActivePara ? splitSentences(para) : null

          // Precompute word spans + offsets for all sentences in the active paragraph.
          // Doing this upfront (not per-sentence) ensures data-wi spans are in the DOM
          // as soon as the paragraph is active, avoiding a race with onboundary.
          const allWordSpans: WordSpan[][] = []
          const sentWordOffsets: number[] = []
          if (sentences) {
            let offset = 0
            for (const sent of sentences) {
              const ws = buildWordSpans(sent)
              sentWordOffsets.push(offset)
              allWordSpans.push(ws)
              offset += ws.length
            }
          }

          return (
            <p
              key={idx}
              ref={(el) => { paraRefs.current[idx] = el }}
              onClick={() => handleParaClick(idx)}
              className={[
                'text-[#d0d0d5] text-[17px] leading-[1.85] mb-6 cursor-pointer rounded-lg px-3 py-1 -mx-3 transition-colors',
                isActivePara
                  ? 'border-l-2 border-[#C41A1A] bg-[#161618] pl-[14px]'
                  : 'hover:bg-[#111113]',
              ].join(' ')}
            >
              {isActivePara && sentences
                ? sentences.map((_sent, sIdx) => {
                    const isActiveSent = activeSentence === sIdx
                    const sentOffset = sentWordOffsets[sIdx]
                    const wordSpans = allWordSpans[sIdx]

                    return (
                      <span
                        key={sIdx}
                        onClick={(e) => { e.stopPropagation(); handleSentenceClick(idx, sIdx) }}
                        className={[
                          'rounded transition-colors',
                          isActiveSent
                            ? 'bg-[#1f1f22]'
                            : 'hover:bg-[#111113] cursor-pointer',
                        ].join(' ')}
                      >
                        {wordSpans.map((w, wi) => (
                          <React.Fragment key={wi}>
                            <span
                              data-wi={sentOffset + wi}
                              style={{ transition: 'background-color 0.12s, color 0.12s' }}
                            >{w.word}</span>{' '}
                          </React.Fragment>
                        ))}
                      </span>
                    )
                  })
                : para}
            </p>
          )
        })}
      </main>

      {/* Player bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-[#111113] border-t border-[#2a2a2e]">
        {/* Progress */}
        <div className="h-[2px] bg-[#2a2a2e]">
          <div
            className="h-full bg-[#C41A1A] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="max-w-[680px] mx-auto px-4 h-16 flex items-center gap-3">
          {/* Play / Pause */}
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            className="w-10 h-10 rounded-full bg-[#C41A1A] hover:bg-[#a31616] flex items-center justify-center transition-colors shrink-0"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <span className="flex gap-[3px]">
                <span className="w-[3px] h-[14px] bg-white rounded-sm block" />
                <span className="w-[3px] h-[14px] bg-white rounded-sm block" />
              </span>
            ) : (
              <span
                className="block ml-0.5"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '7px solid transparent',
                  borderBottom: '7px solid transparent',
                  borderLeft: '13px solid white',
                }}
              />
            )}
          </button>

          {/* Stop */}
          <button
            onClick={handleStop}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#555] hover:text-white hover:bg-[#1c1c1f] transition-colors shrink-0"
            aria-label="Stop"
          >
            <span className="w-3 h-3 bg-current rounded-sm block" />
          </button>

          {/* Position indicator */}
          <span className="text-xs shrink-0 tabular-nums leading-tight">
            {activePara !== null ? (
              <>
                <span className="text-[#555] block">
                  ¶ {activePara + 1} / {chapter.paragraphs.length}
                </span>
                {activeSentence !== null && sentencesRef.current.length > 1 && (
                  <span className="text-[#C41A1A] block">
                    S {activeSentence + 1} / {sentencesRef.current.length}
                  </span>
                )}
              </>
            ) : (
              <span className="text-[#555]">{chapter.paragraphs.length} ¶</span>
            )}
          </span>

          <div className="flex-1" />

          {/* Speed */}
          <div className="flex items-center gap-0.5">
            {SPEEDS.map((s) => (
              <button
                key={s}
                onClick={() => handleSpeedChange(s)}
                className={[
                  'text-xs px-2 py-1 rounded transition-colors',
                  speed === s
                    ? 'bg-[#C41A1A]/15 text-[#C41A1A]'
                    : 'text-[#555] hover:text-[#888]',
                ].join(' ')}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
