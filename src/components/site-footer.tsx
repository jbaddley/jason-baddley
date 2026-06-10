import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/data/profile";

const socials = [
  { href: profile.contact.github, label: "GitHub", icon: FaGithub },
  { href: profile.contact.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: `mailto:${profile.contact.email}`, label: "Email", icon: FaEnvelope },
];

export function SiteFooter() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-chrome shadow-[0_-8px_24px_-6px_rgba(0,0,0,0.6)]">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <p className="truncate text-xs text-muted-foreground sm:text-sm">
          © {profile.name}
          <span className="hidden sm:inline"> · {profile.location}</span>
        </p>
        <div className="flex items-center gap-1.5">
          <a
            href={`mailto:${profile.contact.email}`}
            className="mr-1 hidden text-sm text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            {profile.contact.email}
          </a>
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
