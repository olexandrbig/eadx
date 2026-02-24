import Image from "next/image";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";

const footerLinks = [
  {
    items: [
      { name: "Services", href: "/blog" },
      { name: "Company", href: "/blog" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    items: [
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Imprint", href: "/imprint" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950">
      {/* Top divider — gradient fade like the reference */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="px-8 pb-12 pt-16 lg:px-12">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/">
            <Image
              src="/h-eadx-logo-white.svg"
              alt="EADX"
              width={150}
              height={40}
            />
          </Link>
        </div>

        {/* Main grid: link columns + address */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Link columns */}
          {footerLinks.map((column, i) => (
            <nav key={i} className="flex flex-col gap-2">
              {column.items.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-semibold text-white underline-offset-4 decoration-accent-light decoration-2 transition-all hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          ))}

          {/* Address block */}
          <div className="flex flex-col gap-3 text-base leading-7 text-zinc-300">
            <div>
              <p className="font-semibold text-white">EADX</p>
              <p>40 Boulevard &quot;Tsarigradsko shose&quot;</p>
              <p>Europark, floor 8</p>
              <p>Mladost 1, Sofia 1750</p>
              <p>Bulgaria</p>
            </div>
            <a
              href="tel:+359882001282"
              className="font-semibold text-white underline-offset-4 decoration-accent-light decoration-2 transition-all hover:underline"
            >
              +359 882 001 282
            </a>
            <a
              href="mailto:info@eadx.com"
              className="font-semibold text-white underline-offset-4 decoration-accent-light decoration-2 transition-all hover:underline"
            >
              info@eadx.com
            </a>
          </div>
        </div>

        {/* Bottom row: social icons + copyright + scroll to top */}
        <div className="mt-16 flex items-center justify-between border-t border-zinc-800 pt-8">
          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/eadxglobal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 transition-colors hover:text-accent-light"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <p className="text-sm font-medium text-zinc-400">
            &copy; {new Date().getFullYear()} EADX. All rights reserved.
          </p>

          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}
