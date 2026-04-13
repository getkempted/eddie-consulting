"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-nav shadow-architectural">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="font-headline text-xl font-black tracking-tighter text-on-surface sm:text-2xl"
        >
          CIRCUITA
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-headline border-b-2 pb-1 text-sm font-bold tracking-tight transition-colors ${
                  active
                    ? "border-primary-container text-on-surface"
                    : "border-transparent text-on-surface-variant hover:border-outline-variant/30 hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" size="sm">
            Request Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 w-6 rounded bg-on-surface transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-on-surface ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-on-surface transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-outline-variant/15 bg-surface-container-low/95 px-4 py-4 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-headline min-h-11 rounded-md px-2 py-2 text-base font-bold tracking-tight text-on-surface hover:bg-surface-container-high/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-3 w-full justify-center">
              Request Consultation
            </Button>
          </nav>
        </div>
      ) : null}
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/25 to-transparent"
        aria-hidden
      />
    </header>
  );
}
