import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>

          <Header />
          {children}

        </ThemeProvider>
      </body>
    </html>
  )
}
