import type { ColorSwatch } from '@/lib/types'

interface Props {
  data: ColorSwatch[]
}

export default function ColorSwatches({ data }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {data.map((swatch) => (
        <div key={swatch.name} className="flex flex-col items-center gap-2">
          <div
            className="w-12 h-12 rounded-xl border-2 border-white/10 shadow-sm"
            style={{ backgroundColor: swatch.hex }}
          />
          <div className="text-center">
            <p className="text-[13px] font-medium text-white">{swatch.name}</p>
            <p className="text-[11px] text-[#888]">{swatch.es}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
