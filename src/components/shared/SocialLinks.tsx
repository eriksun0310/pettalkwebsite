import { Instagram, Facebook } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

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
        href={CONTACT_INFO.social.instagram.url}
        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-5 h-5" />
        {showLabels && <span>{CONTACT_INFO.social.instagram.handle}</span>}
      </a>
      <a
        href={CONTACT_INFO.social.facebook.url}
        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="w-5 h-5" />
        {showLabels && <span>{CONTACT_INFO.social.facebook.name}</span>}
      </a>
    </div>
  )
}