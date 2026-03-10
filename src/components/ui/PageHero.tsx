import Link from "next/link";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  backHref?: string;
  backLabel?: string;
  badge?: ReactNode;
  centered?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "py-14",
  md: "py-20",
  lg: "py-24",
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backHref,
  backLabel,
  badge,
  centered = false,
  size = "md",
}: PageHeroProps) {
  return (
    <div className={`bg-white border-b border-[#e6ebf1] px-6 ${sizeMap[size]}`}>
      <div className={`max-w-6xl mx-auto ${centered ? "text-center" : ""}`}>
        {/* Back link */}
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-[#8898aa] hover:text-[#0a2540] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {backLabel || "Back"}
          </Link>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-sm font-semibold text-[#635bff] uppercase tracking-widest mb-4">
            {eyebrow}
          </p>
        )}

        {/* Badge */}
        {badge && <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>{badge}</div>}

        {/* Title */}
        <h1 className={`font-extrabold text-[#0a2540] tracking-tight leading-tight mb-4 ${centered ? "max-w-3xl mx-auto" : "max-w-3xl"} text-4xl sm:text-5xl`}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-lg text-[#425466] leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
