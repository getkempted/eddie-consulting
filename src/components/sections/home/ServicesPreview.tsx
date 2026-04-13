import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const services = [
  {
    title: "Plan review",
    description:
      "Structural review of drawings and details with code in mind. We flag conflicts early so they do not turn into change orders downstream.",
    accent: "light" as const,
    bullets: ["Load paths and load transfers", "Where disciplines clash"],
  },
  {
    title: "Constructability feedback",
    description:
      "Practical notes on sequencing, connections, and materials so the design works on site, not only on paper.",
    accent: "dark" as const,
    bullets: ["Site and staging constraints", "Ways to simplify execution"],
  },
  {
    title: "Engineering consulting",
    description:
      "Targeted help for adaptive reuse, difficult framing, and performance targets, timed to your milestones.",
    accent: "light" as const,
    bullets: ["Options with tradeoffs", "Next steps you can assign"],
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
                What structural engineering services does STRUCTURA offer?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
                STRUCTURA offers three services: structural plan review, constructability feedback, and
                engineering consulting. Clear written feedback tuned for code intent, coordination, and how the
                work actually gets built.
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

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <RevealOnScroll key={s.title}>
              <article
                className={`h-full rounded-xl p-8 shadow-architectural transition-transform duration-300 hover:-translate-y-1 ${
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
                <ul className="mt-8 space-y-3">
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
