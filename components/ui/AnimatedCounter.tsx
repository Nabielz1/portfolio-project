"use client";

import { useEffect, useRef, useState } from "react";

import { useCounter } from "@/hooks/useCounter";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1200,
  className,
}: AnimatedCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const count = useCounter({ target: value, duration, enabled: isVisible });

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
