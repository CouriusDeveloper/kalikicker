import { Link } from 'react-router-dom'
import type { Camp } from '../types/content'

interface CampCardProps {
  camp: Camp
}

export const CampCard = ({ camp }: CampCardProps) => (
  <div className="bg-white border border-primary-light/70 rounded-3xl overflow-hidden shadow-sm flex flex-col">
    <div className="relative">
      <img src={camp.heroImage} alt={camp.title} className="h-48 w-full object-cover" />
      <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 text-primary text-xs font-semibold px-4 py-1">
        {camp.season}
      </div>
      {camp.badge && (
        <div className="absolute top-4 right-4 inline-flex items-center rounded-full bg-accent text-primary-dark text-xs font-semibold px-4 py-1">
          {camp.badge}
        </div>
      )}
    </div>
    <div className="p-6 flex flex-col gap-3 flex-1">
      <p className="text-sm text-muted">{camp.dateRange}</p>
      <h3 className="text-2xl font-semibold text-primary">{camp.title}</h3>
      <p className="text-muted text-sm">{camp.location} · {camp.ageGroup}</p>
      <p className="text-sm flex-1">{camp.description}</p>
      <div className="flex items-center justify-between text-sm font-semibold text-primary">
        <span>{camp.price} €</span>
        <span className="text-muted">{camp.spots}</span>
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        <Link to={`/camps/${camp.id}`} className="flex-1 text-center rounded-full border border-primary text-primary px-4 py-2 text-sm font-semibold">
          Zum Camp
        </Link>
        <Link to={`/buchen?camp=${camp.id}`} className="flex-1 text-center rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold">
          Buchen
        </Link>
      </div>
    </div>
  </div>
)
