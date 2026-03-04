import Link from "next/link";
import Footer from "@/components/Footer";

const MODULES = [
  {
    track: "Track 1 — Foundations",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    modules: [
      { num: "01", title: "How AI Actually Works", desc: "The mental model every professional needs — without the jargon. Understand what Claude is doing and why it works the way it does.", lessons: 6 },
      { num: "02", title: "Your First Great Prompts", desc: "From vague requests to professional-grade output. The anatomy of an effective prompt, with before/after examples from law, finance, marketing, and HR.", lessons: 7 },
      { num: "03", title: "Claude for Daily Work", desc: "Practical wins in week one. Document work, writing, analysis, problem-solving — with role-specific prompt patterns for your profession.", lessons: 6 },
    ],
  },
  {
    track: "Track 2 — Professional Mastery",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    modules: [
      { num: "04", title: "Prompt Engineering Mastery", desc: "The techniques that separate good from great. Few-shot, chain-of-thought, XML structure, extended thinking, prompt chaining — with professional examples.", lessons: 8 },
      { num: "05", title: "Context Engineering", desc: "The skill most professionals plateau at. How to architect information around AI so it performs at its ceiling for your specific work.", lessons: 8 },
      { num: "06", title: "Claude's Advanced Capabilities", desc: "Claude Projects, long document analysis, vision, artifacts. How to unlock the full ceiling of what Claude can do for knowledge workers.", lessons: 6 },
    ],
  },
  {
    track: "Track 3 — Agentic Mastery",
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    modules: [
      { num: "07", title: "Agentic Thinking", desc: "Stop thinking in messages. Start designing systems. The framework for decomposing complex professional work into AI-native workflows.", lessons: 7 },
      { num: "08", title: "Building AI-Native Workflows", desc: "From concept to running system. No-code tools, pipeline design, error handling, and measuring the impact of your automation.", lessons: 7 },
      { num: "09", title: "The AI-Native Professional", desc: "What it looks like to work as an AI-native professional. Your personal toolkit, your AI reputation, and the honest future of your profession.", lessons: 6 },
      { num: "10", title: "Leading the Workshift", desc: "Go from AI user to AI leader. Bring colleagues along, measure impact, talk to leadership, and shape how your organization adapts.", lessons: 7 },
    ],
  },
];

const INCLUDED = [
  { icon: "🎓", title: "60+ interactive lessons", desc: "Read, reflect, and practice — in your browser, at your pace" },
  { icon: "✏️", title: "Exercises in every module", desc: "Text-based exercises saved to your browser so you can return anytime" },
  { icon: "📋", title: "Prompt patterns cheat sheet", desc: "30+ proven templates you can copy directly into your work" },
  { icon: "💬", title: "50 professional prompts", desc: "Ready-to-use prompts for legal, finance, HR, marketing, consulting, and management" },
  { icon: "📖", title: "Professional glossary", desc: "50+ AI terms explained in plain English — no PhD required" },
  { icon: "📅", title: "90-day adoption plan", desc: "A structured template to go from first lesson to transformed workflow" },
  { icon: "📈", title: "Progress tracking", desc: "Your completion saves automatically. Pick up exactly where you left off." },
  { icon: "♾️", title: "Lifetime access", desc: "Pay once. Course updates included. No subscription." },
];

const FAQS = [
  { q: "Who is this for?", a: "Any knowledge worker — lawyers, accountants, consultants, marketers, HR professionals, analysts, managers, designers, project managers — who wants to work significantly better with AI. No technical background required." },
  { q: "Do I need a Claude subscription to take this course?", a: "You'll get the most from the course with a Claude.ai account (the free tier works for the fundamentals; Claude Pro or Team unlocks the advanced features covered in Tracks 2 and 3)." },
  { q: "How long does it take?", a: "The full course is about 25-30 hours of content. Most professionals complete Track 1 in a weekend, then work through Tracks 2 and 3 over 4-6 weeks at their own pace." },
  { q: "Is this just for Claude, or does it apply to other AI tools?", a: "The fundamentals — prompting, context engineering, agentic thinking — apply across all major AI tools. We teach them through Claude because it's the best tool for professional knowledge work, but the skills transfer." },
  { q: "What if I'm a complete beginner?", a: "Track 1 starts from zero. No assumptions. By the end of Module 1, you'll have a solid mental model. By the end of Track 1, you'll be getting professional-grade output consistently." },
  { q: "How is the course delivered?", a: "Entirely online — you access lessons directly in your browser after purchase. Progress saves automatically. No app to download, no software to install." },
  { q: "Is there a refund policy?", a: "Yes. If you complete the first module and it's not what you expected, email us within 14 days for a full refund. We'd rather earn your trust than keep your money." },
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Nav */}
      <nav className="bg-[#1c3557] px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#c9a84c] font-bold text-lg">Workshift</Link>
        <Link href="/course/access" className="text-white/70 hover:text-white text-sm transition-colors">Already enrolled? →</Link>
      </nav>

      {/* Hero */}
      <section className="bg-[#1c3557] text-white px-6 pb-20 pt-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            The Workshift Course
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            AI isn't replacing knowledge workers.<br />
            <span className="text-[#c9a84c]">It's replacing the ones who don't adapt.</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            The complete course for professionals who want to go from occasional AI user to genuinely AI-native — and stay ahead of the shift that's already happening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://buy.stripe.com/eVqeVf53j8lr0Nje6QgEg05"
              className="bg-[#c9a84c] text-[#1c3557] font-bold text-lg px-10 py-4 rounded-xl hover:bg-[#c9a84c]/90 transition-colors"
            >
              Enroll now — $297
            </a>
            <p className="text-white/50 text-sm">Lifetime access · 14-day refund guarantee</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <span>✓ 10 modules</span>
            <span>✓ 60+ lessons</span>
            <span>✓ Beginner to advanced</span>
            <span>✓ Every knowledge work profession</span>
            <span>✓ Exercises + resources included</span>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1c3557] mb-3">Built for every knowledge professional</h2>
          <p className="text-gray-500 mb-8">If your job involves thinking, writing, analysing, or deciding — this course is for you.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Lawyers", "Accountants", "Consultants", "Marketers", "HR Professionals", "Financial Analysts", "Project Managers", "Designers", "Operations Managers", "Business Analysts", "Executive Assistants", "Team Leaders"].map((role) => (
              <span key={role} className="bg-[#faf9f6] border border-[#ede8df] text-[#1c3557] text-sm font-medium px-4 py-2 rounded-full">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c3557] text-center mb-3">The full curriculum</h2>
          <p className="text-gray-500 text-center mb-12">Three tracks, ten modules. Start from zero, end up transforming how you work.</p>
          {MODULES.map((track) => (
            <div key={track.track} className="mb-10">
              <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${track.badge}`}>{track.track}</div>
              <div className="grid md:grid-cols-2 gap-4">
                {track.modules.map((mod) => (
                  <div key={mod.num} className={`border rounded-xl p-5 ${track.color}`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-black text-gray-300">{mod.num}</span>
                      <div>
                        <h3 className="font-bold text-[#1c3557] mb-1">{mod.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">{mod.desc}</p>
                        <span className="text-xs text-gray-400">{mod.lessons} lessons</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c3557] text-center mb-12">Everything included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED.map((item) => (
              <div key={item.title} className="bg-[#faf9f6] border border-[#ede8df] rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1c3557] mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-[#1c3557]">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">One price. Lifetime access.</h2>
          <p className="text-white/60 mb-10">No subscription. No upsells. Everything included.</p>
          <div className="bg-white rounded-2xl p-8">
            <div className="text-5xl font-black text-[#1c3557] mb-1">$297</div>
            <div className="text-gray-400 text-sm mb-6">one-time payment</div>
            <ul className="text-left space-y-3 mb-8">
              {["10 modules, 60+ lessons", "Interactive exercises in every module", "Prompt patterns cheat sheet (30+ templates)", "50 professional prompts across 6 roles", "90-day adoption plan template", "Progress tracking — never lose your place", "Lifetime access + all future updates"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c9a84c] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/eVqeVf53j8lr0Nje6QgEg05"
              className="block bg-[#1c3557] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#1c3557]/90 transition-colors text-center"
            >
              Enroll now — $297
            </a>
            <p className="text-gray-400 text-xs mt-3">14-day refund guarantee. Complete Module 1 and email us if it's not right.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1c3557] text-center mb-12">Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-[#1c3557] mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#1c3557] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">The shift is already happening.</h2>
          <p className="text-white/60 mb-8 text-lg">The question isn't whether AI will change your work. It's whether you'll be ahead of it or behind it.</p>
          <a
            href="https://buy.stripe.com/eVqeVf53j8lr0Nje6QgEg05"
            className="inline-block bg-[#c9a84c] text-[#1c3557] font-bold text-lg px-10 py-4 rounded-xl hover:bg-[#c9a84c]/90 transition-colors"
          >
            Start the Workshift Course — $297
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
