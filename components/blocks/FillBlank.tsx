'use client'

import { useState } from 'react'
import type { FillBlankItem } from '@/lib/types'

interface Props {
  data: FillBlankItem[]
}

type Status = 'idle' | 'correct' | 'wrong'

export default function FillBlank({ data }: Props) {
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [showHint, setShowHint] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const item = data[index]

  function check() {
    const trimmed = input.trim().toLowerCase()
    const correct = item.answers.some((a) => a.toLowerCase() === trimmed)
    setStatus(correct ? 'correct' : 'wrong')
    if (correct) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= data.length) {
      setDone(true)
    } else {
      setIndex((i) => i + 1)
      setInput('')
      setStatus('idle')
      setShowHint(false)
    }
  }

  function reset() {
    setIndex(0)
    setInput('')
    setStatus('idle')
    setShowHint(false)
    setScore(0)
    setDone(false)
  }

  if (done) {
    return (
      <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-6 text-center space-y-3">
        <p className="text-3xl font-bold text-white">
          {score}/{data.length}
        </p>
        <p className="text-[#888] text-sm">
          {score === data.length ? '¡Perfecto! 🎉' : 'Buen intento — sigue practicando'}
        </p>
        <button
          onClick={reset}
          className="mt-2 px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
        >
          Reintentar
        </button>
      </div>
    )
  }

  const parts = item.sentence.split('___')

  return (
    <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
          Fill in the blank
        </span>
        <span className="text-[12px] text-[#555]">
          {index + 1} / {data.length}
        </span>
      </div>

      <p className="text-[15px] text-white leading-relaxed">
        {parts[0]}
        <span
          className={`inline-block min-w-[80px] border-b-2 mx-1 px-1 text-center font-semibold transition-colors ${
            status === 'correct'
              ? 'border-[#4ade80] text-[#4ade80]'
              : status === 'wrong'
              ? 'border-[#f87171] text-[#f87171]'
              : 'border-[#555] text-white'
          }`}
        >
          {input || '\u00A0'}
        </span>
        {parts[1]}
      </p>

      {status === 'idle' && (
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && input.trim() && check()}
            placeholder="Type your answer…"
            className="flex-1 rounded-lg border border-[#2a2a2e] bg-[#1c1c1f] px-3 py-2 text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#C41A1A]"
          />
          <button
            onClick={check}
            disabled={!input.trim()}
            className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold disabled:opacity-40 hover:bg-[#a81515] transition-colors"
          >
            Check
          </button>
        </div>
      )}

      {status === 'correct' && (
        <div className="space-y-2">
          <p className="text-[#4ade80] text-sm font-semibold">✓ Correct!</p>
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
          >
            {index + 1 < data.length ? 'Next →' : 'See results'}
          </button>
        </div>
      )}

      {status === 'wrong' && (
        <div className="space-y-3">
          <p className="text-[#f87171] text-sm font-semibold">✗ Not quite</p>
          {!showHint ? (
            <div className="flex gap-2">
              <button
                onClick={() => setShowHint(true)}
                className="px-3 py-1.5 rounded-lg border border-[#2a2a2e] text-[#888] text-sm hover:text-white transition-colors"
              >
                Show hint
              </button>
              <button
                onClick={() => { setStatus('idle'); setInput('') }}
                className="px-3 py-1.5 rounded-lg border border-[#2a2a2e] text-[#888] text-sm hover:text-white transition-colors"
              >
                Try again
              </button>
              <button
                onClick={next}
                className="px-3 py-1.5 rounded-lg bg-[#1c1c1f] text-[#888] text-sm hover:text-white transition-colors"
              >
                Skip
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[#888] text-sm">
                <span className="text-[#aaa] font-semibold">Hint:</span> {item.hint}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => { setStatus('idle'); setInput(''); setShowHint(false) }}
                  className="px-3 py-1.5 rounded-lg border border-[#2a2a2e] text-[#888] text-sm hover:text-white transition-colors"
                >
                  Try again
                </button>
                <button
                  onClick={next}
                  className="px-3 py-1.5 rounded-lg bg-[#1c1c1f] text-[#888] text-sm hover:text-white transition-colors"
                >
                  Skip
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
