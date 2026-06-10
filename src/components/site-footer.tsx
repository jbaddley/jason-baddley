import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/data/profile";

const socials = [
  { href: profile.contact.github, label: "GitHub", icon: FaGithub },
  { href: profile.contact.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: `mailto:${profile.contact.email}`, label: "Email", icon: FaEnvelope },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {profile.name} · {profile.location}
        </p>
        <div className="flex items-center gap-2">
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
    </footer>
  );
}
