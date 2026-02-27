import type { Metadata } from "next";
import Image from "next/image";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the EADX team.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero — full screen with background image */}
      <section className="relative flex h-[90vh] items-end overflow-hidden pb-9">
        <Image
          src="/contacts.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />

        <div className="relative z-10 w-full max-w-8xl px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            Contact
          </p>
          <h1 className="mt-3 max-w-6xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[72px] lg:leading-[100%]">
            Shaping the future together.
          </h1>
        </div>

        <ScrollIndicator target="contact-intro" />
      </section>

      {/* Intro text */}
      <section id="contact-intro" className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-16 lg:px-12 lg:pt-24">
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Would you like to learn more about our solutions and services, or
            engage in a dialogue on AI-based transformation? We look forward to
            hearing from you and exploring how we can help your organization
            outperform the competition.
          </p>
          <div className="mt-16 h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </section>

      {/* Contact form section */}
      <ContactSection className="[&>div]:pt-0 [&>div]:lg:pt-0" />
    </main>
  );
}
