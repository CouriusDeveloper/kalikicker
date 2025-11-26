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
  schedule: { time: string; activity: string }[]
  highlights: string[]
}

export const camps: Camp[] = [
  {
    id: 'sommer-hamburg-nord',
    title: 'Sommercamp Hamburg-Nord',
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
    heroImage:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
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
    id: 'feriencamp-bergedorf',
    title: 'Feriencamp Bergedorf',
    season: 'Frühjahr',
    dateRange: '17.–20. März 2025',
    location: 'Hamburg-Bergedorf',
    venue: 'Kunstrasen Binnenfeldredder',
    ageGroup: '8–14 Jahre',
    description:
      'Intensivcamp mit Fokus Technik & Spielfreude für fortgeschrittene Kids. Inkl. Videoanalyse und Positions-Workshops.',
    price: 219,
    spots: 'Freie Plätze',
    heroImage:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80',
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
    id: 'herbstcamp-harburg',
    title: 'Herbstcamp Harburg',
    season: 'Herbst',
    dateRange: '14.–18. Oktober 2025',
    location: 'Hamburg-Harburg',
    venue: 'Sportpark Jahnhöhe',
    ageGroup: '5–11 Jahre',
    description:
      'Buntes Spaßcamp mit Motto-Tagen, Teamspielen und Grundlagentraining für Einsteiger:innen.',
    price: 199,
    spots: 'Freie Plätze',
    heroImage:
      'https://images.unsplash.com/photo-1509023913720-34be34cfa8f1?auto=format&fit=crop&w=1600&q=80',
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

export const getCampById = (id: string) => camps.find((camp) => camp.id === id)
