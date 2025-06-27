import { ReactNode } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  id: string
  type?: 'text' | 'email' | 'textarea'
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
  maxLength?: number
  rows?: number
  error?: string
  className?: string
  children?: ReactNode
}

export function FormField({ 
  label, 
  id, 
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  maxLength,
  rows = 4,
  error,
  className = "",
  children
}: FormFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id} className={required ? "after:content-['*'] after:text-red-500 after:ml-1" : ""}>
        {label}
      </Label>
      {type === 'textarea' ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          rows={rows}
          className={error ? "border-red-500" : ""}
        />
      ) : children ? (
        children
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          className={error ? "border-red-500" : ""}
        />
      )}
      {maxLength && value && (
        <div className="text-sm text-muted-foreground text-right">
          {value.length}/{maxLength}
        </div>
      )}
      {error && (
        <div className="text-sm text-red-500">{error}</div>
      )}
    </div>
  )
}