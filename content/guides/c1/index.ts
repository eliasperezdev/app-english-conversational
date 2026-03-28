import type { LevelMeta } from '@/lib/types';

export const c1Meta: LevelMeta = {
  level: 'c1',
  label: 'C1 — Avanzado',
  description:
    'En C1 el inglés se vuelve una herramienta de precisión. Dominás estructuras complejas, expresás matices, adaptás tu registro a cualquier contexto y hablás de conceptos abstractos con autoridad.',
  available: true,
  chapters: [
    {
      slug: 'vocabulary',
      title: 'Vocabulario C1',
      icon: '📚',
      description: 'Lenguaje académico, matices entre sinónimos, collocations avanzadas y vocabulario de debate.',
      available: true,
    },
    {
      slug: 'grammar',
      title: 'Gramática C1',
      icon: '🔧',
      description: 'Subjuntivo, cleft sentences, ellipsis, modales perfectos, nominalización e inversión avanzada.',
      available: true,
    },
    {
      slug: 'communication',
      title: 'Funciones Comunicativas C1',
      icon: '💬',
      description: 'Hedging y boosting, debate formal, conceptos abstractos, certeza y duda, presentaciones.',
      available: true,
      practice_route: 'politics',
    },
    {
      slug: 'pronunciation',
      title: 'Pronunciación C1',
      icon: '🎵',
      description: 'Nuclear stress avanzado, tono y registro, chunks, pronunciación académica y tu voz en inglés.',
      available: true,
    },
  ],
};
