import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { capabilities, process } from "@/lib/portfolio"

import { Section, SectionHeader } from "./section"

export function Capabilities() {
  return (
    <Section id="roles">
      <SectionHeader
        eyebrow="What I bring to a team"
        title="One designer, many hats. All backed by shipped work."
        description="Hiring for one of these roles? Here's what I do in it, and where you can see the proof."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => (
          <Link
            key={item.role}
            href={item.link}
            className="group -mr-px -mb-px flex flex-col gap-3 border-r border-b border-dotted p-6 transition-colors hover:bg-muted/40 md:px-8"
          >
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold">{item.role}</h3>
            <p className="text-sm text-pretty text-muted-foreground">{item.summary}</p>
            <p className="mt-auto flex items-start gap-2 border-t border-dotted pt-3 text-sm">
              <span className="text-primary">Proof:</span>
              <span className="flex-1">{item.proof}</span>
              <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </p>
          </Link>
        ))}
      </div>
    </Section>
  )
}

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="How I work"
        title="From a fuzzy problem to shipped, measurable product."
      />
      <ol className="grid md:grid-cols-5">
        {process.map((item, index) => (
          <li
            key={item.step}
            className={[
              "flex flex-col gap-2 p-6",
              index < process.length - 1 ? "border-b border-dotted md:border-r md:border-b-0" : "",
            ].join(" ")}
          >
            <span className="font-mono text-xs text-primary">{item.step}</span>
            <h3 className="font-serif text-2xl">{item.title}</h3>
            <p className="text-sm text-pretty text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
