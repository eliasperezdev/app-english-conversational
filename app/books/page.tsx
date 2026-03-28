import { getAllBooksMetadata } from '@/lib/books'

export default async function BooksPage() {
  const books = await getAllBooksMetadata()

  return (
    <main>
      <p>Books ({books.length})</p>
      {books.map((b) => (
        <p key={b.slug}>{b.slug}</p>
      ))}
    </main>
  )
}
