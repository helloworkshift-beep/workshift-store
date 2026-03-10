"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e5e7eb]/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-[#0a1628] tracking-tight">Workshift</span>
          <span
            className="hidden sm:inline text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: "rgba(201,168,76,0.12)", color: "#b8922a" }}
          >
            AI Skills
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/toolkits" className="text-sm text-[#6b7280] hover:text-[#0a1628] transition-colors font-medium">
            Toolkits
          </Link>
          <Link href="/blog" className="text-sm text-[#6b7280] hover:text-[#0a1628] transition-colors font-medium">
            Blog
          </Link>
          <Link href="/course" className="text-sm text-[#6b7280] hover:text-[#0a1628] transition-colors font-medium">
            Course
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/toolkits"
            className="px-4 py-2 rounded-lg bg-[#0a1628] hover:bg-[#1c3557] text-white text-sm font-semibold transition-colors"
          >
            Get a toolkit →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#6b7280] hover:text-[#0a1628] hover:bg-[#f3f4f6] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/toolkits" className="text-sm font-medium text-[#374151] hover:text-[#0a1628]" onClick={() => setOpen(false)}>Toolkits</Link>
          <Link href="/blog" className="text-sm font-medium text-[#374151] hover:text-[#0a1628]" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/course" className="text-sm font-medium text-[#374151] hover:text-[#0a1628]" onClick={() => setOpen(false)}>Course</Link>
          <Link href="/toolkits" className="mt-2 px-4 py-2.5 rounded-lg bg-[#0a1628] text-white text-sm font-semibold text-center" onClick={() => setOpen(false)}>
            Get a toolkit →
          </Link>
        </div>
      )}
    </header>
  );
}
