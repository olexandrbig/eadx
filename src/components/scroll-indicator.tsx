"use client";

export function ScrollIndicator({ target }: { target: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: "smooth" });
      }}
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
    >
      <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
        <div className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
      </div>
    </button>
  );
}
