import { FaGithub, FaArrowUpRightFromSquare, FaLock } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-border/70 transition-colors hover:border-primary/40">
      <CardHeader>
        <div className="flex items-baseline justify-between gap-3">
          <CardTitle className={cn("text-xl", project.accent)}>
            {project.name}
          </CardTitle>
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          {project.tagline}
        </p>
        <CardDescription className="pt-1 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full bg-current", project.accent)} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary" className="font-normal">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.links.map((link) =>
            link.comingSoon ? (
              <Button
                key={link.href}
                variant="outline"
                size="sm"
                disabled
                className="cursor-default"
              >
                {link.label} · Coming soon
              </Button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "sm" })}
              >
                {link.label}
                <FaArrowUpRightFromSquare className="size-3" />
              </a>
            ),
          )}
          {project.repoPrivate ? (
            <span
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 text-[0.8rem] text-muted-foreground"
              title="Source is in a private repository"
            >
              <FaLock className="size-3.5" />
              Private repo
            </span>
          ) : (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <FaGithub className="size-4" />
              Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
