# Jason Baddley — Profile Site

A personal profile / portfolio site for [Jason Baddley](https://github.com/jbaddley),
built as a fully static site and deployed to GitHub Pages.

**Stack:** Next.js 16 (App Router, static export) · React 19 · Tailwind CSS v4 ·
shadcn/ui · react-icons · TypeScript

## Pages

| Route       | Content                                                            |
| ----------- | ----------------------------------------------------------------- |
| `/`         | Hero, summary, tech stack, career timeline, featured projects     |
| `/projects` | Theater Stack, Just Write, Utilio, and Code Quest                 |
| `/schoolai` | What Jason does at SchoolAI                                        |
| `/about`    | Father of four, USAF veteran, and his books / musical             |

All content lives in a single source of truth: [`src/data/profile.ts`](src/data/profile.ts).

## Local development

```bash
pnpm install
pnpm dev        # http://localhost:4400
```

The dev server runs on **port 4400** (3000 is used elsewhere).

```bash
pnpm build      # static export to ./out
pnpm lint
```

## Deployment (GitHub Pages)

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages.

The site is served as a **project page** at
**https://jbaddley.github.io/jason-baddley/**, so the build sets a `basePath` of
`/jason-baddley` (derived automatically from the repo name via
`NEXT_PUBLIC_BASE_PATH`). Locally no basePath is applied, so the site runs at `/`.

### One-time setup

In the repo on GitHub: **Settings → Pages → Build and deployment → Source → "GitHub
Actions"**. After that, every push to `main` deploys automatically.

### Custom domain (optional)

To serve from a custom domain instead of the project-page path, add a `public/CNAME`
file with the domain and clear `NEXT_PUBLIC_BASE_PATH` in the workflow (basePath becomes
empty at the apex).
