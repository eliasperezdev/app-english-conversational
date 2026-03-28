import type { PillListData, PillColor } from '@/lib/types'

const COLOR_MAP: Record<PillColor, { bg: string; text: string; border: string }> = {
  gold:    { bg: 'rgba(200,154,42,0.12)',  text: '#c89a2a', border: 'rgba(200,154,42,0.3)' },
  neutral: { bg: '#1c1c1f',               text: '#d0d0d5', border: '#2a2a2e' },
  coral:   { bg: 'rgba(224,90,68,0.12)',   text: '#e05a44', border: 'rgba(224,90,68,0.3)' },
  purple:  { bg: 'rgba(153,68,204,0.12)',  text: '#c084fc', border: 'rgba(153,68,204,0.3)' },
  teal:    { bg: 'rgba(45,168,153,0.12)',  text: '#2da899', border: 'rgba(45,168,153,0.3)' },
  blue:    { bg: 'rgba(58,143,212,0.12)',  text: '#3a8fd4', border: 'rgba(58,143,212,0.3)' },
}

interface Props {
  data: PillListData
}

export default function PillList({ data }: Props) {
  const colors = COLOR_MAP[data.color] ?? COLOR_MAP.neutral

  return (
    <div>
      {data.label && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888] mb-3">
          {data.label}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {data.items.map((item, i) => (
          <div
            key={i}
            className="rounded-full border px-3 py-1.5 text-[13px] font-medium"
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
              borderColor: colors.border,
            }}
          >
            {item.en}
            <span className="ml-1.5 opacity-60 text-[12px]">— {item.es}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
