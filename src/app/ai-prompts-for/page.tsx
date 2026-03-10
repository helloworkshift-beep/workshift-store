import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { PageHero, Section, Container, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "AI Prompts for Every Profession — Workshift",
  description: "Done-for-you AI prompt toolkits for professionals. Real estate agents, product managers, mechanics, teachers, financial advisors, and 10 more professions.",
  alternates: { canonical: "https://workshift.store/ai-prompts-for" },
};

const professions = [
  { name: "Real Estate Agents", slug: "/toolkits/real-estate", prompts: "95+", desc: "MLS listings, client emails, social content, CMA reports" },
  { name: "Product Managers", slug: "/toolkits/product-manager", prompts: "100+", desc: "PRDs, roadmaps, user stories, stakeholder updates" },
  { name: "Scrum Masters", slug: "/toolkits/scrum-master", prompts: "80+", desc: "Sprint planning, retrospectives, team coaching, metrics" },
  { name: "Marketers", slug: "/toolkits/marketing", prompts: "90+", desc: "Email campaigns, ad copy, social media, content strategy" },
  { name: "UX Researchers", slug: "/toolkits/ux-research", prompts: "75+", desc: "Interview guides, research plans, synthesis, reports" },
  { name: "Sales Reps", slug: "/toolkits/sales-rep", prompts: "85+", desc: "Cold outreach, follow-ups, proposals, objection handling" },
  { name: "HR & Recruiters", slug: "/toolkits/hr-recruiter", prompts: "80+", desc: "Job postings, sourcing messages, interview guides, reviews" },
  { name: "Financial Advisors", slug: "/toolkits/financial-advisor", prompts: "70+", desc: "Client reviews, prospect emails, financial plan summaries" },
  { name: "Teachers", slug: "/toolkits/teacher", prompts: "85+", desc: "Lesson plans, parent emails, assessments, feedback" },
  { name: "Customer Success Managers", slug: "/toolkits/customer-success", prompts: "75+", desc: "Onboarding, QBRs, at-risk accounts, expansion" },
  { name: "Business Owners", slug: "/toolkits/business-owner", prompts: "90+", desc: "SOPs, hiring, client communication, marketing copy" },
  { name: "Auto Mechanics", slug: "/toolkits/mechanic", prompts: "57+", desc: "Repair explanations, estimates, review requests, follow-ups" },
  { name: "Contractors & Handymen", slug: "/toolkits/contractor", prompts: "57+", desc: "Proposals, change orders, client updates, job postings" },
  { name: "Personal Trainers", slug: "/toolkits/personal-trainer", prompts: "90+", desc: "Training programs, check-ins, social content, sales scripts" },
  { name: "Restaurant Owners", slug: "/toolkits/restaurant-owner", prompts: "65+", desc: "Menus, review responses, staff posts, promotional content" },
];

export default function AIPromptsForPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="850+ prompts · 15 professions"
        title="AI prompts for every profession."
        subtitle="Stop writing from scratch. Done-for-you AI prompts for the specific tasks professionals do every day — built for ChatGPT, Claude, and Gemini."
        ctaLabel="Browse all toolkits"
        ctaHref="/toolkits"
        centered
      />

      <Section bg="gray" border>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {professions.map((p) => (
              <Link
                key={p.slug}
                href={p.slug}
                className="group bg-white border border-[#e6ebf1] rounded-xl p-6 hover:border-[#635bff]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="gray">{p.prompts} prompts</Badge>
                  <span className="text-[#635bff] opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                </div>
                <h2 className="font-semibold text-[#0a2540] mb-2 group-hover:text-[#635bff] transition-colors">
                  AI Prompts for {p.name}
                </h2>
                <p className="text-sm text-[#425466]">{p.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="sm" className="text-center">
          <h2 className="text-2xl font-bold text-[#0a2540] mb-4">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
            {[
              { step: "1", title: "Buy your toolkit", desc: "One-time purchase. Instant download. No subscription." },
              { step: "2", title: "Open your AI tool", desc: "Works with ChatGPT, Claude, or Gemini — your choice." },
              { step: "3", title: "Fill in the brackets", desc: "Each prompt has [PLACEHOLDERS]. Fill them in and get professional output in seconds." },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-4xl font-bold text-[#e6ebf1] mb-3">{item.step}</div>
                <h3 className="font-semibold text-[#0a2540] mb-2">{item.title}</h3>
                <p className="text-sm text-[#425466]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
