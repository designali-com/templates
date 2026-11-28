import { CalendarDays, Download, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LinkedIn } from "@/components/layout/logos"
import { CalMeeting } from "@/components/home/cal-meeting"
import { profile } from "@/lib/portfolio"

export function Contact({ withCalendar = true }: { withCalendar?: boolean }) {
  return (
    <section id="contact" className="scroll-mt-4 border-t-2 border-dotted">
      <div className="mx-auto w-full max-w-6xl border-x-2 border-dotted p-2">
        <div className="flex flex-col items-center gap-6 border-2 border-dotted px-6 py-16 text-center md:py-24">
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            {profile.availability}
          </p>
          <h2 className="max-w-3xl font-serif text-5xl text-balance md:text-7xl">
            Hiring a designer who can also ship?
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            I&apos;m looking for my next full-time role as a Head of Design, Founding Designer or Design
            Engineer. Send me the role and I&apos;ll reply within a day.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button size="lg" nativeButton={false} render={<a href={`mailto:${profile.email}`} />}>
              <Mail data-icon="inline-start" />
              Email me
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" />}
            >
              <LinkedIn data-icon="inline-start" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href={profile.cal} target="_blank" rel="noopener noreferrer" />}
            >
              <CalendarDays data-icon="inline-start" />
              Book a 30-min call
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<a href={profile.cv} download target="_blank" rel="noopener noreferrer" />}
            >
              <Download data-icon="inline-start" />
              CV
            </Button>
          </div>
        </div>
      </div>
      {withCalendar && <CalMeeting />}
    </section>
  )
}
