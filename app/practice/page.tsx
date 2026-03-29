"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { levels } from "@/lib/levels"
import { topics, topicsByLevel } from "@/lib/topics"
import PageWrapper from "@/components/ui/page-wrapper"
import { BackButton } from "@/components/ui/back-button"

export default function PracticePage() {
  const levelKeys = Object.keys(levels)
  const [selectedLevel, setSelectedLevel] = useState(levelKeys[2]) // default B1
  const topicKeys = topicsByLevel[selectedLevel] ?? []

  return (
    <PageWrapper>
      {/* Topbar */}
      <header className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-[#2a2a2e] bg-[#161618]">
        <div className="flex items-center gap-3">
          <BackButton label="Home" href="/" />
          <span className="px-2.5 py-0.5 rounded-full bg-[#C41A1A] text-white text-xs font-semibold uppercase tracking-wide">
            Practice
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C41A1A]" />
          <span className="text-xs text-[#888]">live</span>
        </div>
      </header>

      <div className="flex-1 px-4 py-8 w-full">
        {/* Level selector */}
        <section className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888] mb-4">
            Your level
          </p>
          <div className="flex gap-2 flex-wrap">
            {levelKeys.map((key) => {
              const active = key === selectedLevel
              return (
                <button
                  key={key}
                  onClick={() => setSelectedLevel(key)}
                  className={`flex flex-col items-center px-5 py-3 rounded-xl border transition-colors ${
                    active
                      ? "bg-[#C41A1A] border-[#C41A1A] text-white"
                      : "bg-[#161618] border-[#2a2a2e] text-[#d0d0d5] hover:border-[#C41A1A]"
                  }`}
                >
                  <span className="text-base font-bold">{key}</span>
                  <span className={`text-[11px] mt-0.5 ${active ? "text-white/70" : "text-[#888]"}`}>
                    {levels[key].label}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Topic cards */}
        <section>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#888] mb-4">
            Choose a topic
          </p>
          <div className="grid grid-cols-1 gap-2">
            {topicKeys.map((topicKey) => (
              <Link
                key={topicKey}
                href={`/practice/${selectedLevel.toLowerCase()}/${topicKey}`}
                className="group flex items-center justify-between bg-[#161618] border border-[#2a2a2e] rounded-xl px-4 py-4 hover:border-[#C41A1A] transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-white">
                    {topics[topicKey].label}
                  </p>
                  <p className="text-[13px] text-[#888] mt-0.5 line-clamp-1">
                    {topics[topicKey].description}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-[#888] group-hover:text-[#C41A1A] shrink-0 ml-3 transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
