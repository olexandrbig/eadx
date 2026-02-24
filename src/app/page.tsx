import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { VideoExpandSection } from "@/components/video-expand-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      {/* Section 1 — Enterprise integration */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Transform operational efficiency
            <br />
            <span className="text-white/90">into strategic advantage</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            We make your Enterprise IT systems work together as one with our
            leading enterprise integration services.
          </p>
        </div>

        <ScrollIndicator target="hero" />
      </section>

      {/* Section 2 — Sticky video with sequential text boxes */}
      <VideoExpandSection
        id="hero"
        videoSrc="/hero-video-2.mp4"
        blocks={[
          {
            title: "We accelerate the transformation",
            titleAccent: "to high performance enterprises",
            paragraphs: [
              "We decrease IT cost, improve operations, and innovate your business so that you can outperform your competition.",
            ],
            side: "right",
            accent: true,
          },
          {
            title: "Enterprise integration",
            titleAccent: "that delivers results",
            paragraphs: [
              "Our proven methodology connects your systems, streamlines processes, and unlocks the full potential of your technology investments.",
            ],
            side: "left",
          },
        ]}
      />

      {/* Latest Posts */}
      <section id="content" className="bg-zinc-100 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Latest Posts
            </h2>
            <Link
              href="/blog"
              className="text-base font-semibold text-zinc-950 underline-offset-4 decoration-accent decoration-2 transition-all hover:underline dark:text-zinc-50 dark:decoration-accent-light"
            >
              View all articles
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
