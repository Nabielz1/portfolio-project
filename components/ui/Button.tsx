import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,rgba(59,130,246,0.95)_0%,rgba(139,92,246,0.92)_100%)] text-white shadow-[0_18px_40px_rgba(59,130,246,0.22)] hover:-translate-y-0.5",
  secondary:
    "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]",
  ghost: "bg-transparent text-white hover:bg-white/[0.05]",
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide transition duration-200 ease-out",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
