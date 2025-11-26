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
  title: "Humanize AI - Learn AI Content Humanization Techniques & Best Practices",
  description:
    "Master AI content humanization with comprehensive guides, tutorials, and techniques. Learn to transform AI-generated text into natural, human-like writing. Free educational resources for writers, students, and content creators.",
  keywords:
    "AI humanization techniques, humanize AI text, AI content transformation, AI detection bypass methods, natural language writing, AI writing improvement, content humanization guide, AI text converter, human-like content, AI content quality",
  authors: [{ name: "Humanize AI Team" }],
  creator: "Humanize AI",
  publisher: "Humanize AI Educational Resources",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Humanize AI - Learn AI Content Humanization Techniques",
    description:
      "Comprehensive educational resource for mastering AI content humanization. Free guides, tutorials, and expert techniques for transforming AI-generated text into natural human writing.",
    type: "website",
    locale: "en_US",
    url: "https://humanizeai.com",
    siteName: "Humanize AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Humanize AI - Learn AI Content Humanization Techniques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanize AI - Learn AI Content Humanization Techniques",
    description:
      "Master AI content humanization with free guides and expert tutorials. Transform AI text into natural human writing.",
    images: ["/og-image.jpg"],
    creator: "@humanizeai",
  },
  alternates: {
    canonical: "https://humanizeai.com",
  },
  category: "Education",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Humanize AI",
              description:
                "Educational platform providing comprehensive guides and techniques for AI content humanization",
              url: "https://humanizeai.com",
              sameAs: ["https://github.com/rewriterprojs/humanize-ai"],
              mainEntity: {
                "@type": "WebSite",
                name: "Humanize AI Educational Resources",
                url: "https://humanizeai.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://humanizeai.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              about: {
                "@type": "Thing",
                name: "AI Content Humanization",
                description:
                  "Educational resources and techniques for transforming AI-generated content into natural human-like text",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is AI content humanization?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI content humanization is the process of transforming AI-generated text into natural, human-like writing by adjusting tone, structure, and style while preserving the original meaning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I make AI content undetectable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To make AI content undetectable, vary sentence structures, add personal voice, use natural transitions, incorporate imperfections, and adjust phrasing to match human writing patterns.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the best AI humanization techniques?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Key techniques include varying sentence length, adding personal anecdotes, using conversational language, incorporating rhetorical questions, and adjusting tone to match the target audience.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
