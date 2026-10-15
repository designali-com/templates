import ExperienceSection from "@/components/about/experience"
import { HeroAbout } from "@/components/about/hero"
import { AboutMe } from "@/components/about/aboutme"
import { Story } from "@/components/about/story"

export default function Page() {
  return (
    <div className="bg-background border-dotted border-t-2 relative flex min-h-svh flex-col">

      <HeroAbout />
      <AboutMe />
      <ExperienceSection />
      <Story />
    </div>
  )
}
