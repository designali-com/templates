import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { storySource } from "@/lib/source"
import { StoryCardDesign } from "@/components/story/story"
import { ButtonStory } from "@/components/story/button-story"
import { Contact } from "@/components/portfolio/contact"
import { caseStudies, getCaseStudy } from "@/lib/portfolio"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

const siteUrl = "https://aliimam.designali.com"

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`
}

export function generateStaticParams() {
  return storySource.generateParams()
}

interface ShowcaseDoc {
  title: string
  description: string
  image?: string
  href?: string
  featured?: boolean
  affiliation?: string
  [key: string]: any
}

interface ShowcasePage {
  url: string
  data: ShowcaseDoc & {
    body?: React.ComponentType<any>
  }
}

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getDocFromParams({ params }: PageProps) {
  const { slug } = await params

  const page = storySource.getPage(slug) as ShowcasePage | null

  if (!page) {
    notFound()
  }

  const doc = page.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  // Order previous / next by the curated case study order
  const allPages = storySource.getPages() as ShowcasePage[]
  const rank = (url: string) => {
    const index = caseStudies.findIndex((study) => `/story/${study.slug}` === url)
    return index === -1 ? Number.MAX_SAFE_INTEGER : index
  }
  const pages = [...allPages].sort((a, b) => rank(a.url) - rank(b.url))
  const currentIndex = pages.findIndex((p) => p.url === page.url)

  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage =
    currentIndex !== -1 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : null

  return {
    doc,
    page,
    previousPage,
    nextPage,
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { doc, page } = await getDocFromParams({ params })

  const ogUrl = new URL(`${siteUrl}/og`)

  ogUrl.searchParams.set("title", doc.title)
  ogUrl.searchParams.set("description", doc.description)

  return {
    title: doc.title,
    description: doc.description,

    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  }
}

export default async function ShowcasePage({ params }: PageProps) {
  const { doc, page, previousPage, nextPage } = await getDocFromParams({ params })

  const MDXContent = doc.body
  const study = getCaseStudy(page.url.replace("/story/", ""))
  const facts = [
    { label: "Role", value: study?.role },
    { label: "Company", value: study?.company },
    { label: "Year", value: study?.year },
    { label: "Scope", value: study?.tags.join(", ") },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value))
  const liveUrl = study?.live ?? doc.href

  return (
    <main className="border-b-2 border-dotted">
      <header className="border-y-2 border-dotted">
        <div className="flex justify-center w-full p-2">
          <ButtonStory
            className="w-full max-w-6xl px-4"
            backHref="/story"     
            previousHref={previousPage?.url}
            nextHref={nextPage?.url}
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          {doc.affiliation && (
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {doc.affiliation}
            </p>
          )}

          <h1 className="text-5xl font-serif tracking-tight md:text-6xl lg:text-7xl">
            {doc.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-md text-muted-foreground md:text-lg">
            {doc.description}
          </p>
        </div>
        {(facts.length > 0 || liveUrl) && (
          <div className="mx-auto max-w-6xl border-x-2 border-t-2 border-dotted">
            <dl className="grid grid-cols-2 md:grid-cols-5">
              {facts.map((fact) => (
                <div key={fact.label} className="border-r border-b border-dotted p-4 md:border-b-0">
                  <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
              {liveUrl && (
                <div className="border-b border-dotted p-4 md:border-b-0">
                  <dt className="text-xs text-muted-foreground">Live</dt>
                  <dd className="mt-1 truncate text-sm font-medium">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {liveUrl.replace(/^https?:\/\/(www\.)?/, "")} ↗
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            {study && study.impact.length > 0 && (
              <div className="border-t-2 border-dotted p-4 md:p-6">
                <p className="text-xs font-medium tracking-widest text-primary uppercase">
                  Key outcomes
                </p>
                <ul className="mt-3 grid gap-2 md:grid-cols-3">
                  {study.impact.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span aria-hidden className="mt-2 size-1 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </header>
      <div className="mx-auto max-w-6xl p-2 pb-0 border-x-2 border-dotted">
        <StoryCardDesign image={doc.image ?? ""} />
        <article className="p-4 pt-10 max-w-2xl mx-auto border-x-2 border-dotted">
          {MDXContent ? (
            <div
              className="
              prose
              prose-neutral
              dark:prose-invert
              max-w-none
              space-y-6
              prose-headings:scroll-mt-24
              prose-h1:text-4xl
              prose-h1:font-bold
              prose-h1:tracking-tight

              prose-h2:mt-16
              prose-h2:text-3xl
              prose-h2:font-bold
              prose-h2:tracking-tight

              prose-h3:mt-10
              prose-h3:text-xl
              prose-h3:font-semibold

              prose-p:text-base
              prose-p:leading-8
              prose-p:text-muted-foreground

              prose-li:text-muted-foreground
              prose-li:leading-8

              prose-strong:text-foreground

              prose-blockquote:border-l-2
              prose-blockquote:text-xl
              prose-blockquote:font-medium
              prose-blockquote:text-foreground

              prose-a:text-foreground
              prose-a:underline
              prose-a:underline-offset-4
            "
            >
              <MDXContent />
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              No content found.
            </div>
          )}
        </article>
        <div className="flex border-t-2 border-x-2 mx-auto max-w-2xl border-dotted justify-center w-full p-2">
          <ButtonStory
            className="w-full max-w-6xl px-4"
            backHref="/story"     
            previousHref={previousPage?.url}
            nextHref={nextPage?.url}
          />
        </div>
      </div>
      <Contact withCalendar={false} />
    </main>
  )
}