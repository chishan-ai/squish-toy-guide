import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Needoh Toys | Complete Guide & Reviews",
  description:
    "Explore every Needoh fidget toy with expert reviews, sensory scorecards, and buying guides. Find the perfect squeeze.",
};

export default function NeedohPillarPage() {
  const products = getAllProducts().filter(
    (p) => p.frontmatter.brand === "Needoh"
  );

  const sorted = [...products].sort(
    (a, b) => b.frontmatter.searchVolume - a.frontmatter.searchVolume
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Needoh Toys: The Complete Guide
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-gray-600">
        Needoh by Schylling is one of the most popular fidget toy brands in the
        world. We&apos;ve tested every toy in the lineup and rated them on five
        sensory dimensions. Explore below to find your perfect squeeze.
      </p>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">All Needoh Products</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sorted.map((item) => (
            <ProductCard
              key={item.frontmatter.slug}
              product={item.frontmatter}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-purple-50 p-6">
        <h2 className="text-xl font-bold text-gray-900">What Is Needoh?</h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          Needoh is a line of sensory fidget toys manufactured by Schylling, a
          classic toy company founded in 1975. Each Needoh toy is filled with a
          proprietary non-toxic, dough-like material that provides an incredibly
          satisfying squeeze with a slow-rise return. Originally designed as
          stress relief tools, Needoh toys have become a cultural phenomenon
          thanks to viral TikTok videos showcasing their unique texture and
          ASMR-worthy squish.
        </p>
        <p className="mt-3 leading-relaxed text-gray-700">
          The lineup ranges from the iconic Nice Cube to creative shapes like
          the Jellyfish and Gumdrop. Prices typically range from $5 to $12,
          making them an accessible entry point into the world of sensory toys.
        </p>
      </div>
    </div>
  );
}
