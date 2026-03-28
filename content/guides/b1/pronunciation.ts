import type { Chapter } from '@/lib/types';

const pronunciation: Chapter = {
  slug: 'pronunciation',
  title: 'Pronunciación B1',
  description:
    'En B1 la pronunciación va más allá de los sonidos individuales. Aprendé el schwa, el stress de palabras largas, las contracciones naturales y el ritmo del inglés.',
  sections: [
    {
      id: 'pronunciation',
      label: 'Pronunciación',
      dotColor: 'var(--coral)',
      cards: [

        // ── 1. The Schwa ─────────────────────────────────────────────────
        {
          id: 'schwa',
          icon: '🔊',
          iconBg: '#fce8e4',
          title: 'El Schwa /ə/ — El Sonido Más Común del Inglés',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>schwa /ə/</strong> es el sonido vocal más frecuente del inglés. Es una vocal <strong>reducida, relajada y breve</strong>, como un "e" muy suave. Aparece en sílabas sin acento. Si no lo usás, sonás robótico.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Palabra', 'Transcripción', 'Dónde está el schwa'],
                rows: [
                  { en: 'about',   ipa: '/əˈbaʊt/',    es: 'La "a" inicial es /ə/' },
                  { en: 'today',   ipa: '/təˈdeɪ/',    es: 'La "to" es /tə/' },
                  { en: 'banana',  ipa: '/bəˈnænə/',   es: 'Primera y última "a"' },
                  { en: 'problem', ipa: '/ˈprɒbləm/',  es: 'La "e" final es /ə/' },
                  { en: 'doctor',  ipa: '/ˈdɒktə/',    es: 'La "or" final es /ə/' },
                  { en: 'camera',  ipa: '/ˈkæmərə/',   es: 'Dos schwa al final' },
                  { en: 'the',     ipa: '/ðə/',         es: 'Schwa antes de consonante' },
                  { en: 'a',       ipa: '/ə/',          es: 'El artículo "a" siempre es schwa' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Cómo practicarlo:</strong> Relajá completamente la boca y hacé un sonido neutro "e" muy breve y sin esfuerzo. No redondees los labios. No abras mucho la boca. Es el sonido que hacés cuando dudás: <em>"uh..."</em>',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'banana', ipa: '/bəˈnænə/', translation: 'baNAna — el acento va en la sílaba del medio' },
                { word: 'about', ipa: '/əˈbaʊt/', translation: 'aBOUT — la "a" inicial es schwa' },
                { word: 'I\'d like a coffee, please.', ipa: '', translation: 'Fijate cómo "a" y "a" son schwa brevísimos' },
              ],
            },
          ],
        },

        // ── 2. Word Stress ───────────────────────────────────────────────
        {
          id: 'word-stress',
          icon: '📈',
          iconBg: '#d0ebe7',
          title: 'Word Stress: El Acento en Palabras Largas',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En inglés, cada palabra de más de una sílaba tiene una sílaba que se dice más <strong>fuerte, más larga y más clara</strong>. Poner el acento en la sílaba incorrecta puede hacer que no te entiendan.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Palabra', 'Acento correcto', 'Truco'],
                rows: [
                  { en: 'PHOtograph',   ipa: 'PHO-to-graph',    es: '1ra sílaba' },
                  { en: 'phoTOgraphy',  ipa: 'pho-TO-gra-phy',  es: '2da sílaba (cambia!)' },
                  { en: 'photoGRAPHic', ipa: 'pho-to-GRAPH-ic', es: '3ra sílaba (cambia!)' },
                  { en: 'REcord (n.)',  ipa: 'RE-cord',          es: 'Sustantivo: 1ra' },
                  { en: 'reCORD (v.)',  ipa: 're-CORD',          es: 'Verbo: 2da' },
                  { en: 'IMport (n.)',  ipa: 'IM-port',          es: 'Sustantivo: 1ra' },
                  { en: 'imPORT (v.)', ipa: 'im-PORT',           es: 'Verbo: 2da' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Patrones comunes:</strong><br>• Palabras en <strong>-tion, -sion</strong>: el acento siempre va en la sílaba ANTES: <em>inforMAtion, eduCAtion</em><br>• Palabras en <strong>-ic</strong>: acento en la sílaba ANTES: <em>econOMic, acaDEmic</em><br>• Sustantivo vs verbo de 2 sílabas: sustantivo = 1ra sílaba, verbo = 2da',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'information', ipa: '/ˌɪnfəˈmeɪʃən/', translation: 'in-for-MA-tion — acento en la 3ra' },
                { word: 'comfortable', ipa: '/ˈkʌmftəbəl/', translation: 'COM-fta-ble — 3 sílabas, no 4' },
                { word: 'vegetable', ipa: '/ˈvedʒtəbəl/', translation: 'VEG-ta-ble — 3 sílabas, no 4' },
                { word: 'I\'d like to record the record.', ipa: '', translation: 'Mismo spelling, diferente acento' },
              ],
            },
          ],
        },

        // ── 3. Contractions ──────────────────────────────────────────────
        {
          id: 'contractions',
          icon: '⚡',
          iconBg: '#fef3d0',
          title: 'Contracciones y Habla Natural',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los nativos <strong>nunca</strong> dicen "I am going to" en conversación. Dicen <em>"I\'m gonna"</em>. Si no usás contracciones, sonás formal y extraño. Aquí están las más importantes.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Forma completa', 'Contracción', 'Forma coloquial', 'Ejemplo'],
                rows: [
                  { en: 'I am',         ipa: "I'm",     es: '—',        context: "I'm tired." },
                  { en: 'I have',       ipa: "I've",    es: '—',        context: "I've been there." },
                  { en: 'I would',      ipa: "I'd",     es: '—',        context: "I'd love to." },
                  { en: 'I will',       ipa: "I'll",    es: '—',        context: "I'll call you." },
                  { en: 'want to',      ipa: 'wanna',   es: 'coloquial', context: "I wanna go." },
                  { en: 'going to',     ipa: 'gonna',   es: 'coloquial', context: "I'm gonna try." },
                  { en: 'have to',      ipa: 'hafta',   es: 'coloquial', context: "I hafta leave." },
                  { en: 'don\'t know',  ipa: 'dunno',   es: 'coloquial', context: "I dunno." },
                  { en: 'kind of',      ipa: 'kinda',   es: 'coloquial', context: "It\'s kinda nice." },
                  { en: 'a lot of',     ipa: 'lotta',   es: 'coloquial', context: "A lotta people." },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Wanna / Gonna / Hafta</strong> son para el <strong>habla informal</strong>. No los escribás en emails formales, pero sí los vas a escuchar constantemente en podcasts, series y conversaciones reales. Aprender a <em>reconocerlos</em> es tan importante como usarlos.',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I\'m gonna call you later.', translation: 'Te voy a llamar más tarde. (= I\'m going to call you)' },
                { word: 'D\'you wanna grab a coffee?', translation: '¿Querés tomar un café? (= Do you want to)' },
                { word: 'I\'ve gotta finish this first.', translation: 'Primero tengo que terminar esto. (= I\'ve got to)' },
                { word: 'I dunno, maybe.', translation: 'No sé, quizás. (= I don\'t know)' },
              ],
            },
          ],
        },

        // ── 4. Sentence Rhythm ───────────────────────────────────────────
        {
          id: 'sentence-rhythm',
          icon: '🎵',
          iconBg: '#ede4f5',
          title: 'Ritmo y Reducción en Frases',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El inglés es un idioma de <strong>ritmo acentuado</strong> (stress-timed). Eso significa que las palabras importantes se dicen más <strong>fuerte y lento</strong>, y las palabras gramaticales (artículos, preposiciones, auxiliares) se <strong>reducen y aceleran</strong>.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'PALABRAS FUERTES (content words)',
                    items: [
                      'Sustantivos: <em>DOG, HOUSE, MONEY</em>',
                      'Verbos principales: <em>WORK, EAT, GO</em>',
                      'Adjetivos: <em>HAPPY, BIG, TIRED</em>',
                      'Adverbios: <em>QUICKLY, NEVER, ALWAYS</em>',
                    ],
                  },
                  {
                    type: 'neg',
                    title: 'PALABRAS DÉBILES (function words)',
                    items: [
                      'Artículos: <em>a, an, the → /ə/, /ðə/</em>',
                      'Preposiciones: <em>at, in, for, of, to</em>',
                      'Auxiliares: <em>am, are, was, have, can</em>',
                      'Pronombres: <em>him, her, them, us</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Ejemplo en práctica:</strong><br>"I want to go to the market for some bread."<br>→ Lo que el nativo dice: <em>"I WANNA go to the MARKET for some BREAD."</em><br>Las palabras en mayúscula se destacan, el resto se reduce.<br><br>💡 Este es el secreto para <strong>entender el inglés rápido</strong>: los nativos no pronuncian cada palabra igual — reducen las palabras gramaticales.',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'What do you want to do?', ipa: '/wɒd͡ʒə wɒnə duː/', translation: 'Fijate cómo "do you" se reduce a /d͡ʒə/' },
                { word: 'I\'d like a cup of tea.', ipa: '/aɪd laɪk ə kʌp ə tiː/', translation: '"a" y "of" son schwa brevísimos' },
                { word: 'Can you give me a hand?', ipa: '', translation: '"Can" pierde la vocal: /kən/, no /kæn/' },
                { word: 'I\'ll see you at the office.', ipa: '', translation: '"at the" suena como /ətðə/ muy rápido' },
              ],
            },
          ],
        },

        // ── 5. Difficult consonants ──────────────────────────────────────
        {
          id: 'consonants',
          icon: '🗣️',
          iconBg: '#ddeaf5',
          title: 'Consonantes Problemáticas para Hispanohablantes',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Sonido', 'Cómo hacerlo', 'Ejemplos', 'Error común'],
                rows: [
                  { en: 'TH /θ/ suave', ipa: 'Lengua entre los dientes, aire sale sin voz', es: 'think, three, bath, mouth', context: 'Decirlo como /t/ o /s/' },
                  { en: 'TH /ð/ sonoro', ipa: 'Igual pero vibra la garganta', es: 'the, this, that, father', context: 'Decirlo como /d/' },
                  { en: 'V /v/', ipa: 'Dientes superiores sobre labio inferior, voz', es: 'very, visit, have, live', context: 'Confundirlo con /b/' },
                  { en: 'W /w/', ipa: 'Labios redondeados como /u/ rápido', es: 'water, work, would, week', context: 'Decirlo como /gu/' },
                  { en: 'R /r/ americano', ipa: 'Lengua hacia atrás sin tocar el paladar', es: 'red, world, car, bird', context: 'Usar la /r/ española vibrante' },
                  { en: 'H /h/', ipa: 'Aire del fondo de la garganta, suave', es: 'hot, hello, help, have', context: 'No pronunciarla (silencio)' },
                ],
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I think this is the thing.', ipa: '', translation: 'Practicá /θ/ y /ð/ en la misma oración' },
                { word: 'Very good work.', ipa: '', translation: '/v/ en "very", /w/ en "work"' },
                { word: 'The world is a wonderful place.', ipa: '', translation: '/w/ en "world" y "wonderful"' },
                { word: 'Her red car is very far.', ipa: '', translation: '/r/ americano — sin vibrante' },
              ],
            },
          ],
        },

        // ── 6. Exercises ─────────────────────────────────────────────────
        {
          id: 'exercises-pron-b1',
          icon: '🎯',
          iconBg: '#fce8e4',
          title: 'Ejercicios · Pronunciación B1',
          blocks: [
            {
              type: 'dictation',
              data: [
                { sentence: 'I\'m gonna need a lot more time.', translation: 'Voy a necesitar mucho más tiempo.' },
                { sentence: 'What do you want to do this weekend?', translation: '¿Qué querés hacer este fin de semana?' },
                { sentence: 'I think this is the right thing to do.', translation: 'Creo que esto es lo correcto.' },
                { sentence: 'She\'s very good at her work.', translation: 'Ella es muy buena en su trabajo.' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'Think about the future.', translation: 'Dos /θ/ en la misma oración' },
                { word: 'I\'d like a bottle of water, please.', translation: 'Schwa en "a", "of" — ritmo natural' },
                { word: 'Photography is my hobby.', translation: 'phoTOgraphy — acento en la 2da sílaba' },
                { word: 'I dunno, I\'m kinda tired.', translation: 'Habla coloquial natural' },
                { word: 'The weather is very warm today.', translation: '/w/, /v/, /ð/ — tres sonidos difíciles' },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default pronunciation;
