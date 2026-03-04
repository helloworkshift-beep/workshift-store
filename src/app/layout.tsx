import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate AI Prompt Toolkit — 100+ Done-for-You Prompts",
  description: "Write listings, win clients, and grow your business in minutes. 100+ AI prompts built specifically for real estate agents.",
  openGraph: {
    title: "Real Estate AI Prompt Toolkit",
    description: "100+ done-for-you AI prompts for real estate agents. MLS descriptions, client emails, social content & more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
