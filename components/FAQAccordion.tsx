"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/types";

interface FAQAccordionProps {
  items: FAQItem[];
  heading?: string;
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-text transition-colors hover:text-primary"
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <span
          className={`shrink-0 text-text-muted transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-4 text-sm leading-relaxed text-text-secondary">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion({
  items,
  heading = "Frequently Asked Questions",
}: FAQAccordionProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-4 font-display text-xl font-bold text-text">
        {heading}
      </h2>
      <div className="rounded-[--radius-md] border border-border bg-surface px-5">
        {items.map((item, i) => (
          <FAQRow key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
