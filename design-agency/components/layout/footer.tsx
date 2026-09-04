 
import { Github, Instagram, X } from "@designali/logos"

import { Logo } from "../logo"

const agencyLinks = [
  { label: "Strategy", href: "/services/strategy" },
  { label: "Branding", href: "/services/branding" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "Development", href: "/services/development" }, 
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" }, 
  { label: "Contact", href: "/contact" },
]

const resourceLinks = [
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="flex w-full flex-col pt-20">
      {/* Main Footer */}
      <div className="max-w-5xl mx-auto flex w-full flex-col justify-between md:flex-row">
        {/* Brand */}
        <div className="flex flex-col items-start gap-8 p-4 md:p-8">
          <a
            href="/"
            aria-label="DesignAli home"
            className="flex items-center gap-3"
          >
            <Logo className="size-14" />
          </a>

          <div className="max-w-md">
            <h2 className="text-lg font-medium">
              Design that moves brands forward.
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              DesignAli is a creative digital agency building distinctive
              brands, websites, and digital experiences for ambitious
              businesses.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="w-5" />
            </a>

            <a
              href="#"
              aria-label="X"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <X className="w-5" />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="w-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-8 p-4 sm:grid-cols-3 md:p-8">
          {/* Agency */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Agency</h3>

            <nav className="flex flex-col gap-2">
              {agencyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm leading-5 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Company</h3>

            <nav className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm leading-5 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Resources</h3>

            <nav className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm leading-5 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="relative mt-8 h-12 w-full self-stretch overflow-hidden border-y">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="relative h-full w-full">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 outline outline-[0.5px] outline-primary/40 outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 