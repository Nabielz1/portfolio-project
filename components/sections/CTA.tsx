import { ArrowUpRight } from "lucide-react";

import { siteContent } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SlideUp } from "@/components/animations/SlideUp";

export function CTA() {
  return (
    <section id="cta" className="section-anchor-offset border-t border-white/10 py-16 sm:py-20">
      <Container>
        <SlideUp>
          <GlassCard className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">
                Next step
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {siteContent.hero.title}
              </h2>
              <p className="max-w-2xl text-white/68 leading-8">
                Use this section as a closing call-to-action that sends visitors to your strongest projects or contact page.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <GradientButton href="#projects" className="gap-2">
                <span>Lihat proyek</span>
                <ArrowUpRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton href="#contact" variant="secondary" className="gap-2">
                <span>Contact me</span>
                <ArrowUpRight className="h-4 w-4" />
              </GradientButton>
            </div>
          </GlassCard>
        </SlideUp>
      </Container>
    </section>
  );
}
