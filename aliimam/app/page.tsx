import { Hero } from "@/components/portfolio/hero"
import { Stats } from "@/components/portfolio/stats"
import { SelectedWork } from "@/components/portfolio/selected-work"
import { Capabilities, Process } from "@/components/portfolio/capabilities"
import { Experience } from "@/components/portfolio/experience"
import { Toolkit } from "@/components/portfolio/toolkit"
import { Contact } from "@/components/portfolio/contact"
import { Clients } from "@/components/home/clients"
import { Testimonials } from "@/components/home/testmonials"
import { FAQSection } from "@/components/home/faq"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col border-t-2 border-dotted bg-background">
      <Hero />
      <Stats />
      <SelectedWork />
      <Clients />
      <Capabilities />
      <Experience limit={5} />
      <Process />
      <Toolkit />
      <Testimonials />
      <FAQSection />
      <Contact />
    </div>
  )
}
