import type { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  kicker?: string
  primaryAction: ReactNode
  secondaryAction?: ReactNode
  image?: string
}

export const Hero = ({ title, subtitle, kicker, primaryAction, secondaryAction, image }: HeroProps) => (
  <section className="bg-primary-light rounded-3xl px-8 py-12 flex flex-col gap-10 md:flex-row md:items-center shadow-card">
    <div className="flex-1 space-y-6">
      {kicker && <p className="text-sm uppercase tracking-[0.2em] text-primary">{kicker}</p>}
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">{title}</h1>
      <p className="text-lg text-muted">{subtitle}</p>
      <div className="flex flex-wrap gap-4">
        {primaryAction}
        {secondaryAction}
      </div>
    </div>
    <div className="flex-1">
      <div className="aspect-[4/3] w-full rounded-2xl bg-white border border-primary-light shadow-inner overflow-hidden">
        {image ? (
          <img src={image} alt="Kids playing football" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-muted">Bild folgt</div>
        )}
      </div>
    </div>
  </section>
)
