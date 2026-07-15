"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ScaleProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function Scale({ children, delay = 0, className, ...props }: ScaleProps) {
  return (
    <motion.div
      variants={scaleIn(delay)}
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
