import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Squish Toy Guide is the internet's most detailed resource for Needoh and sensory toy reviews, scorecards, and buying guides.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold text-text md:text-4xl">
        About Squish Toy Guide
      </h1>

      <div className="prose-editorial mt-6">
        <p>
          Squish Toy Guide is the internet&apos;s most detailed resource for
          Needoh and sensory fidget toy reviews. We test every product hands-on
          and rate them across five sensory dimensions using our proprietary{" "}
          <strong>Sensory Scorecard</strong> system.
        </p>

        <h2>Our Mission</h2>
        <p>
          Fidget and sensory toys have exploded in popularity, but reliable
          reviews are hard to find. Most content is either sponsored or surface-
          level. We built Squish Toy Guide to be the resource we wished existed:
          honest, detailed, and data-driven.
        </p>

        <h2>The Sensory Scorecard</h2>
        <p>
          Every product we review is evaluated on five dimensions: Squishiness,
          Noise, Durability, Stain Risk, and Size. Each dimension is scored 1-5,
          giving you an at-a-glance comparison across products. No other review
          site does this.
        </p>

        <h2>How We Make Money</h2>
        <p>
          Squish Toy Guide is supported by display advertising and affiliate
          commissions. When you click a link to a retailer and make a purchase,
          we may earn a small commission at no extra cost to you. This helps us
          keep the site running and continue testing new products.
        </p>
        <p>
          Affiliate relationships never influence our reviews or scores. We buy
          every product ourselves and test independently.
        </p>

        <h2>Contact</h2>
        <p>
          Have a question, correction, or product suggestion? Reach out at{" "}
          <a href="mailto:hello@squishtoyguide.com">
            hello@squishtoyguide.com
          </a>
          .
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
