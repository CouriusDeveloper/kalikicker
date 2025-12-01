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
