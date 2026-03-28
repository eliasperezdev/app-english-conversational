'use client'

import { useState } from 'react'
import type { FlashcardItem } from '@/lib/types'

interface Props {
  data: FlashcardItem[]
}

export default function Flashcard({ data }: Props) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = data[index]

  function prev() {
    setIndex((i) => i - 1)
    setFlipped(false)
  }

  function next() {
    setIndex((i) => i + 1)
    setFlipped(false)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
          Flashcards
        </span>
        <span className="text-[12px] text-[#555]">{index + 1} / {data.length}</span>
      </div>

      {/* Card */}
      <button
        onClick={() => setFlipped((f) => !f)}
        className="w-full rounded-2xl border border-[#2a2a2e] bg-[#111113] p-8 text-center min-h-[140px] flex flex-col items-center justify-center gap-2 hover:border-[#444] transition-colors cursor-pointer"
        aria-label={flipped ? 'Show front' : 'Show back'}
      >
        {!flipped ? (
          <p className="text-xl font-semibold text-white">{card.en}</p>
        ) : (
          <>
            <p className="text-xl font-semibold text-white">{card.es}</p>
            {card.ipa && (
              <p className="font-mono text-[13px] text-[#3a8fd4]">{card.ipa}</p>
            )}
          </>
        )}
        <p className="text-[11px] text-[#444] mt-2">
          {flipped ? 'Tap to see English' : 'Tap to flip'}
        </p>
      </button>

      {/* Navigation */}
      <div className="flex gap-2">
        <button
          onClick={prev}
          disabled={index === 0}
          className="px-4 py-2 rounded-lg border border-[#2a2a2e] text-[#888] text-sm disabled:opacity-30 hover:text-white hover:border-[#444] transition-colors"
        >
          ← Prev
        </button>
        <button
          onClick={() => setFlipped((f) => !f)}
          className="flex-1 px-4 py-2 rounded-lg border border-[#2a2a2e] text-[#888] text-sm hover:text-white hover:border-[#444] transition-colors"
        >
          Flip
        </button>
        <button
          onClick={next}
          disabled={index === data.length - 1}
          className="px-4 py-2 rounded-lg border border-[#2a2a2e] text-[#888] text-sm disabled:opacity-30 hover:text-white hover:border-[#444] transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
