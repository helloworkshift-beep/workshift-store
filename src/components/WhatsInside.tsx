const sections = [
  {
    number: "25",
    label: "Listing Prompts",
    color: "from-indigo-500 to-violet-500",
    items: [
      "Standard MLS descriptions",
      "Luxury & high-end property copy",
      "Fixer-upper / investor descriptions",
      "Neighborhood & community copy",
      "Virtual tour scripts",
      "Open house announcements",
      "Price reduction copy",
      "Coming soon teasers",
    ],
  },
  {
    number: "20",
    label: "Client Communication",
    color: "from-violet-500 to-purple-500",
    items: [
      "First contact — buyer & seller",
      "Cold outreach to sphere",
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
    color: "from-purple-500 to-pink-500",
    items: [
      "Instagram captions (4 types)",
      "Facebook & LinkedIn posts",
      "Agent bio — short & long form",
      "Monthly email newsletter",
      "YouTube video scripts",
      "Short-form Reel scripts",
      "Educational authority posts",
      "Myth vs. reality carousels",
    ],
  },
  {
    number: "15",
    label: "Business Operations",
    color: "from-cyan-500 to-indigo-500",
    items: [
      "CMA presentation summaries",
      "Multiple offer comparisons",
      "FSBO & expired outreach",
      "Cold call scripts with objections",
      "Voicemail scripts",
      "Zillow & Realtor.com bios",
      "Review request scripts",
      "Recruiting messages",
    ],
  },
];

const workflows = [
  { title: "New Listing Launch", time: "30 min", desc: "MLS description → headlines → Instagram → Facebook → database email" },
  { title: "21-Day Lead Sequence", time: "4 emails", desc: "First contact → educational value → social proof → permission close" },
  { title: "Monthly Content Batch", time: "90 min", desc: "4 Instagram posts + Facebook + LinkedIn + newsletter in one session" },
  { title: "Open House Follow-Up", time: "Same day", desc: "Hot/warm/cold lead templates + social post within 2 hours" },
  { title: "Seller Presentation Prep", time: "24h before", desc: "Pre-listing email → CMA narrative → objection prep → marketing plan" },
];

export default function WhatsInside() {
  return (
    <section className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm font-medium mb-6">
            What&apos;s Inside
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            95+ prompts across 7 categories
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every task you&apos;ll ever need to write, covered.
          </p>
        </div>

        {/* Prompt categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {sections.map((section) => (
            <div key={section.label} className="card-hover glow-border rounded-2xl bg-zinc-900/50 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className={`text-4xl font-black bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                  {section.number}
                </div>
                <div className="text-white font-semibold text-lg">{section.label}</div>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="glow-border rounded-2xl bg-zinc-900/50 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">5</div>
            <div>
              <div className="text-white font-semibold text-lg">Complete Workflow SOPs</div>
              <div className="text-zinc-500 text-sm">Step-by-step systems, not just prompts</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((wf) => (
              <div key={wf.title} className="rounded-xl bg-zinc-800/50 p-4 border border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{wf.title}</span>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{wf.time}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
