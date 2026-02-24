import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pagesDirectory = path.join(process.cwd(), "src/content/pages");

export interface PageMeta {
  title: string;
  description: string;
  lastUpdated: string;
}

export function getPage(slug: string) {
  const fullPath = path.join(pagesDirectory, `${slug}.mdx`);
  const content = fs.readFileSync(fullPath, "utf-8");
  const { data, content: body } = matter(content);

  return {
    meta: {
      title: data.title ?? slug,
      description: data.description ?? "",
      lastUpdated: data.lastUpdated ?? "",
    } as PageMeta,
    body,
  };
}
