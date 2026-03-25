import { notFound } from 'next/navigation'
import { getAllLevelSlugs, getAllChapterSlugs, getLevel } from '@/lib/guides'

export function generateStaticParams() {
  return getAllLevelSlugs().map((level) => ({ level }))
}

interface Props {
  params: Promise<{ level: string }>
}

export default async function LevelPage({ params }: Props) {
  const { level: levelSlug } = await params
  const level = getLevel(levelSlug)
  if (!level) notFound()

  const chapters = getAllChapterSlugs(levelSlug)

  return (
    <main className="p-8 text-white bg-[#0e0e0f] min-h-screen">
      <p>Level: {levelSlug} — chapters: {chapters.join(', ')}</p>
    </main>
  )
}
