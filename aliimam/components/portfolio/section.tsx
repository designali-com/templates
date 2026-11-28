import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function Section({
  id,
  children,
  className,
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className="relative scroll-mt-4 border-t-2 border-dotted">
      <div className={cn("mx-auto w-full max-w-6xl border-x-2 border-dotted", className)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 border-b-2 border-dotted p-6 md:flex-row md:items-end md:justify-between md:p-8">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-widest text-primary uppercase">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl text-balance md:text-5xl">{title}</h2>
        {description && (
          <p className="mt-3 text-base text-pretty text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
