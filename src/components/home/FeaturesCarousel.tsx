import Link from "next/link"
import { BaseCarousel } from "@/components/shared"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Feature } from "@/types"

interface FeaturesCarouselProps {
  features: Feature[]
  className?: string
}

export function FeaturesCarousel({ features, className = "" }: FeaturesCarouselProps) {
  const slides = features.map((feature) => (
    <Card key={feature.id} className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-5xl mb-4">{feature.icon}</div>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base">
          {feature.description}
        </CardDescription>
        <Button asChild variant="outline" className="w-full">
          <Link href={feature.href || "/app"}>了解更多</Link>
        </Button>
      </CardContent>
    </Card>
  ))

  return <BaseCarousel className={className}>{slides}</BaseCarousel>
}