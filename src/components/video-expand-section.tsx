"use client";

import { useRef, useEffect, useState } from "react";

interface TextBlock {
  title: string;
  titleAccent: string;
  paragraphs: string[];
  side: "left" | "right";
  accent?: boolean;
}

interface VideoExpandSectionProps {
  videoSrc: string;
  blocks: TextBlock[];
  id?: string;
}

export function VideoExpandSection({
  videoSrc,
  blocks,
  id,
}: VideoExpandSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight;
      const vh = window.innerHeight;

      const total = sectionHeight + vh;
      const raw = (vh - rect.top) / total;
      setScroll(Math.min(1, Math.max(0, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Timeline (tighter):
  // 0.00 – 0.12  video expand (80% → 100%)
  // 0.12 – 0.42  text block 1 travels bottom → top
  // 0.38 – 0.68  text block 2 travels bottom → top (slight overlap)
  // 0.68 – 1.00  section scrolls away

  const clamp = (v: number) => Math.min(1, Math.max(0, v));

  // Video expand
  const videoProgress = clamp(scroll / 0.12);
  const scale = 0.8 + videoProgress * 0.2;
  const radius = (1 - videoProgress) * 24;

  // Each block travels from below to above viewport
  const blockTimings = [
    [0.20, 0.60],
    [0.40, 0.80],
  ];

  return (
    <section ref={sectionRef} id={id} className="relative bg-black">
      <div className="h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Video — scales up */}
          <div
            className="absolute inset-0 origin-center overflow-hidden"
            style={{
              transform: `scale(${scale})`,
              borderRadius: `${radius}px`,
              willChange: "transform, border-radius",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>

          {/* Text blocks */}
          {blocks.map((block, i) => {
            const timing = blockTimings[i];
            if (!timing) return null;

            // progress 0→1 as scroll moves through this block's window
            const progress = clamp(
              (scroll - timing[0]) / (timing[1] - timing[0]),
            );

            // Translate from bottom (+110vh) to top (-110vh)
            // Centered (visible) at progress ~0.5
            const translateY = (1 - progress * 2) * 110;

            const positionClass =
              block.side === "right"
                ? "justify-end pr-[45%]"
                : "justify-start pl-[45%]";

            return (
              <div
                key={i}
                className={`pointer-events-none absolute inset-0 z-10 flex items-center ${positionClass}`}
                style={{
                  transform: `translateY(${translateY}vh)`,
                  willChange: "transform",
                }}
              >
                <div
                  className={`max-w-2xl rounded-sm p-8 backdrop-blur-sm sm:p-10 ${
                    block.accent
                      ? "bg-[#005774]/90"
                      : "bg-black/85"
                  }`}
                >
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                    {block.title}
                    <br />
                    {block.titleAccent}
                  </h2>
                  {block.paragraphs.map((text, j) => (
                    <p
                      key={j}
                      className="mt-6 text-base leading-7 text-zinc-300 sm:text-lg"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
