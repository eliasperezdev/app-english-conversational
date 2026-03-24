import { streamText, convertToModelMessages, UI_MESSAGE_STREAM_HEADERS } from "ai"
import type { UIMessage } from "ai"
import { model, maxRetries } from "@/lib/llm"
import { buildPrompt } from "@/lib/prompts"

interface ChatRequestBody {
  messages: UIMessage[]
  mode: "free" | "practice"
  level?: string
  topic?: string
}

export async function POST(req: Request) {
  const body: ChatRequestBody = await req.json()
  const { messages, mode, level, topic } = body

  if (!messages || !mode) {
    return new Response("Missing required fields: messages, mode", { status: 400 })
  }

  if (mode === "practice" && (!level || !topic)) {
    return new Response("Missing level or topic for practice mode", { status: 400 })
  }

  const systemPrompt = buildPrompt({ mode, level, topic })
  const contextMessages = messages.slice(-20)

  const result = streamText({
    model,
    maxRetries,
    system: systemPrompt,
    messages: await convertToModelMessages(contextMessages),
  })

  return result.toUIMessageStreamResponse({
    headers: UI_MESSAGE_STREAM_HEADERS,
  })
}
