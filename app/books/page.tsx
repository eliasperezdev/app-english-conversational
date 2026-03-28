import Link from 'next/link'
import { getAllBooksMetadata } from '@/lib/books'

function formatTime(minutes: number): string {
  if (minutes < 60) return `~${minutes} min`
  return `~${Math.round(minutes / 60)} hours`
}

export default async function BooksPage() {
  const books = await getAllBooksMetadata()

  return (
    <main className="min-h-screen bg-[#0e0e0f] px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[#888] text-sm hover:text-white transition-colors mb-10"
        >
          ← Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C41A1A] mb-2">
            AI Language Tutor
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Books
          </h1>
          <p className="text-[#888] text-base max-w-lg">
            Classic literature to expand your vocabulary and reading comprehension.
          </p>
        </div>

        {/* Book cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group relative rounded-2xl border border-[#2a2a2e] bg-[#161618] p-7 hover:border-[#C41A1A] transition-colors"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C41A1A] bg-[#C41A1A]/10 rounded-full px-3 py-1 mb-4">
                {book.level}
              </span>
              <p className="font-semibold text-white text-lg mb-1">{book.title}</p>
              <p className="text-[#888] text-sm mb-4">{book.author}</p>
              <p className="text-[#555] text-xs group-hover:text-[#888] transition-colors">
                {book.totalChapters} chapters · {formatTime(book.estimatedMinutes)} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
