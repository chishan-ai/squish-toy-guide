import Link from "next/link";
import type { ProductFrontmatter } from "@/lib/types";

interface ProductCardProps {
  product: ProductFrontmatter;
}

const scoreLabels: Record<string, string> = {
  squishiness: "Squishiness",
  durability: "Durability",
  noise: "Noise",
};

function ScoreDots({ score }: { score: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`inline-block h-2 w-2 rounded-full ${
            n <= score ? "bg-primary" : "bg-border"
          }`}
        />
      ))}
    </span>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const topScores = Object.entries(product.sensoryScores)
    .filter(([key]) => key in scoreLabels)
    .slice(0, 3);

  return (
    <Link
      href={`/needoh/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-[--radius-md] border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-primary-light to-accent-light">
        <div className="absolute inset-0 flex items-center justify-center text-4xl">
          🧸
        </div>
        <span className="absolute right-2 top-2 rounded-full bg-surface/90 px-2 py-0.5 text-xs font-semibold text-text-secondary">
          {product.priceRange}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-sm font-semibold text-text transition-colors group-hover:text-primary">
          {product.title.replace(" Review", "")}
        </h3>

        <div className="mt-2 space-y-1">
          {topScores.map(([key, value]) => (
            <div key={key} className="flex items-center justify-between text-xs">
              <span className="text-text-muted">
                {scoreLabels[key] ?? key}
              </span>
              <ScoreDots score={value as number} />
            </div>
          ))}
        </div>

        <div className="mt-auto pt-2">
          <span className="inline-block rounded-full bg-primary-light px-2 py-0.5 text-xs font-semibold text-primary">
            {product.feel}
          </span>
        </div>
      </div>
    </Link>
  );
}
