import { GalleryGrid } from '../components/GalleryGrid'
import { useContent } from '../context/ContentContext'

export const GaleriePage = () => {
  const { galleryItems, loading } = useContent()
  const hasItems = galleryItems.length > 0

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Galerie</p>
        <h1 className="text-4xl font-bold text-primary">Momente aus unseren Camps</h1>
        <p className="text-muted text-lg">Mehr Impressionen folgen laufend.</p>
      </header>

      <div className="bg-white rounded-3xl border border-primary-light p-6 flex flex-wrap gap-4 text-sm text-muted">
        <label className="flex flex-col">
          Jahr
          <select className="mt-1 rounded-xl border border-primary-light px-3 py-2" disabled>
            <option>Alle</option>
          </select>
        </label>
        <label className="flex flex-col">
          Ort
          <select className="mt-1 rounded-xl border border-primary-light px-3 py-2" disabled>
            <option>Alle</option>
          </select>
        </label>
      </div>

      {loading && !hasItems && <p className="text-muted">Galerie wird geladen …</p>}

      {hasItems ? (
        <GalleryGrid items={galleryItems} />
      ) : (
        <div className="rounded-3xl border border-dashed border-primary-light p-8 text-center text-muted">
          Noch keine Fotos veröffentlicht. Schau bald wieder vorbei!
        </div>
      )}

      <p className="text-sm text-muted text-center">
        Hinweis: Fotos entstehen nur mit Einwilligung der Sorgeberechtigten und werden DSGVO-konform verarbeitet.
      </p>
    </div>
  )
}
