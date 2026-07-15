import { Mail, Send, Sparkles } from "lucide-react";

import { socialLinks } from "@/data/social";
import { siteContent } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";

export function Contact() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="section-anchor-offset border-t border-white/10 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Contact"
              title={contact.heading}
              description={contact.description}
            />

            <div className="flex flex-wrap gap-2">
              <Badge className="border-blue-400/20 text-blue-100">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                {contact.availability}
              </Badge>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <GradientButton href={`mailto:${contact.email}`} className="gap-2">
                <Mail className="h-4 w-4" />
                {contact.email}
              </GradientButton>
              <GradientButton href="#projects" variant="secondary" className="gap-2">
                <Send className="h-4 w-4" />
                Explore projects
              </GradientButton>
            </div>
          </div>

          <Reveal>
            <GlassCard className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A1A1AA]">
                Social links
              </p>
              <div className="grid gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.platform}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[#A1A1AA] transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <SocialIcon platform={item.platform} className="text-base" />
                      {item.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">
                      Connect
                    </span>
                  </a>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
