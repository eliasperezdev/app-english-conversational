import type { Book, BookChapter } from '@/lib/types'

type BookMeta = Omit<Book, 'chapters'>

// Registry of all available books (slug → dynamic import)
const BOOK_IMPORTS: Record<string, () => Promise<{ default: Book }>> = {
  'bulfinch-mythology': () => import('@/content/books/bulfinch-mythology'),
}

export function getAllBooks(): BookMeta[] {
  // Metadata only — no chapters loaded
  return Object.keys(BOOK_IMPORTS).map((slug) => {
    // We return a stub; full metadata comes from getBook() on demand.
    // For listing we only need what's in the file's top-level fields,
    // so we load them lazily. Return slug-keyed placeholders resolved
    // at build time via generateStaticParams, or call getBook() per slug.
    // For now expose the slug so callers can hydrate with getBook().
    return { slug } as BookMeta
  })
}

export async function getBook(slug: string): Promise<Book | undefined> {
  const loader = BOOK_IMPORTS[slug]
  if (!loader) return undefined
  const mod = await loader()
  return mod.default
}

export async function getAllBooksMetadata(): Promise<BookMeta[]> {
  const entries = await Promise.all(
    Object.keys(BOOK_IMPORTS).map(async (slug) => {
      const book = await getBook(slug)
      if (!book) return null
      const { chapters: _chapters, ...meta } = book
      return meta
    })
  )
  return entries.filter((b): b is BookMeta => b !== null)
}

export async function getChapter(
  slug: string,
  number: number
): Promise<BookChapter | undefined> {
  const book = await getBook(slug)
  return book?.chapters.find((c) => c.number === number)
}
