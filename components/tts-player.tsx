"use client"

import { useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { calcularDelay } from "@/lib/tts"

interface Props {
  enabled: boolean
  onToggle: () => void
  isSpeaking: boolean
  onSpeakingChange: (speaking: boolean) => void
  textToSpeak: string | null
}

export function TtsPlayer({ enabled, onToggle, isSpeaking, onSpeakingChange, textToSpeak }: Props) {
  const spokenRef = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!enabled || !textToSpeak || textToSpeak === spokenRef.current) return

    spokenRef.current = textToSpeak
    const delay = calcularDelay(textToSpeak)

    const timer = setTimeout(() => {
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(textToSpeak)
      utterance.lang = "en-US"
      utterance.rate = 0.95

      utterance.onstart = () => onSpeakingChange(true)
      utterance.onend = () => onSpeakingChange(false)
      utterance.onerror = () => onSpeakingChange(false)

      window.speechSynthesis.speak(utterance)
    }, delay)

    return () => clearTimeout(timer)
  }, [textToSpeak, enabled]) // eslint-disable-line react-hooks/exhaustive-deps

  // Stop speech when TTS is disabled mid-sentence
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
