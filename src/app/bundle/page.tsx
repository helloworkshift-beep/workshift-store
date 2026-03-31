import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { PageHero, Section, Container, Button, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Complete Workshift Bundle — All 15 Toolkits for $97",
  description: "Get all 15 Workshift AI prompt toolkits in one purchase. 850+ prompts for every profession. Save over 88% vs buying individually. One-time, instant download.",
  alternates: { canonical: "https://workshift.store/bundle" },
};

const toolkits = [
  { name: "Real Estate Agent", prompts: "95+", emoji: "🏡" },
  { name: "Product Manager", prompts: "100+", emoji: "🗺️" },
  { name: "Scrum Master", prompts: "100+", emoji: "🔄" },
  { name: "Marketer", prompts: "100+", emoji: "📣" },
  { name: "UX Researcher", prompts: "100+", emoji: "🔍" },
  { name: "Sales Rep", prompts: "90+", emoji: "💼" },
  { name: "HR & Recruiter", prompts: "90+", emoji: "🧑‍💼" },
  { name: "Financial Advisor", prompts: "90+", emoji: "💰" },
  { name: "Teacher & Educator", prompts: "100+", emoji: "📚" },
  { name: "Customer Success Manager", prompts: "95+", emoji: "🤝" },
  { name: "Business Owner", prompts: "100+", emoji: "🏢" },
  { name: "Auto Mechanic", prompts: "85+", emoji: "🔧" },
  { name: "Contractor & Handyman", prompts: "85+", emoji: "🏗️" },
  { name: "Personal Trainer", prompts: "90+", emoji: "💪" },
  { name: "Restaurant Owner", prompts: "85+", emoji: "🍽️" },
];

export default function BundlePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Best Value — Save 88%"
        title="All 15 toolkits. One purchase."
        subtitle="850+ done-for-you AI prompts covering every profession in the Workshift library. One price, lifetime access, instant download."
        centered
        size="lg"
      />

      {/* What's included */}
      <Section bg="gray" border>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2540] mb-3">Everything in the bundle</h2>
            <p className="text-[#425466] text-lg">15 toolkits. 850+ prompts. Every profession covered.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {toolkits.map((kit) => (
              <div key={kit.name} className="flex items-center gap-3 bg-white border border-[#e6ebf1] rounded-lg px-5 py-4">
                <span className="text-xl flex-shrink-0">{kit.emoji}</span>
                <div>
                  <div className="font-medium text-[#0a2540] text-sm">{kit.name}</div>
                  <div className="text-xs text-[#8898aa]">{kit.prompts} prompts</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing card */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white border-2 border-[#635bff] rounded-2xl p-8 text-center shadow-lg">
              <Badge variant="purple" className="mb-4">Bundle — Best Value</Badge>
              <div className="mb-1">
                <span className="text-xl text-[#8898aa] line-through mr-3">$835</span>
                <span className="text-5xl font-bold text-[#0a2540]">$97</span>
                <span className="text-[#8898aa] ml-2">one-time</span>
              </div>
              <p className="text-[#635bff] font-semibold text-sm mb-8">Save $738 — over 88% off individual prices</p>

              <div className="space-y-3 text-left mb-8">
                {[
                  "All 15 toolkits — instant download",
                  "850+ AI prompts across every profession",
                  "Works with ChatGPT, Claude, and Gemini",
                  "Lifetime access — no subscription",
                  "Free updates when new toolkits are added",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#425466]">
                    <svg className="w-4 h-4 text-[#635bff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/api/checkout?product=bundle"
                className="block w-full py-4 px-6 bg-[#635bff] hover:bg-[#5145e5] text-white font-semibold text-base rounded-xl transition-colors shadow-sm"
              >
                Get the complete bundle — $97
              </Link>
              <p className="mt-3 text-xs text-[#8898aa]">Secure checkout via Stripe · Instant download · No subscription</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social proof / value prop */}
      <Section>
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-[#0a2540] mb-4">Why the bundle?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
            {[
              {
                title: "One download, every role",
                desc: "Whether you're onboarding a new team member, switching roles, or just want coverage for everything — it's all here.",
              },
              {
                title: "Teams love it",
                desc: "Share prompts across your org. Real estate → marketing → ops. Everyone works faster when everyone has the right tools.",
              },
              {
                title: "Future-proof",
                desc: "New toolkits get added to Workshift over time. Bundle buyers get them free. Individual buyers pay per toolkit.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-[#0a2540] mb-2">{item.title}</h3>
                <p className="text-sm text-[#425466] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Individual toolkits CTA */}
      <Section bg="gray" border>
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-[#0a2540] mb-3">Need just one toolkit?</h2>
          <p className="text-[#425466] mb-8">Browse all 15 individual toolkits. Each one is $47–$67 and available for instant purchase today.</p>
          <Button href="/toolkits" variant="secondary" size="lg">Browse individual toolkits</Button>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
