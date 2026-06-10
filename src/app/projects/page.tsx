import type { Metadata } from "next";
import { projects } from "@/data/profile";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects Jason Baddley has built — Theater Stack, Just Write, Utilio, and Code Quest.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-mono text-sm text-primary">{"// projects"}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Things I&apos;m building
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A few of the products I&apos;ve designed and shipped on my own time —
          from a platform for community theaters to AI tooling and tools that
          teach kids to code. These are the side projects that keep me sharp and
          remind me why I love this work.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
