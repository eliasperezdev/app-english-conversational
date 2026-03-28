import type { Chapter } from '@/lib/types';

const communication: Chapter = {
  slug: 'communication',
  title: 'Funciones Comunicativas B1',
  description:
    'En B1 ya podés mantener conversaciones reales. Aprendé a dar opiniones, hablar de experiencias, hacer planes y contar historias con fluidez.',
  sections: [
    {
      id: 'communication',
      label: 'Comunicación',
      dotColor: 'var(--blue)',
      cards: [

        // ── 1. Talking about experiences ────────────────────────────────
        {
          id: 'experiences',
          icon: '🌍',
          iconBg: '#d0ebe7',
          title: 'Hablar de Experiencias',
          blocks: [
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Experiencia:', text: 'Have you ever + past participle?' },
                  { label: 'Sí:         ', text: 'Yes, I have. I went to X in/last/when...' },
                  { label: 'No:         ', text: 'No, I haven\'t. But I\'d love to.' },
                  { label: 'Primera vez:', text: 'It was the first time I had ever...' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'Have you ever been to Japan?', es: '¿Alguna vez estuviste en Japón?' },
                { en: 'Yes! I went there in 2022. It was incredible.', es: 'Sí, fui en 2022. Fue increíble.' },
                { en: 'I\'ve never tried sushi. Have you?', es: 'Nunca probé sushi. ¿Vos sí?' },
                { en: 'It was the best experience of my life.', es: 'Fue la mejor experiencia de mi vida.' },
                { en: 'I\'ve always wanted to visit New Zealand.', es: 'Siempre quise visitar Nueva Zelanda.' },
              ],
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: Hablando de viajes',
                lines: [
                  { speaker: 'A', text: 'Have you ever been to Europe?', translation: '¿Alguna vez estuviste en Europa?' },
                  { speaker: 'B', text: 'Yes, I have! I went to Spain and Italy last year.', translation: 'Sí. Fui a España e Italia el año pasado.' },
                  { speaker: 'A', text: 'Wow, how was it?', translation: '¡Genial! ¿Cómo fue?' },
                  { speaker: 'B', text: 'It was amazing. I\'ve never eaten so well in my life.', translation: 'Fue increíble. Nunca comí tan bien en mi vida.' },
                  { speaker: 'A', text: 'I\'ve always wanted to go. What was the best part?', translation: 'Siempre quise ir. ¿Cuál fue la mejor parte?' },
                  { speaker: 'B', text: 'Definitely Rome. I could have stayed there for months.', translation: 'Sin dudas Roma. Podría haberme quedado meses.' },
                ],
              },
            },
          ],
        },

        // ── 2. Giving opinions ───────────────────────────────────────────
        {
          id: 'opinions',
          icon: '💬',
          iconBg: '#fef3d0',
          title: 'Dar Opiniones y Debatir',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'EXPRESAR OPINIÓN',
                    items: [
                      'In my opinion,...',
                      'I think / I believe...',
                      'As far as I\'m concerned,...',
                      'Personally, I feel that...',
                      'From my point of view,...',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'ACORDAR / DESACORDAR',
                    items: [
                      'I agree with you.',
                      'That\'s a good point.',
                      'I\'m not sure about that.',
                      'I see your point, but...',
                      'I completely disagree.',
                      'You might be right, however...',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: Debatiendo sobre tecnología',
                lines: [
                  { speaker: 'A', text: 'In my opinion, social media is bad for young people.', translation: 'En mi opinión, las redes sociales son malas para los jóvenes.' },
                  { speaker: 'B', text: 'I see your point, but I think it depends on how you use it.', translation: 'Entiendo tu punto, pero creo que depende de cómo lo usés.' },
                  { speaker: 'A', text: 'That\'s fair. However, studies show it increases anxiety.', translation: 'Es justo. Sin embargo, estudios muestran que aumenta la ansiedad.' },
                  { speaker: 'B', text: 'You might be right. On the other hand, it connects people.', translation: 'Puede que tengas razón. Por otro lado, conecta a la gente.' },
                  { speaker: 'A', text: 'I agree. I guess it\'s all about balance.', translation: 'Coincido. Supongo que es cuestión de equilibrio.' },
                ],
              },
            },
          ],
        },

        // ── 3. Making plans ──────────────────────────────────────────────
        {
          id: 'making-plans',
          icon: '📅',
          iconBg: '#ede4f5',
          title: 'Hacer Planes y Hablar del Futuro',
          blocks: [
            {
              type: 'examples_grid',
              data: [
                { en: 'I\'m going to apply for a new job next month.', es: 'Voy a postularme a un nuevo trabajo el mes que viene.', note: '→ plan decidido' },
                { en: 'We\'re meeting at 7 — it\'s all arranged.', es: 'Nos encontramos a las 7, ya está arreglado.', note: '→ arreglado (present continuous)' },
                { en: 'I might travel to Brazil this summer.', es: 'Puede que viaje a Brasil este verano.', note: '→ posible (might)' },
                { en: 'I\'m thinking of changing careers.', es: 'Estoy pensando en cambiar de carrera.', note: '→ considerando (thinking of + ing)' },
                { en: 'I hope to save enough money by December.', es: 'Espero ahorrar suficiente para diciembre.', note: '→ esperanza (hope to)' },
              ],
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: Planes futuros',
                lines: [
                  { speaker: 'A', text: 'So, what are your plans for next year?', translation: '¿Cuáles son tus planes para el año que viene?' },
                  { speaker: 'B', text: 'I\'m going to finish my degree in June. After that, I\'m thinking of travelling for a few months.', translation: 'Voy a terminar la carrera en junio. Después de eso, estoy pensando en viajar unos meses.' },
                  { speaker: 'A', text: 'That sounds exciting! Where are you planning to go?', translation: '¡Suena emocionante! ¿A dónde planeás ir?' },
                  { speaker: 'B', text: 'I might go to Southeast Asia. I haven\'t decided yet — it depends on my budget.', translation: 'Puede que vaya al Sudeste Asiático. Todavía no decidí, depende del presupuesto.' },
                  { speaker: 'A', text: 'Well, I hope it all works out!', translation: '¡Bueno, espero que todo salga bien!' },
                ],
              },
            },
          ],
        },

        // ── 4. Describing problems ───────────────────────────────────────
        {
          id: 'problems-solutions',
          icon: '🔧',
          iconBg: '#fce8e4',
          title: 'Describir Problemas y Dar Soluciones',
          blocks: [
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Problema:  ', text: 'The thing is... / The problem is that...' },
                  { label: 'Explicar:  ', text: 'What happened was... / It turned out that...' },
                  { label: 'Solución:  ', text: 'Why don\'t you...? / Have you tried...?' },
                  { label: 'Consejo:   ', text: 'If I were you, I would... / You should...' },
                  { label: 'Resultado: ', text: 'In the end... / Eventually... / As a result...' },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: Un problema en el trabajo',
                lines: [
                  { speaker: 'A', text: 'I\'m having a problem with my manager. He never gives me feedback.', translation: 'Tengo un problema con mi jefe. Nunca me da retroalimentación.' },
                  { speaker: 'B', text: 'That\'s really frustrating. Have you tried talking to him directly?', translation: 'Eso es muy frustrante. ¿Intentaste hablar directamente con él?' },
                  { speaker: 'A', text: 'Not really. I don\'t know how to bring it up.', translation: 'No mucho. No sé cómo mencionarlo.' },
                  { speaker: 'B', text: 'If I were you, I\'d ask for a one-on-one meeting and be honest.', translation: 'En tu lugar, pediría una reunión a solas y sería honesto.' },
                  { speaker: 'A', text: 'You\'re right. I\'ll try that. Thanks for the advice.', translation: 'Tenés razón. Lo intentaré. Gracias por el consejo.' },
                ],
              },
            },
          ],
        },

        // ── 5. Talking about work and study ─────────────────────────────
        {
          id: 'work-study',
          icon: '📊',
          iconBg: '#ddeaf5',
          title: 'Hablar de Trabajo y Estudios',
          blocks: [
            {
              type: 'examples_grid',
              data: [
                { en: 'I\'ve been working here for three years.', es: 'Llevo tres años trabajando acá.', note: '→ presente perfecto + for' },
                { en: 'I\'m responsible for managing the team.', es: 'Soy responsable de gestionar el equipo.', note: '→ responsible for + ing' },
                { en: 'I\'m currently studying for my final exams.', es: 'Actualmente estoy estudiando para los exámenes finales.', note: '→ currently + continuo' },
                { en: 'My job involves a lot of travelling.', es: 'Mi trabajo implica mucho viaje.', note: '→ involve + ing' },
                { en: 'I\'m in charge of the social media accounts.', es: 'Estoy a cargo de las redes sociales.', note: '→ in charge of' },
              ],
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: En una entrevista de trabajo',
                lines: [
                  { speaker: 'A', speakerLabel: 'I', text: 'Can you tell me about your current role?', translation: '¿Puede contarme sobre su rol actual?' },
                  { speaker: 'B', speakerLabel: 'C', text: 'Of course. I\'ve been working as a project manager for two years. I\'m responsible for coordinating a team of five people.', translation: 'Claro. Llevo dos años trabajando como gerente de proyectos. Soy responsable de coordinar un equipo de cinco personas.' },
                  { speaker: 'A', speakerLabel: 'I', text: 'And why are you looking for a change?', translation: '¿Y por qué está buscando un cambio?' },
                  { speaker: 'B', speakerLabel: 'C', text: 'I\'ve learned a lot in my current position. However, I feel I\'m ready for a new challenge.', translation: 'Aprendí mucho en mi posición actual. Sin embargo, siento que estoy listo para un nuevo desafío.' },
                ],
              },
            },
          ],
        },

        // ── 6. Telling a story ───────────────────────────────────────────
        {
          id: 'telling-stories',
          icon: '📖',
          iconBg: '#fef3d0',
          title: 'Contar una Historia',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Para contar historias en inglés, necesitás <strong>conectores de secuencia</strong> y saber combinar el <strong>pasado simple y continuo</strong> naturalmente.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'CONECTORES DE HISTORIA',
                    items: [
                      '<strong>Setting:</strong> It was..., One day...',
                      '<strong>Sequence:</strong> First, Then, After that, Finally',
                      '<strong>Surprise:</strong> Suddenly, All of a sudden',
                      '<strong>Result:</strong> As a result, In the end',
                      '<strong>Contrast:</strong> However, But, Although',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'FRASES NARRATIVAS',
                    items: [
                      'It all started when...',
                      'What happened was...',
                      'The next thing I knew...',
                      'It turned out that...',
                      'In the end, everything worked out.',
                      'Looking back, I think...',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Historia: Un viaje que salió mal',
                lines: [
                  { speaker: 'A', text: 'So, how was your trip to Buenos Aires?', translation: '¿Y cómo te fue en el viaje a Buenos Aires?' },
                  { speaker: 'B', text: 'What a disaster! It all started when I missed my flight.', translation: '¡Un desastre! Todo empezó cuando perdí el vuelo.' },
                  { speaker: 'A', text: 'Oh no! What happened?', translation: '¡Ay no! ¿Qué pasó?' },
                  { speaker: 'B', text: 'I was waiting at the wrong terminal. By the time I realized, the flight had already left.', translation: 'Estaba esperando en la terminal equivocada. Para cuando me di cuenta, el vuelo ya había salido.' },
                  { speaker: 'A', text: 'That\'s awful. What did you do?', translation: 'Qué horrible. ¿Qué hiciste?' },
                  { speaker: 'B', text: 'I booked a new flight for the next day. In the end, it worked out — I had extra time to explore the city!', translation: 'Reservé un nuevo vuelo para el día siguiente. Al final resultó bien, ¡tuve tiempo extra para explorar la ciudad!' },
                ],
              },
            },
          ],
        },

        // ── 7. Interactive exercises ─────────────────────────────────────
        {
          id: 'exercises-comm-b1',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios · Comunicación B1',
          blocks: [
            {
              type: 'speak_word',
              data: [
                { word: 'In my opinion, we should invest in public transport.', translation: 'En mi opinión, deberíamos invertir en transporte público.' },
                { word: 'I\'ve been working here for two years.', translation: 'Llevo dos años trabajando acá.' },
                { word: 'Have you ever tried Japanese food?', translation: '¿Alguna vez probaste comida japonesa?' },
                { word: 'If I were you, I\'d talk to the manager.', translation: 'En tu lugar, hablaría con el gerente.' },
                { word: 'It all started when I lost my passport.', translation: 'Todo empezó cuando perdí mi pasaporte.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'Have you ever been to a live concert?', translation: '¿Alguna vez fuiste a un concierto en vivo?' },
                { sentence: 'In my opinion, working from home is more productive.', translation: 'En mi opinión, trabajar desde casa es más productivo.' },
                { sentence: 'I\'m thinking of applying for a scholarship.', translation: 'Estoy pensando en postularme para una beca.' },
                { sentence: 'Suddenly, all the lights went out.', translation: 'De repente, todas las luces se apagaron.' },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default communication;
