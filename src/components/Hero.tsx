"use client";

const STRIPE_LINK = "https://buy.stripe.com/00waEZ67ndFLbrXfaUgEg00";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-20 pb-20 overflow-hidden">
      {/* Subtle warm background pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #1c3557 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Top navy bar accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1c3557] via-[#c9a84c] to-[#1c3557]" />

      {/* Badge */}
      <div className="relative z-10 mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/8 text-[#8a6a1f] text-sm font-medium">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        100+ Done-for-You AI Prompts for Real Estate Agents
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl mb-6 text-[#1c3557]">
        Stop Writing From Scratch.
        <br />
        <span className="gold-gradient-text">Start Closing More Deals.</span>
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 text-center text-lg sm:text-xl text-[#4a5568] max-w-2xl mb-10 leading-relaxed">
        The only AI prompt toolkit built specifically for real estate agents.
        95+ ready-to-use prompts for listings, client emails, social content,
        and 5 complete workflow SOPs — results in under 8 minutes.
      </p>

      {/* CTA */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-14">
        <a
          href={STRIPE_LINK}
          className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1c3557] hover:bg-[#2a4f7c] text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-[#1c3557]/20 hover:shadow-[#1c3557]/30 hover:-translate-y-0.5"
        >
          Get Instant Access — $47
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-[#718096] text-sm">One-time · Instant download · Works with free AI tools</p>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[#718096] text-sm mb-16">
        {["Works with ChatGPT & Claude", "No monthly fees", "Instant ZIP download", "4–8 min per task"].map((item, i, arr) => (
          <div key={item} className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
            {i < arr.length - 1 && <span className="text-[#e2d9c8]">·</span>}
          </div>
        ))}
      </div>

      {/* Preview card */}
      <div className="relative z-10 w-full max-w-3xl">
        <div className="rounded-2xl border border-[#e2d9c8] bg-white card-shadow overflow-hidden">
          {/* Card header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#f0ece3] bg-[#fdf9f2]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c3557]" />
              <span className="text-[#4a5568] text-xs font-mono">02-listing-prompts.md</span>
            </div>
            <span className="text-[#c9a84c] text-xs font-medium">Standard MLS Description</span>
          </div>
          {/* Content */}
          <div className="p-6 font-mono text-sm">
            <p className="text-[#718096] mb-3">Act as an expert real estate copywriter. Write a compelling MLS description for the following home.</p>
            <div className="space-y-1.5">
              <p className="text-[#4a5568]">Property details:</p>
              <p><span className="text-[#1c3557] font-medium">- Address:</span> <span className="text-[#c9a84c]">[NEIGHBORHOOD OR CITY]</span></p>
              <p><span className="text-[#1c3557] font-medium">- Bedrooms:</span> <span className="text-[#c9a84c]">[NUMBER]</span></p>
              <p><span className="text-[#1c3557] font-medium">- Key features:</span> <span className="text-[#c9a84c]">[LIST 5-8 FEATURES]</span></p>
              <p><span className="text-[#1c3557] font-medium">- Asking price:</span> <span className="text-[#c9a84c]">[$PRICE]</span></p>
              <div className="mt-3 pt-3 border-t border-[#f0ece3]">
                <p className="text-[#4a5568]">Requirements:</p>
                <p className="text-[#718096]">- 250-350 words · Warm and professional tone</p>
                <p className="text-[#718096]">- Lead with the best feature · End with a CTA</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-[#a0aec0] text-xs mt-3">One of 95+ prompts included. Copy. Fill brackets. Paste. Done.</p>
      </div>
    </section>
  );
}
