"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { levels } from "@/lib/levels"
import { topics } from "@/lib/topics"

export default function PracticePage() {
  const levelKeys = Object.keys(levels)
  const topicKeys = Object.keys(topics)
  const [selectedLevel, setSelectedLevel] = useState(levelKeys[2]) // default B1

  return (
    <main className="min-h-screen bg-[#0e0e0f] flex flex-col">
      {/* Topbar */}
      <header className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#2a2a2e] bg-[#161618]">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-[#888] hover:text-[#d0d0d5] transition-colors">
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
          <span className="px-2.5 py-0.5 rounded-full bg-[#C41A1A] text-white text-xs md:text-sm font-semibold uppercase tracking-wide">
            Practice
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C41A1A]" />
          <span className="text-xs md:text-sm text-[#888]">live</span>
        </div>
      </header>

      <div className="flex-1 px-4 md:px-8 py-8 md:py-10 max-w-2xl md:max-w-3xl mx-auto w-full">
        {/* Level selector */}
        <section className="mb-10">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#888] mb-4">
            Your level
          </p>
          <div className="flex gap-2 md:gap-3 flex-wrap">
            {levelKeys.map((key) => {
              const active = key === selectedLevel
              return (
                <button
                  key={key}
                  onClick={() => setSelectedLevel(key)}
                  className={`flex flex-col items-center px-5 md:px-6 py-3 md:py-4 rounded-xl border transition-colors ${
                    active
                      ? "bg-[#C41A1A] border-[#C41A1A] text-white"
                      : "bg-[#161618] border-[#2a2a2e] text-[#d0d0d5] hover:border-[#C41A1A]"
                  }`}
                >
                  <span className="text-base md:text-lg font-bold">{key}</span>
                  <span className={`text-[11px] md:text-[13px] mt-0.5 ${active ? "text-white/70" : "text-[#888]"}`}>
                    {levels[key].label}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Topic cards */}
        <section>
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#888] mb-4">
            Choose a topic
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-3 sm:grid-cols-2">
            {topicKeys.map((topicKey) => (
              <Link
                key={topicKey}
                href={`/practice/${selectedLevel.toLowerCase()}/${topicKey}`}
                className="group flex items-center justify-between bg-[#161618] border border-[#2a2a2e] rounded-xl px-4 md:px-5 py-4 md:py-5 hover:border-[#C41A1A] transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-[15px] md:text-[17px] font-medium text-white">
                    {topics[topicKey].label}
                  </p>
                  <p className="text-[13px] md:text-[15px] text-[#888] mt-0.5 line-clamp-1">
                    {topics[topicKey].description}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-[#888] group-hover:text-[#C41A1A] shrink-0 ml-3 transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
