import Image from "next/image";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() =>
  import("@/components/contact-form").then((m) => m.ContactForm),
);

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <section id="contact" className={`bg-white dark:bg-zinc-950 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          {/* Decorative logo watermark — bottom aligned with submit button */}
          <div className="hidden items-end justify-center lg:flex">
            <Image
              src="/eadx-avatar.svg"
              alt=""
              width={350}
              height={350}
              className="dark:hidden"
              aria-hidden="true"
            />
            <Image
              src="/eadx-avatar.svg"
              alt=""
              width={350}
              height={350}
              className="hidden dark:block"
              aria-hidden="true"
            />
          </div>

          {/* Heading + Form */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-[48px]">
              Contact us
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Do you have questions about how our services? We are happy to help
              you!
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
