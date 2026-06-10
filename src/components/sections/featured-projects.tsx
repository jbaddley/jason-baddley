import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-mono text-sm text-primary">{"// projects"}</h2>
            <p className="mt-2 text-2xl font-bold tracking-tight">
              Things I&apos;m building
            </p>
          </div>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden sm:inline-flex",
            )}
          >
            See all <FaArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href="/projects"
              className="group rounded-xl border border-border/70 bg-background p-5 transition-colors hover:border-primary/40"
            >
              <h3 className={cn("text-lg font-semibold", p.accent)}>{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/80">
                {p.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Explore <FaArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            See all projects <FaArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
