const testimonials = [
  {
    quote: "I wrote 3 MLS descriptions in 20 minutes this morning. This used to take me an hour minimum. The prompts are specific enough that the output is actually usable — not just generic fluff.",
    name: "Sarah M.",
    role: "Real Estate Agent · Austin, TX",
    stars: 5,
  },
  {
    quote: "The expired listing outreach script alone was worth $47. Got a listing appointment from the first letter I sent. The empathy angle works — no one else was doing that.",
    name: "James K.",
    role: "Listing Agent · Denver, CO",
    stars: 5,
  },
  {
    quote: "I batched my entire month of Instagram content in one 90-minute session using Workflow 3. That's never happened before. Usually I'm scrambling every week.",
    name: "Maria L.",
    role: "Real Estate Agent · Miami, FL",
    stars: 5,
  },
  {
    quote: "The CMA narrative prompt is incredible. I used to struggle to translate spreadsheet data into something sellers actually understood. Now it sounds like I've been doing this for 30 years.",
    name: "David R.",
    role: "Buyer & Seller Agent · Chicago, IL",
    stars: 5,
  },
  {
    quote: "Skeptical at first — I've tried AI tools before and they always sound generic. These prompts are different because they're so specific to real estate. They sound like they were written by an agent.",
    name: "Jennifer T.",
    role: "Team Lead · Nashville, TN",
    stars: 5,
  },
  {
    quote: "My first-time buyer clients have been raving about my follow-up emails. Little do they know I wrote them with AI in about 3 minutes. The quality jump over what I was writing before is real.",
    name: "Marcus W.",
    role: "Buyer Specialist · Seattle, WA",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-24 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Agents are saving hours every week
          </h2>
          <p className="text-zinc-400 text-lg">
            Real results from real estate professionals who use this toolkit daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-hover glow-border rounded-2xl bg-zinc-900/50 p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="text-white font-medium text-sm">{t.name}</div>
                <div className="text-zinc-500 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
