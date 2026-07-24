import type { Metadata } from "next";
import { FaFlaskVial } from "react-icons/fa6";
import { experiments } from "@/data/profile";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Deeper technical experiments by Jason Baddley — including a turn-by-turn (ReAct) AI agent framework built from first principles.",
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
          When I want to know if I can build something at a production standard, I
          build it myself, end to end, and hold myself to the same bar I&apos;d use
          shipping to real users. These are the deepest dives — where I go past
          &quot;good enough&quot; to understand a system all the way down.
        </p>
      </header>

      <div className="mt-8 flex max-w-3xl gap-3 rounded-xl border border-brand-accent/25 bg-brand/25 p-4">
        <FaFlaskVial className="mt-0.5 size-5 shrink-0 text-brand-accent" />
        <p className="text-sm leading-relaxed text-foreground/90">
          <span className="font-semibold">Built solo, to a production bar.</span>{" "}
          These aren&apos;t tutorials or toy demos — they&apos;re fully-featured
          systems (guardrails, cost tracking, eval harnesses) that happen to exist
          because I wanted to understand something completely, not because a
          customer asked for it. Some source lives in private repositories.
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
