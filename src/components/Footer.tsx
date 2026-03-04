"use client";

const STRIPE_LINK = "https://buy.stripe.com/00waEZ67ndFLbrXfaUgEg00";

export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="px-4 py-24 bg-[#1c3557]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop writing from scratch.
          </h2>
          <p className="text-[#94b4d4] text-lg mb-8 max-w-xl mx-auto">
            Every listing, every email, every post — there&apos;s a prompt for it.
            $47. One time. Yours forever.
          </p>
          <a
            href={STRIPE_LINK}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#c9a84c] hover:bg-[#e8c96a] text-[#1c3557] font-bold text-lg transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:-translate-y-0.5"
          >
            Get Instant Access — $47
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-[#5a7fa8] text-sm mt-4">Instant download · No subscription · 7-day guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ede8df] px-4 py-8 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#a0aec0] text-sm">
          <div className="font-medium text-[#718096]">© 2025 Workshift. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Secured by Stripe</span>
            <span>·</span>
            <a href="mailto:helloworkshift@gmail.com" className="hover:text-[#1c3557] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
