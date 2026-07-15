import Image from "next/image";
import { Award, MapPin, Sparkles } from "lucide-react";

import { siteContent } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { FadeIn } from "@/components/animations/FadeIn";
import { toSvgDataUrl } from "@/lib/utils";

const profileArt = toSvgDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 720" fill="none">
    <defs>
      <linearGradient id="a" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#60a5fa" stop-opacity="0.25" />
      </linearGradient>
    </defs>
    <rect width="680" height="720" rx="36" fill="#07111f" />
    <rect x="44" y="44" width="592" height="632" rx="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
    <circle cx="340" cy="270" r="124" fill="url(#a)" />
    <circle cx="340" cy="236" r="82" fill="rgba(255,255,255,0.22)" />
    <rect x="166" y="428" width="348" height="18" rx="9" fill="rgba(255,255,255,0.26)" />
    <rect x="196" y="464" width="288" height="14" rx="7" fill="rgba(255,255,255,0.18)" />
    <rect x="146" y="540" width="120" height="120" rx="26" fill="rgba(125,211,252,0.16)" />
    <rect x="280" y="540" width="120" height="120" rx="26" fill="rgba(125,211,252,0.16)" />
    <rect x="414" y="540" width="120" height="120" rx="26" fill="rgba(125,211,252,0.16)" />
  </svg>
`);

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="section-anchor-offset border-t border-white/10 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle eyebrow="About" title={about.heading} />
            <FadeIn delay={0.05}>
              <GlassCard className="space-y-5">
                <p className="leading-8 text-[#A1A1AA]">{about.paragraphs[0]}</p>
                <p className="leading-8 text-[#A1A1AA]">{about.paragraphs[1]}</p>
                <div className="rounded-2xl border border-blue-400/15 bg-blue-500/10 p-4 text-sm text-blue-100">
                  {about.highlight}
                </div>
              </GlassCard>
            </FadeIn>
          </div>

          <Reveal className="space-y-4">
            <GlassCard className="overflow-hidden p-4 sm:p-5">
              <Image
                src={profileArt}
                alt="Profil personal branding"
                width={680}
                height={720}
                className="h-auto w-full rounded-[1.25rem] object-cover"
              />
            </GlassCard>

            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard className="space-y-3">
                <Badge>Location</Badge>
                <p className="flex items-center gap-2 text-white/72">
                  <MapPin className="h-4 w-4 text-blue-300" />
                  Indonesia, remote-friendly
                </p>
              </GlassCard>

              <GlassCard className="space-y-3">
                <Badge>Approach</Badge>
                <p className="flex items-center gap-2 text-white/72">
                  <Sparkles className="h-4 w-4 text-violet-300" />
                  Story-driven UI with clean hierarchy
                </p>
              </GlassCard>
            </div>

            <GlassCard className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <Award className="h-5 w-5" />
              </div>
              <p className="leading-7 text-[#A1A1AA]">
                Dibangun untuk mudah dipindahkan ke proyek lain tanpa harus menulis ulang struktur konten.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
