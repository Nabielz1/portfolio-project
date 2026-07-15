import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { GradientButton } from "@/components/ui/GradientButton";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            Halaman tidak ditemukan
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Konten yang Anda cari tidak tersedia.
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/68">
            Return to the homepage to explore the portfolio structure, projects, and contact details.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <GradientButton href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </GradientButton>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact me
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
