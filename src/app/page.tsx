import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatsInside from "@/components/WhatsInside";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] overflow-x-hidden">
      <Hero />
      <Features />
      <WhatsInside />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
