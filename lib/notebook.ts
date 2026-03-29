export type NotebookEntry = {
  id: string
  word: string
  context: string
  translation: string | null
  source: {
    type: 'guide' | 'book' | 'chat'
    label: string
    url: string
  }
  level: string
  savedAt: number
  review: {
    interval: number
    nextReview: number
    easeFactor: number
    repetitions: number
  }
}

const STORAGE_KEY = 'notebook_entries'
const STREAK_KEY = 'notebook_streak'

function load(): NotebookEntry[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

function persist(entries: NotebookEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}

export function getEntries(): NotebookEntry[] {
  return load()
}

export function saveEntry(
  entry: Omit<NotebookEntry, 'id' | 'savedAt' | 'review'>
): NotebookEntry {
  const now = Date.now()
  const id =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2)

  const newEntry: NotebookEntry = {
    ...entry,
    id,
    savedAt: now,
    review: {
      interval: 1,
      nextReview: now + 24 * 60 * 60 * 1000,
      easeFactor: 2.5,
      repetitions: 0,
    },
  }
  const entries = load()
  entries.unshift(newEntry)
  persist(entries)
  return newEntry
}

export function deleteEntry(id: string): void {
  persist(load().filter((e) => e.id !== id))
}

export function updateTranslation(id: string, translation: string): void {
  const entries = load()
  const idx = entries.findIndex((e) => e.id === id)
  if (idx === -1) return
  entries[idx].translation = translation.trim() || null
  persist(entries)
}

export function updateReview(id: string, quality: 0 | 1 | 2 | 3): void {
  const entries = load()
  const idx = entries.findIndex((e) => e.id === id)
  if (idx === -1) return

  const entry = { ...entries[idx] }
  const r = { ...entry.review }

  if (quality < 2) {
    r.interval = 1
    r.repetitions = 0
  } else {
    if (r.repetitions === 0) r.interval = 1
    else if (r.repetitions === 1) r.interval = 6
    else r.interval = Math.round(r.interval * r.easeFactor)

    r.easeFactor =
      r.easeFactor + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02))
    r.easeFactor = Math.max(1.3, r.easeFactor)
    r.repetitions++
  }

  r.nextReview = Date.now() + r.interval * 24 * 60 * 60 * 1000
  entry.review = r
  entries[idx] = entry
  persist(entries)
  _updateStreak()
}

function _updateStreak(): void {
  const today = new Date().toDateString()
  let streak = { lastDate: '', count: 0 }
  try {
    const raw = localStorage.getItem(STREAK_KEY)
    if (raw) streak = JSON.parse(raw)
  } catch {
    // ignore
  }
  if (streak.lastDate === today) return
  const yesterday = new Date(Date.now() - 86_400_000).toDateString()
  streak.count = streak.lastDate === yesterday ? streak.count + 1 : 1
  streak.lastDate = today
  localStorage.setItem(STREAK_KEY, JSON.stringify(streak))
}

export function getDueEntries(): NotebookEntry[] {
  const now = Date.now()
  return load().filter((e) => e.review.nextReview <= now)
}

export function getStats(): { total: number; dueToday: number; streak: number } {
  const entries = load()
  const now = Date.now()
  const dueToday = entries.filter((e) => e.review.nextReview <= now).length

  let streak = 0
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STREAK_KEY)
      if (raw) {
        const s = JSON.parse(raw)
        const today = new Date().toDateString()
        const yesterday = new Date(Date.now() - 86_400_000).toDateString()
        if (s.lastDate === today || s.lastDate === yesterday) streak = s.count
      }
    } catch {
      // ignore
    }
  }

  return { total: entries.length, dueToday, streak }
}
