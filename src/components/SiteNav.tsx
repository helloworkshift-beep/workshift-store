"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/course/learn")) return null;

  const links = [
    { href: "/toolkits", label: "Toolkits" },
    { href: "/blog", label: "Blog" },
    { href: "/course", label: "Course" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e6ebf1]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-[1.15rem] text-[#0a2540] tracking-tight">
          Workshift
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname?.startsWith(href)
                  ? "text-[#0a2540] font-medium"
                  : "text-[#425466] hover:text-[#0a2540]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/toolkits"
            className="px-4 py-2 rounded-md bg-[#635bff] hover:bg-[#5145e5] text-white text-sm font-medium transition-colors"
          >
            Get a toolkit →
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[#425466]"
          onClick={() => setOpen(!open)}
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

      {open && (
        <div className="md:hidden border-t border-[#e6ebf1] bg-white px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm text-[#425466]" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/toolkits" className="mt-1 px-4 py-2.5 rounded-md bg-[#635bff] text-white text-sm font-medium text-center" onClick={() => setOpen(false)}>
            Get a toolkit →
          </Link>
        </div>
      )}
    </header>
  );
}
