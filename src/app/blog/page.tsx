import Link from "next/link";
import Footer from "@/components/Footer";
import { PageHero, Section, Container, Badge } from "@/components/ui";
import { getAllPosts } from "@/lib/blog-meta";

export const metadata = {
  title: "Workshift Blog — AI for Knowledge Workers",
  description: "Practical guides on using Claude and ChatGPT to work smarter. AI prompts, workflows, and strategies for every profession.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Blog"
        title="Practical AI for professionals."
        subtitle="No hype — just what actually works. Guides, frameworks, and prompt templates for every role."
        centered
      />

      <Section bg="gray" border>
        <Container>
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className="group block bg-white border border-[#e6ebf1] rounded-xl p-8 hover:border-[#635bff]/30 hover:shadow-md transition-all mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="purple">{featured.category}</Badge>
              <span className="text-sm text-[#8898aa]">{featured.readTime} read · March 2026</span>
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
                  <span className="text-xs text-[#8898aa]">{post.readTime} read</span>
                </div>
                <h3 className="font-semibold text-[#0a2540] mb-2 group-hover:text-[#635bff] transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-[#425466] leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#8898aa] text-sm">{posts.length} articles · Updated March 2026</p>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
