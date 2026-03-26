"use client";

import { useState } from "react";
import Link from "next/link";

export default function FreePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/free-kit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const prompts = [
    { emoji: "📧", label: "Professional email" },
    { emoji: "📋", label: "Meeting summary" },
    { emoji: "📊", label: "Executive brief" },
    { emoji: "💬", label: "Difficult conversation" },
    { emoji: "📈", label: "Data story" },
    { emoji: "🤝", label: "Client follow-up" },
    { emoji: "🔄", label: "Retrospective" },
    { emoji: "📝", label: "Proposal / pitch" },
    { emoji: "🎯", label: "Sales script" },
    { emoji: "🧠", label: "Research brief" },
    { emoji: "💼", label: "Job posting" },
    { emoji: "🌟", label: "Performance review" },
    { emoji: "📢", label: "Social post (LinkedIn / X)" },
    { emoji: "📰", label: "Blog post outline" },
    { emoji: "🤜", label: "Negotiation prep" },
    { emoji: "💡", label: "Onboarding doc" },
    { emoji: "🔍", label: "FAQ / Help doc" },
    { emoji: "🏷️", label: "Brand voice guide" },
    { emoji: "📣", label: "Newsletter" },
    { emoji: "✅", label: "Status update" },
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* Nav */}
      <nav className="border-b border-[#ede8df] bg-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-[#1c3557] text-lg">Workshift</Link>
          <Link href="/toolkits" className="text-sm text-[#1c3557] hover:underline">Browse Toolkits →</Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">

        {status === "success" ? (
          <div className="text-center">
            <div className="text-5xl mb-6">📬</div>
            <h1 className="text-3xl font-bold text-[#1c3557] mb-4">Check your inbox</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your free starter kit is on its way. 20 prompts, ready to use.
            </p>
            <p className="text-gray-500 mb-8">
              While you&apos;re here — if you want 100+ prompts built specifically for your profession:
            </p>
            <Link
              href="/toolkits"
              className="inline-block bg-[#c9a84c] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Browse Professional Toolkits →
            </Link>
          </div>
        ) : (
          <>
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#1c3557] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Free download
              </div>
              <h1 className="text-4xl font-extrabold text-[#1c3557] leading-tight mb-4">
                20 AI Prompts That Actually Work at Work
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                No fluff. No &quot;act as a helpful assistant.&quot; Just 20 structured prompts for the writing
                situations every professional faces — emails, proposals, data stories, reviews, and more.
              </p>
            </div>

            {/* Prompt grid */}
            <div className="bg-white border border-[#ede8df] rounded-xl p-6 mb-10">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">What&apos;s inside</p>
              <div className="grid grid-cols-2 gap-2">
                {prompts.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-sm text-gray-700 py-1">
                    <span>{p.emoji}</span>
                    <span>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-[#ede8df] rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#1c3557] mb-2">Get the free kit</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your email and we&apos;ll send it instantly.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#1c3557] transition"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#1c3557] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send Me the Prompts →"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}
              </form>
              <p className="text-xs text-gray-400 mt-4">No spam. Just the kit.</p>
            </div>

            {/* Social proof / upsell hint */}
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm">
                Want the full library for your specific role?{" "}
                <Link href="/toolkits" className="text-[#1c3557] font-semibold hover:underline">
                  Browse professional toolkits →
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
