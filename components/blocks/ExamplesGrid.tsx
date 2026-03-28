import type { ExampleItem } from '@/lib/types'
import SpeakButton from './SpeakButton'

interface Props {
  data: ExampleItem[]
}

export default function ExamplesGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {data.map((item, i) => (
        <div
          key={i}
          className="rounded-lg border border-[#2a2a2e] bg-[#161618] px-4 py-3"
        >
          <div className="flex items-start gap-2">
            <p
              className="flex-1 text-[14px] text-white leading-snug"
              dangerouslySetInnerHTML={{ __html: item.en }}
            />
            <SpeakButton text={item.en.replace(/<[^>]+>/g, '')} size="xs" />
          </div>
          <p className="text-[13px] text-[#888] mt-1">{item.es}</p>
          {item.note && (
            <p className="text-[11px] text-[#C41A1A] mt-1 font-medium">{item.note}</p>
          )}
        </div>
      ))}
    </div>
  )
}
