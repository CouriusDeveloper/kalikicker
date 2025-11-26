const werWirSind = [
  'Wir sind KaLi Kicker – gegründet von Fußballpädagog:innen aus Hamburg-Kaltenkirchen.',
  'Unser Ziel: Camps, in denen Kinder unabhängig von Background professionell trainieren können.',
  'Wir arbeiten eng mit Schulen, Vereinen und Sozialprojekten zusammen.'
]

const werte = [
  { title: 'Teamgeist', text: 'Wir fördern ein Klima, in dem Kinder sich gegenseitig stark machen.' },
  { title: 'Mut', text: 'Fehler gehören dazu – wir geben Raum zum Ausprobieren.' },
  { title: 'Fairness', text: 'Respektvolle Sprache und klare Regeln für alle.' },
  { title: 'Kompetenz', text: 'Lizensierte Trainer:innen mit pädagogischer Zusatzqualifikation.' },
  { title: 'Teilhabegerecht', text: 'Stipendienplätze & Kooperationen mit Sozialpartnern.' },
]

const trainingsphilosophie = [
  { title: 'Technik', body: 'Ballführung, 1-gegen-1, Finten, Pass- und Schusstraining.' },
  { title: 'Taktik', body: 'Spielintelligenz anhand kleiner Spielformen.' },
  { title: 'Teamgeist', body: 'Coaching in Feedbackschleifen, Reflexionsrunden.' },
  { title: 'Spaß', body: 'Gamification, Challenges, kreative Warm-ups.' },
]

const geeignetFuer = ['Kinder von 5–14 Jahren', 'Anfänger:innen genauso wie Vereinsspieler:innen', 'Kids mit Förderbedarf (nach Absprache)', 'Torhüter:innen mit Spezialtrainings']

export const KonzeptPage = () => (
  <div className="space-y-10">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Konzept</p>
      <h1 className="text-4xl font-bold text-primary">Unser Trainings- und Betreuungskonzept</h1>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">Wer wir sind</h2>
      <div className="bg-white rounded-3xl border border-primary-light p-6 space-y-3 text-lg text-muted">
        {werWirSind.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">Unsere Werte</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {werte.map((item) => (
          <div key={item.title} className="bg-primary-light/50 rounded-3xl border border-primary-light p-5">
            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
            <p className="text-sm text-muted mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">Trainingsphilosophie</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {trainingsphilosophie.map((item) => (
          <div key={item.title} className="bg-white rounded-3xl border border-primary-light p-5">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-muted mt-2">{item.body}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary">Für wen sind unsere Camps geeignet?</h2>
      <ul className="bg-white rounded-3xl border border-primary-light p-6 space-y-3 text-lg">
        {geeignetFuer.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  </div>
)
