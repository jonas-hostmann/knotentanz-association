import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { AboutIntro } from "@/components/sections/about-intro";
import { TeamGrid } from "@/components/sections/team-grid";

export const metadata = {
  title: "Über uns",
  description: "Geschichte, Philosophie und Team der Knotentanz Association.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Über uns"
            title="Knotentanz Association"
            description="Erfahren Sie mehr über unsere Geschichte, die Philosophie des Knotentanzes und die Menschen hinter dem Verein."
          />
        </Container>
      </section>
      <AboutIntro />

      <section className="border-t border-border py-24">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Werte"
            title="Was uns ausmacht"
            description="Unsere Arbeit ist geprägt von vier zentralen Werten, die alle unsere Aktivitäten durchziehen."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Eleganz", text: "Stilvolle Ästhetik und höchste Ansprüche an unsere Veranstaltungen." },
              { title: "Gemeinschaft", text: "Menschen verbinden und einen weltoffenen Raum für Begegnung schaffen." },
              { title: "Kreativität", text: "Tradition bewahren und gleichzeitig neue Ausdrucksformen erforschen." },
              { title: "Respekt", text: "Wertschätzung, Inklusion und ein respektvoller Umgang miteinander." },
            ].map((value) => (
              <div key={value.title} className="border border-border p-8 text-center">
                <h3 className="mb-3 font-serif text-2xl text-primary">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamGrid />
    </>
  );
}
