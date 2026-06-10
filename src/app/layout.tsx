import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// basePath is "" locally and "/jason-baddley" on GitHub Pages — icon URLs must
// include it so they resolve under the project-page path.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Software Engineer`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  icons: {
    icon: [
      { url: `${base}/favicon.ico`, sizes: "any" },
      { url: `${base}/icons/jbaddley-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${base}/icons/jbaddley-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${base}/icons/jbaddley-192x192.png`, sizes: "192x192", type: "image/png" },
      { url: `${base}/icons/jbaddley-512x512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: `${base}/icons/jbaddley-180x180.png`, sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${profile.name} — Software Engineer`,
    description: profile.tagline,
    type: "website",
    images: [{ url: `${base}/icons/jbaddley-512x512.png`, width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 pb-14">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
