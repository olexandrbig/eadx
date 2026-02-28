import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ServiceMeta {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  order: number;
}

const servicesDirectory = path.join(process.cwd(), "src/content/services");

export function getAllServices(): ServiceMeta[] {
  const files = fs.readdirSync(servicesDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(servicesDirectory, file);
      const content = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(content);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        image: data.image ?? "",
        order: (data.order as number) ?? 0,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string) {
  const fullPath = path.join(servicesDirectory, `${slug}.mdx`);
  const content = fs.readFileSync(fullPath, "utf-8");
  const { data, content: body } = matter(content);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      image: data.image ?? "",
    },
    body,
  };
}

export function getAllServiceSlugs(): string[] {
  const files = fs.readdirSync(servicesDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
