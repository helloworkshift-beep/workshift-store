const steps = [
  {
    n: "01",
    title: "Pick your toolkit",
    desc: "Choose the toolkit built for your role. Each one contains prompts, SOPs, and templates designed specifically for your profession — not generic writing advice.",
  },
  {
    n: "02",
    title: "Copy and fill the brackets",
    desc: "Every prompt uses [BRACKETS] for your specific context. No prompt engineering knowledge needed. Fill in your details, paste into ChatGPT or Claude.",
  },
  {
    n: "03",
    title: "Professional output in minutes",
    desc: "Get polished, on-brand results in under 8 minutes. Works with every free AI tool — ChatGPT, Claude, Gemini. No paid subscriptions required.",
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="bg-[#f6f9fc] border-y border-[#e6ebf1] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold text-[#635bff] uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] tracking-tight leading-tight">
            Blank page to done.<br />In under 8 minutes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="text-5xl font-extrabold text-[#e6ebf1] mb-5 leading-none">{s.n}</div>
              <h3 className="text-lg font-semibold text-[#0a2540] mb-3">{s.title}</h3>
              <p className="text-[#425466] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
