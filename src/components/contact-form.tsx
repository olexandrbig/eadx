"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const inputClass =
  "w-full rounded-lg bg-zinc-100 px-6 py-4 text-base text-zinc-950 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-accent dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:ring-accent-light";

export function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    // TODO: integrate with backend / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-zinc-100 p-12 dark:bg-zinc-900">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
            Thank you!
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Your message has been sent. We&apos;ll get back to you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First name*"
          required
          className={inputClass}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name*"
          required
          className={inputClass}
        />
      </div>
      <input
        type="text"
        name="company"
        placeholder="Your company*"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Your email address*"
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        className="w-full rounded-lg bg-zinc-100 px-6 py-4 text-base text-zinc-950 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-accent dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:ring-accent-light"
      />

      <label className="flex cursor-pointer items-start gap-3 py-2">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border-2 border-zinc-300 bg-white checked:border-accent checked:bg-accent dark:border-zinc-600 dark:bg-zinc-800 dark:checked:border-accent-light dark:checked:bg-accent-light"
        />
        <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          I agree that my personal data will be processed in accordance with the{" "}
          <Link
            href="/privacy"
            className="font-medium text-accent underline-offset-4 decoration-accent decoration-2 transition-all hover:underline dark:text-accent-light dark:decoration-accent-light"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={!agreed}
        className="mt-2 w-full cursor-pointer rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send message
      </button>
    </form>
  );
}
