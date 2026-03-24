"use client"

import { useEffect, useRef } from "react"
import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  isListening: boolean
  onToggle: () => void
  onTranscript: (text: string) => void
  disabled?: boolean
}

export function VoiceControls({ isListening, onToggle, onTranscript, disabled }: Props) {
  const recognitionRef = useRef<InstanceType<typeof window.SpeechRecognition> | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const SR =
      (window as typeof window & { webkitSpeechRecognition?: typeof window.SpeechRecognition })
        .webkitSpeechRecognition ?? window.SpeechRecognition
    if (!SR) return

    const recognition = new SR()
    recognition.lang = "en-US"
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0]?.[0]?.transcript ?? ""
      if (transcript) onTranscript(transcript)
    }

    recognition.onend = () => {
      if (isListening) onToggle()
    }

    recognitionRef.current = recognition
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const recognition = recognitionRef.current
    if (!recognition) return
    if (isListening) {
      recognition.start()
    } else {
      recognition.abort()
    }
  }, [isListening])

  return (
    <Button
      type="button"
      variant={isListening ? "destructive" : "outline"}
      size="icon"
      onClick={onToggle}
      disabled={disabled}
      aria-label={isListening ? "Stop listening" : "Start voice input"}
    >
      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
    </Button>
  )
}
