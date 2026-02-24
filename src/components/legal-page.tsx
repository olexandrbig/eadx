import { getPage } from "@/lib/pages";
import { MDXRemote } from "@/components/mdx-remote";

interface LegalPageProps {
  slug: string;
}

export async function LegalPage({ slug }: LegalPageProps) {
  const { meta, body } = getPage(slug);

  return (
    <main className="pt-20">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            {meta.title}
          </h1>
          {meta.lastUpdated && (
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              Last updated:{" "}
              {new Date(meta.lastUpdated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </header>
        <div className="prose-custom">
          <MDXRemote source={body} />
        </div>
      </div>
    </main>
  );
}
