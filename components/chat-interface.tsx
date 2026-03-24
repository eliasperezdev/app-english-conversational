"use client"

import { useRef, useEffect, useState, useMemo, FormEvent } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import type { TextUIPart } from "ai"
import { MessageBubble } from "@/components/message-bubble"
import { VoiceControls } from "@/components/voice-controls"
import { TtsPlayer } from "@/components/tts-player"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { topics } from "@/lib/topics"
import { levels } from "@/lib/levels"

interface Props {
  mode: "free" | "practice"
  level?: string
  topic?: string
}

function getTextFromLastAssistantMessage(
  messages: ReturnType<typeof useChat>["messages"]
): string | null {
  const last = [...messages].reverse().find((m) => m.role === "assistant")
  if (!last) return null
  return (
    last.parts
      .filter((p): p is TextUIPart => p.type === "text")
      .map((p) => p.text)
      .join("") || null
  )
}

export function ChatInterface({ mode, level, topic }: Props) {
  const [input, setInput] = useState("")
  const [ttsEnabled, setTtsEnabled] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [pendingTts, setPendingTts] = useState<{ text: string; id: number } | null>(null)
  const ttsIdRef = useRef(0)
  const lastQueuedMsgIdRef = useRef<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const audioUnlockedRef = useRef(false)

  const topicConfig = topic ? topics[topic] : null
  const levelConfig = level ? levels[level] : null
  const backHref = mode === "free" ? "/" : "/practice"
  const hints = topicConfig?.vocabulary.slice(0, 3) ?? []

  const badgeLabel =
    mode === "practice"
      ? (topicConfig?.label ?? topic ?? "").toUpperCase()
      : "FREE CHAT"

  const sessionLabel =
    mode === "practice"
      ? `Session started · ${level} · ${topicConfig?.label ?? topic}`
      : "Session started"

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat", body: { mode, level, topic } }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const { messages, sendMessage, status } = useChat({ transport })
  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (status !== "ready") return
    const last = [...messages].reverse().find((m) => m.role === "assistant")
    if (!last) return
    if (last.id === lastQueuedMsgIdRef.current) return
    const text = getTextFromLastAssistantMessage(messages)
    if (!text) return
    lastQueuedMsgIdRef.current = last.id
    setPendingTts({ text, id: ++ttsIdRef.current })
  }, [status, messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const unlockAudio = () => {
    if (audioUnlockedRef.current || typeof window === "undefined") return
    const silent = new SpeechSynthesisUtterance("")
    silent.volume = 0
    window.speechSynthesis.speak(silent)
    window.speechSynthesis.cancel()
    audioUnlockedRef.current = true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return
    unlockAudio()
    setInput("")
    await sendMessage({ text })
  }

  const handleTranscript = async (text: string) => {
    unlockAudio()
    setIsListening(false)
    const trimmed = text.trim()
    if (!trimmed || isLoading) return
    await sendMessage({ text: trimmed })
  }

  const handleHintClick = async (phrase: string) => {
    if (isLoading) return
    unlockAudio()
    await sendMessage({ text: phrase })
  }

  void levelConfig

  return (
    <div className="flex flex-col h-dvh bg-[#0e0e0f] text-[#d0d0d5]">
      {/* Topbar */}
      <header className="shrink-0 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#2a2a2e] bg-[#161618]">
        <div className="flex items-center gap-3">
          <Link
            href={backHref}
            className="text-[#888] hover:text-[#d0d0d5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <span className="px-2.5 py-0.5 rounded-full bg-[#C41A1A] text-white text-xs md:text-sm font-semibold uppercase tracking-wide">
            {badgeLabel}
          </span>
          {level && (
            <span className="text-xs md:text-sm text-[#888] font-medium">{level}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C41A1A]" />
          <span className="text-xs md:text-sm text-[#888]">live</span>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:py-8 space-y-4 md:space-y-5">
        {/* Session pill */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#161618] border border-[#2a2a2e] text-[13px] md:text-[15px] text-[#888]">
            {sessionLabel}
          </span>
        </div>

        {messages.length === 0 && (
          <p className="text-center text-[#888] text-sm md:text-base pt-4">
            {mode === "free"
              ? "Say something to start the conversation..."
              : `Practice ${topicConfig?.label ?? topic} at ${level} level`}
          </p>
        )}

        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#C41A1A] flex items-center justify-center shrink-0">
              <span className="text-white text-xs md:text-sm font-bold">E</span>
            </div>
            <div className="bg-[#161618] border border-[#2a2a2e] rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1.5 items-center">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="shrink-0 border-t border-[#2a2a2e] bg-[#161618] px-4 md:px-6 pt-3 md:pt-4 pb-[max(12px,env(safe-area-inset-bottom))]">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 md:gap-3">
          <input
            className="flex-1 bg-[#0e0e0f] border border-[#2a2a2e] rounded-full px-4 md:px-5 py-2 md:py-3 text-sm md:text-base text-[#d0d0d5] placeholder:text-[#888] outline-none focus:border-[#C41A1A] transition-colors disabled:opacity-50"
            placeholder="Type or speak in English..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => bottomRef.current?.scrollIntoView({ behavior: "smooth" })}
            disabled={isLoading}
          />
          {input.trim() && (
            <button
              type="submit"
              disabled={isLoading}
              className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#C41A1A] flex items-center justify-center text-white hover:bg-[#a81616] transition-colors disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          )}
          <VoiceControls
            isListening={isListening}
            onToggle={() => setIsListening((v) => !v)}
            onTranscript={handleTranscript}
            disabled={isLoading}
          />
        </form>

        {/* Hint chips */}
        {hints.length > 0 && (
          <div className="flex gap-2 mt-2 md:mt-3 flex-wrap">
            {hints.map((phrase) => (
              <button
                key={phrase}
                type="button"
                onClick={() => handleHintClick(phrase)}
                disabled={isLoading}
                className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-[#0e0e0f] border border-[#2a2a2e] text-[13px] md:text-[15px] text-[#888] hover:border-[#C41A1A] hover:text-[#C41A1A] transition-colors disabled:opacity-40 cursor-pointer"
              >
                {phrase}
              </button>
            ))}
          </div>
        )}

        {/* TTS toggle */}
        <div className="flex justify-end mt-1">
          <TtsPlayer
            enabled={ttsEnabled}
            onToggle={() => setTtsEnabled((v) => !v)}
            isSpeaking={isSpeaking}
            onSpeakingChange={setIsSpeaking}
            textToSpeak={pendingTts}
          />
        </div>
      </div>
    </div>
  )
}
