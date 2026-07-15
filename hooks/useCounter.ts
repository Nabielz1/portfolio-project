"use client";

import { useEffect, useState } from "react";

interface UseCounterOptions {
  target: number;
  duration?: number;
  enabled?: boolean;
}

export function useCounter({
  target,
  duration = 1200,
  enabled = true,
}: UseCounterOptions) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }

    let frame = 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);
  }, [target, duration, enabled]);

  return value;
}
