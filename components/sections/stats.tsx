import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";

const stats = [
  { value: "4", label: "Events pro Jahr" },
  { value: "12", label: "Jahre Erfahrung" },
  { value: "500+", label: "Begeisterte Gäste" },
  { value: "3", label: "Tanzflächen" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary py-20">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Zahlen"
          title="Knotentanz in Zahlen"
          description="Ein kurzer Blick auf das, was unsere Association auszeichnet."
          className="mb-14"
        />
        <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-secondary p-8 text-center md:p-12">
              <div className="font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
