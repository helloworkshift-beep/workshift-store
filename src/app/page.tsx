import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeStats from "@/components/HomeStats";
import HomeProductGrid from "@/components/HomeProductGrid";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeValueProps from "@/components/HomeValueProps";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Workshift — AI Skills for Knowledge Workers",
  description:
    "Done-for-you AI prompt toolkits for real estate agents, marketers, product managers, contractors, and more. Professional results in under 8 minutes.",
  openGraph: {
    title: "Workshift — AI Skills for Knowledge Workers",
    description:
      "Done-for-you AI prompt toolkits for every profession. Copy a prompt, fill in the brackets, get professional results in under 8 minutes.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HomeHero />
      <HomeStats />
      <HomeProductGrid />
      <HomeHowItWorks />
      <HomeValueProps />
      <HomeCTA />
      <Footer />
    </main>
  );
}
