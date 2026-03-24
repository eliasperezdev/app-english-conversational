"use client"

import { useRef } from "react"
import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  isListening: boolean
  onToggle: () => void
  onTranscript: (text: string) => void
  disabled?: boolean
}

export function VoiceControls({ isListening, onToggle, onTranscript, disabled }: Props) {
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  const handleClick = () => {
    if (typeof window === "undefined") return

    // Stop if already listening
    if (isListening) {
      recognitionRef.current?.abort()
      recognitionRef.current = null
      onToggle()
      return
    }

    // Create AND start in the same user gesture — required on iOS/Android
    const SR =
      (window as Window & { webkitSpeechRecognition?: typeof SpeechRecognition })
        .webkitSpeechRecognition ?? window.SpeechRecognition

    if (!SR) {
      alert("Voice input is not supported in this browser.")
      return
    }

    const recognition = new SR()
    recognition.lang = "en-US"
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0]?.[0]?.transcript ?? ""
      if (transcript) onTranscript(transcript)
    }

    recognition.onend = () => {
      recognitionRef.current = null
      if (isListening) onToggle()
    }

    recognition.onerror = () => {
      recognitionRef.current = null
      if (isListening) onToggle()
    }

    recognitionRef.current = recognition
    try {
      recognition.start()
      onToggle()
    } catch {
      recognitionRef.current = null
    }
  }

  return (
    <Button
      type="button"
      variant={isListening ? "destructive" : "outline"}
      size="icon"
      onClick={handleClick}
      disabled={disabled}
      aria-label={isListening ? "Stop listening" : "Start voice input"}
    >
      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
    </Button>
  )
}
