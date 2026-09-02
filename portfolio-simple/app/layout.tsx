import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { GradientBackground } from "@/components/ui/gradient-background"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-simple.designali.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Ali Imam",
    template: "%s | Ali Imam",
  },
  description: "My portfolio, blog, and personal website.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className}`}>
      <body className="tracking-tight antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col justify-between">
            <GradientBackground
              className="fixed inset-0 -z-10 h-screen w-screen opacity-50"
              squareSize={1.5}
              gridGap={10}
              color="#6B7280"
              maxOpacity={1}
              flickerChance={0.5}
            />

            <main className="mx-auto w-full max-w-3xl border-x border-dotted bg-background px-3 shadow-2xl/20 md:px-6">
              <Header />
              <div className="my-6 min-h-screen space-y-6">{children}</div>
              <Footer />
            </main>
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Footer() {
  const links = [
    { name: "@designali", url: "https://x.com/designali_com" },
    { name: "youtube", url: "https://www.youtube.com/@designali-com" },
    { name: "instagram", url: "https://www.instagram.com/designali.code/" },
    { name: "github", url: "https://github.com/designali-com" },
  ]

  return (
    <footer className="mx-auto w-full max-w-2xl border-t border-dotted py-10 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
