"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

interface MobileMenuProps {
  navigation: { name: string; href: string }[];
  transparent?: boolean;
}

export function MobileMenu({ navigation, transparent }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barColor =
    transparent && !open
      ? "bg-white"
      : "bg-zinc-950 dark:bg-zinc-50";

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-50 flex h-10 w-10 items-center justify-center"
      >
        <div className="flex w-6 flex-col gap-[5px]">
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${barColor} ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${barColor} ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${barColor} ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed right-0 top-0 z-40 h-full w-72 bg-white pt-24 shadow-[-4px_0_24px_0_rgba(0,0,0,0.08)] transition-transform duration-300 dark:bg-zinc-950 dark:shadow-[-4px_0_24px_0_rgba(0,0,0,0.4)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={close}
                className="block rounded-lg px-4 py-3 text-lg font-semibold text-zinc-950 underline-offset-4 decoration-accent decoration-2 transition-all hover:underline dark:text-zinc-50 dark:decoration-accent-light"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
