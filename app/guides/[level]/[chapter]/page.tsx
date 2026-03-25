import { notFound } from 'next/navigation'
import { getAllLevelSlugs, getAllChapterSlugs, getChapter } from '@/lib/guides'

export function generateStaticParams() {
  const params: { level: string; chapter: string }[] = []
  for (const level of getAllLevelSlugs()) {
    for (const chapter of getAllChapterSlugs(level)) {
      params.push({ level, chapter })
    }
  }
  return params
}

interface Props {
  params: Promise<{ level: string; chapter: string }>
}

export default async function ChapterPage({ params }: Props) {
  const { level: levelSlug, chapter: chapterSlug } = await params
  const chapter = await getChapter(levelSlug, chapterSlug)
  if (!chapter) notFound()

  const totalSections = chapter.sections.length
  const totalCards = chapter.sections.reduce((sum, s) => sum + s.cards.length, 0)

  return (
    <main className="p-8 text-white bg-[#0e0e0f] min-h-screen">
      <p>
        Chapter: {chapterSlug} — {totalSections} section{totalSections !== 1 ? 's' : ''},{' '}
        {totalCards} card{totalCards !== 1 ? 's' : ''}
      </p>
    </main>
  )
}
