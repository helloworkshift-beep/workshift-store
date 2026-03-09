import Link from "next/link";

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
];

export default function Toolkits() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <div className="h-1 bg-gradient-to-r from-[#1c3557] via-[#c9a84c] to-[#1c3557]" />

      {/* Header */}
      <div className="bg-white border-b border-[#ede8df] px-4 py-16 text-center">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[#718096] text-sm hover:text-[#1c3557] transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Workshift
        </Link>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/8 text-[#8a6a1f] text-sm font-medium mb-6">
          AI Prompt Toolkits for Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1c3557] mb-4">
          Your role. Your prompts.
        </h1>
        <p className="text-[#718096] text-xl max-w-2xl mx-auto">
          Done-for-you AI prompt toolkits built specifically for how you work.
          Stop writing from scratch.
        </p>
      </div>

      {/* Toolkits grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkits.map((kit) => (
            <div key={kit.slug} className={`relative rounded-2xl bg-white border border-[#ede8df] overflow-hidden card-shadow ${kit.status === "coming" ? "opacity-75" : ""}`}>
              {kit.status === "coming" && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#f0ece3] text-[#8a6a1f] text-xs font-medium">
                  Coming soon
                </div>
              )}
              {kit.status === "live" && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                  ✓ Available now
                </div>
              )}

              {/* Color bar */}
              <div className={`h-1 bg-gradient-to-r ${kit.color}`} />

              <div className="p-6">
                <div className="text-4xl mb-4">{kit.badge}</div>
                <h2 className="text-[#1c3557] font-bold text-xl mb-1">{kit.name} Toolkit</h2>
                <p className="text-[#718096] text-sm mb-4">{kit.tagline}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {kit.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[#f0ece3] text-[#4a5568] text-xs">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#f0ece3]">
                  <div>
                    <span className="text-2xl font-black text-[#1c3557]">${kit.price}</span>
                    <span className="text-[#a0aec0] text-xs ml-1">one-time</span>
                  </div>
                  {kit.status === "live" ? (
                    <a href={kit.stripeLink}
                      className="px-4 py-2 rounded-xl bg-[#1c3557] hover:bg-[#2a4f7c] text-white text-sm font-semibold transition-colors">
                      Get access →
                    </a>
                  ) : (
                    <span className="px-4 py-2 rounded-xl bg-[#f0ece3] text-[#a0aec0] text-sm font-medium cursor-not-allowed">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle teaser */}
        <div className="mt-12 rounded-2xl bg-[#1c3557] p-8 text-center">
          <div className="text-4xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-white mb-3">The Complete Bundle</h2>
          <p className="text-[#94b4d4] mb-6 max-w-lg mx-auto">
            All 6 toolkits. Every role covered. Get the complete bundle at a significant discount.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#c9a84c] text-sm font-medium">
            🔔 Bundle pricing coming soon
          </div>
        </div>
      </div>

      <footer className="border-t border-[#ede8df] px-4 py-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[#a0aec0] text-sm">
          <span>© 2025 Workshift</span>
          <div className="flex gap-4">
            <Link href="/legal/imprint" className="hover:text-[#1c3557] transition-colors">Imprint</Link>
            <Link href="/legal/privacy" className="hover:text-[#1c3557] transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-[#1c3557] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
