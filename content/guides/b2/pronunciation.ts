import type { Chapter } from '@/lib/types';

const pronunciation: Chapter = {
  slug: 'pronunciation',
  title: 'Pronunciación B2',
  description:
    'En B2 la pronunciación es sobre fluidez y naturalidad. Aprendé cómo las palabras se conectan, qué sonidos desaparecen, cómo la entonación transmite actitud y las diferencias clave entre acentos.',
  sections: [
    {
      id: 'pronunciation',
      label: 'Pronunciación',
      dotColor: 'var(--coral)',
      cards: [

        // ── 1. Linked Speech ─────────────────────────────────────────────
        {
          id: 'linked-speech',
          icon: '🔗',
          iconBg: '#d0ebe7',
          title: 'Linked Speech: Cómo se Conectan las Palabras',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En inglés fluido, las palabras <strong>no se pronuncian de forma aislada</strong> — se conectan entre sí. Hay tres tipos de conexión principales. Entender esto es clave para comprender el inglés rápido.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Tipo', 'Regla', 'Ejemplo escrito', 'Ejemplo hablado'],
                rows: [
                  { en: 'Linking', ipa: 'Consonante + vocal → se unen', es: 'an apple', context: '/ənæpl/' },
                  { en: 'Linking', ipa: 'Consonante + vocal → se unen', es: 'turn off', context: '/tɜːnɒf/' },
                  { en: 'Linking', ipa: 'Igual consonante → se fusionan', es: 'black cat', context: '/blæk·æt/ (una k larga)' },
                  { en: 'Intrusion', ipa: 'Vocal + vocal → se agrega /w/ o /j/', es: 'go on', context: '/gəʊwɒn/' },
                  { en: 'Intrusion', ipa: 'Vocal + vocal → se agrega /j/', es: 'see it', context: '/siːjɪt/' },
                ],
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'an_apple_a_day', ipa: '/ənæplədeɪ/', translation: 'Las palabras se conectan — no hay pausa entre ellas' },
                { word: 'pick_it_up', ipa: '/pɪkɪtʌp/', translation: 'Tres palabras, suena como una' },
                { word: 'go_on', ipa: '/gəʊwɒn/', translation: 'La /w/ aparece entre las dos vocales' },
                { word: 'I_eat_a_lot', ipa: '/aɪjiːtəlɒt/', translation: '"I eat" → /aɪjiːt/ — la /j/ conecta las vocales' },
              ],
            },
          ],
        },

        // ── 2. Elision ───────────────────────────────────────────────────
        {
          id: 'elision',
          icon: '✂️',
          iconBg: '#fce8e4',
          title: 'Elision: Sonidos que Desaparecen',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'La <strong>elision</strong> es cuando un sonido <em>desaparece</em> en el habla natural para facilitar la pronunciación. Si no la reconocés, el inglés rápido te va a sonar incomprensible.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Escrito', 'Hablado', 'Regla'],
                rows: [
                  { en: 'next day', ipa: '/neksdeɪ/', es: 'La /t/ desaparece antes de consonante' },
                  { en: 'must be', ipa: '/məsbi/', es: 'La /t/ se elimina entre consonantes' },
                  { en: 'last night', ipa: '/læsnaɪt/', es: 'La /t/ final de "last" desaparece' },
                  { en: 'exactly', ipa: '/ɪɡzækli/', es: 'La /t/ interior se elimina' },
                  { en: 'government', ipa: '/ɡʌvəmənt/', es: 'La "n" interior casi desaparece' },
                  { en: 'interesting', ipa: '/ˈɪntrɪstɪŋ/', es: '4 sílabas → 3 en habla rápida' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>La /t/ es el campeón de la elision:</strong><br>Desaparece especialmente entre consonantes: <em>mos(t) people, las(t) time, nex(t) week</em><br>También se convierte en una /d/ suave (flap) entre vocales en inglés americano: <em>better, water, city → /bedər/, /wɑdər/, /sɪdi/</em>',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I must be going now.', ipa: '/aɪ məsbi gəʊɪŋ naʊ/', translation: 'La /t/ de "must" desaparece' },
                { word: 'What\'s the next stop?', ipa: '/wɒts ðə neks stɒp/', translation: 'La /t/ de "next" desaparece antes de /s/' },
                { word: 'That\'s an interesting idea.', ipa: '', translation: '"interesting" → 3 sílabas en habla natural' },
              ],
            },
          ],
        },

        // ── 3. Assimilation ──────────────────────────────────────────────
        {
          id: 'assimilation',
          icon: '🔄',
          iconBg: '#fef3d0',
          title: 'Assimilation: Sonidos que se Transforman',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'La <strong>asimilación</strong> ocurre cuando un sonido <em>cambia</em> para parecerse al sonido siguiente. Es el fenómeno más sutil pero explica por qué el inglés rápido suena tan diferente al inglés escrito.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Escrito', 'Hablado', 'Qué pasa'],
                rows: [
                  { en: 'ten boys', ipa: '/tem bɔɪz/', es: 'La /n/ se convierte en /m/ antes de /b/' },
                  { en: 'in Paris', ipa: '/ɪm pærɪs/', es: 'La /n/ se convierte en /m/ antes de /p/' },
                  { en: 'good boy', ipa: '/gʊb bɔɪ/', es: 'La /d/ se convierte en /b/ antes de /b/' },
                  { en: 'don\'t you', ipa: '/dəʊntʃuː/', es: 'La /t/ + /j/ se fusionan en /tʃ/' },
                  { en: 'did you', ipa: '/dɪdʒuː/', es: 'La /d/ + /j/ se fusionan en /dʒ/' },
                  { en: 'could you', ipa: '/kʊdʒuː/', es: 'Igual: /d/ + /j/ → /dʒ/' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>El caso más importante: /t/ o /d/ + you</strong><br><em>Don\'t you?</em> → /dəʊntʃuː/ (suena como "dontchu")<br><em>Did you?</em> → /dɪdʒuː/ (suena como "didja")<br><em>Would you?</em> → /wʊdʒuː/ (suena como "woodja")<br>Esto explica por qué estas frases son tan difíciles de entender en inglés rápido.',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'Don\'t you think so?', ipa: '/dəʊntʃu θɪŋk səʊ/', translation: '"don\'t you" → /dəʊntʃu/' },
                { word: 'Did you finish it?', ipa: '/dɪdʒu fɪnɪʃ ɪt/', translation: '"did you" → /dɪdʒu/' },
                { word: 'Would you like some tea?', ipa: '/wʊdʒu laɪk səm tiː/', translation: '"would you" → /wʊdʒu/' },
              ],
            },
          ],
        },

        // ── 4. Intonation & Attitude ─────────────────────────────────────
        {
          id: 'intonation-attitude',
          icon: '🎭',
          iconBg: '#ede4f5',
          title: 'Entonación para Expresar Actitud',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'La <strong>entonación</strong> en B2 va más allá de subir o bajar al final. La misma oración puede expresar entusiasmo, escepticismo, sorpresa o sarcasmo solo con cambiar el patrón de entonación.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'ENTONACIÓN ALTA ↗↗',
                    items: [
                      'Entusiasmo: <em>"That\'s AMAZING!"</em>',
                      'Sorpresa genuina: <em>"Really?!"</em>',
                      'Interés: preguntas sí/no',
                      'Invitación: <em>"Come in!"</em>',
                    ],
                  },
                  {
                    type: 'neg',
                    title: 'ENTONACIÓN PLANA / BAJA ↘',
                    items: [
                      'Escepticismo: <em>"Oh, really."</em> (plano)',
                      'Sarcasmo: <em>"Yeah, great."</em> (descendente)',
                      'Certeza: afirmaciones, wh-questions',
                      'Desaprobación sutil',
                    ],
                  },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>El poder del núcleo tónico:</strong><br>Cambiar cuál palabra se enfatiza cambia el significado completamente:<br><em>"<u>I</u> didn\'t say she stole it."</em> → (otra persona lo dijo)<br><em>"I didn\'t <u>say</u> she stole it."</em> → (lo impliqué, no lo dije)<br><em>"I didn\'t say <u>she</u> stole it."</em> → (alguien más lo robó)<br><em>"I didn\'t say she <u>stole</u> it."</em> → (quizás lo encontró)',
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I didn\'t say she stole it.', translation: 'Cambiá el énfasis en cada palabra y notá cómo cambia el significado' },
                { word: 'Oh, really.', translation: 'Con entonación descendente = escepticismo o desinterés' },
                { word: 'Oh, really?', translation: 'Con entonación ascendente = sorpresa genuina' },
                { word: 'That\'s interesting.', translation: 'Entonación plana = "no me importa". Entonación alta = genuino interés.' },
              ],
            },
          ],
        },

        // ── 5. British vs American ───────────────────────────────────────
        {
          id: 'british-vs-american',
          icon: '🌍',
          iconBg: '#ddeaf5',
          title: 'British vs American English',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'No existe un inglés "correcto" — ambos acentos son igualmente válidos. Sin embargo, hay diferencias de pronunciación, vocabulario y ortografía que es importante conocer para no confundirse.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['British (UK)', 'American (US)', 'Diferencia'],
                rows: [
                  { en: 'can\'t /kɑːnt/', ipa: 'can\'t /kænt/', es: 'La "a" es más larga en UK', context: 'Pronunciación' },
                  { en: 'water /wɔːtə/', ipa: 'water /wɑːdər/', es: 'La "t" → "d" suave en US', context: 'Pronunciación' },
                  { en: 'dance /dɑːns/', ipa: 'dance /dæns/', es: 'La "a" cambia', context: 'Pronunciación' },
                  { en: 'colour, centre', ipa: 'color, center', es: '-our/-our → -or, -re → -er', context: 'Ortografía' },
                  { en: 'flat (piso)', ipa: 'apartment', es: 'Diferente vocabulario', context: 'Vocabulario' },
                  { en: 'lift (ascensor)', ipa: 'elevator', es: 'Diferente vocabulario', context: 'Vocabulario' },
                  { en: 'biscuit', ipa: 'cookie', es: 'Diferente vocabulario', context: 'Vocabulario' },
                  { en: 'lorry', ipa: 'truck', es: 'Diferente vocabulario', context: 'Vocabulario' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>La diferencia más audible:</strong> La <strong>/r/</strong>. El inglés americano pronuncia todas las /r/ (rhotic). El inglés británico estándar (RP) NO pronuncia la /r/ final o antes de consonante: <em>car</em> → UK: /kɑː/, US: /kɑːr/. <em>bird</em> → UK: /bɜːd/, US: /bɜːrd/.',
              },
            },
          ],
        },

        // ── 6. Minimal Pairs ─────────────────────────────────────────────
        {
          id: 'minimal-pairs',
          icon: '👂',
          iconBg: '#fce8e4',
          title: 'Pares Mínimos que Confunden',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>pares mínimos</strong> son palabras que solo se diferencian por un sonido. Confundirlos puede cambiar completamente el significado de lo que decís.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Palabra 1', 'IPA', 'Palabra 2', 'IPA', 'Diferencia'],
                rows: [
                  { en: 'ship', ipa: '/ʃɪp/', es: 'sheep', context: '/ʃiːp/ — vocal corta vs larga' },
                  { en: 'live', ipa: '/lɪv/', es: 'leave', context: '/liːv/ — vocal corta vs larga' },
                  { en: 'full', ipa: '/fʊl/', es: 'fool', context: '/fuːl/ — vocal corta vs larga' },
                  { en: 'hit', ipa: '/hɪt/', es: 'heat', context: '/hiːt/ — vocal corta vs larga' },
                  { en: 'bad', ipa: '/bæd/', es: 'bed', context: '/bɛd/ — /æ/ vs /ɛ/' },
                  { en: 'bit', ipa: '/bɪt/', es: 'beat', context: '/biːt/ — /ɪ/ vs /iː/' },
                  { en: 'think', ipa: '/θɪŋk/', es: 'sink', context: '/sɪŋk/ — /θ/ vs /s/' },
                  { en: 'vine', ipa: '/vaɪn/', es: 'wine', context: '/waɪn/ — /v/ vs /w/' },
                ],
              },
            },
            {
              type: 'speak_word',
              data: [
                { word: 'The ship / the sheep is in the port.', translation: 'ship /ʃɪp/ vs sheep /ʃiːp/ — ¿vocal corta o larga?' },
                { word: 'I live / I leave here.', translation: 'live /lɪv/ (vivir) vs leave /liːv/ (salir/partir)' },
                { word: 'Think / sink carefully.', translation: 'think /θɪŋk/ (pensar) vs sink /sɪŋk/ (hundir/fregadero)' },
                { word: 'Is it a vine or wine?', translation: 'vine /vaɪn/ (vid) vs wine /waɪn/ (vino)' },
              ],
            },
          ],
        },

        // ── 7. Exercises ─────────────────────────────────────────────────
        {
          id: 'exercises-pron-b2',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios · Pronunciación B2',
          blocks: [
            {
              type: 'dictation',
              data: [
                { sentence: 'Did you finish the report I asked you about?', translation: '¿Terminaste el informe que te pedí? ("did you" y "asked you" se fusionan)' },
                { sentence: 'I must be going — it\'s getting late.', translation: 'Me tengo que ir, se está haciendo tarde. (la /t/ de "must" desaparece)' },
                { sentence: 'Would you like another cup of tea?', translation: '¿Te gustaría otra taza de té? ("would you" → /wʊdʒu/)' },
                { sentence: 'The next stop is Central Station.', translation: 'La próxima parada es la Estación Central. (la /t/ de "next" desaparece)' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'Turn off the light, please.', ipa: '/tɜːnɒf ðə laɪt/', translation: '"turn off" → linked speech, suena como una palabra' },
                { word: 'I don\'t know what to do.', ipa: '/aɪ dəʊnəʊ wɒtə duː/', translation: '"don\'t know" y "what to" se reducen' },
                { word: 'Would you rather stay or go?', ipa: '/wʊdʒə rɑːðər steɪ ɔː gəʊ/', translation: '"would you" → /wʊdʒə/' },
                { word: 'Not only did she win — she broke the record.', translation: 'Inversión + entonación de énfasis y sorpresa' },
                { word: 'I thought it was interesting.', ipa: '/aɪ θɔːt ɪt wəz ɪntrɪstɪŋ/', translation: '"interesting" → 3 sílabas, la /t/ interna desaparece' },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default pronunciation;
