import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guides — Squish Toy Guide",
  description:
    "Expert guides on Needoh toys — buying advice, cleaning tips, and everything you need to know about squish toys.",
};

export default function GuidesPage() {
  const guides = getAllGuides().sort(
    (a, b) => b.frontmatter.searchVolume - a.frontmatter.searchVolume
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Guides & How-Tos
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-gray-600">
        Everything you need to know about Needoh toys — from buying guides to
        care tips.
      </p>

      <div className="mt-10 space-y-6">
        {guides.map((guide) => (
          <Link
            key={guide.frontmatter.slug}
            href={`/guides/${guide.frontmatter.slug}`}
            className="block rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              {guide.frontmatter.title}
            </h2>
            {guide.frontmatter.description && (
              <p className="mt-2 text-gray-600">
                {guide.frontmatter.description}
              </p>
            )}
            <span className="mt-3 inline-block text-sm font-medium text-purple-600">
              Read guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
