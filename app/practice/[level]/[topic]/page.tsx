import { notFound } from "next/navigation"
import { ChatInterface } from "@/components/chat-interface"
import { levels } from "@/lib/levels"
import { topics } from "@/lib/topics"

interface Props {
  params: Promise<{ level: string; topic: string }>
}

export default async function PracticeSessionPage({ params }: Props) {
  const { level, topic } = await params
  const levelKey = level.toUpperCase()
  if (!levels[levelKey] || !topics[topic]) notFound()

  return <ChatInterface mode="practice" level={levelKey} topic={topic} />
}
