"use client";

const STRIPE_LINK = "https://buy.stripe.com/00waEZ67ndFLbrXfaUgEg00";

const includes = [
  "25 listing prompts for every property type",
  "20 client communication prompts",
  "20 marketing prompts (social, bio, newsletter)",
  "15 business operations prompts",
  "5 complete workflow SOPs",
  "Quick-start guide & AI tool recommendations",
  "Top 15 power prompts cheat sheet",
  "Golden rules of prompting guide",
  "Works with ChatGPT, Claude & Gemini (free)",
  "One-time purchase — yours forever",
  "Instant digital download (ZIP file)",
];

export default function Pricing() {
  return (
    <section className="px-4 py-24" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-zinc-400 text-lg">
            Less than the cost of one hour with a copywriter.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative glow-border rounded-2xl bg-zinc-900/80 p-8">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
              Most Popular
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-start justify-center gap-1 mb-2">
                <span className="text-2xl text-zinc-400 mt-2">$</span>
                <span className="text-7xl font-black text-white">47</span>
              </div>
              <div className="text-zinc-500 text-sm">One-time · No subscription</div>
              <div className="mt-2 text-zinc-600 text-xs line-through">vs. $200–500/hr copywriter</div>
            </div>

            {/* Includes */}
            <ul className="space-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={STRIPE_LINK}
              className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              Get Instant Access
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Trust */}
            <div className="flex items-center justify-center gap-4 mt-4 text-zinc-600 text-xs">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secured by Stripe
              </span>
              <span>·</span>
              <span>Instant download</span>
              <span>·</span>
              <span>All major cards</span>
            </div>
          </div>

          {/* Value comparison */}
          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-center text-zinc-500 text-sm mb-4">What $47 gets you vs. alternatives</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Real estate copywriter (per listing)</span>
                <span className="text-red-400 font-medium">$150–300</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">AI writing tool subscription (monthly)</span>
                <span className="text-red-400 font-medium">$20–99/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Real estate coach content training</span>
                <span className="text-red-400 font-medium">$500–2,000</span>
              </div>
              <div className="h-px bg-zinc-800 my-2" />
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">This toolkit (unlimited use, forever)</span>
                <span className="text-emerald-400 font-bold">$47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
