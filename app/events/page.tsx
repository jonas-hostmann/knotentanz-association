import { EventList } from "@/components/sections/event-list";
import { getEvents } from "@/lib/wordpress";

export const metadata = {
  title: "Events",
  description: "Bevorstehende Veranstaltungen, Bälle und Workshops der Knotentanz Association.",
};

export default async function EventsPage() {
  const events = await getEvents();

  return <EventList events={events} />;
}
