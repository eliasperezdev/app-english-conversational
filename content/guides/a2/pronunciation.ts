import type { Chapter } from '@/lib/types';

const pronunciation: Chapter = {
  slug: 'pronunciation',
  title: 'Pronunciación A2',
  description:
    'Domina la terminación -ed del pasado, las contracciones cotidianas y el ritmo natural del inglés.',
  sections: [
    {
      id: 'pronunciation',
      label: 'Pronunciación',
      dotColor: 'var(--coral)',
      cards: [
        {
          id: 'ed-endings',
          icon: '⏮️',
          iconBg: '#fce8e4',
          title: 'Terminación -ed en el Pasado',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'La terminación <strong>-ed</strong> del pasado simple no siempre suena igual. Tiene <strong>tres pronunciaciones</strong> según el sonido final del verbo.<br><br>Esta es una de las claves para sonar natural en inglés.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'neg',
                    title: '/t/ — sonido "t"',
                    items: [
                      'Después de consonante <strong>sorda</strong>:',
                      '/p/ → stopped <strong>/stɒpt/</strong>',
                      '/k/ → walked <strong>/wɔːkt/</strong>',
                      '/s/ → missed <strong>/mɪst/</strong>',
                      '/f/ → laughed <strong>/lɑːft/</strong>',
                      '/tʃ/ → watched <strong>/wɒtʃt/</strong>',
                      '/ʃ/ → washed <strong>/wɒʃt/</strong>',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: '/d/ — sonido "d"',
                    items: [
                      'Después de consonante <strong>sonora</strong> o vocal:',
                      '/b/ → robbed <strong>/rɒbd/</strong>',
                      '/g/ → hugged <strong>/hʌɡd/</strong>',
                      '/v/ → lived <strong>/lɪvd/</strong>',
                      '/n/ → called <strong>/kɔːld/</strong>',
                      'vocal → played <strong>/pleɪd/</strong>',
                      'vocal → studied <strong>/ˈstʌdid/</strong>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: '/ɪd/ — sonido "id"',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      'Solo después de <strong>/t/</strong> o <strong>/d/</strong>:',
                      '/t/ → wanted <strong>/ˈwɒntɪd/</strong>',
                      '/t/ → started <strong>/ˈstɑːtɪd/</strong>',
                      '/t/ → visited <strong>/ˈvɪzɪtɪd/</strong>',
                      '/d/ → needed <strong>/ˈniːdɪd/</strong>',
                      '/d/ → decided <strong>/dɪˈsaɪdɪd/</strong>',
                      '<em>¡Se añade una sílaba extra!</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Verbo', 'Pasado', 'Pronunciación', 'Sonido'],
                rows: [
                  { en: 'walk',   ipa: 'walked',    es: '/wɔːkt/',      context: '/t/'  },
                  { en: 'stop',   ipa: 'stopped',   es: '/stɒpt/',      context: '/t/'  },
                  { en: 'watch',  ipa: 'watched',   es: '/wɒtʃt/',      context: '/t/'  },
                  { en: 'laugh',  ipa: 'laughed',   es: '/lɑːft/',      context: '/t/'  },
                  { en: 'play',   ipa: 'played',    es: '/pleɪd/',      context: '/d/'  },
                  { en: 'live',   ipa: 'lived',     es: '/lɪvd/',       context: '/d/'  },
                  { en: 'call',   ipa: 'called',    es: '/kɔːld/',      context: '/d/'  },
                  { en: 'study',  ipa: 'studied',   es: '/ˈstʌdid/',    context: '/d/'  },
                  { en: 'want',   ipa: 'wanted',    es: '/ˈwɒntɪd/',    context: '/ɪd/' },
                  { en: 'start',  ipa: 'started',   es: '/ˈstɑːtɪd/',   context: '/ɪd/' },
                  { en: 'need',   ipa: 'needed',    es: '/ˈniːdɪd/',    context: '/ɪd/' },
                  { en: 'decide', ipa: 'decided',   es: '/dɪˈsaɪdɪd/',  context: '/ɪd/' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Regla simplificada:</strong><br>• ¿El verbo termina en <strong>/t/ o /d/</strong>? → pronuncia <strong>/ɪd/</strong> (sílaba extra)<br>• ¿El verbo termina en consonante <strong>sorda</strong> (p, k, s, f, ch, sh)?  → pronuncia <strong>/t/</strong><br>• ¿Todo lo demás? → pronuncia <strong>/d/</strong>',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'walked',  ipa: '/wɔːkt/',     translation: 'caminó (pasado)' },
                { word: 'played',  ipa: '/pleɪd/',     translation: 'jugó/tocó (pasado)' },
                { word: 'wanted',  ipa: '/ˈwɒntɪd/',   translation: 'quería/quiso (pasado)' },
                { word: 'watched', ipa: '/wɒtʃt/',     translation: 'vio/miraba (pasado)' },
                { word: 'started', ipa: '/ˈstɑːtɪd/',  translation: 'empezó (pasado)' },
                { word: 'studied', ipa: '/ˈstʌdid/',   translation: 'estudió (pasado)' },
              ],
            },
          ],
        },

        {
          id: 'contractions',
          icon: '🔗',
          iconBg: '#d0ebe7',
          title: 'Contracciones del Inglés',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Las <strong>contracciones</strong> son formas cortas que combinan dos palabras. Son <strong>esenciales</strong> para hablar de forma natural — sin ellas sonarás demasiado formal o artificial.<br><br>En el habla normal, los hablantes nativos usan contracciones casi siempre.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: '✅ AFIRMATIVAS',
                    items: [
                      'I am → <strong>I\'m</strong> /aɪm/',
                      'He is → <strong>He\'s</strong> /hiːz/',
                      'She is → <strong>She\'s</strong> /ʃiːz/',
                      'We are → <strong>We\'re</strong> /wɪər/',
                      'They are → <strong>They\'re</strong> /ðeər/',
                      'I will → <strong>I\'ll</strong> /aɪl/',
                      'I have → <strong>I\'ve</strong> /aɪv/',
                      'I had → <strong>I\'d</strong> /aɪd/',
                    ],
                  },
                  {
                    type: 'neg',
                    title: '❌ NEGATIVAS',
                    items: [
                      'is not → <strong>isn\'t</strong> /ˈɪznt/',
                      'are not → <strong>aren\'t</strong> /ɑːrnt/',
                      'was not → <strong>wasn\'t</strong> /ˈwɒznt/',
                      'did not → <strong>didn\'t</strong> /ˈdɪdnt/',
                      'do not → <strong>don\'t</strong> /doʊnt/',
                      'does not → <strong>doesn\'t</strong> /ˈdʌznt/',
                      'cannot → <strong>can\'t</strong> /kɑːnt/',
                      'will not → <strong>won\'t</strong> /woʊnt/',
                    ],
                  },
                  {
                    type: 'custom',
                    title: '🗣️ EJEMPLOS ORALES',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<em>I\'m going to work.</em>',
                      '<em>She\'s not feeling well.</em>',
                      '<em>We\'re going to the cinema.</em>',
                      '<em>They\'re from Spain.</em>',
                      '<em>I didn\'t see the film.</em>',
                      '<em>He can\'t swim.</em>',
                      '<em>Don\'t worry!</em>',
                      '<em>It\'s going to rain.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Forma larga', 'Contracción', 'Pronunciación', 'Ejemplo'],
                rows: [
                  { en: 'I am',       ipa: "I'm",        es: '/aɪm/',     context: "I'm a teacher." },
                  { en: 'he is',      ipa: "he's",       es: '/hiːz/',    context: "He's working." },
                  { en: 'we are',     ipa: "we're",      es: '/wɪər/',    context: "We're going out." },
                  { en: 'did not',    ipa: "didn't",     es: '/ˈdɪdnt/',  context: "I didn't go." },
                  { en: 'do not',     ipa: "don't",      es: '/doʊnt/',   context: "Don't worry." },
                  { en: 'does not',   ipa: "doesn't",    es: '/ˈdʌznt/',  context: "She doesn't like it." },
                  { en: 'cannot',     ipa: "can't",      es: '/kɑːnt/',   context: "I can't come." },
                  { en: 'will not',   ipa: "won't",      es: '/woʊnt/',   context: "I won't be late." },
                  { en: 'is not',     ipa: "isn't",      es: '/ˈɪznt/',   context: "It isn't far." },
                  { en: 'are not',    ipa: "aren't",     es: '/ɑːrnt/',   context: "They aren't here." },
                  { en: 'I would',    ipa: "I'd",        es: '/aɪd/',     context: "I'd like a coffee." },
                  { en: 'I will',     ipa: "I'll",       es: '/aɪl/',     context: "I'll be there at 7." },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '⚠️ <strong>Contracciones y pronunciación conectada:</strong><br>Las contracciones muestran un patrón más amplio: el inglés hablado conecta palabras y reduce sonidos.<br><br>• <em>going to</em> → suena como <strong>"gonna"</strong> en el habla informal<br>• <em>want to</em> → suena como <strong>"wanna"</strong><br>• <em>have to</em> → suena como <strong>"hafta"</strong><br><br>No escribas estas formas, pero reconócelas cuando las escuchas.',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: "I'm going to work",    ipa: '/aɪm ˈɡoʊɪŋ tə wɜːrk/',  translation: 'Voy a trabajar.' },
                { word: "She doesn't like it",  ipa: '/ʃi ˈdʌznt laɪk ɪt/',     translation: 'A ella no le gusta.' },
                { word: "I didn't see it",      ipa: '/aɪ ˈdɪdnt siː ɪt/',       translation: 'No lo vi.' },
                { word: "We're going out",      ipa: '/wɪər ˈɡoʊɪŋ aʊt/',        translation: 'Vamos a salir.' },
                { word: "I can't come today",   ipa: '/aɪ kɑːnt kʌm təˈdeɪ/',    translation: 'No puedo venir hoy.' },
              ],
            },
          ],
        },

        {
          id: 'rhythm-stress',
          icon: '🎵',
          iconBg: '#fef3d0',
          title: 'Ritmo y Stress en Oraciones',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El inglés es un idioma de <strong>ritmo acentual</strong> (stress-timed): las palabras de contenido llevan énfasis y las funcionales se reducen. Esto crea el ritmo característico del inglés.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: '📢 PALABRAS FUERTES (content words)',
                    items: [
                      '<strong>Sustantivos</strong>: DOCtor, BUS, PARK',
                      '<strong>Verbos principales</strong>: GO, WORK, STUDY',
                      '<strong>Adjetivos</strong>: BIG, TIRED, HAPPY',
                      '<strong>Adverbios</strong>: FAST, WELL, ALWAYS',
                      '<strong>Negativos</strong>: NOT, NEVER, DON\'T',
                      'Llevan el <strong>tiempo y énfasis</strong> de la oración',
                    ],
                  },
                  {
                    type: 'neg',
                    title: '🔇 PALABRAS DÉBILES (function words)',
                    items: [
                      '<strong>Artículos</strong>: a /ə/, the /ðə/',
                      '<strong>Pronombres</strong>: he /ɪ/, you /jə/',
                      '<strong>Preposiciones</strong>: to /tə/, at /ət/',
                      '<strong>Aux. verbos</strong>: am /əm/, are /ər/',
                      '<strong>Conjunciones</strong>: and /ən/, but /bət/',
                      'Se pronuncian <strong>rápido y débil</strong>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: '🎯 PATRONES DE STRESS',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '2 sílabas sustantivos: <strong>1a</strong> sílaba',
                      '<em>TAXi, DOCtor, MOney</em>',
                      '2 sílabas verbos: <strong>2a</strong> sílaba',
                      '<em>reLAX, deCIDE, arRIVE</em>',
                      '3+ sílabas: aprende cada una',
                      '<em>hosPItal, phARmacy</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Oración', 'Palabras con énfasis', 'Pronunciación reducida'],
                rows: [
                  { en: 'I want to go to the park.',          ipa: 'WANT, GO, PARK',     es: "I wanna go tə ðə park" },
                  { en: 'She is going to the hospital.',      ipa: 'GOING, HOS-pi-tal',  es: "ʃɪz ˈɡoʊɪŋ tə ðə ˈhɒspɪtl" },
                  { en: 'Can you give me the book?',          ipa: 'GIVE, BOOK',         es: "kən jə ˈɡɪv mi ðə bʊk" },
                  { en: 'I have been to France.',             ipa: 'BEEN, FRANCE',       es: "aɪ həv bɪn tə fræns" },
                  { en: 'What are you going to do?',          ipa: 'DO',                 es: "wɒt ər jə ˈɡoʊɪŋ tə duː" },
                  { en: 'He does not like coffee.',           ipa: 'LIKE, COF-fee',      es: "hi dʌznt ˈlaɪk ˈkɒfi" },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'I WENT to the STORE.',           es: 'Fui a la tienda.',         note: 'went y store = palabras fuertes' },
                { en: 'She\'s WORKing RIGHT now.',       es: 'Ella está trabajando ahora.', note: 'working y right = fuertes' },
                { en: 'I DIDN\'T see the FILM.',         es: 'No vi la película.',       note: "didn't y film = fuertes" },
                { en: 'We\'re GOING to the PARK.',       es: 'Vamos al parque.',         note: 'going y park = fuertes' },
                { en: 'Can you HELP me, PLEASE?',        es: '¿Puedes ayudarme, por favor?', note: 'help y please = fuertes' },
                { en: 'WHAT are you DOing toNIGHT?',     es: '¿Qué haces esta noche?',   note: 'what, doing, tonight = fuertes' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Consejo clave para sonar natural:</strong><br>1. <strong>Alarga</strong> las palabras de contenido (sustantivos, verbos, adjetivos)<br>2. <strong>Reduce y conecta</strong> las palabras funcionales (artículos, preposiciones, pronombres)<br>3. El ritmo importa más que pronunciar cada sonido perfectamente<br><br><em>Ejemplo lento: "I — am — going — to — the — bank"</em><br><em>Natural: "I\'m goin\'tə ðə bank"</em>',
              },
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'I went to the hospital yesterday.',     translation: 'Fui al hospital ayer.' },
                { sentence: 'She is going to start a new job.',      translation: 'Ella va a empezar un trabajo nuevo.' },
                { sentence: "I didn't see the film last night.",     translation: 'No vi la película anoche.' },
                { sentence: "We're going to meet at seven o'clock.", translation: 'Quedamos a las siete.' },
              ],
            },
          ],
        },

        {
          id: 'quiz-pronunciation-a2',
          icon: '⚡',
          iconBg: '#fce8e4',
          title: 'Mini-Quiz · Pronunciación A2',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: "¿Cómo se pronuncia 'walked'?",                  opts: ['/wɔːkd/', '/wɔːkt/', '/wɔːkɪd/', '/wɔːk/'],                    ans: 1 },
                { q: "¿Cómo se pronuncia 'wanted'?",                  opts: ['/wɒnt/', '/wɒntd/', '/ˈwɒntɪd/', '/wɒntɪ/'],                    ans: 2 },
                { q: "¿Cómo se pronuncia 'played'?",                  opts: ['/pleɪt/', '/pleɪɪd/', '/pleɪd/', '/pleɪ/'],                      ans: 2 },
                { q: "'did not' se contrae en…",                       opts: ["doesn't", "didn't", "don't", "won't"],                          ans: 1 },
                { q: "¿Cuál es la contracción de 'can not'?",          opts: ["couldn't", "can't", "cannot", "cann't"],                        ans: 1 },
                { q: "'She is working' se contrae en…",                opts: ["She working", "She's work", "She's working", "Shes working"],   ans: 2 },
                { q: "En inglés, las palabras que reciben más énfasis son…", opts: ['artículos', 'preposiciones', 'sustantivos y verbos principales', 'pronombres'], ans: 2 },
                { q: "¿Cómo se pronuncia 'started'?",                  opts: ['/stɑːt/', '/stɑːtd/', '/ˈstɑːtɪd/', '/stɑːrtɪ/'],              ans: 2 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default pronunciation;
