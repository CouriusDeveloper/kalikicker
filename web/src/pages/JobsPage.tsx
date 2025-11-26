import { jobs } from '../data/jobs'
import { JobCard } from '../components/JobCard'

export const JobsPage = () => (
  <div className="space-y-8">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Jobs</p>
      <h1 className="text-4xl font-bold text-primary">Jobs & Karriere</h1>
      <p className="text-muted text-lg">Werde Teil der KaLi Kicker Crew und begleite unsere Camps.</p>
    </header>
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
    <div className="bg-primary-light rounded-3xl p-6 text-center">
      <p className="text-lg font-semibold text-primary">Keine passende Stelle dabei?</p>
      <a href="mailto:jobs@kalikicker.de" className="inline-flex mt-4 rounded-full bg-primary text-white px-6 py-3 font-semibold">
        Initiativ bewerben
      </a>
    </div>
  </div>
)
