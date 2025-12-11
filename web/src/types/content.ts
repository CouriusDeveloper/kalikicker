export type ScheduleEntry = {
  time: string
  activity: string
}

export type Camp = {
  id: string
  title: string
  season: 'Frühjahr' | 'Sommer' | 'Herbst'
  dateRange: string
  location: string
  venue: string
  ageGroup: string
  description: string
  price: number
  spots: 'Ausgebucht' | 'Wenige Plätze' | 'Freie Plätze'
  badge?: string
  heroImage: string
  services: string[]
  schedule: ScheduleEntry[]
  highlights: string[]
}

export type Event = {
  id: string
  title: string
  date: string
  location: string
  ageGroup: string
  status: 'Neu' | 'Bald voll' | 'Ausgebucht'
  campId?: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  qualification: string
  statement: string
  photo: string
}

export type Partner = {
  id: string
  name: string
  logo: string
  description: string
  url?: string
}

export type Project = {
  id: string
  name: string
  description: string
  impact: string
  logo: string
}

export type Job = {
  id: string
  title: string
  type: string
  location: string
  summary: string
  requirements: string[]
  email: string
}

export type LegalSection = {
  heading: string
  body: string
}

export type LegalDocument = {
  title: string
  stand?: string
  sections: LegalSection[]
}

export type ContactInfo = {
  companyName: string
  tagline?: string
  address: string
  phone?: string
  email?: string
  officeHours?: string
  footerNote?: string
  instagram?: string
  facebook?: string
}

export type LandingContent = {
  heroKicker?: string
  heroTitle?: string
  heroSubtitle?: string
  heroPrimaryLabel?: string
  heroPrimaryUrl?: string
  heroSecondaryLabel?: string
  heroSecondaryUrl?: string
  heroImage?: string
}

export type GalleryItem = {
  id: string
  title: string
  location?: string
  year?: string
  image?: string
}
