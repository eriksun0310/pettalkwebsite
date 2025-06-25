import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Feature } from "@/types"

interface FeatureCardProps {
  feature: Feature
  isReversed?: boolean
}

export function FeatureCard({ feature, isReversed = false }: FeatureCardProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
        <div className="text-6xl">{feature.icon}</div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">{feature.title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
        <Button size="lg">
          立即體驗
        </Button>
      </div>
      
      <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
        <Card className="bg-muted/50 border-0">
          <CardContent className="p-12">
            <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
              <div className="text-4xl opacity-50">📱</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}