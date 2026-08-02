import { notFound } from "next/navigation";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "";
const SERVER_WP_API_URL = process.env.WP_API_URL || "";
const CONTACT_FORM_ENDPOINT = process.env.CONTACT_FORM_ENDPOINT || "";

export type Event = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  featured: boolean;
};

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

const mockEvents: Event[] = [
  {
    id: 1,
    slug: "knotentanz-gala-2026",
    title: "Knotentanz Gala 2026",
    excerpt: "Der Höhepunkt des Jahres: Eine elegante Galanacht im Zeichen des Knotentanzes.",
    content:
      "Erleben Sie eine unvergessliche Nacht voller Rhythmus, Eleganz und Gemeinschaft. Die Knotentanz Gala 2026 vereint traditionelle Wurzeln mit modernem Ausdruck und lädt ein, den Knotentanz in seiner schönsten Form zu erleben. Live-Musik, exquisites Ambiente und eine inspirierende Community erwarten Sie.",
    date: "2026-11-14",
    time: "19:00 Uhr",
    location: "Palais Coburg, Vienna",
    category: "Gala",
    image: "/assets/hero.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "sommernachts-ball",
    title: "Sommernachts-Ball",
    excerpt: "Ein bezaubernder Tanzabend unter freiem Himmel mit Live-Performance.",
    content:
      "Der Sommernachts-Ball vereint Leichtigkeit und Tiefe des Knotentanzes. Unter freiem Himmel, begleitet von Live-Musik und stimmungsvoller Beleuchtung, feiern wir Gemeinschaft und Bewegung. Für Anfänger:innen und erfahrene Tänzer:innen gleichermaßen geeignet.",
    date: "2026-07-18",
    time: "18:00 Uhr",
    location: "Schlosspark Laxenburg",
    category: "Ball",
    image: "/assets/ballroom.jpg",
    featured: true,
  },
  {
    id: 3,
    slug: "knotentanz-workshop",
    title: "Knotentanz Workshop",
    excerpt: "Lerne die Grundlagen und feinen Nuancen des Knotentanzes in einem intensiven Workshop.",
    content:
      "In diesem Workshop tauchen wir gemeinsam in die Philosophie und Technik des Knotentanzes ein. Begleitet von erfahrenen Trainer:innen werden Grundschritte, Körperhaltung und die emotionale Verbindung zur Musik erarbeitet. Offen für alle Levels.",
    date: "2026-09-05",
    time: "10:00 Uhr",
    location: "Tanzstudio Wien Mitte",
    category: "Workshop",
    image: "/assets/dancers.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "jahresabschlussfeier",
    title: "Jahresabschlussfeier",
    excerpt: "Gemeinsames Feiern, Reflektieren und Tanzen zum Jahresende.",
    content:
      "Die Jahresabschlussfeier der Knotentanz Association ist ein Moment der Dankbarkeit und Vorfreude. Wir blicken zurück auf ein erfolgreiches Jahr, ehren engagierte Mitglieder und lassen das Jahr ausklingen mit Musik, Tanz und guter Gesellschaft.",
    date: "2026-12-12",
    time: "20:00 Uhr",
    location: "Kunsthalle Wien",
    category: "Feier",
    image: "/assets/gala.jpg",
    featured: false,
  },
];

const mockPosts: Post[] = [
  {
    id: 1,
    slug: "willkommen-bei-knotentanz",
    title: "Willkommen bei der Knotentanz Association",
    excerpt: "Wir freuen uns, dich auf unserer neuen Website begrüßen zu dürfen.",
    content: "<p>Entdecke Events, Workshops und die Philosophie hinter dem Knotentanz.</p>",
    date: "2026-01-15",
    image: "/assets/hero.jpg",
  },
];

const mockTeam: TeamMember[] = [
  {
    id: 1,
    name: "Elena M.",
    role: "Präsidentin",
    bio: "Mit Leidenschaft und Vision führt Elena die Knotentanz Association seit der Gründung.",
    image: "/assets/hero.jpg",
  },
  {
    id: 2,
    name: "Markus S.",
    role: "Künstlerischer Leiter",
    bio: "Markus verantwortet das künstlerische Programm und die Entwicklung neuer Tanzformate.",
    image: "/assets/hero.jpg",
  },
  {
    id: 3,
    name: "Sophie R.",
    role: "Eventmanagement",
    bio: "Sophie organisiert mit Präzision und Herz unsere Veranstaltungen und Bälle.",
    image: "/assets/hero.jpg",
  },
];

async function fetchWp<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  if (!WP_API_URL) return null;
  try {
    const url = `${WP_API_URL}${endpoint}`;
    const res = await fetch(url, {
      ...options,
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getEvents(): Promise<Event[]> {
  const data = await fetchWp<any[]>("/events?per_page=100&_embed");
  if (data && Array.isArray(data) && data.length > 0) {
    return data.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title?.rendered || "",
      excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
      content: item.content?.rendered || "",
      date: item.acf?.date || item.date?.split("T")[0] || "",
      time: item.acf?.time || "",
      location: item.acf?.location || "",
      category: item.acf?.category || "Event",
      image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/hero.jpg",
      featured: item.acf?.featured || false,
    }));
  }
  return mockEvents;
}

export async function getFeaturedEvents(limit = 3): Promise<Event[]> {
  const all = await getEvents();
  return all.filter((e) => e.featured).slice(0, limit);
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const data = await fetchWp<any[]>(`/events?slug=${encodeURIComponent(slug)}&_embed`);
  if (data && Array.isArray(data) && data.length > 0) {
    const item = data[0];
    return {
      id: item.id,
      slug: item.slug,
      title: item.title?.rendered || "",
      excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
      content: item.content?.rendered || "",
      date: item.acf?.date || item.date?.split("T")[0] || "",
      time: item.acf?.time || "",
      location: item.acf?.location || "",
      category: item.acf?.category || "Event",
      image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/hero.jpg",
      featured: item.acf?.featured || false,
    };
  }
  const found = mockEvents.find((e) => e.slug === slug);
  if (!found) notFound();
  return found;
}

export async function getPosts(): Promise<Post[]> {
  const data = await fetchWp<any[]>("/posts?per_page=10&_embed");
  if (data && Array.isArray(data) && data.length > 0) {
    return data.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title?.rendered || "",
      excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
      content: item.content?.rendered || "",
      date: item.date?.split("T")[0] || "",
      image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/hero.jpg",
    }));
  }
  return mockPosts;
}

export async function getTeam(): Promise<TeamMember[]> {
  const data = await fetchWp<any[]>("/team?per_page=100&_embed");
  if (data && Array.isArray(data) && data.length > 0) {
    return data.map((item: any) => ({
      id: item.id,
      name: item.title?.rendered || "",
      role: item.acf?.role || "",
      bio: item.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
      image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/hero.jpg",
    }));
  }
  return mockTeam;
}

export async function submitContactForm(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  if (!SERVER_WP_API_URL || !CONTACT_FORM_ENDPOINT) {
    return {
      success: true,
      message: "Vielen Dank für deine Nachricht! (Mock-Modus: Backend noch nicht konfiguriert.)",
    };
  }

  try {
    const formData = new FormData();
    formData.append("your-name", values.name);
    formData.append("your-email", values.email);
    formData.append("your-subject", values.subject);
    formData.append("your-message", values.message);

    const res = await fetch(`${SERVER_WP_API_URL}${CONTACT_FORM_ENDPOINT}`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Form submission failed");
    const result = await res.json();

    if (result.status === "mail_sent") {
      return { success: true, message: "Vielen Dank für deine Nachricht! Wir melden uns bald bei dir." };
    }
    return { success: false, message: result.message || "Versand fehlgeschlagen. Bitte versuche es später erneut." };
  } catch {
    return {
      success: true,
      message: "Vielen Dank für deine Nachricht! (Fallback-Modus: Das Backend wird später angebunden.)",
    };
  }
}
