import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import { siteContent } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { toSvgDataUrl } from "@/lib/utils";

const heroArtwork = toSvgDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" fill="none">
    <defs>
      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.95" />
        <stop offset="50%" stop-color="#60a5fa" stop-opacity="0.75" />
        <stop offset="100%" stop-color="#f8fafc" stop-opacity="0.14" />
      </linearGradient>
      <linearGradient id="g2" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02" />
      </linearGradient>
    </defs>
    <rect width="640" height="800" rx="40" fill="#07111f" />
    <circle cx="150" cy="140" r="120" fill="#7dd3fc" fill-opacity="0.18" />
    <circle cx="520" cy="170" r="160" fill="#60a5fa" fill-opacity="0.18" />
    <rect x="74" y="80" width="492" height="640" rx="34" fill="url(#g2)" stroke="rgba(255,255,255,0.18)" />
    <rect x="110" y="120" width="180" height="24" rx="12" fill="url(#g1)" />
    <rect x="110" y="172" width="240" height="16" rx="8" fill="rgba(255,255,255,0.36)" />
    <rect x="110" y="204" width="210" height="16" rx="8" fill="rgba(255,255,255,0.22)" />
    <circle cx="315" cy="408" r="124" fill="url(#g1)" />
    <circle cx="315" cy="380" r="74" fill="#ffffff" fill-opacity="0.3" />
    <rect x="165" y="538" width="300" height="18" rx="9" fill="rgba(255,255,255,0.26)" />
    <rect x="195" y="572" width="240" height="14" rx="7" fill="rgba(255,255,255,0.18)" />
    <rect x="198" y="620" width="80" height="80" rx="24" fill="#ffffff" fill-opacity="0.12" />
    <rect x="288" y="620" width="80" height="80" rx="24" fill="#ffffff" fill-opacity="0.12" />
    <rect x="378" y="620" width="80" height="80" rx="24" fill="#ffffff" fill-opacity="0.12" />
  </svg>
`);

export function Hero() {
  const { hero, brand } = siteContent;

  return (
    <section id="home" className="section-anchor-offset relative py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <FadeIn>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#A1A1AA]">
                  <span className="h-px w-12 bg-white/20" />
                  {hero.eyebrow}
                </div>
              </FadeIn>

              <div className="space-y-1">
                <SlideUp delay={0.04}>
                  <h1 className="text-[clamp(3.7rem,9vw,7.8rem)] leading-[0.88] tracking-[-0.07em] text-white">
                    Hi, I’m
                  </h1>
                </SlideUp>

                <SlideUp delay={0.08}>
                  <h1 className="text-[clamp(3.7rem,9vw,7.8rem)] leading-[0.88] tracking-[-0.07em] text-white">
                    {brand.name.split(" ").slice(0, 2).join(" ")}
                  </h1>
                </SlideUp>

                <SlideUp delay={0.12}>
                  <h1 className="text-[clamp(3.7rem,9vw,7.8rem)] leading-[0.88] tracking-[-0.07em] text-white/35">
                    Akbar.
                  </h1>
                </SlideUp>
              </div>

              <SlideUp delay={0.16}>
                <p className="max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg">
                  {hero.description}
                </p>
              </SlideUp>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <GradientButton href={hero.primaryAction.href} className="gap-2 px-6 py-3">
                <span>{hero.primaryAction.label}</span>
                <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton href="#contact" variant="secondary" className="px-6 py-3">
                <span>{hero.secondaryAction.label}</span>
              </GradientButton>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {hero.tags.map((tag) => (
                <Badge key={tag} className="text-[#A1A1AA]">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
              <span>{brand.role}</span>
              <span className="hidden h-px w-10 bg-white/20 sm:block" />
              <span>{hero.availability}</span>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="relative overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(59,130,246,0.16),transparent)]" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2">
                <Image
                  src={heroArtwork}
                  alt="Visual hero portfolio personal branding"
                  width={640}
                  height={800}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </GlassCard>

            <div className="absolute right-0 top-12 w-full max-w-80 sm:max-w-88">
              <GlassCard className="space-y-4 border-white/10 bg-white/[0.035] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(34,197,94,0.14)]" />
                  Available for work
                </div>
                <p className="text-sm leading-7 text-[#A1A1AA] sm:text-base">
                  Open to internships, collaborations, and software engineering opportunities.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
