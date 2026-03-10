"use client";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(28,53,87,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e5e7eb] bg-[#f9fafb] text-[#6b7280] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c9a84c] inline-block" />
          7 toolkits live · Used by 500+ professionals
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#0a1628] max-w-4xl mx-auto mb-6">
          AI skills built for{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #1c3557 0%, #2a6496 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            how you actually work.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-[#6b7280] max-w-2xl mx-auto mb-10 leading-relaxed">
          Done-for-you AI prompt toolkits for knowledge workers. Copy a prompt,
          fill in the brackets, get professional results in under 8 minutes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/toolkits"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1c3557] hover:bg-[#0f2238] text-white font-semibold text-base transition-all duration-150 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Browse all toolkits
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/toolkits/real-estate"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#e5e7eb] hover:border-[#1c3557]/30 bg-white text-[#374151] font-semibold text-base transition-all duration-150 hover:-translate-y-0.5"
          >
            See what&apos;s inside →
          </Link>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#9ca3af]">
          {[
            "Works with ChatGPT & Claude",
            "No subscriptions",
            "Instant download",
            "Fill-in-the-bracket format",
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
              {i < arr.length - 1 && <span className="text-[#e5e7eb]">|</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
