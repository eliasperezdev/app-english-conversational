import type { Chapter } from '@/lib/types';

const vocabulary: Chapter = {
  slug: 'vocabulary',
  title: 'Vocabulario C1',
  description:
    'En C1 el vocabulario es sobre precisión y registro. Aprendés a elegir la palabra exacta, a distinguir matices entre sinónimos, a usar collocations académicas y a sonar natural en contextos formales.',
  sections: [
    {
      id: 'vocabulary',
      label: 'Vocabulario',
      dotColor: 'var(--gold)',
      cards: [

        // ── 1. Academic & Formal Language ─────────────────────────────────
        {
          id: 'academic-language',
          icon: '🎓',
          iconBg: '#ddeaf5',
          title: 'Lenguaje Académico y Formal',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El registro académico usa palabras más largas y latinas, evita contracciones y prefiere estructuras impersonales. Conocer este léxico te permite leer textos complejos y escribir con autoridad.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Palabra formal', 'Equivalente informal', 'Ejemplo formal'],
                rows: [
                  { en: 'albeit',        ipa: 'although / even though',  es: 'The results were positive, albeit inconclusive.' },
                  { en: 'hitherto',      ipa: 'until now / so far',      es: 'Hitherto, no solution has been found.' },
                  { en: 'insofar as',    ipa: 'to the extent that',      es: 'This is valid insofar as the data supports it.' },
                  { en: 'the latter',    ipa: 'the second one mentioned', es: 'Speed and accuracy matter; the latter is critical.' },
                  { en: 'the former',    ipa: 'the first one mentioned',  es: 'Of the two options, the former is preferable.' },
                  { en: 'paramount',     ipa: 'extremely important',      es: 'Accuracy is of paramount importance.' },
                  { en: 'scrutiny',      ipa: 'careful examination',      es: 'The proposal came under intense scrutiny.' },
                  { en: 'premise',       ipa: 'starting assumption',      es: 'The argument rests on a false premise.' },
                  { en: 'contention',    ipa: 'claim / argument',         es: 'My contention is that the policy has failed.' },
                  { en: 'to corroborate', ipa: 'to confirm / support',   es: 'The findings corroborate earlier research.' },
                  { en: 'to substantiate', ipa: 'to prove / back up',    es: 'You need data to substantiate your claim.' },
                  { en: 'to refute',     ipa: 'to disprove',             es: 'The study refutes the original hypothesis.' },
                ],
              },
            },
          ],
        },

        // ── 2. Nuance — Similar Words ──────────────────────────────────────
        {
          id: 'nuance-synonyms',
          icon: '🔬',
          iconBg: '#d0ebe7',
          title: 'Matices de Significado — Sinónimos con Diferencia',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En C1 no basta con conocer las palabras — hay que saber cuándo usar cada sinónimo. Las diferencias son sutiles pero importantes para la precisión.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'TIRED — matices',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<strong>tired</strong> — cansado (general)',
                      '<strong>exhausted</strong> — agotado (extremo)',
                      '<strong>weary</strong> — hastiado (mental/emocional)',
                      '<strong>fatigued</strong> — fatigado (médico/formal)',
                      '<strong>drained</strong> — sin energía, vaciado',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'FAMOUS — matices',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      '<strong>famous</strong> — famoso (conocido en general)',
                      '<strong>renowned</strong> — reconocido por excelencia',
                      '<strong>celebrated</strong> — celebrado / admirado',
                      '<strong>notorious</strong> — famoso por algo negativo',
                      '<strong>prominent</strong> — destacado en su campo',
                    ],
                  },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'CHANGE — matices',
                    color: '#ede4f5',
                    titleColor: '#6b4c8a',
                    items: [
                      '<strong>change</strong> — cambio (general)',
                      '<strong>shift</strong> — cambio gradual de dirección',
                      '<strong>transformation</strong> — cambio radical',
                      '<strong>transition</strong> — paso de un estado a otro',
                      '<strong>fluctuation</strong> — variación irregular',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'SHOW — matices',
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      '<strong>show</strong> — mostrar (general)',
                      '<strong>demonstrate</strong> — demostrar con evidencia',
                      '<strong>reveal</strong> — revelar algo oculto',
                      '<strong>illustrate</strong> — mostrar con ejemplos',
                      '<strong>highlight</strong> — enfatizar un punto',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'After 16 hours of negotiations, they were utterly exhausted.', es: 'Tras 16 horas de negociaciones, estaban totalmente agotados.', note: '→ exhausted: extremo' },
                { en: 'The data reveals a significant shift in consumer behavior.', es: 'Los datos revelan un cambio significativo en el comportamiento del consumidor.', note: '→ shift: gradual, reveal: oculto' },
                { en: 'He is notorious for his aggressive negotiating style.', es: 'Es conocido por su estilo agresivo de negociación.', note: '→ notorious: fama negativa' },
                { en: 'The findings highlight the need for further research.', es: 'Los hallazgos destacan la necesidad de más investigación.', note: '→ highlight: énfasis' },
              ],
            },
          ],
        },

        // ── 3. Advanced Collocations ──────────────────────────────────────
        {
          id: 'advanced-collocations',
          icon: '🔗',
          iconBg: '#fef3d0',
          title: 'Collocations Avanzadas',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Collocation', 'Significado', 'Ejemplo'],
                rows: [
                  { en: 'draw a distinction',    ipa: 'hacer una distinción',         es: 'We must draw a distinction between the two cases.' },
                  { en: 'pose a threat',          ipa: 'representar una amenaza',      es: 'This poses a serious threat to public health.' },
                  { en: 'shed light on',          ipa: 'arrojar luz sobre / aclarar',  es: 'The study sheds light on the causes of the disease.' },
                  { en: 'call into question',     ipa: 'poner en duda',               es: 'This calls into question the validity of the results.' },
                  { en: 'take into account',      ipa: 'tener en cuenta',             es: 'We must take cultural differences into account.' },
                  { en: 'bear in mind',           ipa: 'tener presente',              es: 'Bear in mind that the context has changed.' },
                  { en: 'give rise to',           ipa: 'dar lugar a / generar',        es: 'Inequality gives rise to social instability.' },
                  { en: 'run counter to',         ipa: 'contradecir / ir en contra de', es: 'This runs counter to established scientific consensus.' },
                  { en: 'lend credibility to',    ipa: 'dar credibilidad a',           es: 'Independent audits lend credibility to the findings.' },
                  { en: 'bridge the gap',         ipa: 'acortar la brecha',           es: 'Education can help bridge the gap between classes.' },
                ],
              },
            },
          ],
        },

        // ── 4. Phrasal Verbs — Formal vs Informal ─────────────────────────
        {
          id: 'phrasal-verbs-register',
          icon: '🎭',
          iconBg: '#ede4f5',
          title: 'Phrasal Verbs: Registro Formal e Informal',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Para cada phrasal verb informal existe un equivalente formal. El C1 implica saber cuándo usar cada registro — en una entrevista, en un email, en una conversación casual.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Informal (phrasal)', 'Formal (equivalente)', 'Significado'],
                rows: [
                  { en: 'put up with',    ipa: 'tolerate / endure',        es: 'soportar / tolerar' },
                  { en: 'find out',       ipa: 'discover / ascertain',     es: 'descubrir / averiguar' },
                  { en: 'bring about',    ipa: 'cause / produce',          es: 'causar / generar' },
                  { en: 'look into',      ipa: 'investigate / examine',    es: 'investigar / examinar' },
                  { en: 'carry out',      ipa: 'conduct / perform',        es: 'llevar a cabo / realizar' },
                  { en: 'come up with',   ipa: 'devise / propose',         es: 'idear / proponer' },
                  { en: 'deal with',      ipa: 'address / handle',         es: 'abordar / gestionar' },
                  { en: 'set up',         ipa: 'establish / found',        es: 'establecer / fundar' },
                  { en: 'go ahead with',  ipa: 'proceed with',             es: 'proceder con' },
                  { en: 'turn down',      ipa: 'reject / decline',         es: 'rechazar / declinar' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Cuándo usar cada uno:</strong><br>Email formal / académico: <em>"The committee will <strong>investigate</strong> the allegations."</em><br>Conversación con un colega: <em>"They\'re going to <strong>look into</strong> it."</em><br>Ambos son correctos — el C1 implica la habilidad de elegir conscientemente.',
              },
            },
          ],
        },

        // ── 5. Debate & Essay Vocabulary ──────────────────────────────────
        {
          id: 'debate-essay',
          icon: '✍️',
          iconBg: '#fce8e4',
          title: 'Vocabulario de Debate y Ensayo',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PARA ARGUMENTAR',
                    items: [
                      'to contend (sostener una postura)',
                      'to assert (afirmar con confianza)',
                      'to posit (postular una idea)',
                      'to advocate (defender una causa)',
                      'to challenge (cuestionar)',
                      'to refute (refutar con evidencia)',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'PARA REFERIRSE A EVIDENCIA',
                    items: [
                      'to substantiate (respaldar)',
                      'to corroborate (confirmar)',
                      'to undermine (socavar)',
                      'to bolster (reforzar)',
                      'to cite / to quote (citar)',
                      'to allude to (aludir a)',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Término', 'Significado', 'Ejemplo'],
                rows: [
                  { en: 'premise',      ipa: 'premisa / supuesto inicial',   es: 'The argument rests on a flawed premise.' },
                  { en: 'contention',   ipa: 'postura / argumento central',  es: 'My central contention is that...' },
                  { en: 'implication',  ipa: 'implicación / consecuencia',   es: 'The implications are far-reaching.' },
                  { en: 'nuance',       ipa: 'matiz / detalle sutil',        es: 'The debate lacks nuance.' },
                  { en: 'caveat',       ipa: 'advertencia / salvedad',       es: 'I must add an important caveat.' },
                  { en: 'paradigm',     ipa: 'paradigma / modelo dominante', es: 'This challenges the prevailing paradigm.' },
                ],
              },
            },
          ],
        },

        // ── 6. Prepositional Phrases ──────────────────────────────────────
        {
          id: 'prepositional-phrases',
          icon: '📌',
          iconBg: '#d0ebe7',
          title: 'Expresiones con Preposición Fija',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Estas combinaciones de adjetivo/verbo + preposición son <strong>fijas</strong> — no se deducen lógicamente, hay que aprenderlas. Son muy frecuentes en inglés académico y formal.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Expresión', 'Significado', 'Ejemplo'],
                rows: [
                  { en: 'oblivious to',       ipa: 'inconsciente de / ajeno a',  es: 'She was oblivious to the tension in the room.' },
                  { en: 'averse to',          ipa: 'contrario a / reacio a',     es: 'He is not averse to taking risks.' },
                  { en: 'conducive to',       ipa: 'propicio para / favorable a', es: 'A quiet environment is conducive to concentration.' },
                  { en: 'commensurate with',  ipa: 'proporcional a / acorde con', es: 'The pay should be commensurate with experience.' },
                  { en: 'exempt from',        ipa: 'exento de',                  es: 'Charities are exempt from certain taxes.' },
                  { en: 'inherent in',        ipa: 'inherente a / propio de',    es: 'There are risks inherent in any investment.' },
                  { en: 'contingent on',      ipa: 'condicionado a / sujeto a',  es: 'Success is contingent on good planning.' },
                  { en: 'detrimental to',     ipa: 'perjudicial para',           es: 'Stress is detrimental to long-term health.' },
                  { en: 'integral to',        ipa: 'fundamental para / parte de', es: 'Trust is integral to any relationship.' },
                  { en: 'susceptible to',     ipa: 'susceptible a / propenso a', es: 'The system is susceptible to cyberattacks.' },
                ],
              },
            },
          ],
        },

        // ── 7. Exercises ──────────────────────────────────────────────────
        {
          id: 'exercises-vocab-c1',
          icon: '🎯',
          iconBg: '#fef3d0',
          title: 'Ejercicios · Vocabulario C1',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                { sentence: 'The new findings ___ light on the root causes of the conflict.', answers: ['shed'], hint: 'shed light on = arrojar luz sobre / aclarar' },
                { sentence: 'We must draw a clear ___ between correlation and causation.', answers: ['distinction'], hint: 'draw a distinction = hacer una distinción' },
                { sentence: 'His claims were never ___, so the case was dismissed.', answers: ['substantiated', 'corroborated'], hint: 'substantiate / corroborate = respaldar con evidencia' },
                { sentence: 'A stressful environment is rarely ___ to creative thinking.', answers: ['conducive'], hint: 'conducive to = propicio para' },
                { sentence: 'The report, ___ brief, was highly informative.', answers: ['albeit'], hint: 'albeit = aunque / si bien (formal)' },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'renowned', es: 'reconocido por excelencia (≠ famous)' },
                  { en: 'notorious', es: 'famoso por algo negativo' },
                  { en: 'shed light on', es: 'arrojar luz sobre / aclarar' },
                  { en: 'run counter to', es: 'ir en contra de / contradecir' },
                  { en: 'oblivious to', es: 'ajeno a / inconsciente de' },
                  { en: 'contention', es: 'postura / argumento central' },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'hitherto', es: 'hasta ahora / hasta el momento (formal)' },
                { en: 'premise', es: 'premisa — supuesto del que parte un argumento' },
                { en: 'to refute', es: 'refutar — rebatir con evidencia concreta' },
                { en: 'weary', es: 'hastiado — cansancio mental o emocional (≠ tired)' },
                { en: 'contingent on', es: 'condicionado a — depende de algo' },
                { en: 'to shed light on', es: 'arrojar luz sobre — aclarar algo oscuro' },
                { en: 'caveat', es: 'salvedad / advertencia — matiza una afirmación' },
                { en: 'conducive to', es: 'propicio para — que favorece algo' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'The findings corroborate the initial hypothesis.', translation: 'Los hallazgos corroboran la hipótesis inicial.' },
                { word: 'This poses a significant threat to biodiversity.', translation: 'Esto representa una amenaza significativa para la biodiversidad.' },
                { word: 'We must take cultural differences into account.', translation: 'Debemos tener en cuenta las diferencias culturales.' },
                { word: 'The evidence calls into question the validity of the claim.', translation: 'La evidencia pone en duda la validez de la afirmación.' },
              ],
            },
          ],
        },

        // ── 8. Quiz ───────────────────────────────────────────────────────
        {
          id: 'quiz-vocab-c1',
          icon: '⚡',
          iconBg: '#fef3d0',
          title: 'Mini-Quiz · Vocabulario C1',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: '"Notorious" describe a alguien que es:', opts: ['muy famoso y admirado', 'famoso por algo negativo', 'desconocido', 'reconocido académicamente'], ans: 1 },
                { q: '"Albeit" significa:', opts: ['sin embargo', 'por lo tanto', 'aunque / si bien', 'además'], ans: 2 },
                { q: '"To refute" significa:', opts: ['repetir', 'refutar / rebatir', 'referirse a', 'reformular'], ans: 1 },
                { q: '"Conducive to" significa:', opts: ['contrario a', 'propicio para', 'similar a', 'resultante de'], ans: 1 },
                { q: '"Shed light on" significa:', opts: ['apagar la luz', 'ignorar deliberadamente', 'aclarar / arrojar luz sobre', 'oscurecer'], ans: 2 },
                { q: '"The latter" se refiere a:', opts: ['el primero de dos', 'el último de dos', 'todos los mencionados', 'ninguno de los anteriores'], ans: 1 },
                { q: '"Hitherto" significa:', opts: ['en el futuro', 'hasta ahora', 'en cualquier caso', 'por lo tanto'], ans: 1 },
                { q: '"A stressful environment is rarely ___ to creativity."', opts: ['averse', 'conducive', 'oblivious', 'contingent'], ans: 1 },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default vocabulary;
