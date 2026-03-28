'use client'

import { useState, useCallback, useEffect } from 'react'
import type { WordOrderItem } from '@/lib/types'

interface Props {
  data: WordOrderItem[]
}

type Status = 'idle' | 'correct' | 'wrong'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function WordOrder({ data }: Props) {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  // Initialize with original order (matches SSR), shuffle after mount
  const makeState = useCallback(
    (i: number) => ({ pool: [...data[i].words], answer: [] as string[] }),
    [data],
  )

  const [{ pool, answer }, setState] = useState(() => makeState(0))

  useEffect(() => {
    setState((prev) => ({ pool: shuffle(prev.pool), answer: [] }))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const [status, setStatus] = useState<Status>('idle')

  const item = data[index]

  function moveToAnswer(wordIndex: number) {
    if (status !== 'idle') return
    setState((prev) => {
      const newPool = [...prev.pool]
      const [word] = newPool.splice(wordIndex, 1)
      return { pool: newPool, answer: [...prev.answer, word] }
    })
  }

  function moveToPool(wordIndex: number) {
    if (status !== 'idle') return
    setState((prev) => {
      const newAnswer = [...prev.answer]
      const [word] = newAnswer.splice(wordIndex, 1)
      return { pool: [...prev.pool, word], answer: newAnswer }
    })
  }

  function check() {
    const joined = answer.join(' ')
    const correct = joined.toLowerCase() === item.correct.toLowerCase()
    setStatus(correct ? 'correct' : 'wrong')
    if (correct) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= data.length) {
      setDone(true)
    } else {
      const next = index + 1
      setIndex(next)
      setState(makeState(next))
      setStatus('idle')
    }
  }

  function reset() {
    setIndex(0)
    setState(makeState(0))
    setStatus('idle')
    setScore(0)
    setDone(false)
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
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
          Word order
        </span>
        <span className="text-[12px] text-[#555]">{index + 1} / {data.length}</span>
      </div>

      {/* Answer area */}
      <div className="min-h-[44px] rounded-lg border border-dashed border-[#2a2a2e] bg-[#161618] p-2 flex flex-wrap gap-2">
        {answer.length === 0 && (
          <span className="text-[#444] text-sm self-center px-1">
            Tap words below to build the sentence…
          </span>
        )}
        {answer.map((word, i) => (
          <button
            key={i}
            onClick={() => moveToPool(i)}
            className="px-3 py-1.5 rounded-lg bg-[#2a2a2e] text-white text-sm hover:bg-[#C41A1A] transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Word pool */}
      <div className="flex flex-wrap gap-2">
        {pool.map((word, i) => (
          <button
            key={i}
            onClick={() => moveToAnswer(i)}
            className="px-3 py-1.5 rounded-lg border border-[#2a2a2e] bg-[#1c1c1f] text-[#d0d0d5] text-sm hover:border-[#C41A1A] hover:text-white transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      {status === 'idle' && (
        <button
          onClick={check}
          disabled={answer.length === 0}
          className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold disabled:opacity-40 hover:bg-[#a81515] transition-colors"
        >
          Check
        </button>
      )}

      {status === 'correct' && (
        <div className="space-y-2">
          <p className="text-[#4ade80] text-sm font-semibold">✓ Correct!</p>
          <p className="text-[#888] text-sm">{item.translation}</p>
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
          >
            {index + 1 < data.length ? 'Next →' : 'See results'}
          </button>
        </div>
      )}

      {status === 'wrong' && (
        <div className="space-y-2">
          <p className="text-[#f87171] text-sm font-semibold">✗ Not quite</p>
          <p className="text-[#888] text-sm">
            Correct: <span className="text-[#aaa]">{item.correct}</span>
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => { setState(makeState(index)); setStatus('idle') }}
              className="px-3 py-1.5 rounded-lg border border-[#2a2a2e] text-[#888] text-sm hover:text-white transition-colors"
            >
              Try again
            </button>
            <button
              onClick={next}
              className="px-3 py-1.5 rounded-lg bg-[#1c1c1f] text-[#888] text-sm hover:text-white transition-colors"
            >
              {index + 1 < data.length ? 'Next →' : 'See results'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
