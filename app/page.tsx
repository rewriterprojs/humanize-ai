import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Brain,
  FileText,
  Globe,
  Star,
  TrendingUp,
  BookOpen,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { SiteNavigation } from "@/components/site-navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Humanize AI - Learn AI Content Humanization Techniques",
            description:
              "Comprehensive guide and techniques for transforming AI-generated content into natural, human-like text. Learn best practices, methods, and strategies for AI content humanization.",
            url: "https://humanizeai.com",
            about: {
              "@type": "Thing",
              name: "AI Content Humanization",
              description: "Techniques and methods for converting AI-generated text into human-like writing",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://humanizeai.com",
                },
              ],
            },
          }),
        }}
      />

      {/* Header Navigation */}
      <SiteNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4">
            Learn AI Humanization Techniques
          </Badge>
          <h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
            itemProp="headline"
          >
            Master the Art of <span className="text-primary">AI Content Humanization</span>
          </h1>
          <p
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-pretty"
            itemProp="description"
          >
            Discover comprehensive techniques, strategies, and best practices for transforming AI-generated content into
            natural, authentic human-like text. Learn from expert guides, tutorials, and real-world examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Link href="#guides">
                Explore Guides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/what-is-ai-humanization">Learn More</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Comprehensive Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Humanization Techniques</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Free Educational Content</div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Learn AI Humanization?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential knowledge for content creators, writers, marketers, and anyone working with AI-generated content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Bypass AI Detection</CardTitle>
                <CardDescription>
                  Learn proven techniques to make your content undetectable by AI detection tools like GPTZero,
                  Originality.ai, and Turnitin while maintaining authenticity
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Enhance Writing Quality</CardTitle>
                <CardDescription>
                  Discover methods to improve readability, flow, and engagement while preserving the core message and
                  intent of your content
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Preserve Content Meaning</CardTitle>
                <CardDescription>
                  Master techniques to maintain original context, accuracy, and semantic value while transforming AI
                  text into human-like writing
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Multilingual Techniques</CardTitle>
                <CardDescription>
                  Understand humanization strategies across different languages and cultural contexts for global content
                  creation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Scale Your Content</CardTitle>
                <CardDescription>
                  Learn efficient workflows and processes for humanizing large volumes of AI-generated content
                  effectively
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>SEO Best Practices</CardTitle>
                <CardDescription>
                  Optimize humanized content for search engines while maintaining natural readability and user
                  engagement
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The AI Humanization Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the fundamental steps to transform AI-generated text into natural human writing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyze AI Patterns</h3>
              <p className="text-muted-foreground">
                Identify telltale signs of AI generation including repetitive structures, predictable phrasing, and
                unnatural patterns that signal machine-written content
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Apply Humanization Techniques</h3>
              <p className="text-muted-foreground">
                Use proven methods like varying sentence structure, adding personal touches, incorporating natural
                transitions, and adjusting tone to match human writing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Validate & Refine</h3>
              <p className="text-muted-foreground">
                Test your humanized content with detection tools, review for authenticity, and refine until it passes as
                naturally human-written text
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">AI Humanization Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to apply humanization techniques across different content types and industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Academic & Research Writing
                </CardTitle>
                <CardDescription>
                  Techniques for humanizing AI-assisted research papers, essays, and academic content to meet
                  institutional standards. Understand{" "}
                  <Link
                    href="https://en.wikipedia.org/wiki/Academic_writing"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    academic writing principles
                  </Link>{" "}
                  and learn how to maintain scholarly integrity. Explore tools like{" "}
                  <Link
                    href="https://superhumanizer.ai"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SuperHumanizer.ai
                  </Link>{" "}
                  for advanced humanization capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Content Marketing & SEO
                </CardTitle>
                <CardDescription>
                  Methods for creating authentic blog posts, articles, and marketing copy that ranks well and resonates
                  with readers. Enhance your workflow with platforms like{" "}
                  <Link
                    href="https://humanizerpro.ai"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HumanizerPro.ai
                  </Link>{" "}
                  for professional content transformation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Business Communications
                </CardTitle>
                <CardDescription>
                  Strategies for humanizing AI-generated emails, reports, proposals, and business documents to maintain
                  professional credibility and authentic voice in corporate communications
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  Creative Writing & Storytelling
                </CardTitle>
                <CardDescription>
                  Approaches for transforming AI-generated stories, scripts, and creative content into engaging
                  narratives. Combine techniques with{" "}
                  <Link
                    href="https://rewriterpro.ai"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RewriterPro.ai
                  </Link>{" "}
                  for comprehensive content enhancement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Understanding AI Humanization Science
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn the linguistic and technical foundations behind effective AI content humanization
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Humanization Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Natural Language Patterns</h4>
                    <p className="text-muted-foreground">
                      Understanding how humans naturally write and speak, including rhythm, varied sentence structures,
                      and conversational flow
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Semantic Preservation</h4>
                    <p className="text-muted-foreground">
                      Techniques to maintain original meaning and intent while restructuring content for more natural
                      expression
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">AI Pattern Recognition</h4>
                    <p className="text-muted-foreground">
                      Identifying common AI writing markers like overuse of certain phrases, perfect grammar, and lack
                      of personal voice
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Explore foundational concepts in{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/Natural_language_processing"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  natural language processing
                </Link>{" "}
                and
                <Link
                  href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                  className="text-primary hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  artificial intelligence
                </Link>{" "}
                to better understand content humanization technologies.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h4 className="text-lg font-semibold mb-4">Key Humanization Techniques</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold block mb-1">Vary Sentence Structure</span>
                    <span className="text-xs text-muted-foreground">
                      Mix short and long sentences for natural rhythm
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold block mb-1">Add Personal Voice</span>
                    <span className="text-xs text-muted-foreground">
                      Incorporate opinions, experiences, and unique perspectives
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold block mb-1">Use Natural Transitions</span>
                    <span className="text-xs text-muted-foreground">
                      Replace formulaic connectors with conversational bridges
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold block mb-1">Embrace Imperfection</span>
                    <span className="text-xs text-muted-foreground">
                      Occasional contractions and casual language feel more human
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Start Learning AI Humanization Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access our comprehensive library of guides, tutorials, and expert resources completely free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Link href="/content-humanization-guide">
                Read Complete Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <Link href="/blog">Browse Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="guides" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Comprehensive Learning Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">
                  <Link href="/what-is-ai-humanization" className="hover:text-primary transition-colors">
                    What is AI Humanization?
                  </Link>
                </CardTitle>
                <CardDescription>
                  Complete introduction to AI humanization concepts, techniques, and applications for transforming
                  machine-generated text
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">
                  <Link href="/ai-detection-tools" className="hover:text-primary transition-colors">
                    AI Detection Tools Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  Learn about popular AI detection software and how to create content that maintains authenticity while
                  bypassing detection
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">
                  <Link href="/content-humanization-guide" className="hover:text-primary transition-colors">
                    Complete Humanization Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  Step-by-step tutorial covering advanced techniques, best practices, and expert strategies for
                  effective humanization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">
                  <Link href="/ai-writing-tools" className="hover:text-primary transition-colors">
                    AI Writing Tools Overview
                  </Link>
                </CardTitle>
                <CardDescription>
                  Comprehensive analysis of AI writing platforms, their capabilities, and how to optimize their output
                  through humanization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">
                  <Link href="/ai-humanization-for-students" className="hover:text-primary transition-colors">
                    Student's Guide
                  </Link>
                </CardTitle>
                <CardDescription>
                  Specialized techniques for academic writing, maintaining integrity, and meeting educational standards
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <Star className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">
                  <Link href="/best-ai-humanizers" className="hover:text-primary transition-colors">
                    Best AI Humanizer Tools
                  </Link>
                </CardTitle>
                <CardDescription>
                  Detailed comparison and evaluation of leading AI humanization platforms and their unique features
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Humanize AI provides comprehensive educational resources on AI content humanization techniques and best
                practices.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Learning Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/what-is-ai-humanization"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    AI Humanization Basics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/content-humanization-guide"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Complete Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                    All Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Topics</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/ai-detection-tools"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    AI Detection Tools
                  </Link>
                </li>
                <li>
                  <Link href="/ai-writing-tools" className="text-muted-foreground hover:text-primary transition-colors">
                    AI Writing Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/best-ai-humanizers"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    AI Humanizer Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-humanization-for-students"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    For Students
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://github.com/rewriterprojs/humanize-ai"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://humanizerpro.ai"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HumanizerPro.ai
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://rewriterpro.ai"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RewriterPro.ai
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://superhumanizer.ai"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SuperHumanizer.ai
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Humanize AI. All rights reserved. Educational resource for AI content
              humanization techniques.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
