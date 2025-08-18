import { InternalLinkCard } from "./internal-link-card"
import { FileText, Shield, Users, Zap, Brain, Target } from "lucide-react"

interface RelatedContentSectionProps {
  currentPage?: string
  title?: string
  description?: string
}

export function RelatedContentSection({
  currentPage,
  title = "Related Resources",
  description = "Continue learning about AI humanization",
}: RelatedContentSectionProps) {
  // Define all available content with metadata
  const allContent = [
    {
      id: "what-is-ai-humanization",
      title: "What is AI Humanization?",
      description: "Understand the fundamentals and science behind AI content humanization.",
      href: "/what-is-ai-humanization",
      icon: Brain,
      category: "pillar",
    },
    {
      id: "ai-detection-tools",
      title: "AI Detection Tools",
      description: "Complete guide to AI detection tools and bypass strategies.",
      href: "/ai-detection-tools",
      icon: Shield,
      category: "pillar",
    },
    {
      id: "content-humanization-guide",
      title: "Humanization Guide",
      description: "Step-by-step guide to humanizing AI-generated content.",
      href: "/content-humanization-guide",
      icon: FileText,
      category: "pillar",
    },
    {
      id: "ai-writing-tools",
      title: "AI Writing Tools",
      description: "Overview of popular AI writing tools and their humanization needs.",
      href: "/ai-writing-tools",
      icon: Zap,
      category: "pillar",
    },
    {
      id: "ai-humanization-for-students",
      title: "For Students",
      description: "Specific guide for students to bypass academic AI detection.",
      href: "/ai-humanization-for-students",
      icon: Users,
      category: "supporting",
    },
    {
      id: "how-to-bypass-gptzer",
      title: "Bypass GPTZero",
      description: "Complete guide to bypassing GPTZero AI detection.",
      href: "/how-to-bypass-gptzer",
      icon: Target,
      category: "supporting",
    },
    {
      id: "best-ai-humanizers",
      title: "Best AI Humanizers",
      description: "Compare the top AI humanizer tools in 2024.",
      href: "/best-ai-humanizers",
      icon: Shield,
      category: "supporting",
    },
  ]

  // Filter out current page and select 3 most relevant
  const relatedContent = allContent.filter((content) => content.id !== currentPage).slice(0, 3)

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{title}</h2>
        {description && <p className="text-muted-foreground text-center mb-8">{description}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedContent.map((content) => (
            <InternalLinkCard
              key={content.id}
              title={content.title}
              description={content.description}
              href={content.href}
              icon={content.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
