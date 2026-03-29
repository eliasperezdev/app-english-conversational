import type { Chapter } from '@/lib/types';

const grammar: Chapter = {
  slug: 'grammar',
  title: 'Gramática B1',
  description:
    'El salto de A2 a B1 es dominar los tiempos verbales y saber cuándo usar cada uno. Aquí vas a aprender no solo las formas, sino las diferencias reales de uso.',
  sections: [
    {
      id: 'grammar',
      label: 'Gramática',
      dotColor: 'var(--teal)',
      cards: [

        // ── 1. Present Simple vs Continuous ──────────────────────────────
        {
          id: 'present-simple-vs-continuous',
          icon: '⚡',
          iconBg: '#d0ebe7',
          title: 'Presente Simple vs Continuo',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Ambos son "presente" pero describen cosas muy distintas. El <strong>presente simple</strong> habla de hábitos y hechos. El <strong>presente continuo</strong> habla de lo que está pasando ahora o de planes temporales.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PRESENTE SIMPLE',
                    items: [
                      'Hábitos: <em>I drink coffee every morning.</em>',
                      'Hechos: <em>Water boils at 100°C.</em>',
                      'Rutinas: <em>She works in a bank.</em>',
                      'Con: always, usually, often, never',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'PRESENTE CONTINUO',
                    items: [
                      'Ahora mismo: <em>I\'m drinking coffee right now.</em>',
                      'Temporal: <em>She\'s working from home this week.</em>',
                      'Plan cercano: <em>We\'re meeting at 7pm.</em>',
                      'Con: now, at the moment, this week',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I work in an office.', es: 'Trabajo en una oficina. (siempre)', note: '→ simple: hábito' },
                { en: 'I\'m working from home today.', es: 'Hoy estoy trabajando desde casa.', note: '→ continuo: temporal' },
                { en: 'She usually takes the bus.', es: 'Ella usualmente toma el bus.', note: '→ simple: rutina' },
                { en: 'She\'s taking a taxi today.', es: 'Hoy está tomando un taxi.', note: '→ continuo: ahora' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Verbos que NO usan continuo:</strong> know, believe, love, hate, want, need, understand, remember, seem, belong.<br><em>"I know the answer" ✓ — "I am knowing the answer" ✗</em>',
              },
            },
          ],
        },

        // ── 2. Past Simple vs Continuous ────────────────────────────────
        {
          id: 'past-simple-vs-continuous',
          icon: '⏪',
          iconBg: '#fef3d0',
          title: 'Pasado Simple vs Continuo',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>pasado simple</strong> es para acciones completas. El <strong>pasado continuo</strong> es para acciones que estaban en progreso cuando otra cosa ocurrió.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PASADO SIMPLE',
                    items: [
                      'Acción completa: <em>I called you.</em>',
                      'Secuencia: <em>I woke up, had coffee and left.</em>',
                      'Con: yesterday, last week, in 2020, ago',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'PASADO CONTINUO',
                    items: [
                      'En progreso: <em>I was working at 8pm.</em>',
                      'Interrupción: <em>I was sleeping when you called.</em>',
                      'Con: while, when, at that moment',
                    ],
                  },
                ],
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Patrón clave:', text: 'I was doing X   when   something happened.' },
                  { label: 'Ejemplo:     ', text: 'I was cooking dinner when the phone rang.' },
                  { label: 'Traducción:  ', text: 'Estaba cocinando cuando el teléfono sonó.' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'She was reading when I arrived.', es: 'Ella estaba leyendo cuando llegué.', note: '→ continuo + simple' },
                { en: 'While he was driving, it started to rain.', es: 'Mientras manejaba, empezó a llover.', note: '→ while + continuo' },
                { en: 'I saw Maria at the mall yesterday.', es: 'Vi a María en el mall ayer.', note: '→ simple: hecho completo' },
                { en: 'They were arguing when I walked in.', es: 'Estaban peleando cuando entré.', note: '→ continuo: en progreso' },
              ],
            },
          ],
        },

        // ── 3. Present Perfect vs Past Simple ───────────────────────────
        {
          id: 'present-perfect-vs-past',
          icon: '🔗',
          iconBg: '#ede4f5',
          title: 'Presente Perfecto vs Pasado Simple',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Esta es <strong>la diferencia más importante del B1</strong> y la que más confunde a hispanohablantes. En español decimos "fui" o "he ido" casi sin diferencia. En inglés, <strong>I went</strong> e <strong>I have gone</strong> significan cosas muy distintas.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'neg',
                    title: 'PAST SIMPLE → went',
                    items: [
                      'Tiempo <strong>específico</strong> o terminado',
                      '<em>I went to Paris last year.</em>',
                      '<em>She left at 3pm.</em>',
                      '<em>We met in 2018.</em>',
                      'Con: yesterday, last week, in 2020, ago',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'PRESENT PERFECT → have gone',
                    items: [
                      'Experiencia <strong>sin tiempo específico</strong>',
                      '<em>I have been to Paris.</em>',
                      'Resultado presente: <em>She has left.</em>',
                      'Reciente: <em>I\'ve just eaten.</em>',
                      'Con: ever, never, already, yet, just, recently',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I have visited Tokyo.', es: 'He visitado Tokio. (alguna vez en mi vida)', note: '→ experiencia' },
                { en: 'I visited Tokyo in 2019.', es: 'Visité Tokio en 2019. (tiempo específico)', note: '→ pasado simple' },
                { en: 'Have you ever eaten sushi?', es: '¿Alguna vez comiste sushi?', note: '→ ever + perfecto' },
                { en: 'I\'ve already seen that film.', es: 'Ya vi esa película.', note: '→ already + perfecto' },
                { en: 'She hasn\'t called yet.', es: 'Todavía no llamó.', note: '→ yet + perfecto negativo' },
                { en: 'I\'ve just arrived.', es: 'Acabo de llegar.', note: '→ just + perfecto' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Regla práctica:</strong> Si el tiempo está especificado (<em>yesterday, last week, in 2020</em>), usá pasado simple. Si el tiempo no importa o es "hasta ahora", usá presente perfecto.',
              },
            },
          ],
        },

        // ── 4. Will vs Going to ──────────────────────────────────────────
        {
          id: 'will-vs-going-to',
          icon: '🔮',
          iconBg: '#ddeaf5',
          title: 'Will vs Going to',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Ambos expresan el futuro pero con intenciones distintas. <strong>Will</strong> es espontáneo o incierto. <strong>Going to</strong> es un plan ya decidido o una predicción basada en evidencia.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'inter',
                    title: 'WILL',
                    items: [
                      'Decisión en el momento: <em>I\'ll have the pasta.</em>',
                      'Promesa: <em>I\'ll call you later.</em>',
                      'Predicción (opinión): <em>I think it will rain.</em>',
                      'Oferta: <em>I\'ll help you with that.</em>',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'GOING TO',
                    items: [
                      'Plan decidido: <em>I\'m going to study medicine.</em>',
                      'Intención: <em>We\'re going to move next month.</em>',
                      'Evidencia clara: <em>Look at those clouds — it\'s going to rain.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: Will vs Going to en contexto',
                lines: [
                  { speaker: 'A', text: 'What are you going to do this weekend?', translation: '¿Qué vas a hacer este fin de semana?' },
                  { speaker: 'B', text: 'I\'m going to visit my parents. It\'s already planned.', translation: 'Voy a visitar a mis padres. Ya está planeado.' },
                  { speaker: 'A', text: 'Oh, nice. I\'ll probably just stay home.', translation: 'Ah, qué bien. Probablemente me quede en casa.' },
                  { speaker: 'B', text: 'Actually, I think it will be cold this weekend.', translation: 'De hecho, creo que va a hacer frío este fin de semana.' },
                  { speaker: 'A', text: 'You\'re right. I\'ll make a hot soup then!', translation: '¡Tenés razón. Entonces haré una sopa caliente!' },
                ],
              },
            },
          ],
        },

        // ── 5. Conditionals ─────────────────────────────────────────────
        {
          id: 'conditionals',
          icon: '🔀',
          iconBg: '#fce8e4',
          title: 'Condicionales 0 y 1',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'CONDICIONAL 0',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      'Hechos siempre verdaderos',
                      '<strong>If + present simple, present simple</strong>',
                      '<em>If you heat water to 100°C, it boils.</em>',
                      '<em>If I drink coffee late, I can\'t sleep.</em>',
                      'Leyes naturales, hábitos, hechos científicos',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'CONDICIONAL 1',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      'Situación posible en el futuro',
                      '<strong>If + present simple, will + verb</strong>',
                      '<em>If it rains tomorrow, I will stay home.</em>',
                      '<em>If you study hard, you\'ll pass the exam.</em>',
                      'Condición real y posible',
                    ],
                  },
                ],
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Cond. 0:', text: 'If + present simple  →  present simple' },
                  { label: 'Cond. 1:', text: 'If + present simple  →  will + verb' },
                  { label: 'Nota:   ', text: 'La cláusula "if" puede ir al inicio o al final.' },
                  { label: 'Ejemplo:', text: 'I will call you if I finish early. (sin coma)' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'If you mix blue and yellow, you get green.', es: 'Si mezclas azul y amarillo, obtenés verde.', note: '→ cond. 0: hecho' },
                { en: 'If I have time, I\'ll visit you.', es: 'Si tengo tiempo, te visito.', note: '→ cond. 1: posible' },
                { en: 'Water freezes if the temperature drops below 0.', es: 'El agua se congela si la temperatura baja de 0.', note: '→ cond. 0' },
                { en: 'If she calls, I\'ll tell her the news.', es: 'Si llama, le cuento las novedades.', note: '→ cond. 1' },
              ],
            },
          ],
        },

        // ── 6. Modal Verbs ───────────────────────────────────────────────
        {
          id: 'modals',
          icon: '🎛️',
          iconBg: '#d0ebe7',
          title: 'Verbos Modales: can, could, should, must, have to, might',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Modal', 'Uso principal', 'Ejemplo', 'Traducción'],
                rows: [
                  { en: 'can',     ipa: 'Habilidad / permiso',       es: 'I can swim.',                    context: 'Sé nadar.' },
                  { en: 'could',   ipa: 'Pasado de can / posibilidad', es: 'Could you help me?',            context: '¿Podrías ayudarme?' },
                  { en: 'should',  ipa: 'Consejo / recomendación',    es: 'You should see a doctor.',       context: 'Deberías ver un médico.' },
                  { en: 'must',    ipa: 'Obligación fuerte',          es: 'You must wear a seatbelt.',      context: 'Debés usar cinturón.' },
                  { en: 'have to', ipa: 'Obligación externa',         es: 'I have to work on Saturdays.',  context: 'Tengo que trabajar los sábados.' },
                  { en: 'might',   ipa: 'Posibilidad (50% o menos)',  es: 'It might rain later.',           context: 'Puede que llueva más tarde.' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Must vs Have to:</strong><br><strong>Must</strong> = obligación que viene de vos mismo: <em>"I must call my mom"</em> (yo siento que debo)<br><strong>Have to</strong> = obligación externa: <em>"I have to wear a uniform at work"</em> (la empresa lo exige)<br><br>💡 <strong>Should vs Must:</strong><br><strong>Should</strong> = consejo o recomendación. <strong>Must</strong> = obligación fuerte.',
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'You should apologize to her.', es: 'Deberías disculparte con ella.', note: '→ consejo' },
                { en: 'You must submit the form today.', es: 'Tenés que entregar el formulario hoy.', note: '→ obligación fuerte' },
                { en: 'I might go to the party.', es: 'Puede que vaya a la fiesta.', note: '→ posibilidad baja' },
                { en: 'Could you open the window?', es: '¿Podrías abrir la ventana?', note: '→ pedido cortés' },
              ],
            },
          ],
        },

        // ── 7. Comparatives & Superlatives ──────────────────────────────
        {
          id: 'comparatives-superlatives',
          icon: '📊',
          iconBg: '#fef3d0',
          title: 'Comparativos y Superlativos',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'COMPARATIVO',
                    items: [
                      'Corto (1 sílaba): <strong>-er than</strong>',
                      '<em>bigger, faster, cheaper</em>',
                      'Largo (2+ sílabas): <strong>more... than</strong>',
                      '<em>more expensive, more interesting</em>',
                      '<em>This phone is cheaper than that one.</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'SUPERLATIVO',
                    items: [
                      'Corto: <strong>the -est</strong>',
                      '<em>the biggest, the fastest</em>',
                      'Largo: <strong>the most...</strong>',
                      '<em>the most expensive, the most popular</em>',
                      '<em>This is the best restaurant in town.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Adjetivo', 'Comparativo', 'Superlativo'],
                rows: [
                  { en: 'good',      ipa: 'better',          es: 'the best' },
                  { en: 'bad',       ipa: 'worse',           es: 'the worst' },
                  { en: 'far',       ipa: 'farther / further', es: 'the farthest' },
                  { en: 'big',       ipa: 'bigger',          es: 'the biggest' },
                  { en: 'happy',     ipa: 'happier',         es: 'the happiest' },
                  { en: 'expensive', ipa: 'more expensive',  es: 'the most expensive' },
                  { en: 'beautiful', ipa: 'more beautiful',  es: 'the most beautiful' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Reglas ortográficas:</strong><br>• Termina en consonante + vocal + consonante → doblar: <em>big → bigger</em><br>• Termina en -y → cambiar por -ier: <em>happy → happier</em><br>• Termina en -e → solo agregar -r: <em>large → larger</em>',
              },
            },
          ],
        },

        // ── 8. Passive Voice ────────────────────────────────────────────
        {
          id: 'passive-voice',
          icon: '🔄',
          iconBg: '#ede4f5',
          title: 'Voz Pasiva Básica',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'La voz pasiva se usa cuando <strong>el objeto de la acción es más importante que quien la hace</strong>, o cuando no sabemos quién la hizo.',
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Activa:  ', text: 'Subject  +  verb  +  object' },
                  { label: 'Pasiva:  ', text: 'Object  +  to be  +  past participle  (+  by + agent)' },
                  { label: 'Ejemplo: ', text: 'Shakespeare wrote Hamlet.  (activa)' },
                  { label: '→       ', text: 'Hamlet was written by Shakespeare.  (pasiva)' },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PRESENTE SIMPLE PASIVO',
                    items: [
                      '<strong>is / are + past participle</strong>',
                      '<em>English is spoken worldwide.</em>',
                      '<em>These cars are made in Germany.</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'PASADO SIMPLE PASIVO',
                    items: [
                      '<strong>was / were + past participle</strong>',
                      '<em>The letter was sent yesterday.</em>',
                      '<em>The windows were broken.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'The report is written every month.', es: 'El informe se escribe cada mes.', note: '→ presente pasivo' },
                { en: 'My bike was stolen last week.', es: 'Me robaron la bici la semana pasada.', note: '→ pasado pasivo' },
                { en: 'Spanish is spoken in 20 countries.', es: 'El español se habla en 20 países.', note: '→ hecho general' },
                { en: 'The building was designed by Zaha Hadid.', es: 'El edificio fue diseñado por Zaha Hadid.', note: '→ by + agente' },
              ],
            },
          ],
        },

        // ── 9. Gerunds & Infinitives ─────────────────────────────────────
        {
          id: 'gerunds-infinitives',
          icon: '♾️',
          iconBg: '#fce8e4',
          title: 'Gerundios e Infinitivos',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Algunos verbos van seguidos de <strong>gerundio (-ing)</strong>, otros de <strong>infinitivo (to + verb)</strong>, y algunos pueden usar ambos con diferente significado.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'VERBO + GERUNDIO (-ing)',
                    items: [
                      'enjoy, finish, avoid, suggest',
                      'keep, consider, mind, practice',
                      '<em>I enjoy reading.</em>',
                      '<em>She avoided talking to him.</em>',
                      '<em>Have you finished eating?</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'VERBO + INFINITIVO (to)',
                    items: [
                      'want, need, decide, plan',
                      'hope, expect, agree, refuse',
                      '<em>I want to travel.</em>',
                      '<em>She decided to leave.</em>',
                      '<em>They agreed to help.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Verbos que cambian de significado:</strong><br><strong>stop + ing</strong> = dejar de hacer algo: <em>I stopped smoking.</em><br><strong>stop + to</strong> = parar para hacer algo: <em>I stopped to smoke.</em> (paré para fumar)<br><br><strong>remember + ing</strong> = recordar algo del pasado: <em>I remember meeting her.</em><br><strong>remember + to</strong> = acordarse de hacer algo: <em>Remember to call me.</em>',
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I like swimming in the sea.', es: 'Me gusta nadar en el mar.', note: '→ like + gerundio' },
                { en: 'I would like to swim today.', es: 'Me gustaría nadar hoy.', note: '→ would like + infinitivo' },
                { en: 'She keeps making the same mistake.', es: 'Sigue cometiendo el mismo error.', note: '→ keep + gerundio' },
                { en: 'He refused to answer.', es: 'Se negó a responder.', note: '→ refuse + infinitivo' },
              ],
            },
          ],
        },

        // ── 10. Phrasal Verbs ────────────────────────────────────────────
        {
          id: 'phrasal-verbs',
          icon: '🧩',
          iconBg: '#d0ebe7',
          title: 'Phrasal Verbs Comunes',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>phrasal verbs</strong> son verbos + partícula (preposición o adverbio) cuyo significado es diferente al del verbo solo. Son esenciales para sonar natural en inglés.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Phrasal verb', 'Significado', 'Ejemplo'],
                rows: [
                  { en: 'get up',      ipa: 'levantarse',           es: 'I get up at 7am every day.' },
                  { en: 'turn on/off', ipa: 'encender / apagar',    es: 'Can you turn on the light?' },
                  { en: 'look for',    ipa: 'buscar',               es: 'I\'m looking for my keys.' },
                  { en: 'give up',     ipa: 'rendirse / dejar de',  es: 'She gave up smoking last year.' },
                  { en: 'find out',    ipa: 'descubrir / enterarse', es: 'I found out the truth.' },
                  { en: 'look after',  ipa: 'cuidar',               es: 'She looks after her grandparents.' },
                  { en: 'run out of',  ipa: 'quedarse sin',         es: 'We\'ve run out of milk.' },
                  { en: 'put off',     ipa: 'postponer',            es: 'Don\'t put off what you can do today.' },
                  { en: 'bring up',    ipa: 'criar / mencionar',    es: 'She was brought up in Argentina.' },
                  { en: 'come across', ipa: 'encontrarse con',      es: 'I came across an old photo.' },
                  { en: 'take off',    ipa: 'despegar / quitarse',  es: 'The plane took off on time.' },
                  { en: 'carry on',    ipa: 'continuar',            es: 'Carry on — don\'t stop.' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Separables vs inseparables:</strong><br>Algunos phrasal verbs se pueden separar con el objeto:<br><em>Turn off the TV.</em> = <em>Turn the TV off.</em> ✓<br>Otros NO se pueden separar:<br><em>I\'m looking after the dog.</em> ✓ — <em>"I\'m looking the dog after."</em> ✗',
              },
            },
          ],
        },

        // ── 11. Interactive Exercises ────────────────────────────────────
        {
          id: 'exercises-grammar-b1',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios Interactivos · Gramática B1',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                { sentence: 'I ___ (already / finish) my homework.', answers: ['have already finished', '\'ve already finished'], hint: 'Presente perfecto con "already"' },
                { sentence: 'She ___ (work) when I called her.', answers: ['was working'], hint: 'Pasado continuo — acción en progreso' },
                { sentence: 'If it rains, we ___ (stay) at home.', answers: ['will stay', '\'ll stay'], hint: 'Condicional 1: if + present, will + verb' },
                { sentence: 'He ___ (give up) smoking three years ago.', answers: ['gave up'], hint: 'Pasado simple con "three years ago"' },
                { sentence: 'The Eiffel Tower ___ (build) in 1889.', answers: ['was built'], hint: 'Pasado pasivo: was/were + past participle' },
              ],
            },
            {
              type: 'word_order',
              data: [
                { words: ['been', 'have', 'never', 'I', 'to', 'Japan'], correct: 'I have never been to Japan', translation: 'Nunca estuve en Japón.' },
                { words: ['was', 'when', 'she', 'sleeping', 'arrived', 'I'], correct: 'She was sleeping when I arrived', translation: 'Ella estaba durmiendo cuando llegué.' },
                { words: ['should', 'you', 'a', 'doctor', 'see'], correct: 'You should see a doctor', translation: 'Deberías ver a un médico.' },
                { words: ['more', 'is', 'this', 'expensive', 'one', 'than', 'that'], correct: 'This one is more expensive than that', translation: 'Este es más caro que ese.' },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'I enjoy...', es: '...reading (gerundio)' },
                  { en: 'I want...', es: '...to travel (infinitivo)' },
                  { en: 'give up', es: 'rendirse / dejar de' },
                  { en: 'run out of', es: 'quedarse sin' },
                  { en: 'was written', es: 'fue escrito (pasado pasivo)' },
                  { en: 'might rain', es: 'puede que llueva' },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'I have been to Paris.', es: 'Estuve en París. (alguna vez, sin tiempo específico)' },
                { en: 'I went to Paris last year.', es: 'Fui a París el año pasado. (tiempo específico)' },
                { en: 'I\'ll have the pasta.', es: 'Voy a tomar la pasta. (decisión espontánea → will)' },
                { en: 'I\'m going to study tonight.', es: 'Voy a estudiar esta noche. (plan decidido → going to)' },
                { en: 'The book was written in 1900.', es: 'El libro fue escrito en 1900. (pasado pasivo)' },
                { en: 'You should rest more.', es: 'Deberías descansar más. (consejo → should)' },
                { en: 'You must hand this in today.', es: 'Tenés que entregar esto hoy. (obligación fuerte → must)' },
                { en: 'It might snow tonight.', es: 'Puede que nieve esta noche. (posibilidad → might)' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I have already finished.', translation: 'Ya terminé.' },
                { word: 'She was working when I arrived.', translation: 'Ella estaba trabajando cuando llegué.' },
                { word: 'You should see a doctor.', translation: 'Deberías ver a un médico.' },
                { word: 'I\'m going to look for a new job.', translation: 'Voy a buscar un nuevo trabajo.' },
                { word: 'The letter was sent yesterday.', translation: 'La carta fue enviada ayer.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'I have never been to Australia.', translation: 'Nunca estuve en Australia.' },
                { sentence: 'She was cooking when the fire started.', translation: 'Ella estaba cocinando cuando empezó el incendio.' },
                { sentence: 'If you study hard, you will pass the exam.', translation: 'Si estudiás mucho, aprobarás el examen.' },
                { sentence: 'The movie was directed by Christopher Nolan.', translation: 'La película fue dirigida por Christopher Nolan.' },
              ],
            },
          ],
        },

        // ── 12. Quiz ─────────────────────────────────────────────────────
        {
          id: 'quiz-grammar-b1',
          icon: '⚡',
          iconBg: '#d0ebe7',
          title: 'Mini-Quiz · Gramática B1',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: 'I ___ to Paris last summer.', opts: ['have been', 'went', 'have gone', 'go'], ans: 1 },
                { q: 'She ___ when I called.', opts: ['slept', 'was sleeping', 'is sleeping', 'has slept'], ans: 1 },
                { q: 'If it rains, I ___ take an umbrella.', opts: ['would', 'will', 'might', 'should'], ans: 1 },
                { q: 'I ___ studying medicine. It\'s already decided.', opts: ['will', '\'m going to', 'might', 'should'], ans: 1 },
                { q: 'The report ___ every Friday.', opts: ['writes', 'is written', 'was writing', 'has written'], ans: 1 },
                { q: 'She enjoys ___ to music.', opts: ['listen', 'to listen', 'listening', 'listened'], ans: 2 },
                { q: 'This is ___ city I\'ve ever visited.', opts: ['more beautiful', 'the most beautiful', 'the beautifulest', 'most beautiful'], ans: 1 },
                { q: '"Give up" significa:', opts: ['dar arriba', 'rendirse / dejar de', 'dar un regalo', 'subir'], ans: 1 },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default grammar;
