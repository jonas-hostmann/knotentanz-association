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
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Veranstaltungen"
          title="Events & Bälle"
          description="Entdecken Sie alle bevorstehenden Veranstaltungen der Knotentanz Association."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background">
                  {event.category}
                </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="line-clamp-3">{event.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
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
