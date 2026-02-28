import { NextResponse } from "next/server";
import { createLead, type ContactFormData } from "@/lib/zoho";

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

const MAX_LEN = { short: 100, email: 254, message: 5000 } as const;

/** Strip control characters (C0, C1, DEL) except newline/tab in message */
function sanitize(str: string, allowNewlines = false): string {
  return allowNewlines
    ? str.replace(/[^\P{Cc}\n\t]/gu, "")
    : str.replace(/\p{Cc}/gu, "");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const firstName = sanitize(typeof body.firstName === "string" ? body.firstName.trim() : "");
  const lastName = sanitize(typeof body.lastName === "string" ? body.lastName.trim() : "");
  const company = sanitize(typeof body.company === "string" ? body.company.trim() : "");
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const phone = sanitize(typeof body.phone === "string" ? body.phone.trim() : "");
  const message = sanitize(typeof body.message === "string" ? body.message.trim() : "", true);

  if (!firstName || !lastName || !company || !email) {
    return NextResponse.json(
      { error: "First name, last name, company, and email are required." },
      { status: 400 },
    );
  }

  if (
    firstName.length > MAX_LEN.short ||
    lastName.length > MAX_LEN.short ||
    company.length > MAX_LEN.short ||
    phone.length > MAX_LEN.short
  ) {
    return NextResponse.json(
      { error: "Field values are too long." },
      { status: 400 },
    );
  }

  if (email.length > MAX_LEN.email) {
    return NextResponse.json(
      { error: "Email address is too long." },
      { status: 400 },
    );
  }

  if (message.length > MAX_LEN.message) {
    return NextResponse.json(
      { error: "Message is too long (max 5000 characters)." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const formData: ContactFormData = {
    firstName,
    lastName,
    company,
    email,
    ...(phone && { phone }),
    ...(message && { message }),
  };

  try {
    await createLead(formData);
  } catch (err) {
    console.error("Zoho CRM error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
