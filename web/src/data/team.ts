export type TeamMember = {
  id: string
  name: string
  role: string
  qualification: string
  statement: string
  photo: string
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Kathi Lindner',
    role: 'Gründerin & sportliche Leitung',
    qualification: 'DFB A-Lizenz, Sportpädagogin',
    statement: 'Ich möchte, dass jedes Kind mutig spielt und gesehen wird.',
    photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    name: 'Liam Köster',
    role: 'Cheftrainer Technik',
    qualification: 'UEFA B-Lizenz, Athletikcoach',
    statement: 'Wir verbinden saubere Technik mit viel Spielwitz.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    name: 'Maya Fernandez',
    role: 'Koordinatorin Sozialprojekte',
    qualification: 'Sozialpädagogin, Safe Sport Trainerin',
    statement: 'Fußball ist ein Hebel für Teilhabe – on und off the pitch.',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    name: 'Jonas Pereira',
    role: 'Torwart- & Talentcoach',
    qualification: 'DFB Eliteteam TW, Sportpsychologe i.A.',
    statement: 'Selbstvertrauen + Fokus = starke Paraden.',
    photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80',
  },
]
