const props = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "4–8 minutes per task",
    desc: "Copy a prompt, fill in the brackets, paste into ChatGPT. From blank page to professional output — fast.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Built for your role",
    desc: "Not generic writing prompts. Every prompt was designed for real workflows in your specific profession.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "One-time purchase",
    desc: "No subscriptions. No expiry. Pay once and use it for every project, every client, forever.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Works with free AI tools",
    desc: "Optimized for ChatGPT, Claude, and Gemini — all free to start. No paid AI subscriptions needed.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Complete workflow SOPs",
    desc: "Beyond single prompts — full step-by-step systems for your most important recurring tasks.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: "Instant digital download",
    desc: "Get your toolkit immediately after purchase. No waiting, no onboarding, no setup required.",
  },
];

export default function HomeValueProps() {
  return (
    <section className="bg-white py-24 px-6 border-t border-[#e5e7eb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">
            Why Workshift
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628] tracking-tight mb-4">
            Everything you need to write faster.
          </h2>
          <p className="text-lg text-[#6b7280] max-w-xl mx-auto">
            Professional copy without a professional copywriter. AI output without prompt engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-[#e5e7eb] hover:border-[#c5cdd8] hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] flex items-center justify-center text-[#1c3557] mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#0a1628] mb-2">{item.title}</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
