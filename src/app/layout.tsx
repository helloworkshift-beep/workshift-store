import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Workshift — AI Skills for Knowledge Workers",
  description: "Learn how to use AI like Claude to do your best professional work. Prompt toolkits, courses, and guides for knowledge workers.",
  openGraph: {
    title: "Workshift — AI Skills for Knowledge Workers",
    description: "Learn how to use AI like Claude to do your best professional work. Prompt toolkits, courses, and guides for knowledge workers.",
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
        <Analytics />
      </body>
    </html>
  );
}
