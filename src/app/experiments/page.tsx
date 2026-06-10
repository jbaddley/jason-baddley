import type { Metadata } from "next";
import { FaFlaskVial } from "react-icons/fa6";
import { experiments } from "@/data/profile";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Deeper technical experiments by Jason Baddley — DB AI, an AI-assisted SQL explorer, and a turn-by-turn agent framework built from first principles.",
};

export default function ExperimentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-mono text-sm text-primary">{"// experiments"}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Going deeper
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          These are research-driven builds — the projects I take on to learn a
          domain by building it from the ground up. They&apos;re where I work out
          how something really functions, document the trade-offs, and push my own
          understanding of databases and AI agents further.
        </p>
      </header>

      <div className="mt-8 flex max-w-3xl gap-3 rounded-xl border border-brand-accent/25 bg-brand/25 p-4">
        <FaFlaskVial className="mt-0.5 size-5 shrink-0 text-brand-accent" />
        <p className="text-sm leading-relaxed text-foreground/90">
          <span className="font-semibold">Exploratory by design.</span> These are
          personal R&amp;D efforts focused on understanding and craftsmanship, not
          finished products. Some source lives in private repositories.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {experiments.map((experiment) => (
          <ProjectCard key={experiment.slug} project={experiment} />
        ))}
      </div>
    </div>
  );
}
