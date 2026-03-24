import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { levels } from "@/lib/levels"
import { topics } from "@/lib/topics"

export default function PracticePage() {
  const levelKeys = Object.keys(levels)
  const topicKeys = Object.keys(topics)

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <header className="flex items-center gap-3 mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-lg font-semibold">Practice</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
          Choose your level
        </h2>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {levelKeys.map((key) => (
            <div
              key={key}
              className="border rounded-xl p-3 text-center"
            >
              <div className="text-base font-bold">{key}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{levels[key].label}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
          Choose a topic
        </h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {levelKeys.map((level) =>
            topicKeys.map((topic) => (
              <Link
                key={`${level}-${topic}`}
                href={`/practice/${level}/${topic}`}
                className="flex items-center justify-between border rounded-xl px-4 py-3 hover:bg-muted transition-colors"
              >
                <div>
                  <span className="text-sm font-medium">{topics[topic].label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {topics[topic].description}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-3 shrink-0">
                  {level}
                </span>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
