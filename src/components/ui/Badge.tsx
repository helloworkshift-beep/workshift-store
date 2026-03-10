import { ReactNode } from "react";

type BadgeVariant = "default" | "purple" | "green" | "blue" | "gray";

const variants: Record<BadgeVariant, string> = {
  default: "bg-[#f6f9fc] text-[#425466] border border-[#e6ebf1]",
  purple:  "bg-[#635bff]/10 text-[#635bff]",
  green:   "bg-emerald-50 text-emerald-700",
  blue:    "bg-blue-50 text-blue-700",
  gray:    "bg-[#f6f9fc] text-[#8898aa]",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
