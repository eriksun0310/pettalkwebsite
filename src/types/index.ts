export interface Character {
  id: string
  name: string
  type: 'dog' | 'cat'
  personality: string
  quote: string
  image: string
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