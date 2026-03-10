import Link from "next/link";

const knowledgeWorkers = [
  { slug: "real-estate", name: "Real Estate Agent", tagline: "Write listings, win clients, grow your business.", prompts: "95+", price: 47, badge: "🏡", color: "#f59e0b", tags: ["MLS descriptions", "Client emails", "Social content"] },
  { slug: "product-manager", name: "Product Manager", tagline: "Ship better products with less writing friction.", prompts: "100+", price: 67, badge: "🗺️", color: "#6366f1", tags: ["PRDs", "Roadmaps", "User stories"] },
  { slug: "scrum-master", name: "Scrum Master", tagline: "Run better ceremonies. Coach stronger teams.", prompts: "100+", price: 57, badge: "🔄", color: "#8b5cf6", tags: ["Sprint planning", "Retros", "Coaching"] },
  { slug: "marketing", name: "Marketer", tagline: "Launch campaigns, write copy, grow faster.", prompts: "100+", price: 67, badge: "📣", color: "#ec4899", tags: ["Campaign copy", "Social posts", "Email sequences"] },
  { slug: "ux-research", name: "UX Researcher", tagline: "Research faster. Insights that actually land.", prompts: "100+", price: 57, badge: "🔍", color: "#06b6d4", tags: ["Interview guides", "Synthesis", "Reports"] },
  { slug: "sales-rep", name: "Sales Rep", tagline: "Stop staring at a blank screen. Start closing.", prompts: "90+", price: 57, badge: "💼", color: "#10b981", tags: ["Cold outreach", "Objection handling", "Proposals"] },
  { slug: "hr-recruiter", name: "HR & Recruiter", tagline: "Hire faster. Communicate better. Build teams.", prompts: "90+", price: 57, badge: "👥", color: "#f97316", tags: ["Job posts", "Screening", "Onboarding"] },
  { slug: "financial-advisor", name: "Financial Advisor", tagline: "Client reports, proposals, and comms — done in minutes.", prompts: "90+", price: 67, badge: "📈", color: "#059669", tags: ["Client reports", "Quarterly reviews", "Prospect outreach"] },
  { slug: "teacher", name: "Teacher & Educator", tagline: "Lesson plans, parent comms, and reports — faster.", prompts: "100+", price: 47, badge: "🎓", color: "#0ea5e9", tags: ["Lesson plans", "Parent comms", "Assessments"] },
  { slug: "customer-success", name: "Customer Success Manager", tagline: "Retain more customers. Expand accounts. Build loyalty.", prompts: "95+", price: 57, badge: "🌟", color: "#14b8a6", tags: ["Onboarding", "QBRs", "Risk escalations"] },
  { slug: "business-owner", name: "Business Owner", tagline: "Run your business. Stop drowning in writing.", prompts: "100+", price: 67, badge: "🏢", color: "#475569", tags: ["Client proposals", "Team comms", "Investor updates"] },
];

const tradeWorkers = [
  { slug: "mechanic", name: "Auto Mechanic", tagline: "Write better estimates, win more jobs, keep customers coming back.", prompts: "85+", price: 47, badge: "🔧", color: "#78716c", tags: ["Service estimates", "Customer follow-ups", "Reviews"] },
  { slug: "contractor", name: "Contractor & Handyman", tagline: "Win more bids. Write better proposals. Get paid faster.", prompts: "85+", price: 47, badge: "🏗️", color: "#f97316", tags: ["Project proposals", "Scope of work", "Client updates"] },
  { slug: "personal-trainer", name: "Personal Trainer", tagline: "Grow your client base. Keep clients for life.", prompts: "90+", price: 47, badge: "💪", color: "#ef4444", tags: ["Training programs", "Client check-ins", "Social content"] },
  { slug: "restaurant-owner", name: "Restaurant Owner", tagline: "Menus, marketing, and management — without the agency.", prompts: "85+", price: 47, badge: "🍽️", color: "#eab308", tags: ["Menu copy", "Social media", "Review responses"] },
];

function KitCard({ kit }: { kit: typeof knowledgeWorkers[0] }) {
  return (
    <Link
      href={`/toolkits/${kit.slug}`}
      className="group relative bg-white rounded-2xl border border-[#e5e7eb] hover:border-[#c5cdd8] hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <div className="h-0.5 w-full" style={{ background: kit.color }} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${kit.color}18` }}>
            {kit.badge}
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-[#0a1628]">${kit.price}</span>
            <span className="text-[#9ca3af] text-xs ml-1">one-time</span>
          </div>
        </div>
        <h3 className="font-bold text-[#0a1628] text-lg mb-1 group-hover:text-[#1c3557]">{kit.name}</h3>
        <p className="text-[#6b7280] text-sm mb-4 leading-relaxed">{kit.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {kit.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs text-[#6b7280] bg-[#f3f4f6] border border-[#e5e7eb]">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-[#f3f4f6]">
          <span className="text-xs text-[#9ca3af]">{kit.prompts} prompts + SOPs</span>
          <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: kit.color }}>
            Get access
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomeProductGrid() {
  return (
    <section className="bg-[#f9fafb] border-t border-[#e5e7eb] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">Toolkits</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628] tracking-tight mb-4">
            Pick your role. Start today.
          </h2>
          <p className="text-lg text-[#6b7280] max-w-xl mx-auto">
            Every toolkit is purpose-built for one profession — not generic AI prompts,
            but the exact language your job demands.
          </p>
        </div>

        {/* Knowledge workers */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest">Knowledge Workers</span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {knowledgeWorkers.map((kit) => <KitCard key={kit.slug} kit={kit} />)}
            {/* Bundle card */}
            <div className="relative bg-[#0a1628] rounded-2xl border border-[#1c3557] overflow-hidden flex flex-col justify-between p-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 flex items-center justify-center text-2xl mb-4">📦</div>
                <h3 className="font-bold text-white text-lg mb-1">Complete Bundle</h3>
                <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">All toolkits at a significant discount. Every role, every workflow.</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a84c]/15 text-[#c9a84c] text-sm font-medium">🔔 Coming soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trade workers */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest">Trades & Service Businesses</span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tradeWorkers.map((kit) => <KitCard key={kit.slug} kit={kit} />)}
          </div>
          <p className="text-center text-sm text-[#9ca3af] mt-6">More trade toolkits coming soon — electricians, plumbers, HVAC, landscapers &amp; more.</p>
        </div>

      </div>
    </section>
  );
}
