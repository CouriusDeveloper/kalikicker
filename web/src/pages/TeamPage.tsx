import { TeamMemberCard } from '../components/TeamMemberCard'
import { useContent } from '../context/ContentContext'

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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {team.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  </div>
  )
}
