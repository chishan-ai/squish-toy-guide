import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllGuides, getGuideBySlug, getAllProducts } from "@/lib/content";
import { generateArticleSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { renderMdx } from "@/lib/mdx";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AdSlot from "@/components/AdSlot";
import RelatedContent from "@/components/RelatedContent";
import type { ProductFrontmatter, GuideFrontmatter } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((g) => ({ slug: g.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getGuideBySlug(slug);
  if (!item) return {};

  const { frontmatter } = item;
  return {
    title: frontmatter.title,
    description:
      frontmatter.description ??
      `${frontmatter.title}: expert guide on Squish Toy Guide.`,
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

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getGuideBySlug(slug);
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

  const articleSchema = generateArticleSchema(frontmatter, "Article");
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
    { name: frontmatter.title, url: `/guides/${slug}` },
  ]);

  const schemas: object[] = [articleSchema, breadcrumbSchema];

  if (frontmatter.howToSteps?.length) {
    schemas.push(
      generateHowToSchema(
        frontmatter.title,
        frontmatter.description ?? frontmatter.title,
        frontmatter.howToSteps
      )
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      <article className="mx-auto max-w-3xl px-4 py-6">
        <BreadcrumbNav
          items={[
            { label: "Guides", href: "/guides" },
            { label: frontmatter.title },
          ]}
        />

        <div className="mt-6">
          <h1 className="font-display text-3xl font-bold text-text md:text-4xl">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="mt-3 text-lg text-text-secondary">
              {frontmatter.description}
            </p>
          )}
          <p className="mt-2 text-xs text-text-muted">
            Last updated: {frontmatter.lastUpdated}
          </p>
        </div>

        <div className="my-8">
          <AdSlot format="leaderboard" className="hidden md:flex" />
          <AdSlot format="rectangle" className="flex md:hidden" />
        </div>

        <div className="prose prose-editorial mt-8">
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
