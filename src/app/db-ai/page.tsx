import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLock,
  FaWandMagicSparkles,
  FaShieldHalved,
  FaDiagramProject,
  FaCode,
  FaTableCells,
  FaKey,
  FaWrench,
  FaCircleCheck,
} from "react-icons/fa6";
import {
  SiElectron,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiZod,
  SiNodedotjs,
} from "react-icons/si";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "DB AI — AI-assisted SQL explorer",
  description:
    "A deep dive into DB AI: a desktop database client that grounds an LLM in your live PostgreSQL schema to turn plain-English questions into runnable SQL — with a full SQL workbench, safety guardrails, and encrypted local credentials.",
};

/* ------------------------------------------------------------------ */
/* Page data                                                           */
/* ------------------------------------------------------------------ */

type Feature = { title: string; body: string };
type FeatureGroup = {
  icon: IconType;
  eyebrow: string;
  heading: string;
  lede: string;
  features: Feature[];
};

const featureGroups: FeatureGroup[] = [
  {
    icon: FaWandMagicSparkles,
    eyebrow: "the differentiator",
    heading: "An AI assistant that knows your schema",
    lede: "The LLM never guesses in the dark. It is grounded in the live database — tables, columns, and relationships — so its SQL fits the schema in front of you.",
    features: [
      {
        title: "Natural language → SQL",
        body: "Describe what you want — “list all users with their order counts from last month” — and get runnable SQL you can inspect before executing. Nothing runs automatically.",
      },
      {
        title: "Bring your own model",
        body: "Choose Anthropic, OpenAI, or Auto (Anthropic first). Model IDs are overridable, and requests use whichever provider key you have configured.",
      },
      {
        title: "Fix with AI",
        body: "When a query errors, send the SQL and the exact error back to the model and get a corrected version in place — no copy-pasting stack traces around.",
      },
      {
        title: "It learns from mistakes",
        body: "Every SQL error is recorded locally and fed back into future generations so the model stops repeating the same mistakes. Accepted “Fix with AI” corrections become the strongest lessons.",
      },
    ],
  },
  {
    icon: FaShieldHalved,
    eyebrow: "trust layer",
    heading: "Built to be pointed at production",
    lede: "AI-generated SQL against a real database is only useful if it's safe. Guardrails are per-connection and explicit — never inferred.",
    features: [
      {
        title: "Read-only safe mode",
        body: "Flag a connection as safe and every write is blocked. Overriding requires typing ALLOW WRITES, and the override lasts only for the session.",
      },
      {
        title: "Honest environment labels",
        body: "dev / stage / prod badges come from the saved profile you set — not guessed from a hostname — so a “prod” badge always means you called it prod.",
      },
      {
        title: "Destructive-query confirmation",
        body: "DELETE, UPDATE, DROP, and TRUNCATE prompt for confirmation before they run, so a stray statement can't quietly reshape a table.",
      },
      {
        title: "Timeouts & row caps",
        body: "Per-connection statement timeouts and a configurable max-row cap keep a heavy query from hanging the app or pulling millions of rows.",
      },
    ],
  },
  {
    icon: FaCode,
    eyebrow: "the workbench",
    heading: "A real SQL editor, not a toy box",
    lede: "Everything you expect from a modern SQL client, focused on the PostgreSQL workflow.",
    features: [
      {
        title: "Tabs & run modes",
        body: "Multiple saved-query tabs, and run the selection, the current statement, or the whole script — whatever fits the moment.",
      },
      {
        title: "EXPLAIN & ANALYZE",
        body: "Plan a query with EXPLAIN (FORMAT JSON) without executing it, or run EXPLAIN ANALYZE for real timings, with the plan available as downloadable JSON.",
      },
      {
        title: "Named parameters",
        body: "Placeholders like :organization_id are filled in a params panel and substituted on Run/Explain/Analyze — while PostgreSQL ::type casts are left untouched.",
      },
      {
        title: "Transactions & cancel",
        body: "Wrap a multi-statement script in BEGIN … COMMIT with automatic rollback on failure, and cancel a long-running query mid-flight.",
      },
    ],
  },
  {
    icon: FaTableCells,
    eyebrow: "data operations",
    heading: "Browse, edit, and export",
    lede: "A full data grid for exploring and changing rows without hand-writing every statement.",
    features: [
      {
        title: "Filter, sort & search",
        body: "Apply a WHERE clause, order by any column, and search within the current page of results to find the row you're after.",
      },
      {
        title: "Safe inline editing",
        body: "Insert, edit, and delete rows behind an explicit Edit-mode toggle, with values validated by Zod schemas before anything is written.",
      },
      {
        title: "Paginated for scale",
        body: "First/prev/next/last navigation with 50–1000 rows per page and a live total count, so large tables stay responsive.",
      },
      {
        title: "Export three ways",
        body: "Download results as CSV or JSON, or generate INSERT statements from the browse grid to move data between databases.",
      },
    ],
  },
  {
    icon: FaDiagramProject,
    eyebrow: "schema & metadata",
    heading: "Understand the database, not just the rows",
    lede: "Navigate structure and relationships straight from PostgreSQL's own metadata.",
    features: [
      {
        title: "Filterable table tree",
        body: "A searchable tree of schemas and tables in the sidebar gets you to the object you need fast.",
      },
      {
        title: "DDL viewer",
        body: "Generate and copy CREATE TABLE DDL for any table to reuse in migrations or share with a teammate.",
      },
      {
        title: "ER-lite foreign keys",
        body: "See foreign keys database-wide, or just the incoming and outgoing relationships touching one table, sourced from information_schema and pg_constraint.",
      },
      {
        title: "Query scaffolding",
        body: "Open a SELECT template for the selected table to jump straight from browsing into editing.",
      },
    ],
  },
  {
    icon: FaKey,
    eyebrow: "security & storage",
    heading: "Credentials stay on your machine",
    lede: "Everything sensitive is stored locally and encrypted — nothing is shipped to a server that isn't yours.",
    features: [
      {
        title: "Encrypted credentials",
        body: "Connection secrets and API keys are encrypted at rest locally. Saved API keys take precedence over ANTHROPIC_API_KEY / OPENAI_API_KEY from your environment or .env.",
      },
      {
        title: "Flexible TLS",
        body: "Connect by fields or connection string, pick an SSL mode from disable to verify-full, and opt into self-signed certificates when a private CA needs it.",
      },
      {
        title: "History & snippets, locally",
        body: "Per-connection execution history and named snippets are kept in local storage — recent runs and reusable queries always at hand.",
      },
      {
        title: "Local-only usage metering",
        body: "Successful AI generations are counted locally by provider and model, so you can see your own usage without any telemetry leaving the app.",
      },
    ],
  },
];

const stack: { label: string; icon: IconType }[] = [
  { label: "Electron", icon: SiElectron },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Prisma", icon: SiPrisma },
  { label: "Zod", icon: SiZod },
  { label: "Tailwind CSS", icon: SiTailwindcss },
];

const buildNotes: Feature[] = [
  {
    title: "Spec-driven",
    body: "Scoped from a written PRD that distills the most valuable features of DBeaver, TablePlus, DataGrip, and Chat2DB, plus an MVP validation checklist that tracked delivery against it.",
  },
  {
    title: "Electron architecture",
    body: "A main process owns database and LLM access; a locked-down preload bridges it to the renderer over IPC. The UI never touches your database or keys directly.",
  },
  {
    title: "Local app database",
    body: "Prisma manages a local store for saved connection profiles and settings, keeping app state durable and separate from the databases you connect to.",
  },
  {
    title: "Safety by default",
    body: "AI output is always previewed, writes are gated, and destructive statements are confirmed — the model assists, but the human always pulls the trigger.",
  },
];

/* ------------------------------------------------------------------ */
/* Faux app preview (decorative)                                       */
/* ------------------------------------------------------------------ */

function AppPreview() {
  const purple = "#7c4dff";
  return (
    <div
      aria-hidden
      className="overflow-hidden rounded-xl border border-white/10 bg-[#181820] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)]"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#14141b] px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-white/40">db-ai — production</span>
        <span
          className="ml-auto rounded border border-amber-400/40 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-amber-300"
        >
          prod · safe mode
        </span>
      </div>

      <div className="grid grid-cols-[130px_1fr] text-[11px]">
        {/* sidebar */}
        <div className="border-r border-white/10 bg-[#181820] p-2.5">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-wide text-white/35">
            Tables
          </p>
          <ul className="space-y-1.5 font-mono text-white/60">
            {["users", "orders", "products", "invoices", "sessions"].map(
              (t, i) => (
                <li
                  key={t}
                  className="truncate rounded px-1.5 py-1"
                  style={
                    i === 1
                      ? { background: "rgba(124,77,255,0.15)", color: "#c9b6ff" }
                      : undefined
                  }
                >
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* main */}
        <div className="bg-[#1e1e26] p-3">
          <div className="mb-2 rounded-md border border-white/10 bg-[#181820] p-2">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-wide text-white/35">
              Ask the model
            </p>
            <p className="text-[11px] leading-snug text-white/75">
              List all users with their order counts from last month
            </p>
          </div>
          <pre className="overflow-hidden rounded-md border border-white/10 bg-[#141019] p-2.5 font-mono text-[10.5px] leading-relaxed">
            <span style={{ color: purple }}>SELECT</span>
            <span className="text-white/80"> u.name,</span>
            {"\n"}
            <span className="text-white/50">       </span>
            <span className="text-sky-300">count</span>
            <span className="text-white/80">(o.id) </span>
            <span style={{ color: purple }}>AS</span>
            <span className="text-white/80"> orders</span>
            {"\n"}
            <span style={{ color: purple }}>FROM</span>
            <span className="text-white/80"> users u</span>
            {"\n"}
            <span style={{ color: purple }}>LEFT JOIN</span>
            <span className="text-white/80"> orders o </span>
            <span style={{ color: purple }}>ON</span>
            <span className="text-white/80"> o.user_id = u.id</span>
            {"\n"}
            <span style={{ color: purple }}>WHERE</span>
            <span className="text-white/80"> o.created_at {">="} </span>
            <span className="text-emerald-300">date_trunc</span>
            <span className="text-white/80">(</span>
            <span className="text-amber-200">&apos;month&apos;</span>
            <span className="text-white/80">, now())</span>
            {"\n"}
            <span style={{ color: purple }}>GROUP BY</span>
            <span className="text-white/80"> u.name;</span>
          </pre>
          <div className="mt-2 flex items-center gap-2">
            <span
              className="rounded px-2 py-1 text-[10px] font-medium text-white"
              style={{ background: purple }}
            >
              Run
            </span>
            <span className="rounded border border-white/15 px-2 py-1 text-[10px] text-white/70">
              Explain
            </span>
            <span className="ml-auto font-mono text-[10px] text-emerald-300/80">
              ✓ generated · anthropic
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function DbAiPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-accent/15 bg-brand/30">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-sm text-primary">{"// db-ai"}</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Talk to your database in plain English.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                DB AI is a desktop database client that pairs a modern SQL
                workbench with an AI assistant grounded in your live PostgreSQL
                schema — so you can explore a database by describing what you
                want instead of remembering exact syntax.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-sm text-primary">
                  <FaCode className="size-3.5" />
                  Designed &amp; built solo — spec to shipped
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground">
                  <FaLock className="size-3.5" />
                  Source in a private repo
                </span>
              </div>
            </div>
            <AppPreview />
          </div>
        </div>
      </section>

      {/* The idea */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="font-mono text-sm text-primary">{"// the idea"}</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          The best of the big SQL clients, distilled around AI
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            Tools like DBeaver, TablePlus, DataGrip, and Chat2DB are each
            excellent, but sprawling. DB AI started from a written product spec
            that asked a sharper question: which capabilities actually matter
            day-to-day, and what changes when an AI assistant is a first-class
            part of the workflow rather than a bolt-on?
          </p>
          <p>
            The answer is a focused, AI-first client. An LLM is grounded in your
            live schema and turns plain-English questions into SQL you can read
            and run — but every guardrail assumes it will eventually be pointed
            at a production database. Nothing runs on its own, writes are gated,
            and your credentials never leave your machine.
          </p>
        </div>
      </section>

      {/* Feature groups */}
      <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
        <div className="space-y-16">
          {featureGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.heading}>
                <div className="flex max-w-2xl flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                      {group.eyebrow}
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {group.heading}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {group.lede}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {group.features.map((f) => (
                    <Card key={f.title} className="border-border/70">
                      <CardHeader>
                        <CardTitle className="flex items-start gap-2 text-base">
                          <FaCircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          {f.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm leading-relaxed text-muted-foreground">
                        {f.body}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it's built */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Separator className="mb-16" />
        <div className="flex max-w-2xl flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
              <FaWrench className="size-5" />
            </span>
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              under the hood
            </p>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">How it&apos;s built</h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            A pragmatic Electron stack, put together so the AI can be useful
            without ever being the weakest link in security.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((s) => {
            const Icon = s.icon;
            return (
              <Badge
                key={s.label}
                variant="secondary"
                className="gap-1.5 px-3 py-1 text-sm font-normal"
              >
                <Icon className="size-3.5" />
                {s.label}
              </Badge>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {buildNotes.map((n) => (
            <Card key={n.title} className="border-border/70">
              <CardHeader>
                <CardTitle className="text-base text-primary">
                  {n.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {n.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-accent/15 bg-brand/30">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight">
              This is what I ship on my own
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              DB AI went from a written product spec to a working desktop app —
              schema-grounded AI, a full SQL workbench, and production-minded
              guardrails — scoped, designed, and built end to end by one product
              engineer. It&apos;s a fair sample of how I work: take an ambiguous
              problem, decide what actually matters, and ship it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className={buttonVariants()}>
              See more of my work <FaArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/experiments"
              className={buttonVariants({ variant: "outline" })}
            >
              <FaArrowLeft className="size-3.5" /> All experiments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
