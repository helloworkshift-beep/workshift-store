const stats = [
  { value: "15+", label: "Toolkits across every profession" },
  { value: "850+", label: "Prompts across all toolkits" },
  { value: "8 min", label: "Average time from blank to done" },
  { value: "$47", label: "Starting price — one-time, no subscription" },
];

export default function HomeStats() {
  return (
    <section className="border-y border-[#e6ebf1] bg-[#f6f9fc]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#e6ebf1]">
          {stats.map((s) => (
            <div key={s.value} className="lg:px-8 first:pl-0 last:pr-0">
              <div className="text-4xl font-extrabold text-[#0a2540] tracking-tight mb-1">
                {s.value}
              </div>
              <div className="text-sm text-[#8898aa] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
