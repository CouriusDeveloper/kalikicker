import { useMemo, useState } from 'react'
import { EventList } from '../components/EventList'
import { useContent } from '../context/ContentContext'

export const TerminePage = () => {
  const { events } = useContent()
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('')

  const monthLabels = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  const monthMap: Record<string, number> = {
    januar: 0,
    februar: 1,
    märz: 2,
    maerz: 2,
    april: 3,
    mai: 4,
    juni: 5,
    juli: 6,
    august: 7,
    september: 8,
    oktober: 9,
    november: 10,
    dezember: 11,
  }

  const extractMonthLabel = (value: string) => {
    const normalized = value.toLowerCase().replace(/[–—]/g, '-').trim()
    const numericMatch = normalized.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/)
    if (numericMatch) {
      const monthIndex = Number(numericMatch[2]) - 1
      return monthIndex >= 0 && monthIndex < 12 ? monthLabels[monthIndex] : undefined
    }

    const monthMatch = normalized.match(/(januar|februar|märz|maerz|april|mai|juni|juli|august|september|oktober|november|dezember)/)
    if (monthMatch) {
      const monthIndex = monthMap[monthMatch[1]]
      return monthLabels[monthIndex]
    }

    return undefined
  }

  const collectUnique = (values: string[]) =>
    values.reduce<string[]>((acc, value) => (value && !acc.includes(value) ? [...acc, value] : acc), [])

  const locations = useMemo(() => collectUnique(events.map((event) => event.location)), [events])
  const ageGroups = useMemo(() => collectUnique(events.map((event) => event.ageGroup)), [events])
  const months = useMemo(
    () => collectUnique(events.map((event) => extractMonthLabel(event.date)).filter(Boolean) as string[]),
    [events]
  )

  const filteredEvents = useMemo(
    () =>
      events.filter((event) => {
        const monthLabel = extractMonthLabel(event.date)
        return (
          (!selectedLocation || event.location === selectedLocation) &&
          (!selectedAgeGroup || event.ageGroup === selectedAgeGroup) &&
          (!selectedMonth || monthLabel === selectedMonth)
        )
      }),
    [events, selectedLocation, selectedAgeGroup, selectedMonth]
  )

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
        Monat
        <select
          className="mt-2 w-full rounded-xl border border-primary-light px-4 py-3 text-sm"
          value={selectedMonth}
          onChange={(event) => setSelectedMonth(event.target.value)}
        >
          <option value="">Alle</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold text-primary">
        Altersklasse
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
      <div className="flex items-end">
        <button
          className="w-full rounded-full border border-primary text-primary px-4 py-2 text-sm font-semibold"
          onClick={() => {
            setSelectedLocation('')
            setSelectedMonth('')
            setSelectedAgeGroup('')
          }}
        >
          Zurücksetzen
        </button>
      </div>
    </div>

    <EventList events={filteredEvents} compact />
  </div>
  )
}
