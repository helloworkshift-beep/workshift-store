import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { PageHero, Section, Container, Button, Badge, H2, H3, Lead, Muted, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Workshift Course — AI for Knowledge Workers",
  description: "A structured course for professionals who want to use Claude and AI at work. 60+ lessons, exercises, and real-world prompt patterns.",
};

const MODULES = [
  {
    track: "Track 1 — Foundations",
    modules: [
      { num: "01", title: "How AI Actually Works", desc: "The mental model every professional needs — without the jargon.", lessons: 6 },
      { num: "02", title: "Your First Great Prompts", desc: "From vague requests to professional-grade output. Before/after examples from law, finance, marketing, and HR.", lessons: 7 },
      { num: "03", title: "Claude for Daily Work", desc: "Practical wins in week one. Document work, writing, analysis, and problem-solving — with role-specific patterns.", lessons: 6 },
    ],
  },
  {
    track: "Track 2 — Professional Mastery",
    modules: [
      { num: "04", title: "Prompt Engineering Mastery", desc: "Few-shot, chain-of-thought, XML structure, extended thinking, and prompt chaining — with professional examples.", lessons: 8 },
      { num: "05", title: "Context Engineering", desc: "The skill most professionals plateau at. How to architect information so AI performs at its ceiling.", lessons: 8 },
      { num: "06", title: "Claude's Advanced Capabilities", desc: "Claude Projects, long document analysis, vision, artifacts. The full ceiling of what Claude can do for knowledge workers.", lessons: 6 },
    ],
  },
  {
    track: "Track 3 — Agentic Mastery",
    modules: [
      { num: "07", title: "Agentic Thinking", desc: "Stop thinking in messages. Start designing systems. The framework for decomposing complex work into AI-native workflows.", lessons: 7 },
      { num: "08", title: "Building AI-Native Workflows", desc: "From concept to running system. No-code tools, pipeline design, error handling, and measuring impact.", lessons: 7 },
      { num: "09", title: "The AI-Native Professional", desc: "What it looks like to work as an AI-native professional. Your personal toolkit and the honest future of your profession.", lessons: 6 },
      { num: "10", title: "Leading the Workshift", desc: "From AI user to AI leader. Bring colleagues along, measure impact, and shape how your organization adapts.", lessons: 7 },
    ],
  },
];

const INCLUDED = [
  { title: "60+ interactive lessons", desc: "Read, reflect, and practice — in your browser, at your own pace." },
  { title: "Exercises in every module", desc: "Text-based exercises saved to your browser so you can return anytime." },
  { title: "Prompt patterns cheat sheet", desc: "30+ proven templates you can copy directly into your work." },
  { title: "50 professional prompts", desc: "Ready-to-use prompts for legal, finance, HR, marketing, consulting, and management." },
  { title: "Professional glossary", desc: "50+ AI terms explained in plain English — no PhD required." },
  { title: "90-day adoption plan", desc: "A structured template to go from first lesson to transformed workflow." },
  { title: "Progress tracking", desc: "Your completion saves automatically. Pick up exactly where you left off." },
  { title: "Lifetime access", desc: "Pay once. Course updates included. No subscription, ever." },
];

const FAQS = [
  { q: "Who is this for?", a: "Any knowledge worker — lawyers, accountants, consultants, marketers, HR professionals, analysts, managers — who wants to work significantly better with AI. No technical background required." },
  { q: "Do I need a Claude subscription?", a: "The free tier works for the fundamentals. Claude Pro or Team unlocks the advanced features covered in Tracks 2 and 3." },
  { q: "How long does it take?", a: "About 25–30 hours total. Most professionals complete Track 1 in a weekend, then work through Tracks 2 and 3 over 4–6 weeks." },
  { q: "Does this apply to other AI tools too?", a: "Yes. The fundamentals — prompting, context engineering, agentic thinking — apply across all major AI tools. We teach through Claude because it's the best for professional knowledge work, but the skills transfer." },
  { q: "What if I'm a complete beginner?", a: "Track 1 starts from zero. By the end of Module 1, you'll have a solid mental model. By the end of Track 1, you'll be getting professional-grade output consistently." },
  { q: "Is there a refund policy?", a: "Yes. Complete the first module and email us within 14 days if it's not what you expected. Full refund, no questions." },
];

const ROLES = ["Lawyers", "Accountants", "Consultants", "Marketers", "HR Professionals", "Financial Analysts", "Project Managers", "Designers", "Operations Managers", "Business Analysts", "Executive Assistants", "Team Leaders"];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,91,255,0.07) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="max-w-2xl">
            <Eyebrow>The Workshift Course</Eyebrow>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0a2540] leading-[1.05] tracking-tight mb-6">
              Go from AI user<br />to AI-native.
            </h1>
            <Lead className="mb-10 max-w-xl">
              The complete course for professionals who want to stop dabbling and start working in a genuinely new way. 10 modules, 60+ lessons, beginner to advanced.
            </Lead>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button href="/api/checkout?product=course" size="lg">Enroll now — $297</Button>
              <Button href="/course/access" variant="secondary" size="lg">Already enrolled →</Button>
            </div>
            <Muted>Lifetime access · 14-day refund guarantee · No subscription</Muted>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-[#e6ebf1] bg-[#f6f9fc]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#e6ebf1]">
            {[
              { value: "10", label: "Modules across 3 tracks" },
              { value: "60+", label: "Interactive lessons" },
              { value: "25–30h", label: "Total learning time" },
              { value: "$297", label: "One-time, lifetime access" },
            ].map((s) => (
              <div key={s.value} className="lg:px-8 first:pl-0 last:pr-0">
                <div className="text-4xl font-extrabold text-[#0a2540] tracking-tight mb-1">{s.value}</div>
                <Muted>{s.label}</Muted>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <Section bg="white">
        <Container>
          <div className="mb-10">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <H2 className="mb-3">Built for every knowledge professional.</H2>
            <Lead>If your job involves thinking, writing, analysing, or deciding — this course is for you.</Lead>
          </div>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <Badge key={role} variant="default" className="px-4 py-1.5 text-sm">{role}</Badge>
            ))}
          </div>
        </Container>
      </Section>

      {/* Curriculum */}
      <Section bg="gray" border>
        <Container>
          <div className="mb-12">
            <Eyebrow>The curriculum</Eyebrow>
            <H2 className="mb-3">Three tracks. Ten modules.</H2>
            <Lead>Start from zero, end up transforming how you work.</Lead>
          </div>

          <div className="space-y-12">
            {MODULES.map((track) => (
              <div key={track.track}>
                <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-4">{track.track}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {track.modules.map((mod) => (
                    <div key={mod.num} className="bg-white border border-[#e6ebf1] rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-extrabold text-[#e6ebf1] leading-none flex-shrink-0 mt-0.5">{mod.num}</span>
                        <div>
                          <H3 className="mb-1.5 text-base">{mod.title}</H3>
                          <p className="text-[#425466] text-sm leading-relaxed mb-3">{mod.desc}</p>
                          <Muted>{mod.lessons} lessons</Muted>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section bg="white">
        <Container>
          <div className="mb-12">
            <Eyebrow>What&apos;s included</Eyebrow>
            <H2>Everything you need to transform how you work.</H2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED.map((item) => (
              <div key={item.title}>
                <div className="w-8 h-px bg-[#635bff] mb-4" />
                <H3 className="text-base mb-2">{item.title}</H3>
                <Muted>{item.desc}</Muted>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section bg="gray" border>
        <Container size="sm">
          <div className="text-center mb-10">
            <Eyebrow>Pricing</Eyebrow>
            <H2 className="mb-3">One price. Lifetime access.</H2>
            <Lead>No subscription. No upsells. Everything included.</Lead>
          </div>
          <div className="bg-white border border-[#e6ebf1] rounded-xl p-8 shadow-sm max-w-md mx-auto">
            <div className="text-5xl font-extrabold text-[#0a2540] mb-1">$297</div>
            <Muted className="mb-6">one-time payment</Muted>
            <ul className="space-y-3 mb-8">
              {["10 modules, 60+ lessons", "Interactive exercises in every module", "Prompt patterns cheat sheet (30+ templates)", "50 professional prompts across 6 roles", "90-day adoption plan template", "Progress tracking — never lose your place", "Lifetime access + all future updates"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#425466]">
                  <svg className="w-4 h-4 text-[#635bff] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/api/checkout?product=course"
              className="block w-full text-center py-3 rounded-md bg-[#635bff] hover:bg-[#5145e5] text-white font-semibold text-base transition-colors"
            >
              Enroll now — $297
            </a>
            <Muted className="mt-3 text-center">14-day refund guarantee · Instant access</Muted>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <Container size="md">
          <div className="mb-10">
            <Eyebrow>FAQ</Eyebrow>
            <H2>Common questions.</H2>
          </div>
          <div className="divide-y divide-[#e6ebf1]">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-6">
                <H3 className="text-base mb-2">{faq.q}</H3>
                <p className="text-[#425466] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="relative bg-[#0a2540] overflow-hidden py-24 px-6">
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: "radial-gradient(ellipse 80% 80% at 100% 50%, #635bff 0%, transparent 60%)" }} />
        <Container size="sm" className="relative z-10 text-center">
          <H2 className="text-white mb-4">The shift is already happening.</H2>
          <p className="text-[#8898aa] mb-10 text-lg leading-relaxed">The question isn&apos;t whether AI will change your work. It&apos;s whether you&apos;ll be ahead of it or behind it.</p>
          <Button href="/api/checkout?product=course" size="lg">Start the Workshift Course — $297</Button>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
