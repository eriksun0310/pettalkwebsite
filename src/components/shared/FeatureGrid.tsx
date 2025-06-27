import { ReactNode } from "react"

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  features: FeatureItemProps[]
  className?: string
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="space-y-4">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export function FeatureGrid({ features, className = "" }: FeatureGridProps) {
  return (
    <div className={`grid md:grid-cols-4 gap-8 ${className}`}>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}