import type { Chapter } from '@/lib/types';

const pronunciation: Chapter = {
  slug: 'pronunciation',
  title: 'Pronunciación C1',
  description:
    'En C1 la pronunciación es sobre naturalidad, registro y estrategia comunicativa. Aprendés cómo el énfasis nuclear cambia argumentos completos, cómo adaptar tu tono según el contexto, y cómo encontrar tu propia voz en inglés.',
  sections: [
    {
      id: 'pronunciation',
      label: 'Pronunciación',
      dotColor: 'var(--coral)',
      cards: [

        // ── 1. Nuclear Stress Advanced ────────────────────────────────────
        {
          id: 'nuclear-stress-advanced',
          icon: '🎯',
          iconBg: '#fce8e4',
          title: 'Nuclear Stress Avanzado — El Énfasis que Cambia Todo',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>nuclear stress</strong> (acento nuclear) es la palabra más prominente de una unidad de discurso. En C1, su posición no es arbitraria — transmite <strong>información nueva, contraste, corrección y actitud</strong>. Dominarlo es lo que te hace sonar como un hablante avanzado de verdad.',
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>La misma oración, siete significados:</strong><br>"I didn\'t say she STOLE the money." → (quizás lo encontró, no lo robó)<br>"I didn\'t say SHE stole the money." → (alguien más lo robó)<br>"I didn\'t SAY she stole the money." → (lo impliqué, no lo dije)<br>"I DIDN\'T say she stole the money." → (niego haberlo dicho)<br>"I didn\'t say she stole THE money." → (quizás otro dinero)<br>"I didn\'t say SHE stole the money." → énfasis en identidad<br>El nuclear stress convierte una oración simple en siete argumentos distintos.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'INFORMACIÓN NUEVA',
                    items: [
                      'El acento va en lo nuevo, no en lo conocido',
                      'A: "Who broke the window?"',
                      'B: "JOHN broke it." (John = nuevo)',
                      'A: "What did John do?"',
                      'B: "He BROKE the window." (broke = nuevo)',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'CONTRASTE Y CORRECCIÓN',
                    items: [
                      'El acento marca lo que es diferente',
                      'A: "Did you call MARY?"',
                      'B: "No, I called PETER." (contraste)',
                      'A: "She BOUGHT the car."',
                      'B: "She RENTED it, actually." (corrección)',
                    ],
                  },
                ],
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I find it INTERESTING.', translation: 'Énfasis en interesting = genuino interés o ligero sarcasmo según el tono' },
                { word: 'I find IT interesting.', translation: 'Énfasis en it = contraste con otra cosa que no encuentro interesante' },
                { word: 'I FIND it interesting.', translation: 'Énfasis en find = énfasis en mi reacción personal' },
                { word: 'The EVIDENCE suggests otherwise.', translation: 'Énfasis en evidence = apelo a datos, no a opinión' },
              ],
            },
          ],
        },

        // ── 2. Tone & Register ────────────────────────────────────────────
        {
          id: 'tone-register',
          icon: '🎭',
          iconBg: '#d0ebe7',
          title: 'Tono y Registro — Formal vs Informal',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El <strong>registro</strong> es la variedad de lengua que elegís según el contexto — con tu jefe, con tus amigos, en una conferencia, en un email. En C1, cambiar de registro conscientemente y con fluidez es una competencia clave.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'REGISTRO FORMAL',
                    items: [
                      'Sin contracciones',
                      'Vocabulario latino / académico',
                      'Estructuras pasivas e impersonales',
                      'Oraciones más largas y complejas',
                      'Entonación más plana y controlada',
                      '<em>"I would like to draw your attention to..."</em>',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'REGISTRO INFORMAL',
                    items: [
                      'Contracciones constantes',
                      'Phrasal verbs y coloquialismos',
                      'Oraciones más cortas, ellipsis frecuente',
                      'Mayor variación de entonación',
                      'Más pausas, fillers, reformulaciones',
                      '<em>"Just wanted to flag something up..."</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Formal', 'Informal', 'Diferencia de tono'],
                rows: [
                  { en: 'I would like to enquire about...', ipa: 'I wanted to ask about...', es: 'Muy formal vs conversacional', context: '' },
                  { en: 'I regret to inform you that...', ipa: 'I\'m afraid I have to tell you...', es: 'Carta formal vs conversación seria', context: '' },
                  { en: 'Please do not hesitate to contact us.', ipa: 'Feel free to get in touch.', es: 'Corporativo vs amigable', context: '' },
                  { en: 'Following our recent discussion...', ipa: 'As we talked about...', es: 'Email formal vs email a colega', context: '' },
                ],
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I would like to draw your attention to a potential issue.', translation: 'Versión formal — presentación o email a directivos' },
                { word: 'I just wanted to flag something up quickly.', translation: 'Versión informal — chat con un colega' },
                { word: 'I regret to inform you that your application was unsuccessful.', translation: 'Formal — carta de rechazo' },
                { word: 'Sorry, it didn\'t work out this time.', translation: 'Informal — conversación con un conocido' },
              ],
            },
          ],
        },

        // ── 3. Finding Your Voice ─────────────────────────────────────────
        {
          id: 'finding-your-voice',
          icon: '🗣️',
          iconBg: '#fef3d0',
          title: 'Tu Acento y Tu Voz en Inglés',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Una de las creencias más limitantes en el aprendizaje de inglés es que hay que sonar "como un nativo". En C1, el objetivo real es la <strong>inteligibilidad</strong> y la <strong>autenticidad</strong> — no la imitación.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'neg',
                    title: 'MITO',
                    items: [
                      'Hay que tener acento nativo',
                      'El acento propio suena "mal"',
                      'El inglés perfecto es sin acento',
                      'Sonar extranjero es un error',
                      'Hay UN inglés correcto',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'REALIDAD',
                    items: [
                      'El inglés tiene miles de acentos nativos',
                      'Tu acento es parte de tu identidad',
                      'La inteligibilidad importa, no la imitación',
                      'El 80% de las conversaciones en inglés son entre no-nativos',
                      'La fluidez y la precisión importan más que el acento',
                    ],
                  },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Qué sí importa en C1:</strong><br>• <strong>Inteligibilidad</strong>: que te entiendan claramente en cualquier contexto<br>• <strong>Ritmo y fluidez</strong>: pausas en los lugares correctos, sin fragmentar las ideas<br>• <strong>Precisión consonántica</strong>: especialmente /θ/, /v/, /w/, /r/<br>• <strong>Word stress correcto</strong>: la sílaba acentuada en cada palabra<br>• <strong>Nuclear stress estratégico</strong>: énfasis donde querés comunicar algo',
              },
            },
          ],
        },

        // ── 4. Chunks & Formulaic Language ───────────────────────────────
        {
          id: 'chunks-formulaic',
          icon: '🧩',
          iconBg: '#ede4f5',
          title: 'Chunks y Lenguaje Formulaico',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los hablantes nativos no construyen frases palabra por palabra — usan <strong>chunks</strong> (grupos de palabras prefabricadas) que recuperan como unidades. Aprender chunks mejora dramáticamente la fluidez y la naturalidad.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Chunk', 'Función', 'Pronunciación natural'],
                rows: [
                  { en: 'as a matter of fact', ipa: 'para enfatizar / "de hecho"', es: '/əz ə mæɾər əv fækt/' },
                  { en: 'to be honest with you', ipa: 'introducir franqueza', es: '/tə bi ˈɒnɪst wɪð juː/' },
                  { en: 'at the end of the day', ipa: 'en última instancia', es: '/ət ðɪ end əv ðə deɪ/' },
                  { en: 'to put it differently', ipa: 'parafrasear', es: '/tə pʊt ɪt ˈdɪfrəntli/' },
                  { en: 'if you think about it', ipa: 'invitar a reflexionar', es: '/ɪf jə θɪŋk əbaʊt ɪt/' },
                  { en: 'the thing is', ipa: 'introducir el punto real', es: '/ðə θɪŋ ɪz/' },
                  { en: 'on reflection', ipa: 'reconsiderando', es: '/ɒn rɪˈflekʃən/' },
                  { en: 'in light of this', ipa: 'dado esto / considerando esto', es: '/ɪn laɪt əv ðɪs/' },
                  { en: 'by the same token', ipa: 'del mismo modo', es: '/baɪ ðə seɪm ˈtəʊkən/' },
                  { en: 'needless to say', ipa: 'como es obvio', es: '/ˈniːdlɪs tə seɪ/' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Cómo practicar chunks:</strong><br>No los estudies como vocabulario — practicalos como una sola unidad de pronunciación. <em>"at the end of the day"</em> no es 6 palabras — es un bloque que decís junto: <em>/ˌætðɪendəvðəˈdeɪ/</em>. La reducción de "of the" a /əvðə/ es automática.',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'At the end of the day, it\'s your decision.', ipa: '/ætðɪendəvðədeɪ/', translation: 'Chunk completo como una unidad rítmica' },
                { word: 'The thing is, I\'m not entirely convinced.', ipa: '/ðəθɪŋɪz/', translation: '"the thing is" = introducción suave a una objeción' },
                { word: 'In light of this, we may need to reconsider.', ipa: '/ɪnlaɪtəvðɪs/', translation: 'Chunk formal — frecuente en presentaciones' },
                { word: 'To put it differently, we\'re running out of time.', ipa: '', translation: 'Parafrasear con elegancia' },
              ],
            },
          ],
        },

        // ── 5. Academic Pronunciation ─────────────────────────────────────
        {
          id: 'academic-pronunciation',
          icon: '🎓',
          iconBg: '#ddeaf5',
          title: 'Pronunciación de Vocabulario Académico',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El vocabulario académico tiene patrones de acento específicos que muchos estudiantes desconocen. Pronunciar mal una palabra formal puede socavar tu credibilidad aunque el contenido sea excelente.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Palabra', 'IPA', 'Error común', 'Tip'],
                rows: [
                  { en: 'hypothesis',    ipa: '/haɪˈpɒθɪsɪs/',  es: 'acento en "po"', context: 'hy-PO-the-sis' },
                  { en: 'analysis',      ipa: '/əˈnæləsɪs/',    es: 'acento en "nal"', context: 'a-NAL-y-sis' },
                  { en: 'phenomenon',    ipa: '/fɪˈnɒmɪnɒn/',   es: 'acento en "nom"', context: 'phe-NOM-e-non' },
                  { en: 'paradigm',      ipa: '/ˈpærədaɪm/',    es: 'la "g" es muda', context: 'PA-ra-dime' },
                  { en: 'albeit',        ipa: '/ɔːlˈbiːɪt/',    es: 'tres sílabas', context: 'awl-BEE-it' },
                  { en: 'bourgeois',     ipa: '/ˈbʊərʒwɑː/',    es: 'origen francés', context: 'BOOR-zhwah' },
                  { en: 'algorithm',     ipa: '/ˈælɡərɪðəm/',   es: 'acento en "al"', context: 'AL-go-ri-thm' },
                  { en: 'deteriorate',   ipa: '/dɪˈtɪəriəreɪt/', es: '5 sílabas', context: 'de-TER-i-o-rate' },
                ],
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'The hypothesis requires further analysis.', ipa: '/haɪˈpɒθɪsɪs/ /əˈnæləsɪs/', translation: 'Dos palabras académicas de uso frecuente' },
                { word: 'This phenomenon challenges the prevailing paradigm.', ipa: '/fɪˈnɒmɪnɒn/ /ˈpærədaɪm/', translation: 'phenomenon + paradigm — acentos no intuitivos' },
                { word: 'The situation has deteriorated significantly, albeit gradually.', ipa: '', translation: 'deteriorate + albeit en la misma oración' },
              ],
            },
          ],
        },

        // ── 6. Exercises ──────────────────────────────────────────────────
        {
          id: 'exercises-pron-c1',
          icon: '🎯',
          iconBg: '#fce8e4',
          title: 'Ejercicios · Pronunciación C1',
          blocks: [
            {
              type: 'speak_word',
              data: [
                { word: 'I didn\'t say she stole the money.', translation: 'Practicá 3 veces con acento diferente: "STOLE", "SHE", "didn\'t"' },
                { word: 'At the end of the day, results matter more than intentions.', translation: 'Chunk fluido + nuclear stress en "results" y "intentions"' },
                { word: 'The evidence suggests a correlation, albeit not a causal one.', translation: 'Pronunciá "albeit" como /ɔːlˈbiːɪt/ — tres sílabas' },
                { word: 'What I find most compelling is the consistency across studies.', translation: 'Wh-cleft con nuclear stress en "consistency"' },
                { word: 'In light of this, we would recommend a phased approach.', translation: 'Chunk formal + condicional — presentación C1' },
              ],
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'The paradigm shift we\'re witnessing has significant implications for policy.', translation: 'El cambio de paradigma que estamos presenciando tiene implicaciones significativas para las políticas.' },
                { sentence: 'At the end of the day, the hypothesis remains unsubstantiated without further data.', translation: 'Al fin y al cabo, la hipótesis sigue sin estar respaldada sin más datos.' },
                { sentence: 'Needless to say, the phenomenon warrants closer analysis.', translation: 'Huelga decir que el fenómeno merece un análisis más detallado.' },
                { sentence: 'To put it differently, we cannot draw conclusions from a single case study.', translation: 'Dicho de otro modo, no podemos sacar conclusiones de un solo estudio de caso.' },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default pronunciation;
