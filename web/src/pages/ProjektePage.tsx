import { ProjectCard } from '../components/ProjectCard'
import { useContent } from '../context/ContentContext'

const spendenOrganisationen = [
  { name: 'Kinderhospiz Sternenbrücke', url: 'https://www.sternenbruecke.de' },
  { name: 'Kinderkrebshilfe Hamburg', url: 'https://www.kinderkrebs-hamburg.de' },
  { name: 'Diabetes Hilfe Nord', url: 'https://www.diabeteshilfe-nord.de' },
]

export const ProjektePage = () => {
  const { projects } = useContent()

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Spendenprojekte</p>
        <h1 className="text-4xl font-bold text-primary">Unsere Spendenprojekte</h1>
        <p className="text-muted text-lg">
          Pro teilnehmendem Kind spenden wir einen Euro an ein soziales Projekt – die Auswahl treffen wir gemeinsam mit dem jeweiligen Heimatverein.
        </p>
      </header>

      <section className="bg-white rounded-3xl border border-primary-light p-6 space-y-4">
        <p className="text-muted">
          Unser Ziel ist es, sportliche Förderung mit gesellschaftlicher Verantwortung zu verbinden. Neben finanziellem Support sorgen wir dafür,
          dass die Projekte mehr Sichtbarkeit bekommen – auf Social Media, bei Turnieren und in unseren Camps.
        </p>
        <div>
          <h2 className="text-lg font-semibold text-primary">Aktuell unterstützte Organisationen</h2>
          <ul className="mt-2 space-y-2 text-sm text-muted">
            {spendenOrganisationen.map((org) => (
              <li key={org.name}>
                •{' '}
                <a href={org.url} target="_blank" rel="noreferrer" className="underline">
                  {org.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
