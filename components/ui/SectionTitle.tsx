import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <p className="text-sm uppercase tracking-[0.36em] text-[#A1A1AA]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
