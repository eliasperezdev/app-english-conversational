import { generateText } from "ai"
import { model, maxRetries } from "@/lib/llm"
import type { WritingPrompt } from "@/lib/writing-prompts"

interface WriteRequestBody {
  text: string
  prompt: WritingPrompt
  level: string
  topic: string
}

export interface EvaluationResult {
  overall: string
  score: {
    grammar: number
    vocabulary: number
    coherence: number
    task: number
  }
  good: string[]
  improve: Array<{
    original: string
    suggestion: string
    explanation: string
  }>
  rewrite: string
}

function extractJSON(raw: string): string {
  // Strip markdown code fences if the model wraps its output
  const fence = raw.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fence) return fence[1].trim()
  return raw.trim()
}

function buildSystemPrompt(level: string): string {
  const levelUpper = level.toUpperCase()
  const isSpanish = levelUpper === "A1" || levelUpper === "A2"
  const corrections =
    isSpanish ? 1 : levelUpper === "B1" || levelUpper === "B2" ? 2 : 3
  const language = isSpanish
    ? "Spanish (write all explanations in Spanish to help beginners)"
    : "English"

  return `You are an English writing evaluator. Your job is to evaluate a student's writing submission and return ONLY a valid JSON object — no markdown, no code fences, no extra commentary.

Language for explanations: ${language}.
Level: ${levelUpper}
Maximum corrections in "improve": ${corrections}
${isSpanish ? "Be very encouraging and focus on what the student did well." : ""}
${levelUpper === "C1" ? "Focus on register, precision, and native-like naturalness rather than basic grammar." : ""}

Return this exact JSON structure:
{
  "overall": "encouraging one-sentence summary of the student's writing",
  "score": {
    "grammar": <integer 0-10>,
    "vocabulary": <integer 0-10>,
    "coherence": <integer 0-10>,
    "task": <integer 0-10, did they complete the writing task?>
  },
  "good": ["specific thing done well (2-3 items)"],
  "improve": [
    {
      "original": "exact phrase from their text",
      "suggestion": "improved version",
      "explanation": "why this is better (in ${language})"
    }
  ],
  "rewrite": "a polished version of their complete text preserving their voice"
}

Be specific in "good" and "improve" — reference actual phrases from the student's text.`
}

export async function POST(req: Request) {
  let body: WriteRequestBody
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const { text, prompt, level } = body

  if (!text || !prompt || !level) {
    return Response.json({ error: "Missing required fields: text, prompt, level" }, { status: 400 })
  }

  const userMessage = `Task: ${prompt.instruction}

Student's text:
${text}`

  let raw: string
  try {
    const result = await generateText({
      model,
      maxRetries,
      system: buildSystemPrompt(level),
      prompt: userMessage,
    })
    raw = result.text
  } catch {
    return Response.json({ error: "Failed to contact AI service" }, { status: 502 })
  }

  let evaluation: EvaluationResult
  try {
    evaluation = JSON.parse(extractJSON(raw)) as EvaluationResult
  } catch {
    return Response.json({ error: "Could not parse evaluation response", raw }, { status: 500 })
  }

  return Response.json(evaluation)
}
