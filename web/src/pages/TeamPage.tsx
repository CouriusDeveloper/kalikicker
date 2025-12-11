import { TeamMemberCard } from '../components/TeamMemberCard'
import { useContent } from '../context/ContentContext'

const teamIntro = [
  'Wir haben uns bewusst dafür entschieden, unser Team aus erfahrenen Trainer:innen zusammenzustellen. Viele begleiten seit Jahren verschiedene Camps und kennen die Bedürfnisse der Kinder genau.',
  'Fachkompetenz, Freundlichkeit und soziale Stärke sind unsere wichtigsten Auswahlkriterien – kontinuierliche Fortbildungen sorgen dafür, dass wir immer nach modernen Standards trainieren.',
]

const trainerQualities = [
  'Lizenzen & pädagogische Expertise im Kinder- und Jugendfußball',
  'Empathie und klare Kommunikation – auch in Stresssituationen',
  'Spaß am Teamwork und Begeisterung für Bewegung',
]

export const TeamPage = () => {
  const { team } = useContent()

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Team</p>
        <h1 className="text-4xl font-bold text-primary">Unser Trainer:innen-Team</h1>
        <p className="text-muted text-lg">
          Pädagogisch geschult, lizensiert und mit viel Herzblut – lerne die Menschen hinter KaLi Kicker kennen.
        </p>
      </header>

      <section className="bg-white rounded-3xl border border-primary-light p-6 space-y-4">
        {teamIntro.map((paragraph) => (
          <p key={paragraph} className="text-muted text-base">
            {paragraph}
          </p>
        ))}
        <div>
          <h2 className="text-lg font-semibold text-primary">Worauf wir achten</h2>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {trainerQualities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
