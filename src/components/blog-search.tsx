"use client";

import { useState } from "react";
import type { PostMeta } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export function BlogSearch({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((post) => {
    const search = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search) ||
      post.author.toLowerCase().includes(search)
    );
  });

  return (
    <>
      {/* Search bar */}
      <div className="mb-12">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keyword"
            className="w-full rounded-full border border-zinc-300 bg-white py-3 pl-5 pr-12 text-base text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
          />
          <svg
            className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-8">
        {filtered.length > 0 ? (
          filtered.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="py-12 text-center text-lg text-zinc-500 dark:text-zinc-400">
            No articles found for &quot;{query}&quot;
          </p>
        )}
      </div>
    </>
  );
}
