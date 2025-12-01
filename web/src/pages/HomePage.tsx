import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { EventList } from '../components/EventList'
import { CampCard } from '../components/CampCard'
import { ProjectCard } from '../components/ProjectCard'
import { PartnerLogoGrid } from '../components/PartnerLogoGrid'
import { useContent } from '../context/ContentContext'

export const HomePage = () => {
  const { events, camps, projects, partners } = useContent()
  const upcomingEvents = events.slice(0, 3)
  const featuredCamps = camps.slice(0, 3)
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="space-y-16">
    <Hero
      kicker="Hamburg"
      title="Fußballcamps für Kinder mit Herz und Haltung"
      subtitle="Kindgerechtes Training, faire Betreuung und starke Sozialprojekte – das sind die KaLi Kicker."
      primaryAction={
        <Link to="/buchen" className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 font-semibold">
          Jetzt Camp buchen
        </Link>
      }
      secondaryAction={
        <Link to="/camps" className="inline-flex items-center rounded-full border border-primary text-primary px-6 py-3 font-semibold">
          Camps & Veranstaltungen
        </Link>
      }
      image="https://images.unsplash.com/photo-1509023913720-34be34cfa8f1?auto=format&fit=crop&w=1200&q=80"
    />

    <Section
      eyebrow="Camps & Veranstaltungen"
      title="Aktuelle Camps & Veranstaltungen"
      description="Alle Termine sind limitiert. Sichere dir frühzeitig einen Platz."
      actions={
        <Link to="/camps" className="rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold">
          Alle Camps & Veranstaltungen
        </Link>
      }
    >
      <EventList events={upcomingEvents} />
    </Section>

    <Section
      eyebrow="Unser Konzept"
      title="Spielerisch stark werden"
      description="Wir arbeiten mit kleinen Gruppen, lizensierten Trainer:innen und setzen jedes Kind in Szene."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-lg">
          <p>
            Bei uns steht Begeisterung im Mittelpunkt. Wir kombinieren moderne Trainingsmethoden mit sozialpädagogischem Blick –
            für Camps, in denen Spaß und Fairness zählen.
          </p>
          <ul className="space-y-3 text-base text-muted">
            <li>• Strukturierte Tagesabläufe mit klaren Lernzielen</li>
            <li>• Werte wie Teamgeist, Respekt und Mut sind Trainingsinhalt</li>
            <li>• Pro Kind unterstützen wir lokale Sozialprojekte</li>
          </ul>
          <Link to="/konzept" className="inline-flex items-center rounded-full border border-primary text-primary px-5 py-2 font-semibold">
            Mehr erfahren
          </Link>
        </div>
        <div className="bg-white rounded-3xl border border-primary-light p-6 shadow-card space-y-4">
          <h3 className="text-2xl font-semibold text-primary">Konzept auf einen Blick</h3>
          <dl className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-muted">Trainer:in zu Kids</dt>
              <dd>1 : 8</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">Spenden je Camp</dt>
              <dd>150 €+</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted">Schwerpunkt</dt>
              <dd>Technik · Teamgeist · Teilhabe</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>

    <Section
      eyebrow="Camps"
      title="Unsere nächsten Camps"
      description="Ob Feriencamps, Torwarttage oder Workshops – wir haben das passende Format."
      actions={
        <Link to="/camps" className="rounded-full border border-primary text-primary px-5 py-2 text-sm font-semibold">
          Alle Camps anzeigen
        </Link>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {featuredCamps.map((camp) => (
          <CampCard key={camp.id} camp={camp} />
        ))}
      </div>
    </Section>

    <Section
      eyebrow="Spendenprojekte"
      title="Mit jedem Kind etwas bewegen"
      description="Ein Teil der Campgebühr fließt direkt in unsere Partnerschaften mit Organisationen aus Hamburg."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>

    <Section
      eyebrow="Partner"
      title="Gemeinsam stark"
      description="Unternehmen, Vereine und Stiftungen, die unsere Vision teilen."
      actions={
        <Link to="/partner" className="rounded-full border border-primary text-primary px-5 py-2 text-sm font-semibold">
          Alle Partner
        </Link>
      }
    >
      <PartnerLogoGrid partners={partners} />
    </Section>

    <section className="bg-primary text-white rounded-3xl px-8 py-10 flex flex-col md:flex-row md:items-center gap-6">
      <div className="flex-1 space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-light">Kontakt</p>
        <h3 className="text-3xl font-semibold">Noch Fragen oder direkt buchen?</h3>
        <p className="text-primary-light">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
      </div>
      <div className="flex gap-4">
        <Link to="/buchen" className="rounded-full bg-white text-primary px-6 py-3 font-semibold">
          Jetzt buchen
        </Link>
        <a href="mailto:hey@kalikicker.de" className="rounded-full border border-white text-white px-6 py-3 font-semibold">
          Kontakt
        </a>
      </div>
    </section>
  </div>
  )
}
