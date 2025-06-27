export interface Character {
  id: string
  name: string
  type: 'dog' | 'cat' | 'warning'
  personality: string
  quote: string
  image: string
  emoji?: string
  role?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  href?: string
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  content: string
  rating: number
  date: string
}