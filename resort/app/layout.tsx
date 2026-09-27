import "./globals.css"
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Loader } from "@/components/layout/hero-loader";
import { caster, dastin, neueMontreal, slight, spara } from "@/lib/fonts";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { MusicPlayer } from "@/components/layout/music";
import { Footer } from "@/components/layout/footer";

// Metadata for SEO & Social Sharing
export const metadata: Metadata = {
  title: {
    default: "Spara Resort | Luxury Nature & Wellness Retreat",
    template: "%s | Spara Resort",
  },
  description:
    "Experience luxury, nature, and serenity at Spara Resort. Book your stay for an unmatched peaceful getaway with premium amenities and scenic views.",
  keywords: [
    "Spara Resort",
    "Luxury Resort",
    "Nature Retreat",
    "Wellness Resort",
    "Vacation Getaway",
    "Resort Booking",
  ],
  authors: [{ name: "Spara Resort" }],
  creator: "Spara Resort",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spararesort.com", // Replace with your actual domain
    title: "Spara Resort | Luxury Nature & Wellness Retreat",
    description:
      "Experience luxury, nature, and serenity at Spara Resort. Book your stay for an unmatched peaceful getaway.",
    siteName: "Spara Resort",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure to put an OG image in your public/images folder
        width: 1200,
        height: 630,
        alt: "Spara Resort - Luxury Stay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spara Resort | Luxury Nature & Wellness Retreat",
    description:
      "Experience luxury, nature, and serenity at Spara Resort. Book your stay for an unmatched peaceful getaway.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

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
        spara.variable,
        dastin.variable,
        caster.variable,
        slight.variable,
        neueMontreal.variable,
        "font-sans"
      )}
    >
      <body className="w-full relative h-full">
        <ThemeProvider> 
          <SmoothScroll>
            <Loader />
            <MusicPlayer/>
            <Header/>
            {children}
            <Footer/>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}