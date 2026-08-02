import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Highlights } from "@/components/sections/highlights";
import { Gallery } from "@/components/sections/gallery";
import { CallToAction } from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Highlights />
      <Gallery />
      <CallToAction />
    </>
  );
}
