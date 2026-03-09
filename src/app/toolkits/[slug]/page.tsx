import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ─────────────────────────────────────────────
   Product data
───────────────────────────────────────────── */
const toolkits = {
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate Agent",
    badge: "🏡",
    prompts: "95+",
    price: 47,
    stripeLink: "/api/checkout?product=real-estate-toolkit",
    colorBar: "from-amber-500 to-orange-500",
    tagline: "Write MLS listings that sell. Win clients before you even meet them.",
    subheadline:
      "Stop staring at a blank screen before every listing. This toolkit gives you 95+ battle-tested AI prompts that handle the writing — so you can focus on closing deals.",
    tags: ["MLS descriptions", "Client emails", "Social content", "SOPs"],
    features: [
      {
        icon: "🏠",
        title: "MLS Listing Descriptions",
        desc: "Prompts for every home type — condos, single-family, luxury, fixer-uppers. Always warm, always click-worthy, never clichéd.",
      },
      {
        icon: "✉️",
        title: "Client Email Templates",
        desc: "Follow-ups, offer summaries, showing feedback, contract updates — every touchpoint covered with the right tone.",
      },
      {
        icon: "📱",
        title: "Social Media Content",
        desc: "Just-listed posts, market updates, success stories, and educational content that builds your audience on autopilot.",
      },
      {
        icon: "📋",
        title: "SOPs & Checklists",
        desc: "Systemize your business. Prompts for onboarding buyers, preparing sellers, and running a tighter operation.",
      },
      {
        icon: "📊",
        title: "Market & CMA Reports",
        desc: "Turn raw numbers into compelling narratives that help clients understand — and trust — your expertise.",
      },
      {
        icon: "🤝",
        title: "Objection Handling Scripts",
        desc: "Never be caught off guard. Prompts to prepare responses to common objections before they come up.",
      },
    ],
    samplePrompts: [
      {
        label: "MLS Listing Description",
        prompt:
          'Act as a real estate copywriter. Write a 280-word MLS listing description for a [BEDS]BR/[BATHS]BA [STYLE] home in [NEIGHBORHOOD]. Key features: [LIST]. Lead with the standout feature. Warm, professional tone. Avoid clichés.',
      },
      {
        label: "Buyer Follow-Up Email",
        prompt:
          "Write a follow-up email to a buyer who toured [ADDRESS] yesterday. They liked the kitchen but were worried about the school district. Acknowledge their concern, share [SCHOOL DATA], and keep it warm and pressure-free.",
      },
    ],
    whoItsFor: [
      "Solo agents who want to write faster without sounding generic",
      "Team leads who want consistent, on-brand communications across the team",
      "New agents who need a shortcut to professional-quality writing from day one",
    ],
  },

  "product-manager": {
    slug: "product-manager",
    name: "Product Manager",
    badge: "🗺️",
    prompts: "100+",
    price: 67,
    stripeLink: "/api/checkout?product=pm-toolkit",
    colorBar: "from-indigo-500 to-blue-500",
    tagline: "Ship better products. Spend less time writing documents nobody reads.",
    subheadline:
      "From PRDs to stakeholder updates, your writing workload is about to shrink by half. 100+ prompts built for the real-world demands of product management.",
    tags: ["PRDs", "Roadmaps", "Stakeholder updates", "User stories"],
    features: [
      {
        icon: "📄",
        title: "PRDs & Specs",
        desc: "Turn a brief idea into a full product requirements document — with problem statement, user stories, edge cases, and success metrics.",
      },
      {
        icon: "🗺️",
        title: "Roadmap Narratives",
        desc: "Communicate your roadmap to executives, engineers, and customers with version-appropriate framing — no jargon, no filler.",
      },
      {
        icon: "📣",
        title: "Stakeholder Updates",
        desc: "Sprint reviews, status emails, and exec briefings that people actually read — focused on outcomes, not process.",
      },
      {
        icon: "👤",
        title: "User Stories & Acceptance Criteria",
        desc: "Well-formed stories with clear acceptance criteria. Reduce back-and-forth with engineering from day one.",
      },
      {
        icon: "🔍",
        title: "Discovery & Research",
        desc: "Interview question frameworks, synthesis prompts, and insight summaries that speed up your discovery process.",
      },
      {
        icon: "📊",
        title: "Metrics & OKRs",
        desc: "Define the right metrics for new features, write OKR proposals, and create data storytelling for leadership reviews.",
      },
    ],
    samplePrompts: [
      {
        label: "Product Requirements Document",
        prompt:
          "Act as a senior PM at a B2B SaaS company. Write a PRD for [FEATURE]. Users: [USER TYPE]. Goal: [GOAL]. Include: problem statement, goals, non-goals, user stories (5+), edge cases, success metrics.",
      },
      {
        label: "Sprint Review Summary",
        prompt:
          "Summarize this sprint review for a non-technical stakeholder audience in 3 paragraphs. Focus on outcomes, not process. Highlight wins and 1 lesson learned. [PASTE NOTES]",
      },
    ],
    whoItsFor: [
      "PMs at startups juggling too much writing on top of an already full plate",
      "Senior PMs who want to level up the quality of their documentation and comms",
      "Aspiring PMs building a portfolio and learning to communicate like a pro",
    ],
  },

  "scrum-master": {
    slug: "scrum-master",
    name: "Scrum Master",
    badge: "🔄",
    prompts: "100+",
    price: 57,
    stripeLink: "/api/checkout?product=scrum-master-toolkit",
    colorBar: "from-violet-500 to-purple-500",
    tagline: "Run ceremonies your team actually looks forward to.",
    subheadline:
      "Prep better retros, write sharper stakeholder updates, and coach your team through blockers — with 100+ prompts designed specifically for Scrum Masters and Agile coaches.",
    tags: ["Sprint planning", "Retros", "Team coaching", "Stakeholder comms"],
    features: [
      {
        icon: "📅",
        title: "Sprint Planning",
        desc: "Craft clear sprint goals, generate capacity-aware planning questions, and create pre-reads that get the team aligned before the meeting starts.",
      },
      {
        icon: "🔄",
        title: "Retrospectives",
        desc: "Facilitate Start/Stop/Continue, 4Ls, Mad Sad Glad, and more — with prompts that surface real issues and generate actionable outcomes.",
      },
      {
        icon: "🧠",
        title: "Team Coaching",
        desc: "Navigate difficult team dynamics, support psychological safety, and help individuals grow — with thoughtful coaching language.",
      },
      {
        icon: "📣",
        title: "Stakeholder Communications",
        desc: "Sprint updates, velocity reports, and risk summaries that keep leadership informed without micromanaging the team.",
      },
      {
        icon: "🗂️",
        title: "Backlog & Refinement",
        desc: "Write better tickets, ask better refinement questions, and help the team break down epics into sprint-ready stories.",
      },
      {
        icon: "📈",
        title: "Metrics & Reporting",
        desc: "Turn velocity, burndown, and cycle time data into clear narratives that drive better decisions at every level.",
      },
    ],
    samplePrompts: [
      {
        label: "Sprint Retrospective Facilitator",
        prompt:
          "Facilitate a sprint retrospective using the Start/Stop/Continue format. Our last sprint: [PASTE NOTES]. Identify 3 themes, suggest 1 concrete action per theme, and frame it positively for the team.",
      },
      {
        label: "Stakeholder Update Email",
        prompt:
          "Write a stakeholder update email for sprint [N]. Velocity: [X] points. Key deliverables: [LIST]. Blockers resolved: [LIST]. Next sprint focus: [GOAL]. Keep it under 150 words.",
      },
    ],
    whoItsFor: [
      "Scrum Masters who want to facilitate with more confidence and less prep time",
      "Agile coaches scaling their practice across multiple teams",
      "Engineering managers moving into servant-leadership roles who need ceremony scaffolding",
    ],
  },

  marketing: {
    slug: "marketing",
    name: "Marketer",
    badge: "📣",
    prompts: "100+",
    price: 67,
    stripeLink: "/api/checkout?product=marketing-toolkit",
    colorBar: "from-pink-500 to-rose-500",
    tagline: "More campaigns. Better copy. Zero writer's block.",
    subheadline:
      "Whether you're writing ads, emails, or social posts — this toolkit covers every channel with 100+ prompts that produce work you'd be proud to ship.",
    tags: ["Campaign copy", "Social posts", "Email sequences", "Ad copy"],
    features: [
      {
        icon: "📱",
        title: "Social Media Copy",
        desc: "Platform-native posts for LinkedIn, Instagram, X, and TikTok — with variations for different audiences and objectives.",
      },
      {
        icon: "📧",
        title: "Email Sequences",
        desc: "Welcome series, nurture sequences, re-engagement flows, and launch emails that move people from curious to convinced.",
      },
      {
        icon: "💰",
        title: "Paid Ad Copy",
        desc: "Facebook, Instagram, and Google ad variations — benefit-led, problem-led, and social proof — with headlines and CTAs.",
      },
      {
        icon: "📝",
        title: "Long-Form Content",
        desc: "Blog posts, landing pages, and case study frameworks that rank, convert, and build brand authority.",
      },
      {
        icon: "🎯",
        title: "Campaign Strategy",
        desc: "Brief generators, messaging frameworks, and positioning prompts that give any campaign a clear strategic spine.",
      },
      {
        icon: "📊",
        title: "Reports & Analysis",
        desc: "Turn campaign data into compelling narratives for leadership reviews, client presentations, and post-mortem reports.",
      },
    ],
    samplePrompts: [
      {
        label: "Facebook Ad Variations",
        prompt:
          "Write 3 variations of a Facebook ad for [PRODUCT]. Audience: [PERSONA]. Pain point: [PAIN]. Key benefit: [BENEFIT]. Variation A: benefit-led. Variation B: problem-led. Variation C: social proof. Include headline + body + CTA.",
      },
      {
        label: "5-Email Nurture Sequence",
        prompt:
          "Write a 5-email nurture sequence for new leads who downloaded [LEAD MAGNET]. Goal: move them to a discovery call. Tone: helpful, not pushy. One clear CTA per email.",
      },
    ],
    whoItsFor: [
      "In-house marketers managing multiple channels who need to move faster without sacrificing quality",
      "Freelance copywriters who want to increase output and deliver better first drafts",
      "Founders running their own marketing who need professional-grade copy without an agency budget",
    ],
  },

  "ux-research": {
    slug: "ux-research",
    name: "UX Researcher",
    badge: "🔍",
    prompts: "100+",
    price: 57,
    stripeLink: "/api/checkout?product=user-research-toolkit",
    colorBar: "from-cyan-500 to-teal-500",
    tagline: "Research faster. Surface insights that actually change the product.",
    subheadline:
      "From interview guides to synthesis reports, this toolkit cuts your research overhead in half — so you can spend more time on the insights and less time on the paperwork.",
    tags: ["Interview guides", "Synthesis", "Usability tests", "Reports"],
    features: [
      {
        icon: "🎙️",
        title: "Interview Guides",
        desc: "Structured discussion guides for generative research, concept testing, and diary studies — ready to run in minutes.",
      },
      {
        icon: "🧩",
        title: "Synthesis & Theming",
        desc: "Turn messy notes and transcripts into clear themes, patterns, and insights — with prompts that do the heavy analytical lifting.",
      },
      {
        icon: "🖥️",
        title: "Usability Testing",
        desc: "Task scripts, moderation guides, and post-session analysis prompts for both moderated and unmoderated studies.",
      },
      {
        icon: "📋",
        title: "Research Reports",
        desc: "Executive summaries, full research reports, and stakeholder presentations that communicate findings with clarity and impact.",
      },
      {
        icon: "👥",
        title: "Participant Recruitment",
        desc: "Screener survey drafts, recruitment emails, and consent form templates to fill your sessions with the right people.",
      },
      {
        icon: "📐",
        title: "Research Planning",
        desc: "Study plans, research briefs, and prioritization frameworks to help you scope projects and align with stakeholders upfront.",
      },
    ],
    samplePrompts: [
      {
        label: "Interview Note Synthesis",
        prompt:
          "You are a UX research assistant. I just completed an interview with [PERSONA TYPE]. Here are my notes: [PASTE]. Extract: top 3 pain points, 2 jobs-to-be-done, 1 surprising insight, and 3 direct quotes worth highlighting.",
      },
      {
        label: "Multi-Interview Theme Analysis",
        prompt:
          "Here are synthesis notes from [N] user interviews: [PASTE]. Identify the top 5 themes by frequency, rate confidence (high/medium/low), and suggest 2 product implications for each theme.",
      },
    ],
    whoItsFor: [
      "UX researchers at growth-stage companies who are doing more studies with less support",
      "Designers running their own research who need structure and confidence in their methods",
      "Research ops leads who want to standardize templates and speed up the team's output",
    ],
  },

  "sales-rep": {
    slug: "sales-rep",
    name: "Sales Rep",
    badge: "💼",
    prompts: "90+",
    price: 57,
    stripeLink: "/api/checkout?product=sales-rep-toolkit",
    colorBar: "from-emerald-500 to-green-500",
    tagline: "Stop staring at a blank screen. Start closing deals.",
    subheadline:
      "90 battle-tested AI prompts for B2B sales reps, SDRs, and AEs. Every prompt covers a real moment in your sales workflow — from the first cold email to the renewal conversation.",
    tags: ["Cold outreach", "Discovery calls", "Objection handling", "Proposals"],
    features: [
      {
        icon: "📧",
        title: "Prospecting & Outreach",
        desc: "Cold emails, LinkedIn connection requests, trigger-based openers, and multi-touch sequences that sound human — not templated.",
      },
      {
        icon: "🔍",
        title: "Discovery Calls",
        desc: "Qualification frameworks (BANT, MEDDIC), pain discovery questions, and call prep prompts that help you understand the real problem before pitching.",
      },
      {
        icon: "🎯",
        title: "Demos & Presentations",
        desc: "Demo scripts, value storytelling frameworks, and pre-call briefs that help you connect features to business outcomes — not just functionality.",
      },
      {
        icon: "🛡️",
        title: "Objection Handling",
        desc: "Ready-made responses to price objections, 'not now,' 'we have a vendor,' and 'send me info' — so you're never caught off guard.",
      },
      {
        icon: "🔁",
        title: "Follow-Up & Nurturing",
        desc: "Post-meeting summaries, multi-touch email sequences, and re-engagement prompts for deals that went cold.",
      },
      {
        icon: "📝",
        title: "Proposals & Closing",
        desc: "Proposal templates, executive summary frameworks, urgency-creation scripts, and closing plays that move deals across the line.",
      },
    ],
    samplePrompts: [
      {
        label: "Cold Email (Problem-First)",
        prompt:
          "Act as a B2B sales copywriter. Write a cold email to [PROSPECT NAME], [JOB TITLE] at [COMPANY]. They likely struggle with [PAIN POINT]. Our product, [PRODUCT NAME], helps [TARGET PERSONA] [VALUE PROP]. Under 100 words. One clear CTA. No buzzwords.",
      },
      {
        label: "Objection: 'We already have a vendor'",
        prompt:
          "Write a response to the objection: 'We already use [COMPETITOR] for this.' Context: I sell [PRODUCT NAME] to [PERSONA]. Key differentiators: [LIST]. Goal: keep the conversation open without badmouthing the competitor. Conversational tone, 3-4 sentences.",
      },
    ],
    whoItsFor: [
      "SDRs who need to book more meetings with less time spent writing",
      "AEs who want sharper discovery and closing conversations",
      "Sales managers who want to standardize high-quality outreach across their team",
    ],
  },
};

/* ─────────────────────────────────────────────
   Static params
───────────────────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(toolkits).map((slug) => ({ slug }));
}

/* ─────────────────────────────────────────────
   Metadata
───────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kit = toolkits[slug as keyof typeof toolkits];
  if (!kit) return { title: "Not found" };
  return {
    title: `${kit.name} AI Prompt Toolkit — Workshift`,
    description: `${kit.subheadline} ${kit.prompts} prompts. One-time $${kit.price}.`,
  };
}

/* ─────────────────────────────────────────────
   Page component
───────────────────────────────────────────── */
export default async function ToolkitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kit = toolkits[slug as keyof typeof toolkits];
  if (!kit) notFound();

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* Top accent bar */}
      <div className={`h-1 bg-gradient-to-r ${kit.colorBar}`} />

      {/* Nav */}
      <nav className="bg-[#1c3557] px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#c9a84c] font-bold text-lg">
          Workshift
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/toolkits" className="text-white/70 hover:text-white transition-colors">
            Toolkits
          </Link>
          <Link href="/course" className="text-white/70 hover:text-white transition-colors">
            Course
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#ede8df] px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/8 text-[#8a6a1f] text-sm font-medium mb-6">
            {kit.badge} {kit.prompts} prompts · One-time purchase
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1c3557] mb-5 leading-tight">
            {kit.tagline}
          </h1>
          <p className="text-[#718096] text-xl mb-10 leading-relaxed">
            {kit.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={kit.stripeLink}
              className="px-8 py-4 rounded-xl bg-[#1c3557] hover:bg-[#2a4f7c] text-white text-base font-bold transition-colors shadow-lg"
            >
              Get the {kit.name} Toolkit — ${kit.price} →
            </a>
            <span className="text-[#a0aec0] text-sm">⚡ Instant download · No subscription</span>
          </div>
        </div>
      </section>

      {/* ── What's Inside ── */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1c3557] mb-3">What&apos;s inside</h2>
          <p className="text-[#718096] text-lg">
            Every prompt is ready to use — just fill in your details and go.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {kit.features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[#ede8df] rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-[#1c3557] font-bold text-base mb-2">{f.title}</h3>
              <p className="text-[#718096] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sample Prompts ── */}
      <section className="bg-[#1c3557] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Sample prompts</h2>
            <p className="text-[#94b4d4] text-lg">
              Here&apos;s a taste of what&apos;s inside. Every prompt is editable and built to get great results.
            </p>
          </div>
          <div className="space-y-5">
            {kit.samplePrompts.map((sp) => (
              <div key={sp.label} className="rounded-xl overflow-hidden">
                <div className="bg-[#132640] px-5 py-2 border-b border-white/10">
                  <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wide">
                    {sp.label}
                  </span>
                </div>
                <div className="bg-[#0f1e30] px-5 py-5">
                  <p className="text-[#cbd5e0] text-sm font-mono leading-relaxed whitespace-pre-wrap">
                    {sp.prompt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-white border-t border-b border-[#ede8df] px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1c3557] mb-10">Who it&apos;s for</h2>
          <ul className="space-y-4 text-left">
            {kit.whoItsFor.map((persona, i) => (
              <li key={i} className="flex items-start gap-4 bg-[#faf9f6] rounded-xl p-5 border border-[#ede8df]">
                <span className="text-[#c9a84c] text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-[#4a5568] text-base leading-relaxed">{persona}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-24 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-6">{kit.badge}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c3557] mb-4">
            Ready to work smarter?
          </h2>
          <p className="text-[#718096] text-lg mb-8">
            One-time purchase. No subscriptions. Instant access to {kit.prompts} prompts.
          </p>

          <div className="bg-white border border-[#ede8df] rounded-2xl p-8 shadow-sm mb-6">
            <div className="text-sm text-[#a0aec0] mb-1">One-time price</div>
            <div className="text-5xl font-black text-[#1c3557] mb-1">${kit.price}</div>
            <div className="text-[#a0aec0] text-sm mb-6">No recurring fees · Yours forever</div>
            <a
              href={kit.stripeLink}
              className="block w-full py-4 rounded-xl bg-[#c9a84c] hover:bg-[#b8953e] text-white text-base font-bold transition-colors shadow-md"
            >
              Get instant access →
            </a>
            <p className="text-[#a0aec0] text-xs mt-4">
              ⚡ Instant download after purchase · Secure checkout
            </p>
          </div>

          <Link
            href="/toolkits"
            className="text-[#718096] text-sm hover:text-[#1c3557] transition-colors"
          >
            ← Browse all toolkits
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ede8df] px-4 py-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[#a0aec0] text-sm">
          <span>© 2025 Workshift</span>
          <div className="flex gap-4">
            <Link href="/legal/imprint" className="hover:text-[#1c3557] transition-colors">
              Imprint
            </Link>
            <Link href="/legal/privacy" className="hover:text-[#1c3557] transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:text-[#1c3557] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
