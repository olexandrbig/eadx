import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogMeta[] {
  const files = fs.readdirSync(blogDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, file);
      const content = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(content);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ?? "",
        image: data.image ?? "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const content = fs.readFileSync(fullPath, "utf-8");
  const { data, content: body } = matter(content);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      image: data.image ?? "",
    },
    body,
  };
}

export function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(blogDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
