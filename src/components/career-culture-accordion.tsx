"use client";

import { useState } from "react";
import Image from "next/image";

interface Item {
  title: string;
  content: string;
  image: string;
}

interface CareerCultureAccordionProps {
  eyebrow: string;
  eyebrowContent: string;
  eyebrowImage: string;
  items: Item[];
}

export function CareerCultureAccordion({
  eyebrow,
  eyebrowContent,
  eyebrowImage,
  items,
}: CareerCultureAccordionProps) {
  const allItems = [
    { title: eyebrow, content: eyebrowContent, image: eyebrowImage },
    ...items,
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const activeImage = openIndex !== null ? allItems[openIndex].image : allItems[1].image;

  return (
    <>
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        {allItems.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={item.title}
            width={760}
            height={760}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              item.image === activeImage ? "opacity-100" : "opacity-0"
            }`}
            priority={index <= 1}
          />
        ))}
      </div>
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
    </>
  );
}
