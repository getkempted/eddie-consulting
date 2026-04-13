import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-primary-container text-on-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-headline text-2xl font-black tracking-tighter">CIRCUITA</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-fixed-dim">
              CIRCUITA is an electrical engineering consulting practice serving architects, developers, and
              contractors in Florida and the Southeast United States. Services include electrical plan review,
              constructability & bid-risk review, lighting design, EV charging consulting, and more.
            </p>
          </div>
          <div>
            <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
              Navigate
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
              Services
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services#plan-review">
                  Electrical plan review
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services#constructability">
                  Constructability & bid risk
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services#lighting">
                  Lighting design & photometrics
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services#ev-charging">
                  EV charging infrastructure
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services#design-support">
                  Electrical design support
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services#marina">
                  Marina & waterfront electrical
                </Link>
              </li>
              <li>
                <Link className="text-on-primary/90 transition-colors hover:text-on-primary" href="/services#energy-code">
                  Energy & code compliance
                </Link>
              </li>
            </ul>
            <p className="font-headline mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
              Start a conversation
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-secondary-container underline-offset-4 transition-colors hover:text-on-primary"
            >
              Request consultation
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-outline/20 pt-8 text-xs text-primary-fixed-dim">
          © {new Date().getFullYear()} CIRCUITA. Electrical engineering consulting.
        </div>
      </div>
    </footer>
  );
}
