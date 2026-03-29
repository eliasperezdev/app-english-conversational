"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import type { WritingPrompt } from "@/lib/writing-prompts"
import type { EvaluationResult } from "@/app/api/write/route"

interface WriteViewProps {
  prompts: WritingPrompt[]
  level: string
  topic: string
}

const FORMAT_LABELS: Record<WritingPrompt["format"], string> = {
  email: "Email",
  message: "Message",
  opinion: "Opinion piece",
  description: "Description",
  story: "Story",
}

const FORMAT_COLORS: Record<WritingPrompt["format"], string> = {
  email: "bg-blue-900/40 text-blue-300 border border-blue-700/50",
  message: "bg-teal-900/40 text-teal-300 border border-teal-700/50",
  opinion: "bg-amber-900/40 text-amber-300 border border-amber-700/50",
  description: "bg-purple-900/40 text-purple-300 border border-purple-700/50",
  story: "bg-rose-900/40 text-rose-300 border border-rose-700/50",
}

function countWords(text: string): number {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).filter(Boolean).length
}

function scoreColor(score: number): string {
  if (score >= 8) return "text-green-400"
  if (score >= 5) return "text-amber-400"
  return "text-red-400"
}

function scoreBg(score: number): string {
  if (score >= 8) return "bg-green-950/60 border-green-800/60"
  if (score >= 5) return "bg-amber-950/60 border-amber-800/60"
  return "bg-red-950/60 border-red-800/60"
}

// ─── Prompt State ─────────────────────────────────────────────────────────────

function PromptState({
  prompt,
  onNewPrompt,
  onSubmit,
}: {
  prompt: WritingPrompt
  onNewPrompt: () => void
  onSubmit: (text: string) => void
}) {
  const [text, setText] = useState("")
  const [tipsOpen, setTipsOpen] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const wordCount = countWords(text)
  const [min, max] = prompt.wordRange
  const inRange = wordCount >= min && wordCount <= max
  const wordCountColor =
    wordCount === 0
      ? "text-[#888]"
      : inRange
        ? "text-green-400"
        : "text-red-400"

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value)
    const el = e.target
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }

  return (
    <div className="max-w-2xl mx-auto w-full space-y-6">
      {/* Header row */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${FORMAT_COLORS[prompt.format]}`}>
          {FORMAT_LABELS[prompt.format]}
        </span>
        <span className="text-xs text-[#888] border border-[#2a2a2e] rounded-full px-2.5 py-1">
          {min}–{max} words
        </span>
        <button
          onClick={onNewPrompt}
          className="ml-auto text-xs text-[#888] hover:text-white transition-colors"
        >
          New prompt ↺
        </button>
      </div>

      {/* Prompt title */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">{prompt.title}</h2>
        <p className="text-[#d0d0d5] leading-relaxed">{prompt.instruction}</p>
      </div>

      {/* Tips */}
      <div className="rounded-lg border border-[#2a2a2e] overflow-hidden">
        <button
          onClick={() => setTipsOpen(o => !o)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm text-[#d0d0d5] hover:text-white transition-colors"
        >
          <span className="font-medium">Tips</span>
          <span className="text-[#888] text-xs">{tipsOpen ? "▲" : "▼"}</span>
        </button>
        {tipsOpen && (
          <ul className="px-4 pb-4 space-y-1.5 border-t border-[#2a2a2e]">
            {prompt.tips.map((tip, i) => (
              <li key={i} className="text-sm text-[#888] flex gap-2">
                <span className="text-[#555] shrink-0">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Textarea */}
      <div className="rounded-lg border border-[#2a2a2e] bg-[#111113] overflow-hidden focus-within:border-[#444]">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          placeholder="Start writing here…"
          rows={6}
          className="w-full bg-transparent text-[#d0d0d5] placeholder-[#555] p-4 resize-none outline-none text-base leading-relaxed"
          style={{ minHeight: "160px" }}
        />
        <div className="px-4 py-2 border-t border-[#2a2a2e] flex items-center justify-between">
          <span className={`text-xs font-mono ${wordCountColor}`}>
            {wordCount} words
            {wordCount > 0 && !inRange && (
              <span className="text-[#555]"> · target {min}–{max}</span>
            )}
          </span>
          {wordCount >= min && wordCount > max && (
            <span className="text-xs text-red-400">Too long — trim {wordCount - max} words</span>
          )}
          {wordCount > 0 && wordCount < min && (
            <span className="text-xs text-amber-400">{min - wordCount} more words needed</span>
          )}
        </div>
      </div>

      {/* Submit */}
      <button
        disabled={!inRange}
        onClick={() => onSubmit(text)}
        className={`w-full py-3 rounded-lg font-medium text-sm transition-colors ${
          inRange
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-[#161618] text-[#555] cursor-not-allowed border border-[#2a2a2e]"
        }`}
      >
        Submit for feedback →
      </button>
    </div>
  )
}

// ─── Loading State ────────────────────────────────────────────────────────────

function LoadingState() {
  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col items-center gap-6 py-16">
      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[#888] animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-[#888] text-sm">Analysing your writing…</p>
    </div>
  )
}

// ─── Feedback State ───────────────────────────────────────────────────────────

function FeedbackState({
  result,
  onSamePrompt,
  onNewPrompt,
  level,
  topic,
}: {
  result: EvaluationResult
  onSamePrompt: () => void
  onNewPrompt: () => void
  level: string
  topic: string
}) {
  const [rewriteOpen, setRewriteOpen] = useState(false)

  const scores = [
    { label: "Grammar", value: result.score.grammar },
    { label: "Vocabulary", value: result.score.vocabulary },
    { label: "Coherence", value: result.score.coherence },
    { label: "Task", value: result.score.task },
  ]

  return (
    <div className="max-w-2xl mx-auto w-full space-y-6">
      {/* Overall */}
      <p className="text-lg text-white leading-relaxed">{result.overall}</p>

      {/* Score pills */}
      <div className="flex flex-wrap gap-3">
        {scores.map(s => (
          <div
            key={s.label}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${scoreBg(s.value)}`}
          >
            <span className="text-[#888]">{s.label}</span>
            <span className={`font-semibold tabular-nums ${scoreColor(s.value)}`}>
              {s.value}/10
            </span>
          </div>
        ))}
      </div>

      {/* Good / Improve */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* What you did well */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-[#888] uppercase tracking-wider">
            What you did well
          </h3>
          <ul className="space-y-2">
            {result.good.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 p-3 rounded-lg border-l-2 border-green-600 bg-green-950/20 text-sm text-[#d0d0d5]"
              >
                <span className="text-green-500 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to improve */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-[#888] uppercase tracking-wider">
            What to improve
          </h3>
          {result.improve.length === 0 ? (
            <p className="text-sm text-[#888] italic p-3">
              No corrections needed — excellent work!
            </p>
          ) : (
            <ul className="space-y-3">
              {result.improve.map((item, i) => (
                <li
                  key={i}
                  className="p-3 rounded-lg bg-[#161618] border border-[#2a2a2e] space-y-2 text-sm"
                >
                  <div className="flex items-start gap-2 flex-wrap">
                    <span className="text-red-400 line-through break-words">
                      "{item.original}"
                    </span>
                    <span className="text-[#555]">→</span>
                    <span className="text-green-400 break-words">
                      "{item.suggestion}"
                    </span>
                  </div>
                  <p className="text-[#888]">{item.explanation}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Rewrite (collapsible) */}
      <div className="rounded-lg border border-[#2a2a2e] overflow-hidden">
        <button
          onClick={() => setRewriteOpen(o => !o)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm text-[#d0d0d5] hover:text-white transition-colors"
        >
          <span className="font-medium">See a polished version</span>
          <span className="text-[#888] text-xs">{rewriteOpen ? "▲" : "▼"}</span>
        </button>
        {rewriteOpen && (
          <div className="border-t border-[#2a2a2e] p-4 space-y-3">
            <p className="text-[#d0d0d5] leading-relaxed text-sm whitespace-pre-wrap">
              {result.rewrite}
            </p>
            <p className="text-xs text-[#555] italic">
              Use this as a reference, not a copy.
            </p>
          </div>
        )}
      </div>

      {/* Bottom actions */}
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          onClick={onSamePrompt}
          className="flex-1 min-w-[140px] py-2.5 px-4 rounded-lg border border-[#2a2a2e] text-sm text-[#d0d0d5] hover:text-white hover:border-[#444] transition-colors"
        >
          Try again — same prompt
        </button>
        <button
          onClick={onNewPrompt}
          className="flex-1 min-w-[140px] py-2.5 px-4 rounded-lg border border-[#2a2a2e] text-sm text-[#d0d0d5] hover:text-white hover:border-[#444] transition-colors"
        >
          New prompt
        </button>
        <Link
          href={`/practice/${level}/${topic}`}
          className="flex-1 min-w-[140px] py-2.5 px-4 rounded-lg text-center border border-[#2a2a2e] text-sm text-[#d0d0d5] hover:text-white hover:border-[#444] transition-colors"
        >
          Back to practice
        </Link>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

type ViewState = "prompt" | "loading" | "feedback"

export function WriteView({ prompts, level, topic }: WriteViewProps) {
  const [promptIdx, setPromptIdx] = useState(0)
  const [viewState, setViewState] = useState<ViewState>("prompt")
  const [result, setResult] = useState<EvaluationResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const currentPrompt = prompts[promptIdx]

  const handleNewPrompt = useCallback(() => {
    setPromptIdx(idx => (idx + 1) % prompts.length)
    setViewState("prompt")
    setResult(null)
    setError(null)
  }, [prompts.length])

  const handleSamePrompt = useCallback(() => {
    setViewState("prompt")
    setResult(null)
    setError(null)
  }, [])

  const handleSubmit = useCallback(
    async (text: string) => {
      setViewState("loading")
      setError(null)

      try {
        const res = await fetch("/api/write", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, prompt: currentPrompt, level, topic }),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error((data as { error?: string }).error ?? "Evaluation failed")
        }

        const evaluation: EvaluationResult = await res.json()
        setResult(evaluation)
        setViewState("feedback")
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong")
        setViewState("prompt")
      }
    },
    [currentPrompt, level, topic]
  )

  return (
    <div className="min-h-screen bg-[#0e0e0f] px-4 py-10">
      {error && (
        <div className="max-w-2xl mx-auto mb-6 p-3 rounded-lg bg-red-950/40 border border-red-800/50 text-red-300 text-sm">
          {error}
        </div>
      )}

      {viewState === "prompt" && (
        <PromptState
          prompt={currentPrompt}
          onNewPrompt={handleNewPrompt}
          onSubmit={handleSubmit}
        />
      )}

      {viewState === "loading" && <LoadingState />}

      {viewState === "feedback" && result && (
        <FeedbackState
          result={result}
          onSamePrompt={handleSamePrompt}
          onNewPrompt={handleNewPrompt}
          level={level}
          topic={topic}
        />
      )}
    </div>
  )
}
