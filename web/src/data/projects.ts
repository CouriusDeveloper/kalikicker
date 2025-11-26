export type Project = {
  id: string
  name: string
  description: string
  impact: string
  logo: string
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'Kicking Girls Hamburg',
    description: 'Mentoring-Programm für Mädchenfußball an Stadtteilschulen.',
    impact: 'Spende pro Kind: 5 €',
    logo: 'https://dummyimage.com/120x120/E4F2ED/205645&text=KG',
  },
  {
    id: 'project-2',
    name: 'Bunte Bande e.V.',
    description: 'Integration durch Sport für neu zugewanderte Kids.',
    impact: 'Finanzierung von Trainingssets & Fahrtkosten.',
    logo: 'https://dummyimage.com/120x120/FFB347/174034&text=BB',
  },
  {
    id: 'project-3',
    name: 'Viva con Agua',
    description: 'Wasserprojekte weltweit – verbunden mit unseren Turnieren.',
    impact: 'Spendenläufe innerhalb der Camps.',
    logo: 'https://dummyimage.com/120x120/205645/ffffff&text=VcA',
  },
]
