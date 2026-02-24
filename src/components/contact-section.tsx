import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading + description */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              Contact us!
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Do you have questions about our enterprise integration services?
              We are happy to help you!
            </p>
            <div className="mt-10 flex flex-col gap-4 text-base text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-semibold text-zinc-950 dark:text-zinc-50">
                  Address
                </p>
                <p>40 Boulevard &quot;Tsarigradsko shose&quot;</p>
                <p>Europark, floor 8</p>
                <p>Mladost 1, Sofia 1750, Bulgaria</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-950 dark:text-zinc-50">
                  Phone
                </p>
                <a
                  href="tel:+359882001282"
                  className="underline-offset-4 decoration-accent decoration-2 transition-all hover:underline"
                >
                  +359 882 001 282
                </a>
              </div>
              <div>
                <p className="font-semibold text-zinc-950 dark:text-zinc-50">
                  E-mail
                </p>
                <a
                  href="mailto:info@eadx.com"
                  className="underline-offset-4 decoration-accent decoration-2 transition-all hover:underline"
                >
                  info@eadx.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
