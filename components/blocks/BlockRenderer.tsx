import type { Block } from '@/lib/types'
import VocabTable from './VocabTable'
import GrammarCols from './GrammarCols'
import FormulaBox from './FormulaBox'
import ExamplesGrid from './ExamplesGrid'
import PillList from './PillList'
import RuleBlock from './RuleBlock'
import Dialogue from './Dialogue'
import NumberGrid from './NumberGrid'
import ColorSwatches from './ColorSwatches'
import AlphabetGrid from './AlphabetGrid'
import VowelCards from './VowelCards'
import FillBlank from './FillBlank'
import WordOrder from './WordOrder'
import Matching from './Matching'
import Flashcard from './Flashcard'
import Quiz from './Quiz'
import SpeakWord from './SpeakWord'
import Dictation from './Dictation'

interface Props {
  block: Block
}

export default function BlockRenderer({ block }: Props) {
  switch (block.type) {
    case 'vocab_table':    return <VocabTable data={block.data} />
    case 'grammar_cols':   return <GrammarCols data={block.data} />
    case 'formula_box':    return <FormulaBox data={block.data} />
    case 'examples_grid':  return <ExamplesGrid data={block.data} />
    case 'pill_list':      return <PillList data={block.data} />
    case 'rule_block':     return <RuleBlock data={block.data} />
    case 'dialogue':       return <Dialogue data={block.data} />
    case 'number_grid':    return <NumberGrid data={block.data} />
    case 'color_swatches': return <ColorSwatches data={block.data} />
    case 'alphabet_grid':  return <AlphabetGrid data={block.data} />
    case 'vowel_cards':    return <VowelCards data={block.data} />
    case 'fill_blank':     return <FillBlank data={block.data} />
    case 'word_order':     return <WordOrder data={block.data} />
    case 'matching':       return <Matching data={block.data} />
    case 'flashcard':      return <Flashcard data={block.data} />
    case 'quiz':           return <Quiz data={block.data} />
    case 'speak_word': return <SpeakWord data={block.data} />
    case 'dictation':  return <Dictation data={block.data} />
  }
}
