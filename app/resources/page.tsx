import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteNavigation } from "@/components/site-navigation"
import {
  ArrowRight,
  Brain,
  FileText,
  Shield,
  Users,
  Zap,
  Target,
  Star,
  BookOpen,
  TrendingUp,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Humanization Resources: Complete Guide Library | Humanize AI",
  description:
    "Comprehensive library of AI humanization resources including guides, tools, tutorials, and best practices for bypassing AI detection and creating human-like content.",
  keywords:
    "AI humanization resources, AI detection bypass guides, humanize AI content, AI writing tools, content humanization tutorials",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Complete Resource Library
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            AI Humanization Resources
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your complete guide to AI humanization. Access comprehensive tutorials, tool comparisons, best practices,
            and expert insights to master the art of transforming AI content into human-like text.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Core Pillar Pages */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Essential Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-xl">What is AI Humanization?</CardTitle>
                <CardDescription className="mb-4">
                  Comprehensive introduction to AI humanization technology, how it works, and why it's essential for
                  modern content creation.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Fundamentals</Badge>
                  <Badge variant="outline">Technology</Badge>
                  <Badge variant="outline">Science</Badge>
                </div>
                <Link href="/what-is-ai-humanization">
                  <Button className="bg-primary hover:bg-primary/90">
                    Read Complete Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-xl">AI Detection Tools Guide</CardTitle>
                <CardDescription className="mb-4">
                  Complete overview of AI detection tools including GPTZero, Originality.ai, Turnitin, and effective
                  bypass strategies.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Detection</Badge>
                  <Badge variant="outline">Bypass</Badge>
                  <Badge variant="outline">Tools</Badge>
                </div>
                <Link href="/ai-detection-tools">
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Detection Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-xl">Content Humanization Guide</CardTitle>
                <CardDescription className="mb-4">
                  Step-by-step tutorial for humanizing AI-generated content with proven techniques and best practices
                  for different content types.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Tutorial</Badge>
                  <Badge variant="outline">Techniques</Badge>
                  <Badge variant="outline">Best Practices</Badge>
                </div>
                <Link href="/content-humanization-guide">
                  <Button className="bg-primary hover:bg-primary/90">
                    Learn Techniques
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-xl">AI Writing Tools Overview</CardTitle>
                <CardDescription className="mb-4">
                  Comprehensive guide to popular AI writing tools including ChatGPT, Claude, Gemini, and their
                  humanization requirements.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">AI Tools</Badge>
                  <Badge variant="outline">Comparison</Badge>
                  <Badge variant="outline">Analysis</Badge>
                </div>
                <Link href="/ai-writing-tools">
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore AI Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Case Specific Guides */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Use Case Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-4" />
                <CardTitle>For Students</CardTitle>
                <CardDescription className="mb-4">
                  Specific strategies for students to humanize AI content and bypass academic detection tools like
                  Turnitin while maintaining academic integrity.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Academic</Badge>
                  <Badge variant="secondary">Turnitin</Badge>
                </div>
                <Link href="/ai-humanization-for-students">
                  <Button variant="outline" className="bg-transparent">
                    Student Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <CardTitle>For Marketers</CardTitle>
                <CardDescription className="mb-4">
                  Marketing-focused humanization strategies for creating authentic, engaging content that performs well
                  in search engines and resonates with audiences.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Marketing</Badge>
                  <Badge variant="secondary">SEO</Badge>
                </div>
                <Link href="/ai-humanization-for-marketers">
                  <Button variant="outline" className="bg-transparent">
                    Marketing Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4" />
                <CardTitle>For Businesses</CardTitle>
                <CardDescription className="mb-4">
                  Enterprise-level humanization strategies for scaling content production while maintaining quality and
                  authenticity across all business communications.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Enterprise</Badge>
                  <Badge variant="secondary">Scale</Badge>
                </div>
                <Link href="/ai-humanization-for-businesses">
                  <Button variant="outline" className="bg-transparent">
                    Business Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tool-Specific Resources */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Tool-Specific Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-4" />
                <CardTitle>How to Bypass GPTZero</CardTitle>
                <CardDescription className="mb-4">
                  Complete step-by-step guide to bypassing GPTZero detection with proven techniques and professional
                  tools.
                </CardDescription>
                <Link href="/how-to-bypass-gptzer">
                  <Button variant="outline" className="bg-transparent">
                    GPTZero Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Best AI Humanizers 2024</CardTitle>
                <CardDescription className="mb-4">
                  Comprehensive comparison of the top AI humanizer tools with detailed reviews, features, and
                  effectiveness ratings.
                </CardDescription>
                <Link href="/best-ai-humanizers">
                  <Button variant="outline" className="bg-transparent">
                    Tool Comparison
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Blog & Articles</CardTitle>
                <CardDescription className="mb-4">
                  Latest insights, tips, and updates about AI humanization technology, detection tools, and industry
                  trends.
                </CardDescription>
                <Link href="/blog">
                  <Button variant="outline" className="bg-transparent">
                    Read Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Access</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/what-is-ai-humanization"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <Brain className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">Fundamentals</span>
            </Link>
            <Link
              href="/ai-detection-tools"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">Detection Tools</span>
            </Link>
            <Link
              href="/content-humanization-guide"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">How-to Guide</span>
            </Link>
            <Link
              href="/best-ai-humanizers"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <Star className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">Best Tools</span>
            </Link>
            <Link
              href="/ai-humanization-for-students"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <GraduationCap className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">For Students</span>
            </Link>
            <Link
              href="/how-to-bypass-gptzer"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <Target className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">Bypass GPTZero</span>
            </Link>
            <Link
              href="/ai-writing-tools"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">AI Tools</span>
            </Link>
            <Link
              href="/blog"
              className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium">Blog</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Humanizing AI Content?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use our professional AI humanization tool to transform your content with 99.9% bypass rate and
            lightning-fast processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Try Free Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              View All Guides
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
