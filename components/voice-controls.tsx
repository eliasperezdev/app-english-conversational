"use client"

import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  isListening: boolean
  onToggle: () => void
  disabled?: boolean
}

export function VoiceControls({ isListening, onToggle, disabled }: Props) {
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
