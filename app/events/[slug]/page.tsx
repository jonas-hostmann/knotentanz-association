import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";
import { getEventBySlug, getEvents } from "@/lib/wordpress";

interface EventDetailPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventDetailPageProps) {
  const event = await getEventBySlug(params.slug);
  if (!event) return { title: "Event nicht gefunden" };
  return {
    title: event.title,
    description: event.excerpt,
  };
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const event = await getEventBySlug(params.slug);
  if (!event) notFound();

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-14">
          <span className="mb-4 inline-block w-fit border border-primary/80 bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background">
            {event.category}
          </span>
          <h1 className="max-w-4xl font-serif text-4xl font-normal leading-tight text-cream md:text-5xl lg:text-6xl">
            {event.title}
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Button variant="outline" size="sm" className="mb-10 border-primary/50 hover:bg-primary/10 hover:text-primary" asChild>
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zu den Events
            </Link>
          </Button>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div
                className="prose prose-invert max-w-none leading-relaxed text-cream/90"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />
            </div>

            <aside className="h-fit border border-border bg-card p-8">
              <h2 className="mb-8 font-serif text-2xl text-cream">Veranstaltungsdetails</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-cream">Datum</p>
                    <p className="text-sm text-muted-foreground">{formatDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-cream">Uhrzeit</p>
                    <p className="text-sm text-muted-foreground">{event.time || "Wird bekannt gegeben"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-cream">Ort</p>
                    <p className="text-sm text-muted-foreground">{event.location || "Wird bekannt gegeben"}</p>
                  </div>
                </div>
              </div>
              <Button className="mt-10 w-full" asChild>
                <Link href="/kontakt">Anfrage stellen</Link>
              </Button>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
