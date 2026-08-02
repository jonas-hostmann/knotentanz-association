# Knotentanz Association – Projekt-Status

> Kurze Übersicht für den nächsten Session-Start. Diese Datei fasst den aktuellen Stand, wichtige Architektur-Entscheidungen und offene nächste Schritte zusammen.

## Projekt-Übersicht

- **Frontend:** Next.js 14 App Router, TypeScript, Tailwind CSS
- **Backend:** Headless WordPress (läuft unter https://wp-knotentanz-association.hostmann-media.de/)
- **Deployment:** Coolify über GitHub-Integration
- **Live-URL:** https://knotentanz-association.hostmann-media.de/
- **Repository:** https://github.com/jonas-hostmann/knotentanz-association
- **Projektordner:** `knotentanz-frontend/`

## Schnellstart (nächste Session)

```bash
cd "/Users/jonas/Library/Mobile Documents/com~apple~CloudDocs/Websiten/KNOTENTANZ ASSOCIATION/knotentanz-frontend"
npm install
npm run dev
```

Build-Test:

```bash
npm run build
```

## Tech Stack & Architektur

- **Framework:** Next.js 14+ mit App Router (`app/`)
- **Sprache:** TypeScript (strict)
- **Styling:** Tailwind CSS 3.4+
- **Icons:** Lucide React
- **Formulare:** React Hook Form + Zod
- **Headless-Integration:** `/lib/wordpress.ts` mit REST-API-Fetch + Mock-Fallback
- **Cookie-Consent:** Cookiebot über `NEXT_PUBLIC_COOKIEBOT_ID` + Custom CSS-Override in `styles/cookiebot.css`
- **Deployment-Modus:** `output: "standalone"` in `next.config.js` für Coolify

## Farbschema (aktueller Opernball-Style)

| Rolle | Farbe |
|-------|-------|
| Hintergrund | `#050505` |
| Text | `#f8f5f0` (Creme-Weiß) |
| Primär-Akzent | `#c5a059` (warmes Gold) |
| Sekundär-Akzent | `#f4efe6` (Elfenbein) |
| Karten/Hintergrund | `#0f0f0f` / `#14110f` |
| Border | `#2a2520` |
| Muted Text | `#a8a19a` |
| Burgunder (optional) | `#6b1c23` |

## Wichtige Dateien & Komponenten

- `app/layout.tsx` – Root-Layout, Cookiebot-Script, Navigation, Footer, Scroll-to-Top
- `app/page.tsx` – Startseite mit Hero, Stats, Highlights, Gallery, CTA
- `app/ueber-uns/page.tsx` – Über uns mit Geschichte, Werten, TeamGrid
- `app/events/page.tsx` – Event-Übersicht mit Filter
- `app/events/[slug]/page.tsx` – Event-Detailseite
- `app/kontakt/page.tsx` – Kontaktseite mit Formular
- `app/impressum/page.tsx` und `app/datenschutz/page.tsx` – Rechtliche Seiten
- `components/sections/hero.tsx` – Hero mit Countdown
- `components/sections/stats.tsx` – Statistik-Highlights
- `components/sections/highlights.tsx` – Featured-Event-Karten
- `components/sections/gallery.tsx` – Bildergalerie
- `components/sections/call-to-action.tsx` – CTA-Bereich
- `components/sections/contact-form.tsx` – Kontaktformular mit Validierung
- `components/sections/countdown.tsx` – Countdown zur nächsten Gala
- `components/layout/scroll-to-top.tsx` – Scroll-to-Top-Button
- `lib/wordpress.ts` – Headless WP API-Layer + Mock-Daten
- `lib/validation.ts` – Zod-Schema für Kontaktformular
- `lib/utils.ts` – `cn()`-Helper
- `public/assets/` – Bilder (Hero, Ballroom, Gala, Dancers, Violin, Opera, etc.)

## Bisher umgesetzte Features

- Startseite mit Hero, Countdown, Statistiken, Event-Highlights, Bildergalerie und CTA
- Über-uns-Seite mit Geschichte, Philosophie, Werten und Team-Grid
- Events-Übersicht mit Kategorie-Filter und Detailseiten
- Kontaktformular mit Zod-Validierung und Server Action
- Impressum und Datenschutzerklärung (Platzhalter-Texte)
- Cookiebot-Integration mit optischem CSS-Override
- Responsive Navigation mit Mobile-Menü
- Scroll-to-Top-Button (Desktop: Text, Mobil: Pfeil)
- Pexels-Bilder integriert und optimiert

## Umgebungsvariablen (`.env.local` / `.env.example`)

```bash
NEXT_PUBLIC_SITE_URL=https://knotentanz-association.hostmann-media.de
NEXT_PUBLIC_WP_API_URL=https://wp-knotentanz-association.hostmann-media.de/wp-json/wp/v2
NEXT_PUBLIC_COOKIEBOT_ID=deine-cookiebot-id
WP_API_URL=https://wp-knotentanz-association.hostmann-media.de/wp-json
CONTACT_FORM_ENDPOINT=/contact-form-7/v1/contact-forms/123/feedback
```

> Hinweis: `NEXT_PUBLIC_COOKIEBOT_ID` ist aktuell noch ein Platzhalter und muss mit der echten Cookiebot-ID ersetzt werden.

## Offene nächste Schritte / ToDo

1. **Cookiebot-ID eintragen** – Echte ID in `.env.local` und in Coolify hinterlegen.
2. **WordPress-Backend befüllen** – Events, Team-Mitglieder und Posts im Backend anlegen, damit die dynamische Anbindung greift. Alternativ Mock-Daten beibehalten.
3. **Contact Form 7 / Custom Endpoint** – Kontaktformular-Endpunkt im WordPress-Backend einrichten und `CONTACT_FORM_ENDPOINT` anpassen.
4. **Inhalte verfeinern** – Impressum und Datenschutz mit echten rechtlichen Angaben aktualisieren.
5. **Optionale Erweiterungen:** Blog/News-Sektion, Mehrsprachigkeit, Ticketverkauf, Event-Anmeldung.
6. **Performance-Optimierung:** `next/image` optimieren, Bildformate prüfen, Lazy Loading für untere Bereiche.
7. **SEO:** Sitemap, robots.txt, strukturierte Daten für Events ergänzen.

## Wichtige Hinweise

- Der Build läuft erfolgreich mit `npm run build`.
- Das Projekt ist für Coolify als `standalone`-Image konfiguriert.
- Änderungen werden via `git push origin main` deployed.
- Bilder sollten weiterhin in `public/assets/` abgelegt und Web-optimiert sein.
- Tailwind-Theme und Farben sind in `tailwind.config.ts` und `app/globals.css` zentral definiert.

## Letzte Änderungen (Kurz-History)

- Design-Relaunch im Opernball-Stil mit neuem Farbschema, Pexels-Bildern, Countdown und Stats
- Scroll-to-Top-Button ersetzt den vorherigen Skip-Link
- Cookiebot-CSS an neues Farbschema angepasst

## Kontakt & Ressourcen

- WordPress-Backend: https://wp-knotentanz-association.hostmann-media.de/
- Live-Frontend: https://knotentanz-association.hostmann-media.de/
- GitHub: https://github.com/jonas-hostmann/knotentanz-association
