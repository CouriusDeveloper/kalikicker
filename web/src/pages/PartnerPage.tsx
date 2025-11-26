import { partners } from '../data/partners'
import { PartnerLogoGrid } from '../components/PartnerLogoGrid'

export const PartnerPage = () => (
  <div className="space-y-8">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Partner</p>
      <h1 className="text-4xl font-bold text-primary">Unsere Partner:innen</h1>
      <p className="text-muted text-lg">
        Ohne starke Partner wären unsere Camps nicht möglich. Danke für Vertrauen, Material und Förderung.
      </p>
    </header>
    <PartnerLogoGrid partners={partners} />
    <div className="bg-primary-light rounded-3xl p-6 text-center">
      <p className="text-lg font-semibold text-primary">Du möchtest Kooperationspartner werden?</p>
      <a href="mailto:partner@kalikicker.de" className="inline-flex mt-4 rounded-full bg-primary text-white px-6 py-3 font-semibold">
        Kontakt aufnehmen
      </a>
    </div>
  </div>
)
