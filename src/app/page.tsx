import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Workshift — AI Skills for Knowledge Workers",
  description: "Prompt toolkits, courses, and guides to help professionals use AI like Claude at work. Built for lawyers, marketers, PMs, and more.",
  openGraph: {
    title: "Workshift — AI Skills for Knowledge Workers",
    description: "Prompt toolkits, courses, and guides to help professionals use AI like Claude at work.",
    type: "website",
  },
};
import Features from "@/components/Features";
import WhatsInside from "@/components/WhatsInside";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] overflow-x-hidden">
      <nav className="bg-[#1c3557] px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#c9a84c] font-bold text-lg">Workshift</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
          <Link href="/toolkits" className="text-white/70 hover:text-white transition-colors">Toolkits</Link>
          <Link href="/course" className="text-white/70 hover:text-white transition-colors">Course</Link>
        </div>
      </nav>
      <Hero />
      <Features />
      <WhatsInside />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
