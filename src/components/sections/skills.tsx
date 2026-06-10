import { techStack } from "@/data/profile";

export function Skills() {
  return (
    <section className="border-y border-brand-accent/15 bg-brand/25">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="font-mono text-sm text-primary">{"// stack"}</h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {techStack.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background px-3 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
            >
              {s.icon && <s.icon className="size-4" />}
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
