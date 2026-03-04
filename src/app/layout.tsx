import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Real Estate Agent's AI Prompt Toolkit — 100+ Done-for-You Prompts",
  description: "Write MLS descriptions, client emails & social content in minutes. 100+ AI prompts built specifically for real estate agents.",
  openGraph: {
    title: "Real Estate Agent's AI Prompt Toolkit",
    description: "100+ done-for-you AI prompts for real estate agents. Write faster, win more clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
