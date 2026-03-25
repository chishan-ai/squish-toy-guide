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

      {/* Section 1: Above the fold */}
      <section className="border-b border-border bg-gradient-to-b from-primary-light to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center md:py-16">
          <h1 className="font-display text-3xl font-bold tracking-tight text-text md:text-5xl">
            Your Guide to the World of Squish Toys
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Expert reviews, sensory scorecards, and buying guides for Needoh and
            the best fidget toys. Find your perfect squeeze.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/needoh"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Explore Needoh
            </Link>
            <Link
              href="/guides/best-needoh-toys"
              className="rounded-full border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
            >
              Best Picks
            </Link>
            <Link
              href="/guides"
              className="rounded-full border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
            >
              Buying Guides
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:bg-primary-light hover:text-primary"
            >
              Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Most Popular */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold text-text">Most Popular</h2>
            <Link
              href="/needoh"
              className="text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
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
      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl font-bold text-text">
            Guides &amp; How-Tos
          </h2>
          <p className="mt-2 text-text-secondary">
            Everything you need to know about squish toys.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.frontmatter.slug}
                href={`/guides/${guide.frontmatter.slug}`}
                className="group rounded-[--radius-md] border border-border bg-background p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
              >
                <h3 className="font-semibold text-text transition-colors group-hover:text-primary">
                  {guide.frontmatter.title}
                </h3>
                {guide.frontmatter.description && (
                  <p className="mt-2 text-sm text-text-secondary">
                    {guide.frontmatter.description}
                  </p>
                )}
                <span className="mt-3 inline-block text-sm font-semibold text-primary">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What is Needoh? */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-text">
            What Are Needoh Toys?
          </h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Needoh is a line of sensory fidget toys made by Schylling, famous
            for their incredibly satisfying squishy feel. Each toy is filled
            with a non-toxic, dough-like material that provides a unique tactile
            experience. From the iconic Nice Cube to the stretchy Jellyfish,
            there&apos;s a Needoh for every kind of fidgeter.
          </p>
          <Link
            href="/guides/what-is-needoh"
            className="mt-4 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Learn more about Needoh &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
