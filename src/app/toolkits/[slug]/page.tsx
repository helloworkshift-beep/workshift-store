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

  "financial-advisor": {
    slug: "financial-advisor",
    name: "Financial Advisor",
    badge: "📈",
    prompts: "90+",
    price: 67,
    stripeLink: "/api/checkout?product=financial-advisor-toolkit",
    colorBar: "from-green-500 to-emerald-600",
    tagline: "Client reports, proposals, and communications — done in minutes.",
    subheadline:
      "90+ AI prompts for financial advisors and wealth managers. From quarterly reviews to prospect outreach — professional, compliant-friendly language without the blank-page paralysis.",
    tags: ["Client reports", "Prospect outreach", "Quarterly reviews", "Planning summaries"],
    features: [
      {
        icon: "📊",
        title: "Quarterly & Annual Reviews",
        desc: "Turn portfolio data into clear, reassuring client summaries that explain performance, reinforce strategy, and build long-term trust.",
      },
      {
        icon: "🤝",
        title: "Prospect Outreach",
        desc: "Cold emails, LinkedIn messages, referral follow-ups, and seminar invitations that open doors without sounding like a pitch.",
      },
      {
        icon: "📋",
        title: "Financial Planning Summaries",
        desc: "Summarize complex financial plans — retirement projections, risk assessments, estate planning — in plain language clients actually understand.",
      },
      {
        icon: "💌",
        title: "Client Communication",
        desc: "Market volatility reassurance emails, birthday/anniversary touchpoints, milestone check-ins, and life event follow-ups that strengthen relationships.",
      },
      {
        icon: "🎤",
        title: "Seminars & Events",
        desc: "Invitation copy, event agendas, follow-up sequences, and presentation outlines for client education events and webinars.",
      },
      {
        icon: "📰",
        title: "Newsletters & Thought Leadership",
        desc: "Monthly client newsletters, LinkedIn articles, and market commentary that position you as a trusted expert — not just a transaction processor.",
      },
    ],
    samplePrompts: [
      {
        label: "Quarterly Portfolio Review Email",
        prompt:
          "Write a quarterly portfolio review email for a client whose portfolio returned [X%] vs benchmark [Y%]. They're in a [CONSERVATIVE/MODERATE/AGGRESSIVE] allocation. Key market events this quarter: [LIST]. Tone: calm, reassuring, forward-looking. 200 words max. No jargon.",
      },
      {
        label: "Market Volatility Client Email",
        prompt:
          "Write a client email addressing recent market volatility (markets down [X%] this month). Acknowledge the discomfort, explain why staying the course aligns with their [GOAL], and reinforce our long-term strategy without dismissing their concern. Warm, confident tone. Under 250 words.",
      },
    ],
    whoItsFor: [
      "Independent RIAs who want to write client-facing content faster without sacrificing quality or compliance readability",
      "Wirehouse advisors building their personal brand and book of business with consistent communication",
      "Fee-only planners who want to be known as educators, not just asset managers",
    ],
  },

  "teacher": {
    slug: "teacher",
    name: "Teacher & Educator",
    badge: "🎓",
    prompts: "100+",
    price: 47,
    stripeLink: "/api/checkout?product=teacher-toolkit",
    colorBar: "from-sky-500 to-blue-600",
    tagline: "Lesson plans, parent comms, and reports — all done faster.",
    subheadline:
      "100+ AI prompts built for K-12 teachers, tutors, and educators. Spend less time on paperwork and more time actually teaching.",
    tags: ["Lesson plans", "Parent communication", "Assessments", "Reports"],
    features: [
      {
        icon: "📚",
        title: "Lesson Plans",
        desc: "Generate complete lesson plans with objectives, activities, differentiation strategies, and assessment criteria — in minutes instead of hours.",
      },
      {
        icon: "✉️",
        title: "Parent Communication",
        desc: "Progress updates, behavior concerns, celebration messages, newsletter drafts, and parent meeting prep — always professional, never generic.",
      },
      {
        icon: "📝",
        title: "Assessments & Rubrics",
        desc: "Create quizzes, tests, project rubrics, and exit tickets aligned to your learning objectives. Easy to adapt for different levels.",
      },
      {
        icon: "📋",
        title: "Student Reports",
        desc: "Report card comment banks, progress narratives, IEP contribution summaries, and end-of-year assessments that are personal and specific.",
      },
      {
        icon: "🏫",
        title: "Classroom Management",
        desc: "Class rules, behavior plans, student goal-setting scripts, and restorative conversation frameworks that build a positive classroom culture.",
      },
      {
        icon: "🧑‍💻",
        title: "Professional Development",
        desc: "Self-reflection prompts, peer observation notes, PD session planning, and personal teaching philosophy writing for portfolios and reviews.",
      },
    ],
    samplePrompts: [
      {
        label: "Lesson Plan Generator",
        prompt:
          "Create a 45-minute lesson plan for [SUBJECT], [GRADE LEVEL], on the topic of [TOPIC]. Learning objective: students will be able to [OBJECTIVE]. Include: warm-up (5 min), direct instruction (15 min), guided practice (15 min), independent activity (10 min). Note differentiation strategies for early finishers and struggling students.",
      },
      {
        label: "Parent Progress Email",
        prompt:
          "Write a progress update email to the parent of [STUDENT NAME], a [GRADE] student. Strengths: [LIST]. Areas for growth: [LIST]. Recent wins: [EXAMPLE]. Tone: warm, honest, collaborative. Include one specific action both school and home can take. Under 200 words.",
      },
    ],
    whoItsFor: [
      "K-12 classroom teachers who spend too many evenings on admin instead of prep",
      "Tutors and learning coaches who want to deliver more personalized communication to students and parents",
      "Department heads and instructional coaches who need to support teachers with reusable planning templates",
    ],
  },

  "customer-success": {
    slug: "customer-success",
    name: "Customer Success Manager",
    badge: "🌟",
    prompts: "95+",
    price: 57,
    stripeLink: "/api/checkout?product=customer-success-toolkit",
    colorBar: "from-teal-500 to-cyan-600",
    tagline: "Retain more customers. Expand accounts. Build loyalty that lasts.",
    subheadline:
      "95+ prompts for CSMs at SaaS companies — from onboarding sequences to QBR prep. Stop writing from scratch for every customer and start delivering a consistently excellent experience.",
    tags: ["Onboarding", "QBRs", "Risk escalations", "Expansion"],
    features: [
      {
        icon: "🚀",
        title: "Onboarding",
        desc: "Welcome sequences, kickoff meeting agendas, success plan templates, and early adoption prompts that set the right tone from day one.",
      },
      {
        icon: "📊",
        title: "QBR & Business Reviews",
        desc: "QBR decks, executive summaries, ROI calculators, and success story framing that make the business case for renewal obvious.",
      },
      {
        icon: "🔴",
        title: "Risk & Churn Prevention",
        desc: "Early warning check-ins, re-engagement campaigns, executive escalation scripts, and save plays for accounts showing churn signals.",
      },
      {
        icon: "📈",
        title: "Expansion & Upsell",
        desc: "Expansion conversation scripts, case studies, upgrade proposals, and multi-stakeholder outreach for accounts ready to grow.",
      },
      {
        icon: "💌",
        title: "Ongoing Communication",
        desc: "Monthly health check emails, feature adoption nudges, NPS follow-ups, and renewal conversations that feel personal at scale.",
      },
      {
        icon: "📋",
        title: "Internal Documentation",
        desc: "Account health summaries, handoff notes, escalation write-ups, and voice-of-customer synthesis for product teams.",
      },
    ],
    samplePrompts: [
      {
        label: "QBR Executive Summary",
        prompt:
          "Write a QBR executive summary for [COMPANY NAME]. Product: [PRODUCT]. Contract value: [ACV]. Usage highlights: [METRICS]. Key wins this quarter: [LIST]. Open risks: [LIST]. Next quarter goals: [LIST]. Audience: VP/C-level. Focus on business outcomes, not feature usage. Max 300 words.",
      },
      {
        label: "At-Risk Account Re-engagement",
        prompt:
          "Write an email to re-engage an at-risk customer at [COMPANY]. They've had low usage for [X] weeks and haven't responded to 2 touchpoints. Champion: [NAME], [TITLE]. Original goal when they signed: [GOAL]. Avoid desperation. Lead with value, offer a quick call. Under 120 words.",
      },
    ],
    whoItsFor: [
      "CSMs managing 20+ accounts who need to maintain quality communication without burning out",
      "CS leads building scalable playbooks and onboarding templates for a growing team",
      "Account managers at SaaS companies who own both retention and expansion quotas",
    ],
  },

  "business-owner": {
    slug: "business-owner",
    name: "Business Owner",
    badge: "🏢",
    prompts: "100+",
    price: 67,
    stripeLink: "/api/checkout?product=business-owner-toolkit",
    colorBar: "from-slate-600 to-gray-700",
    tagline: "Run your business. Stop drowning in writing.",
    subheadline:
      "100+ prompts for small business owners, entrepreneurs, and founders. From investor updates to team announcements — professional writing for every part of running a business.",
    tags: ["Team comms", "Client proposals", "Investor updates", "Operations"],
    features: [
      {
        icon: "📨",
        title: "Client Proposals & Pitches",
        desc: "Business proposals, scope of work documents, partnership pitches, and pricing presentations that close deals and set clear expectations.",
      },
      {
        icon: "📣",
        title: "Team Communications",
        desc: "Company updates, hiring announcements, policy changes, performance conversations, and culture-building messages your team will actually read.",
      },
      {
        icon: "💰",
        title: "Investor & Stakeholder Updates",
        desc: "Monthly investor updates, board meeting summaries, fundraising narratives, and milestone announcements that build confidence.",
      },
      {
        icon: "🌐",
        title: "Marketing & Brand Copy",
        desc: "Website copy, About Us pages, brand positioning statements, elevator pitches, and social media content that tells your story.",
      },
      {
        icon: "📋",
        title: "Operations",
        desc: "SOPs, job descriptions, vendor RFPs, contract summaries, and process documentation that help you delegate and scale.",
      },
      {
        icon: "🤝",
        title: "Customer & Vendor Relations",
        desc: "Client onboarding messages, difficult conversation scripts, vendor negotiation emails, and complaint resolution templates.",
      },
    ],
    samplePrompts: [
      {
        label: "Client Proposal",
        prompt:
          "Write a business proposal for [PROSPECT COMPANY]. We are [YOUR COMPANY], a [DESCRIPTION]. They need help with [PROBLEM]. Our solution: [SOLUTION]. Timeline: [TIMELINE]. Investment: [PRICE RANGE]. Include: executive summary, problem statement, proposed approach, deliverables, and next steps. Professional but not stiff.",
      },
      {
        label: "Monthly Investor Update",
        prompt:
          "Write a monthly investor update for [MONTH]. Company: [NAME]. Key metrics: [MRR/ARR/USERS/etc]. Highlights: [LIST 2-3 wins]. Challenges: [HONEST CHALLENGE]. What we need: [ASK if any]. Next month focus: [GOALS]. Tone: transparent, confident, data-driven. Max 400 words.",
      },
    ],
    whoItsFor: [
      "Solo founders and small business owners wearing every hat who need to write better, faster",
      "Early-stage startup founders building credibility with investors, customers, and team members through clear communication",
      "Operators taking over family businesses or scaling from solopreneur to small team",
    ],
  },

  "mechanic": {
    slug: "mechanic",
    name: "Auto Mechanic",
    badge: "🔧",
    prompts: "85+",
    price: 47,
    stripeLink: "/api/checkout?product=mechanic-toolkit",
    colorBar: "from-zinc-600 to-stone-700",
    tagline: "Write better estimates, win more jobs, keep customers coming back.",
    subheadline:
      "85+ AI prompts for auto mechanics and shop owners. Customer communication, service estimates, review requests, and social content — all done without a marketing team.",
    tags: ["Service estimates", "Customer follow-ups", "Reviews", "Shop marketing"],
    features: [
      {
        icon: "🔩",
        title: "Service Estimates & Explanations",
        desc: "Write clear, plain-English explanations of what's wrong and why the repair is needed. Turn technical findings into approvals — without the hard sell.",
      },
      {
        icon: "📱",
        title: "Customer Text & Email Templates",
        desc: "Vehicle ready notifications, diagnostic update messages, appointment reminders, and follow-up messages that make your shop look professional.",
      },
      {
        icon: "⭐",
        title: "Review Requests",
        desc: "Post-service messages that ask for Google and Yelp reviews naturally — without being pushy. Includes response templates for both positive and negative reviews.",
      },
      {
        icon: "📣",
        title: "Social Media Content",
        desc: "Before/after posts, maintenance tip content, seasonal specials, and shop spotlight posts for Facebook and Instagram that build local awareness.",
      },
      {
        icon: "👷",
        title: "Hiring & Team",
        desc: "Job postings for technicians and service writers, onboarding checklists, and internal communications for your shop team.",
      },
      {
        icon: "🎯",
        title: "Promotions & Offers",
        desc: "Oil change specials, seasonal campaigns, loyalty program announcements, and referral ask templates that drive repeat business.",
      },
    ],
    samplePrompts: [
      {
        label: "Repair Estimate Explanation",
        prompt:
          "Write a plain-English explanation of a needed repair for a customer. Repair: [REPAIR NAME]. Root cause: [WHAT CAUSED IT]. What happens if they don't fix it: [CONSEQUENCE]. Estimated cost: [$AMOUNT]. Estimated time: [HOURS]. Tone: honest, helpful, not pushy. Keep it under 150 words.",
      },
      {
        label: "Post-Service Review Request (SMS)",
        prompt:
          "Write a short SMS to send after completing a [SERVICE TYPE] for [CUSTOMER NAME]. Thank them, remind them what was done, and ask for a Google review with a natural, friendly tone. Include a placeholder for the review link. Under 60 words.",
      },
    ],
    whoItsFor: [
      "Independent shop owners who do all their own marketing and want to look more professional online",
      "Service writers who want faster, better customer communication templates",
      "Multi-bay shop managers standardizing communication across front-of-house staff",
    ],
  },

  "contractor": {
    slug: "contractor",
    name: "Contractor & Handyman",
    badge: "🏗️",
    prompts: "85+",
    price: 47,
    stripeLink: "/api/checkout?product=contractor-toolkit",
    colorBar: "from-orange-500 to-amber-600",
    tagline: "Win more bids. Write better proposals. Get paid faster.",
    subheadline:
      "85+ AI prompts for contractors, handymen, and tradespeople. Quotes, scope of work documents, client updates, review requests — all the writing you hate, done in minutes.",
    tags: ["Project proposals", "Scope of work", "Client updates", "Reviews"],
    features: [
      {
        icon: "📄",
        title: "Project Proposals & Quotes",
        desc: "Write professional, detailed project proposals that justify your price, set clear expectations, and beat competitors who send a single line quote.",
      },
      {
        icon: "📋",
        title: "Scope of Work Documents",
        desc: "Detailed SOWs that protect you legally, prevent scope creep, and ensure the client knows exactly what's included — and what isn't.",
      },
      {
        icon: "💬",
        title: "Client Update Messages",
        desc: "Progress updates, delay notifications, change order requests, and project completion messages that keep clients informed and happy.",
      },
      {
        icon: "💰",
        title: "Invoicing & Collections",
        desc: "Professional invoice cover notes, payment reminder sequences, and late payment escalation emails that get you paid without burning the relationship.",
      },
      {
        icon: "⭐",
        title: "Reviews & Referrals",
        desc: "Post-project review request messages, referral ask scripts, and responses to online reviews (good and bad) that build your local reputation.",
      },
      {
        icon: "📣",
        title: "Social & Local Marketing",
        desc: "Project showcase posts, before/after captions, seasonal promotion copy, and Google Business profile content that keeps your pipeline full.",
      },
    ],
    samplePrompts: [
      {
        label: "Project Proposal",
        prompt:
          "Write a professional project proposal for a [PROJECT TYPE] job. Client: [NAME]. Location: [CITY]. Scope: [DESCRIBE WORK]. Timeline: [DURATION]. Estimated cost: [$AMOUNT]. Include: brief intro, what's included, what's not included, timeline, payment terms, and a simple call to action. Tone: professional but approachable.",
      },
      {
        label: "Change Order Request",
        prompt:
          "Write a change order request message for a client. Project: [PROJECT]. Original scope: [ORIGINAL]. Newly discovered issue: [ISSUE]. Additional cost: [$AMOUNT]. Additional time: [DURATION]. Tone: matter-of-fact, not apologetic. Explain why it's necessary, what it involves, and ask for approval to proceed.",
      },
    ],
    whoItsFor: [
      "Solo contractors and handymen who want to win more jobs with better-looking proposals",
      "Small construction companies standardizing their client communication and documentation",
      "Tradespeople transitioning to running their own business who need a professional writing system fast",
    ],
  },

  "personal-trainer": {
    slug: "personal-trainer",
    name: "Personal Trainer",
    badge: "💪",
    prompts: "90+",
    price: 47,
    stripeLink: "/api/checkout?product=personal-trainer-toolkit",
    colorBar: "from-red-500 to-rose-600",
    tagline: "Grow your client base. Deliver better programs. Keep clients for life.",
    subheadline:
      "90+ AI prompts for personal trainers, fitness coaches, and gym owners. Client programs, check-in messages, social content, and sales scripts — so you can focus on training, not typing.",
    tags: ["Training programs", "Client check-ins", "Social content", "Sales scripts"],
    features: [
      {
        icon: "🏋️",
        title: "Training Programs",
        desc: "Generate structured training programs for different goals — fat loss, muscle gain, athletic performance — with progressive overload, sets, reps, and coaching notes.",
      },
      {
        icon: "🥗",
        title: "Nutrition Guidance",
        desc: "Macro-friendly meal frameworks, grocery list templates, nutrition coaching language, and habit-based guidance you can send to clients with confidence.",
      },
      {
        icon: "💬",
        title: "Client Check-Ins",
        desc: "Weekly check-in templates, progress review messages, motivational follow-ups, and plateau-busting conversations that keep clients engaged between sessions.",
      },
      {
        icon: "📱",
        title: "Social Media Content",
        desc: "Transformation story posts, tip-of-the-week content, myth-busting posts, and behind-the-scenes content that builds your online following.",
      },
      {
        icon: "💰",
        title: "Sales & Onboarding",
        desc: "Discovery call scripts, package proposal templates, objection handling for pricing, and onboarding questionnaires that set up the client relationship right.",
      },
      {
        icon: "🎯",
        title: "Retention & Referrals",
        desc: "Milestone celebration messages, accountability prompts for drifting clients, re-engagement scripts, and referral ask templates.",
      },
    ],
    samplePrompts: [
      {
        label: "12-Week Training Program Outline",
        prompt:
          "Create a 12-week beginner training program for a client whose goal is [GOAL]. Equipment available: [GYM / HOME / MINIMAL]. Training days per week: [X]. Include: phase breakdown (e.g., adaptation → progressive → peak), weekly session structure, sets/reps guidance, and key coaching notes per phase. Keep language simple and motivating.",
      },
      {
        label: "Plateau Client Check-In Message",
        prompt:
          "Write a check-in message to a client who has hit a [WEIGHT LOSS / STRENGTH / PERFORMANCE] plateau. They've been consistent for [X] weeks. Acknowledge the frustration, explain why plateaus happen, and suggest [2 ADJUSTMENTS]. Tone: empathetic, coach-like, energizing. Not clinical. Under 150 words.",
      },
    ],
    whoItsFor: [
      "In-person and online coaches who want to scale their client base without sacrificing personalized communication",
      "Gym owners and studio managers who want to standardize the coaching experience across their team",
      "New trainers building a client base from scratch who need professional materials without a big budget",
    ],
  },

  "restaurant-owner": {
    slug: "restaurant-owner",
    name: "Restaurant Owner",
    badge: "🍽️",
    prompts: "85+",
    price: 47,
    stripeLink: "/api/checkout?product=restaurant-owner-toolkit",
    colorBar: "from-yellow-500 to-orange-500",
    tagline: "Menus, marketing, and management — without the agency price tag.",
    subheadline:
      "85+ AI prompts for restaurant owners, café operators, and food service managers. Menu copy, staff communication, review responses, and social content — all done fast.",
    tags: ["Menu copy", "Social media", "Staff comms", "Review responses"],
    features: [
      {
        icon: "🍴",
        title: "Menu Descriptions",
        desc: "Write appetite-inducing menu item descriptions that sell the dish — not just list the ingredients. Works for fine dining, casual, and fast casual.",
      },
      {
        icon: "📱",
        title: "Social Media Content",
        desc: "Daily specials, behind-the-scenes posts, event announcements, holiday promotions, and mouth-watering food photography captions for Instagram and Facebook.",
      },
      {
        icon: "⭐",
        title: "Review Management",
        desc: "Thoughtful, professional responses to Google and Yelp reviews — positive and negative — that build your reputation instead of burning it.",
      },
      {
        icon: "👨‍🍳",
        title: "Staff Communication",
        desc: "Job postings, training materials, policy updates, schedule change notices, and team meeting agendas that keep your staff informed and engaged.",
      },
      {
        icon: "📧",
        title: "Customer Outreach",
        desc: "Email newsletters, loyalty program announcements, event invitations, and birthday offers that bring guests back more often.",
      },
      {
        icon: "🤝",
        title: "Vendor & Operations",
        desc: "Vendor outreach emails, supply shortage communication, catering inquiry responses, and operational announcement templates.",
      },
    ],
    samplePrompts: [
      {
        label: "Menu Item Description",
        prompt:
          "Write a menu description for [DISH NAME]. Key ingredients: [LIST]. Cooking method: [METHOD]. Flavor profile: [DESCRIPTION]. Allergens: [IF ANY]. Restaurant style: [FINE DINING / CASUAL / FAST CASUAL]. Keep it under 40 words. Make it sound irresistible without being over the top.",
      },
      {
        label: "Response to Negative Review",
        prompt:
          "Write a professional, empathetic response to this negative restaurant review: [PASTE REVIEW]. Acknowledge the experience, take responsibility without being defensive, explain what we're doing about it, and invite them back. Tone: warm, genuine, not corporate. Under 100 words.",
      },
    ],
    whoItsFor: [
      "Independent restaurant and café owners who don't have a marketing team but need to look like they do",
      "Food truck operators and pop-up chefs building a following on social media",
      "Restaurant managers handling front-of-house communication and staff coordination",
    ],
  },

  "hr-recruiter": {
    slug: "hr-recruiter",
    name: "HR & Recruiter",
    badge: "🧑‍💼",
    prompts: "93+",
    price: 57,
    stripeLink: "/api/checkout?product=hr-recruiter-toolkit",
    colorBar: "from-rose-500 to-pink-500",
    tagline: "Hire better. Communicate clearer. Build stronger teams.",
    subheadline:
      "93 AI prompts covering the full HR and recruiting workflow — from writing job descriptions to handling difficult performance conversations. Built for practitioners doing the actual work.",
    tags: ["Job descriptions", "Sourcing", "Interviews", "HR comms"],
    features: [
      {
        icon: "📋",
        title: "Job Descriptions & EVP",
        desc: "Write compelling JDs that attract the right candidates — not just any candidates. Includes DEI-conscious language, bias audits, and employer brand copy.",
      },
      {
        icon: "🔎",
        title: "Sourcing & Outreach",
        desc: "LinkedIn InMails, cold email sequences, Boolean search strings, and passive candidate re-engagement messages that actually get replies.",
      },
      {
        icon: "🎙️",
        title: "Screening & Interviews",
        desc: "Structured interview guides, phone screen frameworks, technical assessment briefs, and scorecards that make hiring decisions defensible.",
      },
      {
        icon: "💌",
        title: "Candidate Experience",
        desc: "Application acknowledgements, status updates at every stage, rejection emails that leave candidates with a positive impression, and offer letter templates.",
      },
      {
        icon: "🚀",
        title: "Onboarding",
        desc: "30/60/90-day plans, pre-boarding welcome messages, remote onboarding guides, and buddy program frameworks that reduce early attrition.",
      },
      {
        icon: "📣",
        title: "HR Communications",
        desc: "Policy change announcements, layoff communications, PIP documentation, termination scripts, and RTO messaging — including the hard stuff.",
      },
    ],
    samplePrompts: [
      {
        label: "Job Description Rewrite",
        prompt:
          "Rewrite this job description to be more compelling and inclusive. Remove jargon, cut requirements that are actually preferences, and lead with what the candidate gains — not just what we need. Original JD: [PASTE]. Role: [TITLE] at [COMPANY]. Tone: [TONE].",
      },
      {
        label: "LinkedIn InMail (Passive Candidate)",
        prompt:
          "Write a LinkedIn InMail to [CANDIDATE NAME], a [CURRENT ROLE] at [CURRENT COMPANY]. I'm recruiting for a [OPEN ROLE] at [HIRING COMPANY]. Key draw for them: [HOOK — e.g., remote-first, Series B momentum, specific tech stack]. Under 100 words. Sound like a human, not a recruiter template.",
      },
    ],
    whoItsFor: [
      "In-house recruiters who need to move faster without sacrificing candidate quality",
      "HR managers who write the same communications over and over and want a better system",
      "People ops leads standardizing the employee experience from offer to offboarding",
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
