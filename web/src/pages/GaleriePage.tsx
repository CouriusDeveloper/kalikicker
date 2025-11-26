import { GalleryGrid } from '../components/GalleryGrid'

const galleryItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    title: 'Abschlussrunde',
    location: 'Sommercamp Hamburg-Nord 2024',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1509023913720-34be34cfa8f1?auto=format&fit=crop&w=800&q=80',
    title: 'Technik-Parcours',
    location: 'Feriencamp Bergedorf',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    title: 'Torjubel',
    location: 'Herbstcamp Harburg',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=800&q=80',
    title: 'Girls-Only-Tag',
    location: 'Kooperation Kicking Girls',
  },
]

export const GaleriePage = () => (
  <div className="space-y-8">
    <header className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Galerie</p>
      <h1 className="text-4xl font-bold text-primary">Momente aus unseren Camps</h1>
      <p className="text-muted text-lg">Mehr Impressionen folgen laufend.</p>
    </header>

    <div className="bg-white rounded-3xl border border-primary-light p-6 flex flex-wrap gap-4 text-sm text-muted">
      <label className="flex flex-col">
        Jahr
        <select className="mt-1 rounded-xl border border-primary-light px-3 py-2">
          <option>Alle</option>
        </select>
      </label>
      <label className="flex flex-col">
        Ort
        <select className="mt-1 rounded-xl border border-primary-light px-3 py-2">
          <option>Alle</option>
        </select>
      </label>
    </div>

    <GalleryGrid items={galleryItems} />

    <p className="text-sm text-muted text-center">
      Hinweis: Fotos entstehen nur mit Einwilligung der Sorgeberechtigten und werden DSGVO-konform verarbeitet.
    </p>
  </div>
)
