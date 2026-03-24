interface Props {
  params: Promise<{ level: string; topic: string }>
}

export default async function PracticeSessionPage({ params }: Props) {
  const { level, topic } = await params
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">
        Practice: {level.toUpperCase()} / {topic} — coming soon
      </p>
    </main>
  )
}
