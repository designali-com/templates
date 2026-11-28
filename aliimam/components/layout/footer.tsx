import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import {
  ClaudeAI,
  GitHub,
  Grok,
  Instagram,
  LinkedIn,
  OpenAI,
  XformerlyTwitter,
} from "./logos"

import { ThemeSwitcher } from "./toggle-mode"
import { profile } from "@/lib/portfolio"

export function Footer() {
  return (
    <footer className={cn("relative max-w-6xl mx-auto xl:border-x-2 border-dotted")}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 p-6">
        <div className="col-span-6 flex flex-col gap-4 md:col-span-4">
          <div>
            <p className="font-medium">{profile.name}</p>
            <p className="max-w-sm text-sm text-balance text-muted-foreground">
              {profile.title}. {profile.availability}, {profile.location}.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <ThemeSwitcher />
            {socialLinks.map((item, index) => (
              <Button
                nativeButton={false}
               key={`social-${item.link}-${index}`} size="icon-lg" variant="ghost"
                render={<a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} social media`}
                />}> 
                {item.icon}
              </Button>

            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="text-sm hover:underline hover:text-primary">
            {profile.email}
          </a>
        </div>

        {/* -------------------------------- */}
        {/* RESOURCES */}
        {/* -------------------------------- */}

        <div className="col-span-1 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Portfolio</span>

          <div className="mt-2 flex flex-col gap-2">
            {componentLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* -------------------------------- */}
        {/* COMPANY */}
        {/* -------------------------------- */}

        <div className="col-span-1 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Products</span>

          <div className="mt-2 flex flex-col gap-2">
            {designLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Get in touch</span>

          <div className="mt-2 flex flex-col gap-2">
            {companyLinks.map(({ href, label }) => (
              <a
                className="w-max text-xs hover:text-primary hover:underline"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* -------------------------------- */}
        {/* ASK AI */}
        {/* -------------------------------- */}

        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">
            Ask AI about Ali Imam
          </span>

          <div className="mt-2 flex gap-2">
            {aiLinks.map((item, index) => (
              <a
                key={`ai-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask ${item.name} about Ali Imam`}
              >
                <Button size="icon-lg" variant="outline" className="group">
                  <span className="opacity-60 transition-opacity group-hover:opacity-100">
                    {item.icon}
                  </span>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-dotted py-4">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Ali Imam. All rights reserved
        </p>

        <span className="text-xs text-muted-foreground">·</span>

        <p className="text-xs text-muted-foreground">
          Designed and built by me in Next.js
        </p>
      </div>
    </footer>
  )
}

/* -------------------------------- */
/* COMPONENT LINKS */
/* -------------------------------- */

const componentLinks = [
  { href: "/#work", label: "Selected work" },
  { href: "/story", label: "Case studies" },
  { href: "/works", label: "Visual archive" },
  { href: "/about", label: "About" },
]

const designLinks = [
  { href: "https://predict.fit", label: "Predict" },
  { href: "https://optmhealthcare.in", label: "OPTM Health Care" },
  { href: "https://designali.com", label: "Designali" },
  { href: "https://www.designali.com/copycode", label: "CopyCode" },
]

const companyLinks = [
  { href: "/#contact", label: "Hire me" },
  { href: profile.cv, label: "Download CV" },
  { href: profile.cal, label: "Book a call" },
  { href: profile.linkedin, label: "LinkedIn" },
]

/* -------------------------------- */
/* SOCIAL LINKS */
/* -------------------------------- */

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/designali.code/",
  },
  {
    name: "X",
    icon: <XformerlyTwitter />,
    link: "https://x.com/designali_com",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    link: profile.linkedin,
  },
  {
    name: "GitHub",
    icon: <GitHub />,
    link: "https://github.com/designali-com",
  },
]

/* -------------------------------- */
/* ASK AI LINKS */
/* -------------------------------- */

const designaliPrompt = `
Tell me about Ali Imam (aliimam.designali.com), Head of Design and Design Engineer based in Delhi NCR, India.

Explain:

1. His experience and current roles (OPTM Health Care, Predict Fit, Designali)
2. His key case studies and what he designed and built
3. His skills across product design, UI/UX, brand, graphic design and frontend engineering
4. Why he would be a strong hire for a Head of Design, Founding Designer or Design Engineer role

Use information from his portfolio at https://aliimam.designali.com where possible.
`.trim()

const encodedPrompt = encodeURIComponent(designaliPrompt)

const aiLinks = [
  {
    name: "ChatGPT",
    icon: <OpenAI />,
    link: `https://chatgpt.com/?q=${encodedPrompt}`,
  },
  {
    name: "Claude",
    icon: <ClaudeAI />,
    link: `https://claude.ai/new?q=${encodedPrompt}`,
  },
  {
    name: "Grok",
    icon: <Grok />,
    link: `https://grok.com/?q=${encodedPrompt}`,
  },
]
