"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { type Event } from "@/lib/wordpress";

function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function EventList({ events }: { events: Event[] }) {
  const [filter, setFilter] = React.useState<string>("all");

  const categories = ["all", ...Array.from(new Set(events.map((e) => e.category)))];
  const filteredEvents = filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <section className="py-28">
      <Container>
        <SectionHeader
          eyebrow="Veranstaltungen"
          title="Events & Bälle"
          description="Entdecken Sie alle bevorstehenden Veranstaltungen der Knotentanz Association."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                filter === category
                  ? "border-primary bg-primary text-background"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              aria-pressed={filter === category}
            >
              {category === "all" ? "Alle" : category}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="group flex flex-col overflow-hidden border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-gold"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <div className="absolute left-5 top-5 border border-primary/80 bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background">
                  {event.category}
                </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-cream">{event.title}</CardTitle>
                <CardDescription className="line-clamp-3">{event.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full border-primary/50 hover:bg-primary/10 hover:text-primary" asChild>
                  <Link href={`/events/${event.slug}`}>
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
