import { notFound } from 'next/navigation'
import { getAllLevelSlugs, getAllChapterSlugs, getChapter } from '@/lib/guides'
import BlockRenderer from '@/components/blocks/BlockRenderer'

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

  return (
    <main className="p-8 text-white bg-[#0e0e0f] min-h-screen max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">{chapter.title}</h1>
      <p className="text-[#888] mb-8">{chapter.description}</p>

      {chapter.sections.map((section) => (
        <div key={section.id} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: section.dotColor }}
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
              {section.label}
            </span>
          </div>

          <div className="space-y-4">
            {section.cards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl border border-[#2a2a2e] bg-[#161618] p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.icon}
                  </span>
                  <h2 className="font-semibold text-[15px]">{card.title}</h2>
                </div>

                <div className="space-y-4">
                  {card.blocks.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
