import { ReactNode } from "react"

interface ContactItemProps {
  icon: ReactNode
  label: string
  content: ReactNode
  href?: string
  className?: string
}

export function ContactItem({ 
  icon, 
  label, 
  content, 
  href,
  className = ""
}: ContactItemProps) {
  const itemContent = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="text-primary">
        {icon}
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <div className="text-muted-foreground">
          {content}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a 
        href={href}
        className="hover:text-primary transition-colors"
      >
        {itemContent}
      </a>
    )
  }

  return itemContent
}