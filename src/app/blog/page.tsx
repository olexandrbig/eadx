import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on enterprise integration, data & AI, and cloud operations from the EADX team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-zinc-100 pt-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12">
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Blog
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-zinc-900"
            >
              <div className="relative aspect-[4/3] bg-zinc-300 dark:bg-zinc-700">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-xl font-bold text-white">
                    {post.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
