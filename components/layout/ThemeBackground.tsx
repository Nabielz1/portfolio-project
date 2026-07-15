"use client";

import { motion } from "framer-motion";

import { useMouseGlow } from "@/hooks/useMouseGlow";

export function ThemeBackground() {
  const { x, y } = useMouseGlow();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,0.08),transparent_22%),linear-gradient(180deg,#050505_0%,#080808_55%,#050505_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div
        className="absolute h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: x - 210, y: y - 210 }}
        transition={{ type: "spring", stiffness: 80, damping: 22 }}
      />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-white/[0.05] blur-3xl animate-pulse-soft" />
    </div>
  );
}
