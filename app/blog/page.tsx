import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Squish Toy Guide",
  description:
    "The latest on Needoh toys: what they're made of, TikTok trends, experiments, and more.",
};

export default function BlogPage() {
  const blogs = getAllBlogs().sort(
    (a, b) => b.frontmatter.searchVolume - a.frontmatter.searchVolume
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold text-text md:text-4xl">Blog</h1>
      <p className="mt-3 max-w-2xl text-lg text-text-secondary">
        Deep dives, experiments, and trends from the world of squish toys.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {blogs.map((post) => (
          <Link
            key={post.frontmatter.slug}
            href={`/blog/${post.frontmatter.slug}`}
            className="group flex flex-col rounded-[--radius-md] border border-border bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
          >
            <h2 className="font-display text-lg font-bold text-text transition-colors group-hover:text-primary">
              {post.frontmatter.title}
            </h2>
            {post.frontmatter.description && (
              <p className="mt-2 text-sm text-text-secondary">
                {post.frontmatter.description}
              </p>
            )}
            <div className="mt-auto flex items-center gap-3 pt-4">
              <span className="text-sm font-semibold text-primary">
                Read article &rarr;
              </span>
              <span className="text-xs text-text-muted">
                {post.frontmatter.lastUpdated}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
