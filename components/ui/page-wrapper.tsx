"use client"

import type { ReactNode } from "react"

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-[480px] mx-auto min-h-dvh flex flex-col">
      {children}
    </main>
  )
}
