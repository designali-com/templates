import { DesignSection } from "@/components/home/design-cards"
import { HeroSection } from "@/components/home/hero"
import { Clients } from "@/components/home/clients"
import { AboutAI } from "@/components/home/about-ai"
import { WorksSection } from "@/components/home/works"
import { NumbersSection } from "@/components/home/numbers"
import { FAQs } from "@/components/home/faqs"
import { Pricing } from "@/components/home/pricing"
import { ShowcaseCard } from "@/components/showcase/showcase"
import { showcaseSource } from "@/lib/source"
import { DesignaliAISection } from "@/components/home/designai"

type Showcase = {
  url: string
  data: {
    title: string
    image: string
    affiliation: string
  }
}
export default function Page() {
  const showcases: Showcase[] = showcaseSource.getPages().map((page: any) => ({
    url: page.url,
    data: {
      title: page.data.title ?? "",
      image: page.data.image ?? "",
      affiliation: page.data.affiliation ?? "",
    },
  }))

  return (
    <div className="relative flex h-full w-full flex-col">
      <HeroSection />

      <div className="flex w-full px-3 md:px-6 flex-col justify-center mx-auto max-w-5xl">
        <Clients />
        <DesignSection />
        <AboutAI />
      </div>
      <WorksSection />
      <div className="flex w-full px-3 md:px-6 flex-col justify-center mx-auto max-w-5xl">
        <NumbersSection />
        <div>
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
              Blogs
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore insights, ideas, and stories about design, development, and
              building better digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {showcases.map((showcase) => (
              <ShowcaseCard
                key={showcase.url}
                {...showcase}
                href={showcase.url}
                title={showcase.data.title ?? ""}
                image={showcase.data.image ?? ""}
                affiliation={showcase.data.affiliation ?? ""}
              />
            ))}
          </div>
        </div>
      </div>
      <DesignaliAISection/>
      <Pricing />
      <div className="flex w-full px-3 md:px-6 flex-col justify-center mx-auto max-w-5xl">
        <FAQs />
      </div>
    </div>
  )
}