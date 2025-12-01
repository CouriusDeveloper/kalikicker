import { ProjectCard } from '../components/ProjectCard'
import { useContent } from '../context/ContentContext'

export const ProjektePage = () => {
  const { projects } = useContent()

  return (
    <div className="space-y-8">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Spendenprojekte</p>
      <h1 className="text-4xl font-bold text-primary">Unsere Spendenprojekte</h1>
      <p className="text-muted text-lg">
        Pro teilnehmendem Kind spenden wir an eine dieser Organisationen. Gemeinsam schaffen wir Teilhabe.
      </p>
    </header>
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
  )
}
