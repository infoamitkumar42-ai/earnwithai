import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
  fullWidth?: boolean;
}

const sizeMap = {
  sm: "!py-2.5 !px-5 !text-[14px]",
  md: "!py-4 !px-8 !text-[16px]",
  lg: "!py-5 !px-10 !text-[17px]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  external,
  fullWidth,
}: ButtonProps) {
  const base = clsx(
    variant === "primary" ? "btn-primary" : "btn-secondary",
    sizeMap[size],
    fullWidth && "w-full justify-center",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={base}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
