import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { camps } from '../data/camps'

const jerseySizes = ['116', '128', '140', '152', '164', 'S']
const shortSizes = ['116', '128', '140', '152', '164', 'S']
const gloveSizes = ['4', '5', '6', '7']

const genders = ['Mädchen', 'Junge', 'Divers']

export const BookingForm = () => {
  const [form, setForm] = useState({
    campId: '',
    childFirstName: '',
    childLastName: '',
    birthdate: '',
    gender: '',
    parentEmail: '',
    parentPhone: '',
    jerseySize: '',
    wantsPrint: 'Nein',
    printInfo: '',
    wantsShorts: 'Nein',
    shortSize: '',
    wantsSocks: 'Nein',
    wantsGloves: 'Nein',
    gloveSize: '',
    notes: '',
    acceptAgb: false,
    acceptPrivacy: false,
    acceptMedia: false,
  })

  const selectedCamp = useMemo(() => camps.find((camp) => camp.id === form.campId), [form.campId])

  const handleChange = <K extends keyof typeof form>(key: K, value: typeof form[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!form.acceptAgb || !form.acceptPrivacy) {
      alert('Bitte bestätige AGB und Datenschutz.')
      return
    }
    alert('Danke für deine Buchung! Wir melden uns mit allen Infos per Mail.')
    console.table(form)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-card border border-primary-light p-8 space-y-8">
      <div className="bg-primary-light/60 border border-primary rounded-2xl p-4 text-sm">
        Bitte fülle alle Pflichtfelder (*) aus. Mit Absenden bestätigst du, unsere AGB und Datenschutzerklärung gelesen zu haben.
      </div>

      <div className="grid gap-4">
        <label className="text-sm font-semibold text-primary">
          Camp-Auswahl *
          <select
            className="mt-2 w-full rounded-xl border border-primary-light px-4 py-3"
            value={form.campId}
            required
            onChange={(event) => handleChange('campId', event.target.value)}
          >
            <option value="">Bitte auswählen</option>
            {camps.map((camp) => (
              <option key={camp.id} value={camp.id}>
                {camp.title} – {camp.dateRange}
              </option>
            ))}
          </select>
        </label>
        {selectedCamp && (
          <p className="text-sm text-muted">
            {selectedCamp.location} · {selectedCamp.ageGroup} · {selectedCamp.price} €
          </p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-primary">Daten des Kindes</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            Vorname *
            <input
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.childFirstName}
              onChange={(event) => handleChange('childFirstName', event.target.value)}
            />
          </label>
          <label className="text-sm">
            Nachname *
            <input
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.childLastName}
              onChange={(event) => handleChange('childLastName', event.target.value)}
            />
          </label>
          <label className="text-sm">
            Geburtsdatum *
            <input
              type="date"
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.birthdate}
              onChange={(event) => handleChange('birthdate', event.target.value)}
            />
          </label>
          <label className="text-sm">
            Geschlecht *
            <select
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.gender}
              onChange={(event) => handleChange('gender', event.target.value)}
            >
              <option value="">Bitte wählen</option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-primary">Erziehungsberechtigte</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            E-Mail-Adresse *
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.parentEmail}
              onChange={(event) => handleChange('parentEmail', event.target.value)}
            />
          </label>
          <label className="text-sm">
            Telefonnummer *
            <input
              type="tel"
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.parentPhone}
              onChange={(event) => handleChange('parentPhone', event.target.value)}
            />
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-primary">Ausstattung</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            Kleidergröße Trikot *
            <select
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.jerseySize}
              onChange={(event) => handleChange('jerseySize', event.target.value)}
            >
              <option value="">Bitte wählen</option>
              {jerseySizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Wunschbedruckung +20 € *
            <select
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.wantsPrint}
              onChange={(event) => handleChange('wantsPrint', event.target.value)}
            >
              <option>Nein</option>
              <option>Ja</option>
            </select>
          </label>
        </div>
        {form.wantsPrint === 'Ja' && (
          <label className="text-sm mt-4 block">
            Name & Nummer *
            <input
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.printInfo}
              onChange={(event) => handleChange('printInfo', event.target.value)}
            />
          </label>
        )}

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            Hose gewünscht? (+15 €)
            <select
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.wantsShorts}
              onChange={(event) => handleChange('wantsShorts', event.target.value)}
            >
              <option>Nein</option>
              <option>Ja</option>
            </select>
          </label>
          {form.wantsShorts === 'Ja' && (
            <label className="text-sm">
              Hosengröße *
              <select
                required
                className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
                value={form.shortSize}
                onChange={(event) => handleChange('shortSize', event.target.value)}
              >
                <option value="">Bitte wählen</option>
                {shortSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            Stutzen? (+10 €)
            <select
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.wantsSocks}
              onChange={(event) => handleChange('wantsSocks', event.target.value)}
            >
              <option>Nein</option>
              <option>Ja</option>
            </select>
          </label>
          <label className="text-sm">
            TW-Handschuhe? (+20 €)
            <select
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.wantsGloves}
              onChange={(event) => handleChange('wantsGloves', event.target.value)}
            >
              <option>Nein</option>
              <option>Ja</option>
            </select>
          </label>
        </div>

        {form.wantsGloves === 'Ja' && (
          <label className="text-sm mt-4 block">
            Größe der Handschuhe *
            <select
              required
              className="mt-1 w-full rounded-xl border border-primary-light px-4 py-3"
              value={form.gloveSize}
              onChange={(event) => handleChange('gloveSize', event.target.value)}
            >
              <option value="">Bitte wählen</option>
              {gloveSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-primary">Wichtige Infos</h3>
        <textarea
          className="mt-2 w-full rounded-2xl border border-primary-light px-4 py-3 min-h-32"
          placeholder="Medizinische Hinweise, Allergien, Abholpersonen..."
          value={form.notes}
          onChange={(event) => handleChange('notes', event.target.value)}
        />
      </div>

      <div className="space-y-3 text-sm">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            checked={form.acceptAgb}
            onChange={(event) => handleChange('acceptAgb', event.target.checked)}
            className="mt-1"
          />
          <span>
            AGB gelesen und akzeptiert * (<a href="/agb" className="text-primary underline">anzeigen</a>)
          </span>
        </label>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            checked={form.acceptPrivacy}
            onChange={(event) => handleChange('acceptPrivacy', event.target.checked)}
            className="mt-1"
          />
          <span>
            Datenschutzerklärung zur Kenntnis genommen * (<a href="/datenschutz" className="text-primary underline">anzeigen</a>)
          </span>
        </label>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.acceptMedia}
            onChange={(event) => handleChange('acceptMedia', event.target.checked)}
            className="mt-1"
          />
          <span>Einwilligung Foto-/Videoaufnahmen</span>
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <button type="submit" className="rounded-full bg-primary text-white px-6 py-3 text-lg font-semibold">
          Buchung absenden
        </button>
        <p className="text-center text-sm text-muted">Du erhältst innerhalb von 24 Stunden eine Bestätigung per E-Mail.</p>
      </div>
    </form>
  )
}
