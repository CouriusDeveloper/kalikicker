import { Link } from 'react-router-dom'
import { CampCard } from '../components/CampCard'
import { EventList } from '../components/EventList'
import { useContent } from '../context/ContentContext'

export const CampsOverviewPage = () => {
  const { camps, events } = useContent()

  return (
    <div className="space-y-10">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Camps & Veranstaltungen</p>
      <h1 className="text-4xl font-bold text-primary">Camps & Veranstaltungen</h1>
      <p className="text-muted text-lg">Alle aktuellen Termine auf einen Blick – inklusive Workshops und Special Events.</p>
    </header>

    <div className="bg-white rounded-3xl border border-primary-light shadow-sm p-6 grid gap-4 md:grid-cols-3">
      {['Ferien', 'Ort', 'Altersgruppe'].map((label) => (
        <label key={label} className="text-sm font-semibold text-primary">
          {label}
          <select className="mt-2 w-full rounded-xl border border-primary-light px-4 py-3 text-sm">
            <option>Alle</option>
          </select>
        </label>
      ))}
      <div className="flex items-end">
        <button className="w-full rounded-full border border-primary text-primary px-4 py-2 font-semibold">
          Filter anwenden
        </button>
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {camps.map((camp) => (
        <CampCard key={camp.id} camp={camp} />
      ))}
    </div>

    {events.length > 0 && (
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-primary">Nächste Veranstaltungen</h2>
        <EventList events={events} compact />
      </div>
    )}

    <div className="bg-primary-light rounded-3xl p-6 flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex-1">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Nicht fündig geworden?</p>
        <h2 className="text-2xl font-semibold text-primary">Wir planen auch individuelle Vereinscamps.</h2>
      </div>
      <Link to="/angebote-vereine" className="rounded-full bg-primary text-white px-6 py-3 font-semibold">
        Angebot anfragen
      </Link>
    </div>
  </div>
  )
}
