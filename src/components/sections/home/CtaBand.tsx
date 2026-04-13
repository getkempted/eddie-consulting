import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function CtaBand() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-secondary-container p-10 md:p-16 shadow-architectural">
            <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
            <div className="relative z-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="font-headline text-3xl font-black tracking-tighter text-primary-container md:text-4xl">
                  Want a structural plan review on your next package?
                </h2>
                <p className="mt-4 text-lg font-medium text-on-surface-variant">
                  Share the timeline, what you are issuing, and what a useful review looks like for your team. See{" "}
                  <Link
                    href="/services"
                    className="font-bold text-primary-container underline-offset-4 hover:underline"
                  >
                    services
                  </Link>{" "}
                  or{" "}
                  <Link href="/about" className="font-bold text-primary-container underline-offset-4 hover:underline">
                    how we work
                  </Link>
                  .
                </p>
              </div>
              <Button href="/contact" variant="primary" size="md" className="shrink-0 px-10 py-4 text-base">
                Request consultation
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
