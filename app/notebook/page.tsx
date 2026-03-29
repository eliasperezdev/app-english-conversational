'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  getEntries,
  deleteEntry,
  updateTranslation,
  getStats,
  type NotebookEntry,
} from '@/lib/notebook'

type SourceFilter = 'all' | 'guide' | 'book' | 'chat'
type LevelFilter = 'all' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2'
type SortOrder = 'newest' | 'oldest' | 'due_first'

function relativeTime(ts: number): string {
  const diff = Date.now() - ts
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor(diff / 3_600_000)
  const minutes = Math.floor(diff / 60_000)
  if (days > 30) return `${Math.floor(days / 30)}mo ago`
  if (days > 1) return `${days} days ago`
  if (days === 1) return 'Yesterday'
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'Just now'
}

function nextReviewLabel(ts: number): string {
  const now = Date.now()
  if (ts <= now) return 'Due now'
  const days = Math.ceil((ts - now) / 86_400_000)
  if (days === 1) return 'Tomorrow'
  return `In ${days} days`
}

function highlightWord(context: string, word: string): JSX.Element {
  const idx = context.toLowerCase().indexOf(word.toLowerCase())
  if (idx === -1) return <span>{context}</span>
  return (
    <>
      {context.slice(0, idx)}
      <span className="text-[#C41A1A] font-semibold">{context.slice(idx, idx + word.length)}</span>
      {context.slice(idx + word.length)}
    </>
  )
}

const SOURCE_BADGE: Record<string, string> = {
  guide: 'bg-[#c89a2a]/15 text-[#c89a2a]',
  book: 'bg-[#3a8fd4]/15 text-[#3a8fd4]',
  chat: 'bg-[#2da899]/15 text-[#2da899]',
}

function EntryCard({
  entry,
  onDelete,
  onTranslationSave,
}: {
  entry: NotebookEntry
  onDelete: (id: string) => void
  onTranslationSave: (id: string, t: string) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [translation, setTranslation] = useState(entry.translation ?? '')
  const isDue = entry.review.nextReview <= Date.now()

  return (
    <div className="rounded-2xl border border-[#2a2a2e] bg-[#161618] overflow-hidden">
      {/* Main row — clickable */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-5 py-4"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-white font-bold text-lg leading-tight">{entry.word}</span>
              {isDue && (
                <span className="text-[10px] font-semibold uppercase tracking-wide bg-[#C41A1A]/20 text-[#C41A1A] rounded-full px-2 py-0.5">
                  Due today
                </span>
              )}
            </div>
            <p className="text-[#888] text-sm line-clamp-2 leading-relaxed">
              {highlightWord(entry.context, entry.word)}
            </p>
          </div>
          <span className="text-[#555] text-sm mt-1 shrink-0">{expanded ? '▲' : '▼'}</span>
        </div>

        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <span
            className={`text-[10px] font-semibold uppercase tracking-wide rounded-full px-2 py-0.5 ${SOURCE_BADGE[entry.source.type]}`}
          >
            {entry.source.type}
          </span>
          {entry.level && (
            <span className="text-[10px] font-semibold uppercase tracking-wide bg-[#2a2a2e] text-[#888] rounded-full px-2 py-0.5">
              {entry.level.toUpperCase()}
            </span>
          )}
          <span className="text-[#555] text-xs ml-auto">{relativeTime(entry.savedAt)}</span>
        </div>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-[#2a2a2e] px-5 py-4 space-y-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#555] mb-1">
              Context
            </p>
            <p className="text-[#d0d0d5] text-sm leading-relaxed">
              {highlightWord(entry.context, entry.word)}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#555] mb-1">
              Translation (optional)
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                placeholder="Add your translation…"
                className="flex-1 bg-[#111113] border border-[#2a2a2e] rounded-xl px-3 py-2 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C41A1A]"
              />
              <button
                onClick={() => onTranslationSave(entry.id, translation)}
                className="px-3 py-2 bg-[#C41A1A] text-white text-sm font-semibold rounded-xl hover:bg-[#a51515] transition-colors"
              >
                Save
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="text-[#555] space-y-0.5">
              <p>
                Reviewed {entry.review.repetitions} time
                {entry.review.repetitions !== 1 ? 's' : ''} ·{' '}
                {nextReviewLabel(entry.review.nextReview)}
              </p>
            </div>
            <a
              href={entry.source.url}
              className="text-[#3a8fd4] text-xs hover:underline"
            >
              Go to source →
            </a>
          </div>

          <div className="flex justify-end">
            {confirmDelete ? (
              <div className="flex items-center gap-2">
                <span className="text-[#888] text-xs">Delete this word?</span>
                <button
                  onClick={() => onDelete(entry.id)}
                  className="px-3 py-1 bg-red-900/40 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-900/60 transition-colors"
                >
                  Yes, delete
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="px-3 py-1 bg-[#2a2a2e] text-[#888] text-xs rounded-lg hover:bg-[#333] transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmDelete(true)}
                className="text-[#555] text-xs hover:text-red-400 transition-colors"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function NotebookPage() {
  const [entries, setEntries] = useState<NotebookEntry[]>([])
  const [stats, setStats] = useState({ total: 0, dueToday: 0, streak: 0 })
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all')
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all')
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest')

  function reload() {
    setEntries(getEntries())
    setStats(getStats())
  }

  useEffect(() => {
    reload()
  }, [])

  function handleDelete(id: string) {
    deleteEntry(id)
    reload()
  }

  function handleTranslationSave(id: string, t: string) {
    updateTranslation(id, t)
    reload()
  }

  const filtered = entries
    .filter((e) => sourceFilter === 'all' || e.source.type === sourceFilter)
    .filter((e) => levelFilter === 'all' || e.level === levelFilter)
    .sort((a, b) => {
      if (sortOrder === 'newest') return b.savedAt - a.savedAt
      if (sortOrder === 'oldest') return a.savedAt - b.savedAt
      // due_first: due entries first, then by savedAt
      const aNow = a.review.nextReview <= Date.now()
      const bNow = b.review.nextReview <= Date.now()
      if (aNow && !bNow) return -1
      if (!aNow && bNow) return 1
      return b.savedAt - a.savedAt
    })

  const levels: LevelFilter[] = ['all', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2']
  const sources: { value: SourceFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'guide', label: 'Guides' },
    { value: 'book', label: 'Books' },
    { value: 'chat', label: 'Chat' },
  ]
  const sorts: { value: SortOrder; label: string }[] = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'due_first', label: 'Due first' },
  ]

  return (
    <main className="min-h-screen bg-[#0e0e0f] px-6 py-12">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[#888] text-sm hover:text-white transition-colors mb-10"
        >
          ← Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            My Vocabulary
          </h1>

          {/* Stats row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[#888] text-sm">
              <span className="text-white font-semibold">{stats.total}</span> words saved
            </span>
            <span className="text-[#2a2a2e]">·</span>
            <span className="text-[#888] text-sm">
              <span className="text-[#C41A1A] font-semibold">{stats.dueToday}</span> due today
            </span>
            {stats.streak > 0 && (
              <>
                <span className="text-[#2a2a2e]">·</span>
                <span className="text-[#888] text-sm">
                  🔥 <span className="text-white font-semibold">{stats.streak}</span> day streak
                </span>
              </>
            )}
          </div>
        </div>

        {/* Review buttons */}
        <div className="flex gap-3 mb-8">
          <Link
            href="/notebook/review?mode=due"
            className={`flex-1 text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
              stats.dueToday > 0
                ? 'bg-[#C41A1A] text-white hover:bg-[#a51515]'
                : 'bg-[#161618] border border-[#2a2a2e] text-[#555] cursor-not-allowed pointer-events-none'
            }`}
          >
            {stats.dueToday > 0
              ? `Review due (${stats.dueToday})`
              : 'No reviews due'}
          </Link>
          <Link
            href="/notebook/review?mode=all"
            className="flex-1 text-center py-3 rounded-xl font-semibold text-sm bg-[#161618] border border-[#2a2a2e] text-white hover:border-[#C41A1A] transition-colors"
          >
            Review all
          </Link>
        </div>

        {/* Filter bar */}
        <div className="space-y-3 mb-6">
          <div className="flex gap-2 flex-wrap">
            {sources.map((s) => (
              <button
                key={s.value}
                onClick={() => setSourceFilter(s.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  sourceFilter === s.value
                    ? 'bg-[#C41A1A] text-white'
                    : 'bg-[#161618] border border-[#2a2a2e] text-[#888] hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-[#555] text-xs uppercase tracking-wide">Level:</span>
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevelFilter(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  levelFilter === l
                    ? 'bg-[#C41A1A] text-white'
                    : 'bg-[#161618] border border-[#2a2a2e] text-[#888] hover:text-white'
                }`}
              >
                {l === 'all' ? 'All' : l.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-[#555] text-xs uppercase tracking-wide">Sort:</span>
            {sorts.map((s) => (
              <button
                key={s.value}
                onClick={() => setSortOrder(s.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  sortOrder === s.value
                    ? 'bg-[#C41A1A] text-white'
                    : 'bg-[#161618] border border-[#2a2a2e] text-[#888] hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Word list */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            {entries.length === 0 ? (
              <>
                <p className="text-white font-semibold text-lg mb-2">No words saved yet</p>
                <p className="text-[#555] text-sm mb-6">
                  Select any text in guides, books or chat to save words here
                </p>
                <Link
                  href="/guides"
                  className="inline-flex px-5 py-2.5 bg-[#C41A1A] text-white text-sm font-semibold rounded-xl hover:bg-[#a51515] transition-colors"
                >
                  Browse guides
                </Link>
              </>
            ) : (
              <p className="text-[#555] text-sm">No words match your filters</p>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                onDelete={handleDelete}
                onTranslationSave={handleTranslationSave}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
