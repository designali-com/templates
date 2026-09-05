import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { showcaseSource } from "@/lib/source"
import { ShowcaseCard } from "@/components/showcase/showcase"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

const siteUrl = "https://design-agency.designali.com"

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`
}

export function generateStaticParams() {
  return showcaseSource.generateParams()
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

async function getDocFromParams({
  params,
}: PageProps): Promise<{
  doc: ShowcasePage["data"]
  page: ShowcasePage
}> {
  const { slug } = await params

  const page = showcaseSource.getPage(slug) as ShowcasePage | null

  if (!page) {
    notFound()
  }

  const doc = page.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  return {
    doc,
    page,
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
  const { doc, page } = await getDocFromParams({ params })

  const MDXContent = page.data.body

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="">
        <div className="container mx-auto max-w-7xl pt-40 px-6 py-10 text-center">
          {doc.affiliation && (
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {doc.affiliation}
            </p>
          )}

          <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {doc.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground md:text-xl">
            {doc.description}
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-6">
        <ShowcaseCard title={doc.title} href={page.url} image={doc.image ?? ""} affiliation={doc.affiliation ?? ""} />
      </div>
      {/* MDX Content */}
      <article className="max-w-7xl mx-auto max-w-3xl px-6 py-20 md:py-28">
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

      {/* Footer CTA */}
      <section className="border-t">
        <div className="container mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let's build something
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Have a project, product, or idea in mind? Let's turn it into
            something meaningful.
          </p>

          {doc.href && (
            <a
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Visit Designali
            </a>
          )}
        </div>
      </section>
    </main>
  )
}