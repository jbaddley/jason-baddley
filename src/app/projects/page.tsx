import type { Metadata } from "next";
import { FaFlaskVial } from "react-icons/fa6";
import { projects } from "@/data/profile";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects Jason Baddley has built — Theater Stack, Just Write, Utilio, and DB AI.",
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
          A few of the things I&apos;ve been building on my own time — a platform
          for community theaters, AI-powered desktop apps, and a suite of
          browser-based tools. Each one is proof I can take an idea from zero to
          something real without anyone assigning it to me.
        </p>
      </header>

      <div className="mt-8 flex max-w-3xl gap-3 rounded-xl border border-brand-accent/25 bg-brand/25 p-4">
        <FaFlaskVial className="mt-0.5 size-5 shrink-0 text-brand-accent" />
        <p className="text-sm leading-relaxed text-foreground/90">
          <span className="font-semibold">Built and shipped on my own initiative, no product spec required.</span>{" "}
          Everything here started as a problem I decided was worth solving, and I
          own it end to end: product decisions, architecture, and code. Some are
          live and in daily use (heyjustwrite.com, utilio.solutions). Others are
          mid-flight because I&apos;m still deciding what&apos;s next.
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
