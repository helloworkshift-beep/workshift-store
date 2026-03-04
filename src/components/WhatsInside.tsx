const sections = [
  {
    number: "25",
    label: "Listing Prompts",
    items: [
      "Standard MLS descriptions (all price points)",
      "Luxury & high-end property copy",
      "Fixer-upper / investor descriptions",
      "Condo & townhome descriptions",
      "Neighborhood & community copy",
      "Virtual tour scripts",
      "Open house announcements",
      "Price reduction & coming soon copy",
    ],
  },
  {
    number: "20",
    label: "Client Communication",
    items: [
      "Buyer & seller first contact",
      "Cold outreach to sphere of influence",
      "Follow-up when leads go silent",
      "Offer presentation & rejection",
      "Multiple offer situations",
      "Closing day messages",
      "Post-close check-ins",
      "Referral & review requests",
    ],
  },
  {
    number: "20",
    label: "Marketing Prompts",
    items: [
      "Instagram captions (4 types)",
      "Facebook & LinkedIn posts",
      "Agent bio — short & long form",
      "Monthly email newsletter",
      "YouTube & Reel video scripts",
      "Educational authority posts",
      "Market update content",
      "Myth vs. reality carousels",
    ],
  },
  {
    number: "15",
    label: "Business Operations",
    items: [
      "CMA presentation summaries",
      "Multiple offer comparisons",
      "FSBO & expired listing outreach",
      "Cold call scripts with objections",
      "Voicemail scripts (3 types)",
      "Zillow & Realtor.com bios",
      "Review request scripts",
      "Agent recruiting messages",
    ],
  },
];

const workflows = [
  { title: "New Listing Launch", time: "30 min", desc: "MLS → headlines → Instagram → Facebook → database email" },
  { title: "21-Day Lead Sequence", time: "4 emails", desc: "First contact → educational value → social proof → close" },
  { title: "Monthly Content Batch", time: "90 min", desc: "4 Instagram + Facebook + LinkedIn + newsletter in one session" },
  { title: "Open House Follow-Up", time: "Same day", desc: "Hot / warm / cold templates sent within 2 hours" },
  { title: "Seller Presentation Prep", time: "24h before", desc: "Pre-listing email → CMA narrative → objection prep → marketing plan" },
];

export default function WhatsInside() {
  return (
    <section className="px-4 py-24 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/8 text-[#8a6a1f] text-sm font-medium mb-5">
            What&apos;s Inside
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c3557] mb-4">
            95+ prompts. Every task covered.
          </h2>
          <p className="text-[#718096] text-lg max-w-xl mx-auto">
            Every piece of copy a real estate agent will ever need to write.
          </p>
        </div>

        {/* Prompt categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {sections.map((section) => (
            <div key={section.label} className="card-shadow rounded-2xl bg-white border border-[#ede8df] p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="text-4xl font-black text-[#1c3557]">{section.number}</div>
                <div className="text-[#1c3557] font-semibold text-lg">{section.label}</div>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[#4a5568] text-sm">
                    <svg className="w-4 h-4 text-[#c9a84c] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Workflows */}
        <div className="rounded-2xl border border-[#1c3557]/15 bg-[#1c3557] p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-black text-[#c9a84c]">5</div>
            <div>
              <div className="text-white font-semibold text-lg">Complete Workflow SOPs</div>
              <div className="text-[#94b4d4] text-sm">Step-by-step systems, not just prompts</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((wf) => (
              <div key={wf.title} className="rounded-xl bg-white/8 border border-white/10 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{wf.title}</span>
                  <span className="text-xs text-[#c9a84c] bg-[#c9a84c]/15 px-2 py-0.5 rounded-full">{wf.time}</span>
                </div>
                <p className="text-[#94b4d4] text-xs leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
