import { Container } from "@/components/ui/Container";
import { LightningBolt } from "@/components/animations/LightningBolt";
import { CircuitTrace } from "@/components/animations/CircuitTrace";

type Variant = "default" | "about" | "services" | "contact";

const heroImages: Record<Exclude<Variant, "default">, string> = {
  about:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  services:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  contact:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
};

export function PageHeader({
  title,
  description,
  variant = "default",
}: {
  title: string;
  description: string;
  variant?: Variant;
}) {
  if (variant === "about") {
    // "Legacy Shot" — navy-tinted low-angle skyscraper, white text.
    return (
      <div className="relative overflow-hidden bg-primary-container">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(115deg, rgba(13,28,50,0.95) 0%, rgba(13,28,50,0.82) 45%, rgba(13,28,50,0.55) 100%), url(${heroImages.about})`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,28,50,0) 0%, rgba(80,95,118,0.25) 100%)",
          }}
          aria-hidden
        />
        <CircuitTrace opacity={0.5} />
        <Container className="relative py-14 md:py-24">
          <div className="relative max-w-3xl border-l-4 border-primary-fixed-dim pl-6 md:pl-8">
            <p className="font-headline flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
              <LightningBolt size={16} />
              CIRCUITA
            </p>
            <h1 className="mt-4 font-headline text-4xl font-black tracking-tighter text-on-primary md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-fixed-dim md:text-xl">
              {description}
            </p>
          </div>
        </Container>
      </div>
    );
  }

  if (variant === "services") {
    // "Electrical Macro" — circuit/panel detail image on the right side.
    // The photo already carries the electrical signal, so no CircuitTrace here.
    return (
      <div className="relative overflow-hidden border-b border-outline-variant/10 bg-surface-container-low">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center md:block"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(13,28,50,0.55) 0%, rgba(80,95,118,0.35) 100%), url(${heroImages.services})`,
            filter: "contrast(1.05) saturate(0.6)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 15%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 15%)",
          }}
          aria-hidden
        />
        <Container className="relative py-14 md:py-20">
          <div className="relative max-w-2xl border-l-4 border-secondary pl-6 md:pl-8 md:max-w-xl">
            <p className="font-headline flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              <LightningBolt size={16} color="#0d1c32" />
              CIRCUITA
            </p>
            <h1 className="mt-4 font-headline text-4xl font-black tracking-tighter text-primary-container md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-on-surface-variant md:text-xl">
              {description}
            </p>
          </div>
        </Container>
      </div>
    );
  }

  if (variant === "contact") {
    // "Workbench" — drafting photo faded behind an animated circuit trace.
    return (
      <div className="relative overflow-hidden border-b border-outline-variant/10 bg-surface-container-low">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(242,244,246,0.88) 0%, rgba(242,244,246,0.95) 100%), url(${heroImages.contact})`,
          }}
          aria-hidden
        />
        <CircuitTrace tint="#0d1c32" opacity={0.35} />
        <Container className="relative py-14 md:py-20">
          <div className="relative max-w-3xl border-l-4 border-secondary pl-6 md:pl-8">
            <p className="font-headline flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              <LightningBolt size={16} color="#0d1c32" />
              CIRCUITA
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

  // Default — circuit backdrop on light surface.
  return (
    <div className="relative overflow-hidden border-b border-outline-variant/10 bg-surface-container-low">
      <CircuitTrace tint="#0d1c32" opacity={0.3} />
      <Container className="relative py-14 md:py-20">
        <div className="relative max-w-3xl border-l-4 border-secondary pl-6 md:pl-8">
          <p className="font-headline flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            <LightningBolt size={16} color="#0d1c32" />
            CIRCUITA
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
