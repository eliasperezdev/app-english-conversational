import type { Chapter } from '@/lib/types';

const grammar: Chapter = {
  slug: 'grammar',
  title: 'Gramática B2',
  description:
    'El B2 es donde el inglés se vuelve preciso. Aprendé a expresar matices del tiempo, hipótesis, reportar lo que otros dijeron y usar estructuras que te dan autoridad al hablar y escribir.',
  sections: [
    {
      id: 'grammar',
      label: 'Gramática',
      dotColor: 'var(--teal)',
      cards: [

        // ── 1. Present Perfect Continuous ────────────────────────────────
        {
          id: 'present-perfect-continuous',
          icon: '⏱️',
          iconBg: '#d0ebe7',
          title: 'Presente Perfecto Continuo',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>presente perfecto continuo</strong> enfatiza la <strong>duración</strong> de una actividad que empezó en el pasado y sigue o acaba de terminar. La diferencia con el presente perfecto simple es el foco: <strong>simple → resultado, continuo → proceso.</strong>',
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Forma:    ', text: 'Subject + have/has + been + verb-ing' },
                  { label: 'Ejemplo:  ', text: 'I have been working here for five years.' },
                  { label: 'Simple:   ', text: 'I have worked here. (resultado: tengo experiencia)' },
                  { label: 'Continuo: ', text: 'I have been working here. (proceso: llevo tiempo acá)' },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PRESENT PERFECT SIMPLE',
                    items: [
                      'Resultado importa',
                      '<em>I\'ve written three emails.</em>',
                      '(emails terminados — resultado)',
                      '<em>She\'s read the report.</em>',
                      'Con: already, yet, just, ever, never',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'PRESENT PERFECT CONTINUOUS',
                    items: [
                      'Duración / proceso importa',
                      '<em>I\'ve been writing emails all morning.</em>',
                      '(proceso en curso — duración)',
                      '<em>She\'s been reading all day.</em>',
                      'Con: for, since, all day, lately, recently',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I\'ve been learning Spanish for two years.', es: 'Llevo dos años aprendiendo español.', note: '→ duración: proceso' },
                { en: 'Your eyes are red. Have you been crying?', es: '¿Estuviste llorando? (evidencia visible)', note: '→ evidencia del proceso' },
                { en: 'She\'s been waiting for an hour.', es: 'Lleva una hora esperando.', note: '→ sigue esperando ahora' },
                { en: 'They\'ve been building that bridge since 2020.', es: 'Llevan construyendo ese puente desde 2020.', note: '→ acción no terminada' },
              ],
            },
          ],
        },

        // ── 2. Past Perfect ───────────────────────────────────────────────
        {
          id: 'past-perfect',
          icon: '⏮️',
          iconBg: '#fef3d0',
          title: 'Pasado Perfecto: Simple y Continuo',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>pasado perfecto</strong> es el "pasado del pasado" — expresa que algo ocurrió <em>antes</em> de otro evento pasado. Es esencial para contar historias con precisión y para el reported speech.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PAST PERFECT SIMPLE',
                    items: [
                      '<strong>had + past participle</strong>',
                      'Acción completada antes de otra',
                      '<em>When I arrived, she had already left.</em>',
                      '<em>He had never seen snow before.</em>',
                      'Con: already, just, never, by the time',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'PAST PERFECT CONTINUOUS',
                    items: [
                      '<strong>had been + verb-ing</strong>',
                      'Duración antes de un evento pasado',
                      '<em>I was tired because I had been working all night.</em>',
                      '<em>She had been waiting for an hour when he arrived.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Línea:    ', text: 'PASADO PERFECTO → PASADO SIMPLE → PRESENTE' },
                  { label: 'Ejemplo:  ', text: 'By the time I arrived, they had eaten everything.' },
                  { label: 'Traducción:', text: 'Para cuando llegué, ya se habían comido todo.' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'She had studied English before moving to London.', es: 'Había estudiado inglés antes de mudarse a Londres.', note: '→ antes de otro pasado' },
                { en: 'I hadn\'t eaten, so I was very hungry.', es: 'No había comido, así que tenía mucha hambre.', note: '→ causa en el pasado' },
                { en: 'He had been driving for 10 hours when he stopped.', es: 'Llevaba 10 horas manejando cuando paró.', note: '→ pasado perfecto continuo' },
                { en: 'By 2020, she had already published two books.', es: 'Para 2020, ya había publicado dos libros.', note: '→ by + pasado perfecto' },
              ],
            },
          ],
        },

        // ── 3. Conditionals 2 & 3 ────────────────────────────────────────
        {
          id: 'conditionals-2-3',
          icon: '🔀',
          iconBg: '#ede4f5',
          title: 'Condicionales 2 y 3',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'CONDICIONAL 2',
                    color: '#f7f2fd',
                    titleColor: '#6b4c8a',
                    items: [
                      'Situación <strong>hipotética</strong> en el presente/futuro',
                      '<strong>If + past simple, would + verb</strong>',
                      '<em>If I had more time, I would travel more.</em>',
                      '<em>If I were you, I\'d apologize.</em>',
                      'Consejo: "If I were you..." (siempre "were")',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'CONDICIONAL 3',
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      'Situación <strong>imposible</strong> en el pasado',
                      '<strong>If + past perfect, would have + past participle</strong>',
                      '<em>If I had studied, I would have passed.</em>',
                      '<em>She would have called if she had known.</em>',
                      'Expresa arrepentimiento o especulación',
                    ],
                  },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Mixed conditional</strong> (muy común en B2):<br>Mezcla el cond. 3 (pasado) con el cond. 2 (presente):<br><em>"If I had taken that job, I would be living in New York now."</em><br>→ Acción pasada → consecuencia presente.',
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'If I were taller, I would play basketball.', es: 'Si fuera más alto, jugaría al básquet.', note: '→ cond. 2: hipótesis presente' },
                { en: 'If I had saved money, I wouldn\'t be in debt.', es: 'Si hubiera ahorrado, no estaría endeudado.', note: '→ cond. 3: pasado imposible' },
                { en: 'She would have got the job if she had prepared better.', es: 'Habría conseguido el trabajo si se hubiera preparado.', note: '→ cond. 3' },
                { en: 'If I had studied medicine, I would be a doctor now.', es: 'Si hubiera estudiado medicina, sería médico ahora.', note: '→ mixed conditional' },
              ],
            },
          ],
        },

        // ── 4. Reported Speech ───────────────────────────────────────────
        {
          id: 'reported-speech',
          icon: '💭',
          iconBg: '#ddeaf5',
          title: 'Reported Speech (Estilo Indirecto)',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>reported speech</strong> se usa para reportar lo que alguien dijo. Los tiempos verbales retroceden un tiempo (backshift) y los pronombres y referencias de tiempo cambian.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Direct speech', 'Reported speech', 'Backshift'],
                rows: [
                  { en: '"I work here."', ipa: 'He said he worked there.', es: 'present → past', context: '' },
                  { en: '"I\'m working."', ipa: 'She said she was working.', es: 'present cont. → past cont.', context: '' },
                  { en: '"I worked."', ipa: 'He said he had worked.', es: 'past → past perfect', context: '' },
                  { en: '"I will call."', ipa: 'She said she would call.', es: 'will → would', context: '' },
                  { en: '"I can help."', ipa: 'He said he could help.', es: 'can → could', context: '' },
                  { en: '"I have finished."', ipa: 'She said she had finished.', es: 'present perfect → past perfect', context: '' },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'REPORTING VERBS',
                    items: [
                      '<strong>say / tell</strong> (más comunes)',
                      '<em>He told me he was tired.</em>',
                      '<em>She said she would come.</em>',
                      '⚠️ tell = siempre con objeto',
                      '"He told me..." ✓ "He said me..." ✗',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'OTROS VERBOS',
                    items: [
                      '<strong>ask</strong> + to infinitive',
                      '<em>She asked me to wait.</em>',
                      '<strong>warn, advise, suggest, admit</strong>',
                      '<em>He warned me not to go.</em>',
                      '<em>She suggested going by train.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: '"I\'m tired." → She said she was tired.', es: 'Dijo que estaba cansada.', note: '→ backshift: am → was' },
                { en: '"Don\'t touch that." → He told me not to touch it.', es: 'Me dijo que no lo tocara.', note: '→ imperativo negativo reportado' },
                { en: '"Will you help me?" → She asked if I would help her.', es: 'Me preguntó si la ayudaría.', note: '→ pregunta reportada con if' },
                { en: '"I\'ve never been here." → He admitted he had never been there.', es: 'Admitió que nunca había estado ahí.', note: '→ admit + past perfect' },
              ],
            },
          ],
        },

        // ── 5. Advanced Passive ──────────────────────────────────────────
        {
          id: 'passive-advanced',
          icon: '🔄',
          iconBg: '#fce8e4',
          title: 'Voz Pasiva Avanzada',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En B2 la voz pasiva va más allá del "was written". Aprendés las estructuras impersonales que dominan los textos formales, noticias y reportes.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PASIVA IMPERSONAL',
                    items: [
                      '<strong>It is said / believed / thought / reported that...</strong>',
                      '<em>It is believed that the economy will improve.</em>',
                      '<em>It was reported that 50 people were injured.</em>',
                      'Muy común en noticias y textos académicos',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'CAUSATIVE HAVE/GET',
                    items: [
                      '<strong>have/get + object + past participle</strong>',
                      'Algo que hacés que otros hagan por vos',
                      '<em>I had my car repaired.</em>',
                      '<em>She got her hair cut.</em>',
                      '<em>We\'re having the house painted.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Activa / Directa', 'Pasiva impersonal', 'Uso'],
                rows: [
                  { en: 'People say he is rich.', ipa: 'He is said to be rich.', es: 'Opinión general', context: '' },
                  { en: 'They believe she escaped.', ipa: 'She is believed to have escaped.', es: 'Noticia', context: '' },
                  { en: 'Experts think prices will rise.', ipa: 'Prices are expected to rise.', es: 'Predicción formal', context: '' },
                  { en: 'Someone stole my wallet.', ipa: 'My wallet was stolen.', es: 'Víctima / hecho', context: '' },
                ],
              },
            },
          ],
        },

        // ── 6. Relative Clauses ──────────────────────────────────────────
        {
          id: 'relative-clauses',
          icon: '🔗',
          iconBg: '#d0ebe7',
          title: 'Relative Clauses',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'DEFINING (sin comas)',
                    items: [
                      'Información <strong>esencial</strong>',
                      'Sin ella, la oración cambia de sentido',
                      '<em>The man who called is my boss.</em>',
                      '<em>The book that I read was great.</em>',
                      'Se puede usar "that" en vez de who/which',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'NON-DEFINING (con comas)',
                    items: [
                      'Información <strong>extra / adicional</strong>',
                      'Sin ella, la oración sigue teniendo sentido',
                      '<em>My boss, who is very strict, called me.</em>',
                      '<em>The film, which won 3 Oscars, was brilliant.</em>',
                      'NO se puede usar "that"',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Pronombre relativo', 'Uso', 'Ejemplo'],
                rows: [
                  { en: 'who', ipa: 'personas (sujeto)', es: 'The woman who lives next door is a doctor.', context: '' },
                  { en: 'whom', ipa: 'personas (objeto, formal)', es: 'The person whom I spoke to was helpful.', context: '' },
                  { en: 'which', ipa: 'cosas / animales', es: 'The car, which was new, broke down.', context: '' },
                  { en: 'that', ipa: 'personas o cosas (solo defining)', es: 'The book that she recommended was amazing.', context: '' },
                  { en: 'whose', ipa: 'posesión', es: 'The student whose essay won is here.', context: '' },
                  { en: 'where', ipa: 'lugar', es: 'The city where I grew up has changed.', context: '' },
                  { en: 'when', ipa: 'tiempo', es: 'The year when we met was 2018.', context: '' },
                ],
              },
            },
          ],
        },

        // ── 7. Wish ──────────────────────────────────────────────────────
        {
          id: 'wish',
          icon: '✨',
          iconBg: '#fef3d0',
          title: 'Wish / If Only',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: '<strong>Wish</strong> e <strong>if only</strong> expresan deseos sobre situaciones que no son reales. La estructura depende de si el deseo es sobre el presente/futuro o sobre el pasado.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Deseo sobre...', 'Estructura', 'Ejemplo', 'Traducción'],
                rows: [
                  { en: 'Presente (irrealizable)', ipa: 'wish + past simple', es: 'I wish I knew the answer.', context: 'Ojalá supiera la respuesta.' },
                  { en: 'Habilidad presente', ipa: 'wish + could', es: 'I wish I could fly.', context: 'Ojalá pudiera volar.' },
                  { en: 'Pasado (arrepentimiento)', ipa: 'wish + past perfect', es: 'I wish I had studied more.', context: 'Ojalá hubiera estudiado más.' },
                  { en: 'Cambio de conducta (otro)', ipa: 'wish + would', es: 'I wish he would listen.', context: 'Ojalá escuchara.' },
                  { en: 'Énfasis emocional', ipa: 'if only + past/past perfect', es: 'If only I had more time!', context: '¡Si tan solo tuviera más tiempo!' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I wish I lived closer to the office.', es: 'Ojalá viviera más cerca de la oficina.', note: '→ deseo presente' },
                { en: 'I wish I hadn\'t said that to her.', es: 'Ojalá no le hubiera dicho eso.', note: '→ arrepentimiento pasado' },
                { en: 'If only I could speak Chinese!', es: '¡Si tan solo pudiera hablar chino!', note: '→ énfasis con if only' },
                { en: 'I wish you would stop interrupting me.', es: 'Ojalá dejaras de interrumpirme.', note: '→ conducta de otro' },
              ],
            },
          ],
        },

        // ── 8. Inversion ─────────────────────────────────────────────────
        {
          id: 'inversion',
          icon: '🔃',
          iconBg: '#ede4f5',
          title: 'Inversión para Énfasis',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'La <strong>inversión</strong> pone el auxiliar antes del sujeto para dar énfasis dramático o formal. Es muy común en escritura formal, discursos y literatura. Suena sofisticado y es una marca clara de C1.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Expresión', 'Inversión', 'Normal'],
                rows: [
                  { en: 'Never', ipa: 'Never have I seen such beauty.', es: 'I have never seen such beauty.', context: '' },
                  { en: 'Rarely', ipa: 'Rarely does she make a mistake.', es: 'She rarely makes a mistake.', context: '' },
                  { en: 'Not only', ipa: 'Not only did he lie, but he also stole.', es: 'He not only lied but also stole.', context: '' },
                  { en: 'Hardly / Scarcely', ipa: 'Hardly had I arrived when it started.', es: 'I had hardly arrived when it started.', context: '' },
                  { en: 'Under no circumstances', ipa: 'Under no circumstances should you sign.', es: 'You should not sign under any circumstances.', context: '' },
                  { en: 'Only then', ipa: 'Only then did I understand.', es: 'I understood only then.', context: '' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Patrón:</strong> Expresión negativa/restrictiva + auxiliar + sujeto + verbo principal<br><em>Never <strong>have I</strong> felt so proud.</em><br><em>Not only <strong>did she</strong> win, but she also broke the record.</em>',
              },
            },
          ],
        },

        // ── 9. Exercises ─────────────────────────────────────────────────
        {
          id: 'exercises-grammar-b2',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios Interactivos · Gramática B2',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                { sentence: 'She ___ (study) for three hours when the power went out.', answers: ['had been studying'], hint: 'Pasado perfecto continuo — duración antes de otro evento pasado' },
                { sentence: 'If I ___ (know) about the party, I would have come.', answers: ['had known'], hint: 'Condicional 3: if + past perfect' },
                { sentence: '"I\'m tired," she said. → She said she ___ tired.', answers: ['was'], hint: 'Reported speech: backshift am → was' },
                { sentence: 'I wish I ___ (speak) Japanese — it\'s such a beautiful language.', answers: ['could speak', 'spoke'], hint: 'Wish + past simple / could para deseos presentes' },
                { sentence: 'Never ___ I seen such an incredible performance.', answers: ['have'], hint: 'Inversión con "never" — never + auxiliar + sujeto' },
              ],
            },
            {
              type: 'word_order',
              data: [
                { words: ['had', 'she', 'already', 'when', 'left', 'I', 'arrived'], correct: 'She had already left when I arrived', translation: 'Ya se había ido cuando llegué.' },
                { words: ['I', 'had', 'more', 'I', 'wish', 'money'], correct: 'I wish I had more money', translation: 'Ojalá tuviera más dinero.' },
                { words: ['told', 'not', 'she', 'late', 'me', 'to', 'be'], correct: 'She told me not to be late', translation: 'Me dijo que no llegara tarde.' },
                { words: ['is', 'that', 'believed', 'recover', 'it', 'will', 'he'], correct: 'It is believed that he will recover', translation: 'Se cree que se recuperará.' },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'I wish I had gone.', es: 'Ojalá hubiera ido. (pasado)' },
                  { en: 'I wish I could go.', es: 'Ojalá pudiera ir. (presente)' },
                  { en: 'It is said that...', es: 'Se dice que... (pasiva impersonal)' },
                  { en: 'had been working', es: 'pasado perfecto continuo' },
                  { en: 'The man who called', es: 'defining relative clause' },
                  { en: 'My sister, who lives in Rome,', es: 'non-defining relative clause' },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'I\'ve been working here for 5 years.', es: 'Llevo 5 años trabajando acá. (pres. perf. continuo)' },
                { en: 'She had already left when I called.', es: 'Ya se había ido cuando llamé. (past perfect)' },
                { en: 'If I had known, I would have helped.', es: 'Si lo hubiera sabido, habría ayudado. (cond. 3)' },
                { en: 'He told me not to worry.', es: 'Me dijo que no me preocupara. (reported speech)' },
                { en: 'Never have I seen such courage.', es: 'Nunca he visto tal valentía. (inversión)' },
                { en: 'I had my car repaired.', es: 'Mandé a arreglar el auto. (causative have)' },
                { en: 'I wish I hadn\'t said that.', es: 'Ojalá no hubiera dicho eso. (wish + past perfect)' },
                { en: 'It is believed that...', es: 'Se cree que... (pasiva impersonal)' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I\'ve been studying English for two years.', translation: 'Llevo dos años estudiando inglés.' },
                { word: 'If I had known, I would have called you.', translation: 'Si lo hubiera sabido, te habría llamado.' },
                { word: 'She told me that she was feeling better.', translation: 'Me dijo que se sentía mejor.' },
                { word: 'Never have I felt so proud of myself.', translation: 'Nunca me sentí tan orgulloso de mí mismo.' },
                { word: 'I wish I could speak three languages.', translation: 'Ojalá pudiera hablar tres idiomas.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'She had been waiting for over an hour when he finally arrived.', translation: 'Llevaba más de una hora esperando cuando él finalmente llegó.' },
                { sentence: 'If I were you, I would apologize immediately.', translation: 'En tu lugar, me disculparía de inmediato.' },
                { sentence: 'It is believed that the ancient city was destroyed by an earthquake.', translation: 'Se cree que la ciudad antigua fue destruida por un terremoto.' },
                { sentence: 'Not only did she win the competition, but she also broke the world record.', translation: 'No solo ganó la competición, sino que también rompió el récord mundial.' },
              ],
            },
          ],
        },

        // ── 10. Quiz ─────────────────────────────────────────────────────
        {
          id: 'quiz-grammar-b2',
          icon: '⚡',
          iconBg: '#d0ebe7',
          title: 'Mini-Quiz · Gramática B2',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: 'I ___ for an hour when the bus finally arrived.', opts: ['waited', 'was waiting', 'had been waiting', 'have waited'], ans: 2 },
                { q: 'If she ___ harder, she would have passed.', opts: ['studied', 'had studied', 'would study', 'studies'], ans: 1 },
                { q: '"I will call you." → She said she ___ call me.', opts: ['will', 'would', 'could', 'should'], ans: 1 },
                { q: 'I wish I ___ that mistake.', opts: ['didn\'t make', 'haven\'t made', 'hadn\'t made', 'wouldn\'t make'], ans: 2 },
                { q: 'Never ___ such a beautiful place.', opts: ['I have seen', 'have I seen', 'I had seen', 'had seen I'], ans: 1 },
                { q: 'The woman ___ bag was stolen called the police.', opts: ['who', 'which', 'whose', 'whom'], ans: 2 },
                { q: '"I have your car repaired" means:', opts: ['Yo reparé el auto', 'Mandé a reparar el auto', 'El auto fue reparado', 'Tengo que reparar el auto'], ans: 1 },
                { q: '"It is reported that..." pertenece a:', opts: ['present simple', 'pasiva impersonal', 'reported speech', 'inversión'], ans: 1 },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default grammar;
