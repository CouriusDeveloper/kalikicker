interface GalleryGridProps {
  items: { id: string; image?: string; title: string; location?: string; year?: string }[]
}

export const GalleryGrid = ({ items }: GalleryGridProps) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item) => {
      const meta = [item.location, item.year].filter(Boolean).join(' · ')
      return (
        <figure key={item.id} className="group relative overflow-hidden rounded-3xl border border-primary-light">
          {item.image ? (
            <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition-transform group-hover:scale-105" />
          ) : (
            <div className="h-64 w-full grid place-items-center bg-primary-light text-primary">Bild folgt</div>
          )}
          <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent text-white flex flex-col justify-end p-4">
            {meta && <p className="text-sm uppercase tracking-widest text-primary-light">{meta}</p>}
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </figcaption>
        </figure>
      )
    })}
  </div>
)
