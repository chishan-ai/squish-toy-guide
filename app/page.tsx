import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getAllProducts, getAllGuides } from "@/lib/content";
import { generateWebsiteSchema } from "@/lib/seo";

export default function HomePage() {
  const products = getAllProducts();
  const guides = getAllGuides();
  const jsonLd = generateWebsiteSchema();

  const popularProducts = [...products].sort(
    (a, b) => b.frontmatter.searchVolume - a.frontmatter.searchVolume
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1: Above the fold — brand tagline + category navigation */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-purple-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center md:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Your Guide to the World of Squish Toys
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Expert reviews, sensory scorecards, and buying guides for Needoh and
            the best fidget toys. Find your perfect squeeze.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/needoh"
              className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Explore Needoh
            </Link>
            <Link
              href="/toys/by-feel"
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Browse by Feel
            </Link>
            <Link
              href="/toys/by-use"
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Browse by Use
            </Link>
            <Link
              href="/toys/under-10"
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Under $10
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Most Popular — product card grid */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Most Popular</h2>
            <Link
              href="/needoh"
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {popularProducts.map((item) => (
              <ProductCard
                key={item.frontmatter.slug}
                product={item.frontmatter}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Guides & How-Tos */}
      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Guides &amp; How-Tos
          </h2>
          <p className="mt-2 text-gray-600">
            Everything you need to know about squish toys.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.frontmatter.slug}
                href={`/guides/${guide.frontmatter.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">
                  {guide.frontmatter.title}
                </h3>
                {guide.frontmatter.description && (
                  <p className="mt-2 text-sm text-gray-600">
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
      </section>

      {/* Section 4: What is Needoh? — SEO intro */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            What Are Needoh Toys?
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Needoh is a line of sensory fidget toys made by Schylling, famous
            for their incredibly satisfying squishy feel. Each toy is filled
            with a non-toxic, dough-like material that provides a unique tactile
            experience. From the iconic Nice Cube to the stretchy Jellyfish,
            there&apos;s a Needoh for every kind of fidgeter.
          </p>
          <Link
            href="/guides/what-is-needoh"
            className="mt-4 inline-block text-sm font-medium text-purple-600 hover:text-purple-700"
          >
            Learn more about Needoh &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
