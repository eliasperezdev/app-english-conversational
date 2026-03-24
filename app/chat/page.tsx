import { ChatInterface } from "@/components/chat-interface"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ChatPage() {
  return (
    <main className="flex flex-col h-dvh">
      <header className="flex items-center gap-3 border-b px-4 py-3 shrink-0">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-sm font-medium">Free Chat</h1>
      </header>
      <div className="flex-1 overflow-hidden">
        <ChatInterface mode="free" />
      </div>
    </main>
  )
}
