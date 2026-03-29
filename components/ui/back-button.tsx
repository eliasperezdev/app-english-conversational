"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface BackButtonProps {
  label?: string
  href?: string
}

export function BackButton({ label, href }: BackButtonProps) {
  const router = useRouter()

  const cls =
    "inline-flex items-center gap-1.5 text-[#888] hover:text-[#d0d0d5] transition-colors"

  if (href) {
    return (
      <Link href={href} className={cls}>
        <ArrowLeft className="w-4 h-4" />
        {label && <span className="text-sm">{label}</span>}
      </Link>
    )
  }

  return (
    <button type="button" onClick={() => router.back()} className={cls}>
      <ArrowLeft className="w-4 h-4" />
      {label && <span className="text-sm">{label}</span>}
    </button>
  )
}
