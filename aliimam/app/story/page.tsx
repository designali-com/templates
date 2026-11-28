import type { Metadata } from "next"

import { CaseStudyCard } from "@/components/portfolio/selected-work"
import { Section, SectionHeader } from "@/components/portfolio/section"
import { Contact } from "@/components/portfolio/contact"
import { caseStudies } from "@/lib/portfolio"
import { storySource } from "@/lib/source"

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Case studies by Ali Imam across design leadership, product design, design systems, brand and frontend engineering.",
}

export default function Page() {
  const published = new Set(storySource.getPages().map((page) => page.url))
  const studies = caseStudies.filter((study) => published.has(`/story/${study.slug}`))

  return (
    <div className="border-t-2 border-dotted">
      <section>
        <div className="mx-auto max-w-6xl border-x-2 border-dotted px-6 py-16 text-center md:py-20">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">Case studies</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-serif text-5xl text-balance md:text-7xl">
            Work I&apos;ve led, designed and built.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {studies.length} projects across health-tech, developer tools, open source and brand.
            Each one shows my role, the problem, the process and what shipped.
          </p>
        </div>
      </section>
      <Section>
        <SectionHeader eyebrow="Featured" title="Start here" />
        <div className="grid gap-2 p-2 md:grid-cols-2">
          {studies
            .filter((study) => study.featured)
            .map((study) => (
              <CaseStudyCard key={study.slug} study={study} large />
            ))}
        </div>
      </Section>
      <Section>
        <SectionHeader eyebrow="More" title="Sites, microsites and experiments" />
        <div className="grid gap-2 p-2 md:grid-cols-2 lg:grid-cols-3">
          {studies
            .filter((study) => !study.featured)
            .map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
        </div>
      </Section>
      <Contact withCalendar={false} />
    </div>
  )
}
