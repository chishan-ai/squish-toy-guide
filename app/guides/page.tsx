import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guides | Squish Toy Guide",
  description:
    "Expert guides on Needoh toys: buying advice, cleaning tips, and everything you need to know about squish toys.",
};

export default function GuidesPage() {
  const guides = getAllGuides().sort(
    (a, b) => b.frontmatter.searchVolume - a.frontmatter.searchVolume
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold text-text md:text-4xl">
        Guides & How-Tos
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-text-secondary">
        Everything you need to know about Needoh toys, from buying guides to
        care tips.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.frontmatter.slug}
            href={`/guides/${guide.frontmatter.slug}`}
            className="group flex flex-col rounded-[--radius-md] border border-border bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            <h2 className="font-display text-lg font-bold text-text transition-colors group-hover:text-primary">
              {guide.frontmatter.title}
            </h2>
            {guide.frontmatter.description && (
              <p className="mt-2 text-sm text-text-secondary">
                {guide.frontmatter.description}
              </p>
            )}
            <span className="mt-auto pt-4 text-sm font-semibold text-primary">
              Read guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
