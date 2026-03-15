"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  display?: string; // override with formatted string (e.g. "₹4,63,949")
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  display,
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(target);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  // Format large number with commas (Indian style)
  const formatIndian = (n: number) => {
    if (n === 0) return "0";
    const str = n.toString();
    if (str.length <= 3) return str;
    const last3 = str.slice(-3);
    const rest = str.slice(0, -3);
    return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3;
  };

  // If display override and animation completed, show display string
  const showDisplay = display && value === target;

  return (
    <span ref={ref} className={className}>
      {showDisplay ? display : `${prefix}${target > 999 ? formatIndian(value) : value}${suffix}`}
    </span>
  );
}
