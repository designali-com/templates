import Link from "next/link"
 

import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio"

import { ModeSwitcher } from "./toggle-mode"

const navItems = [ 
  { href: "/story", label: "Case studies" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
]

export function Header() {
  return (
    <header className="z-50 mx-auto w-full max-w-6xl border-x-2 border-dotted">
      <nav aria-label="Main" className="flex h-14 w-full items-center justify-between gap-2 px-2 md:h-12">
        <Link
          href="/"
          className="flex min-w-0 items-baseline gap-2 pl-1 font-medium transition-colors hover:text-primary"
        >
          {profile.name}
          
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button size="sm" variant="ghost" nativeButton={false} render={<Link href={item.href} />}>
                {item.label}
              </Button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ModeSwitcher />
           
          <Button size="sm" nativeButton={false} render={<Link href="/#contact" />}>
            Hire me
          </Button>
        </div>
      </nav>
      <ul className="flex items-center justify-between gap-1 overflow-x-auto border-t border-dotted px-2 py-1 md:hidden">
        {navItems.map((item) => (
          <li key={item.href}>
            <Button size="xs" variant="ghost" nativeButton={false} render={<Link href={item.href} />}>
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  )
}
