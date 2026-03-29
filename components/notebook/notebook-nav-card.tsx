'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BookMarked } from 'lucide-react'
import { getStats } from '@/lib/notebook'

export function NotebookNavCard() {
  const [due, setDue] = useState(0)

  useEffect(() => {
    setDue(getStats().dueToday)
  }, [])

  return (
    <Link
      href="/notebook"
      className="group relative flex flex-col items-center gap-4 bg-[#161618] border border-[#2a2a2e] rounded-2xl p-7 md:p-9 hover:border-[#C41A1A] transition-colors"
    >
      {due > 0 && (
        <span className="absolute top-3 right-3 bg-[#C41A1A] text-white text-[10px] font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center leading-5">
          {due}
        </span>
      )}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#C41A1A]/10 flex items-center justify-center group-hover:bg-[#C41A1A]/20 transition-colors">
        <BookMarked className="h-6 w-6 md:h-7 md:w-7 text-[#C41A1A]" />
      </div>
      <div className="text-center">
        <div className="text-base md:text-lg font-semibold text-white">Notebook</div>
        <div className="text-[13px] md:text-[15px] text-[#888] mt-1">Vocabulary flashcards</div>
      </div>
    </Link>
  )
}
