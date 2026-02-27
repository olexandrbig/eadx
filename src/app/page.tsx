import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "@/lib/services";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const services = getAllServices();

  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative flex h-screen items-end overflow-hidden pb-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/jump.webm" type="video/webm" />
          <source src="/jump.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-8xl px-8 lg:px-12">
          <h1 className="max-w-7xl text-4xl font-bold leading-[100%] tracking-tight text-white sm:text-5xl lg:text-[72px]">
            We accelerate the transformation to high performance enterprises
          </h1>
          <p className="mt-8 max-w-7xl text-lg font-medium leading-[160%] text-white/80 sm:text-xl lg:text-[28px]">
            We help enterprises build high-performance organizations by
            modernizing their technology foundations and unlocking measurable
            business value through integration, data and AI.
          </p>
        </div>

        <ScrollIndicator target="about" />
      </section>

      {/* Section 2 — We are EADX */}
      <section id="about" className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex items-center justify-center">
              <Image
                src="/eadx-avatar.svg"
                alt="EADX"
                width={400}
                height={400}
                className="h-auto w-full max-w-[400px] dark:hidden"
              />
              <Image
                src="/v-01-eadx-logo-negative.svg"
                alt="EADX"
                width={400}
                height={400}
                className="hidden h-auto w-full max-w-[400px] dark:block"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-[48px]">
                We are EADX
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-[20px]">
                EADX specializes in accelerating our clients&apos;
                transformation into high-performance enterprises. With a
                dedicated focus on enterprise integration, data &amp; AI and
                cloud operations, our team leverages decades of experience to
                design, optimize, and operate your enterprise systems and data
                platforms — so you can move faster, scale smarter, and
                outperform your competition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Global reach, local expertise */}
      <section className="relative flex min-h-[600px] items-end overflow-hidden lg:min-h-[700px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/globe.webm" type="video/webm" />
          <source src="/globe.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 w-full max-w-8xl px-8 pb-16 lg:px-12 lg:pb-12">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[40px]">
            Global reach, local expertise
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            We combine near-short and offshore delivery capabilities with onsite
            local presence and understanding
          </p>
        </div>
      </section>

      {/* Section 4 — EADX always on your side */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex items-center justify-center">
              <Image
                src="/v-01-eadx-logo.svg"
                alt="EADX"
                width={350}
                height={420}
                className="h-auto w-full max-w-[350px] dark:hidden"
              />
              <Image
                src="/v-01-eadx-logo-negative.svg"
                alt="EADX"
                width={350}
                height={420}
                className="hidden h-auto w-full max-w-[350px] dark:block"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-[48px]">
                EADX always on your side
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-[20px]">
                We embed our experts directly within your team, working shoulder
                to shoulder with you to accelerate results. With a talented
                global workforce spanning Germany, Canada, Bulgaria, and India,
                and a deep commitment to continuous development, our people bring
                the skills, energy, and dedication to deliver real value —
                immediately and sustainably
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Learn more about our services */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 lg:text-[32px]">
            Learn more about our services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-700">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Contact */}
      <ContactSection />
    </>
  );
}
