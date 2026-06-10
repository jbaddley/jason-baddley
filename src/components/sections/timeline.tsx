import { experience } from "@/data/profile";

export function Timeline() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h2 className="font-mono text-sm text-primary">{"// experience"}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        13+ years across startups and enterprise — leading teams and shipping code.
      </p>

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
