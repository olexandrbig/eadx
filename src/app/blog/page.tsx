import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { BlogSearch } from "@/components/blog-search";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights from the EADX team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-zinc-100 pt-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="mb-10 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Blog
        </h1>
        <BlogSearch posts={posts} />
      </div>
    </main>
  );
}
