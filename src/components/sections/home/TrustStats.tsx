import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const stats = [
  { value: "8 years", label: "Civil engineering experience" },
  { value: "PE", label: "Licensed professional engineer" },
  { value: "5 days", label: "Typical first-pass review" },
  { value: "Direct", label: "Principal-led engagement" },
];

export function TrustStats() {
  return (
    <section className="border-y border-outline-variant/10 bg-surface-container-low py-20 md:py-24">
      <Container>
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-headline tabular-nums text-3xl font-black tracking-tighter text-primary-container md:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
