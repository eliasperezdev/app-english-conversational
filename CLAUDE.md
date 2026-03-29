# CLAUDE.md — English Practice App

## Qué es este proyecto

Web app para practicar inglés conversacional con IA. El usuario habla o escribe, un LLM responde como tutor, y la respuesta se lee en voz alta con cadencia humana.

Cinco módulos activos:
- **Chat libre** (`/chat`): conversación abierta con selector de nivel (A1–C1 + Adaptive). El nivel persiste en `localStorage("chat_level")` y puede cambiarse desde la topbar con confirmación
- **Chat estructurado** (`/practice/[level]/[topic]`): el usuario elige nivel (A1–C2) y tema; la página muestra dos entradas: conversación y escritura
- **Escritura** (`/practice/[level]/[topic]/write`): el usuario recibe un prompt escrito, envía su texto y recibe feedback estructurado (sin back-and-forth)
- **Guías** (`/guides`): lecciones estructuradas por nivel con bloques de contenido, ejercicios y práctica de voz
- **Libros** (`/books`): lectura de textos en inglés con TTS y highlight palabra-por-palabra, botón de práctica de conversación
- **Notebook** (`/notebook`): vocabulario guardado por el usuario con repaso mediante spaced repetition (SM-2)

---

## Stack

- **Next.js** con App Router
- **Vercel AI SDK v6** — `useChat` de `@ai-sdk/react`, streaming server-side con `streamText`
- **shadcn/ui** — componentes base
- **Tailwind CSS** — estilos
- **Web Speech API** — STT y TTS, nativo del browser, sin APIs externas
- **TypeScript** en todo el proyecto

LLM: **Google Gemini** vía `@ai-sdk/google`. Configurar en `.env.local`. Modelo en `/lib/llm.ts`.

---

## Estructura de carpetas

```
/app
  page.tsx                        → home (grid 2×3: Free Chat, Practice, Guides, Books, Notebook + Coming soon)
  /chat
    page.tsx                      → chat libre (client component; gestiona level state + localStorage)
  /practice
    page.tsx                      → selector de nivel y tema
    /[level]/[topic]
      page.tsx                    → landing con dos entradas: Conversation y Writing Practice
      /write
        page.tsx                  → práctica de escritura (server shell → WriteView)
  /guides
    page.tsx                      → índice de niveles
    /[level]
      page.tsx                    → lista de capítulos del nivel
      /[chapter]
        page.tsx                  → página de capítulo con bloques y sticky bar
  /books
    page.tsx                      → listado de todos los libros
    /[slug]
      page.tsx                    → detalle del libro con lista de capítulos
      /[chapter]
        page.tsx                  → reader page (server shell) + botón "Practice conversation"
  /notebook
    page.tsx                      → índice del notebook (client component)
    /review
      page.tsx                    → sesión de repaso SM-2 (client component)
  /api/chat
    route.ts                      → Route Handler para chat libre y estructurado (streaming)
  /api/write
    route.ts                      → Route Handler para evaluación de escritura (non-streaming, devuelve JSON)
/components
  chat-interface.tsx              → componente compartido de chat (acepta onResetLevel para free mode)
  level-selector.tsx              → selector de nivel para /chat (grid de cards, persiste en localStorage)
  message-bubble.tsx              → burbuja individual de mensaje
  voice-controls.tsx              → botón mic + estado de escucha
  tts-player.tsx                  → lógica de TTS con delay humano
  /blocks
    BlockRenderer.tsx             → switch exhaustivo Block → componente
    SpeakButton.tsx               → botón TTS reutilizable ("use client")
    VocabTable.tsx                → vocab_table
    GrammarCols.tsx               → grammar_cols
    FormulaBox.tsx                → formula_box
    ExamplesGrid.tsx              → examples_grid
    PillList.tsx                  → pill_list
    RuleBlock.tsx                 → rule_block
    Dialogue.tsx                  → dialogue
    NumberGrid.tsx                → number_grid
    ColorSwatches.tsx             → color_swatches
    AlphabetGrid.tsx              → alphabet_grid
    VowelCards.tsx                → vowel_cards
    FillBlank.tsx                 → fill_blank ("use client")
    WordOrder.tsx                 → word_order ("use client")
    Matching.tsx                  → matching ("use client")
    Flashcard.tsx                 → flashcard ("use client")
    Quiz.tsx                      → quiz ("use client")
    SpeakWord.tsx                 → speak_word ("use client")
    Dictation.tsx                 → dictation ("use client")
  /guides
    StickyBar.tsx                 → barra inferior fija ("use client")
  /books
    ReaderView.tsx                → lector con TTS y highlight palabra-por-palabra ("use client")
  /notebook
    save-word-popup.tsx           → popup flotante global para guardar palabras ("use client")
    notebook-nav-card.tsx         → card del home con badge de palabras pendientes ("use client")
  /practice
    PracticeEntry.tsx             → landing con dos cards: Conversation (inline) y Writing (link) ("use client")
  /write
    WriteView.tsx                 → 3 estados: Prompt / Loading / Feedback ("use client")
/lib
  types.ts                        → todos los tipos del proyecto (ver sección Tipos)
  guides.ts                       → getLevel(), getChapter(), getAllLevelSlugs(), etc.
  prompts.ts                      → buildPrompt({ mode, level?, topic? }) — level se usa también en free mode
  tts.ts                          → calcularDelay(text: string): number
  levels.ts                       → configuración de niveles para el chat
  topics.ts                       → configuración de temas para el chat
  books.ts                        → getAllBooksMetadata(), getBook(), getBooksByLevel(), getChapter()
  writing-prompts.ts              → WritingPrompt type, array writingPrompts (82 prompts, A1–C2), getPromptsForTopic(level, topic)
  notebook.ts                     → todas las operaciones del notebook (localStorage), algoritmo SM-2
/content
  /guides
    /a1
      index.ts                    → a1Meta: LevelMeta
      vocabulary.ts               → Chapter (export default)
      grammar.ts                  → Chapter (export default)
      communication.ts            → Chapter (export default)
      pronunciation.ts            → Chapter (export default)
    /a2
      index.ts                    → a2Meta: LevelMeta
      vocabulary.ts, grammar.ts, communication.ts, pronunciation.ts
    /b1  ← próximo nivel
    /b2, /c1, /c2  ← futuros
  /books
    bulfinch-mythology.ts         → Book (export default)
    alice-in-wonderland.ts        → Book (export default)
    war-of-the-worlds.ts          → Book (export default)
```

---

## Módulo Libros — arquitectura

### Tipos — `/lib/types.ts`

```ts
BookChapter   { number, heading, title: string | null, paragraphs: string[] }
Book          { slug, title, author, level, source, totalChapters, estimatedMinutes, chapters: BookChapter[] }
```

`level` debe coincidir con un slug de nivel de guías (ej. `'a2'`) para que el libro aparezca en la página del capítulo correspondiente en `/guides`.

### Acceso a datos — `/lib/books.ts`

```ts
getAllBooksMetadata(): Promise<BookMeta[]>   // Book sin chapters — para listings
getBook(slug): Promise<Book | undefined>    // Book completo con chapters
getBooksByLevel(level): Promise<BookMeta[]> // Para mostrar libros en /guides/[level]/[chapter]
getChapter(slug, number): Promise<BookChapter | undefined>
```

Usa el mismo patrón de registry que `/lib/guides.ts`:

```ts
const BOOK_IMPORTS: Record<string, () => Promise<{ default: Book }>> = {
  'bulfinch-mythology':  () => import('@/content/books/bulfinch-mythology'),
  'alice-in-wonderland': () => import('@/content/books/alice-in-wonderland'),
  'war-of-the-worlds':   () => import('@/content/books/war-of-the-worlds'),
}
```

Cada libro es un dynamic import — bundle separado por libro. Los archivos hacen `export default` del objeto `Book`.

### Archivos de contenido — `/content/books/[slug].ts`

```ts
import type { Book } from '@/lib/types'

const book: Book = {
  slug: 'bulfinch-mythology',
  title: "Bulfinch's Mythology",
  author: 'Thomas Bulfinch',
  level: 'b2',
  source: 'Project Gutenberg',
  totalChapters: 78,
  estimatedMinutes: 420,
  chapters: [
    {
      number: 1,
      heading: 'Chapter I',
      title: 'The Gods',           // null si no hay subtítulo
      paragraphs: ['First paragraph text...', 'Second paragraph text...'],
    },
    // ...
  ],
}

export default book
```

### Reader — `components/books/ReaderView.tsx`

Componente cliente que maneja TTS con:
- **Cola a nivel de oración** — cada párrafo se divide en oraciones via `splitSentences()` (`/lib/tts.ts`); cada oración es su propio `SpeechSynthesisUtterance`
- **Highlight palabra a palabra** via `onboundary` + DOM directo (sin re-renders de React). Fallback timing-based si `onboundary` no dispara (varía por browser/voz)
- **Auto-advance** oración → oración → párrafo siguiente (`onend` avanza oración; al agotar las oraciones del párrafo, pasa al siguiente)
- **Velocidades**: 0.75×, 1×, 1.25×, 1.5× — aplicables en caliente (reinicia desde la oración activa)
- **Barra de progreso** proporcional al párrafo activo; indicador `S X / Y` en el player bar para párrafos con más de una oración
- Click en un párrafo inactivo → empieza desde oración 0; click en una oración dentro del párrafo activo → empieza desde esa oración

### Arquitectura de índices `data-wi`

Los spans de palabras usan índices **paragraph-global** en `data-wi`. Todos los spans del párrafo activo se renderizan en el DOM al activar el párrafo (no solo los de la oración activa). Esto evita race conditions donde `onboundary` dispara antes de que React haya re-renderizado la oración activa.

```ts
// Precomputar spans+offsets para TODAS las oraciones del párrafo activo:
const allWordSpans: WordSpan[][] = []
const sentWordOffsets: number[] = []
for (const sent of sentences) {
  const ws = buildWordSpans(sent)
  sentWordOffsets.push(offset)
  allWordSpans.push(ws)
  offset += ws.length
}
// En onboundary:
const localIdx = findWordIdx(wordSpansRef.current, event.charIndex)
const globalIdx = wordOffsetRef.current + localIdx
paraEl.querySelector(`[data-wi="${globalIdx}"]`)
```

### Highlight — dos mecanismos en paralelo

**Primario — `onboundary`**: preciso, dispara por palabra durante el utterance. Cuando dispara, cancela los timers del fallback y se hace cargo.

**Fallback — timing**: se activa en `utterance.onstart`. Estima la duración de cada palabra basándose en ~12 chars/segundo × rate y programa `setTimeout`s para cada palabra. Si `onboundary` nunca dispara (depende del browser y la voz instalada), el fallback provee highlight aproximado. Brave/Chrome desktop soportan `onboundary` correctamente.

```ts
// En speakSentence:
usingBoundaryRef.current = false

utterance.onboundary = (event) => {
  if (event.name !== 'word') return
  if (!usingBoundaryRef.current) {
    usingBoundaryRef.current = true
    wordTimersRef.current.forEach(clearTimeout)  // cancel fallback
    wordTimersRef.current = []
  }
  applyWordHighlight(paraIdx, wordOffsetRef.current + localIdx)
}

utterance.onstart = () => {
  // schedule timing-based fallback (~12 chars/sec × rate)
  spans.forEach((ws, i) => {
    const id = setTimeout(() => {
      if (usingBoundaryRef.current) return  // onboundary took over
      applyWordHighlight(paraIdx, wordOffsetRef.current + i)
    }, delay)
    wordTimersRef.current.push(id)
  })
}
```

Estilo del highlight activo: `background rgba(196,26,26,0.55)`, `color white`, `padding 0 2px`, `borderRadius 3px`. Transición CSS `0.12s` en cada span para suavizar.

**Notas críticas de TTS en mobile (Android Chrome):**
- Llamar `window.speechSynthesis.getVoices()` en `useEffect([], [])` para precargar voces — sin esto la primera reproducción puede fallar en silencio
- Llamar `window.speechSynthesis.resume()` inmediatamente después de `cancel()` — Android Chrome bug: `cancel()` puede dejar la síntesis en estado pausado, bloqueando el siguiente `speak()`
- `speak()` debe llamarse **sincrónicamente** dentro del click handler — cualquier `setTimeout` (incluso 0ms) rompe el contexto de user gesture en Chrome mobile
- Filtrar errores de `onerror`: `'interrupted'` y `'canceled'` se disparan cuando `cancel()` es llamado, no son errores reales

```ts
// Patrón correcto en speakSentence:
window.speechSynthesis.cancel()
window.speechSynthesis.resume()  // Android Chrome fix
// ... setup utterance para la oración ...
window.speechSynthesis.speak(utterance)  // síncrono, en click handler
```

### `splitSentences` — `/lib/tts.ts`

Divide un párrafo en oraciones. Protege abreviaciones comunes (`Mr.`, `Dr.`, `St.`, etc.) e iniciales (`A.D.`) sustituyendo temporalmente sus puntos con un placeholder `\x00` antes de hacer el split. Cada oración incluye su puntuación terminal.

```ts
splitSentences("Mr. Smith went home. He was tired!")
// → ["Mr. Smith went home.", "He was tired!"]
```

### Chat prefill desde el reader

La página servidor `/books/[slug]/[chapter]/page.tsx` (no el componente cliente) renderiza un `<Link>` fijo:

```tsx
const subject = chapter.title ?? chapter.heading
const prefill = encodeURIComponent(`I just read about ${subject} from ${book.title}. Can we talk about it?`)
<Link href={`/chat?prefill=${prefill}`}>Practice conversation</Link>
```

`/app/chat/page.tsx` es un server component async que lee `searchParams.prefill` y lo pasa a `<ChatInterface prefill={...} />`. El input se inicializa con ese texto.

---

## Cómo agregar un nuevo libro

**Solo tocar dos archivos: el nuevo archivo de contenido y `/lib/books.ts`.**

### Paso 1 — Archivo de contenido

Crear `/content/books/[slug].ts`:

```ts
import type { Book } from '@/lib/types'

const book: Book = {
  slug: 'my-book-slug',        // kebab-case, sin espacios
  title: 'Book Title',
  author: 'Author Name',
  level: 'b1',                 // a1 | a2 | b1 | b2 | c1 | c2
  source: 'Project Gutenberg', // o la fuente del texto
  totalChapters: 20,
  estimatedMinutes: 120,       // tiempo estimado de lectura total
  chapters: [
    {
      number: 1,               // empieza en 1, incremental
      heading: 'Chapter I',    // heading corto (aparece en la topbar)
      title: 'Introduction',   // subtítulo largo, o null si no existe
      paragraphs: [            // array de strings, uno por párrafo
        'First paragraph...',
        'Second paragraph...',
      ],
    },
  ],
}

export default book
```

Convenciones:
- `slug` debe coincidir exactamente con el nombre del archivo (sin `.ts`)
- `level` debe ser uno de los niveles de guías existentes para que aparezca en `/guides`
- `paragraphs` no deben incluir saltos de línea — cada elemento es un párrafo completo
- Textos de dominio público preferidos (Project Gutenberg)

### Paso 2 — Registrar en el registry

En `/lib/books.ts`, añadir al objeto `BOOK_IMPORTS`:

```ts
const BOOK_IMPORTS: Record<string, () => Promise<{ default: Book }>> = {
  'bulfinch-mythology':  () => import('@/content/books/bulfinch-mythology'),
  'alice-in-wonderland': () => import('@/content/books/alice-in-wonderland'),
  'war-of-the-worlds':   () => import('@/content/books/war-of-the-worlds'),
  'my-book-slug':        () => import('@/content/books/my-book-slug'),  // ← agregar
}
```

### Paso 3 — Eso es todo

Las rutas `/books`, `/books/[slug]`, `/books/[slug]/[chapter]`, el `generateStaticParams` y la UI se actualizan automáticamente. Si el `level` del libro coincide con un nivel de guías existente, el libro aparecerá en la sección inferior de esos capítulos de guías.

---

## Módulo Guías — arquitectura

### Tipos — `/lib/types.ts`

```ts
// Índice de nivel
LevelMeta     { level, label, description, available, chapters: ChapterMeta[] }
ChapterMeta   { slug, title, icon, description, available, practice_route? }

// Contenido
Chapter       { slug, title, description, sections: Section[] }
Section       { id, label, dotColor, cards: Card[] }
Card          { id, icon, iconBg, title, blocks: Block[] }

// Discriminated union por tipo
Block = vocab_table | grammar_cols | formula_box | examples_grid | pill_list
      | rule_block | dialogue | number_grid | color_swatches | alphabet_grid
      | vowel_cards                                          // ← read-only (11)
      | fill_blank | word_order | matching | flashcard | quiz  // ← interactive (5)
      | speak_word | dictation                              // ← speech (2)
```

### Acceso a datos — `/lib/guides.ts`

```ts
getAllLevelSlugs(): string[]
getAllChapterSlugs(levelSlug): string[]
getLevel(slug): LevelMeta | undefined
getChapter(levelSlug, chapterSlug): Promise<Chapter | undefined>  // dynamic import
```

`getChapter` usa `import()` dinámico para que cada capítulo sea un bundle separado. Los archivos de contenido hacen `export default` del objeto `Chapter`.

### Archivos de contenido

Cada `content/guides/[level]/[chapter].ts` sigue este patrón:

```ts
import type { Chapter } from '@/lib/types'

const vocabulary: Chapter = {
  slug: 'vocabulary',
  title: '...',
  description: '...',
  sections: [
    {
      id: 'vocabulary',
      label: 'Vocabulario',
      dotColor: 'var(--gold)',    // usar variables CSS del tema
      cards: [
        {
          id: 'greetings',
          icon: '👋',
          iconBg: '#fef3d0',      // color de fondo del icono (puede ser gradient)
          title: 'Saludos',
          blocks: [
            { type: 'vocab_table', data: { headers: [...], rows: [...] } },
            { type: 'fill_blank', data: [...] },
          ],
        },
      ],
    },
  ],
}

export default vocabulary
```

### Variables CSS disponibles en `dotColor`

```css
var(--gold)   #c89a2a
var(--teal)   #2da899
var(--blue)   #3a8fd4
var(--coral)  #e05a44
```

### `practice_route` en ChapterMeta

Si un capítulo tiene `practice_route`, el capítulo muestra una sticky bar con un botón que lleva a `/practice/[level]/[practice_route]`. Solo los capítulos de comunicación (`communication`) deben tenerlo, apuntando a un topic de `/lib/topics.ts`.

Mapa actual:
- a1/communication → `shopping`
- a2/communication → `travel`

Niveles futuros: asignar el topic que más se alinee con el contenido del capítulo.

---

## Cómo agregar un nuevo nivel (B1 → C2)

**No tocar ningún archivo existente excepto `/lib/guides.ts`.**

### Paso 1 — Contenido

Crear `/content/guides/[level]/` con 5 archivos:

```
index.ts          → export const b1Meta: LevelMeta = { level: 'b1', ... }
vocabulary.ts     → export default vocabularyChapter: Chapter
grammar.ts        → export default grammarChapter: Chapter
communication.ts  → export default communicationChapter: Chapter
pronunciation.ts  → export default pronunciationChapter: Chapter
```

Cada archivo de capítulo usa `export default` (requerido por el dynamic import de `getChapter`).

### Paso 2 — Registrar en el registry

En `/lib/guides.ts`, añadir al objeto `LEVELS`:

```ts
import { b1Meta } from '@/content/guides/b1/index'

const LEVELS: Record<string, LevelMeta> = {
  a1: a1Meta,
  a2: a2Meta,
  b1: b1Meta,   // ← agregar aquí
}
```

### Paso 3 — `practice_route`

En `index.ts` del nuevo nivel, añadir `practice_route` al chapter de `communication`:

```ts
{
  slug: 'communication',
  title: '...',
  available: true,
  practice_route: 'restaurant',   // ← topic de /lib/topics.ts
}
```

### Paso 4 — Eso es todo

Las rutas, `generateStaticParams`, `BlockRenderer`, y toda la UI se actualizan automáticamente. No hay más cambios necesarios.

### Convenciones de contenido por nivel

| Nivel | dotColor sección vocab | Profundidad ejercicios |
|---|---|---|
| A1 | `var(--gold)` | fill_blank simple, matching, flashcard básico |
| A2 | `var(--teal)` | fill_blank con contexto, word_order, quiz |
| B1 | `var(--blue)` | fill_blank avanzado, word_order complejo, dictation |
| B2 | `var(--coral)` | speak_word con frases, dictation, quiz con opciones similares |
| C1 | `var(--gold)` | ejercicios de naturalidad, idioms, speak_word con oraciones largas |
| C2 | `var(--teal)` | dictation de frases complejas, matching de matices, quiz de registro |

Mantener los 4 capítulos por nivel: `vocabulary`, `grammar`, `communication`, `pronunciation`.

---

## Bloques — referencia

### Read-only

| type | data | Uso |
|---|---|---|
| `vocab_table` | `{ headers, rows: VocabRow[] }` | Tablas EN/IPA/ES. `SpeakButton` en cada fila. |
| `grammar_cols` | `{ columns: GrammarColumn[] }` | Columnas affirm/neg/inter. Items con `dangerouslySetInnerHTML`. |
| `formula_box` | `{ lines: FormulaLine[] }` | Fórmulas gramaticales en monospace. |
| `examples_grid` | `ExampleItem[]` | Grid de ejemplos EN/ES. `SpeakButton` en cada item. |
| `pill_list` | `{ color, label?, items: PillItem[] }` | Pills de vocabulario. `SpeakButton` en cada pill. |
| `rule_block` | `{ html }` | Regla gramatical con HTML. |
| `dialogue` | `{ title, lines: DialogueLine[] }` | Diálogo con burbujas. `SpeakButton` en cada línea. |
| `number_grid` | `NumberItem[]` | Grid de números/palabras. |
| `color_swatches` | `ColorSwatch[]` | Grid de colores con muestra visual. |
| `alphabet_grid` | `AlphabetItem[]` | Grid del alfabeto con IPA. |
| `vowel_cards` | `VowelCard[]` | Tarjetas de sonidos vocálicos con colores propios. |

### Interactive ("use client", estado local)

| type | data | Comportamiento |
|---|---|---|
| `fill_blank` | `FillBlankItem[]` | Input de texto, múltiples respuestas válidas, hint, score final |
| `word_order` | `WordOrderItem[]` | Chips clickeables, construir oración, shuffle post-mount |
| `matching` | `{ pairs }` | Dos columnas, click para emparejar, flash rojo en error, shuffle post-mount |
| `flashcard` | `FlashcardItem[]` | Flip EN/ES, prev/next |
| `quiz` | `QuizItem[]` | Multiple choice, feedback inmediato, score final |

### Speech ("use client", Web Speech API)

| type | data | Comportamiento |
|---|---|---|
| `speak_word` | `SpeakWordItem[]` | TTS + STT, compara transcript con palabra esperada |
| `dictation` | `DictationItem[]` | TTS con `calcularDelay`, input de texto, compara normalizado |

---

## SpeakButton

Componente reutilizable `components/blocks/SpeakButton.tsx`. Props: `text: string`, `size?: 'xs' | 'sm'`.

Cancela síntesis en curso antes de hablar. Muestra estado activo en rojo mientras habla. Seguro en SSR (accede a `window` solo en el handler del click).

Está integrado en: `VocabTable`, `ExamplesGrid`, `PillList`, `Dialogue`.

---

## Regla de hidratación (importante)

**No usar `Math.random()` ni `typeof window` durante el render de componentes cliente.**

- `Math.random()` en `useState(() => ...)` → mismatch SSR/cliente. Fix: inicializar con orden original, hacer shuffle en `useEffect`.
- `typeof window === 'undefined'` en render → mismatch. Fix: usar `useState(false)` + `useEffect(() => setState(true), [])`.
- `window` en event handlers está bien — solo se ejecuta en el cliente.

---

## Módulo Escritura — arquitectura

### Flujo

Ciclo único sin back-and-forth: el usuario recibe un prompt → escribe → envía → recibe feedback estructurado. Puede reintentar con el mismo prompt o pedir uno nuevo.

### Tipos — `/lib/writing-prompts.ts`

```ts
WritingPrompt {
  id: string                          // "${level}-${topic}-${n}"
  level: string                       // "A1" | "A2" | ... | "C2"
  topic: string                       // slug del topic (coincide con topics.ts)
  title: string                       // label corto mostrado al usuario
  instruction: string                 // texto completo de la tarea
  wordRange: [min, max]               // rango objetivo de palabras
  format: 'email' | 'message' | 'opinion' | 'description' | 'story'
  tips: string[]                      // 2-3 tips colapsables antes de escribir
}
```

`getPromptsForTopic(level, topic)` filtra por nivel (uppercase) y topic. Devuelve array vacío si no hay prompts para esa combinación — la página devuelve `notFound()` en ese caso.

Hay 2 prompts por topic por nivel (82 en total). Para agregar prompts solo tocar `/lib/writing-prompts.ts`.

### API Route — `/api/write`

**Non-streaming** — usa `generateText`, espera la respuesta completa y la devuelve como JSON.

Recibe:
```ts
{ text: string, prompt: WritingPrompt, level: string, topic: string }
```

Devuelve `EvaluationResult` (exportado desde el route):
```ts
{
  overall: string                     // resumen alentador en una oración
  score: {
    grammar: number                   // 0–10
    vocabulary: number
    coherence: number
    task: number                      // ¿completó la tarea?
  }
  good: string[]                      // 2-3 cosas bien hechas (específicas)
  improve: Array<{
    original: string                  // frase exacta del texto del usuario
    suggestion: string                // versión mejorada
    explanation: string               // por qué es mejor
  }>
  rewrite: string                     // versión pulida del texto completo
}
```

El prompt del sistema adapta idioma y número de correcciones al nivel:
- A1/A2: explicaciones en español, máximo 1 corrección, muy alentador
- B1/B2: explicaciones en inglés, hasta 2 correcciones
- C1: inglés, foco en registro y precisión, hasta 3 correcciones

Si el LLM devuelve JSON envuelto en markdown fences (` ```json `), se extrae antes de parsear. Si el parse falla, el route devuelve `{ error, raw }` con status 500.

### WriteView — `components/write/WriteView.tsx`

Tres estados en un solo componente cliente:

**STATE 1 — PROMPT**
- Badge de formato con color por tipo (email=azul, message=teal, opinion=ámbar, description=morado, story=rosa)
- Badge del rango de palabras
- Botón "New prompt ↺" (cicla por los prompts del topic en orden)
- Texto de instrucción
- Panel de tips colapsable
- Textarea autoexpandible (height se ajusta via `el.style.height = el.scrollHeight + "px"` en cada change)
- Contador de palabras con colores: gris si vacío, verde si en rango, rojo si fuera de rango
- Botón Submit deshabilitado hasta que el word count esté dentro del rango

**STATE 2 — LOADING**
- Tres puntos con animación bounce escalonada
- Texto "Analysing your writing…"

**STATE 3 — FEEDBACK**
- `overall`: párrafo grande
- 4 pills de score (Grammar / Vocabulary / Coherence / Task) — verde ≥8, ámbar 5–7, rojo ≤4
- Dos columnas: "What you did well" (cards con borde verde) | "What to improve" (original → suggestion + explanation)
- Panel colapsable "See a polished version" con el `rewrite` y nota "Use this as a reference, not a copy"
- Tres botones: "Try again — same prompt" / "New prompt" / "Back to practice"

Word count: `text.trim().split(/\s+/).filter(Boolean).length` — solo palabras no vacías.

### Entrada desde `/practice/[level]/[topic]`

La página del topic ya no monta `ChatInterface` directamente. Renderiza `PracticeEntry` (client component) que muestra dos cards:
- **💬 Conversation** → monta `ChatInterface` inline (sin cambio de URL)
- **✍️ Writing Practice** → `<Link>` a `/practice/[level]/[topic]/write`

---

## API Route — `/api/chat`

Único endpoint para chat libre y estructurado. Recibe:

```ts
{
  messages: Message[],
  mode: "free" | "practice",
  level?: string,   // free: "A1"|"A2"|"B1"|"B2"|"C1"|"C2"|"adaptive" — practice: "A1"–"C2"
  topic?: string,   // solo requerido en practice mode
}
```

System prompt construido server-side con `buildPrompt()`. Usa `streamText` de Vercel AI SDK.

---

## Contexto del chat

- Solo en memoria del cliente via `useChat`
- Ventana deslizante de **20 mensajes** máximo
- El system prompt va separado, no ocupa lugar en la ventana

```ts
const contextMessages = messages.slice(-20)
```

---

## System prompts — `lib/prompts.ts`

### Chat libre (free mode)

El nivel se recibe del cliente (guardado en `localStorage("chat_level")`). Valores válidos: `A1`, `A2`, `B1`, `B2`, `C1`, `C2`, `adaptive`. Si no se pasa nivel, default es B1.

El prompt combina tres bloques:

**1. Persona por nivel (`PERSONA_BY_LEVEL`)**
- A1/A2: habla simple, oraciones cortas, muy alentador y paciente
- B1/B2: habla natural, engage con las ideas del usuario
- C1/C2: igual intelectual, vocabulario sofisticado, desafía ideas ocasionalmente
- `adaptive`: arranca en B1, adapta complejidad según lo que escribe el usuario sin mencionarlo

**2. Comportamiento de corrección (`CORRECTION_BY_LEVEL`)**
- A1/A2: solo corrige errores que causen malentendidos; lo hace repitiendo la forma correcta de forma natural, sin señalarlo
- B1/B2: siempre corrige errores gramaticales y colocaciones; bloque explícito después de la respuesta:
  ```
  ---
  💡 "[frase del usuario]" → "[versión corregida]"
  Why: [una oración en inglés simple]
  ```
- C1/C2: corrige registro, imprecisión y frases no naturales; mismo formato de bloque, más matiz; puede agregar "Native speakers might also say: [alternativa]"
- `adaptive`: usa comportamiento B1 mientras adapta el nivel

**3. Reglas universales (`CORRECTION_RULES_ALL`)** — aplican a todos los niveles:
- Máximo una corrección por mensaje
- No corregir el mismo tipo de error dos veces seguidas
- El bloque de corrección siempre va al final, nunca embebido en la respuesta
- No agregar el bloque si el mensaje no tiene errores

### Chat estructurado (practice mode)
```ts
function buildPrompt({ level, topic }) {
  const levelConfig = levels[level]
  const topicConfig = topics[topic]
  return `${levelConfig.instructions}
Topic: ${topicConfig.description}
Vocabulary to use naturally: ${topicConfig.vocabulary.join(", ")}

${CORRECTION_BY_LEVEL[level]}
${CORRECTION_RULES_ALL}`
}
```

---

## TTS con delay humano — `lib/tts.ts`

```ts
export function calcularDelay(text: string): number {
  const words = text.split(" ").length
  const base = Math.min(1500, words * 30)
  const jitter = Math.random() * 200 - 100
  return Math.max(300, base + jitter)
}
```

Flujo: stream completo → calcular delay → setTimeout → `window.speechSynthesis.speak()`.

---

## Web Speech API

### Config universal (chat + guides)
```ts
// TTS
const u = new SpeechSynthesisUtterance(text)
u.lang = 'en-US'
u.rate = 0.95
window.speechSynthesis.speak(u)

// STT
const SR = window.webkitSpeechRecognition ?? window.SpeechRecognition
const recognition = new SR()
recognition.lang = 'en-US'
recognition.continuous = false
recognition.interimResults = false
```

Siempre hacer `window.speechSynthesis.cancel()` antes de hablar para evitar queue acumulada.

En el reader de libros, añadir `window.speechSynthesis.resume()` después de `cancel()` (bug de Android Chrome donde `cancel()` deja la síntesis pausada). Ver sección Módulo Libros para detalles.

---

## Configuración de niveles — `lib/levels.ts`

```ts
A1: { label: "Beginner",      instructions: "Very simple. Max 2 sentences.", correctionStyle: "Model correct usage, don't correct." }
A2: { label: "Elementary",    instructions: "Simple but varied. Max 3 sentences.", correctionStyle: "Model correct usage." }
B1: { label: "Intermediate",  instructions: "Natural. Avoid complex idioms.", correctionStyle: "Subtly rephrase errors." }
B2: { label: "Upper-Int",     instructions: "Fluent. Light idioms OK.", correctionStyle: "Gently note unnatural phrasing." }
C1: { label: "Advanced",      instructions: "Native-like. Use idioms.", correctionStyle: "Point out unnatural phrasing." }
C2: { label: "Mastery",       instructions: "Full native register.", correctionStyle: "Precision corrections only." }
```

---

## Configuración de temas — `lib/topics.ts`

Temas actuales: `shopping`, `travel`, `restaurant`, `work`, `health`.

Para agregar un tema: añadir entrada al objeto `topics` en `lib/topics.ts`. No tocar ninguna otra parte del sistema.

---

## Módulo Notebook — arquitectura

### Descripción

El usuario selecciona cualquier texto en la app y lo guarda en un notebook personal. Las palabras se repasan con spaced repetition (algoritmo SM-2). Todo vive en `localStorage`, sin backend.

### Tipo principal — `/lib/notebook.ts`

```ts
type NotebookEntry = {
  id: string                    // crypto.randomUUID()
  word: string                  // palabra o frase corta seleccionada
  context: string               // oración completa donde apareció
  translation: string | null    // añadida por el usuario después
  source: {
    type: 'guide' | 'book' | 'chat'
    label: string               // "C1 Vocabulary" / "Alice in Wonderland, Ch.3" / "Free chat"
    url: string                 // link de vuelta al origen
  }
  level: string                 // "b1", "c1", etc.
  savedAt: number               // Date.now()
  review: {
    interval: number            // días hasta el próximo repaso
    nextReview: number          // timestamp
    easeFactor: number          // empieza en 2.5 (SM-2)
    repetitions: number         // veces repasada
  }
}
```

### API de `/lib/notebook.ts`

```ts
getEntries(): NotebookEntry[]
saveEntry(entry: Omit<NotebookEntry, 'id' | 'savedAt' | 'review'>): NotebookEntry
deleteEntry(id: string): void
updateTranslation(id: string, translation: string): void
updateReview(id: string, quality: 0 | 1 | 2 | 3): void
getDueEntries(): NotebookEntry[]   // nextReview <= Date.now()
getStats(): { total, dueToday, streak }
```

`quality`: 0=blackout, 1=wrong, 2=hard, 3=easy.

### Algoritmo SM-2 en `updateReview`

```ts
if (quality < 2) {
  interval = 1; repetitions = 0
} else {
  if (repetitions === 0) interval = 1
  else if (repetitions === 1) interval = 6
  else interval = Math.round(interval * easeFactor)
  easeFactor = Math.max(1.3, easeFactor + 0.1 - (3-quality)*(0.08 + (3-quality)*0.02))
  repetitions++
}
nextReview = Date.now() + interval * 86_400_000
```

Streak: se actualiza con cada `updateReview`. Se guarda en `localStorage("notebook_streak")` como `{ lastDate: string, count: number }`.

### Save Word Popup — `components/notebook/save-word-popup.tsx`

Componente global (`"use client"`) montado en `app/layout.tsx`. Escucha `document.addEventListener('selectionchange')` con debounce de 350ms.

Condiciones para mostrar el popup:
- Selección de 1–6 palabras
- No está dentro de `textarea`, `input` o `[contenteditable]`

Posición: `getBoundingClientRect()` de la selección. Aparece arriba si hay espacio, abajo si está cerca del top. En mobile (`< 640px`) aparece como bottom sheet.

Inferencia del source desde el DOM:
```ts
// Pages add these data attributes to their main container:
data-notebook-source="C1 Vocabulary"   // label del source
data-notebook-level="c1"               // level slug

// Popup reads them:
document.querySelector('[data-notebook-source]')?.dataset.notebookSource
```

Páginas que tienen estos atributos:
- `app/guides/[level]/[chapter]/page.tsx` → `<main data-notebook-source="{BADGE} {chapter.title}" data-notebook-level={levelSlug}>`
- `app/books/[slug]/[chapter]/page.tsx` → `<div data-notebook-source="{book.title}, Ch.{number}" data-notebook-level={book.level}>`

Para `/chat` y `/practice/...` se infiere del `window.location.pathname` directamente (no necesitan data attributes).

### Notebook Index — `/app/notebook/page.tsx`

Client component. Filtros: source (All/Guides/Books/Chat), level (All/A1…C2), sort (Newest/Oldest/Due first). Cada entrada es una card expandible con:
- Palabra, contexto con highlight en rojo, badges de source y level, fecha relativa
- Al expandir: campo de traducción editable, link "Go to source", historial de repaso

### Review Session — `/app/notebook/review/page.tsx`

Client component. Query param `?mode=due` (default) o `?mode=all`. Deck shuffleado al montar.

Estados: `front` (solo la palabra) → `back` (contexto + traducción + 4 botones de calidad) → siguiente carta → `complete` (stats + next review date).

Keyboard shortcuts: `Space`/`→` para revelar, `1`–`4` para calidad.

`useSearchParams()` requiere `<Suspense>`. Patrón usado: el componente interno se llama `ReviewSession` y el default export `ReviewPage` lo envuelve en `<Suspense fallback={...}>`. Aplica a cualquier página que use `useSearchParams` en el App Router.

### NotebookNavCard — `components/notebook/notebook-nav-card.tsx`

Card del home (`app/page.tsx`). Client component que lee `getStats().dueToday` en `useEffect` y muestra un badge rojo con el número si hay palabras pendientes.

---

## Design tokens

```
bg principal:   #0e0e0f
superficie card: #161618
superficie deep: #111113
borde:          #2a2a2e
acento rojo:    #C41A1A
texto primario: white
texto secundario: #d0d0d5
texto muted:    #888
texto disabled: #555
verde correcto: #4ade80
rojo incorrecto: #f87171
azul IPA:       #3a8fd4
```

---

## Convenciones

- Componentes PascalCase, archivos kebab-case
- Props tipadas con interfaces TypeScript, sin `any`
- Páginas de guías: server components por defecto
- Bloques interactivos y de voz: `"use client"`, estado local únicamente
- `dangerouslySetInnerHTML` permitido solo en `grammar_cols` items y `rule_block` — contenido viene de archivos TS internos, nunca de input del usuario
- El API route no tiene lógica de negocio
- `generateStaticParams` en todas las rutas dinámicas de `/guides` y `/books`

---

## Variables de entorno

```
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.5-flash
LLM_MAX_RETRIES=3
```

Provider: `@ai-sdk/google`. La API key va en `.env.local` (nunca en el repo).
