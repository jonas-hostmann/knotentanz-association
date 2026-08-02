import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Gallery } from "@/components/sections/gallery";
import { CallToAction } from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Gallery />
      <CallToAction />
    </>
  );
}
