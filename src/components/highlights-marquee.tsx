"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface HighlightsMarqueeProps {
  images: { src: string; alt: string }[];
}

export function HighlightsMarquee({ images }: HighlightsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate images enough times to fill the screen seamlessly
  const repeated = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 1; // px per frame

    // Width of one full set of images
    const halfWidth = track.scrollWidth / 2;

    function animate() {
      position -= speed;
      if (position <= -halfWidth) {
        position += halfWidth;
      }
      track!.style.transform = `translate3d(${position}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex w-max gap-4">
        {repeated.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="h-[280px] w-[220px] shrink-0 overflow-hidden rounded-2xl sm:h-[340px] sm:w-[260px] lg:h-[400px] lg:w-[320px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={320}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
