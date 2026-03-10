const props = [
  {
    title: "Built for your role.",
    desc: "Not generic AI prompts. Every prompt was designed for the specific workflows, language, and deliverables of your profession.",
    link: { label: "Browse toolkits →", href: "/toolkits" },
  },
  {
    title: "One-time purchase.",
    desc: "No subscriptions. No expiry. Pay once and use every prompt for every project, every client, and every task — forever.",
    link: null,
  },
  {
    title: "Works with free AI tools.",
    desc: "Optimized for ChatGPT, Claude, and Gemini — all free to start. No paid AI subscriptions needed to get professional-grade output.",
    link: null,
  },
  {
    title: "Fill-in-the-bracket format.",
    desc: "Every prompt uses [BRACKETS] for your details. Specific input means specific, usable output — not generic suggestions.",
    link: null,
  },
  {
    title: "Complete workflow SOPs.",
    desc: "Not just single prompts. Full step-by-step systems for your most important recurring tasks — from first draft to final deliverable.",
    link: null,
  },
  {
    title: "Instant download.",
    desc: "Get your toolkit immediately after purchase. No onboarding, no setup, no learning curve. Open and start in under 2 minutes.",
    link: null,
  },
];

export default function HomeValueProps() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold text-[#635bff] uppercase tracking-widest mb-4">Why Workshift</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Professional writing.<br />Without the overhead.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {props.map((p) => (
            <div key={p.title}>
              <div className="w-8 h-px bg-[#635bff] mb-5" />
              <h3 className="font-semibold text-[#0a2540] text-base mb-2">{p.title}</h3>
              <p className="text-[#425466] text-sm leading-relaxed">{p.desc}</p>
              {p.link && (
                <a href={p.link.href} className="inline-block mt-3 text-sm text-[#635bff] hover:underline font-medium">
                  {p.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
