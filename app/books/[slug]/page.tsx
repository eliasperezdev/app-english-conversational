import { notFound } from 'next/navigation'
import { getAllBooksMetadata, getBook } from '@/lib/books'

export async function generateStaticParams() {
  const books = await getAllBooksMetadata()
  return books.map((b) => ({ slug: b.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params
  const book = await getBook(slug)
  if (!book) notFound()

  return (
    <main>
      <p>slug: {book.slug}</p>
      <p>title: {book.title}</p>
      <p>author: {book.author}</p>
      <p>totalChapters: {book.totalChapters}</p>
    </main>
  )
}
