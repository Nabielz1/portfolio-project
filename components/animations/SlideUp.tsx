"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function SlideUp({ children, delay = 0, className, ...props }: SlideUpProps) {
  return (
    <motion.div
      variants={fadeInUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
