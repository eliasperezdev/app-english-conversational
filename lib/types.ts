// ─── Meta types (level index files) ──────────────────────────────────────────

export interface ChapterMeta {
  slug: string
  title: string
  icon: string
  description: string
  available: boolean
  /** Slug of a /practice/[level]/[topic] route to link from the sticky bar */
  practice_route?: string
}

export interface LevelMeta {
  level: string
  label: string
  description: string
  available: boolean
  chapters: ChapterMeta[]
}

// ─── Block data shapes ────────────────────────────────────────────────────────

export interface VocabRow {
  en: string
  ipa: string
  es: string
  context?: string
}

export interface VocabTableData {
  headers: string[]
  rows: VocabRow[]
}

export type GrammarColType = 'affirm' | 'neg' | 'inter' | 'custom'

export interface GrammarColumn {
  type: GrammarColType
  title: string
  /** Only for type: 'custom' */
  color?: string
  /** Only for type: 'custom' */
  titleColor?: string
  items: string[]
}

export interface GrammarColsData {
  columns: GrammarColumn[]
}

export interface FormulaLine {
  label: string
  text: string
}

export interface FormulaBoxData {
  lines: FormulaLine[]
}

export interface ExampleItem {
  en: string
  es: string
  note?: string
}

export interface PillItem {
  en: string
  es: string
}

export type PillColor = 'gold' | 'neutral' | 'coral' | 'purple' | 'teal' | 'blue'

export interface PillListData {
  color: PillColor
  label?: string
  items: PillItem[]
}

export interface RuleBlockData {
  html: string
}

export interface DialogueLine {
  speaker: string
  /** Override label shown in UI (e.g. 'C' for Customer, 'S' for Shop) */
  speakerLabel?: string
  text: string
  translation: string
}

export interface DialogueData {
  title: string
  lines: DialogueLine[]
}

export interface NumberItem {
  num: number
  word: string
}

export interface ColorSwatch {
  name: string
  es: string
  hex: string
}

export interface AlphabetItem {
  letter: string
  ipa: string
}

export interface VowelCard {
  vowel: string
  ipa: string
  label: string
  words: string
  color: string
  borderColor: string
}

// Interactive block data shapes

export interface FillBlankItem {
  sentence: string
  answers: string[]
  hint: string
}

export interface WordOrderItem {
  words: string[]
  correct: string
  translation: string
}

export interface MatchingData {
  pairs: Array<{ en: string; es: string }>
}

export interface FlashcardItem {
  en: string
  es: string
  ipa?: string
}

export interface QuizItem {
  q: string
  opts: string[]
  ans: number
}

// Speech block data shapes

export interface SpeakWordItem {
  word: string
  ipa?: string
  translation: string
}

export interface DictationItem {
  sentence: string
  translation: string
}

// ─── Block discriminated union ────────────────────────────────────────────────

export type Block =
  | { type: 'vocab_table';    data: VocabTableData }
  | { type: 'grammar_cols';   data: GrammarColsData }
  | { type: 'formula_box';    data: FormulaBoxData }
  | { type: 'examples_grid';  data: ExampleItem[] }
  | { type: 'pill_list';      data: PillListData }
  | { type: 'rule_block';     data: RuleBlockData }
  | { type: 'dialogue';       data: DialogueData }
  | { type: 'number_grid';    data: NumberItem[] }
  | { type: 'color_swatches'; data: ColorSwatch[] }
  | { type: 'alphabet_grid';  data: AlphabetItem[] }
  | { type: 'vowel_cards';    data: VowelCard[] }
  | { type: 'fill_blank';     data: FillBlankItem[] }
  | { type: 'word_order';     data: WordOrderItem[] }
  | { type: 'matching';       data: MatchingData }
  | { type: 'flashcard';      data: FlashcardItem[] }
  | { type: 'quiz';           data: QuizItem[] }
  | { type: 'speak_word';     data: SpeakWordItem[] }
  | { type: 'dictation';      data: DictationItem[] }

// ─── Content structure ────────────────────────────────────────────────────────

export interface Card {
  id: string
  icon: string
  iconBg: string
  title: string
  blocks: Block[]
}

export interface Section {
  id: string
  label: string
  dotColor: string
  cards: Card[]
}

export interface Chapter {
  slug: string
  title: string
  description: string
  sections: Section[]
}
