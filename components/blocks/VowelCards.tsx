import type { VowelCard } from '@/lib/types'

interface Props {
  data: VowelCard[]
}

export default function VowelCards({ data }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {data.map((card, i) => (
        <div
          key={i}
          className="rounded-xl border p-4"
          style={{ backgroundColor: card.color, borderColor: card.borderColor }}
        >
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-[#1a1a1a]">{card.vowel}</span>
            <span className="text-[13px] font-mono text-[#444]">{card.ipa}</span>
          </div>
          <p className="text-[13px] text-[#555] leading-snug">{card.words}</p>
        </div>
      ))}
    </div>
  )
}
