import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
})

export const metadata: Metadata = {
  title: "designali — Design & Code",
  description:
    "Where thoughtful design meets production-ready code. I design and build digital experiences that look great, feel intuitive, and work beautifully.",
  keywords: [
    "UI UX Design",
    "Web Design",
    "Frontend Development",
    "React",
    "Next.js",
    "Design Engineering",
  ],
  authors: [{ name: "Ali Imam" }],
  creator: "Ali Imam",
  openGraph: {
    title: "designali — Design & Code",
    description:
      "Where thoughtful design meets production-ready code. I design and build digital experiences that look great, feel intuitive, and work beautifully.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        inter.variable,
        geistMono.variable,
        instrumentSerif.variable
      )}
    >
      <body className="font-sans">
        <ThemeProvider>
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}