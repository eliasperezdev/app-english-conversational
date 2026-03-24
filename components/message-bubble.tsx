import type { UIMessage, TextUIPart } from "ai"

interface Props {
  message: UIMessage
}

function parseCorrection(text: string): { displayText: string; correction: string | null } {
  const match = text.match(/\[correction:\s*"([^"]+)"\]/)
  if (!match) return { displayText: text.trim(), correction: null }
  return {
    displayText: text.replace(/\[correction:\s*"[^"]+"\]/g, "").trim(),
    correction: match[1],
  }
}

export function MessageBubble({ message }: Props) {
  const rawText = message.parts
    .filter((p): p is TextUIPart => p.type === "text")
    .map((p) => p.text)
    .join("")

  const isUser = message.role === "user"

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[75%] bg-[#C41A1A] text-white rounded-2xl rounded-br-sm px-4 py-2 md:py-3 text-sm md:text-base leading-relaxed">
          {rawText}
        </div>
      </div>
    )
  }

  const { displayText, correction } = parseCorrection(rawText)

  return (
    <div className="flex items-end gap-2 md:gap-3">
      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#C41A1A] flex items-center justify-center shrink-0">
        <span className="text-white text-xs md:text-sm font-bold">E</span>
      </div>
      <div className="max-w-[75%] flex flex-col gap-1.5">
        <div className="bg-[#161618] border border-[#2a2a2e] rounded-2xl rounded-bl-sm px-4 py-2 md:py-3 text-sm md:text-base leading-relaxed text-[#d0d0d5]">
          {displayText}
        </div>
        {correction && (
          <div className="border-l-2 border-[#C41A1A] bg-[#161618] pl-3 py-1.5 rounded-r-md text-[13px] md:text-[15px] text-[#888]">
            Try: <span className="text-[#C41A1A] font-medium">{correction}</span>
          </div>
        )}
      </div>
    </div>
  )
}
