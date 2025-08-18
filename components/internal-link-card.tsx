import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface InternalLinkCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  buttonText?: string
}

export function InternalLinkCard({
  title,
  description,
  href,
  icon: Icon,
  buttonText = "Learn More",
}: InternalLinkCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Link href={href}>
          <Button variant="outline" className="mt-4 bg-transparent">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
    </Card>
  )
}
