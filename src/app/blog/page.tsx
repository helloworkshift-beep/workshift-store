import Link from "next/link";
import Footer from "@/components/Footer";

const POSTS = [
  {
    slug: "ai-replacing-knowledge-workers",
    title: "AI Isn't Replacing Knowledge Workers — It's Replacing the Ones Who Don't Adapt",
    excerpt: "What the research actually says about AI and knowledge work, which tasks are most at risk, and what to do in the next 90 days.",
    category: "The Workshift",
    readTime: "8 min",
    date: "March 2026",
  },
  {
    slug: "how-to-use-claude-for-work",
    title: "How to Use Claude for Work: A Complete Guide for Professionals",
    excerpt: "Setting up your first Project, writing effective prompts for professional tasks, and 5 workflows to start today.",
    category: "Getting Started",
    readTime: "7 min",
    date: "March 2026",
  },
  {
    slug: "context-engineering-guide",
    title: "Context Engineering: The Skill That Separates Good from Great AI Users",
    excerpt: "Most professionals plateau at prompting. Context engineering is what takes you past that ceiling.",
    category: "Deep Dive",
    readTime: "9 min",
    date: "March 2026",
  },
  {
    slug: "claude-prompting-guide-professionals",
    title: "The Professional's Guide to Prompting Claude: From Basic to Expert",
    excerpt: "Why most professional prompts fail — and 15 production-ready templates you can use today.",
    category: "Prompting",
    readTime: "12 min",
    date: "March 2026",
  },
  {
    slug: "workshift-ai-skills-knowledge-workers",
    title: "The 7 AI Skills Every Knowledge Worker Needs in 2026",
    excerpt: "The specific capabilities that separate AI-native professionals from everyone else — and how to build each one.",
    category: "Skills",
    readTime: "10 min",
    date: "March 2026",
  },
  {
    slug: "agentic-thinking-guide",
    title: "Agentic Thinking: How to Design AI Workflows That Run Themselves",
    excerpt: "Stop thinking in messages. Start designing systems. The framework for non-technical professionals.",
    category: "Advanced",
    readTime: "9 min",
    date: "March 2026",
  },
  {
    slug: "claude-vs-chatgpt-for-work",
    title: "Claude vs. ChatGPT for Professional Work: An Honest Comparison",
    excerpt: "No hype. A straightforward comparison of what each tool does better for knowledge workers.",
    category: "Tools",
    readTime: "8 min",
    date: "March 2026",
  },
  {
    slug: "ai-skills-for-lawyers",
    title: "How Lawyers Can Use AI to Work Smarter (Without the Risk)",
    excerpt: "Contract review, research, drafting, and client communication — with the guardrails that matter.",
    category: "By Profession",
    readTime: "9 min",
    date: "March 2026",
  },
  {
    slug: "how-to-train-team-on-ai",
    title: "How to Actually Train Your Team on AI (That Sticks)",
    excerpt: "Why most AI training fails, and the 4-step method that actually changes how people work.",
    category: "Leadership",
    readTime: "8 min",
    date: "March 2026",
  },
  {
    slug: "90-day-ai-transformation",
    title: "The 90-Day Plan to Become an AI-Native Professional",
    excerpt: "A month-by-month roadmap from occasional AI user to genuinely transformed professional.",
    category: "Action Plan",
    readTime: "9 min",
    date: "March 2026",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "The Workshift": "bg-amber-100 text-amber-700",
  "Getting Started": "bg-blue-100 text-blue-700",
  "Deep Dive": "bg-purple-100 text-purple-700",
  "Prompting": "bg-green-100 text-green-700",
  "Skills": "bg-teal-100 text-teal-700",
  "Advanced": "bg-rose-100 text-rose-700",
  "Tools": "bg-gray-100 text-gray-700",
  "By Profession": "bg-orange-100 text-orange-700",
  "Leadership": "bg-indigo-100 text-indigo-700",
  "Action Plan": "bg-emerald-100 text-emerald-700",
};

export const metadata = {
  title: "Workshift Blog — AI for Knowledge Workers",
  description: "Practical guides on using Claude and AI to transform how you work. Prompting, context engineering, agentic workflows, and more.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <nav className="bg-[#1c3557] px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-[#c9a84c] font-bold text-lg">Workshift</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/toolkits" className="text-white/70 hover:text-white transition-colors">Toolkits</Link>
          <Link href="/course" className="text-white/70 hover:text-white transition-colors">Course</Link>
        </div>
      </nav>

      <section className="bg-[#1c3557] text-white px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">The Workshift Blog</h1>
          <p className="text-white/60 text-lg">Practical guides on AI for knowledge workers. No hype — just what actually works.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Featured post */}
          <div className="mb-12">
            <Link href={`/blog/${POSTS[0].slug}`} className="group block bg-white border border-[#ede8df] rounded-2xl p-8 hover:border-[#c9a84c] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[POSTS[0].category]}`}>{POSTS[0].category}</span>
                <span className="text-gray-400 text-sm">{POSTS[0].readTime} read</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1c3557] mb-3 group-hover:text-[#c9a84c] transition-colors leading-snug">{POSTS[0].title}</h2>
              <p className="text-gray-600 leading-relaxed">{POSTS[0].excerpt}</p>
              <div className="mt-4 text-[#c9a84c] text-sm font-medium">Read article →</div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {POSTS.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white border border-[#ede8df] rounded-xl p-6 hover:border-[#c9a84c] transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] || "bg-gray-100 text-gray-600"}`}>{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-[#1c3557] mb-2 group-hover:text-[#c9a84c] transition-colors leading-snug">{post.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#1c3557] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to go deeper?</h2>
          <p className="text-white/60 mb-6">The Workshift Course covers everything on this blog — and a lot more — in a structured beginner-to-advanced curriculum.</p>
          <Link href="/course" className="inline-block bg-[#c9a84c] text-[#1c3557] font-bold px-8 py-3.5 rounded-xl hover:bg-[#c9a84c]/90 transition-colors">
            See the course →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
