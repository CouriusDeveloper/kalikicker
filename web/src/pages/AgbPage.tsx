const sections = [
  { title: '1. Geltungsbereich', body: 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Camps und Angebote der KaLi Kicker gUG.' },
  { title: '2. Anmeldung & Vertrag', body: 'Mit der Bestätigung per E-Mail kommt der Vertrag zustande. Die Plätze sind limitiert.' },
  { title: '3. Zahlung', body: 'Die Campgebühr ist innerhalb von 7 Tagen nach Rechnung fällig. Ratenzahlung nach Absprache.' },
  { title: '4. Rücktritt', body: 'Bis 14 Tage vor Campstart erstatten wir 80 %, danach 50 %. Ein Ersatzkind kann nachgemeldet werden.' },
  { title: '5. Haftung', body: 'Wir haften für Vorsatz und grobe Fahrlässigkeit. Eine gültige Haftpflicht-/Unfallversicherung wird vorausgesetzt.' },
]

export const AgbPage = () => (
  <article className="prose prose-slate max-w-3xl">
    <h1>Allgemeine Geschäftsbedingungen</h1>
    {sections.map((section) => (
      <section key={section.title}>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
      </section>
    ))}
    <p>Stand: Januar 2025</p>
  </article>
)
