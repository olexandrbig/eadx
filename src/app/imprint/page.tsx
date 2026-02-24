import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { LegalPage } from "@/components/legal-page";

export function generateMetadata(): Metadata {
  const { meta } = getPage("imprint");
  return { title: meta.title, description: meta.description };
}

export default function ImprintPage() {
  return <LegalPage slug="imprint" />;
}
