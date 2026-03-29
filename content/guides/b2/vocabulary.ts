import type { Chapter } from '@/lib/types';

const vocabulary: Chapter = {
  slug: 'vocabulary',
  title: 'Vocabulario B2',
  description:
    'En B2 el vocabulario se vuelve preciso y matizado. Aprendés a hablar de temas complejos, evitar falsos amigos, usar collocations naturales y expresiones idiomáticas.',
  sections: [
    {
      id: 'vocabulary',
      label: 'Vocabulario',
      dotColor: 'var(--gold)',
      cards: [

        // ── 1. Business & Economy ────────────────────────────────────────
        {
          id: 'business-economy',
          icon: '📈',
          iconBg: '#ddeaf5',
          title: 'Negocios y Economía',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'negotiate',      ipa: 'negociar',              es: 'We negotiated a better deal.' },
                  { en: 'budget',         ipa: 'presupuesto',           es: 'We need to cut the budget.' },
                  { en: 'profit / loss',  ipa: 'ganancia / pérdida',    es: 'The company made a profit last year.' },
                  { en: 'investment',     ipa: 'inversión',             es: 'It was a risky investment.' },
                  { en: 'shareholder',    ipa: 'accionista',            es: 'The shareholders were unhappy.' },
                  { en: 'merger',         ipa: 'fusión (empresarial)',   es: 'The merger was announced last week.' },
                  { en: 'revenue',        ipa: 'ingresos / facturación', es: 'Revenue increased by 15%.' },
                  { en: 'bankruptcy',     ipa: 'quiebra',               es: 'The company declared bankruptcy.' },
                  { en: 'outsource',      ipa: 'tercerizar',            es: 'They outsourced the IT department.' },
                  { en: 'stock market',   ipa: 'bolsa de valores',      es: 'The stock market crashed in 2008.' },
                  { en: 'supply chain',   ipa: 'cadena de suministro',  es: 'The supply chain was disrupted.' },
                  { en: 'entrepreneur',   ipa: 'emprendedor',           es: 'She\'s a successful entrepreneur.' },
                ],
              },
            },
          ],
        },

        // ── 2. Environment ───────────────────────────────────────────────
        {
          id: 'environment',
          icon: '🌿',
          iconBg: '#d0ebe7',
          title: 'Medio Ambiente',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'sustainability',    ipa: 'sostenibilidad',         es: 'Sustainability is our priority.' },
                  { en: 'carbon footprint',  ipa: 'huella de carbono',      es: 'Reduce your carbon footprint.' },
                  { en: 'renewable energy',  ipa: 'energía renovable',      es: 'Invest in renewable energy.' },
                  { en: 'deforestation',     ipa: 'deforestación',          es: 'Deforestation is accelerating.' },
                  { en: 'biodiversity',      ipa: 'biodiversidad',          es: 'We must protect biodiversity.' },
                  { en: 'greenhouse gas',    ipa: 'gas de efecto invernadero', es: 'Greenhouse gas emissions rose.' },
                  { en: 'drought',           ipa: 'sequía',                 es: 'The drought lasted three years.' },
                  { en: 'ecosystem',         ipa: 'ecosistema',             es: 'The ecosystem is fragile.' },
                  { en: 'fossil fuels',      ipa: 'combustibles fósiles',   es: 'We must move away from fossil fuels.' },
                  { en: 'recycle / reuse',   ipa: 'reciclar / reutilizar',  es: 'Recycle and reuse whenever possible.' },
                ],
              },
            },
          ],
        },

        // ── 3. Society & Politics ────────────────────────────────────────
        {
          id: 'society-politics',
          icon: '🏛️',
          iconBg: '#ede4f5',
          title: 'Sociedad y Política',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'democracy',       ipa: 'democracia',            es: 'Democracy requires participation.' },
                  { en: 'legislation',     ipa: 'legislación',           es: 'New legislation was passed.' },
                  { en: 'equality',        ipa: 'igualdad',              es: 'They fight for gender equality.' },
                  { en: 'protest',         ipa: 'protesta / protestar',  es: 'Thousands protested in the streets.' },
                  { en: 'corruption',      ipa: 'corrupción',            es: 'Corruption undermines democracy.' },
                  { en: 'welfare',         ipa: 'bienestar / asistencia social', es: 'The welfare system needs reform.' },
                  { en: 'discrimination',  ipa: 'discriminación',        es: 'Racial discrimination is illegal.' },
                  { en: 'refugee',         ipa: 'refugiado',             es: 'Thousands of refugees fled the war.' },
                  { en: 'poverty',         ipa: 'pobreza',               es: 'Poverty is a complex issue.' },
                  { en: 'campaign',        ipa: 'campaña',               es: 'She ran a successful campaign.' },
                ],
              },
            },
          ],
        },

        // ── 4. Emotions & Character ──────────────────────────────────────
        {
          id: 'emotions-character',
          icon: '🧠',
          iconBg: '#fce8e4',
          title: 'Emociones y Carácter',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'CARÁCTER POSITIVO',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      'empathetic — empático',
                      'resilient — resiliente',
                      'ambitious — ambicioso',
                      'reliable — confiable',
                      'open-minded — de mente abierta',
                      'determined — determinado',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'CARÁCTER NEGATIVO',
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      'stubborn — terco',
                      'arrogant — arrogante',
                      'manipulative — manipulador',
                      'impulsive — impulsivo',
                      'superficial — superficial',
                      'narrow-minded — cerrado de mente',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Emoción / Estado', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'overwhelmed',    ipa: 'abrumado',         es: 'I felt completely overwhelmed.' },
                  { en: 'frustrated',     ipa: 'frustrado',        es: 'She was frustrated with the results.' },
                  { en: 'anxious',        ipa: 'ansioso',          es: 'He feels anxious before exams.' },
                  { en: 'content',        ipa: 'satisfecho / a gusto', es: 'I\'m content with my life.' },
                  { en: 'devastated',     ipa: 'devastado',        es: 'She was devastated by the news.' },
                  { en: 'indifferent',    ipa: 'indiferente',      es: 'He seemed indifferent to the problem.' },
                ],
              },
            },
          ],
        },

        // ── 5. Word Formation ────────────────────────────────────────────
        {
          id: 'word-formation',
          icon: '🧩',
          iconBg: '#fef3d0',
          title: 'Prefijos y Sufijos',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Conocer los <strong>prefijos y sufijos</strong> más comunes te permite deducir el significado de miles de palabras nuevas sin necesidad de memorizarlas una por una.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'PREFIJOS',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<strong>un-</strong> = negación: unhappy, unfair',
                      '<strong>dis-</strong> = negación: disagree, dishonest',
                      '<strong>mis-</strong> = error: misunderstand, mislead',
                      '<strong>over-</strong> = exceso: overwork, overestimate',
                      '<strong>under-</strong> = insuficiencia: underestimate',
                      '<strong>re-</strong> = repetición: redo, reconsider',
                      '<strong>pre-</strong> = antes: predict, prehistoric',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'SUFIJOS',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      '<strong>-tion/-sion</strong>: information, decision',
                      '<strong>-ment</strong>: government, improvement',
                      '<strong>-ness</strong>: happiness, kindness',
                      '<strong>-ity</strong>: equality, creativity',
                      '<strong>-ful</strong>: beautiful, useful',
                      '<strong>-less</strong>: homeless, careless',
                      '<strong>-ous</strong>: dangerous, famous',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'predict → unpredictable', es: 'predecir → impredecible', note: '→ un- + -able' },
                { en: 'employ → unemployment', es: 'emplear → desempleo', note: '→ un- + -ment' },
                { en: 'understand → misunderstanding', es: 'entender → malentendido', note: '→ mis- + -ing' },
                { en: 'estimate → overestimate / underestimate', es: 'estimar → sobrestimar / subestimar', note: '→ over- / under-' },
              ],
            },
          ],
        },

        // ── 6. False Friends ─────────────────────────────────────────────
        {
          id: 'false-friends',
          icon: '⚠️',
          iconBg: '#fce8e4',
          title: 'Falsos Amigos',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>falsos amigos</strong> son palabras que se parecen al español pero significan algo diferente. Son una de las fuentes de error más frecuentes en B2.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Palabra en inglés', 'NO significa', 'SÍ significa', 'Ejemplo correcto'],
                rows: [
                  { en: 'actually',      ipa: 'actualmente',    es: 'en realidad / de hecho',  context: 'Actually, I disagree.' },
                  { en: 'eventually',    ipa: 'eventualmente',  es: 'finalmente / con el tiempo', context: 'Eventually, he agreed.' },
                  { en: 'sensible',      ipa: 'sensible',       es: 'sensato / razonable',     context: 'That\'s a sensible idea.' },
                  { en: 'sensitive',     ipa: '—',              es: 'sensible (emocionalmente)', context: 'She\'s very sensitive.' },
                  { en: 'library',       ipa: 'librería',       es: 'biblioteca',              context: 'I study at the library.' },
                  { en: 'bookshop',      ipa: '—',              es: 'librería',                context: 'I bought it at the bookshop.' },
                  { en: 'embarrassed',   ipa: 'embarazada',     es: 'avergonzado',             context: 'I felt embarrassed.' },
                  { en: 'pregnant',      ipa: '—',              es: 'embarazada',              context: 'She\'s pregnant.' },
                  { en: 'sympathetic',   ipa: 'simpático',      es: 'comprensivo / empático',  context: 'He was very sympathetic.' },
                  { en: 'resume',        ipa: 'reanudar',       es: 'currículum (en EE.UU.)',   context: 'Send me your resume.' },
                ],
              },
            },
          ],
        },

        // ── 7. Collocations ──────────────────────────────────────────────
        {
          id: 'collocations',
          icon: '🔗',
          iconBg: '#d0ebe7',
          title: 'Collocations Clave',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Las <strong>collocations</strong> son combinaciones de palabras que "van juntas" naturalmente. Los nativos las usan de forma automática. Usarlas correctamente es lo que hace que tu inglés suene fluido y no como traducción del español.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'MAKE / REACH / RAISE',
                    items: [
                      'make progress — avanzar',
                      'make an effort — hacer un esfuerzo',
                      'reach a conclusion — llegar a una conclusión',
                      'reach an agreement — llegar a un acuerdo',
                      'raise awareness — crear conciencia',
                      'raise a question — plantear una pregunta',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'TAKE / DRAW / COME',
                    items: [
                      'take responsibility — asumir responsabilidad',
                      'take advantage of — aprovechar',
                      'draw a conclusion — sacar una conclusión',
                      'draw attention to — llamar la atención sobre',
                      'come to terms with — aceptar / adaptarse a',
                      'come across as — dar la impresión de',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'We need to raise awareness about climate change.', es: 'Necesitamos crear conciencia sobre el cambio climático.', note: '→ raise awareness' },
                { en: 'After hours of debate, we reached an agreement.', es: 'Tras horas de debate, llegamos a un acuerdo.', note: '→ reach an agreement' },
                { en: 'She comes across as very confident.', es: 'Ella da la impresión de ser muy segura.', note: '→ come across as' },
                { en: 'It took him years to come to terms with the loss.', es: 'Le llevó años aceptar la pérdida.', note: '→ come to terms with' },
              ],
            },
          ],
        },

        // ── 8. Idioms ────────────────────────────────────────────────────
        {
          id: 'idioms',
          icon: '🎭',
          iconBg: '#fef3d0',
          title: 'Expresiones Idiomáticas',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Idiom', 'Significado', 'Ejemplo'],
                rows: [
                  { en: 'hit the nail on the head', ipa: 'dar en el clavo',            es: 'You hit the nail on the head with that analysis.' },
                  { en: 'under the weather',         ipa: 'sentirse mal / enfermo',     es: 'I\'m feeling a bit under the weather today.' },
                  { en: 'bite the bullet',           ipa: 'aguantar / hacer algo difícil', es: 'I bit the bullet and told her the truth.' },
                  { en: 'the ball is in your court', ipa: 'la decisión es tuya',        es: 'I\'ve done my part. The ball is in your court.' },
                  { en: 'turn a blind eye',          ipa: 'hacer la vista gorda',       es: 'They turned a blind eye to the corruption.' },
                  { en: 'break the ice',             ipa: 'romper el hielo',            es: 'He told a joke to break the ice.' },
                  { en: 'get the hang of',           ipa: 'agarrarle la mano / maña a', es: 'I\'m slowly getting the hang of it.' },
                  { en: 'on the fence',              ipa: 'indeciso / sin postura',     es: 'She\'s still on the fence about the decision.' },
                  { en: 'cut corners',               ipa: 'hacer las cosas a medias',   es: 'Don\'t cut corners with safety.' },
                  { en: 'in the long run',           ipa: 'a largo plazo',              es: 'In the long run, it\'s worth the investment.' },
                ],
              },
            },
          ],
        },

        // ── 9. Exercises ─────────────────────────────────────────────────
        {
          id: 'exercises-vocab-b2',
          icon: '🎯',
          iconBg: '#fef3d0',
          title: 'Ejercicios · Vocabulario B2',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                { sentence: 'The company made a huge ___ last year — over a million dollars.', answers: ['profit'], hint: 'ganancia en negocios' },
                { sentence: '"___, I think you\'re wrong." (de hecho)', answers: ['Actually'], hint: 'falso amigo — no "actualmente"' },
                { sentence: 'The campaign helped ___ awareness about plastic pollution.', answers: ['raise'], hint: 'raise awareness — crear conciencia' },
                { sentence: 'I felt ___ when I forgot her name in public.', answers: ['embarrassed'], hint: 'falso amigo — no "embarazada"' },
                { sentence: 'She ___ the proposal after thinking for weeks. (finalmente aceptó)', answers: ['eventually accepted'], hint: 'eventually = finalmente / con el tiempo' },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'actually', es: 'en realidad (no "actualmente")' },
                  { en: 'sensible', es: 'sensato (no "sensible")' },
                  { en: 'raise awareness', es: 'crear conciencia' },
                  { en: 'come to terms with', es: 'aceptar / adaptarse a' },
                  { en: 'under the weather', es: 'sentirse mal' },
                  { en: 'on the fence', es: 'indeciso' },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'resilient', es: 'resiliente — capaz de recuperarse de la adversidad' },
                { en: 'sustainability', es: 'sostenibilidad — desarrollo que no daña el futuro' },
                { en: 'overwhelmed', es: 'abrumado — demasiado para manejar' },
                { en: 'hit the nail on the head', es: 'dar en el clavo — identificar exactamente el problema' },
                { en: 'cut corners', es: 'hacer las cosas a medias — sacrificar calidad para ahorrar' },
                { en: 'narrow-minded', es: 'cerrado de mente — no acepta nuevas ideas' },
                { en: 'revenue', es: 'ingresos / facturación — dinero que entra a una empresa' },
                { en: 'in the long run', es: 'a largo plazo — considerando el futuro' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'Actually, I think we should reconsider.', translation: 'De hecho, creo que deberíamos reconsiderar.' },
                { word: 'The campaign raised awareness about deforestation.', translation: 'La campaña creó conciencia sobre la deforestación.' },
                { word: 'She comes across as very reliable and empathetic.', translation: 'Ella da la impresión de ser muy confiable y empática.' },
                { word: 'In the long run, reducing emissions benefits everyone.', translation: 'A largo plazo, reducir las emisiones beneficia a todos.' },
              ],
            },
          ],
        },

        // ── 10. Quiz ─────────────────────────────────────────────────────
        {
          id: 'quiz-vocab-b2',
          icon: '⚡',
          iconBg: '#fef3d0',
          title: 'Mini-Quiz · Vocabulario B2',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: '"Actually" en inglés significa:', opts: ['actualmente', 'en realidad', 'también', 'finalmente'], ans: 1 },
                { q: '"Sensible" en inglés significa:', opts: ['sensible emocionalmente', 'sensato / razonable', 'sensacional', 'sensitivo'], ans: 1 },
                { q: '"Raise awareness" significa:', opts: ['subir precios', 'crear conciencia', 'levantar la mano', 'ganar premios'], ans: 1 },
                { q: '"Under the weather" significa:', opts: ['bajo la lluvia', 'sin paraguas', 'sentirse mal', 'al aire libre'], ans: 2 },
                { q: '"Resilient" describe a alguien que:', opts: ['es muy flexible', 'se recupera de la adversidad', 'es muy ruidoso', 'trabaja lento'], ans: 1 },
                { q: '"Carbon footprint" es:', opts: ['una huella en el carbón', 'la huella de carbono de una persona', 'un tipo de combustible', 'una marca de zapatos'], ans: 1 },
                { q: '"Come to terms with" significa:', opts: ['llegar a un acuerdo', 'aceptar una situación difícil', 'aprender vocabulario', 'terminar algo'], ans: 1 },
                { q: '"Cut corners" significa:', opts: ['cortar las esquinas', 'tomar el camino más corto', 'hacer las cosas a medias', 'ahorrar dinero correctamente'], ans: 2 },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default vocabulary;
