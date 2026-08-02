import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/components/sections/contact-form";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie die Knotentanz Association. Wir freuen uns auf Ihre Anfrage.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Kontakt"
            title="Nehmen Sie Kontakt auf"
            description="Haben Sie Fragen zu Events, Mitgliedschaft oder Kooperationen? Schreiben Sie uns – wir melden uns zeitnah zurück."
          />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="mb-8 font-serif text-3xl text-foreground">Kontaktdaten</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Knotentanz Association</p>
                    <p className="text-sm text-muted-foreground">Musterstraße 12</p>
                    <p className="text-sm text-muted-foreground">1010 Wien, Österreich</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <a
                      href="mailto:office@knotentanz-association.org"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      office@knotentanz-association.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a
                      href="tel:+431234567890"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      +43 1 234 567 890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Bürozeiten</p>
                    <p className="text-sm text-muted-foreground">Mo–Fr: 09:00 – 17:00 Uhr</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 aspect-video overflow-hidden border border-border">
                <iframe
                  title="Standort Knotentanz Association"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=16.37%2C48.20%2C16.38%2C48.21&layer=mapnik&marker=48.2082%2C16.3738"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
