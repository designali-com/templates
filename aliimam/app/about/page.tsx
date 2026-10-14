import ExperienceSection from "@/components/about/experience"
import { HeroAbout } from "@/components/about/hero"

export default function Page() {
  return (
    <div className="bg-background border-dotted border-t-2 relative flex min-h-svh flex-col">

      <HeroAbout />
      <ExperienceSection />
    </div>
  )
}
