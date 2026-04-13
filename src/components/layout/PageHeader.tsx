import { Container } from "@/components/ui/Container";

type Variant = "default" | "about" | "services" | "contact";

const heroImages: Record<Exclude<Variant, "default">, string> = {
  about:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  services:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBD8vJfgLvtV5zLQQ3CT5VsE9iz3C1t171Toh4fUXKEw5ZDpYbBrDYeXy-mI_r0VL3DwKkVJlvApLnXSkv3v4VMzEjHpZZCZQMy_W-UZRUJCFbS5-NGpiOq0crbTD7WhEVR6SNeZgYOr1Xf8T02bTpnxJsYWKRFeafuLAJBD48Gp6zaPqbPY4yIp6jaia4Ul7_erpOjsc3vNp12FF1KzJ0Sxv7E2vrRK_tI1xnQ_2rCfdOIFBF071RiR2yks-iDKaumTJjPCaUMbjap",
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
        <Container className="relative py-14 md:py-24">
          <div className="max-w-3xl border-l-4 border-primary-fixed-dim pl-6 md:pl-8">
            <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
              STRUCTURA
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
    // "Structural Macro" — steel detail image on the right side.
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
          <div className="max-w-2xl border-l-4 border-secondary pl-6 md:pl-8 md:max-w-xl">
            <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              STRUCTURA
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
    // "Workbench" — drafting photo faded behind the blueprint grid.
    return (
      <div className="relative overflow-hidden border-b border-outline-variant/10 bg-surface-container-low">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(242,244,246,0.88) 0%, rgba(242,244,246,0.95) 100%), url(${heroImages.contact})`,
          }}
          aria-hidden
        />
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

  // Default — existing treatment.
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
