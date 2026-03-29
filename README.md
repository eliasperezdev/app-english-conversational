# English Speech

A mobile-first web app to practice conversational English with an AI tutor. The user speaks or types, a language model responds in character, and the reply is read aloud with human-like cadence.

---

## Features

| Module | Route | What it does |
|---|---|---|
| **Free Chat** | `/chat` | Open conversation at any level (A1–C1 + Adaptive). Level persists across sessions. |
| **Structured Practice** | `/practice/[level]/[topic]` | Guided conversation or writing on a specific topic and level. |
| **Writing Practice** | `/practice/[level]/[topic]/write` | One-shot writing prompt with structured AI feedback (score, corrections, rewrite). |
| **Guides** | `/guides/[level]/[chapter]` | Structured lessons with vocabulary tables, grammar cards, and interactive exercises. |
| **Books** | `/books/[slug]/[chapter]` | Classic literature with sentence-by-sentence TTS and word-level highlight. |
| **Notebook** | `/notebook` | Save words from anywhere in the app. Review with spaced repetition (SM-2). |

---

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** — App Router, server components, `generateStaticParams`
- **[Vercel AI SDK v6](https://sdk.vercel.ai/)** — `useChat` / `streamText` / `generateText`
- **[Google Gemini](https://ai.google.dev/)** — LLM via `@ai-sdk/google` (default: `gemini-2.5-flash`)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** — base UI components
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)** — STT and TTS, native browser, no external APIs
- **TypeScript** throughout

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Google AI Studio](https://aistudio.google.com/) API key

### Installation

```bash
git clone git@github.com:eliasperezdev/app-english-conversational.git
cd app-english-conversational
npm install
```

### Environment

Create a `.env.local` file at the project root:

```env
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.5-flash
LLM_MAX_RETRIES=3
```

### Run

```bash
npm run dev        # http://localhost:3000
npm run dev:https  # HTTPS (required for STT on mobile)
npm run build
npm start
```

> **Note:** Speech-to-text requires a secure context (`https://`). Use `dev:https` when testing on mobile.

---

## Project Structure

```
/app
  page.tsx                          Home — module grid
  /chat/page.tsx                    Free Chat (level selector + chat)
  /practice
    page.tsx                        Level + topic selector
    /[level]/[topic]/page.tsx       Conversation or Writing choice
    /[level]/[topic]/write/page.tsx Writing practice
  /guides
    page.tsx                        Level index
    /[level]/page.tsx               Chapter list
    /[level]/[chapter]/page.tsx     Lesson with blocks + exercises
  /books
    page.tsx                        Book listing
    /[slug]/page.tsx                Chapter list
    /[slug]/[chapter]/page.tsx      Reader with TTS
  /notebook
    page.tsx                        Saved vocabulary with filters
    /review/page.tsx                Spaced repetition review session
  /api/chat/route.ts                Streaming chat endpoint
  /api/write/route.ts               Non-streaming writing evaluation

/components
  chat-interface.tsx                Shared chat UI (free + practice mode)
  level-selector.tsx                Level picker for /chat
  message-bubble.tsx                Individual message bubble
  voice-controls.tsx                Mic button + STT state
  tts-player.tsx                    TTS with human delay
  /blocks                           Guide lesson block renderers
  /books/ReaderView.tsx             TTS reader with word highlight
  /write/WriteView.tsx              3-state writing UI (prompt/loading/feedback)
  /practice/PracticeEntry.tsx       Mode choice: conversation vs writing
  /notebook/save-word-popup.tsx     Global popup on text selection
  /notebook/notebook-nav-card.tsx   Home card with due-word badge
  /guides/StickyBar.tsx             Fixed practice CTA bar
  /ui/page-wrapper.tsx              480px centered column wrapper
  /ui/back-button.tsx               Shared back navigation button

/content
  /guides/[level]/*.ts              Lesson content (vocabulary, grammar, etc.)
  /books/*.ts                       Book content (chapters + paragraphs)

/lib
  llm.ts                            LLM model configuration
  prompts.ts                        System prompt builder
  levels.ts                         Level configs (A1–C2)
  topics.ts                         Topic configs
  guides.ts                         Guide data access (dynamic imports)
  books.ts                          Book data access (dynamic imports)
  writing-prompts.ts                82 writing prompts across levels/topics
  notebook.ts                       Notebook CRUD + SM-2 algorithm
  tts.ts                            calcularDelay + splitSentences
  types.ts                          All shared TypeScript types
```

---

## How It Works

### Chat

`useChat` (AI SDK) handles streaming on the client. The user's messages, level, and topic are sent to `/api/chat`, which builds a system prompt via `buildPrompt()` and streams back the response with `streamText`. A rolling window of the last 20 messages is used as context — the system prompt sits outside this window and never crowds it out.

The tutor persona, vocabulary level, and correction style are fully controlled by the system prompt — no fine-tuning required.

### Writing Evaluation

The user receives a prompt, writes a response, and submits it. `/api/write` calls `generateText` (non-streaming) and returns a structured JSON object: an overall score, dimension scores (grammar / vocabulary / coherence / task), 2–3 specific corrections with suggestions, and a full polished rewrite.

### TTS (Text-to-Speech)

**Chat:** the complete assistant message is spoken via `SpeechSynthesisUtterance` after a short human-like delay calculated by `calcularDelay` (word count + jitter).

**Book reader:** each paragraph is split into sentences with `splitSentences`, and each sentence is its own utterance queued in order. Word-level highlighting uses `onboundary` events; a timing-based fallback handles browsers that don't fire them (e.g. some Android/iOS voices).

### Spaced Repetition

The Notebook implements the [SM-2 algorithm](https://www.supermemo.com/en/blog/application-of-a-computer-to-improve-the-results-obtained-in-working-with-the-supermemo-method) stored entirely in `localStorage`. Each entry tracks ease factor, interval (days), and next review timestamp. After each review, a quality rating (0 = blackout → 3 = easy) updates the schedule.

### Layout

Every page renders inside a `max-w-[480px]` centered column (`PageWrapper`) so the app looks and feels like a native mobile app on any screen size. The dark background lives on `<body>` in the root layout; the column floats on top of it.

---

## Adding Content

### New book

1. Create `/content/books/[slug].ts` exporting a `Book` object (see any existing book as reference).
2. Register it in `/lib/books.ts` → `BOOK_IMPORTS`.

All routes, listings, and `generateStaticParams` update automatically.

### New guide level

1. Create `/content/guides/[level]/` with `index.ts`, `vocabulary.ts`, `grammar.ts`, `communication.ts`, `pronunciation.ts`.
2. Register the level meta in `/lib/guides.ts` → `LEVELS`.

### New topic

Add an entry to the `topics` object in `/lib/topics.ts`. No other changes needed.

### New writing prompts

Add entries to the array in `/lib/writing-prompts.ts` following the existing schema (`id`, `level`, `topic`, `title`, `instruction`, `wordRange`, `format`, `tips`).

---

## Deployment

The app is designed for [Vercel](https://vercel.com/). Add `GEMINI_API_KEY` and `GEMINI_MODEL` to the project's environment variables and push.

```bash
vercel --prod
```

All routes with dynamic content (`/guides`, `/books`) are statically pre-rendered at build time via `generateStaticParams`. Only the API routes (`/api/chat`, `/api/write`) run as serverless functions.
