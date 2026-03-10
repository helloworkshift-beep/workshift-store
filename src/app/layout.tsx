import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import SiteNav from "@/components/SiteNav";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://workshift.store"),
  title: {
    default: "Workshift — AI Prompt Toolkits for Professionals",
    template: "%s | Workshift",
  },
  description:
    "Done-for-you AI prompt toolkits for real estate agents, marketers, product managers, contractors, and 11 more professions. Professional results in under 8 minutes.",
  keywords: [
    "AI prompt toolkit", "AI prompts for professionals", "ChatGPT prompts",
    "Claude prompts", "AI for knowledge workers", "done-for-you AI prompts",
    "AI productivity tools", "prompt templates",
  ],
  authors: [{ name: "Workshift", url: "https://workshift.store" }],
  creator: "Workshift",
  publisher: "Workshift",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workshift.store",
    siteName: "Workshift",
    title: "Workshift — AI Prompt Toolkits for Professionals",
    description:
      "Done-for-you AI prompt toolkits for real estate agents, marketers, product managers, contractors, and more. Professional results in under 8 minutes.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@workshift",
    creator: "@workshift",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://workshift.store",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Workshift",
  url: "https://workshift.store",
  description: "Done-for-you AI prompt toolkits for professionals across every industry.",
  sameAs: ["https://twitter.com/workshift"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Workshift",
  url: "https://workshift.store",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://workshift.store/toolkits?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <SiteNav />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
