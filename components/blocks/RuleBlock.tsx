import type { RuleBlockData } from '@/lib/types'

interface Props {
  data: RuleBlockData
}

export default function RuleBlock({ data }: Props) {
  return (
    <div className="rounded-xl border border-[#2a2a2e] border-l-[3px] border-l-[#C41A1A] bg-[#161618] px-4 py-3.5 text-[14px] text-[#d0d0d5] leading-relaxed [&_strong]:text-white [&_em]:text-[#888] [&_u]:underline [&_br]:block">
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  )
}
