import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

export const Footer = () => {
  const { contact, agb, privacy, imprint } = useContent()
  const addressLines = contact?.address?.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  const legalLinks = [
    { label: agb?.title ?? 'AGB', to: '/agb' },
    { label: privacy?.title ?? 'Datenschutz', to: '/datenschutz' },
    { label: imprint?.title ?? 'Impressum', to: '/impressum' },
  ]
  const phoneHref = contact?.phone ? `tel:${contact.phone.replace(/\s+/g, '')}` : undefined
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-widest text-primary-light">{contact?.companyName ?? 'KaLi Kicker'}</p>
          <p className="text-2xl font-semibold mt-2">{contact?.tagline ?? 'Fußballcamps für Kinder'}</p>
          <div className="text-primary-light mt-4 space-y-1">
            {(addressLines && addressLines.length > 0
              ? addressLines
              : ['Sportpark Alsterdorf', 'Krochmannstraße 55', '22297 Hamburg']
            ).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Kontakt</p>
          {contact?.phone && (
            <a href={phoneHref} className="text-primary-light mt-2 block hover:text-white">
              {contact.phone}
            </a>
          )}
          {contact?.email && (
            <a href={`mailto:${contact.email}`} className="text-primary-light underline block">
              {contact.email}
            </a>
          )}
          {contact?.officeHours && <p className="text-primary-light mt-2">{contact.officeHours}</p>}
          {!contact?.phone && !contact?.email && (
            <>
              <p className="text-primary-light mt-2">Tel. 040 123 45 67</p>
              <a href="mailto:hey@kalikicker.de" className="text-primary-light underline block">
                hey@kalikicker.de
              </a>
            </>
          )}
        </div>
        <div>
          <p className="font-semibold">Rechtliches</p>
          <ul className="mt-2 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-light hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 text-center text-sm text-primary-light py-4">
        © {year} {contact?.companyName ?? 'KaLi Kicker'}. {contact?.footerNote ?? 'Gemeinsam für faire Fußballcamps.'}
      </div>
    </footer>
  )
}
