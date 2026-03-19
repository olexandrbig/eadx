"use client";

import { useEffect, useRef, useCallback } from "react";

interface HeroVerticalMarqueeProps {
  leftImages: { src: string; alt: string }[];
  rightImages: { src: string; alt: string }[];
}

// Image height 340px + gap 12px = 352px per slot, offset by half image height
const IMAGE_OFFSET = -170;

function VerticalColumn({
  images,
  direction,
  initialOffset,
}: {
  images: { src: string; alt: string }[];
  direction: "up" | "down";
  initialOffset: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    position: number;
    animationId: number;
    isVisible: boolean;
  }>({ position: initialOffset, animationId: 0, isVisible: false });

  const repeated = [...images, ...images];

  const startAnimation = useCallback(() => {
    const track = trackRef.current;
    const state = stateRef.current;
    if (!track || !state.isVisible) return;

    const speed = 0.5;
    const halfHeight = track.scrollHeight / 2;

    // Normalize position into valid range
    if (direction === "down") {
      while (state.position < -halfHeight) state.position += halfHeight;
      while (state.position >= 0) state.position -= halfHeight;
    }

    function animate() {
      if (direction === "up") {
        state.position -= speed;
        if (state.position <= -halfHeight) state.position += halfHeight;
      } else {
        state.position += speed;
        if (state.position >= 0) state.position -= halfHeight;
      }
      track!.style.transform = `translate3d(0, ${state.position}px, 0)`;
      state.animationId = requestAnimationFrame(animate);
    }

    state.animationId = requestAnimationFrame(animate);
  }, [direction]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const state = stateRef.current;
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
      cancelAnimationFrame(stateRef.current.animationId);
    };
  }, [startAnimation]);

  return (
    <div ref={containerRef} className="w-1/2 overflow-hidden">
      <div
        ref={trackRef}
        className="flex flex-col gap-3"
        style={{ transform: `translate3d(0, ${initialOffset}px, 0)` }}
      >
        {repeated.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="shrink-0 overflow-hidden rounded-[18px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-[340px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroVerticalMarquee({
  leftImages,
  rightImages,
}: HeroVerticalMarqueeProps) {
  return (
    <div className="flex h-full gap-3 pr-4">
      <VerticalColumn images={leftImages} direction="up" initialOffset={0} />
      <VerticalColumn images={rightImages} direction="down" initialOffset={IMAGE_OFFSET} />
    </div>
  );
}
