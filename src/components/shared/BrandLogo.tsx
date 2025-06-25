import Link from "next/link"

interface BrandLogoProps {
  href?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function BrandLogo({ 
  href = "/", 
  size = "md",
  className = ""
}: BrandLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl", 
    lg: "text-2xl"
  }

  const logoContent = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-2xl">🐾</span>
      <span className={`font-bold ${sizeClasses[size]}`}>Pet Talk</span>
    </div>
  )

  if (href) {
    return (
      <Link href={href}>
        {logoContent}
      </Link>
    )
  }

  return logoContent
}