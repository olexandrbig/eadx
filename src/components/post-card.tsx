import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-2xl bg-white p-8 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] dark:bg-zinc-900 dark:shadow-[0_2px_8px_0_rgba(0,0,0,0.3)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <time className="text-sm text-zinc-500 dark:text-zinc-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
          {post.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {post.excerpt}
        </p>
        <div className="mt-6 flex justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-300 text-zinc-400 transition-all group-hover:border-zinc-950 group-hover:text-zinc-950 dark:border-zinc-600 dark:text-zinc-500 dark:group-hover:border-white dark:group-hover:text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 8h8M9 4l4 4-4 4" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
