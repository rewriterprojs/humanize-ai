import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteNavigation } from "@/components/site-navigation"
import { RelatedContentSection } from "@/components/related-content-section"
import { Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Humanization Blog - Latest Insights, Tips & Industry News | Humanize AI",
  description:
    "Stay updated with the latest AI humanization techniques, detection tool updates, industry insights, and expert tips. Your go-to resource for AI content humanization knowledge.",
  keywords:
    "AI humanization blog, AI detection news, content humanization tips, AI writing insights, humanizer tool reviews, AI detection bypass techniques",
  openGraph: {
    title: "AI Humanization Blog - Latest Insights & Expert Tips",
    description:
      "Stay updated with the latest AI humanization techniques, detection tool updates, and expert insights.",
    type: "website",
  },
}

const blogPosts = [
  {
    slug: "ai-detection-tools-2024-comprehensive-analysis",
    title: "AI Detection Tools in 2024: A Comprehensive Analysis of Accuracy and Limitations",
    description:
      "Deep dive into the latest AI detection tools, their accuracy rates, and how they're evolving to catch AI-generated content.",
    category: "Analysis",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    featured: true,
  },
  {
    slug: "humanizing-chatgpt-content-advanced-techniques",
    title: "Advanced Techniques for Humanizing ChatGPT Content: Beyond Basic Rewrites",
    description:
      "Learn sophisticated methods to transform ChatGPT output into naturally human-sounding content that bypasses detection.",
    category: "Tutorial",
    publishDate: "2024-01-12",
    readTime: "12 min read",
    author: "Michael Rodriguez",
    featured: true,
  },
  {
    slug: "academic-integrity-ai-humanization-ethical-considerations",
    title: "Academic Integrity and AI Humanization: Navigating Ethical Considerations",
    description:
      "Exploring the ethical implications of AI content humanization in academic settings and best practices for students.",
    category: "Ethics",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    author: "Prof. Emily Watson",
    featured: false,
  },
  {
    slug: "gptzer-update-january-2024-new-detection-patterns",
    title: "GPTZero Update January 2024: New Detection Patterns and Bypass Strategies",
    description:
      "Latest updates to GPTZero's detection algorithms and proven strategies to maintain undetectable humanized content.",
    category: "News",
    publishDate: "2024-01-08",
    readTime: "5 min read",
    author: "Alex Thompson",
    featured: false,
  },
  {
    slug: "content-marketing-ai-humanization-case-study",
    title: "Content Marketing Success: How AI Humanization Improved Engagement by 340%",
    description:
      "Real-world case study showing how proper AI content humanization dramatically improved marketing performance.",
    category: "Case Study",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    author: "Lisa Park",
    featured: true,
  },
  {
    slug: "future-ai-detection-technology-predictions-2024",
    title: "The Future of AI Detection Technology: Predictions and Implications for 2024",
    description:
      "Expert predictions on how AI detection technology will evolve and what it means for content creators.",
    category: "Insights",
    publishDate: "2024-01-03",
    readTime: "7 min read",
    author: "Dr. James Liu",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      <SiteNavigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">AI Humanization Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay ahead with the latest insights, techniques, and industry news in AI content humanization. Expert
              analysis, practical tutorials, and cutting-edge research.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Posts */}
            <h2 className="text-3xl font-bold text-foreground mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <RelatedContentSection
          currentPage="blog"
          title="Explore Our Guides"
          description="Dive deeper into AI humanization with our comprehensive guides and resources"
        />
      </main>
    </>
  )
}
