"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Needoh", href: "/needoh" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function StickyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            🧸 Squish Toy Guide
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Browse by
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/needoh"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  All Needoh Toys
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  All Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  All Blog Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
