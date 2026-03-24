import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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

  const levelConfig = levels[levelKey]
  const topicConfig = topics[topic]

  return (
    <main className="flex flex-col h-dvh">
      <header className="flex items-center gap-3 border-b px-4 py-3 shrink-0">
        <Link
          href="/practice"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-sm font-medium truncate">{topicConfig.label}</h1>
          <p className="text-xs text-muted-foreground">
            {levelKey} · {levelConfig.label}
          </p>
        </div>
      </header>
      <div className="flex-1 overflow-hidden">
        <ChatInterface mode="practice" level={levelKey} topic={topic} />
      </div>
    </main>
  )
}
