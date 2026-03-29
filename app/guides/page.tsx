import { getAllLevelSlugs, getLevel } from '@/lib/guides'
import Link from 'next/link'
import PageWrapper from '@/components/ui/page-wrapper'
import { BackButton } from '@/components/ui/back-button'

export default function GuidesPage() {
  const slugs = getAllLevelSlugs()

  return (
    <PageWrapper>
      <header className="shrink-0 border-b border-[#2a2a2e] bg-[#161618] px-4 py-3">
        <BackButton label="Home" href="/" />
      </header>

      <div className="flex-1 px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C41A1A] mb-2">
            AI Language Tutor
          </p>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
            Guides
          </h1>
          <p className="text-[#888] text-base">
            Structured lessons to build your English foundation, level by level.
          </p>
        </div>

        {/* Level cards */}
        <div className="grid grid-cols-1 gap-4">
          {slugs.map((slug) => {
            const level = getLevel(slug)
            if (!level) return null
            const badge = slug.toUpperCase()
            const chapterCount = level.chapters.length

            if (!level.available) {
              return (
                <div
                  key={slug}
                  className="relative rounded-2xl border border-[#2a2a2e] bg-[#161618] p-7 opacity-50 cursor-not-allowed"
                >
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-[0.15em] border border-[#2a2a2e] text-[#555] rounded-full px-2.5 py-1">
                    Coming soon
                  </span>
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C41A1A] bg-[#C41A1A]/10 rounded-full px-3 py-1 mb-4">
                    {badge}
                  </span>
                  <p className="font-semibold text-white text-lg mb-1">{level.label}</p>
                  <p className="text-[#888] text-sm leading-relaxed">{level.description}</p>
                  <p className="text-[#555] text-xs mt-4">{chapterCount} chapters</p>
                </div>
              )
            }

            return (
              <Link
                key={slug}
                href={`/guides/${slug}`}
                className="group relative rounded-2xl border border-[#2a2a2e] bg-[#161618] p-7 hover:border-[#C41A1A] transition-colors"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C41A1A] bg-[#C41A1A]/10 rounded-full px-3 py-1 mb-4">
                  {badge}
                </span>
                <p className="font-semibold text-white text-lg mb-1">{level.label}</p>
                <p className="text-[#888] text-sm leading-relaxed">{level.description}</p>
                <p className="text-[#555] text-xs mt-4 group-hover:text-[#888] transition-colors">
                  {chapterCount} chapters →
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </PageWrapper>
  )
}
