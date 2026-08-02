import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ballroom2.jpg"
          alt="Eleganter Ballsaal"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <Container className="relative z-10 text-center">
        <SectionHeader
          align="center"
          title="Werden Sie Teil der Knotentanz Community"
          description="Ob erfahrene Tänzerin, Neuling oder einfach neugierig – wir freuen uns auf Sie."
          className="[&_h2]:text-cream [&_p]:text-cream/80"
        />
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="bg-cream text-background hover:bg-cream/90" asChild>
            <Link href="/kontakt">
              Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-cream text-cream hover:bg-cream/10" asChild>
            <Link href="/events">Events entdecken</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
