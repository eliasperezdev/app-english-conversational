# /guides — Phased Implementation Plan

> Stop after each phase. Wait for explicit approval before continuing.

---

## Phase 1 — Types and data layer

### Goal
Define all TypeScript types inferred from the content files, then create
a thin data-access layer. Nothing renders yet.

### Checklist
- [ ] Create `/lib/types.ts` with all exported types:
  - `ChapterMeta` — { slug, title, icon, description, available, practice_route? }
  - `LevelMeta` — { level, label, description, available, chapters: ChapterMeta[] }
  - `Chapter` — { slug, title, description, sections: Section[] }
  - `Section` — { id, label, dotColor, cards: Card[] }
  - `Card` — { id, icon, iconBg, title, blocks: Block[] }
  - `Block` — discriminated union on `type` covering all 18 block types:
    - Read-only: `vocab_table`, `grammar_cols`, `formula_box`, `examples_grid`,
      `pill_list`, `rule_block`, `dialogue`, `number_grid`, `color_swatches`,
      `alphabet_grid`, `vowel_cards`
    - Interactive: `fill_blank`, `word_order`, `matching`, `flashcard`, `quiz`
    - Speech: `speak_word`, `dictation`
  - Nested shape types for each block's `data` field (typed precisely, no `any`)
- [ ] Create `/lib/guides.ts` with:
  - `LEVELS` registry — imports all `*Meta` objects from content index files,
    keyed by level slug (e.g., `{ a1: a1Meta, a2: a2Meta }`)
  - `getLevel(slug: string): LevelMeta | undefined`
  - `getChapter(levelSlug: string, chapterSlug: string): Promise<Chapter | undefined>`
    (dynamic import from the content file so page bundles stay lean)
  - `getAllLevelSlugs(): string[]`
  - `getAllChapterSlugs(levelSlug: string): string[]`

### CSS variables needed
Add to `globals.css` (used by content dotColor values):
```css
--gold:   #c89a2a;
--teal:   #2da899;
--blue:   #3a8fd4;
--coral:  #e05a44;
```

### Verification
- Run `npx tsc --noEmit` — zero errors.
- In a scratch test (or a temporary `console.log` in any server component),
  import `getChapter('a1', 'grammar')` and confirm it resolves to the
  grammar Chapter object.

---

## Phase 2 — Routes and static params

### Goal
Wire up the three route pages with `generateStaticParams` so Next.js can
statically build all guide pages. No real UI — just text to confirm routing.

### Checklist
- [ ] `/app/guides/page.tsx` — server component
  - Lists all level slugs from `getAllLevelSlugs()`
  - Renders plain text: `"Guides — levels: a1, a2, …"`
- [ ] `/app/guides/[level]/page.tsx` — server component
  - `generateStaticParams` using `getAllLevelSlugs()`
  - Calls `getLevel(params.level)`; 404 with `notFound()` if undefined
  - Renders plain text: `"Level: a1 — chapters: vocabulary, grammar, …"`
- [ ] `/app/guides/[level]/[chapter]/page.tsx` — server component
  - `generateStaticParams` using all level+chapter slug combinations
  - Calls `getChapter(params.level, params.chapter)`; 404 if undefined
  - Renders plain text: `"Chapter: grammar — N sections, M cards"`

### Verification
Navigate to:
- `/guides` → shows level list text
- `/guides/a1` → shows a1 chapter list text
- `/guides/a1/grammar` → shows grammar section/card count text
- `/guides/a1/pronunciation` → shows pronunciation section/card count text

---

## Phase 3 — Read-only block renderer components

### Goal
Render all content (non-interactive) blocks correctly. The chapter page
gets its first real visual output.

### Checklist
- [ ] Create `/components/blocks/` directory
- [ ] One component per read-only block type:
  - `VocabTable` — table with striped rows, IPA in monospace
  - `GrammarCols` — 2–3 column layout; column styles for `affirm`/`neg`/`inter`
    use semantic tints (green/red/blue); `custom` uses inline `color`/`titleColor`
    from data; items rendered with `dangerouslySetInnerHTML` (content is trusted,
    internal TS files only)
  - `FormulaBox` — monospace code-like box; `label` bold, `text` preserves whitespace
  - `ExamplesGrid` — 2-column grid (en / es); optional `note` in muted style
  - `PillList` — colored pill badges; `label` header above; `color` token maps to
    a fixed palette (`gold`, `neutral`, `coral`, `purple`)
  - `RuleBlock` — full-width card with left accent border; HTML via
    `dangerouslySetInnerHTML` (same trust rationale)
  - `Dialogue` — chat-bubble layout; speaker A/B alternates sides; uses
    `speakerLabel` if present else `speaker`; translation in muted text below
  - `NumberGrid` — responsive grid of `num → word` tiles
  - `ColorSwatches` — grid of color squares with name + es label
  - `AlphabetGrid` — 5-column grid; letter large, IPA small below
  - `VowelCards` — card per vowel sound; uses inline `color`/`borderColor`
- [ ] Create `/components/blocks/BlockRenderer.tsx`
  - Switch on `block.type`, renders the correct component
  - Exhaustive switch with TypeScript narrowing (no fallthrough `any`)
- [ ] Update `/app/guides/[level]/[chapter]/page.tsx`
  - Replace placeholder text with actual chapter layout:
    sections → cards → blocks via `BlockRenderer`
  - Card: white-bordered container, icon in colored circle, title
  - No sticky bar yet (Phase 6)

### Verification
- `/guides/a1/vocabulary` renders all 7 content cards with correct data
- `/guides/a1/pronunciation` renders `AlphabetGrid` and `VowelCards` correctly
- Zero TypeScript errors

---

## Phase 4 — Interactive exercise blocks

### Goal
Add the five interactive block types. All state is local to each component
— no backend, no persistence.

### Checklist
- [ ] `FillBlank` (`"use client"`) — text input per item; on submit checks
  answer against `answers[]` (case-insensitive trim); shows correct/incorrect
  state; hint available via toggle; "Next" advances through items; shows
  score at end
- [ ] `WordOrder` (`"use client"`) — shuffled word tokens as draggable/clickable
  pills; user clicks to add to answer; check button compares joined string
  to `correct` (case-insensitive); shows `translation` on correct
- [ ] `Matching` (`"use client"`) — two columns (en / es); user clicks one from
  each to form a pair; matched pairs highlight green; all matched = success
  state; pairs shuffled on mount
- [ ] `Flashcard` (`"use client"`) — card flip animation (CSS transform);
  front shows `en`, back shows `es` (and `ipa` if present); prev/next
  navigation; shows `N of M`
- [ ] `Quiz` (`"use client"`) — one question at a time; 4 option buttons;
  correct → green, wrong → red + shows correct; "Next" advances; final
  score screen with "Try again" button
- [ ] All five added to `BlockRenderer`'s switch

### Verification
- `/guides/a1/vocabulary` exercises card: all five interactive types work
- `/guides/a1/grammar` exercises card: fill_blank, word_order, matching,
  flashcard, quiz all functional
- Score / state resets correctly on retry

---

## Phase 5 — Speech blocks (Web Speech API)

### Goal
Add `SpeakWord` and `Dictation`. Both are client components using the same
Web Speech API patterns already established in the codebase.

### Checklist
- [ ] `SpeakWord` (`"use client"`)
  - List of `{ word, ipa?, translation }` items
  - "Listen" button: calls `window.speechSynthesis` with `lang = "en-US"`,
    `rate = 0.95` — same config as `voice-controls.tsx`
  - "Speak" button: starts `webkitSpeechRecognition` / `SpeechRecognition`
    with `lang = "en-US"`, `continuous = false`, `interimResults = false`
  - Compares transcript (lowercase trim) to expected `word` (lowercase trim)
  - Shows ✅ / ❌ result; advances to next word on correct
  - Guard: `typeof window === "undefined"` check before any Web Speech API use
- [ ] `Dictation` (`"use client"`)
  - List of `{ sentence, translation }` items
  - "Play" button: reads sentence via TTS using `calcularDelay` from `lib/tts.ts`
    before speaking (consistent with existing TTS pattern)
  - Text input for user to type what they hear
  - "Check" compares input to `sentence` (lowercase, strip punctuation)
  - Shows correct answer on wrong; translation always visible after checking
  - "Next" advances
- [ ] Both added to `BlockRenderer`

### Verification
- `/guides/a1/vocabulary` speak_word block: audio plays, recognition works
- `/guides/a1/grammar` dictation block: sentence plays, input check works
- Both components degrade gracefully in environments without Web Speech API
  (show a "not supported" message, no crash)

---

## Phase 6 — Page UI and navigation

### Goal
Apply the full dark design system to all three route pages and add the
practice shortcut bar.

### Design tokens (from existing pages)
- Background: `#0e0e0f`
- Card surface: `#161618`
- Border: `#2a2a2e`
- Accent red: `#C41A1A`
- Text primary: `white`
- Text secondary: `#d0d0d5`
- Text muted: `#888`

### Checklist

#### `/app/guides/page.tsx` — Level index
- [ ] Header: back arrow → `/`, badge "Guides" in red pill, "live" dot
- [ ] Title + subtitle centered (matches home page style)
- [ ] Level cards grid (2 columns on sm+): card per level with
  - Level badge (e.g. "A1") in red
  - Label, description
  - Dim border → red border on hover
  - Unavailable levels: muted, no hover, "Coming soon" badge
  - Links to `/guides/[level]`

#### `/app/guides/[level]/page.tsx` — Chapter list
- [ ] Header: back arrow → `/guides`, level label badge
- [ ] Level title + description
- [ ] Chapter cards grid (2 columns sm+): card per chapter with
  - Icon (emoji) in circle with `iconBg`
  - Title, description
  - Unavailable chapters: muted + "Soon" tag
  - Links to `/guides/[level]/[chapter]`

#### `/app/guides/[level]/[chapter]/page.tsx` — Chapter page
- [ ] Header: back arrow → `/guides/[level]`, chapter title badge
- [ ] Chapter title + description
- [ ] Section tabs / dots navigation if multiple sections
- [ ] Card list: each card in dark surface container
  - Icon circle, title, then all blocks via `BlockRenderer`
  - Adequate padding and gap between blocks
- [ ] Sticky bottom bar (`"use client"`, shown only when chapter has a
  `practice_route` on its `ChapterMeta`):
  - Text: "Ready to practice this in conversation?"
  - Red button: "Start Practice →" linking to
    `/practice/[level]/[practice_route]`
  - Add `practice_route?: string` to `ChapterMeta` in `/lib/types.ts`
  - Set `practice_route` on communication chapter entries in the index files:
    - a1 communication → `shopping` (prices card maps to shopping topic)

### Verification
- Full visual review of `/guides`, `/guides/a1`, `/guides/a1/vocabulary`,
  `/guides/a1/communication`
- Sticky bar appears on communication chapter, links correctly to
  `/practice/a1/shopping`
- Sticky bar absent on vocabulary/grammar/pronunciation chapters
- Unavailable level/chapter cards render correctly (no broken links)

---

## Notes for all phases

- Server components by default; add `"use client"` only for interactive
  and speech blocks, and the sticky bar
- `generateStaticParams` on every dynamic route
- `dangerouslySetInnerHTML` is acceptable for `grammar_cols` items and
  `rule_block` html fields — content comes from internal TS files only,
  never from user input or an API
- Follow design tokens exactly — do not introduce new colors or font sizes
- Do not touch `/chat`, `/practice`, `/api/chat`, or any existing lib files
  other than adding CSS variables to `globals.css`
- TypeScript strict: no `any`, all props typed with interfaces
