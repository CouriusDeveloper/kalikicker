import { Link, useParams } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

export const CampDetailPage = () => {
  const { campId } = useParams()
  const { camps, loading } = useContent()
  const camp = camps.find((item) => item.id === (campId ?? ''))

  if (!camp) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-primary">
          {loading ? 'Camp wird geladen …' : 'Camp nicht gefunden'}
        </h1>
        {!loading && (
          <Link to="/camps" className="text-primary underline">
            Zur Übersicht
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <nav className="text-sm text-muted">
        <Link to="/" className="text-primary">Startseite</Link> · <Link to="/camps" className="text-primary">Camps</Link> · {camp.title}
      </nav>
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Camp</p>
        <h1 className="text-4xl font-bold text-primary">{camp.title}</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-primary-light/70 rounded-3xl border border-primary p-6 space-y-4">
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted">Datum</dt>
              <dd className="font-semibold">{camp.dateRange}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">Ort</dt>
              <dd className="font-semibold text-right">{camp.location} · {camp.venue}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">Altersklasse</dt>
              <dd>{camp.ageGroup}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">Preis</dt>
              <dd className="text-2xl font-semibold">{camp.price} €</dd>
            </div>
          </dl>
          <p className="text-sm text-primary">
            Pro Kind spenden wir an eines unserer Sozialprojekte.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to={`/buchen?camp=${camp.id}`} className="rounded-full bg-primary text-white px-5 py-2 font-semibold">
              Jetzt buchen
            </Link>
            <a href="mailto:hey@kalikicker.de" className="rounded-full border border-primary text-primary px-5 py-2 font-semibold">
              Fragen stellen
            </a>
          </div>
        </div>
        <img src={camp.heroImage} alt={camp.title} className="rounded-3xl h-full object-cover" />
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Was dich erwartet</h2>
        <p className="text-lg text-muted">{camp.description}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Leistungen</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {camp.services.map((service) => (
            <li key={service} className="bg-white rounded-2xl border border-primary-light p-4">{service}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Tagesablauf</h2>
        <div className="bg-white rounded-3xl border border-primary-light overflow-hidden">
          <table className="w-full text-left">
            <tbody>
              {camp.schedule.map((item) => (
                <tr key={item.time} className="border-b border-primary-light/40">
                  <td className="px-6 py-4 font-semibold text-primary">{item.time}</td>
                  <td className="px-6 py-4">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Organisatorisches</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {camp.highlights.map((highlight) => (
            <div key={highlight} className="bg-primary-light rounded-3xl border border-primary-light p-4">
              {highlight}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
