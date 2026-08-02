import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Impressum",
  description: "Impressum der Knotentanz Association.",
};

export default function ImprintPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <h1 className="mb-10 font-serif text-4xl text-foreground">Impressum</h1>

        <div className="space-y-8 text-muted-foreground">
          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">Angaben gemäß § 5 ECG und § 25 MedienG</h2>
            <p className="leading-relaxed">
              <strong className="text-foreground">Knotentanz Association</strong>
              <br />
              Musterstraße 12
              <br />
              1010 Wien
              <br />
              Österreich
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl text-foreground">Vertretungsberechtigte Personen</h3>
            <p className="leading-relaxed">
              Präsidentin: Elena M.
              <br />
              Künstlerischer Leiter: Markus S.
              <br />
              Eventmanagement: Sophie R.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl text-foreground">Kontakt</h3>
            <p className="leading-relaxed">
              Telefon: +43 1 234 567 890
              <br />
              E-Mail: office@knotentanz-association.org
              <br />
              Website: https://knotentanz-association.org
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl text-foreground">Registereintrag</h3>
            <p className="leading-relaxed">
              Eintragung im Vereinsregister.
              <br />
              Registergericht: Landesgericht Wien
              <br />
              Vereinsregisternummer: ZVR-XXXXXX
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl text-foreground">Umsatzsteuer-ID</h3>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              ATU XXXXXXXX
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-xl text-foreground">Haftungsausschluss</h3>
            <p className="leading-relaxed">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für
              den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Die Inhalte dieser
              Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
              der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
