import type { Chapter } from '@/lib/types';

const communication: Chapter = {
  slug: 'communication',
  title: 'Funciones Comunicativas A2',
  description:
    'Aprende a comunicarte en situaciones cotidianas más complejas: hablar del pasado, hacer planes, orientarte en la ciudad, ir al médico y hacer compras.',
  sections: [
    {
      id: 'communication',
      label: 'Comunicación',
      dotColor: 'var(--blue)',
      cards: [
        {
          id: 'past-experiences',
          icon: '📖',
          iconBg: '#fce8e4',
          title: 'Hablar de Experiencias Pasadas',
          blocks: [
            {
              type: 'examples_grid',
              data: [
                { en: 'I went to Paris last year.',           es: 'Fui a París el año pasado.',              note: 'went = pasado de go' },
                { en: 'We had a great time.',                 es: 'Lo pasamos genial.',                      note: 'had = pasado de have' },
                { en: 'I studied English at school.',         es: 'Estudié inglés en la escuela.',           note: 'studied = pasado regular' },
                { en: 'Did you enjoy the trip?',              es: '¿Disfrutaste el viaje?',                  note: 'pregunta en pasado' },
                { en: 'Yes, it was fantastic!',               es: 'Sí, ¡fue fantástico!',                   note: 'was = pasado de is' },
                { en: 'When did you learn to drive?',         es: '¿Cuándo aprendiste a manejar?',           note: 'When + did + sujeto + verbo' },
                { en: 'I learned two years ago.',             es: 'Aprendí hace dos años.',                  note: 'ago = hace (tiempo)' },
                { en: "I didn't like it at first.",           es: 'Al principio no me gustó.',               note: "didn't = did not" },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '⏱️ <strong>Expresiones de tiempo pasado:</strong><br>• <em>yesterday</em> → ayer<br>• <em>last night / week / month / year</em> → anoche / la semana / el mes / el año pasado<br>• <em>two days / years ago</em> → hace dos días / años<br>• <em>in 2020</em> → en 2020<br>• <em>when I was a child</em> → cuando era niño/a',
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: Hablando del fin de semana',
                lines: [
                  { speaker: 'A', text: 'How was your weekend?',                         translation: '¿Cómo estuvo tu fin de semana?' },
                  { speaker: 'B', text: 'It was great! I went to a concert on Saturday.', translation: '¡Estuvo genial! Fui a un concierto el sábado.' },
                  { speaker: 'A', text: 'Really? Who did you see?',                       translation: '¿De verdad? ¿A quién fuiste a ver?' },
                  { speaker: 'B', text: 'A local band. They were amazing!',               translation: 'Una banda local. ¡Fueron increíbles!' },
                  { speaker: 'A', text: 'Did you go alone?',                              translation: '¿Fuiste solo/a?' },
                  { speaker: 'B', text: 'No, I went with my friends. We had so much fun.', translation: 'No, fui con mis amigos. Nos divertimos muchísimo.' },
                  { speaker: 'A', text: 'Sounds amazing! I stayed home and watched films.', translation: '¡Suena increíble! Yo me quedé en casa y vi películas.' },
                ],
              },
            },
          ],
        },

        {
          id: 'invitations',
          icon: '🎉',
          iconBg: '#fef3d0',
          title: 'Hacer, Aceptar y Rechazar Invitaciones',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'inter',
                    title: '📨 INVITAR',
                    items: [
                      '<em>Would you like to come?</em>',
                      '<em>Do you want to join us?</em>',
                      '<em>Are you free on Saturday?</em>',
                      '<em>How about going to the cinema?</em>',
                      '<em>Why don\'t we have dinner?</em>',
                      '<em>I\'d like to invite you to…</em>',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: '✅ ACEPTAR',
                    items: [
                      '<em>That sounds great!</em>',
                      '<em>I\'d love to!</em>',
                      '<em>Sure, why not?</em>',
                      '<em>That\'s a great idea!</em>',
                      '<em>Count me in!</em>',
                      '<em>I\'ll be there!</em>',
                    ],
                  },
                  {
                    type: 'neg',
                    title: '❌ RECHAZAR (con disculpa)',
                    items: [
                      '<em>I\'m sorry, I can\'t.</em>',
                      '<em>I\'m afraid I\'m busy.</em>',
                      '<em>I have other plans.</em>',
                      '<em>Maybe next time?</em>',
                      '<em>That\'s a shame, but…</em>',
                      '<em>I\'d love to, but I can\'t.</em>',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '🎬 Diálogo: Invitación al cine',
                lines: [
                  { speaker: 'A', text: "Hey! Are you free this Friday evening?",              translation: '¡Hola! ¿Estás libre este viernes por la noche?' },
                  { speaker: 'B', text: "I think so. Why?",                                     translation: 'Creo que sí. ¿Por qué?' },
                  { speaker: 'A', text: "Would you like to go to the cinema? There's a new film.", translation: '¿Te gustaría ir al cine? Hay una película nueva.' },
                  { speaker: 'B', text: "That sounds great! What time does it start?",          translation: '¡Suena genial! ¿A qué hora empieza?' },
                  { speaker: 'A', text: "At 8pm. We can have dinner first.",                    translation: 'A las 8pm. Podemos cenar antes.' },
                  { speaker: 'B', text: "I'd love to! Where shall we meet?",                    translation: '¡Me encantaría! ¿Dónde quedamos?' },
                  { speaker: 'A', text: "Let's meet at the cinema entrance at 7pm.",            translation: 'Quedemos en la entrada del cine a las 7pm.' },
                ],
              },
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Diferencia clave:</strong><br>• <em><strong>Do you want to…?</strong></em> — informal, entre amigos<br>• <em><strong>Would you like to…?</strong></em> — más educado/formal<br><br>Siempre rechaza una invitación con una <strong>disculpa</strong> para ser amable: <em>"I\'m sorry, I can\'t make it this time. Maybe next week?"</em>',
              },
            },
          ],
        },

        {
          id: 'directions',
          icon: '🗺️',
          iconBg: '#d0ebe7',
          title: 'Pedir Indicaciones y Orientarse',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'inter',
                    title: '❓ PEDIR INDICACIONES',
                    items: [
                      '<em>Excuse me, how do I get to…?</em>',
                      '<em>Could you tell me the way to…?</em>',
                      '<em>Where is the nearest…?</em>',
                      '<em>Is it far from here?</em>',
                      '<em>How long does it take?</em>',
                      '<em>Am I going the right way?</em>',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: '➡️ DAR INDICACIONES',
                    items: [
                      '<em><strong>Turn left/right</strong> at the lights.</em>',
                      '<em><strong>Go straight on</strong> for two blocks.</em>',
                      '<em><strong>Take the first</strong> left/right.</em>',
                      '<em>It\'s <strong>on the corner</strong> of…</em>',
                      '<em>It\'s <strong>opposite</strong> the bank.</em>',
                      '<em>It\'s about <strong>five minutes</strong> away.</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: '📍 PREPOSICIONES',
                    color: '#fef3d0',
                    titleColor: '#7a5500',
                    items: [
                      '<strong>next to</strong> — al lado de',
                      '<strong>opposite</strong> — enfrente de',
                      '<strong>between</strong> — entre',
                      '<strong>on the corner</strong> — en la esquina',
                      '<strong>at the end of</strong> — al final de',
                      '<strong>past</strong> — pasando',
                    ],
                  },
                ],
              },
            },
            {
              type: 'vocab_table',
              data: {
                headers: ['Expresión', 'Significado', 'Ejemplo'],
                rows: [
                  { en: 'Turn left',       ipa: 'Girar a la izquierda', es: 'Turn left at the traffic lights.' },
                  { en: 'Turn right',      ipa: 'Girar a la derecha',   es: 'Turn right at the junction.'      },
                  { en: 'Go straight on',  ipa: 'Sigue recto',          es: 'Go straight on for 200 metres.'   },
                  { en: 'Take the first',  ipa: 'Toma la primera',      es: 'Take the first right.'            },
                  { en: 'Cross the road',  ipa: 'Cruza la calle',       es: 'Cross the road at the lights.'    },
                  { en: 'Pass the church', ipa: 'Pasa la iglesia',      es: 'Pass the church and turn left.'   },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '🏥 Diálogo: ¿Cómo llego al hospital?',
                lines: [
                  { speaker: 'A', text: 'Excuse me! How do I get to the hospital?',           translation: '¡Disculpe! ¿Cómo llego al hospital?' },
                  { speaker: 'B', text: 'Sure! Go straight on for two blocks.',                translation: 'Claro. Siga recto dos cuadras.' },
                  { speaker: 'A', text: 'And then?',                                           translation: '¿Y luego?' },
                  { speaker: 'B', text: 'Then turn left at the traffic lights.',               translation: 'Luego gire a la izquierda en el semáforo.' },
                  { speaker: 'A', text: 'Is it far from here?',                                translation: '¿Está lejos de aquí?' },
                  { speaker: 'B', text: "Not really. It's about ten minutes on foot.",         translation: 'No mucho. Son unos diez minutos a pie.' },
                  { speaker: 'A', text: "It's opposite the park, isn't it?",                   translation: '¿Está enfrente del parque, verdad?' },
                  { speaker: 'B', text: "Yes, exactly. You can't miss it — it's a big building.", translation: 'Sí, exacto. No tiene pérdida — es un edificio grande.' },
                ],
              },
            },
          ],
        },

        {
          id: 'future-plans',
          icon: '🔮',
          iconBg: '#ede4f5',
          title: 'Hablar de Planes Futuros',
          blocks: [
            {
              type: 'examples_grid',
              data: [
                { en: "I'm going to travel to London next summer.",  es: 'Voy a viajar a Londres el próximo verano.',      note: 'going to = plan decidido' },
                { en: "We're going to have a party this Saturday.",  es: 'Vamos a tener una fiesta este sábado.',          note: 'plan concreto' },
                { en: "She's going to start a new job next month.",  es: 'Ella va a empezar un trabajo nuevo el mes que viene.', note: 'intención' },
                { en: 'What are you going to do this weekend?',      es: '¿Qué vas a hacer este fin de semana?',           note: 'pregunta sobre planes' },
                { en: "I'm meeting my friends tonight.",             es: 'Quedo con mis amigos esta noche.',               note: 'presente continuo = plan inmediato' },
                { en: 'I hope to visit my family soon.',             es: 'Espero visitar a mi familia pronto.',            note: 'hope to = deseo/esperanza' },
                { en: 'I plan to save money this year.',             es: 'Planeo ahorrar dinero este año.',                note: 'plan to = intención' },
                { en: "After work, I'm going to go to the gym.",     es: 'Después del trabajo, voy a ir al gimnasio.',     note: 'plan del día' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '⏰ <strong>Palabras clave del futuro:</strong><br><em>tomorrow, the day after tomorrow, this evening/weekend, next week/month/year, in the future, soon, in two days</em><br><br>💡 <strong>Asking about plans:</strong><br>• <em>What are your <strong>plans</strong> for the weekend?</em><br>• <em>What are you <strong>going to do</strong> tonight?</em><br>• <em>Are you doing anything <strong>special</strong> next week?</em>',
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '🌴 Diálogo: Planes para el verano',
                lines: [
                  { speaker: 'A', text: "Do you have any plans for the summer?",              translation: '¿Tienes algún plan para el verano?' },
                  { speaker: 'B', text: "Yes! I'm going to travel to Italy for two weeks.",   translation: 'Sí. Voy a viajar a Italia durante dos semanas.' },
                  { speaker: 'A', text: "That sounds amazing! Are you going alone?",          translation: '¡Suena increíble! ¿Vas a ir solo/a?' },
                  { speaker: 'B', text: "No, I'm going with my partner. We're going to visit Rome and Florence.", translation: 'No, voy con mi pareja. Vamos a visitar Roma y Florencia.' },
                  { speaker: 'A', text: "What about work?",                                   translation: '¿Y el trabajo?' },
                  { speaker: 'B', text: "I'm going to take two weeks off. What about you?",  translation: 'Voy a tomar dos semanas de vacaciones. ¿Y tú?' },
                  { speaker: 'A', text: "I'm not going to travel. I'm going to do a course.", translation: 'No voy a viajar. Voy a hacer un curso.' },
                ],
              },
            },
          ],
        },

        {
          id: 'health',
          icon: '🏥',
          iconBg: '#fce8e4',
          title: 'Síntomas y Ayuda Médica',
          blocks: [
            {
              type: 'pill_list',
              data: {
                color: 'coral',
                label: 'SÍNTOMAS COMUNES — Common symptoms',
                items: [
                  { en: 'I have a headache',       es: 'Me duele la cabeza'     },
                  { en: 'I have a stomachache',    es: 'Me duele el estómago'   },
                  { en: 'I have a sore throat',    es: 'Me duele la garganta'   },
                  { en: 'I have a cold',           es: 'Tengo un resfriado'     },
                  { en: 'I have a fever',          es: 'Tengo fiebre'           },
                  { en: 'I feel dizzy',            es: 'Me siento mareado/a'    },
                  { en: 'I feel sick / nauseous',  es: 'Tengo náuseas'          },
                  { en: 'I can\'t sleep',          es: 'No puedo dormir'        },
                  { en: 'I\'ve hurt my back',      es: 'Me he hecho daño en la espalda' },
                ],
              },
            },
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'inter',
                    title: '🩺 EN LA CONSULTA',
                    items: [
                      '<em>I\'d like to see a doctor.</em>',
                      '<em>I need to make an appointment.</em>',
                      '<em>I\'ve been feeling sick for three days.</em>',
                      '<em>It started yesterday morning.</em>',
                      '<em>The pain is here / in my chest.</em>',
                      '<em>Is it serious?</em>',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: '💊 CONSEJO MÉDICO',
                    items: [
                      '<em>You should rest.</em>',
                      '<em>Take this medicine twice a day.</em>',
                      '<em>Drink plenty of water.</em>',
                      '<em>You need to stay in bed.</em>',
                      '<em>Come back in a week.</em>',
                      '<em>It\'s nothing serious.</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: '🏥 VOCABULARIO MÉDICO',
                    color: '#fce8e4',
                    titleColor: '#7a2010',
                    items: [
                      '<strong>prescription</strong> — receta',
                      '<strong>medicine/tablets</strong> — medicina/pastillas',
                      '<strong>appointment</strong> — cita',
                      '<strong>thermometer</strong> — termómetro',
                      '<strong>allergy</strong> — alergia',
                      '<strong>emergency</strong> — emergencia',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '🩺 Diálogo: En el médico',
                lines: [
                  { speaker: 'A', speakerLabel: 'D', text: 'Good morning. How can I help you?',           translation: 'Buenos días. ¿En qué puedo ayudarle?' },
                  { speaker: 'B', speakerLabel: 'P', text: "I don't feel well. I have a sore throat and a headache.", translation: 'No me encuentro bien. Me duele la garganta y la cabeza.' },
                  { speaker: 'A', speakerLabel: 'D', text: 'How long have you had these symptoms?',       translation: '¿Cuánto tiempo lleva con estos síntomas?' },
                  { speaker: 'B', speakerLabel: 'P', text: 'Since yesterday morning. I also have a fever.', translation: 'Desde ayer por la mañana. También tengo fiebre.' },
                  { speaker: 'A', speakerLabel: 'D', text: 'Let me take a look. Open your mouth, please.', translation: 'Déjeme echar un vistazo. Abra la boca, por favor.' },
                  { speaker: 'B', speakerLabel: 'P', text: 'Is it serious?',                              translation: '¿Es grave?' },
                  { speaker: 'A', speakerLabel: 'D', text: "No, it's a cold. You should rest and drink plenty of fluids. Here's a prescription.", translation: 'No, es un resfriado. Debería descansar y beber muchos líquidos. Aquí tiene una receta.' },
                ],
              },
            },
          ],
        },

        {
          id: 'shopping',
          icon: '🛒',
          iconBg: '#ddeaf5',
          title: 'Compras y Transacciones',
          blocks: [
            {
              type: 'grammar_cols',
              data: {
                columns: [
                  {
                    type: 'inter',
                    title: '🛍️ COMO CLIENTE',
                    items: [
                      '<em>I\'m just looking, thanks.</em>',
                      '<em>How much does this cost?</em>',
                      '<em>Do you have this in a bigger size?</em>',
                      '<em>Can I try this on?</em>',
                      '<em>Have you got this in blue?</em>',
                      '<em>Can I get a receipt, please?</em>',
                      '<em>Can I pay by card?</em>',
                      '<em>I\'d like to return this.</em>',
                    ],
                  },
                  {
                    type: 'affirm',
                    title: '🏪 COMO VENDEDOR/A',
                    items: [
                      '<em>Can I help you?</em>',
                      '<em>We have it in small, medium and large.</em>',
                      '<em>The changing rooms are over there.</em>',
                      '<em>It\'s on sale — 20% off.</em>',
                      '<em>That\'ll be fifteen pounds.</em>',
                      '<em>How would you like to pay?</em>',
                      '<em>Here\'s your receipt.</em>',
                      '<em>Do you have a loyalty card?</em>',
                    ],
                  },
                  {
                    type: 'custom',
                    title: '💰 VOCABULARIO',
                    color: '#ddeaf5',
                    titleColor: '#2c5f8a',
                    items: [
                      '<strong>price / cost</strong> — precio',
                      '<strong>discount / sale</strong> — descuento',
                      '<strong>receipt</strong> — recibo',
                      '<strong>cash / card</strong> — efectivo/tarjeta',
                      '<strong>size</strong> — talla/tamaño',
                      '<strong>exchange</strong> — cambiar',
                      '<strong>refund</strong> — reembolso',
                      '<strong>fitting room</strong> — probador',
                    ],
                  },
                ],
              },
            },
            {
              type: 'dialogue',
              data: {
                title: '👕 Diálogo: En la tienda de ropa',
                lines: [
                  { speaker: 'A', speakerLabel: 'S', text: 'Hello! Can I help you?',                       translation: '¡Hola! ¿Le puedo ayudar?' },
                  { speaker: 'B', speakerLabel: 'C', text: "Yes, I'm looking for a jacket. Something for work.", translation: 'Sí, busco una chaqueta. Algo para el trabajo.' },
                  { speaker: 'A', speakerLabel: 'S', text: 'What size are you?',                           translation: '¿Qué talla tiene?' },
                  { speaker: 'B', speakerLabel: 'C', text: 'Medium, usually. How much is this one?',       translation: 'Normalmente mediana. ¿Cuánto cuesta esta?' },
                  { speaker: 'A', speakerLabel: 'S', text: "It's £45. It's on sale — it was £60.",         translation: 'Son 45 libras. Está rebajada, antes eran 60.' },
                  { speaker: 'B', speakerLabel: 'C', text: 'Can I try it on?',                             translation: '¿Me la puedo probar?' },
                  { speaker: 'A', speakerLabel: 'S', text: "Of course! The fitting rooms are on the left.", translation: 'Por supuesto. Los probadores están a la izquierda.' },
                  { speaker: 'B', speakerLabel: 'C', text: "I'll take it. Can I pay by card?",             translation: 'Me la llevo. ¿Puedo pagar con tarjeta?' },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default communication;
