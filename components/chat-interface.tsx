"use client"

import { useRef, useEffect, useState, FormEvent } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
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

export function ChatInterface({ mode, level, topic }: Props) {
  const [input, setInput] = useState("")
  const [ttsEnabled, setTtsEnabled] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: { mode, level, topic },
    }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return
    setInput("")
    await sendMessage({ text })
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
        className="border-t p-3 flex items-center gap-2"
      >
        <VoiceControls
          isListening={isListening}
          onToggle={() => setIsListening((v) => !v)}
          disabled={isLoading}
        />
        <input
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          placeholder="Type or speak in English..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <TtsPlayer
          enabled={ttsEnabled}
          onToggle={() => setTtsEnabled((v) => !v)}
          isSpeaking={isSpeaking}
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
          <SendHorizonal className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
