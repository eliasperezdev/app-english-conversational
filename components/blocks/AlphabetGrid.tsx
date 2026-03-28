import type { AlphabetItem } from '@/lib/types'

interface Props {
  data: AlphabetItem[]
}

export default function AlphabetGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
      {data.map((item) => (
        <div
          key={item.letter}
          className="rounded-xl border border-[#2a2a2e] bg-[#161618] py-3 flex flex-col items-center gap-1"
        >
          <span className="text-xl font-bold text-white">{item.letter}</span>
          <span className="font-mono text-[12px] text-[#3a8fd4]">{item.ipa}</span>
        </div>
      ))}
    </div>
  )
}
