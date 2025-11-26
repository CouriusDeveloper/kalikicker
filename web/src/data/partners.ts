export type Partner = {
  id: string
  name: string
  logo: string
  description: string
  url?: string
}

export const partners: Partner[] = [
  {
    id: 'partner-1',
    name: 'Hamburger Volksbank',
    logo: 'https://dummyimage.com/200x80/205645/ffffff&text=Volksbank',
    description: 'Fördert Stipendienplätze für Kinder aus einkommensschwachen Familien.',
    url: 'https://www.hamburger-volksbank.de',
  },
  {
    id: 'partner-2',
    name: 'Derbystar',
    logo: 'https://dummyimage.com/200x80/174034/ffffff&text=Derbystar',
    description: 'Ausstatter unserer Trainingsmaterialien und Matchbälle.',
  },
  {
    id: 'partner-3',
    name: 'Kicking Girls',
    logo: 'https://dummyimage.com/200x80/FFB347/174034&text=Kicking+Girls',
    description: 'Gemeinsame Projekte für mehr Mädchen im Vereinssport.',
    url: 'https://kicking-girls.de',
  },
  {
    id: 'partner-4',
    name: 'Hamburg Wasser',
    logo: 'https://dummyimage.com/200x80/E4F2ED/205645&text=Hamburg+Wasser',
    description: 'Stellt Trinkwasserecken und nachhaltige Flaschen.',
  },
]
