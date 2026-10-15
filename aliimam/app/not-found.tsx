import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="relative mx-auto h-[900px] max-w-7xl border-x border-dotted">
      <section className="relative flex h-[90%] items-center justify-center px-6 py-20">
        <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-5xl font-medium tracking-tight md:text-6xl lg:text-9xl">
            404
          </h1>
          <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
            Page not found
          </h2>

          {/* Description */}
          <p className="mt-30 max-w-lg text-base leading-7 tracking-wide text-foreground/70 sm:text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved, removed, or never existed.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button render={<Link href="/" />}>
              Back to Home
            </Button>

            <Button render={<Link href="/docs/components/bento" />} variant="outline">
              View Components
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
