'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import type { BookChapter } from '@/lib/types'

interface Props {
  slug: string
  bookTitle: string
  chapter: BookChapter
  prevChapter: number | null
  nextChapter: number | null
  totalChapters: number
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

export default function ReaderView({ slug, bookTitle, chapter, prevChapter, nextChapter }: Props) {
  const [activePara, setActivePara] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState<Speed>(1)

  // Refs to avoid stale closures in TTS callbacks
  const isPlayingRef = useRef(false)
  const activeParaIdxRef = useRef<number | null>(null)
  const speedRef = useRef<Speed>(1)
  const wordSpansRef = useRef<WordSpan[]>([])
  const activeWordElRef = useRef<HTMLElement | null>(null)
  const paraRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const speakParaRef = useRef<((idx: number, rate: Speed) => void) | null>(null)

  const clearWordHighlight = useCallback(() => {
    if (activeWordElRef.current) {
      activeWordElRef.current.style.backgroundColor = ''
      activeWordElRef.current.style.borderRadius = ''
      activeWordElRef.current = null
    }
  }, [])

  const speakParagraph = useCallback((paraIdx: number, rate: Speed) => {
    window.speechSynthesis.cancel()
    clearWordHighlight()

    const text = chapter.paragraphs[paraIdx]
    if (!text) return

    const spans = buildWordSpans(text)
    wordSpansRef.current = spans

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = rate

    utterance.onboundary = (event) => {
      if (event.name !== 'word') return
      const idx = findWordIdx(wordSpansRef.current, event.charIndex)
      clearWordHighlight()
      const paraEl = paraRefs.current[paraIdx]
      const el = paraEl?.querySelector<HTMLElement>(`[data-wi="${idx}"]`)
      if (el) {
        el.style.backgroundColor = 'rgba(196, 26, 26, 0.25)'
        el.style.borderRadius = '2px'
        activeWordElRef.current = el
      }
    }

    utterance.onend = () => {
      clearWordHighlight()
      const nextIdx = paraIdx + 1
      if (nextIdx < chapter.paragraphs.length && isPlayingRef.current) {
        setActivePara(nextIdx)
        activeParaIdxRef.current = nextIdx
        paraRefs.current[nextIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        speakParaRef.current?.(nextIdx, speedRef.current)
      } else {
        setIsPlaying(false)
        isPlayingRef.current = false
      }
    }

    utterance.onerror = (event) => {
      // 'interrupted' and 'canceled' fire when cancel() is called — not real errors
      if (event.error === 'interrupted' || event.error === 'canceled') return
      clearWordHighlight()
      setIsPlaying(false)
      isPlayingRef.current = false
    }

    window.speechSynthesis.speak(utterance)
  }, [chapter.paragraphs, clearWordHighlight])

  // Keep speakParaRef current so onend can call the latest version
  useEffect(() => {
    speakParaRef.current = speakParagraph
  }, [speakParagraph])

  // Cancel TTS on unmount (navigation)
  useEffect(() => {
    return () => { window.speechSynthesis?.cancel() }
  }, [])

  const handlePlay = useCallback(() => {
    const para = activeParaIdxRef.current ?? 0
    setActivePara(para)
    activeParaIdxRef.current = para
    setIsPlaying(true)
    isPlayingRef.current = true
    speakParagraph(para, speedRef.current)
  }, [speakParagraph])

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
  }, [clearWordHighlight])

  const handleParaClick = useCallback((idx: number) => {
    setActivePara(idx)
    activeParaIdxRef.current = idx
    setIsPlaying(true)
    isPlayingRef.current = true
    speakParagraph(idx, speedRef.current)
  }, [speakParagraph])

  const handleSpeedChange = useCallback((newSpeed: Speed) => {
    speedRef.current = newSpeed
    setSpeed(newSpeed)
    if (isPlayingRef.current && activeParaIdxRef.current !== null) {
      speakParagraph(activeParaIdxRef.current, newSpeed)
    }
  }, [speakParagraph])

  const progress = activePara !== null
    ? ((activePara + 1) / chapter.paragraphs.length) * 100
    : 0

  return (
    <>
      {/* Topbar */}
      <header className="sticky top-0 z-10 bg-[#0e0e0f]/95 backdrop-blur border-b border-[#2a2a2e]">
        <div className="max-w-[680px] mx-auto px-6 h-14 flex items-center gap-3">
          <Link
            href={`/books/${slug}`}
            className="text-[#888] hover:text-white transition-colors text-sm shrink-0 pr-1"
          >
            ←
          </Link>

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
          const isActive = activePara === idx
          const wordSpans = isActive ? buildWordSpans(para) : null

          return (
            <p
              key={idx}
              ref={(el) => { paraRefs.current[idx] = el }}
              onClick={() => handleParaClick(idx)}
              className={[
                'text-[#d0d0d5] text-[17px] leading-[1.85] mb-6 cursor-pointer rounded-lg px-3 py-1 -mx-3 transition-colors select-none',
                isActive
                  ? 'border-l-2 border-[#C41A1A] bg-[#161618] pl-[14px]'
                  : 'hover:bg-[#111113]',
              ].join(' ')}
            >
              {isActive && wordSpans
                ? wordSpans.map((w, wi) => (
                    <React.Fragment key={wi}>
                      <span data-wi={wi}>{w.word}</span>{' '}
                    </React.Fragment>
                  ))
                : para}
            </p>
          )
        })}
      </main>

      {/* Practice conversation button */}
      {(() => {
        const subject = chapter.title ?? chapter.heading
        const prefill = `I just read about ${subject} from ${bookTitle}. Can we talk about it?`
        return (
          <Link
            href={`/chat?prefill=${encodeURIComponent(prefill)}`}
            className="fixed bottom-[84px] right-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[#161618] border border-[#2a2a2e] hover:border-[#C41A1A] text-[#888] hover:text-white text-sm transition-colors shadow-lg"
          >
            Practice conversation
          </Link>
        )
      })()}

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

          {/* Paragraph indicator */}
          <span className="text-xs text-[#555] shrink-0 tabular-nums">
            {activePara !== null
              ? `¶ ${activePara + 1} / ${chapter.paragraphs.length}`
              : `${chapter.paragraphs.length} ¶`}
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
