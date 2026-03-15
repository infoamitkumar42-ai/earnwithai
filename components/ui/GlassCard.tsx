import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accentBorder?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  accentBorder = false,
  padding = "md",
}: GlassCardProps) {
  const padMap = { sm: "p-4", md: "p-6 md:p-8", lg: "p-8 md:p-10" };

  return (
    <div
      className={clsx(
        "rounded-[20px]",
        padMap[padding],
        hover && "glass-card",
        !hover && "bg-[rgba(28,25,23,0.6)] border border-[rgba(168,162,158,0.08)]",
        accentBorder && "border-[rgba(216,90,48,0.25)] shadow-[0_0_40px_rgba(216,90,48,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}
