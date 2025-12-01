import { Link } from 'react-router-dom'
import type { Job } from '../types/content'

interface Props {
  job: Job
}

export const JobCard = ({ job }: Props) => (
  <div className="bg-white rounded-3xl border border-primary-light p-6 shadow-sm space-y-4">
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted">{job.type}</p>
      <h3 className="text-2xl font-semibold text-primary">{job.title}</h3>
      <p className="text-sm text-muted">{job.location}</p>
    </div>
    <p className="text-sm">{job.summary}</p>
    <ul className="text-sm list-disc list-inside text-muted">
      {job.requirements.map((req) => (
        <li key={req}>{req}</li>
      ))}
    </ul>
    <Link
      to={`mailto:${job.email}?subject=Bewerbung ${encodeURIComponent(job.title)}`}
      className="inline-flex rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold"
    >
      Per Mail bewerben
    </Link>
  </div>
)
