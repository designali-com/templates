import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { storySource } from "@/lib/source"
import { StoryCardDesign } from "@/components/story/story"
import { ButtonStory } from "@/components/story/button-story"

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

  // Get all pages to calculate previous and next stories
  const pages = storySource.getPages() as ShowcasePage[]
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
  const { doc, previousPage, nextPage } = await getDocFromParams({ params })

  const MDXContent = doc.body

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
    </main>
  )
}