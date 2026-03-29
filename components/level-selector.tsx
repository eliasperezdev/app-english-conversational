"use client"

import { useState } from "react"

interface LevelOption {
  value: string
  badge: string
  label: string
  description: string
}

const LEVEL_OPTIONS: LevelOption[] = [
  {
    value: "A1",
    badge: "A1",
    label: "Beginner",
    description: "I know very little English — basic words and simple phrases.",
  },
  {
    value: "A2",
    badge: "A2",
    label: "Elementary",
    description: "I can handle short conversations on familiar everyday topics.",
  },
  {
    value: "B1",
    badge: "B1",
    label: "Intermediate",
    description: "I can express myself on most everyday subjects.",
  },
  {
    value: "B2",
    badge: "B2",
    label: "Upper Intermediate",
    description: "I can discuss complex topics and follow nuanced conversations.",
  },
  {
    value: "C1",
    badge: "C1",
    label: "Advanced",
    description: "I speak fluently and use sophisticated language naturally.",
  },
  {
    value: "adaptive",
    badge: "🎯",
    label: "Not sure",
    description: "Let the tutor assess my level and adapt automatically.",
  },
]

interface Props {
  onSelect: (level: string) => void
}

export function LevelSelector({ onSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="flex flex-col flex-1 items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        <h1 className="text-white text-2xl font-semibold text-center mb-2">
          Choose your level
        </h1>
        <p className="text-[#888] text-sm text-center mb-8">
          The tutor will adapt its language and corrections to you.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {LEVEL_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelected(opt.value)}
              className={`rounded-xl border p-4 text-left transition-colors cursor-pointer bg-[#161618] ${
                selected === opt.value
                  ? "border-[#C41A1A]"
                  : "border-[#2a2a2e] hover:border-[#555]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#C41A1A] text-white text-xs font-bold">
                  {opt.badge}
                </span>
                <span className="text-[#d0d0d5] text-sm font-medium">{opt.label}</span>
              </div>
              <p className="text-[#888] text-xs leading-relaxed">{opt.description}</p>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => { if (selected) onSelect(selected) }}
          disabled={!selected}
          className="w-full py-3 rounded-xl bg-[#C41A1A] text-white font-semibold text-sm hover:bg-[#a81616] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Start conversation
        </button>
      </div>
    </div>
  )
}
