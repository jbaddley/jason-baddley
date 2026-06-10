import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import { schoolAI } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "SchoolAI",
  description:
    "What Jason Baddley does at SchoolAI — building AI-powered tools that make school awesome for students and teachers.",
};

export default function SchoolAIPage() {
  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden border-b border-brand-accent/15 bg-brand/30">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <p className="font-mono text-sm text-primary">{"// schoolai"}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {schoolAI.mission}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {schoolAI.intro}
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-foreground/90">
          {schoolAI.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {schoolAI.focus.map((f) => (
            <Card key={f.title} className="border-border/70">
              <CardHeader>
                <CardTitle className="text-base text-primary">
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {f.body}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://code-quest.jasonbaddley.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants()}
          >
            Try Code Quest <FaArrowUpRightFromSquare className="size-3" />
          </a>
          <Link
            href="/projects"
            className={buttonVariants({ variant: "outline" })}
          >
            See my projects <FaArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
