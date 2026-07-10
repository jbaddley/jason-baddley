import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiOpenai,
  SiCloudflare,
  SiGo,
  SiKubernetes,
  SiD3,
  SiElectron,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Jason Baddley",
  title: "Product Engineer & Inventor",
  hook: "When the tool I need doesn't exist, I build it.",
  location: "Lehi, Utah, United States",
  tagline:
    "Product engineer and inventor with 10+ years turning vague ideas into shipped products. My roots are in business intelligence and data visualization; my present is AI — building agents, tool use, and LLM-driven features end to end. I take a fuzzy problem, make it real, and iterate with users until it beats what they imagined.",
  summary: [
    "I'm a product engineer who lives at the intersection of technical depth and creative instinct. For over a decade I've built data-heavy products — custom d3 dashboards and BI tools early on, full-stack React/TypeScript/Node/Postgres applications since, and lately AI-native features: chat agents with tool use, LLM output governance, and the pipelines that make them trustworthy.",
    "What actually drives me is invention. When I couldn't find a good way to run a data-driven beta-reader program for my upcoming book, I built one (heyjustwrite.com). When I wanted to investigate our databases by asking questions in plain language, I built an AI tool to compose and test the queries. I don't do my best work against PRDs and line-level requirements — I do it by taking an abstract idea, making it real, and refining it shoulder-to-shoulder with the people who'll use it.",
    "My favorite moment is demo day — not just showing what we built, but watching users see what's suddenly possible and start dreaming out loud. Turning those dreams into something that actually works is the whole job to me. It starts with asking questions until I understand the problem someone is truly trying to solve, not just the steps they've always used to solve it.",
  ],
  lookingFor:
    "Where I'm headed: larger impact on ambitious products by bringing both sides of the table — the technical build and the creative, UX-driven judgment about what's worth building at all. I want high autonomy, real ownership, and very little process between an idea and a shipped feature. I'm especially drawn to AI-native products in data, BI, and developer tools — places where a strong opinion about the user experience changes what the product can be.",
  contact: {
    email: "jasonbaddley@gmail.com",
    github: "https://github.com/jbaddley",
    githubHandle: "jbaddley",
    linkedin: "https://www.linkedin.com/in/jason-baddley",
    linkedinHandle: "in/jason-baddley",
  },
  education: {
    school: "Utah State University",
    degree: "Master's, Management Information Systems",
    detail: "Data Visualization specialty",
    years: "2010 – 2012",
  },
};

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type Skill = { label: string; icon?: IconType };

export const topSkills: Skill[] = [
  { label: "Amazon Web Services", icon: FaAws },
  { label: "Large Language Models", icon: FaBrain },
  { label: "Node.js", icon: SiNodedotjs },
];

export const techStack: Skill[] = [
  { label: "TypeScript", icon: SiTypescript },
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Prisma", icon: SiPrisma },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "AWS", icon: FaAws },
  { label: "OpenAI / LLMs", icon: SiOpenai },
  { label: "Cloudflare Workers", icon: SiCloudflare },
  { label: "Go", icon: SiGo },
  { label: "Kubernetes", icon: SiKubernetes },
  { label: "D3.js", icon: SiD3 },
  { label: "Electron", icon: SiElectron },
];

/* ------------------------------------------------------------------ */
/* Experience timeline                                                 */
/* ------------------------------------------------------------------ */

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  blurb: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "SchoolAI",
    role: "Senior Software Engineer",
    period: "Oct 2025 – Present",
    location: "Lehi, Utah",
    blurb:
      "Building AI-powered tools that make school awesome for students and teachers. (See the SchoolAI page for more.)",
    current: true,
  },
  {
    company: "Real Growth Media",
    role: "Founder",
    period: "May 2023 – Present",
    location: "Lehi, Utah",
    blurb:
      "Helping small businesses solve problems with technology. I bring 13+ years of React, TypeScript, Node.js, and Postgres — plus AI tooling built on OpenAI's APIs — to help ventures get off the ground.",
    current: true,
  },
  {
    company: "Angel Studios",
    role: "Sr. Fullstack Software Engineer",
    period: "Feb 2025 – Oct 2025",
    location: "Provo, Utah",
    blurb:
      "Built customer support tools for managing memberships using Next.js, TypeScript, Node.js, Prisma, and Tailwind CSS.",
  },
  {
    company: "Weave HQ",
    role: "Frontend Lead / Engineering Manager",
    period: "Jan 2022 – May 2023",
    location: "Lehi, Utah",
    blurb:
      "Led the frontend team and managed a group of engineers rebuilding Weave's scheduling platform. Guided technical direction with product and mentored new engineers while delivering scalable, enterprise-class features to 27k+ users with TypeScript, React, Go, Postgres, Kubernetes, and gRPC.",
  },
  {
    company: "Weave HQ",
    role: "Senior Front End Software Engineer",
    period: "Dec 2020 – Feb 2022",
    location: "Lehi, Utah",
    blurb:
      "Helped multiple teams build world-class features for 27k+ customers — payments, scheduling, analytics, and phone experiences — using TypeScript, React, NX, and Vite.",
  },
  {
    company: "Mountainland Technical College",
    role: "Instructor",
    period: "Mar 2021 – Dec 2021",
    location: "Lehi, Utah",
    blurb:
      "Taught React frontend development to a class of 20–25 students: React, Node.js, TypeScript, API development, state management, and the soft skills that prepare people for the workforce.",
  },
  {
    company: "Omadi, Inc.",
    role: "Engineering Manager",
    period: "Dec 2019 – Dec 2020",
    location: "Lehi, Utah",
    blurb:
      "Led a talented full-stack team to solve challenging problems and adopt better engineering practices, owning administrative, HR, and project-management duties alongside a dedicated product manager.",
  },
  {
    company: "Omadi, Inc.",
    role: "Senior Web Application Developer",
    period: "Jun 2017 – Dec 2019",
    location: "Lehi, Utah",
    blurb:
      "Led frontend architecture on a greenfield project that displaced Oracle Field Services at a prominent global company — taking ideas from mock-ups to working solutions in days.",
  },
  {
    company: "Numetric",
    role: "Sr. Web Application / Data Visualization Engineer",
    period: "Jun 2016 – Jun 2017",
    location: "American Fork, Utah",
    blurb:
      "Built a custom dashboard creation tool and high-performance data visualizations with D3 and React, plus a complete ESRI-based geospatial mapping solution.",
  },
  {
    company: "One Click Retail",
    role: "Front End & Data Visualization Architect",
    period: "Dec 2014 – Jun 2016",
    location: "Sandy, Utah",
    blurb:
      "Lead frontend architect for a B2B web application — built a single-page app on AngularJS and D3, migrating a legacy PHP/jQuery site to a modular, testable architecture.",
  },
  {
    company: "Ancestry.com",
    role: "Framework Web Application Developer / Data Viz Architect",
    period: "Dec 2013 – Dec 2014",
    location: "Provo, Utah",
    blurb:
      "Architected a robust internal-tools web application for the cross-cutting framework team and engineered the move from server-rendered pages to a single-page application.",
  },
  {
    company: "Venafi",
    role: "Enterprise Web Application Developer",
    period: "Apr 2012 – Jul 2013",
    location: "Sandy, Utah",
    blurb:
      "Lead developer and architect for a custom data-visualization dashboard using dynamic SVG. Drove the shift to agile, iterative UX and stood up the company's first UI/UX team.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectLink = {
  label: string;
  href: string;
  comingSoon?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo: string;
  repoPrivate?: boolean; // true → repo is private, don't render a public link
  detailHref?: string; // internal route to a dedicated deep-dive page
  links: ProjectLink[];
  accent: string; // tailwind text/border accent class hint
};

export const projects: Project[] = [
  {
    slug: "theater-stack",
    name: "Theater Stack",
    tagline: "Production management for community theater",
    description:
      "A platform that helps community theaters run their productions — auditions, casting, scheduling, and the dozens of moving pieces a show requires — in one place.",
    highlights: [
      "Next.js App Router monorepo with a clean package boundary for db, domain, auth, and UI",
      "Role-based access control (RBAC) baked into the domain layer",
      "Prisma v7 + PostgreSQL data layer with NextAuth authentication",
      "End-to-end tested with Playwright",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma v7", "NextAuth", "Playwright"],
    repo: "https://github.com/jbaddley/theater-stack",
    links: [{ label: "theaterstack.com", href: "https://theaterstack.com", comingSoon: true }],
    accent: "text-rose-400",
  },
  {
    slug: "just-write",
    name: "Just Write",
    tagline: "AI-powered desktop editor for authors",
    description:
      "A book-writing app that pairs a distraction-free editor with AI that actually understands your story — tracking characters, locations, and timelines, catching inconsistencies and plot holes as you write. I wrote my first book entirely on it.",
    highlights: [
      "Dual-mode WYSIWYG / Markdown editor built on TipTap and CodeMirror",
      "Story-element tracking with consistency checking and plot-hole detection",
      "Pluggable LLMs — OpenAI, Anthropic (Claude), and local Ollama models",
      "Export to DOCX, PDF, and HTML",
    ],
    stack: ["Electron", "React", "TypeScript", "TipTap", "OpenAI / Claude / Ollama", "Prisma", "Zustand"],
    repo: "https://github.com/jbaddley/storybook",
    links: [{ label: "heyjustwrite.com", href: "https://heyjustwrite.com" }],
    accent: "text-amber-400",
  },
  {
    slug: "utilio",
    name: "Utilio",
    tagline: "Browser-based utilities & AI tools",
    description:
      "A growing suite of fast, private, browser-based utilities — image, video, audio, and text tools, AI helpers, and even swim-meet management — served from one codebase across multiple subdomains via host-based routing.",
    highlights: [
      "Client-side media processing with FFmpeg WASM — files never leave the browser",
      "AI tools powered by the Vercel AI SDK",
      "One codebase serves the apex site and subdomains (media, swim, …)",
      "Stripe billing, NextAuth, and AWS S3/SES integration",
    ],
    stack: ["Next.js 16", "React 19", "shadcn/ui", "react-icons", "Prisma", "Postgres", "AWS", "Stripe"],
    repo: "https://github.com/jbaddley/master-utils",
    links: [{ label: "utilio.solutions", href: "https://utilio.solutions" }],
    accent: "text-emerald-400",
  },
  {
    slug: "db-ai",
    name: "DB AI",
    tagline: "An AI-assisted SQL explorer for PostgreSQL",
    description:
      "A desktop database client that pairs a modern SQL workbench with an AI assistant. It grounds a large language model in your live schema to turn plain-English questions into runnable SQL, making it possible to explore a Postgres database by describing what you want rather than remembering exact syntax. The goal was to distill the most valuable capabilities of tools like DBeaver, TablePlus, DataGrip, and Chat2DB into a focused, AI-first workflow.",
    highlights: [
      "Schema-grounded natural-language-to-SQL generation against a live connection",
      "Encrypted local storage of connection credentials, with a read-only safe mode for sensitive environments",
      "Schema browsing, multi-statement execution, and Zod-validated result handling",
      "Built and scoped from a written product spec (PRD) and MVP validation checklist",
    ],
    stack: ["Electron", "Node.js", "PostgreSQL", "Prisma", "Zod", "LLM", "Tailwind"],
    repo: "https://github.com/jbaddley/db-ai",
    repoPrivate: true,
    detailHref: "/db-ai",
    links: [],
    accent: "text-fuchsia-400",
  },
];

/* ------------------------------------------------------------------ */
/* Experiments                                                         */
/* ------------------------------------------------------------------ */

export const experiments: Project[] = [
  {
    slug: "turn-by-turn-agent",
    name: "Turn-by-Turn Agent",
    tagline: "A tool-using AI agent framework, built from first principles",
    description:
      "A production-quality TypeScript monorepo that implements a complete turn-by-turn (ReAct) agent SDK from scratch. The aim is not to replace off-the-shelf frameworks but to deeply understand and document how a capable agent is built — every non-obvious design choice is captured in an architecture decision record. It ships with a working customer-support ticket-triage agent that wires all of the packages together.",
    highlights: [
      "Core ReAct turn loop with guardrails, checkpointing, and per-run cost tracking",
      "Pluggable model providers (Anthropic, OpenAI) with automatic failover and error classification",
      "A tool registry with a middleware pipeline and human approval gates",
      "First-class Model Context Protocol (MCP) client with schema conversion",
      "Context-compression memory and a full eval harness — recorder, replayer, and exact/contains/LLM judges",
    ],
    stack: ["TypeScript", "pnpm monorepo", "Anthropic", "OpenAI", "MCP", "Biome", "Vitest"],
    repo: "https://github.com/jbaddley/turn-by-turn-agent",
    links: [],
    accent: "text-cyan-400",
  },
];

/* ------------------------------------------------------------------ */
/* SchoolAI                                                            */
/* ------------------------------------------------------------------ */

export const schoolAI = {
  mission: "To make school awesome.",
  intro:
    "I'm a Senior Software Engineer at SchoolAI, where we strive to make school awesome for teachers, students, leaders and families.",
  paragraphs: [
    "SchoolAI brings safe, purpose-built AI into the classroom. Teachers get an assistant that saves hours of prep and admin time; students get a patient, always-available guide that meets them where they are; and administrators get the visibility and guardrails that make AI in school responsible.",
    "My work spans the full stack — React and TypeScript on the front end, Node.js services behind it, and deep integration with large language models. A decade of working with LLMs (since the very first OpenAI APIs) means I get to apply hard-won instincts about what makes AI genuinely useful and safe, not just flashy.",
    "A great example is Code Quest, a SchoolAI PowerUp I built: a Blockly maze game that teaches kids the fundamentals of coding, with an AI co-teacher guiding them through the Model Context Protocol. It's exactly the kind of work I love — modern engineering in service of real learning.",
  ],
  focus: [
    {
      title: "AI in service of teachers",
      body: "Tools that hand time back to educators instead of asking more of them.",
    },
    {
      title: "Safe, responsible AI for kids",
      body: "Thoughtful guardrails so AI in the classroom is something parents and schools can trust.",
    },
    {
      title: "Full-stack delivery",
      body: "React, TypeScript, Node.js, and LLM integration — from interface to infrastructure.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Personal / About                                                    */
/* ------------------------------------------------------------------ */

export const personal = {
  intro:
    "Outside of code, my life is full — four kids, a few creative obsessions, and a deep gratitude for the path that got me here.",
  facts: [
    {
      title: "Happy father of four",
      body: "My favorite title. Four kids keep life loud, hilarious, and full — and they're increasingly my creative collaborators.",
    },
    {
      title: "U.S. Air Force veteran",
      body: "Seven years of active duty (2001–2008). The Air Force gave me discipline, a love of solving problems under pressure, and a perspective on teamwork I carry into every engineering team I've led.",
    },
    {
      title: "Author: “Raising Boston”",
      body: "I'm about to finish my first book — a middle-grade mystery called Raising Boston — written entirely on my own platform, heyjustwrite.com. Building the tool and being its first real user has made both better.",
    },
    {
      title: "A musical: “Outcasts Only”",
      body: "My second book is becoming a musical called Outcasts Only, and I'm writing it with my kids. We've written six songs so far — all in early demo stages, all a blast.",
    },
  ],
};
