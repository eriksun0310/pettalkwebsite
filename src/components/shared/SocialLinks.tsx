import { Instagram, Facebook } from "lucide-react"

interface SocialLinksProps {
  layout?: "horizontal" | "vertical"
  showLabels?: boolean
  className?: string
}

export function SocialLinks({ 
  layout = "horizontal", 
  showLabels = false,
  className = ""
}: SocialLinksProps) {
  const containerClass = layout === "horizontal" 
    ? "flex space-x-4" 
    : "space-y-4"

  return (
    <div className={`${containerClass} ${className}`}>
      <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
        {showLabels && <span>@pettalk_official</span>}
      </a>
      <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
        {showLabels && <span>Pet Talk 官方粉絲團</span>}
      </a>
    </div>
  )
}