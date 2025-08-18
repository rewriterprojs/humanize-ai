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
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanize AI - Transform AI Content into Human-Like Text",
    description: "Revolutionary AI humanizer that transforms AI-generated content into natural, human-like text.",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
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
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
