const features = [
  {
    icon: "⚡",
    title: "4–8 Minutes Per Task",
    description: "Copy a prompt, fill in the brackets, paste into ChatGPT or Claude. From blank page to published MLS copy in under 8 minutes.",
  },
  {
    icon: "🏡",
    title: "Built for Real Estate",
    description: "Not generic writing prompts. Every single prompt was designed for real estate workflows — listings, clients, marketing, and operations.",
  },
  {
    icon: "🔄",
    title: "5 Complete Workflows",
    description: "Full SOPs included: new listing in 30 minutes, 21-day lead sequence, monthly content batch, open house follow-up, and seller presentation prep.",
  },
  {
    icon: "🆓",
    title: "Works with Free AI Tools",
    description: "Optimized for ChatGPT, Claude, and Gemini — all free to start. No paid AI subscriptions needed to get professional-grade output.",
  },
  {
    icon: "📐",
    title: "Fill-in-the-Bracket Format",
    description: "Every prompt uses [BRACKETS] so you can customize for each listing, each client, each situation. Specific input = specific output.",
  },
  {
    icon: "♾️",
    title: "One-Time Purchase",
    description: "No subscriptions. No expiry. Buy once, use it for every listing and every client forever. Every new niche you work becomes easier.",
  },
];

export default function Features() {
  return (
    <section className="px-4 py-24 bg-white border-y border-[#ede8df]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c3557] mb-4">
            Everything you need to write faster and better
          </h2>
          <p className="text-[#718096] text-lg max-w-xl mx-auto">
            Professional copy without a professional copywriter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-shadow rounded-2xl bg-[#faf9f6] border border-[#ede8df] p-6"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-[#1c3557] font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#718096] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
