import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllBooksMetadata, getBook } from '@/lib/books'
import PageWrapper from '@/components/ui/page-wrapper'
import { BackButton } from '@/components/ui/back-button'

export async function generateStaticParams() {
  const books = await getAllBooksMetadata()
  return books.map((b) => ({ slug: b.slug }))
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `~${minutes} min`
  return `~${Math.round(minutes / 60)} hours`
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params
  const book = await getBook(slug)
  if (!book) notFound()

  return (
    <PageWrapper>
      <header className="shrink-0 border-b border-[#2a2a2e] bg-[#161618] px-4 py-3">
        <BackButton label="Books" href="/books" />
      </header>

      <div className="flex-1 px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C41A1A] bg-[#C41A1A]/10 rounded-full px-3 py-1 mb-3">
            {book.level}
          </span>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
            {book.title}
          </h1>
          <p className="text-[#888] text-base mb-4">{book.author}</p>
          <p className="text-[#555] text-sm">
            {book.totalChapters} chapters · {formatTime(book.estimatedMinutes)} · {book.source}
          </p>
        </div>

        {/* Chapter list */}
        <div className="rounded-2xl border border-[#2a2a2e] bg-[#161618] divide-y divide-[#2a2a2e] overflow-hidden">
          {book.chapters.map((chapter) => (
            <Link
              key={chapter.number}
              href={`/books/${slug}/${chapter.number}`}
              className="flex items-baseline gap-4 px-6 py-4 hover:bg-[#1c1c1f] transition-colors group"
            >
              <span className="text-xs font-mono text-[#555] w-8 shrink-0 group-hover:text-[#888] transition-colors">
                {chapter.number}
              </span>
              <div className="min-w-0">
                <span className="text-sm font-medium text-white">
                  {chapter.heading}
                  {chapter.title && (
                    <span className="text-[#d0d0d5] font-normal"> — {chapter.title}</span>
                  )}
                </span>
                <span className="block text-xs text-[#555] mt-0.5">
                  {chapter.paragraphs.length} {chapter.paragraphs.length === 1 ? 'paragraph' : 'paragraphs'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
