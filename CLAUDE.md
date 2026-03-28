# CLAUDE.md — English Practice App

## Qué es este proyecto

Web app para practicar inglés conversacional con IA. El usuario habla o escribe, un LLM responde como tutor, y la respuesta se lee en voz alta con cadencia humana.

Tres módulos activos:
- **Chat libre** (`/chat`): conversación abierta, sin restricciones de tema ni nivel
- **Chat estructurado** (`/practice/[level]/[topic]`): el usuario elige nivel (A1–C2) y tema
- **Guías** (`/guides`): lecciones estructuradas por nivel con bloques de contenido, ejercicios y práctica de voz

Un cuarto módulo está planificado pero **no ha comenzado**. No crear ni tocar hasta que esté indicado.

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
  page.tsx                        → home (grid 2×2: Free Chat, Practice, Guides, Coming soon)
  /chat
    page.tsx                      → chat libre
  /practice
    page.tsx                      → selector de nivel y tema
    /[level]/[topic]
      page.tsx                    → chat estructurado
  /guides
    page.tsx                      → índice de niveles
    /[level]
      page.tsx                    → lista de capítulos del nivel
      /[chapter]
        page.tsx                  → página de capítulo con bloques y sticky bar
  /api/chat
    route.ts                      → Route Handler único para chat libre y estructurado
/components
  chat-interface.tsx              → componente compartido de chat
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
/lib
  types.ts                        → todos los tipos del proyecto (ver sección Tipos)
  guides.ts                       → getLevel(), getChapter(), getAllLevelSlugs(), etc.
  prompts.ts                      → buildPrompt({ mode, level?, topic? })
  tts.ts                          → calcularDelay(text: string): number
  levels.ts                       → configuración de niveles para el chat
  topics.ts                       → configuración de temas para el chat
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
```

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

## API Route — `/api/chat`

Único endpoint para chat libre y estructurado. Recibe:

```ts
{
  messages: Message[],
  mode: "free" | "practice",
  level?: string,
  topic?: string,
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

### Chat libre
```ts
`You are a friendly English tutor and conversation partner.
Be natural, warm, and encouraging. Correct grammar mistakes
gently and naturally within your response, not as a separate note.
Keep responses conversational — 2 to 4 sentences max.`
```

### Chat estructurado
```ts
function buildPrompt({ level, topic }) {
  const levelConfig = levels[level]
  const topicConfig = topics[topic]
  return `${levelConfig.instructions}
Topic: ${topicConfig.description}
Vocabulary to use naturally: ${topicConfig.vocabulary.join(", ")}
${levelConfig.correctionStyle}`
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
- `generateStaticParams` en todas las rutas dinámicas de `/guides`

---

## Variables de entorno

```
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.5-flash
LLM_MAX_RETRIES=3
```

Provider: `@ai-sdk/google`. La API key va en `.env.local` (nunca en el repo).
