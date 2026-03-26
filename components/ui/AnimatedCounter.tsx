"use client";

import { useEffect, useState, useRef } from "react";

interface Props {
  target: number;
  prefix?: string;
  suffix?: string;
  indianFormat?: boolean;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  indianFormat = false,
}: Props) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (target === 0) {
            setCount(0);
            return;
          }
          const duration = 2500;
          const steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * eased));
            if (step >= steps) {
              setCount(target);
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  const formatted = indianFormat
    ? count.toLocaleString("en-IN")
    : count.toLocaleString();

  return (
    <div ref={ref}>
      <span>
        {prefix}
        {formatted}
        {suffix}
      </span>
    </div>
  );
}
