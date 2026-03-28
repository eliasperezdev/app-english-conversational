import type { FormulaBoxData } from '@/lib/types'

interface Props {
  data: FormulaBoxData
}

export default function FormulaBox({ data }: Props) {
  return (
    <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-4 space-y-2">
      {data.lines.map((line, i) => (
        <div key={i} className="flex gap-3 text-[14px]">
          <span className="font-bold text-[#C41A1A] shrink-0 font-mono whitespace-pre">
            {line.label}
          </span>
          <span className="font-mono text-[#d0d0d5] whitespace-pre-wrap leading-relaxed">
            {line.text}
          </span>
        </div>
      ))}
    </div>
  )
}
