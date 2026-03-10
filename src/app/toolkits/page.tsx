import Link from "next/link";
import Footer from "@/components/Footer";
import { PageHero, Section, Container, Badge, Button } from "@/components/ui";

export const metadata = {
  title: "AI Prompt Toolkits for Professionals — Workshift",
  description: "Done-for-you AI prompt toolkits for real estate agents, product managers, scrum masters, marketers, and UX researchers.",
};

const toolkits = [
  {
    slug: "real-estate",
    name: "Real Estate Agent",
    tagline: "Write listings, win clients, grow your business.",
    prompts: "95+",
    price: 47,
    stripeLink: "/api/checkout?product=real-estate-toolkit",
    color: "from-amber-500 to-orange-500",
    badge: "🏡",
    tags: ["MLS descriptions", "Client emails", "Social content", "SOPs"],
    status: "live",
  },
  {
    slug: "product-manager",
    name: "Product Manager",
    tagline: "Ship better products with less writing friction.",
    prompts: "100+",
    price: 67,
    stripeLink: "/api/checkout?product=pm-toolkit",
    color: "from-indigo-500 to-blue-500",
    badge: "🗺️",
    tags: ["PRDs", "Roadmaps", "Stakeholder updates", "User stories"],
    status: "live",
  },
  {
    slug: "scrum-master",
    name: "Scrum Master",
    tagline: "Run better ceremonies. Coach stronger teams.",
    prompts: "100+",
    price: 57,
    stripeLink: "/api/checkout?product=scrum-master-toolkit",
    color: "from-violet-500 to-purple-500",
    badge: "🔄",
    tags: ["Sprint planning", "Retros", "Team coaching", "Stakeholder comms"],
    status: "live",
  },
  {
    slug: "marketing",
    name: "Marketer",
    tagline: "Launch campaigns, write copy, grow faster.",
    prompts: "100+",
    price: 67,
    stripeLink: "/api/checkout?product=marketing-toolkit",
    color: "from-pink-500 to-rose-500",
    badge: "📣",
    tags: ["Campaign copy", "Social posts", "Email sequences", "Ad copy"],
    status: "live",
  },
  {
    slug: "ux-research",
    name: "UX Researcher",
    tagline: "Research faster. Insights that actually land.",
    prompts: "100+",
    price: 57,
    stripeLink: "/api/checkout?product=user-research-toolkit",
    color: "from-cyan-500 to-teal-500",
    badge: "🔍",
    tags: ["Interview guides", "Synthesis", "Usability tests", "Reports"],
    status: "live",
  },
  {
    slug: "sales-rep",
    name: "Sales Rep",
    tagline: "Stop staring at a blank screen. Start closing deals.",
    prompts: "90+",
    price: 57,
    stripeLink: "/api/checkout?product=sales-rep-toolkit",
    color: "from-emerald-500 to-green-500",
    badge: "💼",
    tags: ["Cold outreach", "Discovery calls", "Objection handling", "Proposals"],
    status: "live",
  },
  {
    slug: "hr-recruiter",
    name: "HR & Recruiter",
    tagline: "Hire better. Communicate clearer. Build stronger teams.",
    prompts: "93+",
    price: 57,
    stripeLink: "/api/checkout?product=hr-recruiter-toolkit",
    color: "from-rose-500 to-pink-500",
    badge: "🧑‍💼",
    tags: ["Job descriptions", "Sourcing", "Interviews", "HR comms"],
    status: "live",
  },
  // ── New knowledge workers ──
  {
    slug: "financial-advisor",
    name: "Financial Advisor",
    tagline: "Client reports, proposals, and communications — done in minutes.",
    prompts: "90+",
    price: 67,
    stripeLink: "/api/checkout?product=financial-advisor-toolkit",
    color: "from-green-500 to-emerald-600",
    badge: "📈",
    tags: ["Client reports", "Prospect outreach", "Quarterly reviews"],
    status: "live",
  },
  {
    slug: "teacher",
    name: "Teacher & Educator",
    tagline: "Lesson plans, parent comms, and reports — all done faster.",
    prompts: "100+",
    price: 47,
    stripeLink: "/api/checkout?product=teacher-toolkit",
    color: "from-sky-500 to-blue-600",
    badge: "🎓",
    tags: ["Lesson plans", "Parent comms", "Assessments"],
    status: "live",
  },
  {
    slug: "customer-success",
    name: "Customer Success Manager",
    tagline: "Retain more customers. Expand accounts. Build loyalty that lasts.",
    prompts: "95+",
    price: 57,
    stripeLink: "/api/checkout?product=customer-success-toolkit",
    color: "from-teal-500 to-cyan-600",
    badge: "🌟",
    tags: ["Onboarding", "QBRs", "Risk escalations"],
    status: "live",
  },
  {
    slug: "business-owner",
    name: "Business Owner",
    tagline: "Run your business. Stop drowning in writing.",
    prompts: "100+",
    price: 67,
    stripeLink: "/api/checkout?product=business-owner-toolkit",
    color: "from-slate-600 to-gray-700",
    badge: "🏢",
    tags: ["Client proposals", "Team comms", "Investor updates"],
    status: "live",
  },
  // ── Trade & service workers ──
  {
    slug: "mechanic",
    name: "Auto Mechanic",
    tagline: "Write better estimates, win more jobs, keep customers coming back.",
    prompts: "85+",
    price: 47,
    stripeLink: "/api/checkout?product=mechanic-toolkit",
    color: "from-zinc-600 to-stone-700",
    badge: "🔧",
    tags: ["Service estimates", "Customer follow-ups", "Reviews"],
    status: "live",
  },
  {
    slug: "contractor",
    name: "Contractor & Handyman",
    tagline: "Win more bids. Write better proposals. Get paid faster.",
    prompts: "85+",
    price: 47,
    stripeLink: "/api/checkout?product=contractor-toolkit",
    color: "from-orange-500 to-amber-600",
    badge: "🏗️",
    tags: ["Project proposals", "Scope of work", "Client updates"],
    status: "live",
  },
  {
    slug: "personal-trainer",
    name: "Personal Trainer",
    tagline: "Grow your client base. Deliver better programs. Keep clients for life.",
    prompts: "90+",
    price: 47,
    stripeLink: "/api/checkout?product=personal-trainer-toolkit",
    color: "from-red-500 to-rose-600",
    badge: "💪",
    tags: ["Training programs", "Client check-ins", "Social content"],
    status: "live",
  },
  {
    slug: "restaurant-owner",
    name: "Restaurant Owner",
    tagline: "Menus, marketing, and management — without the agency price tag.",
    prompts: "85+",
    price: 47,
    stripeLink: "/api/checkout?product=restaurant-owner-toolkit",
    color: "from-yellow-500 to-orange-500",
    badge: "🍽️",
    tags: ["Menu copy", "Social media", "Review responses"],
    status: "live",
  },
];

export default function Toolkits() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="AI Prompt Toolkits"
        title="Your role. Your prompts."
        subtitle="Done-for-you AI prompt toolkits built specifically for how you work. Not generic — built for your profession."
        centered
      />

      <Section bg="gray" border>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {toolkits.map((kit) => (
              <Link
                key={kit.slug}
                href={`/toolkits/${kit.slug}`}
                className="group bg-white rounded-xl border border-[#e6ebf1] hover:border-[#635bff]/30 hover:shadow-md transition-all overflow-hidden"
              >
                <div className={`h-0.5 bg-gradient-to-r ${kit.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="font-semibold text-[#0a2540] text-base group-hover:text-[#635bff] transition-colors">
                        {kit.name}
                      </h2>
                      <p className="text-[#425466] text-sm mt-1 leading-snug">{kit.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {kit.tags.map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e6ebf1]">
                    <div>
                      <span className="text-xl font-extrabold text-[#0a2540]">${kit.price}</span>
                      <span className="text-[#8898aa] text-xs ml-1">one-time</span>
                    </div>
                    <span className="text-sm text-[#635bff] font-medium group-hover:underline">
                      Get access →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bundle teaser */}
          <div className="mt-8 rounded-xl bg-[#0a2540] p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Complete Bundle</h2>
            <p className="text-[#8898aa] mb-4 max-w-lg mx-auto text-sm">
              All 15 toolkits at a significant discount. Every role, every workflow covered.
            </p>
            <Badge variant="purple">Coming soon</Badge>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
