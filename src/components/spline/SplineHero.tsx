"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

function SplineFallback() {
  return (
    <div
      className="flex h-full min-h-[280px] w-full items-center justify-center rounded-lg bg-secondary/25 text-center text-on-primary"
      role="status"
      aria-live="polite"
    >
      <span className="font-headline text-sm font-bold tracking-wide text-primary-fixed-dim">
        Loading 3D scene…
      </span>
    </div>
  );
}

type SplineHeroProps = {
  sceneUrl: string;
  className?: string;
};

/**
 * Lazy-loaded Spline scene. Set NEXT_PUBLIC_SPLINE_SCENE_URL in .env.local
 * to your prod.spline.design scene URL.
 */
export function SplineHero({ sceneUrl, className = "" }: SplineHeroProps) {
  if (!sceneUrl) {
    return (
      <div
        className={`relative flex min-h-[min(60vh,520px)] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-secondary/20 to-primary-container/20 ${className}`.trim()}
      >
        <div className="blueprint-grid absolute inset-0 opacity-[0.2]" aria-hidden />
        <div className="relative px-6 text-center">
          <p className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-secondary-container">
            3D hero
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-fixed-dim">
            Set{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-on-primary">
              NEXT_PUBLIC_SPLINE_SCENE_URL
            </code>{" "}
            to your Spline scene URL to show the interactive model here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative h-[min(60vh,520px)] w-full overflow-hidden rounded-lg ${className}`.trim()}>
      <Suspense fallback={<SplineFallback />}>
        <Spline scene={sceneUrl} className="h-full w-full" />
      </Suspense>
    </div>
  );
}
