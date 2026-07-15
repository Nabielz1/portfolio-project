import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "@/data/social";
import { siteContent } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[#A1A1AA]">
              Footer
            </p>
            <p className="text-xl leading-8 text-[#A1A1AA] sm:text-2xl">
              {siteContent.footer.note}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.platform}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-[#A1A1AA] transition-colors hover:bg-white/8 hover:text-white"
              >
                <SocialIcon platform={item.platform} />
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
