import type { GrammarColsData, GrammarColumn } from '@/lib/types'

const PRESET: Record<
  string,
  { bg: string; border: string; titleColor: string }
> = {
  affirm: { bg: '#0f1f0f', border: '#1e3a1e', titleColor: '#4ade80' },
  neg:    { bg: '#1f0f0f', border: '#3a1e1e', titleColor: '#f87171' },
  inter:  { bg: '#0f0f1f', border: '#1e1e3a', titleColor: '#60a5fa' },
}

function ColCard({ col }: { col: GrammarColumn }) {
  const preset = PRESET[col.type]
  const bg          = preset?.bg          ?? col.color      ?? '#1c1c1f'
  const border      = preset?.border      ?? '#2a2a2e'
  const titleColor  = preset?.titleColor  ?? col.titleColor ?? '#d0d0d5'

  return (
    <div
      className="flex-1 min-w-[160px] rounded-xl border p-4"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <p
        className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3"
        style={{ color: titleColor }}
      >
        {col.title}
      </p>
      <ul className="space-y-1.5">
        {col.items.map((item, i) => (
          <li
            key={i}
            className="text-[14px] text-[#d0d0d5] leading-snug"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    </div>
  )
}

interface Props {
  data: GrammarColsData
}

export default function GrammarCols({ data }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {data.columns.map((col, i) => (
        <ColCard key={i} col={col} />
      ))}
    </div>
  )
}
