export interface Testimonial {
  id: string
  name: string
  role: string
  context: 'mentoring' | 'music'
  quote: string
  linkedinUrl?: string
  avatarUrl?: string
}

export interface ContactRequest {
  name: string
  email: string
  message: string
  /** which page the enquiry came from, for routing/notifications */
  topic?: 'mentoring' | 'music' | 'general'
}
