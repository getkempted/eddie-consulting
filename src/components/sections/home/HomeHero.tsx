import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackground } from "@/components/animations/HeroBackground";

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden bg-primary-container">
      <HeroBackground />
      <Container className="relative grid items-center gap-12 py-16 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-7">
          <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-secondary-container/95">
            Structural integrity and precision
          </p>
          <h1 className="mt-6 font-headline text-4xl font-black leading-[0.95] tracking-tighter text-on-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Structural engineering
            <br />
            consulting that
            <br />
            <span className="text-secondary-container">cuts field risk</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-fixed-dim md:text-xl">
            STRUCTURA provides structural plan review, constructability feedback, and engineering consulting
            for architects, developers, and contractors in Florida and the Southeast. Fast first passes,
            prioritized notes, and deliverables your team can forward as-is.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="/contact"
              variant="primary"
              className="min-h-12 bg-surface-container-lowest px-8 text-base text-primary-container shadow-architectural hover:opacity-95"
            >
              Request consultation
            </Button>
            <Link
              href="/services"
              className="font-headline min-h-12 inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-8 text-base font-bold text-on-primary backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/images/profile2.png"
              alt="Eddie — Structural Engineering Consultant"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 33vw, 0px"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-primary-container/80 p-6 backdrop-blur-xl">
              <div className="mb-2 flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-secondary-fixed"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="font-headline text-sm font-bold tracking-tight text-white">
                  Verified Engineering Partner
                </span>
              </div>
              <p className="text-xs leading-relaxed text-primary-fixed-dim">
                Implementing advanced structural modeling to mitigate risk across high-density
                developments.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
