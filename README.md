Perfekt, mit dem Logo können wir jetzt das Design sauber ableiten.
Ich gebe dir:

1. **Design-System (Farben, Typo, Komponenten) basierend auf dem Logo**
2. **Wireframe für Landingpage (Startseite)** – klar strukturiert
3. **Wireframes für alle Unterseiten**
4. **React-orientierte Struktur (Komponenten & Pages)**

---

## 1. Design-System – basierend auf KaLi-Kicker-Logo

### 1.1 Farben (aus dem Logo abgeleitet)

Logo-Grundton ≈ **dunkles Grün/Teal** → wir nehmen:

* `--color-primary: #205645`
* `--color-primary-dark: #174034` (Hover, Header-Text)
* `--color-primary-light: #E4F2ED` (Hintergründe, Panels)
* `--color-accent: #FFB347` (dezente Highlights, Buttons optional)
* `--color-bg: #F9FBFA` (Seitenhintergrund)
* `--color-text: #1F2933` (dunkles Grau, bessere Lesbarkeit als reines Schwarz)
* `--color-muted: #6B7280` (sekundärer Text, Labels, Meta)

Richtlinie:

* **Primary-Grün** für Navigation, Buttons, Headlines-Akzente.
* Weiß/helles Grau als Hauptflächen, damit das Grün wirkt.
* Keine bunten Regenbogenfarben – Fokus auf **klar, sportlich, vertrauenswürdig**.

### 1.2 Typografie

* Font: z.B. `Inter`, `Nunito` oder ähnliche Sans-Serif.
* H1: 32–40px, fett (Landing-Headline)
* H2: 24–28px
* Body: 16px
* Kleine Labels: 12–14px, `color-muted`

Typo-Anmutung: **freundlich, modern, klar**, passend zu Kids & Sport.

### 1.3 UI-Komponenten

* **Cards**: `rounded-xl`, leichter Shadow, Hintergrund weiß, dünne Border in `primary-light`.
* **Buttons**:

  * Primary: `bg-primary`, `text-white`, `rounded-full`, `px-6 py-2`, Hover: `bg-primary-dark`.
  * Secondary: `border border-primary`, `text-primary`, Hintergrund weiß.
* **Form-Elemente**:

  * `rounded-lg`, Border `#D1D5DB`, Fokus-Ring in `primary`.
* **Icons**: einfache Line-Icons (z.B. Heroicons), keine überladene Illustrationen.

---

## 2. React-Struktur (kurz)

```txt
/src
  /components
    Layout.tsx       // Header + Footer
    Header.tsx
    Footer.tsx
    Hero.tsx
    Section.tsx
    Card.tsx
    CampCard.tsx
    EventList.tsx
    TeamMemberCard.tsx
    PartnerLogoGrid.tsx
    ProjectCard.tsx
    JobCard.tsx
    BookingForm.tsx
    GalleryGrid.tsx
  /pages
    HomePage.tsx
    TerminePage.tsx
    TeamPage.tsx
    KonzeptPage.tsx
    CampsOverviewPage.tsx
    CampDetailPage.tsx
    PartnerPage.tsx
    ProjektePage.tsx
    AngeboteVereinePage.tsx
    JobsPage.tsx
    BuchenPage.tsx
    GaleriePage.tsx
    AgbPage.tsx
    DatenschutzPage.tsx
    ImpressumPage.tsx
  /data
    camps.ts
    events.ts
    team.ts
    partners.ts
    projects.ts
    jobs.ts
```

`Layout` legt z.B. `max-w-6xl mx-auto px-4` fest.

---

## 3. Wireframe – **Landingpage (Startseite)**

### 3.1 Layout (Desktop, grob)

```text
[HEADER]
---------------------------------------------------------------
[Logo KaLi Kicker]           [Startseite | Camps | Termine | ... | Buchen]

[HERO SECTION]
---------------------------------------------------------------
[Textblock links]          [Bild rechts (Kids/Training)]
- H1: "Fußballcamps für Kinder in Hamburg"
- Subline
- [Button Primary: "Jetzt Camp buchen"]
- [Button Secondary: "Aktuelle Termine"]

[AKTUELLE TERMINE / CAMPS]
---------------------------------------------------------------
"H2: Aktuelle Termine"
[ Card | Card | Card ]   -> je Camp/Termin (Datum, Ort, Altersklasse)
[Button: "Alle Termine" → /termine]

[UNSER KONZEPT (TEASER)]
---------------------------------------------------------------
[Text links]             [Foto/Illustration rechts]
- Kurzbeschreibung
- Bulletpoints (3 Werte)
- [Button: "Mehr über unser Konzept" → /konzept]

[UNSERE CAMPS (TEASER)]
---------------------------------------------------------------
"H2: Unsere Camps"
[CampCard][CampCard][CampCard]
[Button: "Alle Camps" → /camps]

[SOZIALPROJEKTE (TEASER)]
---------------------------------------------------------------
"H2: Unsere Projekte"
[ Project 1 ]  [ Project 2 ]  [ Project 3 ]
(Kleine Cards mit Logo/Name)
[Hinweis: "Pro Kind spenden wir an eines der Projekte"]

[PARTNER (TEASER)]
---------------------------------------------------------------
"H2: Unsere Partner"
[ Logo | Logo | Logo | Logo ] (Grid/Slider)
[Button: "Alle Partner" → /partner]

[CTA-BAND]
---------------------------------------------------------------
[Text: "Du willst dein Kind anmelden oder hast Fragen?"]
[Button Primary: "Jetzt buchen" → /buchen]
[Button Secondary: "Kontakt" (Mailto oder Footer-Anker)]

[FOOTER]
---------------------------------------------------------------
[Links zu: AGB | Datenschutz | Impressum | Socials]
[Adresse / Kontakt]
```

### 3.2 Design-Details Landingpage

* Hero-Hintergrund: `bg-primary-light`, Text in `color-text`, Buttons in `primary`.
* Cards für Termine/Camps: weißer Hintergrund, kleines Badge mit Datum in `primary`.
* Sektionen haben `py-12`–`py-16`, klare Trennung durch Hintergrundwechsel (weiß / primary-light).

---

## 4. Wireframes – Unterseiten

### 4.1 **Termine** (/termine)

Ziel: Alle anstehenden Camps & Veranstaltungen auf einen Blick.

```text
[H1: Termine & Veranstaltungen]

[Filter-Row]
[Dropdown Ort] [Dropdown Monat] [Dropdown Altersklasse] [Reset]

[Termine-Liste als Cards oder Tabelle]
----------------------------------------------------
[Card]
  - Camp-Name
  - Datum(e)
  - Ort
  - Altersklasse
  - [Button: "Zum Camp" → /camps/:id]
  - [Button Secondary: "Jetzt buchen" → /buchen?camp=id]

[Pagination falls nötig]
```

Design:

* Cards in 1-Spalte (mobile) / 2-Spalten (Desktop).
* Observables: Primary-Farbe nur als Akzent (Titel, Buttons).

---

### 4.2 **Unser Team** (/team)

```text
[H1: Unser Team]

[Intro-Text]

[Grid mit TeamMemberCards]
[ Foto ] 
[ Name ]
[ Rolle ]
[ Qualifikation (kurz) ]
[ 1 Satz Statement ]

Grid:
- Desktop: 3 Spalten
- Tablet: 2
- Mobile: 1
```

Design:

* Fotos rund oder `rounded-xl`.
* Name in `primary`, Rolle in `muted`.

---

### 4.3 **Unser Konzept** (/konzept)

```text
[H1: Unser Konzept]

[Section: Wer wir sind]
- Textblock (2–3 Absätze)

[Section: Unsere Werte]
[Icon + Titel + 1 Satz] x 3–5
(als horizontale Cards oder 2x3-Grid)

[Section: Trainingsphilosophie]
- Kurze Unterüberschriften (z.B. Technik, Taktik, Teamgeist, Spaß)
- Text

[Section: Für wen sind unsere Camps geeignet?]
- Bulletpoints zu Alter, Niveaus, Zielen
```

Design:

* Viel Weißraum, nur Text + wenige Icons.
* Wichtig: gute Lesbarkeit.

---

### 4.4 **Unsere Camps – Übersicht** (/camps)

```text
[H1: Unsere Camps]

[Filter-Row]
[Dropdown Ferien (Ostern / Sommer / Herbst)]
[Dropdown Ort]
[Dropdown Altersgruppe]

[CampGrid]
[CampCard] x N
  - Titel
  - Datum
  - Ort
  - Altersklasse
  - Kurzbeschreibung (2 Zeilen)
  - [Button: "Zum Camp" → /camps/:id]
```

Design:

* CampCards wie Produktkacheln, Hover mit leichtem Shadow.
* Eventuell Label „Ausgebucht“ / „Restplätze“.

---

### 4.5 **Camp-Detailseite** (/camps/:campId)

```text
[Breadcrumb: Startseite > Camps > Sommercamp Hamburg-Nord]

[H1: Camp-Name]

[Top-Block]
[Left: Infobox]
  - Datum
  - Ort
  - Altersklasse
  - Preis
  - Hinweis Spende an Sozialprojekt
  - [Button Primary: "Jetzt buchen" → /buchen?camp=id]

[Right: Bild/Banner]

[Section: Camp-Beschreibung]
- 2–3 Absätze

[Section: Leistungen]
- Bulletpoints (Trikot, Verpflegung, Betreuung etc.)

[Section: Tagesablauf]
- Tabelle: Zeit | Programmpunkt

[Section: Organisatorische Infos]
- Treffpunkt
- Mitbringen
- Kontakt bei Fragen (Mail/Telefon)
```

Design:

* Info-Box in `primary-light` mit Border `primary`.
* Call-To-Action sticky auf Mobile (z.B. Button am Bildschirmrand).

---

### 4.6 **Unsere Partner** (/partner)

```text
[H1: Unsere Partner]

[Intro-Text]

[PartnerLogoGrid]
[Logo] [Name] [Kurzbeschreibung] [optional: Link]
```

Grid:

* Desktop 4 Spalten, Mobile 2.

---

### 4.7 **Unsere Projekte** (/projekte)

```text
[H1: Unsere Sozialprojekte]

[Intro: "Pro teilnehmendem Kind spenden wir an eines dieser Projekte."]

[ProjectCard] x 3
  - Logo/Bild
  - Name
  - Kurzbeschreibung
  - Link/mehr Infos (optional)
```

Design:

* Jede ProjectCard in einem leicht farbigen Hintergrund (`primary-light`), um den Charity-Charakter hervorzuheben.

---

### 4.8 **Angebote für Vereine** (/angebote-vereine)

```text
[H1: Angebote für Vereine]

[Intro-Text]

[Section: Workshops & Fortbildungen]
[Card je Angebot]
  - Titel
  - Zielgruppe
  - Inhalte (3–5 Bulletpoints)
  - Dauer
  - Ort
  - [Button: "Anfrage senden" → mailto]

[Section: Individuelle Konzepte]
- Text + CTA (Kontakt)
```

---

### 4.9 **Jobs & Karriere** (/jobs)

```text
[H1: Jobs & Karriere]

[Intro: "Werde Teil der KaLi Kicker."]

[JobCard] x N
  - Titel
  - Art (Minijob, Werkstudent, Honorarbasis)
  - Ort
  - Kurzbeschreibung
  - Anforderungen (Liste)
  - [Button: "Per E-Mail bewerben" → mailto:jobs@... ?subject=Bewerbung ...]

[Section: Initiativbewerbung]
- Text + mailto-Link
```

Design:

* JobCards mit dünner Border, gleiches Layout wie CampCards.

---

### 4.10 **Buchen** (/buchen)

Formulardaten wie von dir vorgegeben – Wireframe:

```text
[H1: Camp buchen]

[Hinweis-Box]
- "Bitte füllen Sie alle Pflichtfelder (*) aus..."
- Hinweis AGB & Datenschutz

[Formular]

Section: Camp-Auswahl
- [Dropdown: Auswahl Camp *]

Section: Daten des Kindes
- [Input: Vorname *]
- [Input: Nachname *]
- [DatePicker: Geburtsdatum *]
- [Dropdown: Geschlecht *]

Section: Erziehungsberechtigte/r
- [Input: E-Mail-Adresse *]
- [Input: Telefonnummer *]

Section: Ausstattung
- [Dropdown: Kleidergröße (Trikot) *]
- [Radiogroup: Wunschname + Nummer? *] (Ja +20€ / Nein)
  - Wenn Ja:
    - [Input: Name und Nummer *]
- [Radiogroup: Hose gewünscht?] (Ja +15€ / Nein)
  - Wenn Ja:
    - [Dropdown: Hosengröße *]
- [Radiogroup: Stutzen gewünscht?] (Ja +10€ / Nein)
- [Radiogroup: TW-Handschuhe gewünscht?] (Ja +20€ / Nein)
  - Wenn Ja:
    - [Dropdown/Text: Größe der Handschuhe *]

Section: Wichtige Infos
- [Textarea: Wichtige Infos zum Kind (optional)]

Section: Rechtliches
- [Checkbox *] "AGB gelesen und akzeptiert."
- [Checkbox *] "Datenschutzerklärung zur Kenntnis genommen."
- [Checkbox optional] "Einwilligung Foto-/Videoaufnahmen."

[Button Primary: "Buchung absenden"]
[Kleine Textzeile: "Sie erhalten eine Bestätigung per E-Mail."]
```

Design:

* Form-Container mittig, max-width `max-w-3xl`, Hintergrund weiß, `shadow-md`, `rounded-xl`, `p-8`.
* Fehlermeldungen in Rot, Fokus-Ringe in `primary`.

---

### 4.11 **Galerie** (/galerie)

```text
[H1: Galerie]

[Filter: Dropdown Jahr] [Dropdown Ort] (optional)

[GalleryGrid]
[Thumbnail] x N (4 Spalten Desktop, 2 Tablet, 1 Mobile)
- Klick → Lightbox/Modal mit großem Bild

[Hinweis Bildrechte]
```

---

### 4.12 **AGB / Datenschutz / Impressum**

Einfacher Text-Layout:

```text
[H1: AGB]

[Section-Headings H2/H3]
[Fließtext, nummerierte Listen]

Breite: max-w-3xl, viel Weißraum, Schrift 16px.
```

---

## 5. Kleine React-Beispiele (nur als Orientierung)

### 5.1 Layout-Skeleton

```tsx
// Layout.tsx
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#F9FBFA] text-[#1F2933] flex flex-col">
    <Header />
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 py-8">{children}</div>
    </main>
    <Footer />
  </div>
);
```

### 5.2 Hero-Sektion Startseite

```tsx
// HomePage.tsx (Ausschnitt)
const HomePage: React.FC = () => {
  return (
    <>
      <section className="bg-[#E4F2ED] rounded-2xl px-8 py-10 mb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#205645] mb-4">
            Fußballcamps für Kinder in Hamburg
          </h1>
          <p className="text-lg mb-6">
            Die KaLi Kicker bieten kindgerechte Trainingscamps mit Spaß, Teamgeist
            und qualifizierten Trainern.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/buchen"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#205645] text-white font-medium"
            >
              Jetzt Camp buchen
            </Link>
            <Link
              to="/termine"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#205645] text-[#205645] font-medium"
            >
              Aktuelle Termine
            </Link>
          </div>
        </div>
        <div className="flex-1">
          {/* Platzhalter für Bild */}
          <div className="w-full aspect-video rounded-2xl bg-white shadow-inner border border-[#E4F2ED]" />
        </div>
      </section>
      {/* Weitere Sektionen: Aktuelle Termine, Camps, Projekte, Partner etc. */}
    </>
  );
};
```

---

Wenn du möchtest, kann ich dir im nächsten Schritt:

* eine **konkrete Komponentenliste inkl. Props** (z.B. `CampCardProps`, `BookingFormState`) ausformulieren
  oder
* direkt ein **komplettes React-Skelett (alle Pages als leere Komponenten)** schreiben, das du nur noch in dein Projekt kopieren musst.
