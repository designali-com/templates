import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { caseStudies, type CaseStudy } from "@/lib/portfolio"

import { Section, SectionHeader } from "./section"

export function CaseStudyMeta({ study }: { study: CaseStudy }) {
  return (
    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
      {study.role} · {study.company}
      {study.year ? ` · ${study.year}` : ""}
    </p>
  )
}

export function CaseStudyCard({ study, large }: { study: CaseStudy; large?: boolean }) {
  return (
    <Link
      href={`/story/${study.slug}`}
      className="group flex h-full flex-col border bg-background transition-colors hover:border-primary/50"
    >
      <div className="overflow-hidden border-b">
        <img
          src={study.image}
          alt={`${study.title} preview`}
          width={1920}
          height={1080}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <CaseStudyMeta study={study} />
        <h3
          className={
            large
              ? "flex items-center gap-2 font-serif text-3xl md:text-4xl"
              : "flex items-center gap-2 font-serif text-2xl md:text-3xl"
          }
        >
          {study.title}
          <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </h3>
        <p className="text-sm leading-relaxed text-pretty text-muted-foreground">{study.summary}</p>
        <ul className="mt-1 space-y-1.5">
          {study.impact.map((item) => (
            <li key={item} className="flex gap-2 text-sm">
              <span aria-hidden className="mt-2 size-1 shrink-0 bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {study.tags.map((tag) => (
            <span key={tag} className="border px-2 py-0.5 text-[11px] text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export function SelectedWork() {
  const featured = caseStudies.filter((study) => study.featured)
  const more = caseStudies.filter((study) => !study.featured)
  const [first, second, ...rest] = featured

  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Selected work"
        title="Case studies"
        description="Real products I've led, designed and built. Each one covers my role, the problem, the process and what shipped."
        action={
          <Button variant="outline" nativeButton={false} render={<Link href="/story" />}>
            All case studies
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        }
      />

      <div className="grid gap-2 p-2 lg:grid-cols-2">
        {first && <CaseStudyCard study={first} large />}
        {second && <CaseStudyCard study={second} large />}
      </div>
      <div className="grid gap-2 px-2 pb-2 md:grid-cols-2 lg:grid-cols-4">
        {rest.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      {more.length > 0 && (
        <div className="border-t-2 border-dotted">
          <p className="px-6 pt-6 text-xs font-medium tracking-widest text-muted-foreground uppercase md:px-8">
            More shipped work
          </p>
          <ul className="grid grid-cols-1 gap-x-8 p-6 md:grid-cols-2 md:p-8">
            {more.map((study) => (
              <li key={study.slug} className="min-w-0">
                <Link
                  href={`/story/${study.slug}`}
                  className="group flex items-center gap-4 border-b border-dotted py-3"
                >
                  <img
                    src={study.image}
                    alt=""
                    width={96}
                    height={54}
                    loading="lazy"
                    className="aspect-video w-20 shrink-0 border object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium group-hover:text-primary">{study.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{study.summary}</p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
