"use client";

const STRIPE_LINK = "/api/checkout?product=real-estate-toolkit";

const includes = [
  "25 listing prompts — every property type",
  "20 client communication prompts",
  "20 marketing prompts (social, bio, newsletter)",
  "15 business operations prompts",
  "5 complete workflow SOPs",
  "Quick-start guide & AI tool recommendations",
  "Top 15 power prompts cheat sheet",
  "10 golden rules of prompting",
  "Works with ChatGPT, Claude & Gemini (free)",
  "One-time purchase — yours forever",
  "Instant digital download (ZIP file)",
];

export default function Pricing() {
  return (
    <section className="px-4 py-24 bg-white border-y border-[#ede8df]" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c3557] mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-[#718096] text-lg">
            Less than the cost of one MLS description from a copywriter.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl border-2 border-[#1c3557] bg-white card-shadow p-8">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-[#c9a84c] text-white text-xs font-semibold shadow-sm">
              One-Time Purchase
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-2">
              <div className="flex items-start justify-center gap-1 mb-1">
                <span className="text-2xl text-[#718096] mt-2 font-medium">$</span>
                <span className="text-8xl font-black text-[#1c3557] leading-none">47</span>
              </div>
              <div className="text-[#a0aec0] text-sm">One-time · No subscription · No expiry</div>
              <div className="mt-2 inline-flex items-center gap-2 text-xs text-[#718096]">
                <span className="line-through text-[#c0b89a]">vs. $150–300 per listing from a copywriter</span>
              </div>
            </div>

            {/* Includes */}
            <ul className="space-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#4a5568]">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={STRIPE_LINK}
              className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#1c3557] hover:bg-[#2a4f7c] text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-[#1c3557]/20 hover:shadow-[#1c3557]/30 hover:-translate-y-0.5"
            >
              Get Instant Access — $47
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <div className="flex items-center justify-center gap-4 mt-4 text-[#a0aec0] text-xs">
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
          <div className="mt-8 rounded-2xl border border-[#ede8df] bg-[#faf9f6] p-6">
            <p className="text-center text-[#718096] text-sm font-medium mb-4">$47 vs. the alternatives</p>
            <div className="space-y-3 text-sm">
              {[
                { label: "Real estate copywriter (per listing)", price: "$150–300", bad: true },
                { label: "AI writing tool subscription (monthly)", price: "$20–99/mo", bad: true },
                { label: "Real estate coaching content training", price: "$500–2,000", bad: true },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-[#718096]">{item.label}</span>
                  <span className="text-red-400 font-medium">{item.price}</span>
                </div>
              ))}
              <div className="h-px bg-[#ede8df] my-1" />
              <div className="flex justify-between items-center">
                <span className="text-[#1c3557] font-semibold">This toolkit (unlimited, forever)</span>
                <span className="text-[#c9a84c] font-bold text-base">$47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
