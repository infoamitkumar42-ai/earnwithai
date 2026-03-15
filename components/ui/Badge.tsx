import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "muted" | "dim" | "green" | "glass";
  className?: string;
}

export default function Badge({ children, variant = "glass", className }: BadgeProps) {
  const styles = {
    accent: "bg-[rgba(216,90,48,0.12)] text-[#D85A30] border-[rgba(216,90,48,0.2)]",
    muted: "bg-[rgba(168,162,158,0.08)] text-[#A8A29E] border-[rgba(168,162,158,0.12)]",
    dim: "bg-[rgba(120,113,108,0.08)] text-[#78716C] border-[rgba(120,113,108,0.12)]",
    green: "bg-[rgba(34,197,94,0.08)] text-[#4ade80] border-[rgba(34,197,94,0.15)]",
    glass: "bg-[rgba(28,25,23,0.8)] text-[#A8A29E] border-[rgba(168,162,158,0.1)] backdrop-blur-sm",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium border tracking-wide uppercase",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
