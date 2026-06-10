import { Hero } from "@/components/sections/hero";
import { Summary } from "@/components/sections/summary";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { FeaturedProjects } from "@/components/sections/featured-projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Summary />
      <Skills />
      <Timeline />
      <FeaturedProjects />
    </>
  );
}
