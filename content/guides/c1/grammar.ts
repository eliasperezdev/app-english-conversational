import type { Chapter } from '@/lib/types';

const grammar: Chapter = {
  slug: 'grammar',
  title: 'Gramática C1',
  description:
    'El C1 no es sobre aprender reglas nuevas — es sobre dominar la precisión, el matiz y el registro. Estas estructuras te permiten expresar ideas complejas con exactitud y sonar como un hablante avanzado.',
  sections: [
    {
      id: 'grammar',
      label: 'Gramática',
      dotColor: 'var(--teal)',
      cards: [

        // ── 1. Subjunctive ────────────────────────────────────────────────
        {
          id: 'subjunctive',
          icon: '🔮',
          iconBg: '#d0ebe7',
          title: 'Subjuntivo',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>subjuntivo</strong> en inglés expresa deseos, recomendaciones, exigencias y situaciones hipotéticas. Es más frecuente en inglés formal y escrito. Hay dos formas principales: el <strong>present subjunctive</strong> y el <strong>past subjunctive</strong>.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PRESENT SUBJUNCTIVE',
                    items: [
                      'Forma base del verbo (sin -s, sin to)',
                      'Después de: suggest, recommend, insist, demand, require, propose, vital, essential, crucial',
                      '<em>I suggest that he <strong>be</strong> informed.</em>',
                      '<em>It\'s essential that she <strong>attend</strong>.</em>',
                      '<em>They demanded that it <strong>be</strong> cancelled.</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'PAST SUBJUNCTIVE',
                    items: [
                      'Pasado simple (were para todos)',
                      'Después de: wish, if only, as if, as though, would rather, it\'s time',
                      '<em>I wish she <strong>were</strong> here.</em>',
                      '<em>He talks as if he <strong>were</strong> the boss.</em>',
                      '<em>It\'s time we <strong>left</strong>.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'The committee insists that all members be present.', es: 'El comité insiste en que todos los miembros estén presentes.', note: '→ present subjunctive formal' },
                { en: 'It is vital that the report be submitted by Friday.', es: 'Es vital que el informe sea entregado para el viernes.', note: '→ it is + adjective + that + subjunctive' },
                { en: 'She spoke as though she were the only expert.', es: 'Habló como si fuera la única experta.', note: '→ as though + were' },
                { en: 'It\'s high time the government took action.', es: 'Ya es hora de que el gobierno actúe.', note: '→ it\'s (high) time + past' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Should como alternativa al subjuntivo:</strong><br>En inglés británico es común usar <strong>should + infinitive</strong> en lugar del subjuntivo:<br><em>I suggest that he <strong>should be</strong> informed.</em> ≈ <em>I suggest that he <strong>be</strong> informed.</em><br>Ambas formas son correctas y aceptadas.',
              },
            },
          ],
        },

        // ── 2. Cleft Sentences ────────────────────────────────────────────
        {
          id: 'cleft-sentences',
          icon: '🎯',
          iconBg: '#fef3d0',
          title: 'Cleft Sentences — Énfasis con Precisión',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Las <strong>cleft sentences</strong> reorganizan una oración para poner énfasis en un elemento específico. Son elegantes, naturales en inglés avanzado, y mucho más sofisticadas que subir la voz.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'IT-CLEFT',
                    items: [
                      '<strong>It is/was + énfasis + that/who...</strong>',
                      'Normal: <em>Maria called yesterday.</em>',
                      'Énfasis en quién: <em>It was Maria who called.</em>',
                      'Énfasis en cuándo: <em>It was yesterday that she called.</em>',
                      'Énfasis en qué: <em>It\'s the price that worries me.</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'WH-CLEFT (pseudo-cleft)',
                    items: [
                      '<strong>What + clause + is/was + énfasis</strong>',
                      '<em>What I need is more time.</em>',
                      '<em>What surprised me was her reaction.</em>',
                      '<em>What we should do is talk to them.</em>',
                      'Muy natural en conversación avanzada',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'It was the lack of communication that caused the problem.', es: 'Fue la falta de comunicación lo que causó el problema.', note: '→ it-cleft: énfasis en la causa' },
                { en: 'What I find most challenging is the uncertainty.', es: 'Lo que encuentro más desafiante es la incertidumbre.', note: '→ wh-cleft: énfasis en qué' },
                { en: 'It\'s the long-term consequences that concern me most.', es: 'Son las consecuencias a largo plazo lo que más me preocupa.', note: '→ it-cleft: énfasis en objeto' },
                { en: 'What the data shows is a clear downward trend.', es: 'Lo que muestran los datos es una clara tendencia a la baja.', note: '→ wh-cleft: presentación formal' },
              ],
            },
          ],
        },

        // ── 3. Ellipsis & Substitution ────────────────────────────────────
        {
          id: 'ellipsis-substitution',
          icon: '✂️',
          iconBg: '#ede4f5',
          title: 'Ellipsis y Substitution',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los hablantes avanzados <strong>evitan la repetición</strong> omitiendo elementos ya mencionados (ellipsis) o reemplazándolos con palabras cortas (substitution). Esto hace el discurso fluido y natural.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'SO / NOT (substitution)',
                    items: [
                      '<em>Will it rain? — I think <strong>so</strong>.</em>',
                      '<em>Will it rain? — I hope <strong>not</strong>.</em>',
                      '<em>Is she coming? — It seems <strong>so</strong>.</em>',
                      'Verbos: think, hope, believe, suppose, expect, seem, appear + so/not',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'SO/NEITHER + AUXILIARY',
                    items: [
                      'Acuerdo positivo: <em>I\'m tired. — <strong>So am I.</strong></em>',
                      'Acuerdo negativo: <em>I can\'t swim. — <strong>Neither can I.</strong></em>',
                      'Desacuerdo: <em>I loved it. — <strong>I didn\'t.</strong></em>',
                      'Estructura: So/Neither + aux + subject',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'She said she\'d be late, and she was.', es: 'Dijo que llegaría tarde, y así fue.', note: '→ ellipsis: omitir "late"' },
                { en: 'I haven\'t read it but I\'d like to.', es: 'No lo leí pero me gustaría.', note: '→ ellipsis: omitir "read it"' },
                { en: 'She passed her exam. So did her brother.', es: 'Aprobó su examen. Su hermano también.', note: '→ so + did + subject' },
                { en: 'I don\'t enjoy meetings, and neither does my team.', es: 'No disfruto las reuniones, y mi equipo tampoco.', note: '→ neither + does + subject' },
              ],
            },
          ],
        },

        // ── 4. Modal Perfects — Nuance ────────────────────────────────────
        {
          id: 'modal-perfects-nuance',
          icon: '🎛️',
          iconBg: '#fce8e4',
          title: 'Modales Perfectos con Matiz',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En C1, los modales perfectos no son solo para especular — cada uno transmite un <strong>matiz diferente</strong> de certeza, crítica, alivio o arrepentimiento.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Modal + have', 'Matiz', 'Ejemplo', 'Traducción'],
                rows: [
                  { en: 'must have',      ipa: 'certeza lógica',           es: 'She must have left early.',         context: 'Seguro que salió temprano.' },
                  { en: 'can\'t have',    ipa: 'imposibilidad lógica',     es: 'He can\'t have forgotten.',         context: 'No puede haber olvidado.' },
                  { en: 'should have',    ipa: 'crítica / deber incumplido', es: 'You should have told me.',         context: 'Deberías haberme dicho.' },
                  { en: 'shouldn\'t have', ipa: 'crítica por haber hecho', es: 'She shouldn\'t have said that.',    context: 'No debería haberlo dicho.' },
                  { en: 'needn\'t have',  ipa: 'acción innecesaria hecha', es: 'You needn\'t have worried.',        context: 'No hacía falta que te preocuparas.' },
                  { en: 'didn\'t need to', ipa: 'acción innecesaria no hecha', es: 'I didn\'t need to go.',         context: 'No fue necesario que fuera.' },
                  { en: 'could have',     ipa: 'posibilidad no aprovechada', es: 'You could have asked for help.',  context: 'Podrías haber pedido ayuda.' },
                  { en: 'might have',     ipa: 'posibilidad pasada débil',  es: 'She might have misunderstood.',    context: 'Puede que haya malentendido.' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>needn\'t have vs didn\'t need to:</strong><br><strong>needn\'t have</strong> = hiciste algo que resultó innecesario: <em>"You needn\'t have cooked — we ordered pizza."</em> (cocinaste, pero no era necesario)<br><strong>didn\'t need to</strong> = no era necesario y no lo hiciste: <em>"I didn\'t need to bring my umbrella — it didn\'t rain."</em>',
              },
            },
          ],
        },

        // ── 5. Nominalisation ─────────────────────────────────────────────
        {
          id: 'nominalisation',
          icon: '📐',
          iconBg: '#d0ebe7',
          title: 'Nominalización — Estructuras Formales',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'La <strong>nominalización</strong> convierte verbos y adjetivos en sustantivos. Es una marca del registro académico y formal. Hace el discurso más denso, objetivo y sofisticado.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'INFORMAL (verbal)',
                    items: [
                      '<em>He decided to leave.</em>',
                      '<em>They refused to cooperate.</em>',
                      '<em>She failed to meet the deadline.</em>',
                      '<em>The company grew rapidly.</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'FORMAL (nominalizado)',
                    items: [
                      '<em>His <strong>decision to leave</strong> surprised everyone.</em>',
                      '<em>Their <strong>refusal to cooperate</strong> was noted.</em>',
                      '<em>Her <strong>failure to meet</strong> the deadline caused delays.</em>',
                      '<em>The company\'s <strong>rapid growth</strong> attracted investors.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Verbo / Adjetivo', 'Nominalización', 'Sufijo'],
                rows: [
                  { en: 'decide',      ipa: 'decision',      es: '-ion',  context: 'the decision to...' },
                  { en: 'refuse',      ipa: 'refusal',       es: '-al',   context: 'his refusal to...' },
                  { en: 'fail',        ipa: 'failure',       es: '-ure',  context: 'failure to comply' },
                  { en: 'achieve',     ipa: 'achievement',   es: '-ment', context: 'a remarkable achievement' },
                  { en: 'difficult',   ipa: 'difficulty',    es: '-ty',   context: 'the difficulty of...' },
                  { en: 'likely',      ipa: 'likelihood',    es: '-hood', context: 'the likelihood that...' },
                  { en: 'conclude',    ipa: 'conclusion',    es: '-ion',  context: 'to draw a conclusion' },
                ],
              },
            },
          ],
        },

        // ── 6. Advanced Inversion ─────────────────────────────────────────
        {
          id: 'advanced-inversion',
          icon: '🔃',
          iconBg: '#fef3d0',
          title: 'Inversión Avanzada — Had / Were / Should',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En C1, la inversión se aplica también a las <strong>condicionales formales</strong>, eliminando "if" y poniendo el auxiliar al inicio. Es muy común en escritura académica, legal y literaria.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'CON "IF"',
                    items: [
                      'Cond. 2: <em>If he were to resign,...</em>',
                      'Cond. 3: <em>If I had known,...</em>',
                      'Cond. 1 formal: <em>If this should happen,...</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'SIN "IF" (inversión)',
                    items: [
                      '<em><strong>Were</strong> he to resign, the company would suffer.</em>',
                      '<em><strong>Had</strong> I known, I would have acted differently.</em>',
                      '<em><strong>Should</strong> this happen, contact us immediately.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'Had the government acted sooner, the crisis could have been avoided.', es: 'Si el gobierno hubiera actuado antes, la crisis podría haberse evitado.', note: '→ had + past participle (cond. 3)' },
                { en: 'Were this proposal to be accepted, it would set a dangerous precedent.', es: 'Si esta propuesta fuera aceptada, sentaría un precedente peligroso.', note: '→ were + to infinitive (cond. 2)' },
                { en: 'Should you require further assistance, do not hesitate to contact us.', es: 'Si necesitara más asistencia, no dude en contactarnos.', note: '→ should (formal para cond. 1)' },
                { en: 'Never before had such a discovery been made.', es: 'Nunca antes se había hecho tal descubrimiento.', note: '→ inversión con never before' },
              ],
            },
          ],
        },

        // ── 7. Discourse Markers ──────────────────────────────────────────
        {
          id: 'discourse-markers',
          icon: '🗺️',
          iconBg: '#ede4f5',
          title: 'Discourse Markers Avanzados',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>discourse markers avanzados</strong> organizan el argumento, matizan afirmaciones y muestran la relación lógica entre ideas. Son la diferencia entre un texto B2 y uno C1.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Marcador', 'Función', 'Ejemplo'],
                rows: [
                  { en: 'Granted',         ipa: 'conceder un punto',          es: 'Granted, the approach has merits, but the risks are significant.' },
                  { en: 'Admittedly',      ipa: 'admitir algo en contra',     es: 'Admittedly, the evidence is not conclusive.' },
                  { en: 'Nevertheless',    ipa: 'a pesar de eso / sin embargo', es: 'The task was difficult; nevertheless, they succeeded.' },
                  { en: 'Notwithstanding', ipa: 'a pesar de (formal)',        es: 'Notwithstanding the challenges, progress was made.' },
                  { en: 'Insofar as',      ipa: 'en la medida en que',        es: 'This is true insofar as the data supports it.' },
                  { en: 'Albeit',          ipa: 'aunque / si bien (formal)',  es: 'It was a success, albeit a modest one.' },
                  { en: 'Inasmuch as',     ipa: 'en tanto que / dado que',    es: 'This is relevant inasmuch as it affects the outcome.' },
                  { en: 'By the same token', ipa: 'del mismo modo / igualmente', es: 'By the same token, we cannot ignore the costs.' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Cómo usar "Granted" y "Admittedly":</strong><br>Estos marcadores sirven para conceder un punto antes de contraargumentar — una técnica muy persuasiva:<br><em>"<strong>Granted</strong>, renewable energy is expensive initially. <strong>Nevertheless</strong>, the long-term savings justify the investment."</em><br><em>"<strong>Admittedly</strong>, there are risks. <strong>However</strong>, the potential benefits far outweigh them."</em>',
              },
            },
          ],
        },

        // ── 8. Exercises ──────────────────────────────────────────────────
        {
          id: 'exercises-grammar-c1',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios · Gramática C1',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                { sentence: 'It is essential that every member ___ (be) informed before the vote.', answers: ['be'], hint: 'Subjuntivo presente: verbo base sin -s' },
                { sentence: '___ I known about the delay, I would have left earlier.', answers: ['Had'], hint: 'Inversión condicional 3: Had + sujeto + past participle' },
                { sentence: 'You ___ have called — I was worried sick.', answers: ['should', 'could'], hint: 'Modal perfecto: crítica o posibilidad no cumplida' },
                { sentence: 'What surprised everyone ___ her calm reaction.', answers: ['was'], hint: 'Wh-cleft: What + clause + was/is + énfasis' },
                { sentence: 'The proposal was rejected, albeit ___ (reluctantly).', answers: ['reluctantly'], hint: 'albeit + adverbio o adjetivo' },
              ],
            },
            {
              type: 'word_order',
              data: [
                { words: ['was', 'it', 'the', 'timing', 'that', 'wrong', 'was'], correct: 'It was the timing that was wrong', translation: 'Fue el momento lo que estuvo mal.' },
                { words: ['he', 'were', 'resign', 'to', 'we\'d', 'lose', 'everything'], correct: 'Were he to resign, we\'d lose everything', translation: 'Si renunciara, lo perderíamos todo.' },
                { words: ['you', 'needn\'t', 'have', 'bought', 'the', 'flowers'], correct: 'You needn\'t have bought the flowers', translation: 'No hacía falta que compraras las flores.' },
                { words: ['should', 'this', 'happen', 'us', 'contact', 'immediately'], correct: 'Should this happen, contact us immediately', translation: 'Si esto ocurriera, contáctenos de inmediato.' },
              ],
            },
            {
              type: 'flashcard',
              data: [
                { en: 'It is vital that he be present.', es: 'Es vital que él esté presente. (subjuntivo presente)' },
                { en: 'It was the decision that changed everything.', es: 'Fue la decisión lo que cambió todo. (it-cleft)' },
                { en: 'What we need is a clear strategy.', es: 'Lo que necesitamos es una estrategia clara. (wh-cleft)' },
                { en: 'Had she known, she would have acted.', es: 'Si hubiera sabido, habría actuado. (inversión cond. 3)' },
                { en: 'You needn\'t have worried.', es: 'No hacía falta que te preocuparas. (acción innecesaria realizada)' },
                { en: 'Granted, it has flaws; nevertheless, it works.', es: 'Concedido que tiene fallas; sin embargo, funciona.' },
                { en: 'Their refusal to cooperate was noted.', es: 'Su negativa a cooperar fue registrada. (nominalización)' },
                { en: 'She spoke as though she were the expert.', es: 'Habló como si fuera la experta. (past subjunctive)' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'It was the lack of transparency that undermined trust.', translation: 'Fue la falta de transparencia lo que socavó la confianza.' },
                { word: 'Had the team communicated better, this could have been avoided.', translation: 'Si el equipo hubiera comunicado mejor, esto podría haberse evitado.' },
                { word: 'What I find most compelling is the evidence from long-term studies.', translation: 'Lo que encuentro más convincente es la evidencia de estudios a largo plazo.' },
                { word: 'Admittedly, the costs are high; nevertheless, the benefits justify them.', translation: 'Admitidamente, los costos son altos; sin embargo, los beneficios los justifican.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'It is essential that all participants be notified in advance.', translation: 'Es esencial que todos los participantes sean notificados con anticipación.' },
                { sentence: 'What surprised the committee was the speed of the recovery.', translation: 'Lo que sorprendió al comité fue la velocidad de la recuperación.' },
                { sentence: 'Had the policy been implemented earlier, the results would have differed.', translation: 'Si la política se hubiera implementado antes, los resultados habrían sido distintos.' },
                { sentence: 'Granted, there are risks; nevertheless, inaction carries greater ones.', translation: 'Concedido que hay riesgos; sin embargo, la inacción conlleva mayores.' },
              ],
            },
          ],
        },

        // ── 9. Quiz ───────────────────────────────────────────────────────
        {
          id: 'quiz-grammar-c1',
          icon: '⚡',
          iconBg: '#d0ebe7',
          title: 'Mini-Quiz · Gramática C1',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: 'It is crucial that every document ___ signed before submission.', opts: ['is', 'be', 'was', 'were'], ans: 1 },
                { q: '"___ she to withdraw, who would replace her?"', opts: ['If', 'Were', 'Had', 'Should'], ans: 1 },
                { q: 'You ___ have brought food — there was plenty here.', opts: ['should', 'needn\'t', 'mustn\'t', 'couldn\'t'], ans: 1 },
                { q: '"What I need ___ more time and fewer interruptions."', opts: ['are', 'were', 'is', 'be'], ans: 2 },
                { q: '"Albeit" significa:', opts: ['sin embargo', 'aunque / si bien', 'por lo tanto', 'en cambio'], ans: 1 },
                { q: '"Their refusal to cooperate" es un ejemplo de:', opts: ['cleft sentence', 'nominalización', 'subjuntivo', 'ellipsis'], ans: 1 },
                { q: '"So do I" se usa para expresar:', opts: ['desacuerdo positivo', 'acuerdo positivo', 'acuerdo negativo', 'sorpresa'], ans: 1 },
                { q: '"Had I known" equivale a:', opts: ['If I know', 'If I knew', 'If I had known', 'If I would know'], ans: 2 },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default grammar;
