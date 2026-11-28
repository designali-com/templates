import { Instrument_Serif, Geist_Mono, Inter } from "next/font/google"
 
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CanvasRuler } from "@/components/ui/canvas-ruler";
import NowPlaying from "@/components/layout/now-playing";
import { profile } from "@/lib/portfolio";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
})

const description =
  "Ali Imam is a Head of Design and Design Engineer with 9+ years across brand, product design, UI/UX and frontend engineering. Open to full-time roles."

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Ali Imam",
    "Head of Design",
    "Design Engineer",
    "Founding Designer",
    "Product Designer",
    "UI UX Designer",
    "Frontend Designer",
    "Graphic Designer",
    "Brand Designer",
    "Design Systems",
    "React",
    "Next.js",
    "Designer portfolio India",
    "Delhi NCR designer",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description,
    url: profile.site,
    siteName: profile.name,
    images: ["/og.jpg"],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: profile.site,
  image: `${profile.site}${profile.photo}`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Delhi NCR", addressCountry: "IN" },
  worksFor: [
    { "@type": "Organization", name: "OPTM Health Care", url: "https://optmhealthcare.in" },
    { "@type": "Organization", name: "Predict Fit", url: "https://predict.fit" },
  ],
  knowsAbout: profile.roles,
  sameAs: [profile.linkedin, profile.github, profile.x, profile.instagram],
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
      className={cn("antialiased", fontMono.variable, fontSerif.variable, "font-sans", inter.variable)}
    >
      <body className="w-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      <ThemeProvider>
          <CanvasRuler>
            <Header />
            {children}
            <Footer />
          </CanvasRuler>
          <NowPlaying/>
        </ThemeProvider> 
      </body>
    </html>
  )
}
