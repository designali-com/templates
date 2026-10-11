import { GallerySection } from "@/components/home/gallery"
import { Hero } from "@/components/home/hero"
import { TrustSection } from "@/components/home/trust"
import { Clients } from "@/components/home/clients"
import { Testimonials } from "@/components/home/testmonials"
import { BuildWith } from "@/components/home/build-with"

export default function Page() {
  return (
    <div className="bg-background border-dotted border-t-2 relative flex min-h-svh flex-col">
      <Hero />
      <TrustSection />
      <GallerySection />
      <Clients /> 
      <BuildWith />
      <Testimonials />
    </div>
  )
}
