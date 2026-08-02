import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="bg-primary py-24 text-background">
      <Container className="text-center">
        <SectionHeader
          align="center"
          title="Werden Sie Teil der Knotentanz Community"
          description="Ob erfahrene Tänzerin, Neuling oder einfach neugierig – wir freuen uns auf Sie."
          className="[&_h2]:text-background [&_p]:text-background/90"
        />
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="outline" className="border-background text-background hover:bg-background/10" asChild>
            <Link href="/kontakt">
              Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button className="bg-background text-primary hover:bg-background/90" asChild>
            <Link href="/events">Events entdecken</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
