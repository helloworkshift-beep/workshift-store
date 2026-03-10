import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  as?: "div" | "article";
}

export default function Card({ children, hover = false, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`
        bg-white rounded-xl border border-[#e6ebf1] p-6
        ${hover ? "hover:border-[#c5cfe0] hover:shadow-md transition-all duration-200 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}
