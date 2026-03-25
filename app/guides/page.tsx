import { getAllLevelSlugs, getLevel } from '@/lib/guides'

export default function GuidesPage() {
  const slugs = getAllLevelSlugs()
  const labels = slugs.map((s) => {
    const level = getLevel(s)
    return `${s} (${level?.label ?? '?'})`
  })

  return (
    <main className="p-8 text-white bg-[#0e0e0f] min-h-screen">
      <p>Guides — levels: {labels.join(', ')}</p>
    </main>
  )
}
