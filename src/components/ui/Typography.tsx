import { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm font-semibold text-[#635bff] uppercase tracking-widest mb-4 ${className}`}>
      {children}
    </p>
  );
}

export function H1({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={`text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#0a2540] leading-[1.05] tracking-tight ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-4xl sm:text-5xl font-extrabold text-[#0a2540] leading-tight tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`text-xl font-semibold text-[#0a2540] leading-snug ${className}`}>
      {children}
    </h3>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xl text-[#425466] leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-base text-[#425466] leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function Muted({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-[#8898aa] leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
