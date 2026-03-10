import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
          Stop writing from scratch.
        </h2>
        <p className="text-lg text-[#94a3b8] mb-10 max-w-xl mx-auto leading-relaxed">
          Every listing, every email, every deliverable — there&apos;s a prompt for it.
          Pick your toolkit and get instant access today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/toolkits"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#c9a84c] hover:bg-[#e8c96a] text-[#0a1628] font-bold text-base transition-all duration-150 shadow-lg hover:-translate-y-0.5"
          >
            Browse all toolkits
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-[#4b5e75] text-sm">
            From $47 · One-time · Instant download
          </p>
        </div>
      </div>
    </section>
  );
}
