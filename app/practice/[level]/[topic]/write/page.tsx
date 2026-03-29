import { notFound } from "next/navigation"
import { levels } from "@/lib/levels"
import { topics } from "@/lib/topics"
import { getPromptsForTopic } from "@/lib/writing-prompts"
import { WriteView } from "@/components/write/WriteView"
import PageWrapper from "@/components/ui/page-wrapper"
import { BackButton } from "@/components/ui/back-button"

interface Props {
  params: Promise<{ level: string; topic: string }>
}

export default async function WritePracticePage({ params }: Props) {
  const { level, topic } = await params
  const levelKey = level.toUpperCase()

  if (!levels[levelKey] || !topics[topic]) notFound()

  const prompts = getPromptsForTopic(levelKey, topic)
  if (prompts.length === 0) notFound()

  return (
    <PageWrapper>
      <header className="shrink-0 border-b border-[#2a2a2e] bg-[#161618] px-4 py-3">
        <BackButton label={topics[topic].label} href={`/practice/${level}/${topic}`} />
      </header>
      <WriteView prompts={prompts} level={level} topic={topic} />
    </PageWrapper>
  )
}
