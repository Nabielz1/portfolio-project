import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";

export function Projects() {
  return (
    <section id="projects" className="section-anchor-offset border-t border-white/10 py-16 sm:py-20">
      <Container>
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work that shows business value, technical depth, and product clarity."
            description="Each card is driven by data, so the content stays easy to edit without touching the component structure."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title}>
                <GlassCard className="group h-full space-y-5 transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
                      <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="space-y-3">
                    <Badge className="border-cyan-300/20 text-cyan-100">
                      <Sparkles className="mr-2 h-3.5 w-3.5" />
                      Project {index + 1}
                    </Badge>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="leading-7 text-white/68">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-white/60">
                    {project.metrics.map((metric) => (
                      <li key={metric}>• {metric}</li>
                    ))}
                  </ul>

                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-white"
                  >
                    View details <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
