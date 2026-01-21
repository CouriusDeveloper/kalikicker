import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CampCard } from '../components/CampCard'
import { EventList } from '../components/EventList'
import { useContent } from '../context/ContentContext'

export const CampsOverviewPage = () => {
  const { camps, events } = useContent()
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('')

  const collectUnique = (values: string[]) =>
    values.reduce<string[]>((acc, value) => (value && !acc.includes(value) ? [...acc, value] : acc), [])

  const seasons = useMemo(() => collectUnique(camps.map((camp) => camp.season)), [camps])
  const locations = useMemo(() => collectUnique(camps.map((camp) => camp.location)), [camps])
  const ageGroups = useMemo(() => collectUnique(camps.map((camp) => camp.ageGroup)), [camps])

  const filteredCamps = useMemo(
    () =>
      camps.filter((camp) =>
        (!selectedSeason || camp.season === selectedSeason) &&
        (!selectedLocation || camp.location === selectedLocation) &&
        (!selectedAgeGroup || camp.ageGroup === selectedAgeGroup)
      ),
    [camps, selectedSeason, selectedLocation, selectedAgeGroup]
  )

  return (
    <div className="space-y-10">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Camps & Veranstaltungen</p>
      <h1 className="text-4xl font-bold text-primary">Camps & Veranstaltungen</h1>
      <p className="text-muted text-lg">Alle aktuellen Termine auf einen Blick – inklusive Workshops und Special Events.</p>
    </header>

    <div className="bg-white rounded-3xl border border-primary-light shadow-sm p-6 grid gap-4 md:grid-cols-3">
      <label className="text-sm font-semibold text-primary">
        Ferien
        <select
          className="mt-2 w-full rounded-xl border border-primary-light px-4 py-3 text-sm"
          value={selectedSeason}
          onChange={(event) => setSelectedSeason(event.target.value)}
        >
          <option value="">Alle</option>
          {seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold text-primary">
        Ort
        <select
          className="mt-2 w-full rounded-xl border border-primary-light px-4 py-3 text-sm"
          value={selectedLocation}
          onChange={(event) => setSelectedLocation(event.target.value)}
        >
          <option value="">Alle</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold text-primary">
        Altersgruppe
        <select
          className="mt-2 w-full rounded-xl border border-primary-light px-4 py-3 text-sm"
          value={selectedAgeGroup}
          onChange={(event) => setSelectedAgeGroup(event.target.value)}
        >
          <option value="">Alle</option>
          {ageGroups.map((ageGroup) => (
            <option key={ageGroup} value={ageGroup}>
              {ageGroup}
            </option>
          ))}
        </select>
      </label>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {filteredCamps.map((camp) => (
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
