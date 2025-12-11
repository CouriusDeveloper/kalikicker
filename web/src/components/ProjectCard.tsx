import type { Project } from '../types/content'

interface Props {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  const Wrapper: any = project.url ? 'a' : 'div'

  return (
    <Wrapper
      href={project.url}
      target={project.url ? '_blank' : undefined}
      rel={project.url ? 'noreferrer' : undefined}
      className={`bg-primary-light/60 rounded-3xl border border-primary-light p-6 flex flex-col gap-4 ${
        project.url ? 'transition hover:-translate-y-1 hover:shadow-card' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        <img src={project.logo} alt={project.name} className="w-16 h-16 object-contain" />
        <div>
          <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
          <p className="text-sm text-muted">{project.impact}</p>
        </div>
      </div>
      <p className="text-sm">{project.description}</p>
      {project.url && <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">Mehr erfahren →</span>}
    </Wrapper>
  )
}
