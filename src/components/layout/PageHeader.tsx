import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-outline-variant/10 bg-surface-container-low">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] blueprint-grid"
        aria-hidden
      />
      <Container className="relative py-14 md:py-20">
        <div className="max-w-3xl border-l-4 border-secondary pl-6 md:pl-8">
          <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            STRUCTURA
          </p>
          <h1 className="mt-4 font-headline text-4xl font-black tracking-tighter text-primary-container md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
