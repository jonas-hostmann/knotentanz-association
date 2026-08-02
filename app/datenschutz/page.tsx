import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Knotentanz Association.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <h1 className="mb-10 font-serif text-4xl text-foreground">Datenschutzerklärung</h1>

        <div className="space-y-8 text-muted-foreground">
          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">1. Verantwortliche Stelle</h2>
            <p className="leading-relaxed">
              Knotentanz Association
              <br />
              Musterstraße 12, 1010 Wien, Österreich
              <br />
              E-Mail: office@knotentanz-association.org
              <br />
              Telefon: +43 1 234 567 890
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="leading-relaxed">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten
              ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG). Diese Datenschutzerklärung
              informiert Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">3. Cookiebot & Consent-Management</h2>
            <p className="leading-relaxed">
              Diese Website nutzt Cookiebot, einen Dienst von Usercentrics, zur Einholung und Verwaltung von
              Cookie-Einwilligungen. Bei Ihrem ersten Besuch wird ein Cookie-Banner eingeblendet, in dem Sie der
              Verwendung bestimmter Cookies zustimmen oder diese ablehnen können. Ihre Entscheidungen werden in einem
              Consent-Status-Cookie gespeichert. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. c DSGVO
              (rechtliche Verpflichtung) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">4. WordPress-Headless-Integration</h2>
            <p className="leading-relaxed">
              Diese Website wird als Headless-Frontend betrieben. Inhalte und Event-Daten werden über die WordPress REST
              API aus einem WordPress-Backend geladen. Dabei können technisch bedingt Server-Logfiles mit IP-Adressen und
              Zeitstempeln entstehen. Diese Daten werden zur Sicherheit und Stabilität des Systems verarbeitet (Art. 6
              Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">5. Kontaktformular</h2>
            <p className="leading-relaxed">
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden die von Ihnen angegebenen Daten
              (Name, E-Mail-Adresse, Betreff, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage für
              die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen / Vertragserfüllung) bzw. Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">6. Ihre Rechte</h2>
            <p className="leading-relaxed">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragung
              und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
              verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-serif text-2xl text-foreground">7. Änderungen dieser Datenschutzerklärung</h2>
            <p className="leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um sie an aktuelle rechtliche
              Anforderungen oder Änderungen unserer Dienste anzupassen. Die jeweils aktuelle Version gilt ab dem Zeitpunkt
              ihrer Veröffentlichung auf dieser Website.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
