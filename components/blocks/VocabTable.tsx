import type { VocabTableData } from '@/lib/types'

interface Props {
  data: VocabTableData
}

export default function VocabTable({ data }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#2a2a2e]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#2a2a2e] bg-[#1c1c1f]">
            {data.headers.map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-[#2a2a2e] last:border-0 ${
                i % 2 === 0 ? 'bg-[#161618]' : 'bg-[#1a1a1d]'
              }`}
            >
              <td className="px-4 py-3 font-medium text-white">{row.en}</td>
              <td className="px-4 py-3 font-mono text-[#3a8fd4] text-[13px]">{row.ipa}</td>
              <td className="px-4 py-3 text-[#d0d0d5]">{row.es}</td>
              {row.context !== undefined && (
                <td className="px-4 py-3 text-[#888] text-[13px]">{row.context}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
