import type { Partner } from '../types/content'

interface PartnerLogoGridProps {
  partners: Partner[]
}

export const PartnerLogoGrid = ({ partners }: PartnerLogoGridProps) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {partners.map((partner) => (
      <div key={partner.id} className="bg-white border border-primary-light rounded-2xl p-4 text-center shadow-sm">
        <div className="h-16 flex items-center justify-center">
          <img src={partner.logo} alt={partner.name} className="max-h-12 object-contain" />
        </div>
        <p className="text-sm font-semibold text-primary mt-3">{partner.name}</p>
        <p className="text-xs text-muted mt-1">{partner.description}</p>
        {partner.url && (
          <a href={partner.url} className="text-xs text-primary font-semibold inline-block mt-2" target="_blank" rel="noreferrer">
            Mehr erfahren →
          </a>
        )}
      </div>
    ))}
  </div>
)
