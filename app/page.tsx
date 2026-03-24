import Link from "next/link"
import { MessageCircle, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold tracking-tight">English Speech</h1>
        <p className="text-muted-foreground mt-2 text-sm">Practice conversational English with AI</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <Link
          href="/chat"
          className="flex flex-col items-center gap-3 border rounded-2xl p-6 hover:bg-muted transition-colors"
        >
          <MessageCircle className="h-8 w-8" />
          <div className="text-center">
            <div className="font-semibold">Free Chat</div>
            <div className="text-xs text-muted-foreground mt-1">Open conversation, any topic</div>
          </div>
        </Link>

        <Link
          href="/practice"
          className="flex flex-col items-center gap-3 border rounded-2xl p-6 hover:bg-muted transition-colors"
        >
          <BookOpen className="h-8 w-8" />
          <div className="text-center">
            <div className="font-semibold">Practice</div>
            <div className="text-xs text-muted-foreground mt-1">Choose level + topic</div>
          </div>
        </Link>
      </div>
    </main>
  )
}
