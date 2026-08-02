import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutIntro() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden border border-border">
              <Image
                src="/assets/ballroom.jpg"
                alt="Knotentanz Association Geschichte"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 border border-primary/30 bg-background/90 p-6 lg:block">
              <p className="font-serif text-4xl text-primary">12</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">Jahre Erfahrung</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Geschichte"
              title="Die Philosophie des Knotentanzes"
              description="Der Knotentanz verbindet körperliche Präsenz mit emotionaler Tiefe. Jeder Schritt erzählt eine Geschichte, jede Bewegung ist ein Ausdruck von Verbindung."
              className="max-w-none"
            />
            <div className="mt-10 space-y-6 text-muted-foreground">
              <p>
                Die Knotentanz Association wurde aus der Idee geboren, einen Raum zu schaffen, in dem Tradition und
                Moderne des Tanzes aufeinandertreffen. Inspiriert von der Eleganz klassischer Bälle und der Lebendigkeit
                zeitgenössischer Bewegungskultur, laden wir Menschen ein, durch Tanz in Kontakt zu kommen.
              </p>
              <p>
                Unser Name ist Programm: Der Knoten steht für Verbindung, für das Zusammenführen unterschiedlicher
                Wege, für das Spannungsfeld zwischen Haltung und Loslassen. Genau das erleben wir in jedem unserer Events
                – und genau das möchten wir mit Ihnen teilen.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
