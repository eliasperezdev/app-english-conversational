import type { DialogueData } from '@/lib/types'
import SpeakButton from './SpeakButton'

interface Props {
  data: DialogueData
}

export default function Dialogue({ data }: Props) {
  // Determine which speaker tokens map to each "side"
  // First speaker encountered → left, second → right
  const speakerOrder: string[] = []
  for (const line of data.lines) {
    if (!speakerOrder.includes(line.speaker)) speakerOrder.push(line.speaker)
    if (speakerOrder.length === 2) break
  }
  const rightSpeaker = speakerOrder[1] ?? '__none__'

  return (
    <div className="rounded-xl border border-[#2a2a2e] bg-[#111113] p-4 space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888] mb-3">
        {data.title}
      </p>
      <div className="space-y-3">
        {data.lines.map((line, i) => {
          const isRight = line.speaker === rightSpeaker
          const label = line.speakerLabel ?? line.speaker

          return (
            <div
              key={i}
              className={`flex flex-col gap-0.5 ${isRight ? 'items-end' : 'items-start'}`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#888] px-1">
                {label}
              </span>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                  isRight
                    ? 'rounded-tr-sm bg-[#C41A1A]/15 border border-[#C41A1A]/30'
                    : 'rounded-tl-sm bg-[#1c1c1f] border border-[#2a2a2e]'
                }`}
              >
                <div className="flex items-start gap-2">
                  <p className="flex-1 text-[14px] text-white leading-snug">{line.text}</p>
                  <SpeakButton text={line.text} size="xs" />
                </div>
                <p className="text-[12px] text-[#888] mt-1 italic">{line.translation}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
