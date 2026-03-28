// === FILE: content/english/a2/vocabulary.ts ===
import type { Chapter } from '@/lib/types';

const vocabulary: Chapter = {
  slug: 'vocabulary',
  title: 'Vocabulario Ampliado',
  description:
    'Amplía tu vocabulario con temas esenciales del nivel A2: lugares de la ciudad, transporte, cuerpo humano, hobbies y profesiones. Practica con ejercicios interactivos y el mini-quiz final.',
  sections: [
    {
      id: 'vocabulary',
      label: 'Vocabulario',
      dotColor: 'var(--gold)',
      cards: [
        // ── Card 1: Lugares en la Ciudad ───────────────────────────────────
        {
          id: 'places',
          icon: '🏙️',
          iconBg: '#ddeaf5',
          title: 'Lugares en la Ciudad',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Pronunciación', 'Español', 'Uso'],
                rows: [
                  { en: 'bank',            ipa: '/bæŋk/',                   es: 'banco',                   context: 'dónde guardar dinero' },
                  { en: 'hospital',        ipa: '/ˈhɒspɪtl/',               es: 'hospital',                context: 'para emergencias médicas' },
                  { en: 'supermarket',     ipa: '/ˈsuːpərˌmɑːrkɪt/',        es: 'supermercado',            context: 'compras diarias' },
                  { en: 'pharmacy',        ipa: '/ˈfɑːrməsi/',               es: 'farmacia',                context: 'medicinas' },
                  { en: 'post office',     ipa: '/poʊst ˈɒfɪs/',            es: 'oficina de correos',      context: 'enviar cartas' },
                  { en: 'library',         ipa: '/ˈlaɪbrɛri/',               es: 'biblioteca',              context: 'libros gratis' },
                  { en: 'museum',          ipa: '/mjuːˈziːəm/',              es: 'museo',                   context: 'arte y cultura' },
                  { en: 'park',            ipa: '/pɑːrk/',                   es: 'parque',                  context: 'naturaleza y ocio' },
                  { en: 'police station',  ipa: '/pəˈliːs ˈsteɪʃən/',       es: 'comisaría',               context: 'policía' },
                  { en: 'fire station',    ipa: '/faɪər ˈsteɪʃən/',          es: 'estación de bomberos',    context: 'bomberos' },
                  { en: 'airport',         ipa: '/ˈɛərpɔːrt/',               es: 'aeropuerto',              context: 'viajes aéreos' },
                  { en: 'train station',   ipa: '/treɪn ˈsteɪʃən/',          es: 'estación de tren',        context: 'viajes en tren' },
                  { en: 'shopping centre', ipa: '/ˈʃɒpɪŋ ˈsɛntər/',         es: 'centro comercial',        context: 'compras' },
                  { en: 'city hall',       ipa: '/ˈsɪti hɔːl/',              es: 'ayuntamiento',            context: 'gobierno local' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Preposición de lugar:</strong> Para decir dónde está algo:<br>• <em>The bank is <strong>on</strong> Main Street.</em><br>• <em>The pharmacy is <strong>next to</strong> the hospital.</em><br>• <em>The park is <strong>opposite</strong> the museum.</em><br>• <em>The supermarket is <strong>between</strong> the bank and the post office.</em>',
              },
            },
          ],
        },

        // ── Card 2: Medios de Transporte ───────────────────────────────────
        {
          id: 'transport',
          icon: '🚌',
          iconBg: '#d0ebe7',
          title: 'Medios de Transporte',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Pronunciación', 'Español', 'Preposición'],
                rows: [
                  { en: 'bus',                  ipa: '/bʌs/',                    es: 'autobús',        context: 'by bus / on the bus' },
                  { en: 'taxi',                 ipa: '/ˈtæksi/',                 es: 'taxi',           context: 'by taxi' },
                  { en: 'train',                ipa: '/treɪn/',                  es: 'tren',           context: 'by train / on the train' },
                  { en: 'plane',                ipa: '/pleɪn/',                  es: 'avión',          context: 'by plane' },
                  { en: 'car',                  ipa: '/kɑːr/',                   es: 'coche/auto',     context: 'by car' },
                  { en: 'bike / bicycle',       ipa: '/baɪk/',                   es: 'bicicleta',      context: 'by bike' },
                  { en: 'motorcycle',           ipa: '/ˈmoʊtərˌsaɪkl/',          es: 'motocicleta',    context: 'by motorbike' },
                  { en: 'subway / metro',       ipa: '/ˈsʌbweɪ/',                es: 'metro',          context: 'by subway' },
                  { en: 'boat',                 ipa: '/boʊt/',                   es: 'barco',          context: 'by boat' },
                  { en: 'on foot',              ipa: '/ɒn fʊt/',                 es: 'a pie',          context: "on foot (no 'by'!)" },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: "⚠️ <strong>By vs. On foot:</strong> Con todos los transportes usamos <strong>by</strong> excepto cuando caminamos: <em>I go <strong>by</strong> bus. / I go <strong>on foot</strong>.</em><br>Para decir que estás dentro del transporte: <em>I'm <strong>on</strong> the bus.</em>",
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'How do you get to work?',                   es: '¿Cómo llegas al trabajo?' },
                { en: 'I go by bus.',                              es: 'Voy en autobús.' },
                { en: 'It takes 20 minutes by taxi.',              es: 'Se tarda 20 minutos en taxi.' },
                { en: 'She usually travels by train.',             es: 'Ella suele viajar en tren.' },
                { en: 'Is there a direct bus to the city centre?', es: '¿Hay un autobús directo al centro?' },
                { en: 'The metro is faster than the bus.',         es: 'El metro es más rápido que el autobús.' },
                { en: 'I prefer to travel on foot when possible.', es: 'Prefiero ir a pie cuando es posible.' },
              ],
            },
          ],
        },

        // ── Card 3: Partes del Cuerpo y Salud ─────────────────────────────
        {
          id: 'body',
          icon: '🫀',
          iconBg: '#ede4f5',
          title: 'Partes del Cuerpo y Salud',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Pronunciación', 'Español'],
                rows: [
                  { en: 'head',           ipa: '/hɛd/',           es: 'cabeza' },
                  { en: 'eye (eyes)',      ipa: '/aɪ/',            es: 'ojo (ojos)' },
                  { en: 'ear (ears)',      ipa: '/ɪər/',           es: 'oreja (orejas)' },
                  { en: 'nose',           ipa: '/noʊz/',          es: 'nariz' },
                  { en: 'mouth',          ipa: '/maʊθ/',          es: 'boca' },
                  { en: 'throat',         ipa: '/θroʊt/',         es: 'garganta' },
                  { en: 'neck',           ipa: '/nɛk/',           es: 'cuello' },
                  { en: 'shoulder',       ipa: '/ˈʃoʊldər/',      es: 'hombro' },
                  { en: 'arm',            ipa: '/ɑːrm/',          es: 'brazo' },
                  { en: 'hand',           ipa: '/hænd/',          es: 'mano' },
                  { en: 'back',           ipa: '/bæk/',           es: 'espalda' },
                  { en: 'stomach',        ipa: '/ˈstʌmək/',       es: 'estómago' },
                  { en: 'leg',            ipa: '/lɛɡ/',           es: 'pierna' },
                  { en: 'foot (feet)',    ipa: '/fʊt/',           es: 'pie (pies)' },
                ],
              },
            },
            {
              type: 'pill_list',
              data: {
                color: 'coral',
                label: 'SÍNTOMAS Y PROBLEMAS DE SALUD',
                items: [
                  { en: 'headache',     es: 'dolor de cabeza' },
                  { en: 'stomachache',  es: 'dolor de estómago' },
                  { en: 'fever',        es: 'fiebre' },
                  { en: 'cold',         es: 'resfriado' },
                  { en: 'cough',        es: 'tos' },
                  { en: 'sore throat',  es: 'dolor de garganta' },
                  { en: 'backache',     es: 'dolor de espalda' },
                  { en: 'toothache',    es: 'dolor de muelas' },
                  { en: 'nausea',       es: 'náuseas' },
                  { en: 'dizziness',    es: 'mareos' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I have a headache.',           es: 'Me duele la cabeza.' },
                { en: 'My throat hurts.',             es: 'Me duele la garganta.' },
                { en: 'I feel dizzy.',                es: 'Me siento mareado/a.' },
                { en: 'I need to see a doctor.',      es: 'Necesito ver a un médico.' },
                { en: 'I have had a fever since yesterday.', es: 'Tengo fiebre desde ayer.' },
                { en: 'I should take some medicine.', es: 'Debería tomar medicina.' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '💊 <strong>Expresar dolor:</strong><br>• <em>I have a <strong>headache/stomachache/toothache</strong></em> — usar "have a" + ache<br>• <em>My <strong>back/throat/leg</strong> hurts</em> — usar "My + parte + hurts"<br>• <em>I feel <strong>sick/dizzy/tired</strong></em> — usar "feel" + adjetivo',
              },
            },
          ],
        },

        // ── Card 4: Tiempo Libre y Hobbies ────────────────────────────────
        {
          id: 'hobbies',
          icon: '🎨',
          iconBg: '#fef3d0',
          title: 'Tiempo Libre y Hobbies',
          blocks: [
            {
              type: 'pill_list',
              data: {
                color: 'gold',
                label: 'ACTIVIDADES — Free time activities',
                items: [
                  { en: 'reading',            es: 'leer' },
                  { en: 'swimming',           es: 'nadar' },
                  { en: 'cooking',            es: 'cocinar' },
                  { en: 'drawing / painting', es: 'dibujar / pintar' },
                  { en: 'watching films',     es: 'ver películas' },
                  { en: 'listening to music', es: 'escuchar música' },
                  { en: 'dancing',            es: 'bailar' },
                  { en: 'travelling',         es: 'viajar' },
                  { en: 'going to the gym',   es: 'ir al gimnasio' },
                  { en: 'playing football',   es: 'jugar al fútbol' },
                  { en: 'hiking',             es: 'hacer senderismo' },
                  { en: 'photography',        es: 'fotografía' },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'LOVE / LIKE',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      'I <strong>love</strong> reading.',
                      'She <strong>likes</strong> cooking.',
                      'They <strong>enjoy</strong> hiking.',
                      'He <strong>is into</strong> photography.',
                    ],
                  },
                  {
                    type: 'custom',
                    title: "DON'T LIKE / HATE",
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      "I <strong>don't like</strong> swimming.",
                      "He <strong>hates</strong> cooking.",
                      "She <strong>can't stand</strong> dancing.",
                      "I <strong>'m not into</strong> gaming.",
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'HOW OFTEN?',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      'I swim <strong>every day</strong>.',
                      'She paints <strong>twice a week</strong>.',
                      'We hike <strong>on weekends</strong>.',
                      'He reads <strong>in his free time</strong>.',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'What do you do in your free time?',         es: '¿Qué haces en tu tiempo libre?' },
                { en: 'I love reading mystery novels.',            es: 'Me encanta leer novelas de misterio.' },
                { en: 'She goes to the gym three times a week.',   es: 'Ella va al gimnasio tres veces a la semana.' },
                { en: 'We enjoy watching films on Saturday evenings.', es: 'Nos gusta ver películas los sábados por la noche.' },
                { en: 'Do you have any hobbies?',                  es: '¿Tienes algún hobby?' },
                { en: 'He took up photography last year.',         es: 'Él empezó a hacer fotografía el año pasado.' },
              ],
            },
          ],
        },

        // ── Card 5: Trabajo y Profesiones ─────────────────────────────────
        {
          id: 'jobs',
          icon: '💼',
          iconBg: '#d0ebe7',
          title: 'Trabajo y Profesiones',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Profesión', 'Pronunciación', 'Español', 'Lugar de trabajo'],
                rows: [
                  { en: 'doctor',          ipa: '/ˈdɒktər/',          es: 'médico/a',        context: 'hospital' },
                  { en: 'nurse',           ipa: '/nɜːrs/',            es: 'enfermero/a',     context: 'hospital' },
                  { en: 'teacher',         ipa: '/ˈtiːtʃər/',         es: 'maestro/a',       context: 'school' },
                  { en: 'engineer',        ipa: '/ˌɛndʒɪˈnɪər/',      es: 'ingeniero/a',     context: 'office / factory' },
                  { en: 'lawyer',          ipa: '/ˈlɔɪər/',           es: 'abogado/a',       context: 'law firm' },
                  { en: 'architect',       ipa: '/ˈɑːrkɪtɛkt/',       es: 'arquitecto/a',    context: 'studio' },
                  { en: 'programmer',      ipa: '/ˈproʊɡræmər/',      es: 'programador/a',   context: 'tech company' },
                  { en: 'chef',            ipa: '/ʃɛf/',              es: 'chef / cocinero', context: 'restaurant' },
                  { en: 'police officer',  ipa: '/pəˈliːs ˈɒfɪsər/', es: 'policía',         context: 'police station' },
                  { en: 'firefighter',     ipa: '/ˈfaɪərˌfaɪtər/',   es: 'bombero/a',       context: 'fire station' },
                  { en: 'journalist',      ipa: '/ˈdʒɜːrnəlɪst/',    es: 'periodista',      context: 'newspaper / TV' },
                  { en: 'accountant',      ipa: '/əˈkaʊntənt/',       es: 'contador/a',      context: 'office' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Preguntar por el trabajo:</strong><br>• <em>What do you do (for a living)?</em> → ¿A qué te dedicas?<br>• <em>Where do you work?</em> → ¿Dónde trabajas?<br>• <em>I work <strong>as</strong> a teacher / <strong>for</strong> a hospital / <strong>in</strong> a school.</em>',
              },
            },
          ],
        },

        // ── Card 6: Ejercicios Interactivos ───────────────────────────────
        {
          id: 'exercises-vocab-a2',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios Interactivos · Vocabulario A2',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                {
                  sentence: 'You can borrow books for free at the ___.',
                  answers: ['library'],
                  hint: 'Lugar donde encontrar libros gratis',
                },
                {
                  sentence: 'She goes to work ___ bus every morning.',
                  answers: ['by'],
                  hint: 'Preposición para medios de transporte',
                },
                {
                  sentence: 'My head ___. I think I have a fever.',
                  answers: ['hurts', 'aches'],
                  hint: 'Verbo para expresar dolor físico',
                },
                {
                  sentence: 'He works ___ a programmer at a tech company.',
                  answers: ['as'],
                  hint: 'Preposición para hablar de profesión',
                },
              ],
            },
            {
              type: 'word_order',
              data: [
                {
                  words: ['is', 'The', 'the', 'hospital', 'to', 'next', 'pharmacy'],
                  correct: 'The pharmacy is next to the hospital',
                  translation: 'La farmacia está al lado del hospital.',
                },
                {
                  words: ['does', 'How', 'work?', 'to', 'get', 'she'],
                  correct: 'How does she get to work?',
                  translation: '¿Cómo llega ella al trabajo?',
                },
                {
                  words: ['have', 'I', 'headache', 'a'],
                  correct: 'I have a headache',
                  translation: 'Me duele la cabeza.',
                },
                {
                  words: ['hobbies?', 'your', 'are', 'What'],
                  correct: 'What are your hobbies?',
                  translation: '¿Cuáles son tus hobbies?',
                },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'bank',      es: 'banco' },
                  { en: 'hospital',  es: 'hospital' },
                  { en: 'library',   es: 'biblioteca' },
                  { en: 'pharmacy',  es: 'farmacia' },
                  { en: 'museum',    es: 'museo' },
                  { en: 'airport',   es: 'aeropuerto' },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'bank',        es: 'banco' },
                { en: 'hospital',    es: 'hospital' },
                { en: 'supermarket', es: 'supermercado' },
                { en: 'pharmacy',    ipa: '/ˈfɑːrməsi/', es: 'farmacia' },
                { en: 'library',     es: 'biblioteca' },
                { en: 'bus',         es: 'autobús' },
                { en: 'doctor',      es: 'médico/a' },
                { en: 'nurse',       ipa: '/nɜːrs/',      es: 'enfermero/a' },
                { en: 'headache',    es: 'dolor de cabeza' },
                { en: 'photographer', es: 'fotógrafo/a' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'pharmacy',    ipa: '/ˈfɑːrməsi/',          translation: 'farmacia' },
                { word: 'hospital',    ipa: '/ˈhɒspɪtl/',           translation: 'hospital' },
                { word: 'engineer',    ipa: '/ˌɛndʒɪˈnɪər/',        translation: 'ingeniero/a' },
                { word: 'supermarket', ipa: '/ˈsuːpərˌmɑːrkɪt/',    translation: 'supermercado' },
                { word: 'motorcycle',  ipa: '/ˈmoʊtərˌsaɪkl/',      translation: 'motocicleta' },
              ],
            },
            {
              type: 'dictation',
              data: [
                {
                  sentence: 'The hospital is next to the pharmacy.',
                  translation: 'La farmacia está al lado del hospital.',
                },
                {
                  sentence: 'How do you get to work every day?',
                  translation: '¿Cómo llegas al trabajo cada día?',
                },
                {
                  sentence: 'I have a headache and I feel dizzy.',
                  translation: 'Me duele la cabeza y me siento mareado.',
                },
                {
                  sentence: 'She works as a nurse at the city hospital.',
                  translation: 'Ella trabaja como enfermera en el hospital de la ciudad.',
                },
              ],
            },
          ],
        },

        // ── Card 7: Mini-Quiz ──────────────────────────────────────────────
        {
          id: 'quiz-vocab-a2',
          icon: '⚡',
          iconBg: '#fef3d0',
          title: 'Mini-Quiz · Vocabulario A2',
          blocks: [
            {
              type: 'quiz',
              data: [
                {
                  q: 'Where do you go to borrow books?',
                  opts: ['museum', 'library', 'pharmacy', 'bank'],
                  ans: 1,
                },
                {
                  q: "'I go ___ bus to work.' — ¿Cuál es correcta?",
                  opts: ['on', 'by', 'in', 'with'],
                  ans: 1,
                },
                {
                  q: "'My back ___.' — ¿Cuál es correcta?",
                  opts: ['ache', 'hurt', 'hurts', 'aches it'],
                  ans: 2,
                },
                {
                  q: '¿Cuál es la profesión de alguien que diseña edificios?',
                  opts: ['engineer', 'architect', 'programmer', 'journalist'],
                  ans: 1,
                },
                {
                  q: "'How ___ you get to the airport?' — ¿Cuál es correcta?",
                  opts: ['do', 'are', 'is', 'did'],
                  ans: 0,
                },
                {
                  q: "'I go to the ___ to buy medicine.' — ¿Cuál va aquí?",
                  opts: ['library', 'museum', 'pharmacy', 'post office'],
                  ans: 2,
                },
                {
                  q: "'She works ___ a doctor.' — preposición correcta",
                  opts: ['in', 'on', 'as', 'for'],
                  ans: 2,
                },
                {
                  q: '¿Cómo se dice "estación de tren" en inglés?',
                  opts: ['train station', 'train stop', 'rail station', 'bus terminal'],
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

export default vocabulary;
