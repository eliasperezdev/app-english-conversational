import type { NumberItem } from '@/lib/types'

interface Props {
  data: NumberItem[]
}

export default function NumberGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
      {data.map((item) => (
        <div
          key={item.num}
          className="rounded-xl border border-[#2a2a2e] bg-[#161618] px-3 py-3 text-center"
        >
          <span className="block text-xl font-bold text-[#C41A1A]">{item.num}</span>
          <span className="block text-[13px] text-[#d0d0d5] mt-0.5">{item.word}</span>
        </div>
      ))}
    </div>
  )
}
