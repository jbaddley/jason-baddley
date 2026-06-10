import type { NextConfig } from "next";

// When deploying to GitHub Pages as a *project* page the site is served from
// https://jbaddley.github.io/<repo>/, so we need a basePath. In CI we derive it
// from NEXT_PUBLIC_BASE_PATH (set by the workflow) or from GITHUB_REPOSITORY.
// Locally (port 4400) no basePath is set, so the site runs at "/".
const repoFromEnv = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (repoFromEnv ? `/${repoFromEnv}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // Expose the resolved basePath to the client for any raw asset references.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
