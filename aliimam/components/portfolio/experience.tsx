import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { experiences, profile } from "@/lib/portfolio"

import { Section, SectionHeader } from "./section"

export function Experience({ limit }: { limit?: number }) {
  const items = limit ? experiences.slice(0, limit) : experiences
  const hidden = experiences.length - items.length

  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="9+ years, from animation and agency work to leading design."
        action={
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={profile.cv} download target="_blank" rel="noopener noreferrer" />}
          >
            <Download data-icon="inline-start" />
            Download CV
          </Button>
        }
      />
      <ol>
        {items.map((item) => (
          <li
            key={`${item.company}-${item.role}`}
            className="grid gap-4 border-b border-dotted p-6 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-8 md:px-8"
          >
            <div className="flex items-start gap-3 md:flex-col md:gap-2">
              <p className="font-mono text-xs text-muted-foreground tabular-nums">{item.period}</p>
              <p className="text-xs text-muted-foreground">
                {item.type} · {item.location}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center border bg-background p-1.5">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={48}
                  height={48}
                  loading="lazy"
                  className={
                    item.logo.endsWith(".svg")
                      ? "h-full w-full object-contain"
                      : "h-full w-full object-contain grayscale dark:invert"
                  }
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold">
                  {item.role} <span className="font-normal text-muted-foreground">at {item.company}</span>
                </h3>
                <ul className="mt-2 space-y-1">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                      <span aria-hidden className="mt-2 size-1 shrink-0 bg-muted-foreground/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                {item.link && (
                  <Link
                    href={item.link}
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
                  >
                    Read the case study
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
      {hidden > 0 && (
        <div className="border-t-2 border-dotted p-4 text-center">
          <Link href="/about#experience" className="text-sm text-primary underline-offset-4 hover:underline">
            See full experience ({hidden} more roles)
          </Link>
        </div>
      )}
    </Section>
  )
}
