import type { Chapter } from '@/lib/types';

const grammar: Chapter = {
  slug: 'grammar',
  title: 'Gramática Base',
  description:
    'La gramática A1 es el esqueleto del inglés. Domina estas estructuras y podrás construir miles de oraciones correctas.',
  sections: [
    {
      id: 'grammar',
      label: 'Gramática',
      dotColor: 'var(--teal)',
      cards: [
        {
          id: 'tobe',
          icon: '🔧',
          iconBg: '#d0ebe7',
          title: 'Verbo TO BE — am / is / are',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El verbo <strong>to be</strong> equivale a "ser" o "estar". Es el verbo más importante en inglés. Su forma cambia según el pronombre.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: '✅ Afirmativo',
                    items: [
                      'I <strong>am</strong> (I\'m) → Yo soy/estoy',
                      'You <strong>are</strong> (You\'re)',
                      'He <strong>is</strong> (He\'s)',
                      'She <strong>is</strong> (She\'s)',
                      'It <strong>is</strong> (It\'s)',
                      'We <strong>are</strong> (We\'re)',
                      'They <strong>are</strong> (They\'re)',
                    ],
                  },
                  {
                    type: 'neg',
                    title: '❌ Negativo',
                    items: [
                      'I <strong>am not</strong> (I\'m not)',
                      'You <strong>are not</strong> (aren\'t)',
                      'He <strong>is not</strong> (isn\'t)',
                      'She <strong>is not</strong> (isn\'t)',
                      'It <strong>is not</strong> (isn\'t)',
                      'We <strong>are not</strong> (aren\'t)',
                      'They <strong>are not</strong> (aren\'t)',
                    ],
                  },
                  {
                    type: 'inter',
                    title: '❓ Interrogativo',
                    items: [
                      '<strong>Am</strong> I...?',
                      '<strong>Are</strong> you...?',
                      '<strong>Is</strong> he...?',
                      '<strong>Is</strong> she...?',
                      '<strong>Is</strong> it...?',
                      '<strong>Are</strong> we...?',
                      '<strong>Are</strong> they...?',
                    ],
                  },
                ],
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Afirmativo:', text: 'I am a teacher.  → Soy maestro/a.' },
                  { label: 'Negativo:  ', text: 'She is not happy.  → Ella no está feliz.' },
                  { label: 'Pregunta:  ', text: 'Are they students?  → ¿Son ellos estudiantes?' },
                  { label: 'Respuesta: ', text: 'Yes, they are. / No, they aren\'t.' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I am 25 years old.',    es: 'Tengo 25 años.',     note: '→ am + adjetivo/sustantivo' },
                { en: 'He is a doctor.',        es: 'Él es médico.',      note: '→ is + profesión' },
                { en: 'We are from Mexico.',    es: 'Somos de México.',   note: '→ are + from + país' },
                { en: 'The coffee is hot.',     es: 'El café está caliente.', note: '→ is + estado' },
              ],
            },
          ],
        },

        {
          id: 'articles',
          icon: '📖',
          iconBg: '#fef3d0',
          title: 'Artículos: a / an / the',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'A',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      'Artículo indefinido',
                      'Antes de consonante',
                      '<em>a dog, a car</em>',
                      '<em>a university</em> (/j/)',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'AN',
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      'Artículo indefinido',
                      'Antes de vocal (a,e,i,o,u)',
                      '<em>an apple, an egg</em>',
                      '<em>an hour</em> (h muda)',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'THE',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      'Artículo definido',
                      'Cosa específica/única',
                      '<em>the sun, the car</em>',
                      '<em>the book on the table</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 Usa <strong>a/an</strong> cuando mencionas algo por primera vez o cuando no es específico. Usa <strong>the</strong> cuando ya sabes exactamente de qué cosa hablas, o cuando hay solo una de esa cosa.<br><br><em>"I have <strong>a</strong> dog. <strong>The</strong> dog is very big."</em> — Tengo un perro. El perro es muy grande.',
              },
            },
          ],
        },

        {
          id: 'pronouns',
          icon: '👤',
          iconBg: '#ede4f5',
          title: 'Pronombres Personales y Posesivos',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'PERSONALES (sujeto)',
                    color: '#f7f2fd',
                    titleColor: '#6b4c8a',
                    items: [
                      'I <em style="color:#888;font-size:.85em">— yo</em>',
                      'you <em style="color:#888;font-size:.85em">— tú/usted</em>',
                      'he <em style="color:#888;font-size:.85em">— él</em>',
                      'she <em style="color:#888;font-size:.85em">— ella</em>',
                      'it <em style="color:#888;font-size:.85em">— ello</em>',
                      'we <em style="color:#888;font-size:.85em">— nosotros</em>',
                      'they <em style="color:#888;font-size:.85em">— ellos</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'POSESIVOS (de quién)',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      'my <em style="color:#888;font-size:.85em">— mi</em>',
                      'your <em style="color:#888;font-size:.85em">— tu/su</em>',
                      'his <em style="color:#888;font-size:.85em">— su (él)</em>',
                      'her <em style="color:#888;font-size:.85em">— su (ella)</em>',
                      'its <em style="color:#888;font-size:.85em">— su (ello)</em>',
                      'our <em style="color:#888;font-size:.85em">— nuestro</em>',
                      'their <em style="color:#888;font-size:.85em">— su (ellos)</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I love <u>my</u> family.',          es: 'Amo a mi familia.' },
                { en: '<u>She</u> has <u>her</u> book.',   es: 'Ella tiene su libro.' },
                { en: '<u>They</u> visit <u>their</u> parents.', es: 'Ellos visitan a sus padres.' },
                { en: 'What is <u>your</u> name?',         es: '¿Cuál es tu nombre?' },
              ],
            },
          ],
        },

        {
          id: 'plural',
          icon: '📦',
          iconBg: '#ddeaf5',
          title: 'Plural de Sustantivos',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Regla', 'Singular', 'Plural', 'Cómo'],
                rows: [
                  { en: 'Regla general',             ipa: 'cat, book, dog',   es: 'cats, books, dogs',           context: '+ s'       },
                  { en: 'Termina en s, sh, ch, x, z', ipa: 'bus, dish, watch', es: 'buses, dishes, watches',      context: '+ es'      },
                  { en: 'Termina en consonante + y',  ipa: 'city, baby',        es: 'cities, babies',              context: 'y → ies'   },
                  { en: 'Termina en f/fe',            ipa: 'leaf, knife',       es: 'leaves, knives',              context: 'f → ves'   },
                  { en: 'Irregulares (memorizar)',    ipa: 'man, woman, child', es: '<strong>men, women, children</strong>', context: 'cambio total' },
                  { en: 'Iguales en singular/plural', ipa: 'fish, sheep, deer', es: 'fish, sheep, deer',           context: 'sin cambio' },
                ],
              },
            },
          ],
        },

        {
          id: 'present',
          icon: '⏰',
          iconBg: '#d0ebe7',
          title: 'Presente Simple — Verbos Comunes',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>Presente Simple</strong> expresa rutinas, hábitos y hechos generales. La estructura es simple: sujeto + verbo base. Importante: con <strong>he/she/it</strong> el verbo lleva <strong>-s</strong>.',
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Afirmativo:', text: 'I / You / We / They + VERBO\n             He / She / It + VERBO + S' },
                  { label: 'Negativo:  ', text: "I don't like coffee.\n             She doesn't like coffee." },
                  { label: 'Pregunta:  ', text: "Do you like coffee?  — Yes, I do.\n             Does she like coffee? — No, she doesn't." },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I <strong>like</strong> music.',     es: 'Me gusta la música.' },
                { en: 'She <strong>has</strong> a cat.',    es: 'Ella tiene un gato.' },
                { en: 'We <strong>go</strong> to school.',  es: 'Vamos a la escuela.' },
                { en: 'He <strong>lives</strong> in Paris.',es: 'Él vive en París.' },
                { en: 'They <strong>eat</strong> at 7pm.',  es: 'Comen a las 7pm.' },
                { en: 'I <strong>work</strong> every day.', es: 'Trabajo todos los días.' },
              ],
            },
          ],
        },

        {
          id: 'adj',
          icon: '🎨',
          iconBg: '#fce8e4',
          title: 'Adjetivos Básicos',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En inglés los adjetivos van <strong>ANTES</strong> del sustantivo: <em>a <strong>big</strong> house</em> (no ~~a house big~~). Los adjetivos no cambian en número: <em>a tall man / two tall men</em>.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Opuesto', 'Español'],
                rows: [
                  { en: 'big / large',        ipa: 'grande',    es: 'small / little',    context: 'pequeño'  },
                  { en: 'old',                ipa: 'viejo / mayor', es: 'young / new',   context: 'joven / nuevo' },
                  { en: 'happy',              ipa: 'feliz',     es: 'sad',               context: 'triste'   },
                  { en: 'good',               ipa: 'bueno',     es: 'bad',               context: 'malo'     },
                  { en: 'hot',                ipa: 'caliente',  es: 'cold',              context: 'frío'     },
                  { en: 'fast',               ipa: 'rápido',    es: 'slow',              context: 'lento'    },
                  { en: 'easy',               ipa: 'fácil',     es: 'difficult / hard',  context: 'difícil'  },
                  { en: 'tall',               ipa: 'alto',      es: 'short',             context: 'bajo / corto' },
                  { en: 'beautiful / pretty', ipa: 'hermoso/a', es: 'ugly',              context: 'feo'      },
                  { en: 'expensive',          ipa: 'caro',      es: 'cheap',             context: 'barato'   },
                ],
              },
            },
          ],
        },

        {
          id: 'questions',
          icon: '❓',
          iconBg: '#fef3d0',
          title: 'Preguntas: What, Who, Where, How old',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Pregunta', 'Uso', 'Ejemplo', 'Respuesta típica'],
                rows: [
                  { en: 'What?',      ipa: '¿Qué? / ¿Cuál?',  es: 'What is your name?',  context: 'My name is Ana.'     },
                  { en: 'Who?',       ipa: '¿Quién?',          es: 'Who is she?',          context: 'She is my sister.'   },
                  { en: 'Where?',     ipa: '¿Dónde?',          es: 'Where are you from?',  context: "I'm from Colombia."  },
                  { en: 'How old?',   ipa: '¿Cuántos años?',   es: 'How old are you?',     context: "I'm 30 years old."   },
                  { en: 'What time?', ipa: '¿A qué hora?',     es: 'What time is it?',     context: "It's 3 o'clock."     },
                  { en: 'How much?',  ipa: '¿Cuánto cuesta?',  es: 'How much is this?',    context: "It's five dollars."  },
                ],
              },
            },
          ],
        },

        {
          id: 'exercises-grammar',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios Interactivos · Gramática',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                {
                  sentence: 'He ___ a doctor.',
                  answers: ['is'],
                  hint: 'Verbo to be — 3ra persona singular',
                },
                {
                  sentence: 'They ___ students from Spain.',
                  answers: ['are'],
                  hint: 'Verbo to be — plural',
                },
                {
                  sentence: 'I ___ not hungry.',
                  answers: ['am'],
                  hint: 'Verbo to be — 1ra persona singular',
                },
                {
                  sentence: 'She ___ coffee every morning.',
                  answers: ['drinks', 'has'],
                  hint: 'Presente simple — 3ra persona: verbo + s',
                },
              ],
            },
            {
              type: 'word_order',
              data: [
                {
                  words: ['am', 'I', 'student', 'a'],
                  correct: 'I am a student',
                  translation: 'Soy estudiante.',
                },
                {
                  words: ['she', 'teacher?', 'Is', 'a'],
                  correct: 'Is she a teacher?',
                  translation: '¿Es ella una maestra?',
                },
                {
                  words: ['not', 'We', 'tired', 'are'],
                  correct: 'We are not tired',
                  translation: 'No estamos cansados.',
                },
                {
                  words: ['does', 'she', 'coffee?', 'like'],
                  correct: 'does she like coffee?',
                  translation: '¿Le gusta el café a ella?',
                },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'I',    es: 'am'  },
                  { en: 'you',  es: 'are' },
                  { en: 'she',  es: 'is'  },
                  { en: 'we',   es: 'are (nosotros)' },
                  { en: 'they', es: 'are (ellos)'    },
                  { en: 'it',   es: 'is (ello)'      },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'I am',      es: 'Yo soy / estoy' },
                { en: 'You are',   es: 'Tú eres / estás' },
                { en: 'He is',     es: 'Él es / está' },
                { en: 'She is',    es: 'Ella es / está' },
                { en: 'We are',    es: 'Nosotros somos / estamos' },
                { en: 'They are',  es: 'Ellos son / están' },
                { en: 'a / an',    es: 'Artículo indefinido (un/una)' },
                { en: 'the',       es: 'Artículo definido (el/la)' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I am a student',   translation: 'Soy estudiante.' },
                { word: 'She is happy',     translation: 'Ella está feliz.' },
                { word: 'Are you from Spain?', translation: '¿Eres de España?' },
                { word: 'He is not tired',  translation: 'Él no está cansado.' },
                { word: 'We are friends',   translation: 'Somos amigos.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                {
                  sentence: 'She is not a student.',
                  translation: 'Ella no es estudiante.',
                },
                {
                  sentence: 'Are you from Mexico?',
                  translation: '¿Eres de México?',
                },
                {
                  sentence: 'I have a big family.',
                  translation: 'Tengo una familia grande.',
                },
                {
                  sentence: 'He does not like coffee.',
                  translation: 'A él no le gusta el café.',
                },
              ],
            },
          ],
        },

        {
          id: 'quiz-grammar',
          icon: '⚡',
          iconBg: '#d0ebe7',
          title: 'Mini-Quiz · Gramática',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: "Completa: 'She ___ a teacher.'",              opts: ['am', 'is', 'are', 'be'],                                                  ans: 1 },
                { q: "¿Cuál es correcta?",                          opts: ['I am not hungry', 'I not am hungry', 'I am no hungry', 'Am I not hungry'], ans: 0 },
                { q: "'___ apple a day keeps the doctor away'",     opts: ['A', 'An', 'The', '—'],                                                     ans: 1 },
                { q: "¿Cuál es el posesivo de 'she'?",              opts: ['hers', "she's", 'her', 'his'],                                            ans: 2 },
                { q: "Completa: 'He ___ in Madrid.'",               opts: ['live', 'lives', 'is living', 'livis'],                                     ans: 1 },
                { q: "¿Cuál es correcta?",                          opts: ["I don't like", "I doesn't like", 'I no like', 'I am not like'],           ans: 0 },
                { q: "¿Dónde va el adjetivo en inglés?",            opts: ["Después: 'a dog big'", "Antes: 'a big dog'", "Al final", "Donde quieras"], ans: 1 },
                { q: "'___ are you from?' → 'Mexico.'",             opts: ['What', 'Who', 'Where', 'How'],                                             ans: 2 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default grammar;
