import type { Chapter } from '@/lib/types';

const communication: Chapter = {
  slug: 'communication',
  title: 'Funciones Comunicativas B2',
  description:
    'En B2 podés argumentar, especular, negociar y hablar de temas complejos con precisión. Aprendé a expresarte con matiz y autoridad en situaciones formales e informales.',
  sections: [
    {
      id: 'communication',
      label: 'Comunicación',
      dotColor: 'var(--blue)',
      cards: [

        // ── 1. Arguing & Persuading ──────────────────────────────────────
        {
          id: 'arguing-persuading',
          icon: '🎯',
          iconBg: '#ddeaf5',
          title: 'Argumentar y Persuadir',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'INTRODUCIR ARGUMENTO',
                    items: [
                      'The main argument is that...',
                      'There is strong evidence that...',
                      'Studies suggest / show that...',
                      'It is widely believed that...',
                      'One of the key points is...',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'CONTRAARGUMENTAR',
                    items: [
                      'While it is true that..., nevertheless...',
                      'Opponents argue that..., however...',
                      'This may be the case, but...',
                      'On the contrary,...',
                      'Despite this, it is clear that...',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Debate: ¿Debería ser obligatorio el voto?',
                lines: [
                  { speaker: 'A', text: 'There is strong evidence that compulsory voting increases civic engagement and produces more representative governments.', translation: 'Hay evidencia sólida de que el voto obligatorio aumenta la participación cívica y produce gobiernos más representativos.' },
                  { speaker: 'B', text: 'While that may be the case, one of the key arguments against it is that forcing people to vote undermines individual freedom.', translation: 'Si bien puede ser así, uno de los argumentos clave en contra es que obligar a votar atenta contra la libertad individual.' },
                  { speaker: 'A', text: 'On the contrary, I would argue that freedom comes with responsibility. Democracy requires participation.', translation: 'Al contrario, yo argumentaría que la libertad viene con responsabilidad. La democracia requiere participación.' },
                  { speaker: 'B', text: 'Despite this, studies show that in countries with voluntary voting, turnout has actually increased with better civic education.', translation: 'A pesar de esto, estudios muestran que en países con voto voluntario, la participación aumentó con mejor educación cívica.' },
                ],
              },
            },
          ],
        },

        // ── 2. Speculation ───────────────────────────────────────────────
        {
          id: 'speculation',
          icon: '🔮',
          iconBg: '#ede4f5',
          title: 'Hipótesis y Especulación',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'ESPECULACIÓN PRESENTE',
                    items: [
                      'She must be tired. (seguro)',
                      'He might / could be at work. (posible)',
                      'They can\'t be serious. (imposible)',
                      'It may well be that... (bastante probable)',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'ESPECULACIÓN PASADA',
                    items: [
                      'She must have forgotten. (seguro en el pasado)',
                      'He might have missed the bus. (posible pasado)',
                      'They can\'t have known. (imposible en el pasado)',
                      'She could have taken a taxi. (posibilidad pasada)',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'He must be exhausted — he worked 12 hours.', es: 'Debe estar agotado — trabajó 12 horas.', note: '→ must: certeza lógica' },
                { en: 'She might have taken the wrong train.', es: 'Puede que haya tomado el tren equivocado.', note: '→ might have: posibilidad pasada' },
                { en: 'They can\'t have received the email yet.', es: 'No pueden haber recibido el email todavía.', note: '→ can\'t have: imposibilidad pasada' },
                { en: 'The results could indicate a wider problem.', es: 'Los resultados podrían indicar un problema mayor.', note: '→ could: especulación cautelosa' },
              ],
            },
          ],
        },

        // ── 3. Regret & Wishes ───────────────────────────────────────────
        {
          id: 'regret-wishes',
          icon: '💭',
          iconBg: '#fce8e4',
          title: 'Expresar Arrepentimiento y Deseos No Cumplidos',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'neg',
                    title: 'ARREPENTIMIENTO',
                    items: [
                      'I wish I had...',
                      'If only I hadn\'t...',
                      'I should have...',
                      'I shouldn\'t have...',
                      'Looking back, I regret...',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'DESEOS PRESENTES',
                    items: [
                      'I wish things were different.',
                      'If only I could change this.',
                      'I\'d rather things were...',
                      'It would be better if...',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Reflexión: Una decisión difícil',
                lines: [
                  { speaker: 'A', text: 'Do you ever regret dropping out of university?', translation: '¿Alguna vez te arrepentís de haber dejado la universidad?' },
                  { speaker: 'B', text: 'Sometimes. I wish I had at least finished the first year. Looking back, I should have talked to my professors before deciding.', translation: 'A veces. Ojalá hubiera terminado al menos el primer año. Mirando atrás, debería haber hablado con mis profesores antes de decidir.' },
                  { speaker: 'A', text: 'But you\'ve built a successful business. You couldn\'t have done that full-time at university.', translation: 'Pero construiste un negocio exitoso. No podrías haberlo hecho a tiempo completo en la universidad.' },
                  { speaker: 'B', text: 'That\'s true. If only life came with a manual. I\'d rather not think about what could have been — I\'m happy with where I am.', translation: 'Es verdad. Si tan solo la vida viniera con un manual. Prefiero no pensar en lo que podría haber sido — estoy contento con dónde estoy.' },
                ],
              },
            },
          ],
        },

        // ── 4. Negotiating ───────────────────────────────────────────────
        {
          id: 'negotiating',
          icon: '🤝',
          iconBg: '#d0ebe7',
          title: 'Negociar y Llegar a Acuerdos',
          blocks: [
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Proponer:  ', text: 'What if we...? / How about...? / I\'d like to suggest...' },
                  { label: 'Condicionar:', text: 'We could agree to X, provided that... / as long as...' },
                  { label: 'Ceder:     ', text: 'I\'m prepared to... / We can be flexible on...' },
                  { label: 'Rechazar:  ', text: 'I\'m afraid that\'s not acceptable. / That\'s not something we can agree to.' },
                  { label: 'Cerrar:    ', text: 'I think we\'ve reached an agreement. / Shall we shake on that?' },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Negociación: Condiciones de trabajo',
                lines: [
                  { speaker: 'A', speakerLabel: 'E', text: 'I\'m very interested in the position, but I\'d like to discuss the salary.', translation: 'Estoy muy interesado en el puesto, pero me gustaría discutir el salario.' },
                  { speaker: 'B', speakerLabel: 'M', text: 'Of course. What did you have in mind?', translation: 'Por supuesto. ¿Qué tenías en mente?' },
                  { speaker: 'A', speakerLabel: 'E', text: 'The offer is $60,000. I was expecting something closer to $70,000 based on my experience.', translation: 'La oferta es $60,000. Esperaba algo más cercano a $70,000 basado en mi experiencia.' },
                  { speaker: 'B', speakerLabel: 'M', text: 'I\'m afraid we can\'t go that high right now. However, we could offer $65,000, provided that you take on the team lead responsibilities.', translation: 'Me temo que no podemos llegar tan alto ahora. Sin embargo, podríamos ofrecer $65,000, siempre que asumas las responsabilidades de líder de equipo.' },
                  { speaker: 'A', speakerLabel: 'E', text: 'I can be flexible on that. As long as there\'s a performance review in six months, I think we have a deal.', translation: 'Puedo ser flexible en eso. Siempre que haya una revisión de desempeño en seis meses, creo que tenemos un trato.' },
                ],
              },
            },
          ],
        },

        // ── 5. Social Trends & News ──────────────────────────────────────
        {
          id: 'social-trends',
          icon: '📰',
          iconBg: '#fef3d0',
          title: 'Hablar de Tendencias y Noticias',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'affirm',
                    title: 'DESCRIBIR TENDENCIAS',
                    items: [
                      'There has been a significant rise / fall in...',
                      'X is becoming increasingly...',
                      'More and more people are...',
                      'The trend towards X is growing.',
                      'X has seen a dramatic increase.',
                    ],
                  },
                  {
                    type: 'inter',
                    title: 'REPORTAR NOTICIAS',
                    items: [
                      'According to reports,...',
                      'It has been announced that...',
                      'Officials claim / deny that...',
                      'Sources suggest that...',
                      'It remains to be seen whether...',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'There has been a significant rise in remote work since 2020.', es: 'Hubo un aumento significativo del trabajo remoto desde 2020.', note: '→ tendencia con datos' },
                { en: 'More and more companies are adopting AI tools.', es: 'Cada vez más empresas están adoptando herramientas de IA.', note: '→ tendencia en curso' },
                { en: 'According to reports, inflation may ease next year.', es: 'Según informes, la inflación podría bajar el año próximo.', note: '→ reportar con distancia' },
                { en: 'It remains to be seen whether the policy will work.', es: 'Queda por ver si la política funcionará.', note: '→ incertidumbre elegante' },
              ],
            },
          ],
        },

        // ── 6. Summarising & Paraphrasing ────────────────────────────────
        {
          id: 'summarising',
          icon: '📋',
          iconBg: '#ede4f5',
          title: 'Resumir y Parafrasear',
          blocks: [
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Resumir:     ', text: 'To sum up,... / In summary,... / The main point is...' },
                  { label: 'Parafrasear: ', text: 'In other words,... / What I mean is... / To put it differently,...' },
                  { label: 'Citar a otro:', text: 'According to X,... / X argues that... / X claims that...' },
                  { label: 'Matizar:     ', text: 'To some extent,... / It depends on... / This is not always the case.' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'To sum up, the evidence suggests that early intervention is more effective.', es: 'En resumen, la evidencia sugiere que la intervención temprana es más efectiva.', note: '→ cierre de argumento' },
                { en: 'In other words, we need to act now, not later.', es: 'En otras palabras, necesitamos actuar ahora, no después.', note: '→ parafrasear con claridad' },
                { en: 'To some extent, both sides have valid points.', es: 'Hasta cierto punto, ambos lados tienen argumentos válidos.', note: '→ matizar postura' },
                { en: 'According to the WHO, this is a growing global concern.', es: 'Según la OMS, esto es una preocupación global creciente.', note: '→ citar fuente' },
              ],
            },
          ],
        },

        // ── 7. Exercises ─────────────────────────────────────────────────
        {
          id: 'exercises-comm-b2',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios · Comunicación B2',
          blocks: [
            {
              type: 'speak_word',
              data: [
                { word: 'There is strong evidence that climate change is accelerating.', translation: 'Hay evidencia sólida de que el cambio climático se está acelerando.' },
                { word: 'I wish I had taken that opportunity when I had the chance.', translation: 'Ojalá hubiera aprovechado esa oportunidad cuando tuve la chance.' },
                { word: 'We could agree to the terms, provided that the deadline is extended.', translation: 'Podríamos acordar los términos, siempre que se extienda el plazo.' },
                { word: 'She must have forgotten about the meeting.', translation: 'Debe haber olvidado la reunión.' },
                { word: 'To sum up, the benefits outweigh the risks.', translation: 'En resumen, los beneficios superan los riesgos.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'While it is true that costs are high, the long-term benefits are significant.', translation: 'Si bien es cierto que los costos son altos, los beneficios a largo plazo son significativos.' },
                { sentence: 'More and more young people are choosing to work remotely.', translation: 'Cada vez más jóvenes eligen trabajar de forma remota.' },
                { sentence: 'I should have spoken up at the meeting instead of staying silent.', translation: 'Debería haber alzado la voz en la reunión en lugar de quedarme callado.' },
                { sentence: 'According to recent studies, regular exercise reduces the risk of depression.', translation: 'Según estudios recientes, el ejercicio regular reduce el riesgo de depresión.' },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default communication;
