"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/mobile-menu";

interface HeaderClientProps {
  navigation: { name: string; href: string }[];
}

export function HeaderClient({ navigation }: HeaderClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      // Stay transparent through all full-screen hero sections
      const heroSections = document.querySelectorAll("section.h-screen");
      const heroEnd =
        heroSections.length > 0
          ? (heroSections[heroSections.length - 1] as HTMLElement).offsetTop +
            (heroSections[heroSections.length - 1] as HTMLElement).offsetHeight -
            80
          : 50;
      setScrolled(window.scrollY > heroEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.06)] dark:bg-zinc-950 dark:shadow-[0_4px_12px_0_rgba(0,0,0,0.4)]"
      }`}
    >
      <nav className="flex h-20 items-center justify-between px-8 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src={transparent ? "/h-eadx-logo-white.svg" : "/h-eadx-logo.svg"}
            alt="EADX"
            width={150}
            height={40}
            className={transparent ? "" : "dark:invert"}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-12 md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-lg font-semibold underline-offset-4 decoration-2 transition-all hover:underline ${
                  transparent
                    ? "text-white hover:decoration-accent-light"
                    : "text-zinc-950 hover:decoration-accent dark:text-zinc-50 dark:hover:decoration-accent-light"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <MobileMenu navigation={navigation} transparent={transparent} />
      </nav>
    </header>
  );
}
