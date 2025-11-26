import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'AGB', to: '/agb' },
  { label: 'Datenschutz', to: '/datenschutz' },
  { label: 'Impressum', to: '/impressum' },
]

export const Footer = () => (
  <footer className="bg-primary-dark text-white mt-16">
    <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
      <div>
        <p className="text-sm uppercase tracking-widest text-primary-light">KaLi Kicker</p>
        <p className="text-2xl font-semibold mt-2">Fußballcamps für Kinder</p>
        <p className="text-primary-light mt-4">
          Sportpark Alsterdorf · Krochmannstraße 55 · 22297 Hamburg
        </p>
      </div>
      <div>
        <p className="font-semibold">Kontakt</p>
        <p className="text-primary-light mt-2">Tel. 040 123 45 67</p>
        <a href="mailto:hey@kalikicker.de" className="text-primary-light underline">
          hey@kalikicker.de
        </a>
        <p className="text-primary-light mt-2">Mo–Fr · 09–17 Uhr</p>
      </div>
      <div>
        <p className="font-semibold">Rechtliches</p>
        <ul className="mt-2 space-y-2">
          {footerLinks.map((link) => (
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
      © {new Date().getFullYear()} KaLi Kicker. Gemeinsam für faire Fußballcamps.
    </div>
  </footer>
)
