import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "EADX services — Enterprise Integration, Data & AI, and Cloud Operations.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main className="bg-zinc-100 pt-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12">
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Our Services
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-zinc-900"
            >
              <div className="relative aspect-[4/3] bg-zinc-300 dark:bg-zinc-700">
                <Image
                  src="/service1.png"
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
