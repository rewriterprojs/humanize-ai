import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Brain, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Detection Tools Guide: GPTZero, Originality.ai & How to Bypass Them | Humanize AI",
  description:
    "Complete guide to AI detection tools including GPTZero, Originality.ai, Turnitin, and Winston AI. Learn how these tools work and how to bypass them with AI humanization.",
  keywords:
    "AI detection tools, GPTZero, Originality.ai, Turnitin, Winston AI, bypass AI detection, AI detector, content authenticity",
}

export default function AIDetectionToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Humanize AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/what-is-ai-humanization"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              What is AI Humanization
            </Link>
            <Link
              href="/content-humanization-guide"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Humanization Guide
            </Link>
            <Link
              href="/ai-writing-tools"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              AI Writing Tools
            </Link>
          </nav>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Try Free
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Detection Tools Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            AI Detection Tools: Complete Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive overview of popular AI detection tools including GPTZero, Originality.ai, Turnitin, and
            Winston AI. Learn how they work, their accuracy rates, and effective strategies to bypass them.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Bypass AI Detection Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Popular AI Detection Tools */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Popular AI Detection Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <Badge variant="destructive">High Risk</Badge>
                </div>
                <CardTitle>GPTZero</CardTitle>
                <CardDescription>
                  One of the most popular AI detection tools used by educators and content platforms. Claims 99%
                  accuracy in detecting ChatGPT and GPT-4 generated content.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accuracy Rate:</span>
                    <span className="font-semibold">85-92%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Detection Speed:</span>
                    <span className="font-semibold">Fast</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Free Tier:</span>
                    <span className="font-semibold">Limited</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <Badge variant="destructive">High Risk</Badge>
                </div>
                <CardTitle>Originality.ai</CardTitle>
                <CardDescription>
                  Professional-grade AI detection tool favored by content agencies and SEO professionals. Offers
                  detailed analysis and plagiarism detection.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accuracy Rate:</span>
                    <span className="font-semibold">90-96%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Detection Speed:</span>
                    <span className="font-semibold">Very Fast</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Free Tier:</span>
                    <span className="font-semibold">No</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <Badge variant="destructive">Critical Risk</Badge>
                </div>
                <CardTitle>Turnitin</CardTitle>
                <CardDescription>
                  Widely used in academic institutions for plagiarism and AI detection. Integrated into many learning
                  management systems worldwide.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accuracy Rate:</span>
                    <span className="font-semibold">88-94%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Detection Speed:</span>
                    <span className="font-semibold">Moderate</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Free Tier:</span>
                    <span className="font-semibold">Institutional</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <Badge variant="outline">Medium Risk</Badge>
                </div>
                <CardTitle>Winston AI</CardTitle>
                <CardDescription>
                  Newer AI detection tool with focus on accuracy and detailed reporting. Popular among content creators
                  and marketers.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accuracy Rate:</span>
                    <span className="font-semibold">80-87%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Detection Speed:</span>
                    <span className="font-semibold">Fast</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Free Tier:</span>
                    <span className="font-semibold">Available</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <Badge variant="outline">Medium Risk</Badge>
                </div>
                <CardTitle>Copyleaks</CardTitle>
                <CardDescription>
                  Comprehensive content analysis platform with AI detection capabilities. Offers API integration for
                  businesses.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accuracy Rate:</span>
                    <span className="font-semibold">82-89%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Detection Speed:</span>
                    <span className="font-semibold">Moderate</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Free Tier:</span>
                    <span className="font-semibold">Limited</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">Low Risk</Badge>
                </div>
                <CardTitle>Content at Scale</CardTitle>
                <CardDescription>
                  AI detection tool integrated with content creation platform. Focuses on content quality and
                  authenticity scoring.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accuracy Rate:</span>
                    <span className="font-semibold">75-83%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Detection Speed:</span>
                    <span className="font-semibold">Fast</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Free Tier:</span>
                    <span className="font-semibold">Available</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How Detection Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">How AI Detection Tools Work</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  Pattern Recognition Analysis
                </CardTitle>
                <CardDescription>
                  AI detection tools analyze text patterns, sentence structures, and linguistic markers that are
                  characteristic of AI-generated content. They look for repetitive patterns, unnatural phrasing, and
                  consistent tone that indicates artificial generation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Statistical Analysis
                </CardTitle>
                <CardDescription>
                  These tools use statistical models to measure perplexity (how predictable the text is) and burstiness
                  (variation in sentence complexity). AI-generated text typically shows lower perplexity and burstiness
                  compared to human writing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Machine Learning Models
                </CardTitle>
                <CardDescription>
                  Advanced detection tools employ machine learning models trained on millions of human and AI-generated
                  text samples. These models learn to identify subtle differences in writing style, vocabulary usage,
                  and content structure.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Detection Limitations
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>False positives: Human-written content sometimes flagged as AI-generated</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>Accuracy varies: Different tools show varying accuracy rates (75-96%)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>Language limitations: Most tools work best with English content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>Evolving AI: Newer AI models become harder to detect over time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bypass Strategies */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Effective Bypass Strategies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">AI Humanization Tools</CardTitle>
                <CardDescription>
                  The most effective method is using professional AI humanization tools that specifically transform AI
                  content into human-like text while preserving meaning and quality.
                </CardDescription>
                <div className="mt-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    Try Our Humanizer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manual Editing Techniques</CardTitle>
                <CardDescription>
                  Manual editing can help but is time-consuming. Focus on varying sentence structure, adding personal
                  anecdotes, changing vocabulary, and introducing natural imperfections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Mixing</CardTitle>
                <CardDescription>
                  Combine AI-generated content with human-written sections, but ensure seamless integration and
                  consistent voice throughout the piece.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prompt Engineering</CardTitle>
                <CardDescription>
                  Use specific prompts that encourage more human-like output from AI tools, such as requesting
                  conversational tone or personal examples.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Bypass AI Detection?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our advanced AI humanization technology achieves a 99.9% bypass rate across all major detection tools.
              Transform your AI content into natural, human-like text in seconds.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Humanizing Content
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>What is AI Humanization?</CardTitle>
                <CardDescription>Learn the fundamentals of AI humanization and why it matters.</CardDescription>
                <Link href="/what-is-ai-humanization">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Humanization Guide</CardTitle>
                <CardDescription>Step-by-step guide to humanizing AI-generated content effectively.</CardDescription>
                <Link href="/content-humanization-guide">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>AI Writing Tools</CardTitle>
                <CardDescription>Overview of popular AI writing tools and their detection risks.</CardDescription>
                <Link href="/ai-writing-tools">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Explore Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
