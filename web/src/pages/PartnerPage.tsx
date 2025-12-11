import { Link } from 'react-router-dom'
import { PartnerLogoGrid } from '../components/PartnerLogoGrid'
import { useContent } from '../context/ContentContext'

const anchorPartner = {
  name: 'Derbystar',
  description:
    'Derbystar begleitet uns als offizieller Ausrüster. Vom Spielball über die Trikots unserer Kids bis hin zur Ausstattung des Trainer:innen-Teams sorgt der Traditionshersteller dafür, dass wir immer top vorbereitet auf den Platz gehen.',
}

export const PartnerPage = () => {
  const { partners } = useContent()

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Partner</p>
        <h1 className="text-4xl font-bold text-primary">Unsere Partner:innen</h1>
        <p className="text-muted text-lg">
          Ohne starke Partner wären unsere Camps nicht möglich. Danke für Vertrauen, Material und Förderung.
        </p>
      </header>

      <PartnerLogoGrid partners={partners} />

      <section className="bg-white rounded-3xl border border-primary-light p-6 space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Featured Partner</p>
        <h2 className="text-2xl font-semibold text-primary">{anchorPartner.name}</h2>
        <p className="text-muted text-base">{anchorPartner.description}</p>
        <p className="text-sm text-muted">Weitere Ausrüster und Unterstützer folgen – wir freuen uns auf neue Kooperationen.</p>
      </section>

      <div className="bg-primary-light rounded-3xl p-6 text-center">
        <p className="text-lg font-semibold text-primary">Du möchtest Kooperationspartner werden?</p>
        <Link to="/impressum" className="inline-flex mt-4 rounded-full bg-primary text-white px-6 py-3 font-semibold">
          Kontakt aufnehmen
        </Link>
      </div>
    </div>
  )
}
