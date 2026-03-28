import type { LevelMeta, Chapter } from '@/lib/types'
import { a1Meta } from '@/content/guides/a1/index'
import { a2Meta } from '@/content/guides/a2/index'

// Registry of all levels — add new levels here as they are created
const LEVELS: Record<string, LevelMeta> = {
  a1: a1Meta,
  a2: a2Meta,
}

export function getAllLevelSlugs(): string[] {
  return Object.keys(LEVELS)
}

export function getLevel(slug: string): LevelMeta | undefined {
  return LEVELS[slug]
}

export function getAllChapterSlugs(levelSlug: string): string[] {
  const level = LEVELS[levelSlug]
  if (!level) return []
  return level.chapters.map((c) => c.slug)
}

export async function getChapter(
  levelSlug: string,
  chapterSlug: string,
): Promise<Chapter | undefined> {
  const level = LEVELS[levelSlug]
  if (!level) return undefined

  const chapterMeta = level.chapters.find((c) => c.slug === chapterSlug)
  if (!chapterMeta) return undefined

  try {
    const mod = await import(`@/content/guides/${levelSlug}/${chapterSlug}`)
    // Each content file exports a default Chapter object
    return mod.default as Chapter
  } catch {
    return undefined
  }
}
