import Link from "next/link"
import { ArrowDown, Download, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio"

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-6xl border-x-2 border-dotted p-2">
        <div className="relative grid gap-8 border-2 border-dotted p-6 md:grid-cols-[1fr_auto] md:gap-12 md:p-10">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-medium text-emerald-700 dark:text-emerald-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availability}
              </span>
               
            </div>

            

            <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.02] text-balance md:text-7xl">
              {profile.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Button size="lg" nativeButton={false} render={<Link href="#work" />}>
                View case studies
                <ArrowDown data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href={profile.cv} download target="_blank" rel="noopener noreferrer" />}
              >
                <Download data-icon="inline-start" />
                Download CV
              </Button>
               
            </div>
          </div>

          <div className="order-first md:order-none">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={852}
              height={1280}
              className="h-40 w-32 object-cover p-1 ring ring-primary/40 md:h-72 md:w-56"
            />
          </div>
        </div>

         
      </div>
    </section>
  )
}
