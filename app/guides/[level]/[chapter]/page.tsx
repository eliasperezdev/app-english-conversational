import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllLevelSlugs, getAllChapterSlugs, getChapter, getLevel } from '@/lib/guides'
import { getBooksByLevel } from '@/lib/books'
import BlockRenderer from '@/components/blocks/BlockRenderer'
import StickyBar from '@/components/guides/StickyBar'

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
  const [chapter, level, levelBooks] = await Promise.all([
    getChapter(levelSlug, chapterSlug),
    Promise.resolve(getLevel(levelSlug)),
    getBooksByLevel(levelSlug),
  ])
  if (!chapter || !level) notFound()

  const chapterMeta = level.chapters.find((c) => c.slug === chapterSlug)
  const practiceRoute = chapterMeta?.practice_route
  const badge = levelSlug.toUpperCase()

  return (
    <>
      <main className={`min-h-screen bg-[#0e0e0f] px-6 py-12 ${practiceRoute ? 'pb-32' : ''}`}>
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <Link
            href={`/guides/${levelSlug}`}
            className="inline-flex items-center gap-1.5 text-[#888] text-sm hover:text-white transition-colors mb-10"
          >
            ← {level.label}
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C41A1A] bg-[#C41A1A]/10 rounded-full px-3 py-1 mb-3">
              {badge}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              {chapter.title}
            </h1>
            <p className="text-[#888] text-base">{chapter.description}</p>
          </div>

          {/* Sections */}
          {chapter.sections.map((section) => (
            <div key={section.id} className="mb-12">
              <div className="flex items-center gap-2 mb-5">
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
                    className="rounded-2xl border border-[#2a2a2e] bg-[#161618] p-6"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ background: card.iconBg }}
                      >
                        {card.icon}
                      </span>
                      <h2 className="font-semibold text-white text-[15px]">{card.title}</h2>
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

          {/* Practice reading — books at this level */}
          {levelBooks.length > 0 && (
            <div className="mt-4 mb-12">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-[#C41A1A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]">
                  Practice Reading
                </span>
              </div>
              <p className="text-[#555] text-sm mb-4">Books at this level</p>
              <div className="space-y-3">
                {levelBooks.map((book) => (
                  <Link
                    key={book.slug}
                    href={`/books/${book.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-[#2a2a2e] bg-[#161618] px-6 py-4 hover:border-[#C41A1A] transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-white text-sm">{book.title}</p>
                      <p className="text-[#555] text-xs mt-0.5">{book.author}</p>
                    </div>
                    <span className="text-[#555] text-sm group-hover:text-[#888] transition-colors">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {practiceRoute && (
        <StickyBar levelSlug={levelSlug} practiceRoute={practiceRoute} />
      )}
    </>
  )
}
