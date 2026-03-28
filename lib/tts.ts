// Abbreviations that end with a period but are NOT sentence endings.
// Sorted longest-first so the regex alternation is unambiguous.
const ABBREVS = [
  'Mrs', 'Mss', 'Drs', 'Sts',
  'Mr', 'Ms', 'Dr', 'St', 'Jr', 'Sr', 'vs', 'etc', 'approx',
  'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const ABBREV_RE = new RegExp(
  `\\b(${ABBREVS.join('|')})\\.`,
  'g'
)

// Placeholder that cannot appear in normal prose.
const PLACEHOLDER = '\x00'

/**
 * Splits a paragraph into sentences.
 * Handles common abbreviations so "Mr. Smith" isn't split.
 * Each sentence includes its terminal punctuation.
 */
export function splitSentences(text: string): string[] {
  if (!text.trim()) return []

  // 1. Temporarily hide abbreviation periods.
  const protected_ = text.replace(ABBREV_RE, `$1${PLACEHOLDER}`)

  // 2. Also hide periods used as initials: single uppercase letter followed by period (e.g. "A.")
  const withInitials = protected_.replace(/\b([A-Z])\.(?=[A-Z\s])/g, `$1${PLACEHOLDER}`)

  // 3. Split on sentence-ending punctuation followed by whitespace + next token.
  //    Keeps the delimiter attached to the preceding sentence.
  const raw = withInitials.split(/(?<=[.!?])\s+(?=[A-Z"'\u2018\u2019\u201C\u201D])/)

  // 4. Restore placeholders and trim.
  return raw
    .map(s => s.replace(new RegExp(PLACEHOLDER, 'g'), '.').trim())
    .filter(s => s.length > 0)
}

export function calcularDelay(text: string): number {
  const words = text.split(" ").length
  // Short pause proportional to text length, capped at 1.5s
  const base = Math.min(1500, words * 30)
  const jitter = Math.random() * 200 - 100 // ±100ms
  return Math.max(300, base + jitter)
}
