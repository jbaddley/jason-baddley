import Link from "next/link";
import { experience } from "@/data/profile";

const ownershipHighlights = [
  {
    label: "Real Growth Media",
    detail: "Founder, current",
    body: "My own company, my own risk.",
  },
  {
    label: "Omadi, Senior Web Application Developer",
    detail: "2017 – 2019",
    body: "Took a greenfield platform from mock-ups to production in days, replacing enterprise incumbent software.",
  },
  {
    label: "DB AI",
    detail: "Personal project",
    body: "Solo-built, spec to shipped.",
    href: "/db-ai",
  },
];

export function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-mono text-sm text-primary">{"// experience"}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        10+ years across startups and enterprise — including running my own
        company and leading 0-to-1 builds, not just maintaining what already
        existed.
      </p>

      <div className="mt-6 rounded-xl border border-brand-accent/25 bg-brand/25 p-4">
        <h3 className="font-mono text-xs uppercase tracking-wide text-brand-accent">
          Where I&apos;ve owned the outcome
        </h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {ownershipHighlights.map((item) => (
            <div key={item.label}>
              <p className="text-sm font-semibold text-foreground">
                {item.href ? (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.detail}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ol className="mt-10 space-y-8 border-l border-border/70 pl-6">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="relative">
            <span
              className={`absolute -left-[1.71rem] top-1.5 size-3 rounded-full border-2 ${
                job.current
                  ? "border-primary bg-primary"
                  : "border-border bg-background"
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {job.role}
              </h3>
              <span className="text-sm font-medium text-primary">
                {job.company}
              </span>
              {job.current && (
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                  Current
                </span>
              )}
            </div>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              {job.period}
              {job.location ? ` · ${job.location}` : ""}
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {job.blurb}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
