import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="relative bg-[#0a2540] overflow-hidden py-24 px-6">
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 100% 50%, #635bff 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Stop writing from scratch.
          </h2>
          <p className="text-lg text-[#8898aa] mb-10 leading-relaxed">
            Every listing, every proposal, every client email — there&apos;s a prompt for it.
            From $47. One-time. Yours forever.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/toolkits"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#635bff] hover:bg-[#7c75ff] text-white font-medium text-base transition-colors"
            >
              Browse all toolkits
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium text-base transition-colors"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
