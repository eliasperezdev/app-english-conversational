import { ChatInterface } from "@/components/chat-interface"

interface Props {
  searchParams: Promise<{ prefill?: string }>
}

export default async function ChatPage({ searchParams }: Props) {
  const { prefill } = await searchParams
  return <ChatInterface mode="free" prefill={prefill} />
}
