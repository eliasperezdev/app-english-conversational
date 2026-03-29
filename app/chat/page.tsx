"use client"

import { use, useState, useEffect } from "react"
import { ChatInterface } from "@/components/chat-interface"
import { LevelSelector } from "@/components/level-selector"
import PageWrapper from "@/components/ui/page-wrapper"

interface Props {
  searchParams: Promise<{ prefill?: string }>
}

export default function ChatPage({ searchParams }: Props) {
  const { prefill } = use(searchParams)
  // undefined = still loading from localStorage; null = no level saved
  const [level, setLevel] = useState<string | null | undefined>(undefined)
  const [chatKey, setChatKey] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem("chat_level")
    setLevel(saved ?? null)
  }, [])

  const handleLevelSelect = (l: string) => {
    localStorage.setItem("chat_level", l)
    setLevel(l)
  }

  const handleResetLevel = () => {
    localStorage.removeItem("chat_level")
    setLevel(null)
    setChatKey((k) => k + 1)
  }

  if (level === undefined) return null

  if (level === null) {
    return (
      <PageWrapper>
        <LevelSelector onSelect={handleLevelSelect} />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <ChatInterface
        key={chatKey}
        mode="free"
        level={level}
        prefill={prefill}
        onResetLevel={handleResetLevel}
      />
    </PageWrapper>
  )
}
