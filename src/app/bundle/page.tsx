import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { PageHero, Section, Container, Button, Badge, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Complete Workshift Bundle — All 15 Toolkits",
  description: "Get all 15 Workshift AI prompt toolkits in one purchase. 850+ prompts for every profession. Save over 60% vs buying individually.",
  alternates: { canonical: "https://workshift.store/bundle" },
};

const toolkits = [
  { name: "Real Estate Agent", prompts: "95+" },
  { name: "Product Manager", prompts: "100+" },
  { name: "Scrum Master", prompts: "80+" },
  { name: "Marketer", prompts: "90+" },
  { name: "UX Researcher", prompts: "75+" },
  { name: "Sales Rep", prompts: "85+" },
  { name: "HR & Recruiter", prompts: "80+" },
  { name: "Financial Advisor", prompts: "70+" },
  { name: "Teacher", prompts: "85+" },
  { name: "Customer Success Manager", prompts: "75+" },
  { name: "Business Owner", prompts: "90+" },
  { name: "Auto Mechanic", prompts: "57+" },
  { name: "Contractor & Handyman", prompts: "57+" },
  { name: "Personal Trainer", prompts: "90+" },
  { name: "Restaurant Owner", prompts: "65+" },
];

export default function BundlePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Coming Soon"
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
                <svg className="w-5 h-5 text-[#635bff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-medium text-[#0a2540] text-sm">{kit.name}</div>
                  <div className="text-xs text-[#8898aa]">{kit.prompts} prompts</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white border-2 border-[#635bff] rounded-2xl p-8 text-center shadow-lg">
              <Badge variant="purple" className="mb-4">Bundle — Best Value</Badge>
              <div className="mb-2">
                <span className="text-5xl font-bold text-[#0a2540]">$97</span>
                <span className="text-[#8898aa] ml-2">one-time</span>
              </div>
              <p className="text-[#425466] text-sm mb-2">vs. $705 if purchased individually</p>
              <p className="text-[#635bff] font-semibold text-sm mb-8">Save over 86%</p>

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

              {/* Waitlist form */}
              <div className="bg-[#f6f9fc] rounded-xl p-6">
                <p className="font-semibold text-[#0a2540] mb-1">Join the waitlist</p>
                <p className="text-sm text-[#425466] mb-4">Be first to know when the bundle launches. Waitlist members get an early-bird discount.</p>
                <form action="/api/waitlist" method="POST" className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-2.5 rounded-lg border border-[#e6ebf1] text-sm focus:outline-none focus:border-[#635bff] bg-white"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#635bff] text-white text-sm font-semibold rounded-lg hover:bg-[#5851e8] transition-colors whitespace-nowrap"
                  >
                    Notify me
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Individual toolkits CTA */}
      <Section>
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
