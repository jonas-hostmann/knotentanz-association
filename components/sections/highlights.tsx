import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { getFeaturedEvents, type Event } from "@/lib/wordpress";

function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export async function Highlights() {
  const events = await getFeaturedEvents(3);

  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Highlights"
          title="Bevorstehende Veranstaltungen"
          description="Entdecken Sie unsere exklusiven Events, Bälle und Workshops – jeden einzelnen erleben Sie mit ganzem Herzen."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event: Event) => (
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

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/events">Alle Events</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
