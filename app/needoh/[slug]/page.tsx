import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProducts, getProductBySlug, getAllGuides } from "@/lib/content";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { renderMdx } from "@/lib/mdx";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SensoryScorecard from "@/components/SensoryScorecard";
import AdSlot from "@/components/AdSlot";
import RelatedContent from "@/components/RelatedContent";
import type { ProductFrontmatter, GuideFrontmatter } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getProductBySlug(slug);
  if (!item) return {};

  const { frontmatter } = item;
  return {
    title: frontmatter.title,
    description:
      frontmatter.description ??
      `${frontmatter.title} — expert review with sensory scorecard on Squish Toy Guide.`,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getProductBySlug(slug);
  if (!item) notFound();

  const { frontmatter, content } = item;
  const mdxContent = await renderMdx(content);

  // Resolve related products and guides
  const allProducts = getAllProducts();
  const allGuides = getAllGuides();

  const relatedProducts = frontmatter.relatedProducts
    .map((s) => allProducts.find((p) => p.frontmatter.slug === s)?.frontmatter)
    .filter((p): p is ProductFrontmatter => p !== undefined);

  const relatedGuides = frontmatter.relatedGuides
    .map((s) => allGuides.find((g) => g.frontmatter.slug === s)?.frontmatter)
    .filter((g): g is GuideFrontmatter => g !== undefined);

  const productSchema = generateProductSchema(frontmatter);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Needoh", url: "/needoh" },
    { name: frontmatter.title.replace(" Review", ""), url: `/needoh/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema, breadcrumbSchema]),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-6">
        {/* Breadcrumb */}
        <BreadcrumbNav
          items={[
            { label: "Needoh", href: "/needoh" },
            { label: frontmatter.title.replace(" Review", "") },
          ]}
        />

        {/* Hero section */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Product image placeholder */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-6xl">
            🧸
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-purple-600">
              {frontmatter.brand}
            </span>
            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              {frontmatter.title.replace(" Review", "")}
            </h1>
            <p className="mt-2 text-lg text-gray-600">{frontmatter.priceRange}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                {frontmatter.feel}
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {frontmatter.useCase}
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Ages {frontmatter.ageRange}
              </span>
            </div>

            <p className="mt-2 text-xs text-gray-400">
              Last updated: {frontmatter.lastUpdated}
            </p>
          </div>
        </div>

        {/* Ad slot 1 — after hero */}
        <div className="my-8">
          <AdSlot format="leaderboard" className="hidden md:flex" />
          <AdSlot format="rectangle" className="flex md:hidden" />
        </div>

        {/* Sensory Scorecard */}
        <SensoryScorecard scores={frontmatter.sensoryScores} />

        {/* Article content */}
        <div className="prose prose-gray mt-8 max-w-none prose-headings:text-gray-900 prose-a:text-purple-600">
          {mdxContent}
        </div>

        {/* Ad slot 2 — after content */}
        <div className="my-8">
          <AdSlot format="rectangle" />
        </div>

        {/* Related content */}
        <RelatedContent products={relatedProducts} guides={relatedGuides} />
      </article>
    </>
  );
}
