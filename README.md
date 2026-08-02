# Knotentanz Association Frontend

Modernes, elegantes Jamstack-Frontend für die Knotentanz Association. Aufgebaut mit **Next.js 14 (App Router)**, **TypeScript** und **Tailwind CSS** als Headless-Frontend für ein WordPress-Backend.

## Voraussetzungen

- Node.js 18+
- npm oder pnpm
- Git

## Lokale Entwicklung

```bash
cd knotentanz-frontend
npm install
npm run dev
```

Die Website ist dann unter http://localhost:3000 erreichbar.

## Umgebungsvariablen

Kopiere `.env.example` zu `.env.local` und passe die Werte an:

```bash
cp .env.example .env.local
```

| Variable | Beschreibung |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Öffentliche URL der Website |
| `NEXT_PUBLIC_WP_API_URL` | WordPress REST-API-Base-URL (z. B. `https://wp.knotentanz-association.org/wp-json/wp/v2`) |
| `NEXT_PUBLIC_COOKIEBOT_ID` | Cookiebot-Consent-Manager ID |
| `WP_API_URL` | Serverseitige WordPress-Base-URL |
| `CONTACT_FORM_ENDPOINT` | Contact Form 7 oder Custom Endpoint für das Kontaktformular |

## Build & Deployment

Das Projekt ist für Coolify als `standalone`-Image konfiguriert:

```bash
npm run build
npm run start
```

In Coolify wird das Repository über die GitHub-Integration verbunden. Das Build-Kommando ist `npm run build` und der Startbefehl `node server.js` (Next.js standalone).

## Projektstruktur

- `app/` – Next.js App Router Seiten
- `components/` – Wiederverwendbare React-Komponenten
- `lib/` – WordPress-API-Layer, Validierung und Utility-Funktionen
- `public/assets/` – Bilder und statische Assets
- `styles/` – Zusätzliche Styles inkl. Cookiebot-Override

## WordPress-Backend

Solange das Backend nicht erreichbar ist, liefern die API-Funktionen realistische Mock-Daten aus, sodass Frontend und Design sofort nutzbar sind.

## Cookiebot

Die Cookiebot-ID wird über `NEXT_PUBLIC_COOKIEBOT_ID` konfiguriert. Das visuelle Design des Banners wird in `styles/cookiebot.css` an das elegante Seitendesign angeglichen.

## Barrierefreiheit

- Semantisches HTML5
- ARIA-Labels und Skip-Link
- Kontrastreiche Farbgestaltung
- Keyboard-freundliche Navigation

## Lizenz

Proprietär – Knotentanz Association.
