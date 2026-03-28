import type { LevelMeta } from '@/lib/types';

export const a2Meta: LevelMeta = {
  level: 'a2',
  label: 'A2 — Básico',
  description:
    'El nivel A2 amplía tu base. Aprenderás a hablar del pasado, hacer planes, orientarte en la ciudad, describir síntomas y usar modales y comparativos.',
  available: true,
  chapters: [
    {
      slug: 'vocabulary',
      title: 'Vocabulario Ampliado',
      icon: '📚',
      description: 'Lugares en la ciudad, transporte, cuerpo, hobbies y profesiones.',
      available: true,
    },
    {
      slug: 'grammar',
      title: 'Gramática A2',
      icon: '🔧',
      description: 'Presente continuo, pasado simple, modales, comparativos y futuro con going to.',
      available: true,
    },
    {
      slug: 'communication',
      title: 'Funciones Comunicativas',
      icon: '💬',
      description: 'Hablar del pasado, hacer invitaciones, pedir indicaciones, ir al médico y hacer compras.',
      available: true,
      practice_route: 'travel',
    },
    {
      slug: 'pronunciation',
      title: 'Pronunciación A2',
      icon: '🎵',
      description: 'Terminación -ed, contracciones esenciales y ritmo natural del inglés.',
      available: true,
    },
  ],
};
