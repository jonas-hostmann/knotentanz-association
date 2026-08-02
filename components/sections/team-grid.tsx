import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTeam, type TeamMember } from "@/lib/wordpress";

export async function TeamGrid() {
  const team = await getTeam();

  return (
    <section className="border-t border-border py-28">
      <Container>
        <SectionHeader
          eyebrow="Team"
          title="Vorstand & Team"
          description="Engagierte Persönlichkeiten, die die Knotentanz Association mit Herz und Expertise voranbringen."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member: TeamMember) => (
            <Card key={member.id} className="border-border bg-card text-center">
              <div className="relative mx-auto mt-8 aspect-square w-36 overflow-hidden rounded-full border-2 border-primary/50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-cream">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
