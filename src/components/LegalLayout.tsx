import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-[#1c3557] via-[#c9a84c] to-[#1c3557]" />

      {/* Header */}
      <div className="bg-white border-b border-[#ede8df] px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[#718096] text-sm hover:text-[#1c3557] transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-[#1c3557] mb-2">{title}</h1>
          <p className="text-[#718096]">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-[#ede8df] p-8 sm:p-10 legal-content">
          {children}
        </div>
      </div>

      {/* Footer nav */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="flex flex-wrap gap-4 text-sm text-[#a0aec0]">
          <Link href="/legal/imprint" className="hover:text-[#1c3557] transition-colors">Imprint</Link>
          <span>·</span>
          <Link href="/legal/privacy" className="hover:text-[#1c3557] transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/legal/terms" className="hover:text-[#1c3557] transition-colors">Terms of Service</Link>
        </div>
      </div>

      <style>{`
        .legal-content h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1c3557;
          margin: 2rem 0 0.75rem;
          padding-top: 2rem;
          border-top: 1px solid #ede8df;
        }
        .legal-content h2:first-child {
          border-top: none;
          padding-top: 0;
          margin-top: 0;
        }
        .legal-content h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          margin: 1.25rem 0 0.5rem;
        }
        .legal-content p {
          color: #4a5568;
          font-size: 0.925rem;
          line-height: 1.75;
          margin: 0 0 1rem;
        }
        .legal-content ul {
          color: #4a5568;
          font-size: 0.925rem;
          line-height: 1.75;
          margin: 0 0 1rem;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        .legal-content li {
          margin-bottom: 0.35rem;
        }
        .legal-content a {
          color: #1c3557;
          text-decoration: underline;
        }
        .legal-content a:hover {
          color: #c9a84c;
        }
        .legal-content strong {
          color: #2d3748;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
