"use client";

const STRIPE_LINK = "https://buy.stripe.com/00waEZ67ndFLbrXfaUgEg00";

export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glow-border rounded-2xl bg-zinc-900/50 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stop staring at a blank page.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Every listing you need to write, every email you need to send, every post you need to publish —
              there&apos;s a prompt for it. $47. One time.
            </p>
            <a
              href={STRIPE_LINK}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              Get Instant Access — $47
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-zinc-600 text-sm mt-4">Instant download · No subscription · 7-day guarantee</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <div>© 2025 Workshift. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Secured by Stripe</span>
            <span>·</span>
            <a href="mailto:helloworkshift@gmail.com" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
