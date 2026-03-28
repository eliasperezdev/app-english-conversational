import type { Chapter } from '@/lib/types';

const vocabulary: Chapter = {
  slug: 'vocabulary',
  title: 'Vocabulario Esencial',
  description:
    'Estas son las palabras más importantes que un principiante debe conocer. Estudia los grupos temáticos y practica con el mini-quiz al final.',
  sections: [
    {
      id: 'vocabulary',
      label: 'Vocabulario',
      dotColor: 'var(--gold)',
      cards: [
        {
          id: 'greetings',
          icon: '👋',
          iconBg: '#fef3d0',
          title: 'Saludos y Despedidas',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Pronunciación', 'Español', 'Contexto'],
                rows: [
                  { en: 'Hello',                       ipa: '/hɛˈloʊ/',             es: 'Hola',                         context: 'Formal / informal' },
                  { en: 'Hi',                          ipa: '/haɪ/',                es: 'Hola',                         context: 'Informal' },
                  { en: 'Good morning',                ipa: '/ɡʊd ˈmɔːrnɪŋ/',      es: 'Buenos días',                  context: 'Hasta el mediodía' },
                  { en: 'Good afternoon',              ipa: '/ɡʊd ˈæftərˌnuːn/',   es: 'Buenas tardes',                context: 'Mediodía–6pm' },
                  { en: 'Good evening',                ipa: '/ɡʊd ˈiːvnɪŋ/',       es: 'Buenas noches (saludo)',        context: 'Al llegar a un lugar' },
                  { en: 'Good night',                  ipa: '/ɡʊd naɪt/',           es: 'Buenas noches (despedida)',     context: 'Al ir a dormir' },
                  { en: 'Goodbye / Bye',               ipa: '/ɡʊdˈbaɪ/',            es: 'Adiós / Chao',                 context: 'Despedida' },
                  { en: 'See you later',               ipa: '/siː juː ˈleɪtər/',    es: 'Hasta luego',                  context: 'Informal' },
                  { en: 'How are you?',                ipa: '/haʊ ɑːr juː/',        es: '¿Cómo estás?',                 context: 'Pregunta de saludo' },
                  { en: "I'm fine, thank you",         ipa: '/aɪm faɪn/',           es: 'Estoy bien, gracias',          context: 'Respuesta estándar' },
                  { en: 'Nice to meet you',            ipa: '/naɪs tə miːt juː/',   es: 'Mucho gusto',                  context: 'Primera presentación' },
                  { en: 'Please / Thank you / Sorry',  ipa: '/pliːz / θæŋk juː / ˈsɒri/', es: 'Por favor / Gracias / Lo siento', context: 'Cortesía básica' },
                ],
              },
            },
          ],
        },

        {
          id: 'numbers',
          icon: '🔢',
          iconBg: '#ddeaf5',
          title: 'Números 1–30 + Decenas',
          blocks: [
            {
              type: 'number_grid',
              data: [
                { num: 1,   word: 'one' },
                { num: 2,   word: 'two' },
                { num: 3,   word: 'three' },
                { num: 4,   word: 'four' },
                { num: 5,   word: 'five' },
                { num: 6,   word: 'six' },
                { num: 7,   word: 'seven' },
                { num: 8,   word: 'eight' },
                { num: 9,   word: 'nine' },
                { num: 10,  word: 'ten' },
                { num: 11,  word: 'eleven' },
                { num: 12,  word: 'twelve' },
                { num: 13,  word: 'thirteen' },
                { num: 14,  word: 'fourteen' },
                { num: 15,  word: 'fifteen' },
                { num: 20,  word: 'twenty' },
                { num: 21,  word: 'twenty-one' },
                { num: 30,  word: 'thirty' },
                { num: 40,  word: 'forty' },
                { num: 50,  word: 'fifty' },
                { num: 60,  word: 'sixty' },
                { num: 70,  word: 'seventy' },
                { num: 80,  word: 'eighty' },
                { num: 90,  word: 'ninety' },
                { num: 100, word: 'one hundred' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Atención:</strong> Los números 13–19 terminan en <strong>-teen</strong>. Los múltiplos de 10 (20, 30…) terminan en <strong>-ty</strong>. Para números compuestos: <em>twenty-five, forty-three</em> (se unen con guion).',
              },
            },
          ],
        },

        {
          id: 'dates',
          icon: '📅',
          iconBg: '#d0ebe7',
          title: 'Días, Meses y Estaciones',
          blocks: [
            {
              type: 'pill_list',
              data: {
                color: 'gold',
                label: 'DÍAS DE LA SEMANA — en inglés siempre con mayúscula',
                items: [
                  { en: 'Monday',    es: 'Lunes' },
                  { en: 'Tuesday',   es: 'Martes' },
                  { en: 'Wednesday', es: 'Miércoles' },
                  { en: 'Thursday',  es: 'Jueves' },
                  { en: 'Friday',    es: 'Viernes' },
                  { en: 'Saturday',  es: 'Sábado' },
                  { en: 'Sunday',    es: 'Domingo' },
                ],
              },
            },
            {
              type: 'pill_list',
              data: {
                color: 'neutral',
                label: 'MESES DEL AÑO',
                items: [
                  { en: 'January',   es: 'Enero' },
                  { en: 'February',  es: 'Febrero' },
                  { en: 'March',     es: 'Marzo' },
                  { en: 'April',     es: 'Abril' },
                  { en: 'May',       es: 'Mayo' },
                  { en: 'June',      es: 'Junio' },
                  { en: 'July',      es: 'Julio' },
                  { en: 'August',    es: 'Agosto' },
                  { en: 'September', es: 'Septiembre' },
                  { en: 'October',   es: 'Octubre' },
                  { en: 'November',  es: 'Noviembre' },
                  { en: 'December',  es: 'Diciembre' },
                ],
              },
            },
          ],
        },

        {
          id: 'colors',
          icon: '🎨',
          iconBg: 'linear-gradient(135deg,#fce8e4,#ddeaf5)',
          title: 'Colores',
          blocks: [
            {
              type: 'color_swatches',
              data: [
                { name: 'red',      es: 'rojo',       hex: '#ff4444' },
                { name: 'blue',     es: 'azul',       hex: '#3399ff' },
                { name: 'green',    es: 'verde',      hex: '#44cc44' },
                { name: 'yellow',   es: 'amarillo',   hex: '#ffcc00' },
                { name: 'orange',   es: 'naranja',    hex: '#ff8800' },
                { name: 'purple',   es: 'morado',     hex: '#9944cc' },
                { name: 'pink',     es: 'rosado',     hex: '#ff88bb' },
                { name: 'brown',    es: 'marrón',     hex: '#884422' },
                { name: 'black',    es: 'negro',      hex: '#222222' },
                { name: 'white',    es: 'blanco',     hex: '#ffffff' },
                { name: 'grey',     es: 'gris',       hex: '#888888' },
                { name: 'dark blue',es: 'azul oscuro',hex: '#003366' },
              ],
            },
          ],
        },

        {
          id: 'family',
          icon: '👨‍👩‍👧',
          iconBg: '#ede4f5',
          title: 'Familia y Personas',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Pronunciación', 'Español'],
                rows: [
                  { en: 'father / dad',              ipa: '/ˈfɑːðər/',        es: 'padre / papá' },
                  { en: 'mother / mom',              ipa: '/ˈmʌðər/',         es: 'madre / mamá' },
                  { en: 'brother',                   ipa: '/ˈbrʌðər/',        es: 'hermano' },
                  { en: 'sister',                    ipa: '/ˈsɪstər/',        es: 'hermana' },
                  { en: 'son / daughter',            ipa: '/sʌn / ˈdɔːtər/',  es: 'hijo / hija' },
                  { en: 'grandfather / grandmother', ipa: '/ˈɡrændfɑːðər/',   es: 'abuelo / abuela' },
                  { en: 'uncle / aunt',              ipa: '/ˈʌŋkəl / ænt/',   es: 'tío / tía' },
                  { en: 'cousin',                    ipa: '/ˈkʌzən/',         es: 'primo/a' },
                  { en: 'husband / wife',            ipa: '/ˈhʌzbənd / waɪf/',es: 'esposo / esposa' },
                  { en: 'friend',                    ipa: '/frɛnd/',           es: 'amigo/a' },
                ],
              },
            },
          ],
        },

        {
          id: 'food',
          icon: '🍎',
          iconBg: '#fce8e4',
          title: 'Comida y Bebida Básica',
          blocks: [
            {
              type: 'pill_list',
              data: {
                color: 'coral',
                items: [
                  { en: 'bread',      es: 'pan' },
                  { en: 'water',      es: 'agua' },
                  { en: 'milk',       es: 'leche' },
                  { en: 'rice',       es: 'arroz' },
                  { en: 'chicken',    es: 'pollo' },
                  { en: 'fish',       es: 'pescado' },
                  { en: 'apple',      es: 'manzana' },
                  { en: 'orange',     es: 'naranja' },
                  { en: 'egg',        es: 'huevo' },
                  { en: 'coffee',     es: 'café' },
                  { en: 'tea',        es: 'té' },
                  { en: 'juice',      es: 'jugo' },
                  { en: 'cheese',     es: 'queso' },
                  { en: 'vegetables', es: 'verduras' },
                  { en: 'fruit',      es: 'frutas' },
                ],
              },
            },
          ],
        },

        {
          id: 'exercises-vocab',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios Interactivos · Vocabulario',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                {
                  sentence: 'She ___ from Mexico.',
                  answers: ['is'],
                  hint: 'Verbo to be — 3ra persona singular',
                },
                {
                  sentence: 'The number after twelve is ___.',
                  answers: ['thirteen'],
                  hint: 'Los números 13–19 terminan en -teen',
                },
                {
                  sentence: 'My mother\'s mother is my ___.',
                  answers: ['grandmother', 'grandma'],
                  hint: 'Relación familiar de la madre de tu madre',
                },
                {
                  sentence: 'I drink ___ every morning.',
                  answers: ['coffee', 'tea', 'milk', 'juice', 'water'],
                  hint: 'Una bebida de desayuno (varias respuestas válidas)',
                },
              ],
            },
            {
              type: 'word_order',
              data: [
                {
                  words: ['name', 'is', 'My', 'Ana'],
                  correct: 'My name is Ana',
                  translation: 'Mi nombre es Ana.',
                },
                {
                  words: ['a', 'have', 'I', 'brother'],
                  correct: 'I have a brother',
                  translation: 'Tengo un hermano.',
                },
                {
                  words: ['are', 'How', 'you?'],
                  correct: 'How are you?',
                  translation: '¿Cómo estás?',
                },
                {
                  words: ['meet', 'to', 'Nice', 'you'],
                  correct: 'Nice to meet you',
                  translation: 'Mucho gusto.',
                },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'father',   es: 'padre'   },
                  { en: 'mother',   es: 'madre'   },
                  { en: 'brother',  es: 'hermano' },
                  { en: 'sister',   es: 'hermana' },
                  { en: 'friend',   es: 'amigo/a' },
                  { en: 'husband',  es: 'esposo'  },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'Hello',          es: 'Hola',              ipa: '/hɛˈloʊ/'        },
                { en: 'Goodbye',        es: 'Adiós',             ipa: '/ɡʊdˈbaɪ/'       },
                { en: 'Thank you',      es: 'Gracias',           ipa: '/θæŋk juː/'      },
                { en: 'Please',         es: 'Por favor',         ipa: '/pliːz/'         },
                { en: 'Good morning',   es: 'Buenos días',       ipa: '/ɡʊd ˈmɔːrnɪŋ/' },
                { en: 'Good night',     es: 'Buenas noches',     ipa: '/ɡʊd naɪt/'      },
                { en: 'How are you?',   es: '¿Cómo estás?',      ipa: '/haʊ ɑːr juː/'   },
                { en: 'Nice to meet you', es: 'Mucho gusto',     ipa: '/naɪs tə miːt juː/' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'hello',    ipa: '/hɛˈloʊ/',       translation: 'hola'       },
                { word: 'goodbye',  ipa: '/ɡʊdˈbaɪ/',      translation: 'adiós'      },
                { word: 'please',   ipa: '/pliːz/',         translation: 'por favor'  },
                { word: 'brother',  ipa: '/ˈbrʌðər/',       translation: 'hermano'    },
                { word: 'mother',   ipa: '/ˈmʌðər/',        translation: 'madre'      },
              ],
            },
            {
              type: 'dictation',
              data: [
                {
                  sentence: 'Hello, my name is Ana.',
                  translation: 'Hola, mi nombre es Ana.',
                },
                {
                  sentence: 'I have a brother and a sister.',
                  translation: 'Tengo un hermano y una hermana.',
                },
                {
                  sentence: 'Nice to meet you.',
                  translation: 'Mucho gusto.',
                },
                {
                  sentence: 'Good morning, how are you?',
                  translation: 'Buenos días, ¿cómo estás?',
                },
              ],
            },
          ],
        },

        {
          id: 'quiz-vocab',
          icon: '⚡',
          iconBg: '#fef3d0',
          title: 'Mini-Quiz · Vocabulario',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: "¿Cómo se dice 'Buenos días' en inglés?",   opts: ['Good night', 'Good morning', 'Good evening', 'Hello'],          ans: 1 },
                { q: "¿Cuál es el plural de 'child'?",            opts: ['childs', 'childen', 'children', 'child'],                       ans: 2 },
                { q: "¿Cómo se dice el número 15 en inglés?",    opts: ['fiveteen', 'fifty', 'fifteen', 'five-ten'],                     ans: 2 },
                { q: "¿Qué color es 'green'?",                    opts: ['rojo', 'azul', 'verde', 'amarillo'],                            ans: 2 },
                { q: "'My father's sister' es mi…",               opts: ['abuela', 'tía', 'prima', 'hermana'],                            ans: 1 },
                { q: "¿Cuál es el mes después de 'July'?",        opts: ['June', 'September', 'August', 'October'],                      ans: 2 },
                { q: "¿Cómo se dice 'mucho gusto'?",              opts: ['See you later', 'Nice to meet you', 'Thank you', 'How are you'], ans: 1 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default vocabulary;
