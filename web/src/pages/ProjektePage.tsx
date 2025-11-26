import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

export const ProjektePage = () => (
  <div className="space-y-8">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Sozialprojekte</p>
      <h1 className="text-4xl font-bold text-primary">Unsere Projekte</h1>
      <p className="text-muted text-lg">
        Pro teilnehmendem Kind spenden wir an eines dieser Projekte. Gemeinsam schaffen wir Teilhabe.
      </p>
    </header>
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
)
