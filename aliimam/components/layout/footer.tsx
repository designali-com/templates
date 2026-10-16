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

export function Footer() {
  return (
    <footer className={cn("relative max-w-6xl mx-auto xl:border-x-2 border-dotted")}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 p-6">
        <div className="col-span-6 flex flex-col gap-4 md:col-span-4">
          <p className="max-w-sm text-sm text-balance text-muted-foreground">
            A brand owned by Ali Imam.
          </p>
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
          <a href="mailto:hello@designali.com" className="text-sm hover:underline hover:text-primary">
            hello@designali.com
          </a>
        </div>

        {/* -------------------------------- */}
        {/* RESOURCES */}
        {/* -------------------------------- */}

        <div className="col-span-1 w-full md:col-span-1">
          <span className="text-xs text-muted-foreground">Design</span>

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
          <span className="text-xs text-muted-foreground">Code</span>

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
          <span className="text-xs text-muted-foreground">AI</span>

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
                aria-label={`Ask ${item.name} about Designali`}
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
          &copy; {new Date().getFullYear()} designali, All rights reserved
        </p>

        <span className="text-xs text-muted-foreground">·</span>

        <p className="text-xs text-muted-foreground">
          Built with <span className="text-primary">❤</span> by{" "}
          <a
            href="https://www.linkedin.com/in/aliimam-in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors hover:underline"
          >
            Ali Imam
          </a>
        </p>
      </div>
    </footer>
  )
}

/* -------------------------------- */
/* COMPONENT LINKS */
/* -------------------------------- */

const componentLinks = [
  {
    href: "https://designali.com",
    label: "Designali",
  },
  {
    href: "https://designali.com/blocks",
    label: "Blocks",
  },
]

/* -------------------------------- */
/* COMPANY LINKS */
/* -------------------------------- */

const companyLinks = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/works",
    label: "Works",
  },
  {
    href: "/story",
    label: "Story",
  },
]

const designLinks = [
  {
    href: "https://designali.com/docs/",
    label: "Components",
  },
  {
    href: "https://designali.com/tools/gradient",
    label: "Gradient Tool",
  },
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
    link: "https://www.linkedin.com/company/designali-com",
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
Tell me about Designali.

Explain:

1. What designali is
2. What products, components, and resources designali provides
3. What makes Designali different
4. Who designali is built for
5. How someone can get started

Use information from the official Designali website where possible.
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
