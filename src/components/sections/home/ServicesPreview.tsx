import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const services = [
  {
    title: "Electrical plan review",
    description:
      "NEC-focused review of power, lighting, and one-line drawings. I flag panel, feeder, and coordination issues early so they do not turn into change orders downstream.",
    accent: "light" as const,
    bullets: ["Panel schedules and load validation", "Coordination with mechanical and architectural"],
  },
  {
    title: "Constructability & bid risk",
    description:
      "Practical notes on routing, gear access, long-lead equipment, and design ambiguity so contractors bid tight and build cleanly.",
    accent: "dark" as const,
    bullets: ["Design gaps before construction", "Change-order and RFI exposure"],
  },
  {
    title: "Lighting design & photometrics",
    description:
      "Interior and exterior lighting, IES photometric studies, and LPD compliance — scoped for new design, retrofit, and energy-code paths.",
    accent: "light" as const,
    bullets: ["Fixture selection and layouts", "IES photometric output and LPD"],
  },
];

function Check({ className = "text-secondary" }: { className?: string }) {
  return (
    <svg className={`mt-0.5 h-5 w-5 shrink-0 ${className}`} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5L7.5 13l1.41-1.41L11 14.67l5.59-5.59L18 10.5l-7 7z"
      />
    </svg>
  );
}

export function ServicesPreview() {
  return (
    <section className="blueprint-grid bg-surface py-20 md:py-28">
      <Container>
        <RevealOnScroll>
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl font-black tracking-tighter text-primary-container md:text-5xl">
                What electrical engineering services does CIRCUITA offer?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                Three flagships — electrical plan review, constructability & bid-risk review, and lighting
                design — plus targeted EV, marina, design support, and energy-code consulting. Clear written
                deliverables tuned for NEC intent, coordination, and how the work actually gets built.
              </p>
            </div>
            <Link
              href="/services"
              className="font-headline group inline-flex items-center gap-2 text-base font-bold text-primary-container"
            >
              Explore services
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {services.map((s) => (
            <RevealOnScroll key={s.title} className="h-full">
              <article
                className={`flex h-full flex-col rounded-xl p-8 shadow-architectural transition-transform duration-300 hover:-translate-y-1 ${
                  s.accent === "dark"
                    ? "bg-primary-container text-on-primary"
                    : "bg-surface-container-lowest ring-1 ring-outline-variant/10"
                }`}
              >
                <h3
                  className={`font-headline text-2xl font-bold ${s.accent === "dark" ? "text-on-primary" : "text-primary-container"}`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-4 leading-relaxed ${s.accent === "dark" ? "text-primary-fixed-dim" : "text-on-surface-variant"}`}
                >
                  {s.description}
                </p>
                <ul className="mt-auto space-y-3 pt-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm font-medium">
                      <Check
                        className={s.accent === "dark" ? "text-secondary-container" : "text-secondary"}
                      />
                      <span
                        className={
                          s.accent === "dark" ? "text-secondary-container" : "text-secondary"
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
