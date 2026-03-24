"use client"

import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  enabled: boolean
  onToggle: () => void
  isSpeaking: boolean
}

export function TtsPlayer({ enabled, onToggle, isSpeaking }: Props) {
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
