const features = [
  {
    icon: "⚡",
    title: "4–8 Minutes Per Task",
    description: "Copy a prompt, fill in the brackets, paste into ChatGPT or Claude. Done. From blank page to published copy in under 8 minutes.",
  },
  {
    icon: "🎯",
    title: "Built for Real Estate",
    description: "Not generic writing prompts. Every prompt was designed specifically for real estate workflows — listings, clients, marketing, and operations.",
  },
  {
    icon: "🔄",
    title: "5 Complete Workflows",
    description: "Not just prompts — full step-by-step SOPs. New listing in 30 minutes, 21-day lead sequence, monthly content batch, and more.",
  },
  {
    icon: "🛠️",
    title: "Works with Free AI Tools",
    description: "Optimized for ChatGPT, Claude, and Gemini — all free to start. No paid subscriptions or special tools required.",
  },
  {
    icon: "📐",
    title: "100% Customizable",
    description: "Every prompt uses [BRACKETS] for the parts you customize. Fill them in with your specific details, paste, and get output that sounds like you.",
  },
  {
    icon: "♾️",
    title: "Yours Forever",
    description: "One-time purchase. No subscriptions, no expiry, no updates required. Buy it once, use it for every listing and every client forever.",
  },
];

export default function Features() {
  return (
    <section className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why agents love this toolkit
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Professional-grade output without the professional copywriter price tag.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover glow-border rounded-2xl bg-zinc-900/50 p-6"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
