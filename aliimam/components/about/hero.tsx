import { Download, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio"

const principles = [
  {
    title: "Clarity first",
    text: "Design should communicate before it decorates. One clear message per screen.",
  },
  {
    title: "Systems over screens",
    text: "Every good decision becomes a token or component, so the next screen is faster.",
  },
  {
    title: "Built, not handed off",
    text: "I take designs into code myself, so what ships matches what was designed.",
  },
  {
    title: "Craft in the details",
    text: "Spacing, motion, empty states and accessibility are where trust is earned.",
  },
]

export function HeroAbout() {
  return (
    <>
      <section className="relative w-full">
        <div className="mx-auto grid w-full max-w-6xl gap-10 border-x-2 border-dotted p-6 md:grid-cols-[auto_1fr] md:p-10">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={852}
            height={1280}
            className="h-72 w-56 object-cover p-1 ring-1 ring-primary/40"
          />
          <div className="flex flex-col justify-end">
            <p className="text-xs font-medium tracking-widest text-primary uppercase">About me</p>
            <h1 className="mt-3 font-serif text-5xl text-balance md:text-7xl">
              Hey, I&apos;m Ali. I make design that works in the real world.
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {profile.title} · {profile.location}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                nativeButton={false}
                render={<a href={profile.cv} download target="_blank" rel="noopener noreferrer" />}
              >
                <Download data-icon="inline-start" />
                Download CV
              </Button>
              <Button variant="outline" nativeButton={false} render={<a href={`mailto:${profile.email}`} />}>
                <Mail data-icon="inline-start" />
                {profile.email}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-dotted">
        <div className="mx-auto grid w-full max-w-6xl border-x-2 border-dotted md:grid-cols-2">
          <div className="space-y-5 p-6 text-base leading-relaxed text-muted-foreground md:border-r md:border-dotted md:p-10 md:text-lg">
            <p>
              I started in 2017 as an <span className="text-foreground">animator</span>, then spent
              years in agencies and brand teams as a visualizer, art director and senior graphic
              designer. That is where I learned to make ideas visible fast, and to make them land
              with real audiences.
            </p>
            <p>
              Along the way I taught myself to code. What began as small side projects became{" "}
              <span className="text-foreground">designali</span>, an open-source library of
              components, blocks, templates and fonts with 15.5M+ views.
            </p>
            <p>
              Today I am <span className="text-foreground">Head of Design at OPTM Health Care</span>{" "}
              and <span className="text-foreground">Design Engineer at Predict Fit</span>. I own
              brands end to end, design complex health products, and build the design system and
              apps in Next.js myself.
            </p>
            <p>
              I&apos;m now looking for my next full-time role where design leads the product, and
              where I can build the team, the system and the product together.
            </p>
          </div>
          <div className="grid border-t-2 border-dotted sm:grid-cols-2 md:border-t-0">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "flex flex-col gap-2 p-6 md:p-8",
                  index % 2 === 0 ? "sm:border-r sm:border-dotted" : "",
                  index < 3 ? "border-b border-dotted" : "",
                  index === 2 ? "sm:border-b-0" : "",
                ].join(" ")}
              >
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h2 className="font-serif text-2xl">{item.title}</h2>
                <p className="text-sm text-pretty text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
