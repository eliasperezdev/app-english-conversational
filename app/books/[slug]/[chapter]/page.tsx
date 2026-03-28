import { notFound } from 'next/navigation'
import { getAllBooksMetadata, getBook, getChapter } from '@/lib/books'

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
  const chapter = await getChapter(slug, number)
  if (!chapter) notFound()

  return (
    <main>
      <p>slug: {slug}</p>
      <p>chapter: {chapter.number}</p>
      <p>heading: {chapter.heading}</p>
      <p>title: {chapter.title ?? '(none)'}</p>
      <p>paragraphs: {chapter.paragraphs.length}</p>
    </main>
  )
}
