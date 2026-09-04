import { DesignSection } from "@/components/home/design-cards"
import { HeroSection } from "@/components/home/hero"
import { Clients } from "@/components/home/clients"
import { AboutAI } from "@/components/home/about-ai"
import { WorksSection } from "@/components/home/works"
import { NumbersSection } from "@/components/home/numbers"
import { FAQs } from "@/components/home/faqs"
import { Pricing } from "@/components/home/pricing"

export default function Page() {
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


      </div>
      <Pricing />

      <div className="flex w-full px-3 md:px-6 flex-col justify-center mx-auto max-w-5xl">


        <FAQs />
      </div>
    </div>
  )
}