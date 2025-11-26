import type { Project } from '../data/projects'

interface Props {
  project: Project
}

export const ProjectCard = ({ project }: Props) => (
  <div className="bg-primary-light/60 rounded-3xl border border-primary-light p-6 flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <img src={project.logo} alt={project.name} className="w-16 h-16 object-contain" />
      <div>
        <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
        <p className="text-sm text-muted">{project.impact}</p>
      </div>
    </div>
    <p className="text-sm">{project.description}</p>
  </div>
)
