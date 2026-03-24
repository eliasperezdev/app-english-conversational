import { createGoogleGenerativeAI } from "@ai-sdk/google"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export const model = google(process.env.GEMINI_MODEL ?? "gemini-2.5-flash")

export const maxRetries = Number(process.env.LLM_MAX_RETRIES ?? 3)
