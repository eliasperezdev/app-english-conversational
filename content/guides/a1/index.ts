import type { LevelMeta } from '@/lib/types';

export const a1Meta: LevelMeta = {
  level: 'a1',
  label: 'A1 — Principiante',
  description:
    'El nivel A1 es el punto de partida. Aprenderás vocabulario esencial, gramática base, funciones comunicativas y pronunciación.',
  available: true,
  chapters: [
    {
      slug: 'vocabulary',
      title: 'Vocabulario Esencial',
      icon: '📚',
      description: 'Saludos, números, fechas, colores, familia y comida.',
      available: true,
    },
    {
      slug: 'grammar',
      title: 'Gramática Base',
      icon: '🔧',
      description: 'Verbo TO BE, artículos, pronombres, plurales y presente simple.',
      available: true,
    },
    {
      slug: 'communication',
      title: 'Funciones Comunicativas',
      icon: '💬',
      description: 'Presentarte, describir tu familia, hablar de rutinas y precios.',
      available: true,
      practice_route: 'shopping',
    },
    {
      slug: 'pronunciation',
      title: 'Pronunciación',
      icon: '🎵',
      description: 'Alfabeto, sonidos vocálicos y entonación en preguntas.',
      available: true,
    },
  ],
};
