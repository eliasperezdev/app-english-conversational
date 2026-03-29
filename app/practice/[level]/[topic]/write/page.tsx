import { notFound } from "next/navigation"
import { levels } from "@/lib/levels"
import { topics } from "@/lib/topics"
import { getPromptsForTopic } from "@/lib/writing-prompts"
import { WriteView } from "@/components/write/WriteView"

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
    <main>
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-2">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-medium text-[#888] border border-[#2a2a2e] rounded-full px-2.5 py-1">
            {levels[levelKey].label}
          </span>
          <span className="text-xs text-[#555]">·</span>
          <span className="text-xs text-[#888]">{topics[topic].label}</span>
          <span className="text-xs text-[#555]">·</span>
          <span className="text-xs text-[#888]">Writing practice</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">Writing Practice</h1>
        <p className="text-[#888] text-sm mb-0">
          {topics[topic].description}
        </p>
      </div>
      <WriteView prompts={prompts} level={level} topic={topic} />
    </main>
  )
}
