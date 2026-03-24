"use client"

import { useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { calcularDelay } from "@/lib/tts"

interface TtsMessage {
  text: string
  id: number
}

interface Props {
  enabled: boolean
  onToggle: () => void
  isSpeaking: boolean
  onSpeakingChange: (speaking: boolean) => void
  textToSpeak: TtsMessage | null
}

export function TtsPlayer({ enabled, onToggle, isSpeaking, onSpeakingChange, textToSpeak }: Props) {
  const lastIdRef = useRef(-1)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!enabled || !textToSpeak) return
    if (textToSpeak.id === lastIdRef.current) return

    lastIdRef.current = textToSpeak.id
    const delay = calcularDelay(textToSpeak.text)

    const timer = setTimeout(() => {
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(textToSpeak.text)
      utterance.lang = "en-US"
      utterance.rate = 0.95

      utterance.onstart = () => onSpeakingChange(true)
      utterance.onend = () => onSpeakingChange(false)
      utterance.onerror = () => onSpeakingChange(false)

      window.speechSynthesis.speak(utterance)
    }, delay)

    return () => clearTimeout(timer)
  }, [textToSpeak, enabled]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!enabled && typeof window !== "undefined") {
      window.speechSynthesis.cancel()
      onSpeakingChange(false)
    }
  }, [enabled]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={onToggle}
      aria-label={enabled ? "Disable voice output" : "Enable voice output"}
    >
      {enabled ? (
        <Volume2 className={`h-4 w-4 ${isSpeaking ? "text-primary animate-pulse" : ""}`} />
      ) : (
        <VolumeX className="h-4 w-4 text-muted-foreground" />
      )}
    </Button>
  )
}
