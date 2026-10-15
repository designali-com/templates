import { GallerySection } from "@/components/home/gallery"
import { Hero } from "@/components/home/hero"
import { TrustSection } from "@/components/home/trust"
import { Clients } from "@/components/home/clients"
import { Testimonials } from "@/components/home/testmonials"
import { BuildWith } from "@/components/home/build-with"
import { Summary } from "@/components/home/summary"
import { SkillsSection } from "@/components/home/skills"
import { FAQSection } from "@/components/home/faq"
import { CalMeeting } from "@/components/home/cal-meeting"
import { Story } from "@/components/about/story"

export default function Page() {
  return (
    <div className="bg-background border-dotted border-t-2 relative flex min-h-svh flex-col">
      <Hero />
      <TrustSection />
      <GallerySection />
      <Clients /> 
      <Summary />
      <SkillsSection />
      <BuildWith />
      <Testimonials />
      <Story />
      <FAQSection />
      <CalMeeting />
    </div>
  )
}
