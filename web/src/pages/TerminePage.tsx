import { EventList } from '../components/EventList'
import { useContent } from '../context/ContentContext'

export const TerminePage = () => {
  const { events } = useContent()

  return (
    <div className="space-y-10">
    <header className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Camps & Veranstaltungen</p>
      <h1 className="text-4xl font-bold text-primary">Camps & Veranstaltungen</h1>
      <p className="text-muted text-lg">
        Alle kommenden Camps auf einen Blick. Filtere nach Ort, Monat oder Altersgruppe.
      </p>
    </header>

    <div className="bg-white rounded-3xl border border-primary-light shadow-sm p-6 grid gap-4 md:grid-cols-4">
      {['Ort', 'Monat', 'Altersklasse', 'Reset'].map((label) => (
        <label key={label} className="text-sm font-semibold text-primary">
          {label}
          {label !== 'Reset' ? (
            <select className="mt-2 w-full rounded-xl border border-primary-light px-4 py-3 text-sm">
              <option>Alle</option>
            </select>
          ) : (
            <button className="mt-2 w-full rounded-full border border-primary text-primary px-4 py-2 text-sm font-semibold">
              Zurücksetzen
            </button>
          )}
        </label>
      ))}
    </div>

    <EventList events={events} compact />
  </div>
  )
}
