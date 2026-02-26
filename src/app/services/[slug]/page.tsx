import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { MDXRemote } from "@/components/mdx-remote";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getServiceBySlug(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
    };
  } catch {
    return {};
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  let service;
  try {
    service = getServiceBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24 pt-32">
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {service.meta.title}
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            {service.meta.excerpt}
          </p>
        </header>
        <div className="prose-custom">
          <MDXRemote source={service.body} />
        </div>
      </article>
    </main>
  );
}
