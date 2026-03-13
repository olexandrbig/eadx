import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-950 dark:text-zinc-50">
          404
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-85"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
