export type Event = {
  id: string
  title: string
  date: string
  location: string
  ageGroup: string
  status: 'Neu' | 'Bald voll' | 'Ausgebucht'
  campId?: string
}

export const events: Event[] = [
  {
    id: 'event-1',
    title: 'Sommercamp Hamburg-Nord',
    date: '22.–26.07.2025',
    location: 'Sportpark Alsterdorf',
    ageGroup: '6–12 Jahre',
    status: 'Bald voll',
    campId: 'sommer-hamburg-nord',
  },
  {
    id: 'event-2',
    title: 'Feriencamp Bergedorf',
    date: '17.–20.03.2025',
    location: 'Kunstrasen Binnenfeldredder',
    ageGroup: '8–14 Jahre',
    status: 'Neu',
    campId: 'feriencamp-bergedorf',
  },
  {
    id: 'event-3',
    title: 'Herbstcamp Harburg',
    date: '14.–18.10.2025',
    location: 'Sportpark Jahnhöhe',
    ageGroup: '5–11 Jahre',
    status: 'Neu',
    campId: 'herbstcamp-harburg',
  },
]
