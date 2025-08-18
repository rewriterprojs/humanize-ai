import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Humanize AI</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {/* Pillar Pages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Learn
              <ChevronDown className="ml-1 h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/what-is-ai-humanization" className="w-full">
                  What is AI Humanization?
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ai-detection-tools" className="w-full">
                  AI Detection Tools Guide
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/content-humanization-guide" className="w-full">
                  Content Humanization Guide
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ai-writing-tools" className="w-full">
                  AI Writing Tools Overview
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Use Cases Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Use Cases
              <ChevronDown className="ml-1 h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/ai-humanization-for-students" className="w-full">
                  For Students
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ai-humanization-for-marketers" className="w-full">
                  For Marketers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ai-humanization-for-businesses" className="w-full">
                  For Businesses
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Tools
              <ChevronDown className="ml-1 h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/how-to-bypass-gptzer" className="w-full">
                  How to Bypass GPTZero
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/best-ai-humanizers" className="w-full">
                  Best AI Humanizers 2024
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ai-humanizer-comparison" className="w-full">
                  Tool Comparison
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Blog
          </Link>

          <Link
            href="/resources"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Resources
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Try Free
          </Button>
        </div>
      </div>
    </header>
  )
}
