import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { useContent } from '../context/ContentContext'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { loading, error, refetch } = useContent()

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 bg-white text-primary px-4 py-2 rounded-full shadow-card"
      >
        Zum Inhalt springen
      </a>
      {loading && (
        <div className="bg-primary text-white text-center text-sm py-2">Inhalte werden geladen …</div>
      )}
      {error && !loading && (
        <div className="bg-red-600 text-white text-center text-sm py-2">
          Inhalte konnten nicht geladen werden.{' '}
          <button type="button" className="underline font-semibold" onClick={refetch}>
            Erneut versuchen
          </button>
        </div>
      )}
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
