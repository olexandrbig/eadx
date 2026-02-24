import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "@/components/mdx-remote";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24 pt-32">
      <article>
        <header className="mb-10">
          <time className="text-sm font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {post.meta.title}
          </h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            By {post.meta.author}
          </p>
        </header>
        <div className="prose-custom">
          <MDXRemote source={post.body} />
        </div>
      </article>
    </main>
  );
}
