import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Countdown } from "./countdown";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Knotentanz Association - Prächtiger Kronleuchter in einem eleganten Ballsaal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      <Container className="relative z-10 pt-28 text-center">
        <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Die Knotentanz Association
        </span>
        <h1 className="mx-auto mb-6 max-w-5xl font-serif text-5xl font-normal leading-[1.05] text-cream md:text-7xl lg:text-8xl">
          Eleganz, die
          <br />
          <span className="text-gold-gradient italic">bewegt</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
          Wo Tradition auf Moderne trifft und jeder Schritt eine Geschichte erzählt. Erleben Sie exklusive Bälle, Galas
          und Workshops in einzigartiger Atmosphäre.
        </p>

        <div className="mx-auto mb-16 max-w-3xl">
          <Countdown targetDate="2026-11-14T19:00:00" />
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cream/60">Bis zur nächsten Gala</p>
        </div>

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
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-primary/80 to-transparent" />
      </div>
    </section>
  );
}
