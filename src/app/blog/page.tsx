import Link from "next/link";
import Footer from "@/components/Footer";
import { PageHero, Section, Container, Badge, Button } from "@/components/ui";

const POSTS = [
  { slug: "ai-replacing-knowledge-workers", title: "AI Isn't Replacing Knowledge Workers — It's Replacing the Ones Who Don't Adapt", excerpt: "What the research actually says about AI and knowledge work, which tasks are most at risk, and what to do in the next 90 days.", category: "The Workshift", readTime: "8 min", date: "March 2026" },
  { slug: "how-to-use-claude-for-work", title: "How to Use Claude for Work: A Complete Guide for Professionals", excerpt: "Setting up your first Project, writing effective prompts for professional tasks, and 5 workflows to start today.", category: "Getting Started", readTime: "7 min", date: "March 2026" },
  { slug: "context-engineering-guide", title: "Context Engineering: The Skill That Separates Good from Great AI Users", excerpt: "Most professionals plateau at prompting. Context engineering is what takes you past that ceiling.", category: "Deep Dive", readTime: "9 min", date: "March 2026" },
  { slug: "claude-prompting-guide-professionals", title: "The Professional's Guide to Prompting Claude: From Basic to Expert", excerpt: "Why most professional prompts fail — and 15 production-ready templates you can use today.", category: "Prompting", readTime: "12 min", date: "March 2026" },
  { slug: "workshift-ai-skills-knowledge-workers", title: "The 7 AI Skills Every Knowledge Worker Needs in 2026", excerpt: "The specific capabilities that separate AI-native professionals from everyone else — and how to build each one.", category: "Skills", readTime: "10 min", date: "March 2026" },
  { slug: "agentic-thinking-guide", title: "Agentic Thinking: How to Design AI Workflows That Run Themselves", excerpt: "Stop thinking in messages. Start designing systems. The framework for non-technical professionals.", category: "Advanced", readTime: "9 min", date: "March 2026" },
  { slug: "claude-vs-chatgpt-for-work", title: "Claude vs. ChatGPT for Professional Work: An Honest Comparison", excerpt: "No hype. A straightforward comparison of what each tool does better for knowledge workers.", category: "Tools", readTime: "8 min", date: "March 2026" },
  { slug: "ai-skills-for-lawyers", title: "How Lawyers Can Use AI to Work Smarter (Without the Risk)", excerpt: "Contract review, research, drafting, and client communication — with the guardrails that matter.", category: "By Profession", readTime: "9 min", date: "March 2026" },
  { slug: "how-to-train-team-on-ai", title: "How to Actually Train Your Team on AI (That Sticks)", excerpt: "Why most AI training fails, and the 4-step method that actually changes how people work.", category: "Leadership", readTime: "8 min", date: "March 2026" },
  { slug: "90-day-ai-transformation", title: "The 90-Day Plan to Become an AI-Native Professional", excerpt: "A month-by-month roadmap from occasional AI user to genuinely transformed professional.", category: "Action Plan", readTime: "9 min", date: "March 2026" },
];

export const metadata = {
  title: "Workshift Blog — AI for Knowledge Workers",
  description: "Practical guides on using Claude and AI to transform how you work.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Blog"
        title="Practical AI for professionals."
        subtitle="No hype — just what actually works. Guides, frameworks, and honest takes on using AI at work."
        centered
      />

      <Section bg="gray" border>
        <Container>
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className="group block bg-white border border-[#e6ebf1] rounded-xl p-8 hover:border-[#635bff]/30 hover:shadow-md transition-all mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="purple">{featured.category}</Badge>
              <span className="text-sm text-[#8898aa]">{featured.readTime} read · {featured.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0a2540] mb-3 group-hover:text-[#635bff] transition-colors leading-snug">{featured.title}</h2>
            <p className="text-[#425466] leading-relaxed mb-4">{featured.excerpt}</p>
            <span className="text-sm text-[#635bff] font-medium">Read article →</span>
          </Link>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white border border-[#e6ebf1] rounded-xl p-6 hover:border-[#635bff]/30 hover:shadow-sm transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Badge>{post.category}</Badge>
                  <span className="text-xs text-[#8898aa]">{post.readTime}</span>
                </div>
                <h2 className="font-semibold text-[#0a2540] mb-2 group-hover:text-[#635bff] transition-colors leading-snug">{post.title}</h2>
                <p className="text-[#425466] text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <Container size="sm" className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Ready to go deeper?</h2>
          <p className="text-[#8898aa] mb-8 text-lg">The Workshift Course covers everything in a structured beginner-to-advanced curriculum.</p>
          <Button href="/course" variant="primary">See the course</Button>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
