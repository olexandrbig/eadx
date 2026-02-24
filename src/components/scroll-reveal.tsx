"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress 0 → 1 as element moves from bottom of viewport to center
      // element enters at rect.top === vh, fully visible at rect.top === vh * 0.4
      const start = vh;
      const end = vh * 0.4;
      const raw = 1 - (rect.top - end) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const opacity = progress;
  const translateY = (1 - progress) * 60;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
