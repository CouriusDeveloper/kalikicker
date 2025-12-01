import type { TeamMember } from '../types/content'

interface Props {
  member: TeamMember
}

export const TeamMemberCard = ({ member }: Props) => (
  <div className="bg-white rounded-3xl border border-primary-light/60 shadow-sm p-6 text-center space-y-4">
    <img src={member.photo} alt={member.name} className="w-28 h-28 rounded-full object-cover mx-auto" />
    <div>
      <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
      <p className="text-sm text-muted">{member.role}</p>
    </div>
    <p className="text-sm font-medium">{member.qualification}</p>
    <blockquote className="text-muted text-sm italic">“{member.statement}”</blockquote>
  </div>
)
