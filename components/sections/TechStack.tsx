import { skillGroups } from "@/data/skills";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export function TechStack() {
  return (
    <section id="tech-stack" className="section-anchor-offset border-t border-white/10 py-16 sm:py-20">
      <Container>
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Tech Stack"
            title="Fondasi teknologi yang ringkas, modern, dan mudah di-maintain."
            description="Semua elemen disusun untuk tetap statis, cepat dipahami, dan gampang diedit tanpa menyentuh komponen UI."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => (
              <FadeIn key={group.category} delay={index * 0.05}>
                <GlassCard className="h-full space-y-4">
                  <Badge>{group.category}</Badge>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
