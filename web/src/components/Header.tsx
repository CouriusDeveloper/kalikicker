import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Startseite', to: '/' },
  { label: 'Camps & Veranstaltungen', to: '/camps' },
  { label: 'Konzept', to: '/konzept' },
  { label: 'Team', to: '/team' },
  { label: 'Spendenprojekte', to: '/projekte' },
  { label: 'Partner', to: '/partner' },
  { label: 'Galerie', to: '/galerie' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
      isActive ? 'bg-primary text-white' : 'text-text hover:bg-primary-light'
    }`

  return (
    <header className="bg-white/90 backdrop-blur border-b border-primary-light sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <img
            src="/IMG_3539.jpeg"
            alt="KaLi Kicker Logo"
            className="w-12 h-12 border border-primary-light object-contain shadow-sm"
          />
          <div>
            <p className="text-sm uppercase tracking-widest text-muted">KaLi Kicker</p>
          </div>
        </Link>

        <button
          aria-label="Menü öffnen"
          className="md:hidden text-primary border border-primary/30 rounded-full p-2"
          onClick={toggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-2 text-sm whitespace-nowrap">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClasses} onClick={close}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/buchen"
            className="ml-4 inline-flex items-center rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold shadow-sm hover:bg-primary-dark whitespace-nowrap"
          >
            Jetzt buchen
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-primary-light bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses} onClick={close}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/buchen"
              className="inline-flex items-center justify-center rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold whitespace-nowrap"
              onClick={close}
            >
              Jetzt buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
