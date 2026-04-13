"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function HeroBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    const gradient = gradientRef.current;
    if (!wrapper || !img || !gradient) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(
      img,
      { yPercent: -30, scale: 1.25, ease: "none" },
      0,
    );

    tl.fromTo(
      img,
      { opacity: 0.2 },
      { opacity: 0.35, ease: "none" },
      0,
    );

    tl.to(
      gradient,
      { opacity: 0.7, ease: "none" },
      0,
    );
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="pointer-events-none absolute inset-0" aria-hidden>
      <img
        ref={imgRef}
        src="/images/hero-blueprint-bg.jpg"
        alt=""
        className="h-full w-full scale-110 object-cover opacity-[0.2] mix-blend-luminosity"
      />
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-primary-container via-transparent to-secondary opacity-20"
      />
    </div>
  );
}
