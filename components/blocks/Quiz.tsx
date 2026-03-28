'use client'

import { useState } from 'react'
import type { QuizItem } from '@/lib/types'

interface Props {
  data: QuizItem[]
}

type AnswerState = number | null  // index of chosen option, or null

export default function Quiz({ data }: Props) {
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState<AnswerState>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const item = data[index]

  function pick(optIndex: number) {
    if (chosen !== null) return
    setChosen(optIndex)
    if (optIndex === item.ans) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= data.length) {
      setDone(true)
    } else {
      setIndex((i) => i + 1)
      setChosen(null)
    }
  }

  function reset() {
    setIndex(0)
    setChosen(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    return (
      <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-6 text-center space-y-3">
        <p className="text-3xl font-bold text-white">{score}/{data.length}</p>
        <p className="text-[#888] text-sm">
          {score === data.length
            ? '¡Perfecto! 🎉'
            : score >= data.length / 2
            ? 'Bien hecho — casi perfecto'
            : 'Sigue practicando'}
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
          Quiz
        </span>
        <span className="text-[12px] text-[#555]">{index + 1} / {data.length}</span>
      </div>

      <p className="text-[15px] text-white font-medium leading-snug">{item.q}</p>

      <div className="space-y-2">
        {item.opts.map((opt, i) => {
          const isChosen = chosen === i
          const isCorrect = i === item.ans
          const answered = chosen !== null

          let cls = 'w-full px-4 py-2.5 rounded-lg border text-sm text-left transition-colors '
          if (!answered) {
            cls += 'border-[#2a2a2e] bg-[#1c1c1f] text-[#d0d0d5] hover:border-[#444] hover:text-white'
          } else if (isCorrect) {
            cls += 'border-[#1e3a1e] bg-[#0f1f0f] text-[#4ade80] font-semibold'
          } else if (isChosen) {
            cls += 'border-[#3a1e1e] bg-[#1f0f0f] text-[#f87171]'
          } else {
            cls += 'border-[#2a2a2e] bg-[#1c1c1f] text-[#555]'
          }

          return (
            <button key={i} onClick={() => pick(i)} disabled={answered} className={cls}>
              <span className="text-[#555] mr-2 font-mono text-[12px]">
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          )
        })}
      </div>

      {chosen !== null && (
        <button
          onClick={next}
          className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
        >
          {index + 1 < data.length ? 'Next →' : 'See results'}
        </button>
      )}
    </div>
  )
}
