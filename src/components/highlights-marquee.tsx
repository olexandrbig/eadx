"use client";

import { useEffect, useRef, useCallback } from "react";

interface HighlightsMarqueeProps {
  images: { src: string; alt: string }[];
}

export function HighlightsMarquee({ images }: HighlightsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const animateRef = useRef<{
    position: number;
    animationId: number;
    isVisible: boolean;
  }>({ position: 0, animationId: 0, isVisible: false });

  // Duplicate images for seamless loop
  const repeated = [...images, ...images];

  const startAnimation = useCallback(() => {
    const track = trackRef.current;
    const state = animateRef.current;
    if (!track || !state.isVisible) return;

    const speed = 1;
    const halfWidth = track.scrollWidth / 2;

    function animate() {
      state.position -= speed;
      if (state.position <= -halfWidth) {
        state.position += halfWidth;
      }
      track!.style.transform = `translate3d(${state.position}px, 0, 0)`;
      state.animationId = requestAnimationFrame(animate);
    }

    state.animationId = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const state = animateRef.current;
        if (entry.isIntersecting) {
          state.isVisible = true;
          startAnimation();
        } else {
          state.isVisible = false;
          cancelAnimationFrame(state.animationId);
        }
      },
      { threshold: 0 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animateRef.current.animationId);
    };
  }, [startAnimation]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex w-max gap-4">
        {repeated.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="h-[280px] w-[220px] shrink-0 overflow-hidden rounded-2xl sm:h-[340px] sm:w-[260px] lg:h-[400px] lg:w-[320px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
