const steps = [
  {
    number: "01",
    title: "Pick your toolkit",
    description:
      "Choose the toolkit built for your role — real estate, marketing, product management, and more.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Copy a prompt",
    description:
      "Every prompt uses [BRACKETS] for your specific details. No prompt engineering needed — just fill in the blanks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Paste into ChatGPT or Claude",
    description:
      "Works with every free AI tool. In under 8 minutes you have professional-grade output ready to use.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="bg-white py-24 px-6 border-t border-[#e5e7eb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628] tracking-tight mb-4">
            Blank page to done in 8 minutes.
          </h2>
          <p className="text-lg text-[#6b7280] max-w-xl mx-auto">
            No learning curve. No AI expertise required. Just copy, fill, paste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-gradient-to-r from-[#e5e7eb] to-transparent" />
              )}

              <div className="flex flex-col items-start">
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#f9fafb] border border-[#e5e7eb] flex items-center justify-center text-[#1c3557]">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#1c3557] text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-bold text-[#0a1628] text-lg mb-2">{step.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
