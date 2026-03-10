import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeProductGrid from "@/components/HomeProductGrid";
import HomeValueProps from "@/components/HomeValueProps";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Workshift — AI Skills for Knowledge Workers",
  description:
    "Done-for-you AI prompt toolkits for real estate agents, marketers, product managers, and more. Copy a prompt, fill in the brackets, get professional results in under 8 minutes.",
  openGraph: {
    title: "Workshift — AI Skills for Knowledge Workers",
    description:
      "Done-for-you AI prompt toolkits for real estate agents, marketers, product managers, and more.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0a1628] overflow-x-hidden">
      <HomeHero />
      <HomeHowItWorks />
      <HomeProductGrid />
      <HomeValueProps />
      <HomeCTA />
      <Footer />
    </main>
  );
}
