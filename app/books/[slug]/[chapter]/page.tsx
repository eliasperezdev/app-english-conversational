import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllBooksMetadata, getBook } from '@/lib/books'
import ReaderView from '@/components/books/ReaderView'

export async function generateStaticParams() {
  const books = await getAllBooksMetadata()
  const params: { slug: string; chapter: string }[] = []
  for (const b of books) {
    const book = await getBook(b.slug)
    if (!book) continue
    for (const ch of book.chapters) {
      params.push({ slug: b.slug, chapter: String(ch.number) })
    }
  }
  return params
}

interface Props {
  params: Promise<{ slug: string; chapter: string }>
}

export default async function ChapterPage({ params }: Props) {
  const { slug, chapter: chapterParam } = await params
  const number = parseInt(chapterParam, 10)

  const book = await getBook(slug)
  if (!book) notFound()

  const chapter = book.chapters.find((c) => c.number === number)
  if (!chapter) notFound()

  const prevChapter = number > 1 ? number - 1 : null
  const nextChapter = number < book.totalChapters ? number + 1 : null

  const subject = chapter.title ?? chapter.heading
  const prefill = encodeURIComponent(`I just read about ${subject} from ${book.title}. Can we talk about it?`)

  return (
    <div
      className="min-h-screen bg-[#0e0e0f]"
      data-notebook-source={`${book.title}, Ch.${number}`}
      data-notebook-level={book.level}
    >
      <ReaderView
        slug={slug}
        chapter={chapter}
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        totalChapters={book.totalChapters}
      />
      <Link
        href={`/chat?prefill=${prefill}`}
        className="fixed bottom-[84px] right-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-[#161618] border border-[#2a2a2e] hover:border-[#C41A1A] text-[#888] hover:text-white text-sm transition-colors shadow-lg"
      >
        Practice conversation
      </Link>
    </div>
  )
}
