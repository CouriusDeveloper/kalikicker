# Hosting-Leitfaden: kalikicker.de

> **Technologie-Stack:** React (Vite) · Strapi CMS · Mailgun · GitHub · Vercel

## 0. Zweck dieses Dokuments

Dieses Dokument beschreibt Schritt für Schritt, wie Sie die kalikicker.de Website mit kostenlosen oder sehr günstigen Free-Tier-Angeboten selbst betreiben können. Es richtet sich an Projektverantwortliche ohne tiefgreifende Technikkenntnisse und dient gleichzeitig als Referenz für interne IT oder externe Dienstleister.

## 1. Benötigte Konten & Dienste

1. **GitHub** ([https://github.com](https://github.com)) – Code-Repository
2. **Vercel** ([https://vercel.com](https://vercel.com)) – Hosting der React/Vite-Website
3. **Strapi Cloud** ([https://cloud.strapi.io](https://cloud.strapi.io)) – Hosting des CMS
4. **Mailgun** ([https://www.mailgun.com](https://www.mailgun.com)) – Versand der Formular-E-Mails

> *Kosten-Hinweis:* Alle genannten Anbieter haben Free-Tier- oder Einstiegspläne. Prüfen Sie regelmäßig die Konditionen.

## 2. Quellcode in eigenes GitHub-Repository übernehmen

1. **Code erhalten:** Der Entwickler liefert entweder einen Git-Repository-Link oder ein ZIP-Archiv.
2. **Repository erstellen:** In GitHub auf *New Repository* klicken, Namen wählen (z. B. `kalikicker-website`), Sichtbarkeit auf *Private* setzen.
3. **Code importieren oder hochladen:**
   - per Git-Import, wenn ein Repo-Link vorliegt
   - per Upload des entpackten ZIPs (Browser oder Git-Client)
4. **Optional Entwickler einladen:** In *Settings → Collaborators* E-Mail/GitHub-Namen hinzufügen.

Ergebnis: Der vollständige Code liegt unter Ihrer Kontrolle.

## 3. Strapi Cloud einrichten (CMS)

1. Unter [cloud.strapi.io](https://cloud.strapi.io) registrieren und anmelden.
2. *New Project* → Free Plan → Projektnamen vergeben (z. B. `kalikicker-cms`).
3. Provisionierung abwarten; Sie erhalten eine URL wie `https://<projekt>.strapiapp.com`.
4. Beim ersten Login den Haupt-Admin anlegen (am besten Funktionsadresse wie `webadmin@kalikicker.de`).
5. Wichtige Daten dokumentieren:
   - Projekt-URL + `/admin`
   - Admin-E-Mail
   - Zuständigkeiten/Vertretungen

## 4. Mailgun für das Kontaktformular konfigurieren

1. Konto bei [mailgun.com](https://www.mailgun.com) erstellen.
2. Unter *Domains* eine neue Sende-Domain (z. B. `mg.kalikicker.de`) hinzufügen.
3. Mailgun zeigt DNS-Einträge (TXT, MX, CNAME). Diese beim Domain-Provider (Strato, IONOS, Cloudflare …) setzen.
4. Nach Verifizierung API-Key notieren (z. B. `key-xxxxxxxx`).
5. Zieladresse definieren, an die Formular-E-Mails gehen sollen (`info@kalikicker.de`).

## 5. Frontend auf Vercel deployen

1. Bei [vercel.com](https://vercel.com) registrieren (am besten via GitHub OAuth).
2. *New Project → Import Git Repository* auswählen und das GitHub-Repo (`kalikicker-website`) verbinden.
3. Vercel erkennt Vite automatisch (`npm run build` → `dist`). Standardwerte übernehmen.
4. Vor dem ersten Deploy alle nötigen Umgebungsvariablen setzen (siehe Abschnitt 6).
5. Auf *Deploy* klicken. Vercel erstellt eine Preview-URL (`https://<projekt>.vercel.app`).
6. Funktionstest (Startseite, Navigation, Buchungsformular).

## 6. Umgebungsvariablen setzen

### 6.1 Strapi Cloud

*Unter Project → Settings → Environment Variables hinterlegen:*

- `HOST=0.0.0.0`
- `PORT=1337`
- `SERVER_URL=https://api.kalikicker.de` (oder Cloud-URL)
- `APP_KEYS` (Kommagetrennte sichere Strings)
- `ADMIN_JWT_SECRET`, `API_TOKEN_SALT`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`, `ENCRYPTION_KEY`
- `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_API_URL` (Standard: `https://api.mailgun.net`)
- `MAIL_FROM`, `MAIL_REPLY_TO`, `BOOKING_NOTIFY_TO`
- `CORS_ORIGINS=https://kalikicker.de,https://www.kalikicker.de,https://<preview>.vercel.app` (weitere Origins bei Bedarf)
- Optional `DATABASE_FILENAME` (nur wenn SQLite weiterhin genutzt wird)

### 6.2 Frontend (Vercel)

Die Datei `web/.env.example` enthält alle Variablen:

```
VITE_STRAPI_URL=https://<projekt>.strapiapp.com
VITE_STRAPI_TOKEN=<Strapi API Token>
```

In Vercel unter *Project → Settings → Environment Variables* diese Werte für **Production** und **Preview** setzen, danach erneut deployen.

### 6.3 Lokale Entwicklung

- `cms/.env` auf Basis von `cms/.env.example` anlegen.
- `web/.env` auf Basis von `web/.env.example` anlegen.
- Strapi lokal: `cd cms && npm install && npm run dev`
- Frontend lokal: `cd web && npm install && npm run dev`

## 7. Eigene Domain mit Vercel verbinden

1. Vercel-Projekt öffnen → *Settings → Domains*.
2. Domain hinzufügen (`kalikicker.de`, `www.kalikicker.de`).
3. Vercel zeigt DNS-Einträge (meist CNAME für `www`, A-Record für Root). Diese beim Domain-Provider setzen.
4. Propagation abwarten (5–60 Minuten). Vercel stellt SSL automatisch aus.

## 8. Inhalte pflegen (Strapi)

1. Login unter `https://<projekt>.strapiapp.com/admin` mit Admin/Redakteurs-Account.
2. Relevante *Content Types* (z. B. Camps, Events, Teammitglieder) im Menü auswählen.
3. Content aktualisieren → speichern → veröffentlichen.
4. Änderungen erscheinen je nach Frontend-Strategie sofort oder nach kurzem Rebuild (bei Vercel-Preview per Hook anstoßbar).

## 9. Fehlersuche & häufige Probleme

| Problem | Prüfung | Lösung |
| --- | --- | --- |
| Deployment schlägt fehl | Vercel → Deployments → Logs | Fehlermeldung lesen, ggf. Env-Variablen prüfen |
| Kontaktformular sendet keine E-Mails | Mailgun Logs, DNS | API-Key korrekt? DNS unverändert? Zustellung prüfen |
| CORS-Fehler im Browser | Strapi `CORS_ORIGINS` prüfen | Origin ergänzen, Strapi neu deployen |
| Domain zeigt falsche Seite | DNS beim Provider, Vercel Domains | Einträge korrigieren, TTL abwarten |

## 10. Zusammenfassung

Nach diesem Setup verfügen Sie über:

- ✓ Eigenes GitHub-Repo mit vollständigem Code
- ✓ Strapi Cloud CMS zur Inhaltsverwaltung
- ✓ Automatisches Hosting & Deployments via Vercel
- ✓ Zuverlässigen Formularversand mit Mailgun

Der Entwickler stellt eine Staging-URL bereit. Sobald Ihre eigene Infrastruktur identische Ergebnisse liefert, ist die Übergabe abgeschlossen.

## Anhang

### A. Deckblatt / Versionierung

| Dokument | Hosting-Leitfaden kalikicker.de |
| --- | --- |
| Version | 1.0 |
| Stand | 03.12.2025 |
| Verantwortlich | (Name / Funktion eintragen) |
| Kontakt | (E-Mail / Telefon) |

> Dieses Deckblatt kann für eine PDF-Fassung vorangestellt werden. Bei Aktualisierungen Version/Datum anpassen.
