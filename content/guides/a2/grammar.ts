// === FILE: content/english/a2/grammar.ts ===
import type { Chapter } from '@/lib/types';

const grammar: Chapter = {
  slug: 'grammar',
  title: 'Gramática A2 — Básico',
  description:
    'Domina las estructuras gramaticales clave del nivel A2: presente continuo, pasado simple, there is/are, verbos modales, comparativos, preguntas con how y adverbios de frecuencia.',
  sections: [
    {
      id: 'grammar',
      label: 'Gramática',
      dotColor: 'var(--teal)',
      cards: [
        // ── Card 1: Presente Continuo ──────────────────────────────────────
        {
          id: 'present-continuous',
          icon: '⏳',
          iconBg: '#d0ebe7',
          title: 'Presente Continuo',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>Presente Continuo</strong> (Present Continuous) describe acciones que están pasando <strong>ahora mismo</strong> o en este período. Se forma con <strong>be + verbo-ING</strong>.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'AFIRMATIVO',
                    items: [
                      "I <strong>am working</strong> (I'm working)",
                      'You <strong>are eating</strong>',
                      'He/She <strong>is sleeping</strong>',
                      'We <strong>are playing</strong>',
                      'They <strong>are studying</strong>',
                    ],
                  },
                  {
                    type: 'neg',
                    title: 'NEGATIVO',
                    items: [
                      'I <strong>am not</strong> working',
                      "You <strong>are not</strong> (aren't) eating",
                      "He <strong>is not</strong> (isn't) sleeping",
                      'We <strong>are not</strong> playing',
                      "They <strong>aren't</strong> studying",
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'INTERROGATIVO',
                    items: [
                      '<strong>Am</strong> I working?',
                      '<strong>Are</strong> you eating?',
                      '<strong>Is</strong> he/she sleeping?',
                      '<strong>Are</strong> we playing?',
                      '<strong>Are</strong> they studying?',
                    ],
                  },
                ],
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Afirmativo:', text: 'Subject + am/is/are + VERB-ING' },
                  { label: 'Negativo:  ', text: 'Subject + am/is/are + NOT + VERB-ING' },
                  { label: 'Pregunta:  ', text: 'Am/Is/Are + Subject + VERB-ING?' },
                  { label: 'Spelling:  ', text: 'run → runn-ING   /  live → liv-ING   /  study → study-ING' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Presente Simple vs. Continuo:</strong><br><em>I <strong>work</strong> every day.</em> → Rutina (Presente Simple)<br><em>I <strong>am working</strong> right now.</em> → Ahora mismo (Presente Continuo)<br><br>Palabras clave del continuo: <strong>now, right now, at the moment, today, this week</strong>',
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: "She's reading a book right now.",              es: 'Ella está leyendo un libro ahora mismo.' },
                { en: "They're watching a film at the moment.",       es: 'Están viendo una película en este momento.' },
                { en: "I'm not sleeping, I'm working!",               es: '¡No estoy durmiendo, estoy trabajando!' },
                { en: 'Is he cooking dinner?',                        es: '¿Está él cocinando la cena?' },
                { en: 'What are you doing?',                          es: '¿Qué estás haciendo?' },
                { en: "We're studying for the exam this week.",       es: 'Estamos estudiando para el examen esta semana.' },
              ],
            },
          ],
        },

        // ── Card 2: Pasado Simple ──────────────────────────────────────────
        {
          id: 'past-simple',
          icon: '⏮️',
          iconBg: '#fce8e4',
          title: 'Pasado Simple — Regulares e Irregulares',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>Pasado Simple</strong> describe acciones terminadas en el pasado. Los verbos regulares añaden <strong>-ed</strong>. Los irregulares tienen forma propia que debes memorizar.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'REGULARES +ED',
                    color: '#f5e4b8',
                    titleColor: '#7a5500',
                    items: [
                      'work → <strong>worked</strong>',
                      'play → <strong>played</strong>',
                      'study → <strong>studied</strong>',
                      'stop → <strong>stopped</strong>',
                      'live → <strong>lived</strong>',
                      'call → <strong>called</strong>',
                      'watch → <strong>watched</strong>',
                      'travel → <strong>travelled</strong>',
                    ],
                  },
                  {
                    type: 'neg',
                    title: '❌ NEGATIVO',
                    items: [
                      "I <strong>didn't</strong> work",
                      "She <strong>didn't</strong> play",
                      "They <strong>didn't</strong> study",
                      "<em>didn't</em> + verbo base",
                      '<em>did not</em> = forma larga',
                      '<em>Nunca usas "played" en negación</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: '❓ PREGUNTA',
                    items: [
                      '<strong>Did</strong> you work?',
                      '<strong>Did</strong> she play?',
                      '<strong>Did</strong> they study?',
                      'Yes, I <strong>did</strong>.',
                      "No, she <strong>didn't</strong>.",
                      '<em>Did</em> + sujeto + verbo base',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Base', 'Past Simple', 'Español'],
                rows: [
                  { en: 'go',    ipa: 'went',    es: 'ir' },
                  { en: 'come',  ipa: 'came',    es: 'venir' },
                  { en: 'have',  ipa: 'had',     es: 'tener' },
                  { en: 'see',   ipa: 'saw',     es: 'ver' },
                  { en: 'eat',   ipa: 'ate',     es: 'comer' },
                  { en: 'buy',   ipa: 'bought',  es: 'comprar' },
                  { en: 'make',  ipa: 'made',    es: 'hacer' },
                  { en: 'take',  ipa: 'took',    es: 'tomar' },
                  { en: 'give',  ipa: 'gave',    es: 'dar' },
                  { en: 'get',   ipa: 'got',     es: 'obtener / conseguir' },
                  { en: 'say',   ipa: 'said',    es: 'decir' },
                  { en: 'know',  ipa: 'knew',    es: 'saber / conocer' },
                  { en: 'think', ipa: 'thought', es: 'pensar' },
                  { en: 'leave', ipa: 'left',    es: 'salir / dejar' },
                  { en: 'find',  ipa: 'found',   es: 'encontrar' },
                  { en: 'run',   ipa: 'ran',     es: 'correr' },
                ],
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Afirmativo:', text: 'I worked yesterday.  /  She went to the bank.' },
                  { label: 'Negativo:  ', text: "I didn't work.  /  She didn't go to the bank." },
                  { label: 'Pregunta:  ', text: 'Did you work?  /  Did she go?' },
                  { label: 'Respuesta: ', text: "Yes, I did.  /  No, she didn't." },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I worked late yesterday.',                  es: 'Trabajé hasta tarde ayer.' },
                { en: 'She bought a new phone last week.',         es: 'Ella compró un teléfono nuevo la semana pasada.' },
                { en: 'Did you see the game?',                     es: '¿Viste el partido?' },
                { en: "We didn't eat dinner last night.",          es: 'No cenamos anoche.' },
                { en: 'Where did you go on holiday?',              es: '¿Adónde fuiste de vacaciones?' },
                { en: 'He left the office at 5pm.',                es: 'Él salió de la oficina a las 5pm.' },
              ],
            },
          ],
        },

        // ── Card 3: There is / There are ──────────────────────────────────
        {
          id: 'there-is-are',
          icon: '📍',
          iconBg: '#ddeaf5',
          title: 'There is / There are',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: '<strong>There is</strong> (singular) y <strong>There are</strong> (plural) se usan para indicar la <em>existencia</em> de algo en un lugar. Equivalen a "hay" en español.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'SINGULAR',
                    color: '#ddeaf5',
                    titleColor: '#2c5f8a',
                    items: [
                      '<strong>There is</strong> a bank.',
                      "<strong>There's</strong> a hospital nearby.",
                      '<strong>Is there</strong> a pharmacy?',
                      "Yes, there is. / No, there isn't.",
                      "<strong>There isn't</strong> a park here.",
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'PLURAL',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      '<strong>There are</strong> two banks.',
                      '<strong>There are</strong> no taxis.',
                      '<strong>Are there</strong> any buses?',
                      "Yes, there are. / No, there aren't.",
                      "<strong>There aren't</strong> any seats.",
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'PASADO',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<strong>There was</strong> a park here.',
                      '<strong>There were</strong> many people.',
                      '<strong>Was there</strong> a problem?',
                      '<strong>Were there</strong> any seats?',
                      'Yes, there was/were.',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'There is a supermarket near my house.',     es: 'Hay un supermercado cerca de mi casa.' },
                { en: 'There are three hospitals in this city.',   es: 'Hay tres hospitales en esta ciudad.' },
                { en: 'Is there a post office nearby?',            es: '¿Hay una oficina de correos cerca?' },
                { en: "There aren't any taxis at this hour.",      es: 'No hay taxis a esta hora.' },
                { en: 'There was a park here before.',             es: 'Antes había un parque aquí.' },
                { en: 'How many stops are there?',                 es: '¿Cuántas paradas hay?' },
              ],
            },
          ],
        },

        // ── Card 4: Verbos Modales ─────────────────────────────────────────
        {
          id: 'modals',
          icon: '🎯',
          iconBg: '#fef3d0',
          title: 'Verbos Modales: can, should, must',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>verbos modales</strong> modifican el significado del verbo principal. Siempre van seguidos del <strong>verbo en infinitivo sin "to"</strong>: <em>I <strong>can swim</strong>. / You <strong>should rest</strong>. / She <strong>must leave</strong>.</em>',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: "CAN / CAN'T",
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      '<strong>Habilidad</strong> o posibilidad',
                      'I <strong>can</strong> swim very well.',
                      "She <strong>can't</strong> drive.",
                      '<strong>Can</strong> you speak French?',
                      '<em>Tip: igual para todos los sujetos</em>',
                      '<em>No "cans", no "canned"</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: "SHOULD / SHOULDN'T",
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<strong>Consejo</strong> o recomendación',
                      'You <strong>should</strong> see a doctor.',
                      "She <strong>shouldn't</strong> work so much.",
                      '<strong>Should</strong> I take medicine?',
                      '<em>Más suave que "must"</em>',
                      '<em>Opinión o sugerencia</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: "MUST / MUSTN'T",
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      '<strong>Obligación</strong> o prohibición',
                      'You <strong>must</strong> wear a seatbelt.',
                      "You <strong>mustn't</strong> smoke here.",
                      '<em>Muy fuerte — regla o ley</em>',
                      '<em>"Must" = obligación interna</em>',
                      '<em>"Have to" = obligación externa</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'Can you help me, please?',                       es: '¿Puedes ayudarme, por favor?' },
                { en: "I can't find my keys.",                          es: 'No encuentro mis llaves.' },
                { en: 'You should eat more vegetables.',                es: 'Deberías comer más verduras.' },
                { en: "We must leave now or we'll be late.",            es: 'Debemos irnos ahora o llegaremos tarde.' },
                { en: "You mustn't use your phone while driving.",      es: 'No debes usar el teléfono mientras manejas.' },
                { en: 'Should I call the doctor?',                      es: '¿Debo llamar al médico?' },
              ],
            },
          ],
        },

        // ── Card 5: Comparativos y Superlativos ───────────────────────────
        {
          id: 'comparatives',
          icon: '📊',
          iconBg: '#ede4f5',
          title: 'Comparativos y Superlativos',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>comparativos</strong> comparan dos cosas. Los <strong>superlativos</strong> expresan el máximo o mínimo de un grupo.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Adjetivo', 'Comparativo', 'Superlativo', 'Tipo'],
                rows: [
                  { en: 'big',         ipa: 'bigger',           es: 'the biggest',         context: '+ger (corto)' },
                  { en: 'small',       ipa: 'smaller',          es: 'the smallest',        context: '+er (corto)' },
                  { en: 'fast',        ipa: 'faster',           es: 'the fastest',         context: '+er (corto)' },
                  { en: 'slow',        ipa: 'slower',           es: 'the slowest',         context: '+er (corto)' },
                  { en: 'old',         ipa: 'older',            es: 'the oldest',          context: '+er (corto)' },
                  { en: 'young',       ipa: 'younger',          es: 'the youngest',        context: '+er (corto)' },
                  { en: 'hot',         ipa: 'hotter',           es: 'the hottest',         context: '+ter (duplica)' },
                  { en: 'thin',        ipa: 'thinner',          es: 'the thinnest',        context: '+ner (duplica)' },
                  { en: 'easy',        ipa: 'easier',           es: 'the easiest',         context: 'y→ier (y→iest)' },
                  { en: 'happy',       ipa: 'happier',          es: 'the happiest',        context: 'y→ier (y→iest)' },
                  { en: 'expensive',   ipa: 'more expensive',   es: 'the most expensive',  context: 'more/most (largo)' },
                  { en: 'interesting', ipa: 'more interesting', es: 'the most interesting', context: 'more/most (largo)' },
                  { en: 'good',        ipa: 'better',           es: 'the best',            context: 'irregular' },
                  { en: 'bad',         ipa: 'worse',            es: 'the worst',           context: 'irregular' },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'COMPARATIVO — than',
                    color: '#ede4f5',
                    titleColor: '#6b4c8a',
                    items: [
                      'adj corto + <strong>-er + than</strong>',
                      '<em>My car is <strong>faster than</strong> yours.</em>',
                      '<em>She is <strong>taller than</strong> me.</em>',
                      '<strong>more</strong> + adj largo + <strong>than</strong>',
                      '<em>This is <strong>more expensive than</strong> that.</em>',
                      '<em>He is <strong>more intelligent than</strong> her.</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'SUPERLATIVO — the',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<strong>the</strong> + adj corto + <strong>-est</strong>',
                      '<em>She is <strong>the tallest</strong> in the class.</em>',
                      '<em>This is <strong>the fastest</strong> car.</em>',
                      '<strong>the most</strong> + adj largo',
                      "<em>It's <strong>the most expensive</strong> restaurant.</em>",
                      "<em>She's <strong>the most intelligent</strong> student.</em>",
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'The bus is cheaper than the taxi.',                        es: 'El autobús es más barato que el taxi.' },
                { en: 'Is this the biggest supermarket in the city?',             es: '¿Es este el supermercado más grande de la ciudad?' },
                { en: 'My new job is more interesting than my old one.',           es: 'Mi nuevo trabajo es más interesante que el anterior.' },
                { en: 'He is the best doctor in the hospital.',                   es: 'Él es el mejor médico del hospital.' },
                { en: 'Today is hotter than yesterday.',                          es: 'Hoy hace más calor que ayer.' },
                { en: 'Which is the most expensive hotel?',                       es: '¿Cuál es el hotel más caro?' },
              ],
            },
          ],
        },

        // ── Card 6: How much / How many / How long ─────────────────────────
        {
          id: 'how-questions',
          icon: '❓',
          iconBg: '#ddeaf5',
          title: 'How much / How many / How long',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Pregunta', 'Uso', 'Ejemplo', 'Respuesta típica'],
                rows: [
                  { en: 'How much?', ipa: 'uncountable', es: 'How much water do you drink?',   context: 'About two litres a day.' },
                  { en: 'How much?', ipa: 'dinero',       es: 'How much does it cost?',          context: "It's twenty dollars." },
                  { en: 'How many?', ipa: 'countable',    es: 'How many brothers do you have?', context: 'I have two brothers.' },
                  { en: 'How long?', ipa: 'duración',     es: 'How long does it take?',          context: 'About 30 minutes.' },
                  { en: 'How long?', ipa: 'longitud',     es: 'How long is the river?',          context: "It's 500 kilometres long." },
                  { en: 'How far?',  ipa: 'distancia',    es: 'How far is the station?',         context: "It's two kilometres away." },
                  { en: 'How often?', ipa: 'frecuencia',  es: 'How often do you go to the gym?', context: 'Three times a week.' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'How much does a bus ticket cost?',              es: '¿Cuánto cuesta un billete de bus?' },
                { en: 'How many people work in your office?',          es: '¿Cuántas personas trabajan en tu oficina?' },
                { en: 'How long does it take to get to the airport?',  es: '¿Cuánto tiempo se tarda en llegar al aeropuerto?' },
                { en: 'How far is the nearest hospital?',              es: '¿A qué distancia está el hospital más cercano?' },
                { en: 'How often do you see your parents?',            es: '¿Con qué frecuencia ves a tus padres?' },
                { en: 'How many hours a day do you work?',             es: '¿Cuántas horas al día trabajas?' },
              ],
            },
          ],
        },

        // ── Card 7: Adverbios de Frecuencia ───────────────────────────────
        {
          id: 'frequency-adverbs',
          icon: '🔄',
          iconBg: '#d0ebe7',
          title: 'Adverbios de Frecuencia',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>adverbios de frecuencia</strong> dicen con qué frecuencia haces algo. Su posición en la oración es importante: van <strong>antes del verbo principal</strong> pero <strong>después del verbo to be</strong>.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'POSICIÓN EN LA ORACIÓN',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      '<strong>Antes</strong> del verbo principal:',
                      '<em>I <strong>always</strong> drink coffee.</em>',
                      '<em>She <strong>never</strong> eats meat.</em>',
                      '<em>We <strong>sometimes</strong> go hiking.</em>',
                      '<strong>Después</strong> del verbo to be:',
                      '<em>He <strong>is always</strong> late.</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'ESCALA DE FRECUENCIA',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<strong>always</strong> — siempre (100%)',
                      '<strong>usually</strong> — normalmente (80%)',
                      '<strong>often</strong> — frecuentemente (60%)',
                      '<strong>sometimes</strong> — a veces (40%)',
                      '<strong>rarely / seldom</strong> — raramente (20%)',
                      '<strong>never</strong> — nunca (0%)',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I always have breakfast before work.',              es: 'Siempre desayuno antes del trabajo.' },
                { en: 'She usually takes the bus to the office.',         es: 'Normalmente toma el autobús a la oficina.' },
                { en: 'We often visit our grandparents on Sundays.',      es: 'Frecuentemente visitamos a nuestros abuelos los domingos.' },
                { en: 'He sometimes goes to the gym after work.',         es: 'A veces va al gimnasio después del trabajo.' },
                { en: 'They rarely eat fast food.',                        es: 'Raramente comen comida rápida.' },
                { en: 'I never drink coffee after 6pm.',                  es: 'Nunca bebo café después de las 6pm.' },
              ],
            },
          ],
        },

        // ── Card 8: Futuro con going to ───────────────────────────────────
        {
          id: 'going-to',
          icon: '🔮',
          iconBg: '#ede4f5',
          title: 'Futuro con going to',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: '<strong>Going to</strong> se usa para hablar de <em>planes e intenciones</em> para el futuro, especialmente cuando ya has decidido qué hacer.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'AFIRMATIVO',
                    items: [
                      'I <strong>am going to</strong> travel.',
                      'You <strong>are going to</strong> study.',
                      'He/She <strong>is going to</strong> work.',
                      'We <strong>are going to</strong> cook.',
                      'They <strong>are going to</strong> visit us.',
                    ],
                  },
                  {
                    type: 'neg',
                    title: 'NEGATIVO',
                    items: [
                      "I <strong>'m not going to</strong> travel.",
                      "You <strong>aren't going to</strong> study.",
                      "He <strong>isn't going to</strong> work.",
                      "We <strong>aren't going to</strong> cook.",
                      "They <strong>aren't going to</strong> visit.",
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'INTERROGATIVO',
                    items: [
                      '<strong>Am</strong> I going to travel?',
                      '<strong>Are</strong> you going to study?',
                      '<strong>Is</strong> he going to work?',
                      '<strong>Are</strong> we going to cook?',
                      "Yes, I am. / No, I'm not.",
                    ],
                  },
                ],
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Estructura:', text: 'Subject + am/is/are + going to + VERB BASE' },
                  { label: 'Ejemplo:   ', text: 'I am going to visit my family next weekend.' },
                  { label: 'Contraste: ', text: 'going to = plan ya decidido' },
                  { label: '           ', text: 'will      = decisión espontánea en el momento' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: "💡 <strong>Palabras clave del futuro:</strong> <em>tomorrow, next week/month/year, this weekend, in the future, soon</em><br><br>Diferencia: <em>I <strong>'m going to</strong> buy a car.</em> (ya lo he decidido) vs <em>I <strong>'ll</strong> help you.</em> (decisión espontánea)",
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: "I'm going to start a new job next month.",         es: 'Voy a empezar un trabajo nuevo el mes que viene.' },
                { en: 'Are you going to come to the party?',              es: '¿Vas a venir a la fiesta?' },
                { en: "She isn't going to study medicine.",               es: 'Ella no va a estudiar medicina.' },
                { en: "We're going to travel to Japan next year.",        es: 'Vamos a viajar a Japón el año que viene.' },
                { en: 'What are you going to do this weekend?',           es: '¿Qué vas a hacer este fin de semana?' },
                { en: "It's going to rain. Take an umbrella!",            es: '¡Va a llover. Lleva un paraguas!' },
              ],
            },
          ],
        },

        // ── Card 9: Ejercicios Interactivos ───────────────────────────────
        {
          id: 'exercises-grammar-a2',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios Interactivos · Gramática A2',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                {
                  sentence: 'She ___ reading a book right now.',
                  answers: ['is'],
                  hint: 'Presente continuo — 3ra persona singular',
                },
                {
                  sentence: 'I ___ to work yesterday because I was sick.',
                  answers: ["didn't go", 'did not go'],
                  hint: 'Pasado simple negativo',
                },
                {
                  sentence: 'There ___ a supermarket near the station.',
                  answers: ['is'],
                  hint: 'Existencia singular',
                },
                {
                  sentence: 'You ___ see a doctor. You look terrible!',
                  answers: ['should', 'must'],
                  hint: 'Consejo o recomendación',
                },
              ],
            },
            {
              type: 'word_order',
              data: [
                {
                  words: ['is', 'She', 'her', 'studying', 'homework'],
                  correct: 'She is studying her homework',
                  translation: 'Ella está estudiando su tarea.',
                },
                {
                  words: ['yesterday?', 'you', 'Did', 'go', 'to', 'the', 'gym'],
                  correct: 'Did you go to the gym yesterday?',
                  translation: '¿Fuiste al gimnasio ayer?',
                },
                {
                  words: ['going', 'I', 'to', 'visit', 'am', 'my', 'family'],
                  correct: 'I am going to visit my family',
                  translation: 'Voy a visitar a mi familia.',
                },
                {
                  words: ['the', 'city?', 'Are', 'any', 'there', 'taxis', 'in'],
                  correct: 'Are there any taxis in the city?',
                  translation: '¿Hay algún taxi en la ciudad?',
                },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'can',       es: 'habilidad / posibilidad' },
                  { en: 'should',    es: 'consejo o recomendación' },
                  { en: 'must',      es: 'obligación' },
                  { en: 'going to',  es: 'plan futuro' },
                  { en: 'there is',  es: 'hay (singular)' },
                  { en: 'there are', es: 'hay (plural)' },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'go',    ipa: '/ɡoʊ/',  es: 'went' },
                { en: 'come',  ipa: '/kʌm/',  es: 'came' },
                { en: 'have',              es: 'had' },
                { en: 'see',   ipa: '/siː/', es: 'saw' },
                { en: 'eat',   ipa: '/iːt/', es: 'ate' },
                { en: 'buy',   ipa: '/baɪ/', es: 'bought' },
                { en: 'make',  ipa: '/meɪk/', es: 'made' },
                { en: 'take',              es: 'took' },
                { en: 'think', ipa: '/θɪŋk/', es: 'thought' },
                { en: 'leave', ipa: '/liːv/', es: 'left' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I am going to travel',       translation: 'Voy a viajar.' },
                { word: 'She is working right now',   translation: 'Ella está trabajando ahora.' },
                { word: 'Did you see the film?',       translation: '¿Viste la película?' },
                { word: 'You should see a doctor',    translation: 'Deberías ver a un médico.' },
                { word: 'There is a pharmacy nearby', translation: 'Hay una farmacia cerca.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                {
                  sentence: 'She is studying for her exam right now.',
                  translation: 'Ella está estudiando para su examen ahora mismo.',
                },
                {
                  sentence: "I didn't go to work yesterday because I was sick.",
                  translation: 'No fui a trabajar ayer porque estaba enfermo/a.',
                },
                {
                  sentence: 'There are three hospitals in this city.',
                  translation: 'Hay tres hospitales en esta ciudad.',
                },
                {
                  sentence: 'We are going to travel to London next summer.',
                  translation: 'Vamos a viajar a Londres el próximo verano.',
                },
              ],
            },
          ],
        },

        // ── Card 10: Mini-Quiz ─────────────────────────────────────────────
        {
          id: 'quiz-grammar-a2',
          icon: '⚡',
          iconBg: '#d0ebe7',
          title: 'Mini-Quiz · Gramática A2',
          blocks: [
            {
              type: 'quiz',
              data: [
                {
                  q: "Completa: 'She ___ working right now.'",
                  opts: ['am', 'is', 'are', 'be'],
                  ans: 1,
                },
                {
                  q: "Completa: 'I ___ to the cinema yesterday.'",
                  opts: ['go', 'goes', 'went', 'gone'],
                  ans: 2,
                },
                {
                  q: "'___ there a pharmacy near here?' — ¿Cuál es correcta?",
                  opts: ['Are', 'Is', 'Have', 'Do'],
                  ans: 1,
                },
                {
                  q: "'You ___ smoke in this area.' — prohibición",
                  opts: ['can', 'should', "mustn't", "needn't"],
                  ans: 2,
                },
                {
                  q: "'My car is ___ than yours.' (fast)",
                  opts: ['more fast', 'faster', 'fastest', 'most fast'],
                  ans: 1,
                },
                {
                  q: "'How ___ does it take to get there?'",
                  opts: ['much', 'many', 'long', 'far'],
                  ans: 2,
                },
                {
                  q: "'She ___ always late for class.' — posición del adverbio",
                  opts: ['is always', 'always is', 'always', 'always she is'],
                  ans: 0,
                },
                {
                  q: "'I ___ going to study medicine.' — primera persona",
                  opts: ['am', 'is', 'are', 'be'],
                  ans: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default grammar;
