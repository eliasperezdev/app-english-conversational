'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getEntries, getDueEntries, updateReview, type NotebookEntry } from '@/lib/notebook'

type CardState = 'front' | 'back'
type SessionState = 'reviewing' | 'complete'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function nextDueLabel(entries: NotebookEntry[]): string {
  const future = entries
    .map((e) => e.review.nextReview)
    .filter((t) => t > Date.now())
    .sort((a, b) => a - b)
  if (future.length === 0) return 'No upcoming reviews'
  const days = Math.ceil((future[0] - Date.now()) / 86_400_000)
  if (days <= 1) return 'Tomorrow'
  return `In ${days} days`
}

function highlightWord(context: string, word: string): React.ReactElement {
  const idx = context.toLowerCase().indexOf(word.toLowerCase())
  if (idx === -1) return <span>{context}</span>
  return (
    <>
      {context.slice(0, idx)}
      <span className="text-[#C41A1A] font-semibold">{context.slice(idx, idx + word.length)}</span>
      {context.slice(idx + word.length)}
    </>
  )
}

const SOURCE_BADGE: Record<string, string> = {
  guide: 'bg-[#c89a2a]/15 text-[#c89a2a]',
  book: 'bg-[#3a8fd4]/15 text-[#3a8fd4]',
  chat: 'bg-[#2da899]/15 text-[#2da899]',
}

const QUALITY_BUTTONS: {
  quality: 0 | 1 | 2 | 3
  label: string
  emoji: string
  style: string
}[] = [
  {
    quality: 0,
    label: 'Blackout',
    emoji: '😵',
    style: 'bg-[#2a1a1a] border border-red-900/50 text-red-400 hover:bg-red-900/30',
  },
  {
    quality: 1,
    label: 'Wrong',
    emoji: '✗',
    style: 'bg-[#2a1a1a] border border-red-800/50 text-red-300 hover:bg-red-900/20',
  },
  {
    quality: 2,
    label: 'Hard',
    emoji: '△',
    style: 'bg-[#1a1a2a] border border-[#3a8fd4]/40 text-[#3a8fd4] hover:bg-[#3a8fd4]/10',
  },
  {
    quality: 3,
    label: 'Easy',
    emoji: '✓',
    style: 'bg-[#1a2a1a] border border-green-700/40 text-green-400 hover:bg-green-900/20',
  },
]

export default function ReviewPage() {
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode') === 'all' ? 'all' : 'due'

  const [deck, setDeck] = useState<NotebookEntry[]>([])
  const [idx, setIdx] = useState(0)
  const [cardState, setCardState] = useState<CardState>('front')
  const [sessionState, setSessionState] = useState<SessionState>('reviewing')
  const [showContext, setShowContext] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  useEffect(() => {
    const src = mode === 'all' ? getEntries() : getDueEntries()
    setDeck(shuffle(src))
  }, [mode])

  const handleQuality = useCallback(
    (quality: 0 | 1 | 2 | 3) => {
      if (cardState !== 'back') return
      const card = deck[idx]
      updateReview(card.id, quality)

      const isCorrect = quality >= 2
      setScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }))

      if (idx + 1 >= deck.length) {
        setSessionState('complete')
      } else {
        setIdx((i) => i + 1)
        setCardState('front')
        setShowContext(false)
      }
    },
    [cardState, deck, idx]
  )

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (sessionState !== 'reviewing') return
      if (e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault()
        if (cardState === 'front') {
          setCardState('back')
          setShowContext(true)
        }
      }
      if (cardState === 'back') {
        if (e.key === '1') handleQuality(0)
        if (e.key === '2') handleQuality(1)
        if (e.key === '3') handleQuality(2)
        if (e.key === '4') handleQuality(3)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [cardState, sessionState, handleQuality])

  if (deck.length === 0) {
    return (
      <main className="min-h-screen bg-[#0e0e0f] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-white font-bold text-xl mb-2">No words to review</p>
          <p className="text-[#555] text-sm mb-6">
            {mode === 'due'
              ? 'No reviews are due right now. Come back later!'
              : 'Save some words first to start reviewing.'}
          </p>
          <Link
            href="/notebook"
            className="inline-flex px-5 py-2.5 bg-[#C41A1A] text-white text-sm font-semibold rounded-xl hover:bg-[#a51515] transition-colors"
          >
            Back to notebook
          </Link>
        </div>
      </main>
    )
  }

  if (sessionState === 'complete') {
    const allEntries = getEntries()
    return (
      <main className="min-h-screen bg-[#0e0e0f] flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <p className="text-4xl mb-4">🎉</p>
          <h1 className="text-2xl font-bold text-white mb-2">Session complete!</h1>
          <p className="text-[#888] text-sm mb-6">
            {score.correct} correct out of {score.total}
          </p>

          <div className="rounded-2xl border border-[#2a2a2e] bg-[#161618] p-5 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-[#555]">Next review</span>
              <span className="text-white font-semibold">{nextDueLabel(allEntries)}</span>
            </div>
          </div>

          <Link
            href="/notebook"
            className="inline-flex px-5 py-2.5 bg-[#C41A1A] text-white text-sm font-semibold rounded-xl hover:bg-[#a51515] transition-colors"
          >
            Back to notebook
          </Link>
        </div>
      </main>
    )
  }

  const card = deck[idx]
  const progress = ((idx) / deck.length) * 100

  return (
    <main className="min-h-screen bg-[#0e0e0f] px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-lg">

        {/* Back + progress */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/notebook" className="text-[#888] text-sm hover:text-white transition-colors">
            ← Exit
          </Link>
          <div className="flex-1">
            <div className="h-1.5 bg-[#2a2a2e] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C41A1A] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span className="text-[#555] text-sm shrink-0">
            {idx + 1} / {deck.length}
          </span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[#2a2a2e] bg-[#161618] p-8 mb-6 min-h-[220px] flex flex-col items-center justify-center text-center">
          <span
            className={`text-[10px] font-semibold uppercase tracking-wide rounded-full px-2 py-0.5 mb-6 ${SOURCE_BADGE[card.source.type]}`}
          >
            {card.source.label}
          </span>

          <h2 className="text-4xl font-bold text-white mb-6">{card.word}</h2>

          {cardState === 'back' && (
            <div className="w-full text-left space-y-3 mt-2 border-t border-[#2a2a2e] pt-4">
              <p className="text-[#d0d0d5] text-sm leading-relaxed">
                {highlightWord(card.context, card.word)}
              </p>
              {card.translation && (
                <p className="text-[#888] text-sm italic">"{card.translation}"</p>
              )}
              <a
                href={card.source.url}
                className="inline-block text-[#3a8fd4] text-xs hover:underline"
              >
                Go to source →
              </a>
            </div>
          )}

          {cardState === 'front' && !showContext && (
            <button
              onClick={() => setShowContext((v) => !v)}
              className="text-[#555] text-sm hover:text-[#888] transition-colors"
            >
              Show context
            </button>
          )}

          {cardState === 'front' && showContext && (
            <p className="text-[#888] text-sm leading-relaxed mt-2 border-t border-[#2a2a2e] pt-4 w-full text-left">
              {highlightWord(card.context, card.word)}
            </p>
          )}
        </div>

        {/* Action buttons */}
        {cardState === 'front' ? (
          <button
            onClick={() => {
              setCardState('back')
              setShowContext(true)
            }}
            className="w-full py-3.5 bg-[#C41A1A] text-white font-semibold rounded-xl hover:bg-[#a51515] transition-colors"
          >
            Show answer
            <span className="ml-2 text-white/50 text-sm font-normal">Space / →</span>
          </button>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {QUALITY_BUTTONS.map((btn) => (
              <button
                key={btn.quality}
                onClick={() => handleQuality(btn.quality)}
                className={`flex flex-col items-center gap-1 py-3 rounded-xl text-sm font-semibold transition-colors ${btn.style}`}
              >
                <span className="text-lg">{btn.emoji}</span>
                <span className="text-xs">{btn.label}</span>
                <span className="text-[10px] opacity-40">[{btn.quality + 1}]</span>
              </button>
            ))}
          </div>
        )}

        {/* Keyboard hint */}
        {cardState === 'front' && (
          <p className="text-center text-[#555] text-xs mt-4">
            Press Space or → to reveal
          </p>
        )}
        {cardState === 'back' && (
          <p className="text-center text-[#555] text-xs mt-4">
            Press 1–4 to rate
          </p>
        )}
      </div>
    </main>
  )
}
