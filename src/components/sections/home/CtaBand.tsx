import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { CircuitTrace } from "@/components/animations/CircuitTrace";

export function CtaBand() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-primary-container p-10 text-on-primary md:p-16 shadow-architectural">
            <CircuitTrace opacity={0.55} />
            <div className="relative z-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="font-headline text-3xl font-black tracking-tighter text-on-primary md:text-4xl">
                  Want an electrical plan review on your next package?
                </h2>
                <p className="mt-4 text-lg font-medium text-primary-fixed-dim">
                  Share the timeline, what you are issuing, and what a useful review looks like for your team. See{" "}
                  <Link
                    href="/services"
                    className="font-bold text-secondary-container underline-offset-4 hover:underline"
                  >
                    services
                  </Link>{" "}
                  or{" "}
                  <Link href="/about" className="font-bold text-secondary-container underline-offset-4 hover:underline">
                    how I work
                  </Link>
                  .
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="shrink-0 bg-secondary-container px-10 py-4 text-base text-primary-container hover:opacity-95"
              >
                Request consultation
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
