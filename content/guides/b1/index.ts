import type { LevelMeta } from '@/lib/types';

export const b1Meta: LevelMeta = {
  level: 'b1',
  label: 'B1 — Intermedio',
  description:
    'En B1 podés mantener conversaciones sobre temas cotidianos, expresar opiniones, hablar del pasado y del futuro, y entender el inglés natural con contracciones y ritmo.',
  available: true,
  chapters: [
    {
      slug: 'vocabulary',
      title: 'Vocabulario B1',
      icon: '📚',
      description: 'Trabajo, viajes, salud, tecnología, conectores y verbos multiuso.',
      available: true,
    },
    {
      slug: 'grammar',
      title: 'Gramática B1',
      icon: '🔧',
      description: 'Tiempos verbales, modales, voz pasiva, condicionales y phrasal verbs.',
      available: true,
    },
    {
      slug: 'communication',
      title: 'Funciones Comunicativas B1',
      icon: '💬',
      description: 'Dar opiniones, hablar de experiencias, hacer planes y contar historias.',
      available: true,
      practice_route: 'travel',
    },
    {
      slug: 'pronunciation',
      title: 'Pronunciación B1',
      icon: '🎵',
      description: 'Schwa, word stress, contracciones naturales y ritmo del inglés.',
      available: true,
    },
  ],
};
