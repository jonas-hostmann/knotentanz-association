import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";

const galleryImages = [
  { src: "/assets/hero.jpg", alt: "Knotentanz Performance" },
  { src: "/assets/hero.jpg", alt: "Gala-Abend" },
  { src: "/assets/hero.jpg", alt: "Tanzende Paare" },
  { src: "/assets/hero.jpg", alt: "Workshop Atmosphäre" },
  { src: "/assets/hero.jpg", alt: "Ballsaal" },
  { src: "/assets/hero.jpg", alt: "Emotionale Tanzszene" },
];

export function Gallery() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <SectionHeader
          eyebrow="Impressionen"
          title="Momente des Knotentanzes"
          description="Ein visueller Einblick in unsere Veranstaltungen, Performances und die einzigartige Atmosphäre unserer Community."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden border border-border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
