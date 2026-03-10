import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:   "bg-[#635bff] hover:bg-[#5145e5] text-white shadow-sm",
  secondary: "bg-white border border-[#e6ebf1] hover:border-[#c5cfe0] text-[#425466] hover:text-[#0a2540]",
  ghost:     "text-[#635bff] hover:underline",
  dark:      "bg-[#0a2540] hover:bg-[#0d2f4f] text-white shadow-sm",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-md gap-2",
  lg: "px-6 py-3 text-base rounded-md gap-2",
};

const Arrow = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const base = "inline-flex items-center font-medium transition-colors";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const content = <>{children}{(variant === "primary" || variant === "dark") && <Arrow />}</>;

  if (href) {
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>;
    return <Link href={href} className={classes}>{content}</Link>;
  }
  return <button onClick={onClick} className={classes}>{content}</button>;
}
