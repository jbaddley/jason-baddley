import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

const socials = [
  { href: profile.contact.github, label: "GitHub", icon: FaGithub },
  { href: profile.contact.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: `mailto:${profile.contact.email}`, label: "Email", icon: FaEnvelope },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm text-primary">$ whoami</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {profile.title}
        </p>
        <p className="mt-1 font-mono text-sm text-muted-foreground/80">
          {profile.location}
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/90">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/projects" className={buttonVariants({ size: "lg" })}>
            View my work
          </Link>
          <a
            href={`mailto:${profile.contact.email}`}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
