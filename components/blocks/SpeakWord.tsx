'use client'

import { useState, useRef, useEffect } from 'react'
import type { SpeakWordItem } from '@/lib/types'

interface Props {
  data: SpeakWordItem[]
}

type Status = 'idle' | 'listening' | 'correct' | 'wrong'

function speak(text: string) {
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'en-US'
  u.rate = 0.95
  window.speechSynthesis.speak(u)
}

function getSR(): typeof SpeechRecognition | null {
  if (typeof window === 'undefined') return null
  return (
    (window as Window & { webkitSpeechRecognition?: typeof SpeechRecognition })
      .webkitSpeechRecognition ?? window.SpeechRecognition ?? null
  )
}

export default function SpeakWord({ data }: Props) {
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState<Status>('idle')
  const [transcript, setTranscript] = useState('')
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [supported, setSupported] = useState(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  const item = data[index]

  useEffect(() => {
    setSupported(!!getSR())
  }, [])

  function handleListen() {
    speak(item.word)
  }

  function handleRepeat() {
    const SR = getSR()
    if (!SR) return

    setStatus('listening')
    setTranscript('')

    const recognition = new SR()
    recognition.lang = 'en-US'
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const text = e.results[0]?.[0]?.transcript ?? ''
      setTranscript(text)
      const correct = text.trim().toLowerCase() === item.word.trim().toLowerCase()
      setStatus(correct ? 'correct' : 'wrong')
      if (correct) setScore((s) => s + 1)
      recognitionRef.current = null
    }

    recognition.onerror = () => {
      setStatus('idle')
      recognitionRef.current = null
    }

    recognition.onend = () => {
      if (recognitionRef.current) {
        setStatus('idle')
        recognitionRef.current = null
      }
    }

    recognitionRef.current = recognition
    recognition.start()
  }

  function next() {
    if (index + 1 >= data.length) {
      setDone(true)
    } else {
      setIndex((i) => i + 1)
      setStatus('idle')
      setTranscript('')
    }
  }

  function reset() {
    setIndex(0)
    setStatus('idle')
    setTranscript('')
    setScore(0)
    setDone(false)
  }

  if (!supported) {
    return (
      <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-4 text-[#888] text-sm">
        Speech recognition is not supported in this browser.
      </div>
    )
  }

  if (done) {
    return (
      <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-6 text-center space-y-3">
        <p className="text-3xl font-bold text-white">{score}/{data.length}</p>
        <p className="text-[#888] text-sm">
          {score === data.length ? '¡Pronunciación perfecta! 🎉' : 'Sigue practicando'}
        </p>
        <button
          onClick={reset}
          className="mt-2 px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
          Speak
        </span>
        <span className="text-[12px] text-[#555]">{index + 1} / {data.length}</span>
      </div>

      {/* Word display */}
      <div className="rounded-xl border border-[#2a2a2e] bg-[#161618] p-5 text-center space-y-1">
        <p className="text-xl font-semibold text-white">{item.word}</p>
        {item.ipa && (
          <p className="font-mono text-[13px] text-[#3a8fd4]">{item.ipa}</p>
        )}
        <p className="text-[#888] text-sm">{item.translation}</p>
      </div>

      {/* Transcript feedback */}
      {status === 'correct' && (
        <p className="text-[#4ade80] text-sm font-semibold">
          ✓ &ldquo;{transcript}&rdquo;
        </p>
      )}
      {status === 'wrong' && (
        <p className="text-[#f87171] text-sm">
          ✗ Heard: &ldquo;{transcript}&rdquo; — try again
        </p>
      )}
      {status === 'listening' && (
        <p className="text-[#888] text-sm animate-pulse">Listening…</p>
      )}

      {/* Controls */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={handleListen}
          disabled={status === 'listening'}
          className="px-4 py-2 rounded-lg border border-[#2a2a2e] text-[#d0d0d5] text-sm hover:border-[#444] hover:text-white disabled:opacity-40 transition-colors"
        >
          🔊 Listen
        </button>

        {status !== 'correct' && (
          <button
            onClick={handleRepeat}
            disabled={status === 'listening'}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-40 ${
              status === 'listening'
                ? 'bg-[#C41A1A] text-white animate-pulse'
                : 'bg-[#C41A1A] text-white hover:bg-[#a81515]'
            }`}
          >
            🎙 Repeat
          </button>
        )}

        {(status === 'correct' || status === 'wrong') && (
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
          >
            {index + 1 < data.length ? 'Next →' : 'See results'}
          </button>
        )}
      </div>
    </div>
  )
}
