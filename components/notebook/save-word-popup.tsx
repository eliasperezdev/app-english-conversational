'use client'

import { useEffect, useRef, useState } from 'react'
import { saveEntry } from '@/lib/notebook'

interface PopupInfo {
  text: string
  context: string
  rectTop: number
  rectBottom: number
  rectLeft: number
  rectWidth: number
  saved: boolean
}

function getContext(selection: Selection, selectedText: string): string {
  const range = selection.getRangeAt(0)
  const container = range.commonAncestorContainer

  const blockEl =
    container.nodeType === Node.TEXT_NODE
      ? (container as Text).parentElement?.closest('p, li, td, h1, h2, h3') ??
        (container as Text).parentElement
      : (container as Element).closest('p, li, td, h1, h2, h3') ?? (container as Element)

  const fullText = blockEl?.textContent?.trim() ?? selectedText

  // Find the sentence containing the selected text
  const sentences = fullText.split(/(?<=[.!?])\s+/)
  const sentence = sentences.find((s) => s.includes(selectedText)) ?? fullText

  return sentence.length > 300 ? sentence.slice(0, 300) + '…' : sentence
}

function inferSource(): {
  type: 'guide' | 'book' | 'chat'
  label: string
  level: string
  url: string
} {
  const path = window.location.pathname
  const url = window.location.href

  const sourceEl = document.querySelector('[data-notebook-source]') as HTMLElement | null
  const label = sourceEl?.dataset.notebookSource ?? ''
  const level = (sourceEl?.dataset.notebookLevel ?? '').toLowerCase()

  if (path.startsWith('/guides/')) {
    return { type: 'guide', label: label || 'Guide', level, url }
  }
  if (path.startsWith('/books/')) {
    return { type: 'book', label: label || 'Book', level, url }
  }
  const parts = path.split('/').filter(Boolean)
  if (parts[0] === 'practice' && parts.length >= 3) {
    const lvl = parts[1]
    const topic = parts[2].replace(/-/g, ' ')
    return { type: 'chat', label: `${lvl.toUpperCase()} • ${topic}`, level: lvl, url }
  }
  return { type: 'chat', label: 'Free chat', level: '', url }
}

export function SaveWordPopup() {
  const [popup, setPopup] = useState<PopupInfo | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 639px)').matches)
  }, [])

  useEffect(() => {
    const handleSelectionChange = () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(() => {
        const selection = window.getSelection()
        if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
          setPopup(null)
          return
        }

        const text = selection.toString().trim()
        const wordCount = text.split(/\s+/).filter(Boolean).length
        if (wordCount < 1 || wordCount > 6) {
          setPopup(null)
          return
        }

        // Skip if selection is inside a textarea or input
        const anchorEl =
          selection.anchorNode?.nodeType === Node.TEXT_NODE
            ? (selection.anchorNode as Text).parentElement
            : (selection.anchorNode as Element)
        if (anchorEl?.closest('textarea, input, [contenteditable="true"]')) {
          setPopup(null)
          return
        }

        try {
          const range = selection.getRangeAt(0)
          const rect = range.getBoundingClientRect()
          const ctx = getContext(selection, text)

          setPopup({
            text,
            context: ctx,
            rectTop: rect.top,
            rectBottom: rect.bottom,
            rectLeft: rect.left,
            rectWidth: rect.width,
            saved: false,
          })
        } catch {
          setPopup(null)
        }
      }, 350)
    }

    document.addEventListener('selectionchange', handleSelectionChange)
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  // Dismiss on outside click
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (popup && popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopup(null)
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [popup])

  function handleSave() {
    if (!popup) return
    const src = inferSource()
    saveEntry({
      word: popup.text,
      context: popup.context,
      translation: null,
      source: { type: src.type, label: src.label, url: src.url },
      level: src.level,
    })
    setPopup((p) => (p ? { ...p, saved: true } : null))
    setTimeout(() => {
      setPopup(null)
      window.getSelection()?.removeAllRanges()
    }, 1200)
  }

  if (!popup) return null

  // Mobile: bottom sheet
  if (isMobile) {
    return (
      <div
        ref={popupRef}
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#161618] border-t border-[#2a2a2e] rounded-t-2xl p-4 flex items-center gap-3 shadow-2xl"
      >
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">"{popup.text}"</p>
        </div>
        <button
          onClick={handleSave}
          className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
            popup.saved
              ? 'bg-green-900/40 text-green-400'
              : 'bg-[#C41A1A] text-white hover:bg-[#a51515]'
          }`}
        >
          {popup.saved ? 'Saved ✓' : 'Save to notebook'}
        </button>
      </div>
    )
  }

  // Desktop: floating popover above/below selection
  const POPUP_WIDTH = 220
  const POPUP_HEIGHT = 52
  const GAP = 8

  const scrollY = window.scrollY
  const scrollX = window.scrollX

  const showAbove = popup.rectTop > POPUP_HEIGHT + GAP + 20
  const top = showAbove
    ? popup.rectTop + scrollY - POPUP_HEIGHT - GAP
    : popup.rectBottom + scrollY + GAP

  const rawLeft = popup.rectLeft + scrollX + popup.rectWidth / 2 - POPUP_WIDTH / 2
  const left = Math.max(8, Math.min(rawLeft, window.innerWidth + scrollX - POPUP_WIDTH - 8))

  return (
    <div
      ref={popupRef}
      style={{ position: 'absolute', top, left, width: POPUP_WIDTH, zIndex: 9999 }}
      className="flex items-center gap-2 bg-[#161618] border border-[#2a2a2e] rounded-xl px-3 py-2 shadow-xl"
    >
      <p className="flex-1 text-white text-xs font-medium truncate">"{popup.text}"</p>
      <button
        onClick={handleSave}
        className={`shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
          popup.saved
            ? 'bg-green-900/40 text-green-400'
            : 'bg-[#C41A1A] text-white hover:bg-[#a51515]'
        }`}
      >
        {popup.saved ? 'Saved ✓' : '+ Notebook'}
      </button>
    </div>
  )
}
