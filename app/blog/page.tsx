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
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Blog</h1>
      <p className="mt-3 max-w-2xl text-lg text-gray-600">
        Deep dives, experiments, and trends from the world of squish toys.
      </p>

      <div className="mt-10 space-y-6">
        {blogs.map((post) => (
          <Link
            key={post.frontmatter.slug}
            href={`/blog/${post.frontmatter.slug}`}
            className="block rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900">
              {post.frontmatter.title}
            </h2>
            {post.frontmatter.description && (
              <p className="mt-2 text-gray-600">
                {post.frontmatter.description}
              </p>
            )}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-sm font-medium text-purple-600">
                Read article &rarr;
              </span>
              <span className="text-xs text-gray-400">
                {post.frontmatter.lastUpdated}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
