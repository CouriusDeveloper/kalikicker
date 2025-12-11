import { JobCard } from '../components/JobCard'
import { useContent } from '../context/ContentContext'

const jobIntro = [
  'Als junges Unternehmen wachsen wir stetig und veranstalten jedes Jahr mehr Fußballcamps. Neben unserem festen Trainer:innenstamm suchen wir Menschen, die Spaß an Teamarbeit rund um Fußball, Sport und Spaß haben.',
  'Neben dem Platz sind wir auch offen für Unterstützung in Akquise und Organisation – wer Lust auf Verantwortung und Gestaltung hat, ist bei uns richtig.',
]

const jobFocus = [
  'Trainer:innen & Coachingsupport (auch Teilzeit oder studienbegleitend)',
  'Akquise-Team für Vereins- und Schulkooperationen',
  'Event- und Organisationshilfe bei Turnieren oder Sonderformaten',
]

export const JobsPage = () => {
  const { jobs } = useContent()

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Jobs</p>
        <h1 className="text-4xl font-bold text-primary">Jobs & Karriere</h1>
        <p className="text-muted text-lg">Werde Teil der KaLi Kicker Crew und begleite unsere Camps.</p>
      </header>

      <section className="bg-white rounded-3xl border border-primary-light p-6 space-y-3">
        {jobIntro.map((paragraph) => (
          <p key={paragraph} className="text-muted text-base">
            {paragraph}
          </p>
        ))}
        <div>
          <h2 className="text-lg font-semibold text-primary">Wir suchen besonders</h2>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {jobFocus.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

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
}
