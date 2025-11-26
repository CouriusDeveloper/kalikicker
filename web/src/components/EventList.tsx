import { Link } from 'react-router-dom'
import type { Event } from '../data/events'

interface EventListProps {
  events: Event[]
  compact?: boolean
}

export const EventList = ({ events, compact = false }: EventListProps) => (
  <div className={`grid gap-4 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
    {events.map((event) => (
      <div key={event.id} className="bg-white border border-primary-light rounded-2xl p-5 shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted">
          <span>{event.date}</span>
          <span className="text-primary">{event.status}</span>
        </div>
        <h3 className="text-lg font-semibold text-primary">{event.title}</h3>
        <p className="text-sm text-muted">{event.location}</p>
        <p className="text-sm">{event.ageGroup}</p>
        <div className="flex gap-3 pt-3">
          {event.campId && (
            <Link
              to={`/camps/${event.campId}`}
              className="flex-1 text-center rounded-full border border-primary text-primary px-3 py-2 text-sm font-semibold"
            >
              Details
            </Link>
          )}
          <Link
            to={event.campId ? `/buchen?camp=${event.campId}` : '/buchen'}
            className="flex-1 text-center rounded-full bg-primary text-white px-3 py-2 text-sm font-semibold"
          >
            Jetzt buchen
          </Link>
        </div>
      </div>
    ))}
  </div>
)
