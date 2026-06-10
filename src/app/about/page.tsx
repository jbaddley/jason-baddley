import type { Metadata } from "next";
import { FaChild, FaBookOpen, FaMasksTheater } from "react-icons/fa6";
import { GiRibbonMedal } from "react-icons/gi";
import type { IconType } from "react-icons";
import { personal } from "@/data/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const icons: IconType[] = [FaChild, GiRibbonMedal, FaBookOpen, FaMasksTheater];

export const metadata: Metadata = {
  title: "About",
  description:
    "Beyond code — Jason Baddley is a father of four, an Air Force veteran, and an author writing his first book and a musical with his kids.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <p className="font-mono text-sm text-primary">{"// about"}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Beyond the code
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {personal.intro}
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {personal.facts.map((fact, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Card key={fact.title} className="border-border/70">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-lg">{fact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {fact.body}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
