"use client";

import { ArrowUpRight, Menu } from "lucide-react";

import { siteContent } from "@/data/site";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScroll } from "@/hooks/useScroll";
import { Container } from "@/components/layout/Container";
import { GradientButton } from "@/components/ui/GradientButton";

const sectionLinks = siteContent.sections;
const sectionIds = Object.values(SECTION_IDS);

export function Navbar() {
  const { scrolled } = useScroll();
  const activeSection = useActiveSection(sectionIds);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-200",
        scrolled && "border-white/8 bg-black/70 backdrop-blur-2xl",
      )}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {siteContent.brand.name.slice(0, 1)}
            </span>
            <span>
              <span className="block text-sm font-medium tracking-[0.32em] text-white/45 uppercase">
                Software Engineer
              </span>
              <span className="block text-base text-white">{siteContent.brand.name}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/4 p-2 lg:flex shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {siteContent.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-white text-black shadow-sm"
                      : "text-white/65 hover:bg-white/6 hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <GradientButton href="#contact" className="gap-2">
              <span>Let's talk</span>
              <ArrowUpRight className="h-4 w-4" />
            </GradientButton>
          </div>

          <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>

      </Container>
    </header>
  );
}
