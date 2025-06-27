import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  background?: 'default' | 'muted' | 'primary'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  background = 'default',
  padding = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    default: '',
    muted: 'bg-muted/50',
    primary: 'bg-primary'
  }
  
  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16', 
    lg: 'py-20',
    xl: 'py-20 lg:py-32'
  }
  
  return (
    <section className={cn(paddingClasses[padding], backgroundClasses[background], className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  )
}