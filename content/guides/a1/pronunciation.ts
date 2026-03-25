import type { Chapter } from '@/lib/types';

const pronunciation: Chapter = {
  slug: 'pronunciation',
  title: 'Pronunciación',
  description:
    'La pronunciación es clave para ser entendido. Aprende el alfabeto, los sonidos vocálicos y la entonación de preguntas.',
  sections: [
    {
      id: 'pronunciation',
      label: 'Pronunciación',
      dotColor: 'var(--coral)',
      cards: [
        {
          id: 'alphabet',
          icon: '🔤',
          iconBg: '#fce8e4',
          title: 'El Alfabeto en Inglés',
          blocks: [
            {
              type: 'alphabet_grid',
              data: [
                { letter: 'A', ipa: 'eɪ' },
                { letter: 'B', ipa: 'biː' },
                { letter: 'C', ipa: 'siː' },
                { letter: 'D', ipa: 'diː' },
                { letter: 'E', ipa: 'iː' },
                { letter: 'F', ipa: 'ɛf' },
                { letter: 'G', ipa: 'dʒiː' },
                { letter: 'H', ipa: 'eɪtʃ' },
                { letter: 'I', ipa: 'aɪ' },
                { letter: 'J', ipa: 'dʒeɪ' },
                { letter: 'K', ipa: 'keɪ' },
                { letter: 'L', ipa: 'ɛl' },
                { letter: 'M', ipa: 'ɛm' },
                { letter: 'N', ipa: 'ɛn' },
                { letter: 'O', ipa: 'oʊ' },
                { letter: 'P', ipa: 'piː' },
                { letter: 'Q', ipa: 'kjuː' },
                { letter: 'R', ipa: 'ɑːr' },
                { letter: 'S', ipa: 'ɛs' },
                { letter: 'T', ipa: 'tiː' },
                { letter: 'U', ipa: 'juː' },
                { letter: 'V', ipa: 'viː' },
                { letter: 'W', ipa: 'ˈdʌb.ljuː' },
                { letter: 'X', ipa: 'ɛks' },
                { letter: 'Y', ipa: 'waɪ' },
                { letter: 'Z', ipa: 'ziː' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Letras problemáticas para hispanohablantes:</strong><br><strong>J</strong> = /dʒeɪ/ (suena como "yei", NO como "jota")<br><strong>H</strong> = /eɪtʃ/ (la H en inglés <em>sí</em> se pronuncia en la mayoría de palabras)<br><strong>W</strong> = /ˈdʌbəljuː/ (doble U, suena como "ua" inicial)<br><strong>Y</strong> = /waɪ/ (suena como "uay")<br><strong>V</strong> = /viː/ (los dientes tocan el labio inferior, diferente de B)',
              },
            },
          ],
        },

        {
          id: 'vowels',
          icon: '🎵',
          iconBg: '#d0ebe7',
          title: 'Sonidos Vocálicos Básicos',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En inglés las 5 vocales (A, E, I, O, U) tienen <strong>múltiples sonidos</strong>. Una misma letra puede pronunciarse diferente según la palabra. Este es uno de los mayores retos del inglés.',
              },
            },
            {
              type: 'vowel_cards',
              data: [
                { vowel: 'A', ipa: '/æ/ corta',  label: 'corta',  words: 'cat, man, hand, bag',        color: '#fff5e0', borderColor: '#f0c040' },
                { vowel: 'A', ipa: '/eɪ/ larga', label: 'larga',  words: 'cake, name, late, say',      color: '#fff5e0', borderColor: '#f0c040' },
                { vowel: 'E', ipa: '/ɛ/ corta',  label: 'corta',  words: 'bed, red, get, ten',         color: '#e8f5e9', borderColor: '#66bb6a' },
                { vowel: 'E', ipa: '/iː/ larga', label: 'larga',  words: 'see, tree, me, he',          color: '#e8f5e9', borderColor: '#66bb6a' },
                { vowel: 'I', ipa: '/ɪ/ corta',  label: 'corta',  words: 'sit, big, milk, with',       color: '#e3f2fd', borderColor: '#64b5f6' },
                { vowel: 'I', ipa: '/aɪ/ larga', label: 'larga',  words: 'time, like, five, write',    color: '#e3f2fd', borderColor: '#64b5f6' },
                { vowel: 'O', ipa: '/ɒ/ corta',  label: 'corta',  words: 'hot, dog, shop, top',        color: '#fce4ec', borderColor: '#f48fb1' },
                { vowel: 'O', ipa: '/oʊ/ larga', label: 'larga',  words: 'go, home, note, phone',      color: '#fce4ec', borderColor: '#f48fb1' },
                { vowel: 'U', ipa: '/ʌ/ corta',  label: 'corta',  words: 'cup, run, fun, bus',         color: '#f3e5f5', borderColor: '#ce93d8' },
                { vowel: 'U', ipa: '/uː/ larga', label: 'larga',  words: 'blue, food, too, you',       color: '#f3e5f5', borderColor: '#ce93d8' },
              ],
            },
          ],
        },

        {
          id: 'intonation',
          icon: '📈',
          iconBg: '#fef3d0',
          title: 'Entonación en Preguntas',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'inter',
                    title: 'YES/NO QUESTIONS ↗',
                    items: [
                      'La voz <strong>sube</strong> al final',
                      '<em>Are you a student?</em> ↗',
                      '<em>Is he from England?</em> ↗',
                      '<em>Do you like coffee?</em> ↗',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'WH- QUESTIONS ↘',
                    items: [
                      'La voz <strong>baja</strong> al final',
                      '<em>Where are you from?</em> ↘',
                      '<em>What is your name?</em> ↘',
                      '<em>How old are you?</em> ↘',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'STATEMENTS ↘',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      'Las oraciones normales',
                      '<strong>bajan</strong> al final',
                      '<em>I am a teacher.</em> ↘',
                      '<em>She lives in London.</em> ↘',
                    ],
                  },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Consejo clave:</strong> En inglés, las palabras más importantes de la oración llevan más énfasis (stress). Por ejemplo: "<em>I <u>LOVE</u> coffee</em>" — la palabra "love" se dice más fuerte y lento. Esto es diferente al español, donde el ritmo es más uniforme.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Sonido difícil', 'Descripción', 'Ejemplos', 'Tip'],
                rows: [
                  { en: 'TH /θ/', ipa: 'Suave',       es: 'think, three, bath',  context: 'Lengua entre los dientes' },
                  { en: 'TH /ð/', ipa: 'Sonoro',      es: 'the, this, that',     context: 'Vibra la garganta' },
                  { en: 'R /r/',  ipa: 'Americana',   es: 'red, right, work',    context: 'Lengua hacia atrás, sin tocar' },
                  { en: 'V /v/',  ipa: 'Labiodental', es: 'very, visit, love',   context: 'Dientes superiores al labio inferior' },
                  { en: 'W /w/',  ipa: 'Bilabial',    es: 'water, work, with',   context: 'Labios redondeados como /u/ rápido' },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default pronunciation;
