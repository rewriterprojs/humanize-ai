import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Humanize AI - Transform AI Content into Human-Like Text | Advanced AI Humanizer",
  description:
    "Revolutionary AI humanizer that transforms AI-generated content into natural, human-like text. Bypass AI detection, improve readability, and create authentic content with our advanced humanization technology.",
  keywords:
    "AI humanizer, humanize AI text, AI detection bypass, AI content converter, natural language processing, AI writing tool, content humanization, artificial intelligence, machine learning",
  authors: [{ name: "Humanize AI Team" }],
  creator: "Humanize AI",
  publisher: "Humanize AI",
  robots: "index, follow",
  openGraph: {
    title: "Humanize AI - Transform AI Content into Human-Like Text",
    description:
      "Revolutionary AI humanizer that transforms AI-generated content into natural, human-like text. Bypass AI detection and create authentic content.",
    type: "website",
    locale: "en_US",
    url: "https://humanizeai.com",
    siteName: "Humanize AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Humanize AI - Transform AI Content into Human-Like Text",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanize AI - Transform AI Content into Human-Like Text",
    description: "Revolutionary AI humanizer that transforms AI-generated content into natural, human-like text.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://humanizeai.com",
  },
  category: "Technology",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable}`}>
      <head>
        <link rel="canonical" href="https://humanizeai.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Humanize AI",
              description:
                "Revolutionary AI humanizer that transforms AI-generated content into natural, human-like text",
              url: "https://humanizeai.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1250",
              },
              author: {
                "@type": "Organization",
                name: "Humanize AI Team",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
