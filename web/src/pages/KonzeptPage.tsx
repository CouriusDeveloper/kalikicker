const leitbildTexte = [
  'Unsere Ferien-Fußballcamps bieten Kindern eine motivierende, inklusive und sichere Umgebung, in der sie spielerisch den Spaß am Fußball und an Bewegung entdecken und stärken können.',
  'Wir stehen für Offenheit, Teamgeist und Freude am Miteinander. Jede*r ist willkommen!'
]

const unserZiel = [
  'Begeisterung für Sport und Bewegung wecken',
  'Gleichzeitig altersgerechte technische Grundlagen vermitteln',
  'Soziale Kompetenzen stärken',
  'Selbstvertrauen fördern',
  'Freundschaften ermöglichen'
]

const zielgruppe = ['Alle Kinder im Alter von 5 bis 14 Jahren', 'Sowohl Anfänger*innen als auch Vereinsspieler*innen']

const rahmenbedingungen = [
  'Campdauer: 3–4 Tage',
  'Tagesablauf: 10:00 – 16:00 Uhr',
  'Optional kann eine Frühbetreuung ab 8:30 Uhr gebucht werden',
  'Betreuungsschlüssel: kleine Gruppen von 8–12 Kindern pro Trainer*in',
  'Ort: Sportanlage/Turnhalle mit Ausweichmöglichkeiten bei Regen',
  'Verpflegung: gesundes Mittagessen (im Kontaktformular sind Hinweise hinterlegbar, z. B. vegetarisch/Allergien/Halal/Koscher)'
]

export const KonzeptPage = () => (
  <div className="space-y-10">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Konzept</p>
      <h1 className="text-4xl font-bold text-primary">Unser Konzept</h1>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">1. Leitbild und Grundgedanke</h2>
      <div className="bg-white rounded-3xl border border-primary-light p-6 space-y-3 text-lg text-muted">
        {leitbildTexte.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="bg-primary-light/30 rounded-3xl border border-primary-light p-6 space-y-3">
        <h3 className="text-xl font-semibold text-primary">Unser Ziel</h3>
        <ul className="space-y-1 text-lg">
          {unserZiel.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">2. Zielgruppe</h2>
      <div className="bg-white rounded-3xl border border-primary-light p-6 space-y-3 text-lg">
        {zielgruppe.map((item) => (
          <p key={item}>• {item}</p>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">3. Dauer und Rahmenbedingungen</h2>
      <ul className="bg-white rounded-3xl border border-primary-light p-6 space-y-3 text-lg">
        {rahmenbedingungen.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  </div>
)
