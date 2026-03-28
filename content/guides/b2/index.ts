import type { LevelMeta } from '@/lib/types';

export const b2Meta: LevelMeta = {
  level: 'b2',
  label: 'B2 — Intermedio Alto',
  description:
    'En B2 podés debatir, argumentar, especular y negociar con precisión. Dominás los tiempos verbales complejos, el reported speech, las estructuras formales y el vocabulario para hablar de temas globales.',
  available: true,
  chapters: [
    {
      slug: 'vocabulary',
      title: 'Vocabulario B2',
      icon: '📚',
      description: 'Negocios, medio ambiente, sociedad, falsos amigos, collocations e idioms.',
      available: true,
    },
    {
      slug: 'grammar',
      title: 'Gramática B2',
      icon: '🔧',
      description: 'Pasado perfecto, condicionales 2 y 3, reported speech, wish, voz pasiva avanzada e inversión.',
      available: true,
    },
    {
      slug: 'communication',
      title: 'Funciones Comunicativas B2',
      icon: '💬',
      description: 'Argumentar, especular, negociar, hablar de tendencias y resumir ideas.',
      available: true,
      practice_route: 'environment',
    },
    {
      slug: 'pronunciation',
      title: 'Pronunciación B2',
      icon: '🎵',
      description: 'Linked speech, elision, assimilation, entonación y British vs American English.',
      available: true,
    },
  ],
};
