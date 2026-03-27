import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import Link from "next/link";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Badge, Button } from "@/components/ui";
import { articleSchema } from "@/lib/schema";

const POST_META: Record<string, { title: string; excerpt: string; category: string; readTime: string; related?: string[] }> = {
  "ai-replacing-knowledge-workers": {
    title: "AI Isn't Replacing Knowledge Workers — It's Replacing the Ones Who Don't Adapt",
    excerpt: "What the research actually says about AI and knowledge work, which tasks are most at risk, and what to do in the next 90 days.",
    category: "The Workshift", readTime: "8 min",
    related: ["workshift-ai-skills-knowledge-workers", "90-day-ai-transformation"],
  },
  "how-to-use-claude-for-work": {
    title: "How to Use Claude for Work: A Complete Guide for Professionals",
    excerpt: "Setting up your first Project, writing effective prompts for professional tasks, and 5 workflows to start today.",
    category: "Getting Started", readTime: "7 min",
    related: ["claude-prompting-guide-professionals", "context-engineering-guide"],
  },
  "context-engineering-guide": {
    title: "Context Engineering: The Skill That Separates Good from Great AI Users",
    excerpt: "Most professionals plateau at prompting. Context engineering is what takes you past that ceiling.",
    category: "Deep Dive", readTime: "9 min",
    related: ["claude-prompting-guide-professionals", "agentic-thinking-guide"],
  },
  "claude-prompting-guide-professionals": {
    title: "The Professional's Guide to Prompting Claude: From Basic to Expert",
    excerpt: "Why most professional prompts fail — and 15 production-ready templates you can use today.",
    category: "Prompting", readTime: "12 min",
    related: ["context-engineering-guide", "how-to-use-claude-for-work"],
  },
  "workshift-ai-skills-knowledge-workers": {
    title: "The 7 AI Skills Every Knowledge Worker Needs in 2026",
    excerpt: "The specific capabilities that separate AI-native professionals from everyone else — and how to build each one.",
    category: "Skills", readTime: "10 min",
    related: ["90-day-ai-transformation", "ai-replacing-knowledge-workers"],
  },
  "agentic-thinking-guide": {
    title: "Agentic Thinking: How to Design AI Workflows That Run Themselves",
    excerpt: "Stop thinking in messages. Start designing systems. The framework for non-technical professionals.",
    category: "Advanced", readTime: "9 min",
    related: ["context-engineering-guide", "workshift-ai-skills-knowledge-workers"],
  },
  "claude-vs-chatgpt-for-work": {
    title: "Claude vs. ChatGPT for Professional Work: An Honest Comparison",
    excerpt: "No hype. A straightforward comparison of what each tool does better for knowledge workers.",
    category: "Tools", readTime: "8 min",
    related: ["how-to-use-claude-for-work", "claude-prompting-guide-professionals"],
  },
  "ai-skills-for-lawyers": {
    title: "How Lawyers Can Use AI to Work Smarter (Without the Risk)",
    excerpt: "Contract review, research, drafting, and client communication — with the guardrails that matter.",
    category: "By Profession", readTime: "9 min",
    related: ["context-engineering-guide", "claude-prompting-guide-professionals"],
  },
  "how-to-train-team-on-ai": {
    title: "How to Actually Train Your Team on AI (That Sticks)",
    excerpt: "Why most AI training fails, and the 4-step method that actually changes how people work.",
    category: "Leadership", readTime: "8 min",
    related: ["workshift-ai-skills-knowledge-workers", "90-day-ai-transformation"],
  },
  "90-day-ai-transformation": {
    title: "The 90-Day Plan to Become an AI-Native Professional",
    excerpt: "A month-by-month roadmap from occasional AI user to genuinely transformed professional.",
    category: "Action Plan", readTime: "9 min",
    related: ["workshift-ai-skills-knowledge-workers", "how-to-train-team-on-ai"],
  },
  // ── SEO content ──
  "ai-prompts-real-estate-agents": {
    title: "AI Prompts for Real Estate Agents: 10 Templates That Actually Work",
    excerpt: "Ready-to-use AI prompt templates for MLS listings, client emails, social media, and more. Copy, fill in the brackets, get professional results.",
    category: "By Profession", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "ai-replacing-knowledge-workers"],
  },
  "chatgpt-prompts-product-managers": {
    title: "ChatGPT Prompts for Product Managers: PRDs, Roadmaps, and Stakeholder Updates",
    excerpt: "10 prompt templates for the most common PM writing tasks — PRDs, roadmaps, user stories, and stakeholder communications.",
    category: "By Profession", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "context-engineering-guide"],
  },
  "ai-prompts-marketers": {
    title: "AI Prompts for Marketers: 10 Templates That Actually Work",
    excerpt: "Ready-to-use prompt templates for email sequences, social copy, ad variations, campaign briefs, and more.",
    category: "By Profession", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "ai-vs-copywriter"],
  },
  "ai-prompts-sales-reps": {
    title: "AI Prompts for Sales Reps: Templates for Every Stage of the Pipeline",
    excerpt: "Cold emails, discovery prep, objection handling, follow-ups, and proposals — done-for-you prompt templates for salespeople.",
    category: "By Profession", readTime: "5 min",
    related: ["how-to-write-better-ai-prompts", "ai-replacing-knowledge-workers"],
  },
  "chatgpt-prompts-hr-recruiters": {
    title: "ChatGPT Prompts for HR and Recruiters: Templates That Save Hours Every Week",
    excerpt: "Job descriptions, sourcing messages, interview guides, rejection emails, onboarding plans — all in bracket-prompt format.",
    category: "By Profession", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "workshift-ai-skills-knowledge-workers"],
  },
  "ai-prompts-financial-advisors": {
    title: "AI Prompts for Financial Advisors: Write Better Client Communications in Less Time",
    excerpt: "Quarterly reviews, market volatility emails, prospect outreach, and financial plan summaries — all in prompt format.",
    category: "By Profession", readTime: "5 min",
    related: ["how-to-write-better-ai-prompts", "claude-prompting-guide-professionals"],
  },
  "ai-prompts-teachers": {
    title: "AI Prompts for Teachers: Lesson Plans, Parent Emails, and Reports in Minutes",
    excerpt: "10 ready-to-use prompt templates for lesson planning, parent communication, assessments, and report cards.",
    category: "By Profession", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "workshift-ai-skills-knowledge-workers"],
  },
  "ai-prompts-customer-success": {
    title: "AI Prompts for Customer Success Managers: Retain More, Expand Faster",
    excerpt: "Onboarding agendas, QBR summaries, at-risk account emails, expansion conversations — all in bracket-prompt format.",
    category: "By Profession", readTime: "5 min",
    related: ["how-to-write-better-ai-prompts", "context-engineering-guide"],
  },
  "ai-prompts-contractors": {
    title: "AI Prompts for Contractors and Handymen: Win More Jobs, Get Paid Faster",
    excerpt: "Project proposals, change orders, client updates, review requests — done-for-you prompts for tradespeople.",
    category: "By Profession", readTime: "5 min",
    related: ["how-to-write-better-ai-prompts", "best-ai-tools-small-business"],
  },
  "ai-prompts-mechanics": {
    title: "AI Prompts for Auto Mechanics: Better Customer Communication, More Repeat Business",
    excerpt: "Repair explanations, review requests, social posts, and customer follow-ups — prompt templates for auto shops.",
    category: "By Profession", readTime: "5 min",
    related: ["how-to-write-better-ai-prompts", "best-ai-tools-small-business"],
  },
  "ai-prompts-personal-trainers": {
    title: "AI Prompts for Personal Trainers: Grow Your Client Base and Deliver Better Programs",
    excerpt: "Training programs, client check-ins, social content, and sales scripts — prompt templates for fitness coaches.",
    category: "By Profession", readTime: "5 min",
    related: ["how-to-write-better-ai-prompts", "best-ai-tools-small-business"],
  },
  "ai-prompts-restaurant-owners": {
    title: "AI Prompts for Restaurant Owners: Menu Copy, Reviews, and Marketing Without an Agency",
    excerpt: "Menu descriptions, review responses, job postings, and social media — done-for-you prompts for restaurant operators.",
    category: "By Profession", readTime: "5 min",
    related: ["how-to-write-better-ai-prompts", "best-ai-tools-small-business"],
  },
  "best-ai-tools-small-business": {
    title: "Best AI Tools for Small Business Owners in 2026",
    excerpt: "ChatGPT, Claude, Gemini — what they're actually good for, where they fall short, and what small business owners use them for most.",
    category: "Tools", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "ai-replacing-knowledge-workers"],
  },
  "how-to-write-better-ai-prompts": {
    title: "How to Write Better AI Prompts: The Bracket Method",
    excerpt: "The simple system that consistently produces professional-grade AI output — and why most prompts fail.",
    category: "Getting Started", readTime: "5 min",
    related: ["claude-prompting-guide-professionals", "context-engineering-guide"],
  },
  "ai-vs-copywriter": {
    title: "AI vs. Copywriter: Should You Hire a Human or Use AI in 2026?",
    excerpt: "An honest breakdown of where AI wins, where humans win, and the hybrid approach most businesses should use.",
    category: "Deep Dive", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "ai-replacing-knowledge-workers"],
  },
  "ai-prompts-electricians": {
    title: "AI Prompts for Electricians: Work Smarter, Quote Faster, Communicate Better",
    excerpt: "The best AI prompts for electricians — estimates, inspection reports, client follow-ups, apprentice training, and social media content.",
    category: "Trades & Field Work", readTime: "6 min",
    related: ["ai-prompts-contractors", "how-to-write-better-ai-prompts"],
  },
  "ai-prompts-nurses": {
    title: "AI Prompts for Nurses: Save Time on Documentation, Education, and Communication",
    excerpt: "How nurses are using ChatGPT and Claude for patient education, SBAR handoffs, care plans, NCLEX prep, and performance reviews.",
    category: "Healthcare", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "workshift-ai-skills-knowledge-workers"],
  },
  "ai-prompts-accountants": {
    title: "AI Prompts for Accountants and CPAs: Stop Writing, Start Advising",
    excerpt: "The best AI prompts for accountants — client advisory emails, tax planning letters, engagement templates, and firm marketing content.",
    category: "Finance", readTime: "6 min",
    related: ["ai-prompts-financial-advisors", "how-to-write-better-ai-prompts"],
  },
  "ai-prompts-lawyers": {
    title: "AI Prompts for Lawyers: Draft Faster, Research Smarter, Communicate Clearly",
    excerpt: "How lawyers are using AI for client correspondence, demand letters, engagement templates, and legal marketing — with important caveats.",
    category: "Legal", readTime: "6 min",
    related: ["ai-skills-for-lawyers", "how-to-write-better-ai-prompts"],
  },
  "ai-prompts-consultants": {
    title: "AI Prompts for Consultants: Deliver More, Write Less",
    excerpt: "How consultants use AI to write proposals, case studies, executive summaries, workshop agendas, and thought leadership content faster.",
    category: "Professional Services", readTime: "7 min",
    related: ["how-to-write-better-ai-prompts", "ai-replacing-knowledge-workers"],
  },
  "ai-prompts-architects": {
    title: "AI Prompts for Architects: Write Faster, Present Better, Win More Projects",
    excerpt: "AI prompts for architects covering design narratives, project proposals, award submissions, client communication, and firm marketing.",
    category: "Design & Creative", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "ai-prompts-consultants"],
  },
  "ai-prompts-freelancers": {
    title: "AI Prompts for Freelancers: Win More Clients, Deliver Faster, Earn More",
    excerpt: "The best AI prompts for freelancers — proposals, SOWs, rate increase emails, case studies, client communication, and LinkedIn content.",
    category: "Freelance & Independent Work", readTime: "7 min",
    related: ["how-to-write-better-ai-prompts", "best-ai-tools-small-business"],
  },
  "ai-prompts-project-managers": {
    title: "AI Prompts for Project Managers: Less Admin, More Delivery",
    excerpt: "AI prompts for project managers — project charters, status reports, risk registers, escalation emails, and retrospective guides.",
    category: "Project Management", readTime: "6 min",
    related: ["chatgpt-prompts-product-managers", "how-to-write-better-ai-prompts"],
  },
  "ai-prompts-social-media-managers": {
    title: "AI Prompts for Social Media Managers: Create More, Scroll Less",
    excerpt: "How social media managers use AI to batch content, repurpose blog posts, write ad copy, manage communities, and report results.",
    category: "Marketing & Content", readTime: "7 min",
    related: ["ai-prompts-marketers", "how-to-write-better-ai-prompts"],
  },
  "ai-prompts-coaches": {
    title: "AI Prompts for Coaches: Scale Your Impact Without Burning Out",
    excerpt: "AI prompts for coaches covering discovery calls, client intake, session follow-ups, journaling prompts, course content, and marketing.",
    category: "Coaching & Training", readTime: "7 min",
    related: ["how-to-write-better-ai-prompts", "workshift-ai-skills-knowledge-workers"],
  },
  "ai-prompts-writers": {
    title: "AI Prompts for Writers and Content Creators: Produce More, Get Blocked Less",
    excerpt: "How writers use AI to beat writer's block, write better outlines, improve drafts, pitch editors, and handle client communication.",
    category: "Writing & Content", readTime: "7 min",
    related: ["ai-vs-copywriter", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-ux-designers": {
    title: "ChatGPT Prompts for UX Designers: Research, Writing, and Thinking Faster",
    excerpt: "AI prompts for UX designers — discussion guides, research synthesis, report writing, microcopy, portfolio case studies, and more.",
    category: "Design & Product", readTime: "7 min",
    related: ["how-to-write-better-ai-prompts", "chatgpt-prompts-product-managers"],
  },
  "ai-prompts-operations-managers": {
    title: "AI Prompts for Operations Managers: Document More, Firefight Less",
    excerpt: "How operations managers use AI to write SOPs, process improvement memos, vendor emails, incident reports, and onboarding plans.",
    category: "Operations", readTime: "6 min",
    related: ["how-to-write-better-ai-prompts", "best-ai-tools-small-business"],
  },
  // ── chatgpt-prompts series ──
  "chatgpt-prompts-real-estate-agents": {
    title: "ChatGPT Prompts for Real Estate Agents: Listings, Client Comms, and Marketing",
    excerpt: "How real estate agents use ChatGPT to write MLS listings, follow-up emails, social content, and handle every stage of the client relationship.",
    category: "By Profession", readTime: "9 min",
    related: ["ai-prompts-real-estate-agents", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-scrum-masters": {
    title: "ChatGPT Prompts for Scrum Masters: Ceremonies, Stakeholders, and Team Health",
    excerpt: "Structured AI prompts for Scrum Masters — retrospectives, sprint reviews, impediment logs, stakeholder updates, and coaching conversations.",
    category: "By Profession", readTime: "9 min",
    related: ["chatgpt-prompts-product-managers", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-marketers": {
    title: "ChatGPT Prompts for Marketers: Campaigns, Copy, and Content Strategy",
    excerpt: "How marketers use ChatGPT for positioning, campaign briefs, email sequences, social content, and reporting — with structured prompt templates.",
    category: "By Profession", readTime: "9 min",
    related: ["ai-prompts-marketers", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-sales-reps": {
    title: "ChatGPT Prompts for Sales Reps: Prospecting, Objections, and Closing",
    excerpt: "How sales reps use ChatGPT to write cold outreach, prepare for discovery calls, handle objections, and follow up more effectively.",
    category: "By Profession", readTime: "9 min",
    related: ["ai-prompts-sales-reps", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-ux-researchers": {
    title: "ChatGPT Prompts for UX Researchers: Discussion Guides, Synthesis, and Reports",
    excerpt: "How UX researchers use ChatGPT to write discussion guides, screener surveys, affinity maps, research reports, and stakeholder presentations.",
    category: "By Profession", readTime: "9 min",
    related: ["chatgpt-prompts-ux-designers", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-financial-advisors": {
    title: "ChatGPT Prompts for Financial Advisors: Client Comms, Reviews, and Planning",
    excerpt: "How financial advisors use ChatGPT to write client letters, quarterly reviews, planning summaries, and compliant marketing content.",
    category: "By Profession", readTime: "9 min",
    related: ["ai-prompts-financial-advisors", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-teachers": {
    title: "ChatGPT Prompts for Teachers: Lesson Plans, Assessments, and Parent Communication",
    excerpt: "How teachers use ChatGPT to plan lessons, write assessments, draft parent emails, create rubrics, and generate differentiated materials.",
    category: "By Profession", readTime: "9 min",
    related: ["ai-prompts-teachers", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-managers": {
    title: "ChatGPT Prompts for Managers: Lead Better, Write Less",
    excerpt: "How managers use ChatGPT for 1:1 agendas, performance reviews, team communications, OKR write-ups, and difficult conversations.",
    category: "Leadership", readTime: "9 min",
    related: ["how-to-train-team-on-ai", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-executive-assistants": {
    title: "ChatGPT Prompts for Executive Assistants: Do More in Less Time",
    excerpt: "How executive assistants use ChatGPT to draft executive communications, manage schedules, prepare briefings, and handle complex logistics.",
    category: "By Profession", readTime: "9 min",
    related: ["how-to-write-better-ai-prompts", "workshift-ai-skills-knowledge-workers"],
  },
  "chatgpt-prompts-startup-founders": {
    title: "ChatGPT Prompts for Startup Founders: Fundraising, GTM, Hiring, and Investor Comms",
    excerpt: "How startup founders use ChatGPT for investor updates, cold outreach, hiring, go-to-market writing, and the communications work that never stops.",
    category: "Startups", readTime: "10 min",
    related: ["how-to-write-better-ai-prompts", "ai-replacing-knowledge-workers"],
  },
  "chatgpt-prompts-business-owners": {
    title: "ChatGPT Prompts for Business Owners: Run Your Business Faster",
    excerpt: "How small business owners use ChatGPT for operations, marketing, customer communication, hiring, and the daily writing work that eats their time.",
    category: "By Profession", readTime: "9 min",
    related: ["best-ai-tools-small-business", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-customer-success-managers": {
    title: "ChatGPT Prompts for Customer Success Managers: Retain More, Expand Faster",
    excerpt: "How CSMs use ChatGPT for onboarding, QBRs, at-risk outreach, expansion conversations, and the communications that drive retention.",
    category: "By Profession", readTime: "9 min",
    related: ["ai-prompts-customer-success", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-graphic-designers": {
    title: "ChatGPT Prompts for Graphic Designers: Briefs, Proposals, and Client Communication",
    excerpt: "How graphic designers use ChatGPT to write creative briefs, proposals, client feedback responses, portfolio copy, and project documentation.",
    category: "Design & Creative", readTime: "8 min",
    related: ["chatgpt-prompts-ux-designers", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-event-planners": {
    title: "ChatGPT Prompts for Event Planners: Proposals, Logistics, and Vendor Communication",
    excerpt: "How event planners use ChatGPT to write event proposals, run-of-show documents, vendor briefs, client updates, and post-event reports.",
    category: "By Profession", readTime: "8 min",
    related: ["how-to-write-better-ai-prompts", "ai-prompts-project-managers"],
  },
  "chatgpt-prompts-customer-support": {
    title: "ChatGPT Prompts for Customer Support: Faster Replies, Happier Customers",
    excerpt: "How customer support teams use ChatGPT to write response templates, escalation scripts, FAQ docs, and training materials that improve CSAT.",
    category: "By Profession", readTime: "8 min",
    related: ["ai-prompts-customer-success", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-data-analysts": {
    title: "ChatGPT Prompts for Data Analysts: SQL, Reports, Stakeholder Comms, and Insight Narratives",
    excerpt: "How data analysts use ChatGPT to write SQL queries, turn findings into narratives, communicate with stakeholders, and document their work.",
    category: "Data & Analytics", readTime: "10 min",
    related: ["how-to-write-better-ai-prompts", "context-engineering-guide"],
  },
  "chatgpt-prompts-insurance-agents": {
    title: "ChatGPT Prompts for Insurance Agents: Proposals, Client Comms, Claims, and Marketing",
    excerpt: "How insurance agents use ChatGPT to write proposals, explain coverage, handle claims communication, and market their practice.",
    category: "By Profession", readTime: "9 min",
    related: ["how-to-write-better-ai-prompts", "ai-prompts-financial-advisors"],
  },
  "chatgpt-prompts-job-seekers": {
    title: "ChatGPT Prompts for Job Seekers: Cover Letters, Interview Prep, LinkedIn, and Salary Negotiation",
    excerpt: "How job seekers use ChatGPT to write tailored cover letters, prepare for interviews, craft LinkedIn outreach, and negotiate offers.",
    category: "Career", readTime: "10 min",
    related: ["chatgpt-prompts-linkedin", "how-to-write-better-ai-prompts"],
  },
  "chatgpt-prompts-linkedin": {
    title: "ChatGPT Prompts for LinkedIn: Profile, Posts, Outreach, and Thought Leadership",
    excerpt: "How professionals use ChatGPT to optimize their LinkedIn profile, write posts that get engagement, craft outreach that gets replies, and build a consistent content strategy.",
    category: "Social & Personal Brand", readTime: "10 min",
    related: ["chatgpt-prompts-job-seekers", "how-to-write-better-ai-prompts"],
  },
};

async function getPostContent(slug: string): Promise<string | null> {
  const filePath = join(process.cwd(), "src/content/blog", `${slug}.md`);
  if (!existsSync(filePath)) return null;
  const raw = readFileSync(filePath, "utf8");
  // Strip the first line if it's the meta description comment
  // Strip meta description line at top if present
  const lines = raw.split("\n");
  const startIdx = lines.findIndex((l) => !l.startsWith("Meta description:") && !l.startsWith("<!--") && l.trim() !== "");
  const withoutMeta = lines.slice(startIdx >= 0 ? startIdx : 0).join("\n");
  const result = await remark().use(remarkGfm).use(remarkHtml).process(withoutMeta);
  return result.toString();
}

export async function generateStaticParams() {
  const blogDir = join(process.cwd(), "src/content/blog");
  try {
    return readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ slug: f.replace(/\.md$/, "") }));
  } catch {
    return Object.keys(POST_META).map((slug) => ({ slug }));
  }
}

function getFallbackMeta(slug: string): { title: string; excerpt: string; category: string; readTime: string; related: string[] } {
  // Derive a readable title from the slug
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title,
    excerpt: `AI prompt templates and strategies for ${title.toLowerCase()}.`,
    category: "By Profession",
    readTime: "8 min",
    related: ["how-to-write-better-ai-prompts"],
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = POST_META[slug] ?? getFallbackMeta(slug);
  return {
    title: `${meta.title} | Workshift`,
    description: meta.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = POST_META[slug] ?? getFallbackMeta(slug);

  const content = await getPostContent(slug);
  if (!content) notFound();

  const relatedPosts = (meta.related || [])
    .map((s) => ({ slug: s, ...POST_META[s] }))
    .filter(Boolean);

  const schema = articleSchema({ title: meta.title, excerpt: meta.excerpt, slug, date: "2026-03-10" });

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#8898aa] hover:text-[#0a2540] transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All articles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="purple">{meta.category}</Badge>
            <span className="text-[#8898aa] text-sm">{meta.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] leading-tight tracking-tight">{meta.title}</h1>
          <p className="mt-4 text-lg text-[#425466] leading-relaxed">{meta.excerpt}</p>
        </div>

        <hr className="border-[#e6ebf1] mb-10" />

        {/* Body */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-extrabold prose-headings:text-[#0a2540] prose-headings:tracking-tight prose-p:text-[#425466] prose-p:leading-relaxed prose-a:text-[#635bff] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0a2540] prose-code:bg-[#f6f9fc] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[#635bff] prose-code:font-mono prose-code:text-sm prose-blockquote:border-[#635bff] prose-blockquote:bg-[#f6f9fc] prose-blockquote:not-italic prose-li:text-[#425466]"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Toolkit CTA */}
        <div className="mt-16 bg-[#0a2540] rounded-xl p-8 text-center">
          <p className="text-sm font-semibold text-[#635bff] uppercase tracking-widest mb-3">Workshift Toolkits</p>
          <h2 className="text-2xl font-extrabold text-white mb-3">Get the done-for-you prompt toolkit for your role.</h2>
          <p className="text-[#8898aa] mb-6">Fill-in-the-bracket prompts built for your exact profession. One-time purchase, instant download.</p>
          <Button href="/toolkits" variant="primary">Browse all toolkits</Button>
        </div>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-extrabold text-[#0a2540] mb-4">Related articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((post) => post && (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white border border-[#e6ebf1] rounded-xl p-5 hover:border-[#635bff]/30 hover:shadow-sm transition-all">
                  <Badge className="mb-2">{post.category}</Badge>
                  <h4 className="font-semibold text-[#0a2540] group-hover:text-[#635bff] transition-colors text-sm leading-snug">{post.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
