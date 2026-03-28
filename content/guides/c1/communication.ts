import type { Chapter } from '@/lib/types';

const communication: Chapter = {
  slug: 'communication',
  title: 'Funciones Comunicativas C1',
  description:
    'En C1 la comunicación es sobre autoridad, matiz y adaptación de registro. Aprendés a debatir con precisión, hablar de conceptos abstractos, expresar certeza y duda con sofisticación, y adaptar tu inglés a cualquier contexto.',
  sections: [
    {
      id: 'communication',
      label: 'Comunicación',
      dotColor: 'var(--blue)',
      cards: [

        // ── 1. Academic Authority — Hedging & Boosting ────────────────────
        {
          id: 'hedging-boosting',
          icon: '⚖️',
          iconBg: '#ddeaf5',
          title: 'Hablar con Autoridad Académica — Hedging y Boosting',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: '<strong>Hedging</strong> = suavizar afirmaciones para mostrar cautela académica. <strong>Boosting</strong> = reforzar afirmaciones para mostrar confianza. El equilibrio entre ambos define el tono académico profesional.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'inter',
                    title: 'HEDGING — cautela',
                    items: [
                      'It would appear that...',
                      'The evidence suggests that...',
                      'This may / might indicate...',
                      'It seems reasonable to assume...',
                      'To some extent, this could be...',
                      'One possible explanation is...',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'BOOSTING — confianza',
                    items: [
                      'It is clear that...',
                      'The data unequivocally shows...',
                      'There is compelling evidence that...',
                      'It is beyond doubt that...',
                      'The conclusion is inescapable:...',
                      'I would contend with confidence...',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Presentación académica',
                lines: [
                  { speaker: 'A', text: 'The evidence suggests that early childhood intervention may have long-term benefits. However, it would be premature to draw definitive conclusions from this data alone.', translation: 'La evidencia sugiere que la intervención temprana en la infancia puede tener beneficios a largo plazo. Sin embargo, sería prematuro sacar conclusiones definitivas solo de estos datos.' },
                  { speaker: 'B', text: 'That\'s a fair point. Nevertheless, the pattern we\'re seeing across multiple studies is compelling. I would argue that the evidence is strong enough to warrant policy changes.', translation: 'Es un punto válido. Sin embargo, el patrón que vemos en múltiples estudios es convincente. Yo argumentaría que la evidencia es lo suficientemente sólida como para justificar cambios de política.' },
                  { speaker: 'A', text: 'I take your point. What I find particularly significant is the consistency across cultural contexts — that lends considerable credibility to the findings.', translation: 'Entiendo tu punto. Lo que encuentro particularmente significativo es la consistencia a través de contextos culturales — eso da considerable credibilidad a los hallazgos.' },
                ],
              },
            },
          ],
        },

        // ── 2. Formal Debate ──────────────────────────────────────────────
        {
          id: 'formal-debate',
          icon: '🎯',
          iconBg: '#fce8e4',
          title: 'Debate Formal — Rebatir, Conceder y Mantener Postura',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'neg',
                    title: 'REBATIR',
                    items: [
                      'I\'m afraid I must challenge that.',
                      'That argument doesn\'t hold up because...',
                      'With respect, that overlooks...',
                      'The evidence actually points to...',
                      'I would take issue with that point.',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'CONCEDER Y MANTENER',
                    items: [
                      'You raise a valid point; however...',
                      'Granted, X is true; nevertheless...',
                      'I concede that..., and yet...',
                      'That may well be the case, but...',
                      'While I acknowledge that..., I maintain that...',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Debate: Inteligencia Artificial y empleo',
                lines: [
                  { speaker: 'A', text: 'I would contend that artificial intelligence poses an existential threat to employment as we know it. The data shows automation has already displaced millions of workers.', translation: 'Sostendría que la inteligencia artificial representa una amenaza existencial para el empleo tal como lo conocemos. Los datos muestran que la automatización ya ha desplazado a millones de trabajadores.' },
                  { speaker: 'B', text: 'I\'m afraid that argument doesn\'t hold up historically. Every technological revolution has displaced some jobs while creating others. The Industrial Revolution is a case in point.', translation: 'Me temo que ese argumento no se sostiene históricamente. Cada revolución tecnológica ha desplazado algunos empleos mientras creaba otros. La Revolución Industrial es un ejemplo claro.' },
                  { speaker: 'A', text: 'You raise a valid point. Granted, historical precedent supports optimism; nevertheless, I would argue that the scale and speed of AI disruption is qualitatively different from past transitions.', translation: 'Planteás un punto válido. Concedido que el precedente histórico apoya el optimismo; sin embargo, argumentaría que la escala y velocidad de la disrupción de la IA es cualitativamente diferente.' },
                  { speaker: 'B', text: 'While I acknowledge the scale is unprecedented, I maintain that adaptive education and retraining programmes can bridge the gap. The issue is political will, not technological inevitability.', translation: 'Si bien reconozco que la escala es sin precedentes, sostengo que la educación adaptativa y los programas de reentrenamiento pueden cerrar la brecha. El problema es la voluntad política, no la inevitabilidad tecnológica.' },
                ],
              },
            },
          ],
        },

        // ── 3. Abstract Concepts ──────────────────────────────────────────
        {
          id: 'abstract-concepts',
          icon: '💡',
          iconBg: '#ede4f5',
          title: 'Hablar de Conceptos Abstractos',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'En C1 te piden hablar de <strong>justicia, identidad, progreso, ética, libertad</strong>. La clave es combinar abstracción con ejemplos concretos, y usar estructuras que muestren que estás matizando tu pensamiento.',
              },
            },
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Definir:    ', text: 'Justice can be understood as... / Identity is often defined as...' },
                  { label: 'Matizar:    ', text: 'However, this definition fails to account for... / Yet this view is contested...' },
                  { label: 'Ejemplificar:', text: 'To illustrate this, consider... / A case in point is...' },
                  { label: 'Concluir:   ', text: 'Ultimately, what this reveals is... / The implication is that...' },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'Justice, at its core, implies that individuals are treated according to consistent and fair principles.', es: 'La justicia, en su esencia, implica que los individuos son tratados según principios consistentes y justos.', note: '→ definición con matiz' },
                { en: 'Yet this view is contested: what constitutes "fair" varies profoundly across cultures.', es: 'Sin embargo, esta visión es debatida: lo que constituye "justo" varía profundamente entre culturas.', note: '→ matización inmediata' },
                { en: 'To illustrate, consider the tension between individual freedom and collective responsibility during a public health crisis.', es: 'Para ilustrar, considera la tensión entre libertad individual y responsabilidad colectiva durante una crisis de salud pública.', note: '→ ejemplo concreto' },
                { en: 'What this reveals, ultimately, is that progress is not linear — it is contested, reversible, and culturally contingent.', es: 'Lo que esto revela, en última instancia, es que el progreso no es lineal — es disputado, reversible y culturalmente contingente.', note: '→ conclusión matizada' },
              ],
            },
          ],
        },

        // ── 4. Expressing Certainty & Doubt ──────────────────────────────
        {
          id: 'certainty-doubt',
          icon: '🎚️',
          iconBg: '#d0ebe7',
          title: 'Expresar Certeza y Duda con Sofisticación',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['Expresión', 'Nivel de certeza', 'Ejemplo'],
                rows: [
                  { en: 'It is beyond doubt that',       ipa: '100% — certeza absoluta',      es: 'It is beyond doubt that climate change is real.' },
                  { en: 'I would contend that',          ipa: '90% — postura firme',          es: 'I would contend that the policy has failed.' },
                  { en: 'It stands to reason that',      ipa: '85% — lógicamente esperable',  es: 'It stands to reason that investment will follow.' },
                  { en: 'The evidence suggests that',    ipa: '70% — respaldado por datos',   es: 'The evidence suggests a causal relationship.' },
                  { en: 'It would appear that',          ipa: '60% — impresión cautelosa',    es: 'It would appear that the situation is improving.' },
                  { en: 'It is conceivable that',        ipa: '40% — posibilidad especulativa', es: 'It is conceivable that this could change.' },
                  { en: 'One might speculate that',      ipa: '30% — especulación abierta',   es: 'One might speculate that other factors are at play.' },
                  { en: 'It remains to be seen whether', ipa: '?? — genuina incertidumbre',  es: 'It remains to be seen whether the plan will work.' },
                ],
              },
            },
          ],
        },

        // ── 5. Intercultural Communication ────────────────────────────────
        {
          id: 'intercultural',
          icon: '🌐',
          iconBg: '#fef3d0',
          title: 'Comunicación Intercultural',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'El inglés es una <strong>lingua franca</strong> — se usa entre personas de culturas muy distintas. El C1 implica entender que la comunicación efectiva no es solo gramática correcta, sino también conciencia cultural.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'neg',
                    title: 'QUÉ EVITAR',
                    items: [
                      'Humor que depende del contexto cultural local',
                      'Ironía y sarcasmo (fácil de malinterpretar)',
                      'Referencia a expresiones locales sin explicar',
                      'Asumir que "directo = rudo" en todas las culturas',
                      'Usar idioms muy específicos con no-nativos',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: 'QUÉ CULTIVAR',
                    items: [
                      'Parafrasear y verificar comprensión',
                      'Adaptar velocidad y complejidad al interlocutor',
                      'Preguntar con apertura: "How do you see this?"',
                      'Reconocer diferentes estilos de comunicación',
                      'Reformular cuando hay confusión, sin condescendencia',
                    ],
                  },
                ],
              },
            },
            {
              type: 'examples_grid',
              data: [
                { en: 'Just to make sure we\'re on the same page — what I mean is...', es: 'Solo para asegurarnos de estar de acuerdo — lo que quiero decir es...', note: '→ verificar comprensión con diplomacia' },
                { en: 'I appreciate that different perspectives exist on this — could you walk me through your reasoning?', es: 'Aprecio que existan distintas perspectivas — ¿podrías explicarme tu razonamiento?', note: '→ invitar sin imponer' },
                { en: 'Perhaps I\'m not expressing this clearly — let me try again.', es: 'Quizás no me estoy expresando con claridad — déjame intentarlo de nuevo.', note: '→ asumir responsabilidad comunicativa' },
              ],
            },
          ],
        },

        // ── 6. Presentations & Formal Contexts ────────────────────────────
        {
          id: 'presentations',
          icon: '📊',
          iconBg: '#ede4f5',
          title: 'Presentaciones y Contextos Formales',
          blocks: [
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Abrir:      ', text: 'I\'d like to begin by... / The purpose of this presentation is to...' },
                  { label: 'Estructurar:', text: 'I\'ll be covering three main points: firstly... / Moving on to...' },
                  { label: 'Evidenciar: ', text: 'As you can see from the data... / This graph illustrates...' },
                  { label: 'Transicionar:', text: 'Having established X, I\'d now like to turn to... / With that in mind,...' },
                  { label: 'Concluir:   ', text: 'To summarise the key points... / What this ultimately demonstrates is...' },
                  { label: 'Q&A:        ', text: 'That\'s an excellent question. / I\'d like to take that point further.' },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Q&A tras una presentación',
                lines: [
                  { speaker: 'A', speakerLabel: 'Q', text: 'You\'ve argued that automation benefits outweigh the costs — but doesn\'t that ignore the distributional effects? The benefits accrue to capital owners, not workers.', translation: 'Has argumentado que los beneficios de la automatización superan los costos — ¿pero eso no ignora los efectos distributivos? Los beneficios van a los dueños del capital, no a los trabajadores.' },
                  { speaker: 'B', speakerLabel: 'P', text: 'That\'s an excellent point, and I\'m glad you raised it. I should clarify that my argument does not assume benefits are automatically distributed equitably — that\'s precisely where policy intervention becomes essential.', translation: 'Es un punto excelente y me alegra que lo plantees. Debo aclarar que mi argumento no asume que los beneficios se distribuyen automáticamente de forma equitativa — es precisamente ahí donde la intervención política se vuelve esencial.' },
                  { speaker: 'A', speakerLabel: 'Q', text: 'So would you say the key variable is political will rather than technological capacity?', translation: '¿Entonces diría que la variable clave es la voluntad política más que la capacidad tecnológica?' },
                  { speaker: 'B', speakerLabel: 'P', text: 'I would. And I think that\'s actually a more optimistic framing — technology is neutral; what we do with it is a choice.', translation: 'Sí. Y creo que eso es en realidad un enfoque más optimista — la tecnología es neutral; lo que hacemos con ella es una elección.' },
                ],
              },
            },
          ],
        },

        // ── 7. Exercises ──────────────────────────────────────────────────
        {
          id: 'exercises-comm-c1',
          icon: '🎯',
          iconBg: '#d0ebe7',
          title: 'Ejercicios · Comunicación C1',
          blocks: [
            {
              type: 'speak_word',
              data: [
                { word: 'I would contend that the evidence strongly supports this conclusion.', translation: 'Sostendría que la evidencia respalda fuertemente esta conclusión.' },
                { word: 'Granted, there are limitations; nevertheless, the findings are significant.', translation: 'Concedido que hay limitaciones; sin embargo, los hallazgos son significativos.' },
                { word: 'What this ultimately reveals is a systemic failure of governance.', translation: 'Lo que esto revela en última instancia es un fracaso sistémico de gobernanza.' },
                { word: 'It stands to reason that sustained investment will yield long-term returns.', translation: 'Es lógico esperar que la inversión sostenida produzca retornos a largo plazo.' },
                { word: 'While I acknowledge the complexity, I maintain that action is necessary.', translation: 'Si bien reconozco la complejidad, sostengo que la acción es necesaria.' },
              ],
            },
            {
              type: 'dictation',
              data: [
                { sentence: 'The evidence suggests a correlation, albeit not a causal relationship.', translation: 'La evidencia sugiere una correlación, aunque no una relación causal.' },
                { sentence: 'I\'d like to take that point further — the implications extend beyond the immediate context.', translation: 'Me gustaría profundizar ese punto — las implicaciones se extienden más allá del contexto inmediato.' },
                { sentence: 'It remains to be seen whether the proposed reforms will address the underlying structural issues.', translation: 'Queda por ver si las reformas propuestas abordarán los problemas estructurales subyacentes.' },
                { sentence: 'With respect, I must challenge the premise on which that argument rests.', translation: 'Con el debido respeto, debo cuestionar la premisa en la que se basa ese argumento.' },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default communication;
