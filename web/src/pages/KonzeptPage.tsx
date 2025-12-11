const leitbildTexte = [
  'Unsere Ferien-Fußballcamps bieten Kindern eine motivierende, inklusive und sichere Umgebung, in der sie spielerisch den Spaß am Fußball und an Bewegung entdecken können.',
  'Wir stehen für Offenheit, Teamgeist und Freude am Miteinander. Jede*r ist willkommen!'
]

const unserZiel = [
  'Bewegung lieben lernen',
  'Technik spielerisch festigen',
  'Selbstvertrauen stärken',
  'Freundschaften ermöglichen'
]

const zielgruppe = ['Alle Kinder von 5–14 Jahren', 'Anfänger*innen & Vereinsspieler*innen']

const rahmenbedingungen = [
  'Campdauer: 3–4 Tage',
  'Tagesablauf: 10:00 – 16:00 Uhr',
  'Frühbetreuung ab 8:30 Uhr möglich',
  'Gruppen: 8–12 Kinder pro Trainer*in',
  'Ort: Sportanlage/Turnhalle mit Ausweichoption',
  'Verpflegung: ausgewogenes Mittagessen + Snacks'
]

const heroHighlights = [
  { label: 'Campdauer', value: '3–4 Tage intensive Betreuung' },
  { label: 'Gruppen', value: '8–12 Kinder pro Trainer*in' },
  { label: 'Tagesflow', value: '10:00 – 16:00 Uhr inklusive Pausen' },
]

const paedagogischeGrundsaetze = [
  {
    title: 'Inklusion & Wertschätzung',
    points: [
      'Fehlerfreundliche Atmosphäre und Anti-Diskriminierungs-Kodex',
      'Alle Erfahrungsstufen willkommen – Fokus auf Miteinander',
    ],
  },
  {
    title: 'Soziale Werte',
    points: [
      'Teamgeist, Verantwortung und faire Kommunikation',
      'Empathie & Rücksichtnahme: ältere Kids unterstützen jüngere',
    ],
  },
  {
    title: 'Spaß & Flow',
    points: [
      'Kleine Wettbewerbe, Funino-Formate und kreative Spielformen',
      'Motivation wichtiger als Leistung – jedes Kind erlebt Erfolge',
    ],
  },
]

const methodischerAnsatz = [
  'Spielerisches Lernen in echten Spielsituationen',
  'Individuelle Förderung über variable Schwierigkeitsstufen',
  'Kurze, abwechslungsreiche Einheiten statt monotone Wiederholung',
  'Positive Coaching-Sprache mit klaren, ermutigenden Impulsen',
]

const tagesablauf = [
  { time: '10:00 – 10:30', content: 'Ankommen, Begrüßung, Warm-up & Koordinationsspiele' },
  { time: '10:30 – 12:00', content: 'Training 1: Technikstationen (Dribbling, Passen, Torabschluss)' },
  { time: '12:00 – 13:00', content: 'Mittagspause inkl. Workshop & Bewegungspause' },
  { time: '13:00 – 15:00', content: 'Training 2: Spielformen, Challenges & Teamaufgaben' },
  { time: '15:00 – 15:30', content: 'Feedback-Slots, Reflexion, Teambuilding' },
  { time: '15:30 – 16:00', content: 'Abschlussspiel, Highlight-Moment & Verabschiedung' },
]

const inhalteSchwerpunkte = [
  'Motorik & Koordination: Lauf-ABC, Reaktionsspiele, Balance',
  'Technik: Dribbling, Ballkontrolle, Pass- und Schusspräzision',
  'Bewegungsfreude: Parcours, Fangspiele, kreative Variationen',
  'Sozialverhalten: Teamaufgaben, Fairplay-Aktionen, Gesprächsrunden',
  'Kreativität: freie Spielphasen ohne Vorgaben',
]

const besondereProgrammpunkte = [
  'Fair-Play-Award für besondere Teamplayer-Momente',
  'Mini-WM am Abschlusstag inkl. eigenem Branding der Teams',
  'Autogramm- & Fotostunde mit dem Trainer:innen-Team',
  'KaLi-Kicker-Medaillen & Erinnerungsfotos für alle Kids',
]

const sicherheitOrganisation = [
  'Erste-Hilfe-Setup inkl. geschultem Personal vor Ort',
  'Dokumentation von Allergien, Abholberechtigungen & Anwesenheiten',
  'Wetterkonzept mit Schattenpausen und Hallenausweichplan',
]

const nachhaltigkeit = [
  'Zusammenarbeit mit regionalen Partnern & Caterern',
  'Wertevermittlung zu Verantwortung, Teamplay & nachhaltigem Handeln',
  'Ressourcenschonende Materialien und Mehrweg-Equipment',
]

export const KonzeptPage = () => (
  <div className="space-y-16 pb-20">
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-dark via-primary to-[#2F7A62] px-8 py-12 text-white shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" aria-hidden />
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full border border-white/20" aria-hidden />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr,1.2fr] lg:gap-12">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Konzept</p>
          <h1 className="text-4xl font-bold leading-tight">Feriencamps mit Haltung & Herz</h1>
          <div className="space-y-4 text-lg text-white/90">
            {leitbildTexte.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {unserZiel.map((item) => (
              <span key={item} className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Warum KaLi-Kicker</p>
          <h2 className="mt-4 text-2xl font-semibold">Ganzheitliche Camps für alle Kids</h2>
          <p className="mt-3 text-white/85">
            Wir denken Training, Betreuung und Pädagogik zusammen: strukturierte Abläufe, echte Spielfreude und sichere Rahmenbedingungen
            treffen auf klare Wertearbeit.
          </p>
          <dl className="mt-6 grid gap-5 rounded-2xl bg-white/5 p-5 text-left md:grid-cols-2 xl:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.label}
                className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 shadow-inner"
              >
                <dt className="text-sm uppercase tracking-[0.3em] text-white/70 whitespace-nowrap">{highlight.label}</dt>
                <dd className="text-lg font-semibold leading-snug text-white">{highlight.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <section className="grid gap-8 rounded-[32px] bg-white p-10 shadow-card md:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">01 · Zielgruppe</p>
        <h2 className="text-3xl font-semibold text-primary">Alle Kinder, die kicken möchten</h2>
        <p className="text-lg text-muted">
          Ob erste Ballkontakte oder Vereinsspiel – wir holen jedes Kind auf dem persönlichen Niveau ab und fördern es in einer sicheren,
          wertschätzenden Umgebung.
        </p>
        <div className="flex flex-wrap gap-3">
          {zielgruppe.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary-light bg-primary-light/60 px-4 py-2 text-sm font-semibold text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-primary-light bg-primary-light/40 p-6">
        <h3 className="text-lg font-semibold text-primary">Rahmenbedingungen</h3>
        <ul className="mt-4 grid gap-3 text-sm text-muted sm:text-base md:grid-cols-2">
          {rahmenbedingungen.map((item) => (
            <li key={item} className="rounded-2xl bg-white/70 px-4 py-3 text-primary">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">02 · Pädagogische Grundsätze</p>
        <h2 className="text-3xl font-semibold text-primary">Wertevermittlung, die spürbar ist</h2>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {paedagogischeGrundsaetze.map((block) => (
          <div key={block.title} className="rounded-[28px] border border-primary-light bg-white p-6 shadow-card">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">{block.title}</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {block.points.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="rounded-[32px] bg-gradient-to-br from-primary-dark to-primary p-8 text-white shadow-card">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">03 · Trainingskonzept</p>
        <h2 className="mt-3 text-3xl font-semibold">Methodischer Ansatz</h2>
        <ul className="mt-6 space-y-4 text-white/90">
          {methodischerAnsatz.map((item) => (
            <li key={item} className="rounded-2xl bg-white/10 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[32px] border border-primary-light bg-white p-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Tagesablauf (Beispiel)</p>
        <div className="mt-6 relative pl-8">
          <span className="absolute left-3 top-0 h-full w-px bg-primary-light" aria-hidden />
          {tagesablauf.map((slot) => (
            <div key={slot.time} className="relative pb-6 last:pb-0">
              <span className="absolute -left-[17px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-white" aria-hidden />
              <p className="text-sm font-semibold text-primary">{slot.time}</p>
              <p className="text-sm text-muted">{slot.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">04 · Inhalte & Highlights</p>
        <h2 className="text-3xl font-semibold text-primary">Abwechslungsreiche Module mit Wow-Effekt</h2>
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        {inhalteSchwerpunkte.map((item) => (
          <div
            key={item}
            className="rounded-[28px] border border-primary-light/80 bg-gradient-to-br from-white via-primary-light/60 to-white px-6 py-5 shadow-card"
          >
            <p className="font-semibold text-primary">{item}</p>
          </div>
        ))}
      </div>
      <div className="rounded-[32px] border border-accent/40 bg-white p-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">Programm-Highlights</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {besondereProgrammpunkte.map((item) => (
            <div key={item} className="rounded-2xl bg-primary-light/60 p-4 text-primary">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="grid gap-8 md:grid-cols-2">
      <div className="rounded-[32px] border border-primary-light bg-white p-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">05 · Sicherheit & Organisation</p>
        <h3 className="mt-3 text-2xl font-semibold text-primary">Sicherer Rahmen für Kinder & Eltern</h3>
        <ul className="mt-5 space-y-3 text-muted">
          {sicherheitOrganisation.map((item) => (
            <li key={item} className="rounded-2xl bg-primary-light/40 px-4 py-3 text-primary">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[32px] border border-primary-light bg-primary-light/60 p-8 shadow-inner">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/70">06 · Nachhaltigkeit & Verantwortung</p>
        <h3 className="mt-3 text-2xl font-semibold text-primary">Bewusst handeln – auf und neben dem Platz</h3>
        <ul className="mt-5 space-y-3 text-primary">
          {nachhaltigkeit.map((item) => (
            <li key={item} className="rounded-2xl border border-primary-light bg-white/80 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
)
