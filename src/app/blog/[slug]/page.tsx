import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import Link from "next/link";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

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
  return Object.keys(POST_META).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = POST_META[slug];
  if (!meta) return {};
  return {
    title: `${meta.title} | Workshift`,
    description: meta.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = POST_META[slug];
  if (!meta) notFound();

  const content = await getPostContent(slug);
  if (!content) notFound();

  const relatedPosts = (meta.related || [])
    .map((s) => ({ slug: s, ...POST_META[s] }))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-[#c9a84c] hover:underline">← All articles</Link>
          <div className="flex items-center gap-3 mt-4 mb-4">
            <span className="text-xs font-semibold bg-[#1c3557]/10 text-[#1c3557] px-3 py-1 rounded-full">{meta.category}</span>
            <span className="text-gray-400 text-sm">{meta.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1c3557] leading-tight">{meta.title}</h1>
        </div>

        <div
          className="prose prose-lg prose-headings:text-[#1c3557] prose-headings:font-bold prose-a:text-[#c9a84c] prose-strong:text-[#1c3557] prose-blockquote:border-[#c9a84c] prose-blockquote:bg-amber-50 prose-blockquote:py-1 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Course CTA */}
        <div className="mt-16 bg-[#1c3557] rounded-2xl p-8 text-center">
          <div className="text-[#c9a84c] text-sm font-semibold uppercase tracking-wider mb-3">The Workshift Course</div>
          <h2 className="text-2xl font-bold text-white mb-3">Go from beginner to AI-native professional</h2>
          <p className="text-white/60 mb-6">10 modules, 60+ lessons — built for every knowledge worker. Interactive, online, self-paced.</p>
          <Link href="/course" className="inline-block bg-[#c9a84c] text-[#1c3557] font-bold px-8 py-3.5 rounded-xl hover:bg-[#c9a84c]/90 transition-colors">
            See the full course →
          </Link>
        </div>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-bold text-[#1c3557] mb-4">Related articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((post) => post && (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white border border-[#ede8df] rounded-xl p-5 hover:border-[#c9a84c] transition-colors">
                  <span className="text-xs text-gray-400 block mb-1">{post.readTime} read</span>
                  <h4 className="font-semibold text-[#1c3557] group-hover:text-[#c9a84c] transition-colors text-sm leading-snug">{post.title}</h4>
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
