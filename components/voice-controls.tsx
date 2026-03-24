"use client"

import { useRef } from "react"
import { Mic } from "lucide-react"

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

    if (isListening) {
      recognitionRef.current?.abort()
      recognitionRef.current = null
      onToggle()
      return
    }

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
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={isListening ? "Stop listening" : "Start voice input"}
      className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 ${
        isListening
          ? "bg-[#C41A1A] animate-pulse"
          : "bg-[#C41A1A] hover:bg-[#a81616]"
      }`}
    >
      <Mic className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </button>
  )
}
