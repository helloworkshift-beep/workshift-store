"use client";

const STRIPE_LINK = "https://buy.stripe.com/00waEZ67ndFLbrXfaUgEg00";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6366f1 0%, #8b5cf6 40%, transparent 70%)" }} />

      {/* Badge */}
      <div className="relative z-10 mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        100+ Done-for-You AI Prompts
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl mb-6">
        Write Listings. Win Clients.
        <br />
        <span className="gradient-text">Grow Your Business.</span>
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 text-center text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
        The only AI prompt toolkit built specifically for real estate agents.
        MLS descriptions, client emails, social content, and 5 complete workflow SOPs —
        ready to use in minutes.
      </p>

      {/* CTA */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-12">
        <a
          href={STRIPE_LINK}
          className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
        >
          Get Instant Access — $47
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-zinc-500 text-sm">One-time purchase · Instant download · Yours forever</p>
      </div>

      {/* Social proof strip */}
      <div className="relative z-10 flex items-center gap-6 text-zinc-500 text-sm">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Works with ChatGPT & Claude
        </div>
        <div className="w-px h-4 bg-zinc-800" />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          No monthly fees
        </div>
        <div className="w-px h-4 bg-zinc-800" />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Instant download
        </div>
      </div>

      {/* Preview card */}
      <div className="relative z-10 mt-16 w-full max-w-3xl">
        <div className="glow-border rounded-2xl bg-zinc-900/80 backdrop-blur-sm p-1 shadow-2xl">
          <div className="rounded-xl bg-zinc-950 p-6">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-zinc-600 text-xs font-mono">02-listing-prompts.md</span>
            </div>
            {/* Code preview */}
            <div className="font-mono text-sm space-y-1">
              <p className="text-zinc-600">{"// Standard MLS Description"}</p>
              <p className="text-zinc-400">Act as an expert real estate copywriter. Write a</p>
              <p className="text-zinc-400">compelling MLS description for the following home.</p>
              <p className="mt-2 text-zinc-500">Property details:</p>
              <p><span className="text-indigo-400">- Address:</span> <span className="text-emerald-400">[NEIGHBORHOOD OR CITY]</span></p>
              <p><span className="text-indigo-400">- Bedrooms:</span> <span className="text-emerald-400">[NUMBER]</span></p>
              <p><span className="text-indigo-400">- Key features:</span> <span className="text-emerald-400">[LIST 5-8 FEATURES]</span></p>
              <p><span className="text-indigo-400">- Asking price:</span> <span className="text-emerald-400">[$PRICE]</span></p>
              <p className="mt-2 text-zinc-500">Requirements:</p>
              <p className="text-zinc-400">- Length: 250-350 words · Tone: warm and professional</p>
              <p className="text-zinc-400">- Lead with the most compelling feature</p>
              <p className="text-zinc-400">- End with a strong call to action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
