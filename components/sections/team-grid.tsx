import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTeam, type TeamMember } from "@/lib/wordpress";

export async function TeamGrid() {
  const team = await getTeam();

  return (
    <section className="border-t border-border py-24">
      <Container>
        <SectionHeader
          eyebrow="Team"
          title="Vorstand & Team"
          description="Engagierte Persönlichkeiten, die die Knotentanz Association mit Herz und Expertise voranbringen."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member: TeamMember) => (
            <Card key={member.id} className="text-center">
              <div className="relative mx-auto mt-6 aspect-square w-32 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
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
