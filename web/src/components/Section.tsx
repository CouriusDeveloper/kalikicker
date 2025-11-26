import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  background?: 'default' | 'muted'
  align?: 'left' | 'center'
  actions?: ReactNode
  children: ReactNode
}

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  background = 'default',
  align = 'left',
  actions,
  children,
}: SectionProps) => (
  <section
    id={id}
    className={`${background === 'muted' ? 'bg-primary-light/40 rounded-3xl p-8' : 'space-y-6'}`}
  >
    <div className={align === 'center' ? 'text-center max-w-3xl mx-auto space-y-4' : 'space-y-4'}>
      {eyebrow && <p className="text-sm uppercase tracking-widest text-primary">{eyebrow}</p>}
      {title && <h2 className="text-3xl font-semibold text-primary">{title}</h2>}
      {description && <p className="text-lg text-muted">{description}</p>}
      {actions && <div className="flex gap-3 flex-wrap justify-center md:justify-start">{actions}</div>}
    </div>
    <div className="mt-8">{children}</div>
  </section>
)
