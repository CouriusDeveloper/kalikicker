import type { LegalDocument } from '../types/content'

type LegalDocumentProps = {
  document?: LegalDocument
  fallbackTitle: string
  loading: boolean
}

export const LegalDocumentContent = ({ document, fallbackTitle, loading }: LegalDocumentProps) => {
  if (loading && !document) {
    return <p className="text-muted">Inhalte werden geladen …</p>
  }

  if (!document) {
    return (
      <article className="prose prose-slate max-w-3xl">
        <h1>{fallbackTitle}</h1>
        <p>Die Inhalte werden in Kürze veröffentlicht.</p>
      </article>
    )
  }

  return (
    <article className="prose prose-slate max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Rechtliches</p>
      <h1>{document.title || fallbackTitle}</h1>
      {document.sections.length === 0 && <p>Derzeit liegen keine detaillierten Angaben vor.</p>}
      {document.sections.map((section, index) => (
        <section key={`${section.heading || 'abschnitt'}-${index}`}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.body && <div dangerouslySetInnerHTML={{ __html: section.body }} />}
        </section>
      ))}
      {document.stand && <p>Stand: {document.stand}</p>}
    </article>
  )
}
