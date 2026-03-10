import Link from "next/link";

const knowledgeWorkers = [
  { slug: "real-estate", name: "Real Estate Agent", tagline: "MLS listings, client emails, and social content — done in minutes.", price: 47, prompts: "95+" },
  { slug: "product-manager", name: "Product Manager", tagline: "PRDs, roadmaps, and stakeholder updates that people actually read.", price: 67, prompts: "100+" },
  { slug: "scrum-master", name: "Scrum Master", tagline: "Retros, sprint planning, and team coaching communications.", price: 57, prompts: "100+" },
  { slug: "marketing", name: "Marketer", tagline: "Campaign copy, email sequences, and ad creative — for every channel.", price: 67, prompts: "100+" },
  { slug: "ux-research", name: "UX Researcher", tagline: "Interview guides, synthesis reports, and usability test scripts.", price: 57, prompts: "100+" },
  { slug: "sales-rep", name: "Sales Rep", tagline: "Cold outreach, discovery calls, objection handling, and proposals.", price: 57, prompts: "90+" },
  { slug: "hr-recruiter", name: "HR & Recruiter", tagline: "Job descriptions, sourcing messages, and candidate communications.", price: 57, prompts: "90+" },
  { slug: "financial-advisor", name: "Financial Advisor", tagline: "Client reports, quarterly reviews, and prospect outreach.", price: 67, prompts: "90+" },
  { slug: "teacher", name: "Teacher & Educator", tagline: "Lesson plans, parent communication, and student reports.", price: 47, prompts: "100+" },
  { slug: "customer-success", name: "Customer Success Manager", tagline: "Onboarding, QBRs, and churn prevention communications.", price: 57, prompts: "95+" },
  { slug: "business-owner", name: "Business Owner", tagline: "Proposals, investor updates, team communications, and brand copy.", price: 67, prompts: "100+" },
];

const tradeWorkers = [
  { slug: "mechanic", name: "Auto Mechanic", tagline: "Service estimates, customer follow-ups, and shop marketing.", price: 47, prompts: "85+" },
  { slug: "contractor", name: "Contractor & Handyman", tagline: "Project proposals, scope of work, and client updates.", price: 47, prompts: "85+" },
  { slug: "personal-trainer", name: "Personal Trainer", tagline: "Training programs, client check-ins, and social content.", price: 47, prompts: "90+" },
  { slug: "restaurant-owner", name: "Restaurant Owner", tagline: "Menu copy, review responses, staff comms, and social media.", price: 47, prompts: "85+" },
];

function KitRow({ kit }: { kit: typeof knowledgeWorkers[0] }) {
  return (
    <Link
      href={`/toolkits/${kit.slug}`}
      className="group flex items-center justify-between py-5 border-b border-[#e6ebf1] hover:bg-[#f6f9fc] -mx-6 px-6 transition-colors"
    >
      <div className="flex-1 min-w-0 pr-8">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="font-semibold text-[#0a2540] text-base group-hover:text-[#635bff] transition-colors">
            {kit.name}
          </span>
          <span className="text-xs text-[#8898aa]">{kit.prompts} prompts</span>
        </div>
        <p className="text-sm text-[#425466] truncate">{kit.tagline}</p>
      </div>
      <div className="flex items-center gap-6 flex-shrink-0">
        <span className="text-sm font-semibold text-[#0a2540]">${kit.price}</span>
        <svg className="w-4 h-4 text-[#8898aa] group-hover:text-[#635bff] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </Link>
  );
}

export default function HomeProductGrid() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] tracking-tight leading-tight mb-3">
              Pick your role.<br />Start in minutes.
            </h2>
            <p className="text-lg text-[#425466] max-w-lg">
              Every toolkit is purpose-built for one profession — not generic AI prompts, but exact workflows for your job.
            </p>
          </div>
          <Link
            href="/toolkits"
            className="hidden md:inline-flex items-center gap-2 text-sm text-[#635bff] font-medium hover:underline flex-shrink-0"
          >
            View all toolkits →
          </Link>
        </div>

        {/* Knowledge workers */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-2">Knowledge Workers</p>
          <div className="border-t border-[#e6ebf1]">
            {knowledgeWorkers.map((kit) => <KitRow key={kit.slug} kit={kit} />)}
          </div>
        </div>

        {/* Trades */}
        <div>
          <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-2">Trades &amp; Service Businesses</p>
          <div className="border-t border-[#e6ebf1]">
            {tradeWorkers.map((kit) => <KitRow key={kit.slug} kit={kit} />)}
          </div>
          <p className="mt-4 text-sm text-[#8898aa]">More toolkits coming — electricians, HVAC, landscapers &amp; more.</p>
        </div>

      </div>
    </section>
  );
}
