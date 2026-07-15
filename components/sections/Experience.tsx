import { experience } from "@/data/experience";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SlideUp } from "@/components/animations/SlideUp";

export function Experience() {
  return (
    <section id="experience" className="section-anchor-offset border-t border-white/10 py-16 sm:py-20">
      <Container>
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Experience"
            title="Track record yang memperkuat kredibilitas personal branding."
          />

          <div className="space-y-4">
            {experience.map((item, index) => (
              <SlideUp key={`${item.role}-${item.period}`} delay={index * 0.05}>
                <GlassCard className="grid gap-4 lg:grid-cols-[220px_1fr] lg:items-start">
                  <div className="space-y-3">
                    <Badge>{item.period}</Badge>
                    <p className="text-lg font-semibold text-white">{item.role}</p>
                    <p className="text-white/55">
                      {item.company} · {item.location}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="leading-8 text-white/70">{item.description}</p>
                    <ul className="grid gap-2 text-sm text-white/60 md:grid-cols-2">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </SlideUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
