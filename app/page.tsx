import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Zap, Shield, Brain, FileText, Globe, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { SiteNavigation } from "@/components/site-navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <SiteNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Revolutionary AI Humanization Technology
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform AI Content into <span className="text-primary">Human-Like Text</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Our advanced AI humanizer converts artificial intelligence-generated content into natural, authentic text
            that bypasses AI detection while maintaining quality and meaning. Perfect for content creators, marketers,
            and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Start Humanizing Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              Watch Demo
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">AI Detection Bypass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Content Creators Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Documents Humanized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our AI Humanizer?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed to make your AI-generated content indistinguishable from human writing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>AI Detection Bypass</CardTitle>
                <CardDescription>
                  Advanced algorithms that make your content undetectable by AI detection tools like GPTZero,
                  Originality.ai, and Turnitin
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Lightning Fast Processing</CardTitle>
                <CardDescription>
                  Process thousands of words in seconds with our optimized AI humanization engine
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Content Quality Preservation</CardTitle>
                <CardDescription>
                  Maintain the original meaning, context, and quality while making text sound naturally human
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Multi-Language Support</CardTitle>
                <CardDescription>
                  Humanize content in over 50 languages with native-level fluency and cultural context
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Bulk Processing</CardTitle>
                <CardDescription>
                  Handle large volumes of content with our batch processing feature for enterprise needs
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>SEO Optimization</CardTitle>
                <CardDescription>
                  Maintain SEO value while humanizing content, preserving keywords and search engine rankings
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Our AI Humanization Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proprietary technology uses advanced natural language processing to transform AI text
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Input AI Content</h3>
              <p className="text-muted-foreground">
                Paste your AI-generated text from ChatGPT, Claude, Gemini, or any other AI writing tool
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Analysis & Processing</h3>
              <p className="text-muted-foreground">
                Our advanced algorithms analyze patterns, tone, and structure to identify AI-generated markers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Human-Like Output</h3>
              <p className="text-muted-foreground">
                Receive naturally flowing, human-sounding content that passes all AI detection tests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perfect for Every Content Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From academic writing to marketing content, our AI humanizer serves diverse industries
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
                  Transform AI-assisted research papers, essays, and academic content to meet institutional standards.
                  Learn more about{" "}
                  <Link
                    href="https://en.wikipedia.org/wiki/Academic_writing"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    academic writing standards
                  </Link>{" "}
                  and how AI detection affects scholarly work.
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
                  Create authentic blog posts, articles, and marketing copy that ranks well in search engines while
                  maintaining human appeal. Enhance your content with tools like{" "}
                  <Link
                    href="https://humanizerpro.ai"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HumanizerPro.ai
                  </Link>{" "}
                  for advanced humanization.
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
                  Humanize AI-generated emails, reports, and business documents to maintain professional credibility and
                  authentic communication.
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
                  Transform AI-generated stories, scripts, and creative content into naturally flowing narratives.
                  Complement with{" "}
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

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advanced AI Humanization Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge research in natural language processing and machine learning
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Science Behind Humanization</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Neural Language Models</h4>
                    <p className="text-muted-foreground">
                      Advanced transformer architectures trained on human writing patterns to understand natural
                      language flow
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Semantic Preservation</h4>
                    <p className="text-muted-foreground">
                      Maintains original meaning while restructuring sentences for natural human expression
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Pattern Recognition</h4>
                    <p className="text-muted-foreground">
                      Identifies and eliminates telltale signs of AI generation while preserving content quality
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Learn more about{" "}
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
                technologies that power our humanization engine.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h4 className="text-lg font-semibold mb-4">Humanization Process</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <span className="text-sm">Content Analysis & Pattern Detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <span className="text-sm">Semantic Structure Mapping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <span className="text-sm">Human-Style Reconstruction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <span className="text-sm">Quality Assurance & Validation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Humanize Your AI Content?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of content creators, marketers, and businesses who trust our AI humanization technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Internal Linking Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Explore Our Complete Guide Library</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle>Learn the Basics</CardTitle>
                <CardDescription>Understand AI humanization fundamentals and technology</CardDescription>
                <Link href="/what-is-ai-humanization">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle>Detection Tools</CardTitle>
                <CardDescription>Learn about AI detection tools and bypass strategies</CardDescription>
                <Link href="/ai-detection-tools">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Explore Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-8 w-8 text-primary" />
                  How-to Guides
                </CardTitle>
                <CardDescription>Step-by-step tutorials for humanizing AI content</CardDescription>
                <Link href="/content-humanization-guide">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Learn How
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-8 w-8 text-primary" />
                  Use Cases
                </CardTitle>
                <CardDescription>Specific guides for students, marketers, and businesses</CardDescription>
                <Link href="/ai-humanization-for-students">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Find Your Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/resources">
              <Button size="lg" variant="outline" className="bg-transparent">
                View All Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Humanize AI</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Transform AI-generated content into natural, human-like text with our advanced humanization technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-primary transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#api" className="hover:text-primary transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#guides" className="hover:text-primary transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#help" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/rewriterprojs/humanize-ai"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Project
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Humanize AI. All rights reserved. Transforming AI content into human-like text.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
