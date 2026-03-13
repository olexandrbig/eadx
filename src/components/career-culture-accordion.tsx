"use client";

import { useState } from "react";

interface Item {
  title: string;
  content: string;
}

interface CareerCultureAccordionProps {
  eyebrow: string;
  eyebrowContent: string;
  items: Item[];
}

export function CareerCultureAccordion({
  eyebrow,
  eyebrowContent,
  items,
}: CareerCultureAccordionProps) {
  const allItems: Item[] = [{ title: eyebrow, content: eyebrowContent }, ...items];
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div>
      <div className="border-t border-zinc-300 dark:border-zinc-700">
        {allItems.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div key={item.title} className="border-b border-zinc-300 dark:border-zinc-700">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-4 text-left"
              >
                <span
                  className={`text-[20px] font-semibold leading-tight ${
                    isOpen ? "text-accent dark:text-accent-light" : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`text-[32px] leading-none ${
                    isOpen ? "text-accent dark:text-accent-light" : "text-zinc-500 dark:text-zinc-400"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="max-w-[520px] pb-5 pr-10 text-[15px] leading-[1.5] text-zinc-500 dark:text-zinc-400">
                  {item.content}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
