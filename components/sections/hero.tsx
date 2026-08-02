import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Knotentanz Association - Eleganter Tanzabend"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <Container className="relative z-10 pt-24 text-center">
        <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Willkommen bei der
        </span>
        <h1 className="mb-6 font-serif text-5xl font-normal leading-[1.1] text-foreground md:text-7xl lg:text-8xl">
          Knotentanz
          <br />
          <span className="italic text-primary">Association</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          Eleganz, Rhythmus und emotionale Tiefe. Wir vereinen Tradition und Moderne in einzigartigen
          Tanzveranstaltungen und Bällen.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/events">
              Events entdecken <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/ueber-uns">Über uns</Link>
          </Button>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
}
