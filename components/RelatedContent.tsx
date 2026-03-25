import ProductCard from "./ProductCard";
import Link from "next/link";
import type { ProductFrontmatter, GuideFrontmatter } from "@/lib/types";

interface RelatedContentProps {
  products: ProductFrontmatter[];
  guides: GuideFrontmatter[];
}

export default function RelatedContent({ products, guides }: RelatedContentProps) {
  if (products.length === 0 && guides.length === 0) return null;

  return (
    <section className="mt-10 border-t border-border pt-8">
      {products.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 font-display text-xl font-bold text-text">Keep Exploring</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      )}

      {guides.length > 0 && (
        <div>
          <h3 className="mb-3 font-display text-lg font-semibold text-text">Related Guides</h3>
          <ul className="space-y-2">
            {guides.slice(0, 3).map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                >
                  {guide.title} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
