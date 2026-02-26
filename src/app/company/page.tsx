import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { LegalPage } from "@/components/legal-page";

export function generateMetadata(): Metadata {
  const { meta } = getPage("company");
  return { title: meta.title, description: meta.description };
}

export default function CompanyPage() {
  return <LegalPage slug="company" />;
}
