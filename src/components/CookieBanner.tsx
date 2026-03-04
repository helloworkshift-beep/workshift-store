"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#ede8df] shadow-2xl shadow-[#1c3557]/10 overflow-hidden">
        {/* Top accent */}
        <div className="h-0.5 bg-gradient-to-r from-[#1c3557] via-[#c9a84c] to-[#1c3557]" />

        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl flex-shrink-0">🍪</div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[#1c3557] font-semibold text-base mb-1">
                We use cookies
              </h3>
              <p className="text-[#718096] text-sm leading-relaxed">
                We use strictly necessary cookies to make this site work, and Stripe for secure payment processing.
                We don&apos;t use tracking or advertising cookies.{" "}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-[#1c3557] underline hover:no-underline"
                >
                  {showDetails ? "Hide details" : "Learn more"}
                </button>
              </p>

              {showDetails && (
                <div className="mt-3 rounded-xl bg-[#faf9f6] border border-[#ede8df] p-4 text-sm space-y-2">
                  <div>
                    <span className="font-medium text-[#1c3557]">Strictly necessary</span>
                    <span className="text-[#718096]"> — Session cookies required for the site to function. Always active.</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1c3557]">Stripe (payment processor)</span>
                    <span className="text-[#718096]"> — When you click &ldquo;Buy&rdquo;, Stripe may set cookies on their domain for fraud prevention. We do not control these. See{" "}
                      <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] underline">Stripe&apos;s Privacy Policy</a>.
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1c3557]">Analytics / advertising</span>
                    <span className="text-[#718096]"> — None. We do not use Google Analytics, Facebook Pixel, or any tracking tools.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:justify-end">
            <button
              onClick={decline}
              className="px-5 py-2.5 rounded-xl border border-[#ede8df] text-[#718096] text-sm font-medium hover:border-[#1c3557]/30 hover:text-[#1c3557] transition-colors"
            >
              Decline non-essential
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 rounded-xl bg-[#1c3557] text-white text-sm font-semibold hover:bg-[#2a4f7c] transition-colors"
            >
              Accept all
            </button>
          </div>

          <p className="text-[#a0aec0] text-xs mt-3">
            By using this site you agree to our{" "}
            <a href="/legal/privacy" className="underline hover:text-[#1c3557] transition-colors">Privacy Policy</a>
            {" "}and{" "}
            <a href="/legal/terms" className="underline hover:text-[#1c3557] transition-colors">Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
