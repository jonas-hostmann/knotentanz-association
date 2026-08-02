import Link from "next/link";
import { Container } from "./container";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-6 inline-block font-serif text-2xl text-cream">
              Knotentanz Association
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Eleganz, Rhythmus und Gemeinschaft. Wir begeistern für den Knotentanz und verbinden Menschen durch
              Bewegung.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-lg text-cream">Navigation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="transition-colors hover:text-primary">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/events" className="transition-colors hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="transition-colors hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-lg text-cream">Rechtliches & Social</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/impressum" className="transition-colors hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="transition-colors hover:text-primary">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:office@knotentanz-association.org"
                aria-label="E-Mail"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Knotentanz Association. Alle Rechte vorbehalten.
        </div>
      </Container>
    </footer>
  );
}
