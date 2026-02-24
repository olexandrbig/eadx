import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the EADX team.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactSection />
    </main>
  );
}
