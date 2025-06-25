import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"

interface AppDownloadButtonsProps {
  variant?: "default" | "secondary"
  className?: string
}

export function AppDownloadButtons({ 
  variant = "default", 
  className = "" 
}: AppDownloadButtonsProps) {
  const buttonVariant = variant === "secondary" ? "secondary" : "default"
  const outlineVariant = variant === "secondary" ? "secondary" : "outline"

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <Button size="lg" variant={buttonVariant} className="gap-2">
        <Apple className="w-5 h-5" />
        App Store
      </Button>
      <Button size="lg" variant={outlineVariant} className="gap-2">
        <Smartphone className="w-5 h-5" />
        Google Play
      </Button>
    </div>
  )
}