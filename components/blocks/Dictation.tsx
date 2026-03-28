'use client'

import { useState } from 'react'
import { calcularDelay } from '@/lib/tts'
import type { DictationItem } from '@/lib/types'

interface Props {
  data: DictationItem[]
}

type Status = 'idle' | 'playing' | 'checked'

function normalise(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
}

function speak(text: string, onEnd: () => void) {
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'en-US'
  u.rate = 0.95
  u.onend = onEnd
  const delay = calcularDelay(text)
  setTimeout(() => window.speechSynthesis.speak(u), delay)
}

export default function Dictation({ data }: Props) {
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [playsLeft, setPlaysLeft] = useState(3)

  const item = data[index]

  function handlePlay() {
    if (status === 'playing') return
    setStatus('playing')
    speak(item.sentence, () => setStatus('idle'))
    setPlaysLeft((n) => Math.max(0, n - 1))
  }

  function handleCheck() {
    const correct = normalise(input) === normalise(item.sentence)
    setIsCorrect(correct)
    setStatus('checked')
    if (correct) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= data.length) {
      setDone(true)
    } else {
      setIndex((i) => i + 1)
      setInput('')
      setStatus('idle')
      setIsCorrect(false)
      setPlaysLeft(3)
    }
  }

  function reset() {
    setIndex(0)
    setInput('')
    setStatus('idle')
    setIsCorrect(false)
    setScore(0)
    setDone(false)
    setPlaysLeft(3)
  }

  if (done) {
    return (
      <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-6 text-center space-y-3">
        <p className="text-3xl font-bold text-white">{score}/{data.length}</p>
        <p className="text-[#888] text-sm">
          {score === data.length ? '¡Perfecto! 🎉' : 'Sigue practicando'}
        </p>
        <button
          onClick={reset}
          className="mt-2 px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
          Dictation
        </span>
        <span className="text-[12px] text-[#555]">{index + 1} / {data.length}</span>
      </div>

      <p className="text-[#888] text-sm">Listen and type what you hear.</p>

      {/* Play button */}
      <button
        onClick={handlePlay}
        disabled={status === 'playing' || playsLeft === 0}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2a2a2e] text-[#d0d0d5] text-sm hover:border-[#444] hover:text-white disabled:opacity-40 transition-colors"
      >
        <span>{status === 'playing' ? '⏳' : '🔊'}</span>
        <span>{status === 'playing' ? 'Playing…' : 'Play sentence'}</span>
        {playsLeft < 3 && (
          <span className="text-[#555] text-[11px]">({playsLeft} left)</span>
        )}
      </button>

      {/* Input */}
      <div className="space-y-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && input.trim() && status !== 'checked' && handleCheck()}
          placeholder="Type what you heard…"
          disabled={status === 'checked'}
          className="w-full rounded-lg border border-[#2a2a2e] bg-[#1c1c1f] px-3 py-2 text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#C41A1A] disabled:opacity-60"
        />

        {status !== 'checked' && (
          <button
            onClick={handleCheck}
            disabled={!input.trim()}
            className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold disabled:opacity-40 hover:bg-[#a81515] transition-colors"
          >
            Check
          </button>
        )}
      </div>

      {/* Result */}
      {status === 'checked' && (
        <div className="space-y-2">
          {isCorrect ? (
            <p className="text-[#4ade80] text-sm font-semibold">✓ Correct!</p>
          ) : (
            <div className="space-y-1">
              <p className="text-[#f87171] text-sm font-semibold">✗ Not quite</p>
              <p className="text-[#888] text-sm">
                Answer: <span className="text-[#aaa]">{item.sentence}</span>
              </p>
            </div>
          )}
          <p className="text-[#555] text-sm italic">{item.translation}</p>
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
          >
            {index + 1 < data.length ? 'Next →' : 'See results'}
          </button>
        </div>
      )}
    </div>
  )
}
