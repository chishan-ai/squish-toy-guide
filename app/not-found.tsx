import Link from "next/link";
import { getAllProducts } from "@/lib/content";
import ProductCard from "@/components/ProductCard";

export default function NotFound() {
  const products = getAllProducts()
    .sort((a, b) => b.frontmatter.searchVolume - a.frontmatter.searchVolume)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <p className="text-6xl">🤔</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-text">
        Page Not Found
      </h1>
      <p className="mt-3 text-lg text-text-secondary">
        We couldn&apos;t find what you&apos;re looking for. But here are some
        popular squish toys to explore instead.
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-block rounded-[--radius-md] bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Go Home
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 font-display text-xl font-bold text-text">
          Popular Right Now
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {products.map((item) => (
            <ProductCard
              key={item.frontmatter.slug}
              product={item.frontmatter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
