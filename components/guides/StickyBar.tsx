'use client'

import Link from 'next/link'

interface Props {
  levelSlug: string
  practiceRoute: string
}

export default function StickyBar({ levelSlug, practiceRoute }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#2a2a2e] bg-[#111113]/95 backdrop-blur-sm">
      <div className="max-w-[480px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <p className="text-sm text-[#888]">
          Ready to practice this in conversation?
        </p>
        <Link
          href={`/practice/${levelSlug}/${practiceRoute}`}
          className="shrink-0 px-5 py-2.5 rounded-xl bg-[#C41A1A] text-white text-sm font-semibold hover:bg-[#a81515] transition-colors"
        >
          Start Practice →
        </Link>
      </div>
    </div>
  )
}
