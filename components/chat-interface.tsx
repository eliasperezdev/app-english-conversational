"use client"

import { useRef, useEffect, useState, useMemo, FormEvent } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import type { TextUIPart } from "ai"
import { MessageBubble } from "@/components/message-bubble"
import { VoiceControls } from "@/components/voice-controls"
import { TtsPlayer } from "@/components/tts-player"
import { Button } from "@/components/ui/button"
import { SendHorizonal } from "lucide-react"

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
  return last.parts
    .filter((p): p is TextUIPart => p.type === "text")
    .map((p) => p.text)
    .join("") || null
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

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat", body: { mode, level, topic } }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const { messages, sendMessage, status } = useChat({ transport })

  const isLoading = status === "streaming" || status === "submitted"

  // When streaming finishes, queue last assistant message for TTS (once per message)
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

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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

  const handleTranscript = (text: string) => {
    unlockAudio()
    setInput(text)
    setIsListening(false)
  }

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <p className="text-center text-muted-foreground text-sm pt-8">
            {mode === "free"
              ? "Start a conversation in English..."
              : `Practice ${topic} at ${level?.toUpperCase()} level`}
          </p>
        )}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-2 text-sm text-muted-foreground">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSubmit}
        className="border-t p-3 pb-[max(12px,env(safe-area-inset-bottom))] flex items-center gap-2 shrink-0"
      >
        <VoiceControls
          isListening={isListening}
          onToggle={() => setIsListening((v) => !v)}
          onTranscript={handleTranscript}
          disabled={isLoading}
        />
        <input
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          placeholder="Type or speak in English..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => bottomRef.current?.scrollIntoView({ behavior: "smooth" })}
          disabled={isLoading}
        />
        <TtsPlayer
          enabled={ttsEnabled}
          onToggle={() => setTtsEnabled((v) => !v)}
          isSpeaking={isSpeaking}
          onSpeakingChange={setIsSpeaking}
          textToSpeak={pendingTts}
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
          <SendHorizonal className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
