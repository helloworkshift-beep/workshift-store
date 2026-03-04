export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#faf9f6] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-[#1c3557] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#1c3557] mb-3">You&apos;re all set!</h1>
        <p className="text-[#718096] text-lg mb-8 leading-relaxed">
          Check your inbox — your download link is on its way. It usually arrives within 1–2 minutes.
        </p>
        <div className="bg-white rounded-2xl border border-[#ede8df] p-6 text-left">
          <p className="text-[#1c3557] font-semibold text-sm mb-3">While you wait:</p>
          <ul className="space-y-2 text-[#4a5568] text-sm">
            <li className="flex items-center gap-2">
              <span className="text-[#c9a84c]">→</span> Open ChatGPT or Claude in a new tab
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c9a84c]">→</span> Think of your next listing to write
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c9a84c]">→</span> You&apos;ll be writing copy in minutes
            </li>
          </ul>
        </div>
        <p className="text-[#a0aec0] text-xs mt-6">
          Didn&apos;t get the email? Check spam or contact{" "}
          <a href="mailto:helloworkshift@gmail.com" className="underline hover:text-[#1c3557] transition-colors">
            helloworkshift@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
