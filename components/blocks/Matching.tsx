'use client'

import { useState, useEffect } from 'react'
import type { MatchingData } from '@/lib/types'

interface Props {
  data: MatchingData
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Matching({ data }: Props) {
  const pairs = data.pairs
  const identity = pairs.map((_, i) => i)

  // Initialize with original order (matches SSR), shuffle after mount
  const [enOrder, setEnOrder] = useState(identity)
  const [esOrder, setEsOrder] = useState(identity)

  useEffect(() => {
    setEnOrder(shuffle(pairs.map((_, i) => i)))
    setEsOrder(shuffle(pairs.map((_, i) => i)))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // pairIndex of selected item in each column (-1 = none)
  const [selEn, setSelEn] = useState(-1)
  const [selEs, setSelEs] = useState(-1)

  // Set of matched pair indices
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [wrong, setWrong] = useState(false)
  const [done, setDone] = useState(false)

  function selectEn(pairIdx: number) {
    if (matched.has(pairIdx)) return
    const newSel = selEn === pairIdx ? -1 : pairIdx
    setSelEn(newSel)
    if (newSel !== -1 && selEs !== -1) attempt(newSel, selEs)
  }

  function selectEs(pairIdx: number) {
    if (matched.has(pairIdx)) return
    const newSel = selEs === pairIdx ? -1 : pairIdx
    setSelEs(newSel)
    if (selEn !== -1 && newSel !== -1) attempt(selEn, newSel)
  }

  function attempt(enIdx: number, esIdx: number) {
    if (enIdx === esIdx) {
      const next = new Set(matched)
      next.add(enIdx)
      setMatched(next)
      setSelEn(-1)
      setSelEs(-1)
      if (next.size === pairs.length) setDone(true)
    } else {
      setWrong(true)
      setTimeout(() => {
        setWrong(false)
        setSelEn(-1)
        setSelEs(-1)
      }, 700)
    }
  }

  function reset() {
    setSelEn(-1)
    setSelEs(-1)
    setMatched(new Set())
    setWrong(false)
    setDone(false)
  }

  if (done) {
    return (
      <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-6 text-center space-y-3">
        <p className="text-3xl">🎉</p>
        <p className="text-white font-semibold">All matched!</p>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
        >
          Play again
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-5 space-y-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
        Matching · {matched.size}/{pairs.length} matched
      </span>

      <div className="grid grid-cols-2 gap-3">
        {/* EN column */}
        <div className="space-y-2">
          {enOrder.map((pairIdx) => {
            const isMatched = matched.has(pairIdx)
            const isSel = selEn === pairIdx
            const isWrong = wrong && isSel
            return (
              <button
                key={pairIdx}
                onClick={() => selectEn(pairIdx)}
                disabled={isMatched}
                className={`w-full px-3 py-2 rounded-lg border text-sm text-left transition-colors ${
                  isMatched
                    ? 'border-[#1e3a1e] bg-[#0f1f0f] text-[#4ade80]'
                    : isWrong
                    ? 'border-[#f87171] bg-[#1f0f0f] text-[#f87171]'
                    : isSel
                    ? 'border-[#C41A1A] bg-[#1f0a0a] text-white'
                    : 'border-[#2a2a2e] bg-[#1c1c1f] text-[#d0d0d5] hover:border-[#444]'
                }`}
              >
                {pairs[pairIdx].en}
              </button>
            )
          })}
        </div>

        {/* ES column */}
        <div className="space-y-2">
          {esOrder.map((pairIdx) => {
            const isMatched = matched.has(pairIdx)
            const isSel = selEs === pairIdx
            const isWrong = wrong && isSel
            return (
              <button
                key={pairIdx}
                onClick={() => selectEs(pairIdx)}
                disabled={isMatched}
                className={`w-full px-3 py-2 rounded-lg border text-sm text-left transition-colors ${
                  isMatched
                    ? 'border-[#1e3a1e] bg-[#0f1f0f] text-[#4ade80]'
                    : isWrong
                    ? 'border-[#f87171] bg-[#1f0f0f] text-[#f87171]'
                    : isSel
                    ? 'border-[#C41A1A] bg-[#1f0a0a] text-white'
                    : 'border-[#2a2a2e] bg-[#1c1c1f] text-[#d0d0d5] hover:border-[#444]'
                }`}
              >
                {pairs[pairIdx].es}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
