import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";

const galleryImages = [
  { src: "/assets/dancing.jpg", alt: "Tanzendes Paar beim Galaball", size: "large" },
  { src: "/assets/ballroom.jpg", alt: "Prächtiger Ballsaal", size: "medium" },
  { src: "/assets/gala.jpg", alt: "Gala-Abend mit Kerzenschein", size: "medium" },
  { src: "/assets/dancers.jpg", alt: "Elegante Tänzer in Pose", size: "large" },
  { src: "/assets/opera.jpg", alt: "Wiener Staatsoper bei Nacht", size: "medium" },
  { src: "/assets/violin.jpg", alt: "Violine im Konzertsaal", size: "medium" },
  { src: "/assets/ballroom2.jpg", alt: "Festlich geschmückter Ballsaal", size: "large" },
];

export function Gallery() {
  return (
    <section className="border-y border-border bg-secondary py-28">
      <Container>
        <SectionHeader
          eyebrow="Impressionen"
          title="Momente des Knotentanzes"
          description="Ein visueller Einblick in unsere Veranstaltungen, Performances und die einzigartige Atmosphäre unserer Community."
        />

        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden border border-border ${
                image.size === "large" ? "aspect-[4/5] sm:col-span-2 lg:col-span-2 lg:row-span-2" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes={
                  image.size === "large"
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-serif text-lg text-cream">{image.alt}</p>
                <div className="mt-2 h-px w-12 bg-primary" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
