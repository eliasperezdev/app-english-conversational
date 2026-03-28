import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllLevelSlugs, getLevel } from '@/lib/guides'

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

  const badge = levelSlug.toUpperCase()

  return (
    <main className="min-h-screen bg-[#0e0e0f] px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-[#888] text-sm hover:text-white transition-colors mb-10"
        >
          ← Guides
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C41A1A] bg-[#C41A1A]/10 rounded-full px-3 py-1 mb-3">
            {badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            {level.label}
          </h1>
          <p className="text-[#888] text-base max-w-xl">{level.description}</p>
        </div>

        {/* Chapter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {level.chapters.map((chapter) => {
            if (!chapter.available) {
              return (
                <div
                  key={chapter.slug}
                  className="relative rounded-2xl border border-[#2a2a2e] bg-[#161618] p-6 opacity-50 cursor-not-allowed"
                >
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-[0.15em] border border-[#2a2a2e] text-[#555] rounded-full px-2.5 py-1">
                    Soon
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-[#1c1c1f] flex items-center justify-center text-xl">
                      {chapter.icon}
                    </span>
                    <p className="font-semibold text-white">{chapter.title}</p>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed">{chapter.description}</p>
                </div>
              )
            }

            return (
              <Link
                key={chapter.slug}
                href={`/guides/${levelSlug}/${chapter.slug}`}
                className="group rounded-2xl border border-[#2a2a2e] bg-[#161618] p-6 hover:border-[#C41A1A] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-[#1c1c1f] flex items-center justify-center text-xl group-hover:bg-[#C41A1A]/10 transition-colors">
                    {chapter.icon}
                  </span>
                  <p className="font-semibold text-white">{chapter.title}</p>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">{chapter.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
