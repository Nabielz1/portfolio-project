import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface GradientButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

const gradientVariants: Record<NonNullable<GradientButtonProps["variant"]>, string> = {
  primary:
    "bg-[linear-gradient(135deg,rgba(59,130,246,0.95)_0%,rgba(139,92,246,0.92)_100%)] text-white shadow-[0_18px_40px_rgba(59,130,246,0.22)]",
  secondary:
    "border border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.08]",
};

export function GradientButton({
  className,
  variant = "primary",
  ...props
}: GradientButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg",
        gradientVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
