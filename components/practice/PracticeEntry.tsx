"use client"

import { useState } from "react"
import Link from "next/link"
import { ChatInterface } from "@/components/chat-interface"
import type { LevelConfig } from "@/lib/levels"
import type { TopicConfig } from "@/lib/topics"

interface PracticeEntryProps {
  level: string
  levelKey: string
  topic: string
  levelConfig: LevelConfig
  topicConfig: TopicConfig
}

export function PracticeEntry({
  level,
  levelKey,
  topic,
  levelConfig,
  topicConfig,
}: PracticeEntryProps) {
  const [mode, setMode] = useState<"select" | "conversation">("select")

  if (mode === "conversation") {
    return <ChatInterface mode="practice" level={levelKey} topic={topic} />
  }

  return (
    <div className="min-h-screen bg-[#0e0e0f] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full space-y-8">
        {/* Level + topic header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-medium text-[#888] border border-[#2a2a2e] rounded-full px-2.5 py-1">
              {levelConfig.label}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white">{topicConfig.label}</h1>
          <p className="text-[#888] text-sm">{topicConfig.description}</p>
        </div>

        {/* Mode cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => setMode("conversation")}
            className="group flex flex-col gap-3 p-6 rounded-xl bg-[#161618] border border-[#2a2a2e] hover:border-[#444] hover:bg-[#1a1a1c] transition-all text-left"
          >
            <span className="text-3xl">💬</span>
            <div>
              <p className="font-semibold text-white group-hover:text-white/90">
                Conversation
              </p>
              <p className="text-xs text-[#888] mt-1 leading-relaxed">
                Chat freely with an AI tutor. Get corrections and practice speaking naturally.
              </p>
            </div>
          </button>

          <Link
            href={`/practice/${level}/${topic}/write`}
            className="group flex flex-col gap-3 p-6 rounded-xl bg-[#161618] border border-[#2a2a2e] hover:border-[#444] hover:bg-[#1a1a1c] transition-all"
          >
            <span className="text-3xl">✍️</span>
            <div>
              <p className="font-semibold text-white group-hover:text-white/90">
                Writing Practice
              </p>
              <p className="text-xs text-[#888] mt-1 leading-relaxed">
                Respond to a writing prompt and receive detailed structured feedback.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
