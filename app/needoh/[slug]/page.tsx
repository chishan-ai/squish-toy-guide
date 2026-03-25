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
      `${frontmatter.title}: expert review with sensory scorecard on Squish Toy Guide.`,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      images: [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getProductBySlug(slug);
  if (!item) notFound();

  const { frontmatter, content } = item;
  const mdxContent = await renderMdx(content);

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
        <BreadcrumbNav
          items={[
            { label: "Needoh", href: "/needoh" },
            { label: frontmatter.title.replace(" Review", "") },
          ]}
        />

        {/* Hero section */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[--radius-lg] bg-gradient-to-br from-primary-light to-accent-light text-6xl">
            🧸
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold text-primary">
              {frontmatter.brand}
            </span>
            <h1 className="mt-1 font-display text-3xl font-bold text-text">
              {frontmatter.title.replace(" Review", "")}
            </h1>
            <p className="mt-2 text-lg text-text-secondary">{frontmatter.priceRange}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                {frontmatter.feel}
              </span>
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                {frontmatter.useCase}
              </span>
              <span className="rounded-full bg-teal-light px-3 py-1 text-xs font-semibold text-teal">
                Ages {frontmatter.ageRange}
              </span>
            </div>

            <p className="mt-2 text-xs text-text-muted">
              Last updated: {frontmatter.lastUpdated}
            </p>
          </div>
        </div>

        <div className="my-8">
          <AdSlot format="leaderboard" className="hidden md:flex" />
          <AdSlot format="rectangle" className="flex md:hidden" />
        </div>

        <SensoryScorecard scores={frontmatter.sensoryScores} />

        <div className="prose-editorial mt-8">
          {mdxContent}
        </div>

        <div className="my-8">
          <AdSlot format="rectangle" />
        </div>

        <RelatedContent products={relatedProducts} guides={relatedGuides} />
      </article>
    </>
  );
}
