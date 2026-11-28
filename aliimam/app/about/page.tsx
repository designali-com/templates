import type { Metadata } from "next"

import { HeroAbout } from "@/components/about/hero"
import { AboutMe } from "@/components/about/aboutme"
import { Experience } from "@/components/portfolio/experience"
import { Toolkit } from "@/components/portfolio/toolkit"
import { Contact } from "@/components/portfolio/contact"
import { Clients } from "@/components/home/clients"

export const metadata: Metadata = {
  title: "About",
  description:
    "Ali Imam's story, experience and skills: Head of Design, Design Engineer, product, UI/UX and graphic designer based in Delhi NCR.",
}

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col border-t-2 border-dotted bg-background">
      <HeroAbout />
      <Experience />
      <Clients />
      <Toolkit />
      <AboutMe />
      <Contact withCalendar={false} />
    </div>
  )
}
