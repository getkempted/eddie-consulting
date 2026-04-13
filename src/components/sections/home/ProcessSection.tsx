import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const steps = [
  {
    n: "1",
    title: "Consultation",
    body: "I agree on scope, schedule, deliverables, and what risks you want off the table early.",
  },
  {
    n: "2",
    title: "Expert review",
    body: "A focused pass on structure, code intent, coordination with other trades, and constructability.",
  },
  {
    n: "3",
    title: "Actionable feedback",
    body: "Prioritized comments and recommendations your team can fold into the next issue.",
  },
];

export function ProcessSection() {
  return (
    <section className="overflow-hidden bg-surface-container-low py-24">
      <Container>
        <RevealOnScroll>
          <div className="mb-16 text-center">
            <h2 className="font-headline text-3xl font-black tracking-tighter text-primary-container md:text-5xl">
              How does STRUCTURA work?
            </h2>
            <p className="mt-4 text-lg text-on-surface-variant">
              STRUCTURA follows a three-step process from kickoff to actionable comments, whether you are
              issuing a permit set in Florida or working through a difficult transfer or reuse.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title}>
              <div className="text-center md:text-left">
                <div
                  className={`mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full font-headline text-lg font-black text-on-primary md:mx-0 ${
                    i === 2 ? "bg-secondary" : "bg-primary-container"
                  }`}
                >
                  {s.n}
                </div>
                <h3 className="font-headline text-xl font-bold text-primary-container">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-on-surface-variant">{s.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
