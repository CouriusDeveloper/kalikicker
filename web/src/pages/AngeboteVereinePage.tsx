const angebote = [
  {
    title: 'Trainer:innen-Workshops',
    zielgruppe: 'Jugendabteilungen & Schul-AGs',
    inhalte: ['Methodik Kinderfußball', 'Safe Sport & Schutzkonzepte', 'Organisationshilfen für Camps'],
    dauer: '4 Stunden',
    ort: 'Bei euch im Verein oder online',
  },
  {
    title: 'Vereinscamps',
    zielgruppe: 'Vereine ohne eigenes Campangebot',
    inhalte: ['Wir übernehmen Planung', 'KaLi Trainer:innen vor Ort', 'Optional: Torwart- oder Girls-only-Modul'],
    dauer: '3–5 Tage',
    ort: 'Euer Sportgelände',
  },
]

export const AngeboteVereinePage = () => (
  <div className="space-y-8">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Vereine</p>
      <h1 className="text-4xl font-bold text-primary">Angebote für Vereine</h1>
      <p className="text-muted text-lg">Wir bringen Know-how und Energie in euren Verein.</p>
    </header>

    <div className="grid gap-6 md:grid-cols-2">
      {angebote.map((angebot) => (
        <div key={angebot.title} className="bg-white rounded-3xl border border-primary-light p-6 shadow-sm space-y-3">
          <h2 className="text-2xl font-semibold text-primary">{angebot.title}</h2>
          <p className="text-sm text-muted">Zielgruppe: {angebot.zielgruppe}</p>
          <ul className="text-sm list-disc list-inside text-muted">
            {angebot.inhalte.map((punkt) => (
              <li key={punkt}>{punkt}</li>
            ))}
          </ul>
          <p className="text-sm">Dauer: {angebot.dauer}</p>
          <p className="text-sm">Ort: {angebot.ort}</p>
          <a href="mailto:vereine@kalikicker.de" className="inline-flex rounded-full bg-primary text-white px-5 py-2 font-semibold">
            Anfrage senden
          </a>
        </div>
      ))}
    </div>

    <div className="bg-primary-light rounded-3xl p-6">
      <h2 className="text-2xl font-semibold text-primary">Individuelle Konzepte</h2>
      <p className="text-muted mt-2">
        Wir entwickeln mit euch zusammen Workshops, Talenttage oder Fortbildungen – perfekt abgestimmt auf euren Verein.
      </p>
      <a href="mailto:hey@kalikicker.de" className="inline-flex mt-4 rounded-full border border-primary text-primary px-5 py-2 font-semibold">
        Kontakt aufnehmen
      </a>
    </div>
  </div>
)
