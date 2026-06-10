import type { Metadata } from "next";
import { FaFlaskVial } from "react-icons/fa6";
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
          A few of the things I&apos;ve been building on my own time — from a
          platform for community theaters to AI tooling and tools that teach kids
          to code. These are the side projects that keep me sharp and remind me
          why I love this work.
        </p>
      </header>

      <div className="mt-8 flex max-w-3xl gap-3 rounded-xl border border-brand-accent/25 bg-brand/25 p-4">
        <FaFlaskVial className="mt-0.5 size-5 shrink-0 text-brand-accent" />
        <p className="text-sm leading-relaxed text-foreground/90">
          <span className="font-semibold">Heads up — these are works in progress.</span>{" "}
          Every project here is a personal experiment: a playground where I get to
          flex my skills and build things I actually use. They&apos;re not finished
          software, and they aren&apos;t being advertised for public use at this
          point. Expect rough edges, half-built features, and the occasional
          change of direction.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
