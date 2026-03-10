import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[580px] flex items-center">
      {/* Aurora gradient */}
      <div className="aurora" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          {/* Overline */}
          <p className="text-sm font-medium text-[#635bff] mb-6 tracking-wide uppercase">
            AI Prompt Toolkits
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#0a2540] leading-[1.05] tracking-tight mb-6">
            The AI skills platform for professionals.
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#425466] leading-relaxed mb-10 max-w-xl">
            Done-for-you prompt toolkits for every profession. Copy a prompt,
            fill in the brackets, get professional results in under 8 minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/toolkits"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#635bff] hover:bg-[#5145e5] text-white font-medium text-base transition-colors shadow-sm"
            >
              Browse all toolkits
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/toolkits"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#e6ebf1] bg-white hover:border-[#c5cfe0] text-[#425466] font-medium text-base transition-colors"
            >
              See what&apos;s inside
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-[#8898aa]">
            Works with ChatGPT, Claude &amp; Gemini &nbsp;·&nbsp; One-time purchase, no subscription &nbsp;·&nbsp; Instant download
          </p>
        </div>
      </div>
    </section>
  );
}
