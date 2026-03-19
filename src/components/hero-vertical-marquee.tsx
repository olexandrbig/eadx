"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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

  const repeated = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = initialOffset;
    const speed = 0.5;
    const halfHeight = track.scrollHeight / 2;

    // Normalize position into valid range
    if (direction === "down") {
      while (position < -halfHeight) position += halfHeight;
      while (position >= 0) position -= halfHeight;
    }

    function animate() {
      if (direction === "up") {
        position -= speed;
        if (position <= -halfHeight) position += halfHeight;
      } else {
        position += speed;
        if (position >= 0) position -= halfHeight;
      }
      track!.style.transform = `translate3d(0, ${position}px, 0)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, initialOffset]);

  return (
    <div className="w-1/2 overflow-hidden">
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
            <Image
              src={img.src}
              alt={img.alt}
              width={280}
              height={380}
              className="h-[340px] w-full object-cover"
              priority={i < 3}
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
