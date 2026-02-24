import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { getMDXComponents } from "@/lib/mdx";

interface MDXRemoteProps {
  source: string;
}

export async function MDXRemote({ source }: MDXRemoteProps) {
  const compiled = await compile(source, {
    outputFormat: "function-body",
  });

  const { default: MDXContent } = await run(String(compiled), {
    ...runtime,
    baseUrl: import.meta.url,
  });

  const components = getMDXComponents();

  return <MDXContent components={components} />;
}
