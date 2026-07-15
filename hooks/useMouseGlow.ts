"use client";

import { useEffect, useState } from "react";

export function useMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });

    return () => window.removeEventListener("pointermove", updatePosition);
  }, []);

  return position;
}
