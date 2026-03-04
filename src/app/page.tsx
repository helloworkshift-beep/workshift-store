import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatsInside from "@/components/WhatsInside";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Hero />
      <Features />
      <WhatsInside />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
