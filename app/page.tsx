import Link from "next/link"
import { MessageCircle, BookOpen, GraduationCap, Library } from "lucide-react"
import { NotebookNavCard } from "@/components/notebook/notebook-nav-card"
import PageWrapper from "@/components/ui/page-wrapper"

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center flex-1 gap-10 px-6">
        <div className="text-center">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#C41A1A] mb-2">
            AI Language Tutor
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            English Speech
          </h1>
          <p className="text-[#888] mt-3 text-base md:text-lg">
            Practice conversational English with AI
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <Link
            href="/chat"
            className="group flex flex-col items-center gap-4 bg-[#161618] border border-[#2a2a2e] rounded-2xl p-7 hover:border-[#C41A1A] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C41A1A]/10 flex items-center justify-center group-hover:bg-[#C41A1A]/20 transition-colors">
              <MessageCircle className="h-6 w-6 text-[#C41A1A]" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Free Chat</div>
              <div className="text-[13px] text-[#888] mt-1">Open conversation, any topic</div>
            </div>
          </Link>

          <Link
            href="/practice"
            className="group flex flex-col items-center gap-4 bg-[#161618] border border-[#2a2a2e] rounded-2xl p-7 hover:border-[#C41A1A] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C41A1A]/10 flex items-center justify-center group-hover:bg-[#C41A1A]/20 transition-colors">
              <BookOpen className="h-6 w-6 text-[#C41A1A]" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Practice</div>
              <div className="text-[13px] text-[#888] mt-1">Choose level + topic</div>
            </div>
          </Link>

          <Link
            href="/guides"
            className="group flex flex-col items-center gap-4 bg-[#161618] border border-[#2a2a2e] rounded-2xl p-7 hover:border-[#C41A1A] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C41A1A]/10 flex items-center justify-center group-hover:bg-[#C41A1A]/20 transition-colors">
              <GraduationCap className="h-6 w-6 text-[#C41A1A]" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Guides</div>
              <div className="text-[13px] text-[#888] mt-1">Structured lessons by level</div>
            </div>
          </Link>

          <Link
            href="/books"
            className="group flex flex-col items-center gap-4 bg-[#161618] border border-[#2a2a2e] rounded-2xl p-7 hover:border-[#C41A1A] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C41A1A]/10 flex items-center justify-center group-hover:bg-[#C41A1A]/20 transition-colors">
              <Library className="h-6 w-6 text-[#C41A1A]" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Books</div>
              <div className="text-[13px] text-[#888] mt-1">Classic literature by level</div>
            </div>
          </Link>

          <NotebookNavCard />
        </div>
      </div>
    </PageWrapper>
  )
}
