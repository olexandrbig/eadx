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
      className="absolute bottom-8 right-12 z-10 cursor-pointer"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 transition-colors hover:border-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </button>
  );
}
