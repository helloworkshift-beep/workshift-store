import { ReactNode } from "react";

type SectionBg = "white" | "gray" | "dark" | "none";

interface SectionProps {
  children: ReactNode;
  bg?: SectionBg;
  border?: boolean;
  className?: string;
  id?: string;
}

const bgStyles: Record<SectionBg, string> = {
  white: "bg-white",
  gray:  "bg-[#f6f9fc]",
  dark:  "bg-[#0a2540]",
  none:  "",
};

export function Section({ children, bg = "white", border = false, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 px-6 ${bgStyles[bg]} ${border ? "border-y border-[#e6ebf1]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
};

export function Container({ children, size = "lg", className = "" }: ContainerProps) {
  return (
    <div className={`${containerSizes[size]} mx-auto ${className}`}>
      {children}
    </div>
  );
}
