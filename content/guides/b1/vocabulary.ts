import type { Chapter } from '@/lib/types';

const vocabulary: Chapter = {
  slug: 'vocabulary',
  title: 'Vocabulario B1',
  description:
    'En B1 el vocabulario deja de ser solo palabras sueltas. Aprendés grupos temáticos completos, verbos con múltiples usos y los conectores que hacen que tu inglés suene natural.',
  sections: [
    {
      id: 'vocabulary',
      label: 'Vocabulario',
      dotColor: 'var(--gold)',
      cards: [

        // ── 1. Work & Career ─────────────────────────────────────────────
        {
          id: 'work-career',
          icon: '💼',
          iconBg: '#ddeaf5',
          title: 'Trabajo y Carrera',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'job / position',   ipa: 'puesto / cargo',        es: 'I applied for a new position.' },
                  { en: 'salary / wage',    ipa: 'salario',               es: 'The salary is $50,000 a year.' },
                  { en: 'interview',        ipa: 'entrevista',            es: 'I have a job interview tomorrow.' },
                  { en: 'CV / résumé',      ipa: 'currículum',            es: 'Send your CV by email.' },
                  { en: 'deadline',         ipa: 'fecha límite',          es: 'The deadline is Friday.' },
                  { en: 'colleague',        ipa: 'colega / compañero',    es: 'My colleagues are very helpful.' },
                  { en: 'meeting',          ipa: 'reunión',               es: 'We have a meeting at 10am.' },
                  { en: 'promotion',        ipa: 'ascenso',               es: 'She got a promotion last month.' },
                  { en: 'resign / quit',    ipa: 'renunciar',             es: 'He resigned from his job.' },
                  { en: 'hire / fire',      ipa: 'contratar / despedir',  es: 'They hired two new developers.' },
                  { en: 'remote work',      ipa: 'trabajo remoto',        es: 'I work remotely three days a week.' },
                  { en: 'self-employed',    ipa: 'autónomo / freelance',  es: 'She\'s self-employed.' },
                ],
              },
            },
            {
              type: 'pill_list',
              data: {
                color: 'blue',
                label: 'FRASES CLAVE — job & work',
                items: [
                  { en: 'apply for a job',    es: 'postularse a un trabajo' },
                  { en: 'get a promotion',    es: 'conseguir un ascenso' },
                  { en: 'work overtime',      es: 'trabajar horas extra' },
                  { en: 'be in charge of',    es: 'estar a cargo de' },
                  { en: 'take a day off',     es: 'tomar un día libre' },
                  { en: 'meet a deadline',    es: 'cumplir un plazo' },
                ],
              },
            },
          ],
        },

        // ── 2. Travel & Transport ────────────────────────────────────────
        {
          id: 'travel-transport',
          icon: '✈️',
          iconBg: '#fef3d0',
          title: 'Viajes y Transporte',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Contexto'],
                rows: [
                  { en: 'book / reserve',      ipa: 'reservar',               es: 'Book the hotel in advance.' },
                  { en: 'luggage / baggage',   ipa: 'equipaje',               es: 'My luggage was lost.' },
                  { en: 'customs',             ipa: 'aduana',                 es: 'Go through customs.' },
                  { en: 'boarding pass',       ipa: 'tarjeta de embarque',    es: 'Show your boarding pass.' },
                  { en: 'departure / arrival', ipa: 'salida / llegada',       es: 'Check the departure time.' },
                  { en: 'delayed / cancelled', ipa: 'demorado / cancelado',   es: 'The flight was delayed by 2 hours.' },
                  { en: 'accommodation',       ipa: 'alojamiento',            es: 'We need to find accommodation.' },
                  { en: 'itinerary',           ipa: 'itinerario',             es: 'Send me the itinerary.' },
                  { en: 'travel insurance',    ipa: 'seguro de viaje',        es: 'Always get travel insurance.' },
                  { en: 'exchange rate',       ipa: 'tipo de cambio',         es: 'Check the exchange rate first.' },
                ],
              },
            },
          ],
        },

        // ── 3. Health ────────────────────────────────────────────────────
        {
          id: 'health',
          icon: '🏥',
          iconBg: '#fce8e4',
          title: 'Salud',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'symptom',          ipa: 'síntoma',              es: 'What are your symptoms?' },
                  { en: 'prescription',     ipa: 'receta médica',        es: 'You need a prescription for this.' },
                  { en: 'treatment',        ipa: 'tratamiento',          es: 'The treatment takes 2 weeks.' },
                  { en: 'surgery',          ipa: 'cirugía',              es: 'He had heart surgery.' },
                  { en: 'allergy',          ipa: 'alergia',              es: 'I have a peanut allergy.' },
                  { en: 'recover',          ipa: 'recuperarse',          es: 'She\'s recovering well.' },
                  { en: 'appointment',      ipa: 'turno / cita',         es: 'Make an appointment with your GP.' },
                  { en: 'emergency',        ipa: 'emergencia',           es: 'Call emergency services.' },
                  { en: 'side effects',     ipa: 'efectos secundarios',  es: 'This medicine has side effects.' },
                  { en: 'check-up',         ipa: 'control médico',       es: 'I need a routine check-up.' },
                ],
              },
            },
          ],
        },

        // ── 4. Education ─────────────────────────────────────────────────
        {
          id: 'education',
          icon: '🎓',
          iconBg: '#d0ebe7',
          title: 'Educación',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'degree',          ipa: 'título universitario', es: 'She has a degree in law.' },
                  { en: 'scholarship',     ipa: 'beca',                 es: 'He won a full scholarship.' },
                  { en: 'tuition',         ipa: 'matrícula / cuota',    es: 'Tuition fees are very high.' },
                  { en: 'assignment',      ipa: 'tarea / trabajo',      es: 'The assignment is due Monday.' },
                  { en: 'thesis',          ipa: 'tesis',                es: 'She\'s writing her thesis.' },
                  { en: 'graduate',        ipa: 'graduarse',            es: 'He graduated last June.' },
                  { en: 'fail / pass',     ipa: 'reprobar / aprobar',   es: 'Did you pass the exam?' },
                  { en: 'take a course',   ipa: 'tomar un curso',       es: 'I\'m taking an online course.' },
                  { en: 'lecture',         ipa: 'conferencia / clase',  es: 'The lecture was very interesting.' },
                  { en: 'campus',          ipa: 'campus universitario', es: 'The campus is huge.' },
                ],
              },
            },
          ],
        },

        // ── 5. Technology ────────────────────────────────────────────────
        {
          id: 'technology',
          icon: '💻',
          iconBg: '#ede4f5',
          title: 'Tecnología',
          blocks: [
            {
              type: 'pill_list',
              data: {
                color: 'purple',
                label: 'TECH VOCABULARY',
                items: [
                  { en: 'device',         es: 'dispositivo' },
                  { en: 'software',       es: 'software / programa' },
                  { en: 'update',         es: 'actualización' },
                  { en: 'password',       es: 'contraseña' },
                  { en: 'download',       es: 'descargar' },
                  { en: 'upload',         es: 'subir / cargar' },
                  { en: 'connection',     es: 'conexión' },
                  { en: 'crash',          es: 'bloquearse / caerse' },
                  { en: 'backup',         es: 'copia de seguridad' },
                  { en: 'screen',         es: 'pantalla' },
                  { en: 'storage',        es: 'almacenamiento' },
                  { en: 'username',       es: 'nombre de usuario' },
                  { en: 'log in / out',   es: 'iniciar / cerrar sesión' },
                  { en: 'wireless',       es: 'inalámbrico' },
                  { en: 'notification',   es: 'notificación' },
                ],
              },
            },
          ],
        },

        // ── 6. Relationships ─────────────────────────────────────────────
        {
          id: 'relationships',
          icon: '🤝',
          iconBg: '#fef3d0',
          title: 'Relaciones Personales',
          blocks: [
            {
              type: 'vocab_table',
              data: {
                headers: ['English', 'Español', 'Ejemplo'],
                rows: [
                  { en: 'trust',           ipa: 'confianza / confiar',   es: 'I trust her completely.' },
                  { en: 'support',         ipa: 'apoyar / apoyo',        es: 'My family always supports me.' },
                  { en: 'argue',           ipa: 'discutir / pelear',     es: 'We argued about money.' },
                  { en: 'apologize',       ipa: 'disculparse',           es: 'He should apologize.' },
                  { en: 'forgive',         ipa: 'perdonar',              es: 'Can you forgive me?' },
                  { en: 'jealous',         ipa: 'celoso',                es: 'She gets jealous easily.' },
                  { en: 'break up',        ipa: 'terminar una relación', es: 'They broke up last month.' },
                  { en: 'get along with',  ipa: 'llevarse bien con',     es: 'I get along well with my boss.' },
                  { en: 'have a lot in common', ipa: 'tener mucho en común', es: 'We have a lot in common.' },
                  { en: 'long-distance',   ipa: 'a larga distancia',     es: 'It\'s a long-distance relationship.' },
                ],
              },
            },
          ],
        },

        // ── 7. Make / Do / Take / Get / Give / Have ──────────────────────
        {
          id: 'multi-verbs',
          icon: '🔧',
          iconBg: '#d0ebe7',
          title: 'Verbos Multiuso: make, do, take, get, give, have',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Estos verbos tienen <strong>docenas de usos</strong> en inglés. No se traducen siempre igual — hay que aprenderlos en combinación con sustantivos.',
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'MAKE',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      'make a decision',
                      'make a mistake',
                      'make money',
                      'make a phone call',
                      'make an effort',
                      'make a suggestion',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'DO',
                    color: '#d0ebe7',
                    titleColor: '#154035',
                    items: [
                      'do homework',
                      'do exercise',
                      'do the dishes',
                      'do research',
                      'do your best',
                      'do a favor',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'TAKE',
                    color: '#ede4f5',
                    titleColor: '#6b4c8a',
                    items: [
                      'take a photo',
                      'take a break',
                      'take medicine',
                      'take a shower',
                      'take an exam',
                      'take a risk',
                    ],
                  },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'custom',
                    title: 'GET',
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      'get a job',
                      'get better / worse',
                      'get married',
                      'get lost',
                      'get dressed',
                      'get to (a place)',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'GIVE',
                    color: '#ddeaf5',
                    titleColor: '#1a3a5c',
                    items: [
                      'give advice',
                      'give a presentation',
                      'give up (= phrasal)',
                      'give someone a call',
                      'give permission',
                    ],
                  },
                  {
                    type: 'custom',
                    title: 'HAVE',
                    color: '#f7f2fd',
                    titleColor: '#6b4c8a',
                    items: [
                      'have a meeting',
                      'have breakfast/lunch',
                      'have a good time',
                      'have a problem',
                      'have an argument',
                    ],
                  },
                ],
              },
            },
          ],
        },

        // ── 8. Connectors ────────────────────────────────────────────────
        {
          id: 'connectors',
          icon: '🔗',
          iconBg: '#fce8e4',
          title: 'Conectores: cómo sonar natural',
          blocks: [
            {
              type: 'rule_block',
              data: {
                html: 'Los <strong>conectores</strong> son las palabras que unen ideas. Son la diferencia entre sonar como un principiante y sonar fluido. Aprenderlos en contexto es clave.',
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Conector', 'Uso', 'Ejemplo'],
                rows: [
                  { en: 'however',     ipa: 'sin embargo / pero',     es: 'I liked the film. However, it was too long.' },
                  { en: 'although',    ipa: 'aunque',                 es: 'Although it was cold, we went out.' },
                  { en: 'therefore',   ipa: 'por lo tanto',           es: 'She studied hard; therefore, she passed.' },
                  { en: 'moreover',    ipa: 'además / es más',        es: 'It\'s fast. Moreover, it\'s cheap.' },
                  { en: 'on the other hand', ipa: 'por otro lado',   es: 'I like the city. On the other hand, it\'s noisy.' },
                  { en: 'in addition', ipa: 'además',                 es: 'In addition, we need to check the budget.' },
                  { en: 'as a result', ipa: 'como resultado',         es: 'As a result, we had to cancel the trip.' },
                  { en: 'despite',     ipa: 'a pesar de',             es: 'Despite the rain, we had fun.' },
                  { en: 'unless',      ipa: 'a menos que',            es: 'I won\'t go unless you come too.' },
                  { en: 'whereas',     ipa: 'mientras que / en cambio', es: 'I like tea, whereas she prefers coffee.' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '🎯 <strong>Diferencia clave:</strong><br><strong>although / even though</strong> van con sujeto + verbo: <em>Although it was cold...</em><br><strong>despite / in spite of</strong> van con sustantivo o gerundio: <em>Despite the cold... / Despite being cold...</em>',
              },
            },
          ],
        },

        // ── 9. Exercises ─────────────────────────────────────────────────
        {
          id: 'exercises-vocab-b1',
          icon: '🎯',
          iconBg: '#fef3d0',
          title: 'Ejercicios Interactivos · Vocabulario B1',
          blocks: [
            {
              type: 'fill_blank',
              data: [
                { sentence: 'She ___ for three jobs last week.', answers: ['applied'], hint: 'apply for a job — postularse' },
                { sentence: 'My flight was ___ by two hours.', answers: ['delayed'], hint: 'delayed = demorado' },
                { sentence: 'I need to ___ a decision soon.', answers: ['make'], hint: 'make a decision — tomar una decisión' },
                { sentence: '___ the cold weather, we went to the beach.', answers: ['Despite', 'In spite of'], hint: 'a pesar de + sustantivo' },
                { sentence: 'He ___ his job because the salary was too low.', answers: ['quit', 'resigned from'], hint: 'quit / resign = renunciar' },
              ],
            },
            {
              type: 'matching',
              data: {
                pairs: [
                  { en: 'make a mistake', es: 'cometer un error' },
                  { en: 'do research', es: 'hacer una investigación' },
                  { en: 'take a break', es: 'tomar un descanso' },
                  { en: 'get lost', es: 'perderse' },
                  { en: 'however', es: 'sin embargo' },
                  { en: 'therefore', es: 'por lo tanto' },
                ],
              },
            },
            {
              type: 'flashcard',
              data: [
                { en: 'deadline', es: 'fecha límite — "The deadline is Friday."' },
                { en: 'although', es: 'aunque — "Although it was late, I called."' },
                { en: 'get along with', es: 'llevarse bien con — "I get along with my team."' },
                { en: 'scholarship', es: 'beca — "He won a full scholarship."' },
                { en: 'moreover', es: 'además / es más — agrega información positiva' },
                { en: 'side effects', es: 'efectos secundarios — de medicamentos' },
                { en: 'self-employed', es: 'autónomo — trabaja por cuenta propia' },
                { en: 'whereas', es: 'mientras que / en cambio — contrasta dos ideas' },
              ],
            },
            {
              type: 'speak_word',
              data: [
                { word: 'I applied for a new job last week.', translation: 'Me postulé para un nuevo trabajo la semana pasada.' },
                { word: 'Despite the rain, we had a great time.', translation: 'A pesar de la lluvia, lo pasamos genial.' },
                { word: 'She has a degree in economics.', translation: 'Tiene un título en economía.' },
                { word: 'I need to make a decision soon.', translation: 'Necesito tomar una decisión pronto.' },
              ],
            },
          ],
        },

        // ── 10. Quiz ─────────────────────────────────────────────────────
        {
          id: 'quiz-vocab-b1',
          icon: '⚡',
          iconBg: '#fef3d0',
          title: 'Mini-Quiz · Vocabulario B1',
          blocks: [
            {
              type: 'quiz',
              data: [
                { q: '"Salary" significa:', opts: ['salario', 'entrevista', 'ascenso', 'jefe'], ans: 0 },
                { q: 'Completa: "She ___ a decision after thinking for days."', opts: ['did', 'took', 'made', 'had'], ans: 2 },
                { q: '"However" se usa para:', opts: ['agregar información', 'contrastar ideas', 'dar ejemplos', 'resumir'], ans: 1 },
                { q: '"Although" va seguido de:', opts: ['sustantivo', 'sujeto + verbo', 'gerundio', 'infinitivo'], ans: 1 },
                { q: '"Get along with" significa:', opts: ['llegar a tiempo', 'llevarse bien', 'conseguir algo', 'continuar'], ans: 1 },
                { q: '"Deadline" significa:', opts: ['línea muerta', 'fecha límite', 'fin de semana', 'hora de cierre'], ans: 1 },
                { q: 'Completa: "___ the cold, she went swimming."', opts: ['Although', 'However', 'Despite', 'Therefore'], ans: 2 },
                { q: '"Self-employed" es alguien que:', opts: ['trabaja en una empresa', 'trabaja por cuenta propia', 'está desempleado', 'trabaja de noche'], ans: 1 },
              ],
            },
          ],
        },

      ],
    },
  ],
};

export default vocabulary;
