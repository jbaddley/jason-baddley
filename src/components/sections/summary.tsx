import { profile, topSkills } from "@/data/profile";
import { Badge } from "@/components/ui/badge";

export function Summary() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-mono text-sm text-primary">{"// summary"}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/90">
            {profile.summary.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">
              Top skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {topSkills.map((s) => (
                <Badge key={s.label} className="gap-1.5 py-1">
                  {s.icon && <s.icon className="size-3.5" />}
                  {s.label}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">
              Education
            </h3>
            <div className="mt-3 text-sm">
              <p className="font-medium text-foreground">
                {profile.education.school}
              </p>
              <p className="text-muted-foreground">{profile.education.degree}</p>
              <p className="text-muted-foreground">
                {profile.education.detail} · {profile.education.years}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
