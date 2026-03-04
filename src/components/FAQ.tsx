"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need to pay for an AI tool to use these prompts?",
    a: "No. All prompts work with free AI tools — ChatGPT (free tier with GPT-3.5 or GPT-4o with daily limits), Claude (free tier with generous limits), and Google Gemini (fully free). You don't need any paid subscriptions to get great results.",
  },
  {
    q: "What format is the download?",
    a: "You'll receive a ZIP file containing 9 Markdown (.md) files. These open in any text editor, web browser, Notion, Obsidian, or any app that reads text files. If you've never used Markdown, don't worry — it's just text with simple formatting.",
  },
  {
    q: "I'm not very tech-savvy. Can I still use this?",
    a: "Absolutely. The Quick Start Guide in the toolkit walks you through everything step by step. If you can copy and paste, you can use this toolkit. The average time from opening a prompt file to having finished copy is 4–8 minutes.",
  },
  {
    q: "Will the AI always produce good output?",
    a: "The quality of AI output depends heavily on the quality of your input. That's why every prompt uses detailed [BRACKETS] — the more specific you are when filling them in, the better the output. Plan to edit lightly (10–20%) to add local flavor and personal voice. Always read before publishing.",
  },
  {
    q: "Can I use this for my whole team?",
    a: "The standard license covers personal use. If you lead a team and want to deploy these across multiple agents, reach out for a team license.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "If you open the toolkit and genuinely feel it doesn't deliver what's promised, reach out within 7 days for a full refund. No hoops, no hassle.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-4 py-24 bg-zinc-950/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glow-border rounded-xl bg-zinc-900/50 overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
