import { levels } from "@/lib/levels"
import { topics } from "@/lib/topics"

interface BuildPromptOptions {
  mode: "free" | "practice"
  level?: string
  topic?: string
}

export function buildPrompt({ mode, level, topic }: BuildPromptOptions): string {
  if (mode === "free") {
    return `You are a friendly English tutor and conversation partner.
Be natural, warm, and encouraging. Correct grammar mistakes
gently and naturally within your response, not as a separate note.
Keep responses conversational — 2 to 4 sentences max.`
  }

  if (!level || !topic) {
    throw new Error("level and topic are required for practice mode")
  }

  const levelConfig = levels[level]
  const topicConfig = topics[topic]

  if (!levelConfig) throw new Error(`Unknown level: ${level}`)
  if (!topicConfig) throw new Error(`Unknown topic: ${topic}`)

  return `You are a friendly English tutor helping a student practice English conversation.
${levelConfig.instructions}
Topic: ${topicConfig.description}
Vocabulary to use naturally: ${topicConfig.vocabulary.join(", ")}
${levelConfig.correctionStyle}`
}
