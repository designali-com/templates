"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/ui/theme-toggle"

const links = [
  { name: "home", url: "/" },
  { name: "work", url: "/work" },
  { name: "blogs", url: "/blogs" },
  { name: "contact", url: "/contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between border-b border-dotted py-6 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => {
          const isActive =
            link.url === "/"
              ? pathname === "/"
              : pathname === link.url || pathname.startsWith(`${link.url}/`)

          return (
            <Link
              key={link.name}
              href={link.url}
              className={
                isActive
                  ? "text-blue-500 transition-colors duration-200 dark:text-blue-500"
                  : "text-gray-400 transition-colors duration-200 hover:text-blue-500"
              }
            >
              {link.name}
            </Link>
          )
        })}
      </div>
      <ThemeToggle />
    </nav>
  )
}
