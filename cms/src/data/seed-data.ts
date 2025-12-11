type ScheduleEntry = { time: string; activity: string }

type CampSeed = {
  title: string
  slug: string
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

type EventSeed = {
  title: string
  slug: string
  date: string
  location: string
  ageGroup: string
  status: 'Neu' | 'Bald voll' | 'Ausgebucht'
  campSlug?: string
}

type TeamMemberSeed = {
  name: string
  slug: string
  role: string
  qualification: string
  statement: string
  photo: string
}

type PartnerSeed = {
  name: string
  slug: string
  logo: string
  description: string
  url?: string
}

type ProjectSeed = {
  name: string
  slug: string
  description: string
  impact: string
  logo: string
  url?: string
}

type JobSeed = {
  title: string
  slug: string
  type: string
  location: string
  summary: string
  requirements: string[]
  email: string
}

export const campSeedData: CampSeed[] = [
  {
    title: 'Sommercamp Hamburg-Nord',
    slug: 'sommer-hamburg-nord',
    season: 'Sommer',
    dateRange: '22.–26. Juli 2025',
    location: 'Hamburg-Nord',
    venue: 'Sportpark Alsterdorf',
    ageGroup: '6–12 Jahre',
    description:
      'Fünf Tage voller Technik, Taktik und Teamgeist – inklusive Trikotset, gesunder Verpflegung und täglicher Highlight-Challenge.',
    price: 249,
    spots: 'Wenige Plätze',
    badge: 'Beliebt',
    heroImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Ganztägige Betreuung von 9–16 Uhr',
      'Lizenzierte Trainer:innen',
      'Trikot, Hose & Stutzen inklusive',
      'Tägliches Bio-Mittagessen & Snacks',
      'Torwart-Spezialtraining optional',
    ],
    schedule: [
      { time: '09:00', activity: 'Begrüßung & Warm-up' },
      { time: '10:00', activity: 'Technikstationen' },
      { time: '12:00', activity: 'Mittagspause & Regeneration' },
      { time: '13:00', activity: 'Spielformen & Challenges' },
      { time: '15:30', activity: 'Cool-down & Tagesausklang' },
    ],
    highlights: ['Daily MVP Award', 'Besuch HSV-Nachwuchstrainer', 'Spende an Kicking Girls'],
  },
  {
    title: 'Feriencamp Bergedorf',
    slug: 'feriencamp-bergedorf',
    season: 'Frühjahr',
    dateRange: '17.–20. März 2025',
    location: 'Hamburg-Bergedorf',
    venue: 'Kunstrasen Binnenfeldredder',
    ageGroup: '8–14 Jahre',
    description:
      'Intensivcamp mit Fokus Technik & Spielfreude für fortgeschrittene Kids. Inkl. Videoanalyse und Positions-Workshops.',
    price: 219,
    spots: 'Freie Plätze',
    heroImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Vier Trainingstage á 6 Stunden',
      'Videoanalyse & Feedbackgespräche',
      'Leistungsdiagnostik & Athletikteil',
      'Veggie-Catering & Getränkestation',
      'KaLi Kicker Skillbook',
    ],
    schedule: [
      { time: '09:00', activity: 'Ankommen & Tagesbriefing' },
      { time: '09:30', activity: 'Athletik & Koordination' },
      { time: '11:00', activity: 'Taktikmodule (Angriff/Verteidigung)' },
      { time: '13:00', activity: 'Mittag & Recovery' },
      { time: '14:00', activity: 'Turnierformen + Analyse' },
    ],
    highlights: ['Positionsspezifische Sessions', 'Optionales Torwartpaket', 'Spende an Viva con Agua'],
  },
  {
    title: 'Herbstcamp Harburg',
    slug: 'herbstcamp-harburg',
    season: 'Herbst',
    dateRange: '14.–18. Oktober 2025',
    location: 'Hamburg-Harburg',
    venue: 'Sportpark Jahnhöhe',
    ageGroup: '5–11 Jahre',
    description:
      'Buntes Spaßcamp mit Motto-Tagen, Teamspielen und Grundlagentraining für Einsteiger:innen.',
    price: 199,
    spots: 'Freie Plätze',
    heroImage: 'https://images.unsplash.com/photo-1509023913720-34be34cfa8f1?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Begrüßungsgeschenk & Urkunde',
      'Kleingruppentraining für alle Levels',
      'Gesundes Lunchbuffet',
      'Tägliche Motto-Challenges',
      'Abschlussevent mit Eltern',
    ],
    schedule: [
      { time: '08:30', activity: 'Check-in & freies Spiel' },
      { time: '09:30', activity: 'Technikparcours' },
      { time: '11:30', activity: 'Spielformen & Mini-Games' },
      { time: '13:00', activity: 'Lunch & Ruhezone' },
      { time: '14:30', activity: 'Team-Challenge & Verabschiedung' },
    ],
    highlights: ['Family Friday', 'Best-Fairplay-Award', 'Spende an Kinder helfen Kindern'],
  },
]

export const eventSeedData: EventSeed[] = [
  {
    title: 'Sommercamp Hamburg-Nord',
    slug: 'event-1',
    date: '22.–26.07.2025',
    location: 'Sportpark Alsterdorf',
    ageGroup: '6–12 Jahre',
    status: 'Bald voll',
    campSlug: 'sommer-hamburg-nord',
  },
  {
    title: 'Feriencamp Bergedorf',
    slug: 'event-2',
    date: '17.–20.03.2025',
    location: 'Kunstrasen Binnenfeldredder',
    ageGroup: '8–14 Jahre',
    status: 'Neu',
    campSlug: 'feriencamp-bergedorf',
  },
  {
    title: 'Herbstcamp Harburg',
    slug: 'event-3',
    date: '14.–18.10.2025',
    location: 'Sportpark Jahnhöhe',
    ageGroup: '5–11 Jahre',
    status: 'Neu',
    campSlug: 'herbstcamp-harburg',
  },
]

export const teamSeedData: TeamMemberSeed[] = [
  {
    name: 'Kathi Lindner',
    slug: 'kathi-lindner',
    role: 'Gründerin & sportliche Leitung',
    qualification: 'DFB A-Lizenz, Sportpädagogin',
    statement: 'Ich möchte, dass jedes Kind mutig spielt und gesehen wird.',
    photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Liam Köster',
    slug: 'liam-koester',
    role: 'Cheftrainer Technik',
    qualification: 'UEFA B-Lizenz, Athletikcoach',
    statement: 'Wir verbinden saubere Technik mit viel Spielwitz.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Maya Fernandez',
    slug: 'maya-fernandez',
    role: 'Koordinatorin Sozialprojekte',
    qualification: 'Sozialpädagogin, Safe Sport Trainerin',
    statement: 'Fußball ist ein Hebel für Teilhabe – on und off the pitch.',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Jonas Pereira',
    slug: 'jonas-pereira',
    role: 'Torwart- & Talentcoach',
    qualification: 'DFB Eliteteam TW, Sportpsychologe i.A.',
    statement: 'Selbstvertrauen + Fokus = starke Paraden.',
    photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80',
  },
]

export const partnerSeedData: PartnerSeed[] = [
  {
    name: 'Hamburger Volksbank',
    slug: 'hamburger-volksbank',
    logo: 'https://dummyimage.com/200x80/205645/ffffff&text=Volksbank',
    description: 'Fördert Stipendienplätze für Kinder aus einkommensschwachen Familien.',
    url: 'https://www.hamburger-volksbank.de',
  },
  {
    name: 'Derbystar',
    slug: 'derbystar',
    logo: 'https://dummyimage.com/200x80/174034/ffffff&text=Derbystar',
    description: 'Ausstatter unserer Trainingsmaterialien und Matchbälle.',
  },
  {
    name: 'Kicking Girls',
    slug: 'kicking-girls',
    logo: 'https://dummyimage.com/200x80/FFB347/174034&text=Kicking+Girls',
    description: 'Gemeinsame Projekte für mehr Mädchen im Vereinssport.',
    url: 'https://kicking-girls.de',
  },
  {
    name: 'Hamburg Wasser',
    slug: 'hamburg-wasser',
    logo: 'https://dummyimage.com/200x80/E4F2ED/205645&text=Hamburg+Wasser',
    description: 'Stellt Trinkwasserecken und nachhaltige Flaschen.',
  },
]

export const projectSeedData: ProjectSeed[] = [
  {
    name: 'Kicking Girls Hamburg',
    slug: 'kicking-girls-hamburg',
    description: 'Mentoring-Programm für Mädchenfußball an Stadtteilschulen.',
    impact: 'Spende pro Kind: 5 €',
    logo: 'https://dummyimage.com/120x120/E4F2ED/205645&text=KG',
    url: 'https://kicking-girls.de',
  },
  {
    name: 'Bunte Bande e.V.',
    slug: 'bunte-bande',
    description: 'Integration durch Sport für neu zugewanderte Kids.',
    impact: 'Finanzierung von Trainingssets & Fahrtkosten.',
    logo: 'https://dummyimage.com/120x120/FFB347/174034&text=BB',
    url: 'https://buntebande.de',
  },
  {
    name: 'Viva con Agua',
    slug: 'viva-con-agua',
    description: 'Wasserprojekte weltweit – verbunden mit unseren Turnieren.',
    impact: 'Spendenläufe innerhalb der Camps.',
    logo: 'https://dummyimage.com/120x120/205645/ffffff&text=VcA',
    url: 'https://www.vivaconagua.org',
  },
]

export const jobSeedData: JobSeed[] = [
  {
    title: 'Trainer:in Feriencamps',
    slug: 'trainerin-feriencamps',
    type: 'Honorarbasis',
    location: 'Großraum Hamburg',
    summary: 'Du leitest Trainingsstationen, betreust Kleingruppen und bringst gute Laune mit.',
    requirements: ['Mindestens C-Lizenz', 'Erfahrung mit Kids zwischen 6–12', 'Erweitertes Führungszeugnis'],
    email: 'jobs@kalikicker.de',
  },
  {
    title: 'Teamleitung Camps',
    slug: 'teamleitung-camps',
    type: 'Werkstudent:in',
    location: 'Hybrid',
    summary: 'Du organisierst Campabläufe, koordinierst Trainer:innen und bist erste Ansprechperson.',
    requirements: ['Organisationstalent', 'Kommunikationsstark', 'Sicherer Umgang mit Eltern'],
    email: 'jobs@kalikicker.de',
  },
  {
    title: 'Content Creator (m/w/d)',
    slug: 'content-creator',
    type: 'Minijob',
    location: 'Remote + Camps vor Ort',
    summary: 'Du begleitest Camps, schießt Fotos/Videos und setzt Stories auf.',
    requirements: ['Erste Erfahrung in Social Media', 'Eigenes Kamera- oder Handy-Setup', 'Affinität zu Sportcontent'],
    email: 'jobs@kalikicker.de',
  },
]
