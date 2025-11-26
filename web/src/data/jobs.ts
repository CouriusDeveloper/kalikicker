export type Job = {
  id: string
  title: string
  type: string
  location: string
  summary: string
  requirements: string[]
  email: string
}

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: 'Trainer:in Feriencamps',
    type: 'Honorarbasis',
    location: 'Großraum Hamburg',
    summary: 'Du leitest Trainingsstationen, betreust Kleingruppen und bringst gute Laune mit.',
    requirements: ['Mindestens C-Lizenz', 'Erfahrung mit Kids zwischen 6–12', 'Erweitertes Führungszeugnis'],
    email: 'jobs@kalikicker.de',
  },
  {
    id: 'job-2',
    title: 'Teamleitung Camps',
    type: 'Werkstudent:in',
    location: 'Hybrid',
    summary: 'Du organisierst Campabläufe, koordinierst Trainer:innen und bist erste Ansprechperson.',
    requirements: ['Organisationstalent', 'Kommunikationsstark', 'Sicherer Umgang mit Eltern'],
    email: 'jobs@kalikicker.de',
  },
  {
    id: 'job-3',
    title: 'Content Creator (m/w/d)',
    type: 'Minijob',
    location: 'Remote + Camps vor Ort',
    summary: 'Du begleitest Camps, schießt Fotos/Videos und setzt Stories auf.',
    requirements: ['Erste Erfahrung in Social Media', 'Eigenes Kamera- oder Handy-Setup', 'Affinität zu Sportcontent'],
    email: 'jobs@kalikicker.de',
  },
]
