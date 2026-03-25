import type { Chapter } from '@/lib/types';

const communication: Chapter = {
  slug: 'communication',
  title: 'Funciones Comunicativas',
  description:
    'Aprende a usar el inglés en situaciones reales. Cada función incluye frases útiles y un diálogo modelo con traducción.',
  sections: [
    {
      id: 'communication',
      label: 'Comunicación',
      dotColor: 'var(--blue)',
      cards: [
        {
          id: 'intro',
          icon: '🙋',
          iconBg: '#d0ebe7',
          title: 'Presentarse y Presentar a Otros',
          blocks: [
            {
              type: 'examples_grid',
              data: [
                { en: 'My name is Maria.',          es: 'Me llamo María.' },
                { en: "I'm from Spain.",             es: 'Soy de España.' },
                { en: "I'm 28 years old.",           es: 'Tengo 28 años.' },
                { en: "I'm a student.",              es: 'Soy estudiante.' },
                { en: 'I work at a school.',         es: 'Trabajo en una escuela.' },
                { en: 'This is my friend, Carlos.',  es: 'Este es mi amigo, Carlos.' },
                { en: 'Nice to meet you!',           es: '¡Mucho gusto!' },
                { en: 'He is my brother.',           es: 'Él es mi hermano.' },
              ],
            },
            {
              type: 'dialogue',
              data: {
                title: '💬 Diálogo: Primera presentación',
                lines: [
                  { speaker: 'A', text: "Hello! My name is Sarah. What's your name?",  translation: 'Hola, me llamo Sarah. ¿Cómo te llamas?' },
                  { speaker: 'B', text: "Hi Sarah! I'm Carlos. Nice to meet you!",       translation: '¡Hola Sarah! Soy Carlos. ¡Encantado de conocerte!' },
                  { speaker: 'A', text: "Nice to meet you too! Where are you from?",    translation: '¡Igualmente! ¿De dónde eres?' },
                  { speaker: 'B', text: "I'm from Mexico. And you?",                    translation: 'Soy de México. ¿Y tú?' },
                  { speaker: 'A', text: "I'm from Canada. How old are you?",            translation: 'Soy de Canadá. ¿Cuántos años tienes?' },
                  { speaker: 'B', text: "I'm 25. I'm a teacher. What do you do?",      translation: 'Tengo 25. Soy maestro. ¿Y tú a qué te dedicas?' },
                  { speaker: 'A', text: "I'm a student. I study English!",              translation: 'Soy estudiante. ¡Estudio inglés!' },
                ],
              },
            },
          ],
        },

        {
          id: 'family2',
          icon: '🏠',
          iconBg: '#ede4f5',
          title: 'Describir tu Familia y tu Casa',
          blocks: [
            {
              type: 'formula_box',
              data: {
                lines: [
                  { label: 'Familia:', text: 'I have a big family. / My family is small.\n           I have two brothers and one sister.\n           My mother is 50 years old. She is a nurse.' },
                  { label: 'Casa:    ', text: 'I live in a house / apartment.\n           My house has 3 bedrooms and 2 bathrooms.\n           There is a big kitchen. / There are two windows.' },
                ],
              },
            },
            {
              type: 'pill_list',
              data: {
                color: 'purple',
                label: 'PARTES DE LA CASA — house vocabulary',
                items: [
                  { en: 'bedroom',    es: 'dormitorio' },
                  { en: 'kitchen',    es: 'cocina' },
                  { en: 'bathroom',   es: 'baño' },
                  { en: 'living room',es: 'sala' },
                  { en: 'garden',     es: 'jardín' },
                  { en: 'door',       es: 'puerta' },
                  { en: 'window',     es: 'ventana' },
                  { en: 'stairs',     es: 'escaleras' },
                ],
              },
            },
          ],
        },

        {
          id: 'routines',
          icon: '⏱️',
          iconBg: '#fef3d0',
          title: 'Hablar de Rutinas Simples',
          blocks: [
            {
              type: 'examples_grid',
              data: [
                { en: 'I wake up at 6:30 in the morning.',           es: 'Me despierto a las 6:30.',          note: '6:30 am' },
                { en: 'I have breakfast — eggs and coffee.',          es: 'Desayuno huevos y café.',            note: '7:00 am' },
                { en: 'I go to work by bus.',                         es: 'Voy al trabajo en bus.',             note: '8:00 am' },
                { en: 'I have lunch with my colleagues.',             es: 'Almuerzo con mis compañeros.',       note: '1:00 pm' },
                { en: 'I come home and watch TV.',                    es: 'Llego a casa y veo TV.',             note: '6:00 pm' },
                { en: 'I go to bed.',                                 es: 'Me voy a dormir.',                   note: '10:00 pm' },
              ],
            },
            {
              type: 'rule_block',
              data: {
                html: '💡 <strong>Frecuencia:</strong> always (siempre) → usually (normalmente) → often (frecuentemente) → sometimes (a veces) → never (nunca)<br><em>I <strong>always</strong> drink coffee. / She <strong>sometimes</strong> goes to the gym.</em>',
              },
            },
          ],
        },

        {
          id: 'prices',
          icon: '💰',
          iconBg: '#ddeaf5',
          title: 'Pedir y Dar Precios',
          blocks: [
            {
              type: 'examples_grid',
              data: [
                { en: 'How much is this?',        es: '¿Cuánto cuesta esto?' },
                { en: 'How much are these?',      es: '¿Cuánto cuestan estos?' },
                { en: "It's five dollars.",       es: 'Son cinco dólares.' },
                { en: "That's too expensive.",    es: 'Eso es muy caro.' },
                { en: "It's on sale / cheap.",    es: 'Está en oferta / es barato.' },
                { en: "I'll take it, please.",    es: 'Me lo llevo, por favor.' },
              ],
            },
            {
              type: 'dialogue',
              data: {
                title: '🛒 En la tienda — At the store',
                lines: [
                  { speaker: 'A', speakerLabel: 'C', text: 'Excuse me, how much is this bag?',         translation: 'Disculpe, ¿cuánto cuesta esta bolsa?' },
                  { speaker: 'B', speakerLabel: 'S', text: "It's twenty-five dollars.",                 translation: 'Son veinticinco dólares.' },
                  { speaker: 'A', speakerLabel: 'C', text: 'And this one? The red bag?',               translation: '¿Y esta? ¿La bolsa roja?' },
                  { speaker: 'B', speakerLabel: 'S', text: "That one is fifteen dollars. It's on sale!", translation: 'Esa es quince dólares. ¡Está en oferta!' },
                  { speaker: 'A', speakerLabel: 'C', text: "Great! I'll take the red one, please.",    translation: '¡Genial! Me llevo la roja, por favor.' },
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
