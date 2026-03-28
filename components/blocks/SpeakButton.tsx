'use client'

import { useState } from 'react'
import { Volume2 } from 'lucide-react'

interface Props {
  text: string
  /** Size variant — defaults to 'sm' */
  size?: 'xs' | 'sm'
}

export default function SpeakButton({ text, size = 'sm' }: Props) {
  const [speaking, setSpeaking] = useState(false)

  function handleClick() {
    if (typeof window === 'undefined') return
    window.speechSynthesis.cancel()

    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'en-US'
    u.rate = 0.95
    u.onstart = () => setSpeaking(true)
    u.onend = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(u)
  }

  const isXs = size === 'xs'

  return (
    <button
      onClick={handleClick}
      aria-label={`Speak: ${text}`}
      className={`shrink-0 rounded-full flex items-center justify-center transition-colors ${
        isXs ? 'w-5 h-5' : 'w-6 h-6'
      } ${
        speaking
          ? 'text-[#C41A1A]'
          : 'text-[#555] hover:text-[#888]'
      }`}
    >
      <Volume2 className={isXs ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
    </button>
  )
}
