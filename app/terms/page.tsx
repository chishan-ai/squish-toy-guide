import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Squish Toy Guide.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-bold text-text">Terms of Use</h1>
      <p className="mt-2 text-sm text-text-muted">
        Last updated: March 25, 2026
      </p>

      <div className="prose prose-editorial mt-8">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using squishtoyguide.com, you agree to be bound by
          these Terms of Use. If you do not agree, please do not use the site.
        </p>

        <h2>Use of Content</h2>
        <p>
          All content on Squish Toy Guide, including text, images, reviews,
          and scorecards, is for informational purposes only. Reviews reflect
          our honest opinions based on hands-on testing.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Squish Toy Guide is a participant in the Amazon Services LLC
          Associates Program and other affiliate programs. We earn commissions
          from qualifying purchases made through links on this site, at no
          additional cost to you.
        </p>
        <p>
          Affiliate relationships do not influence our reviews, ratings, or
          recommendations. We purchase all products independently.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          We make every effort to ensure product information, prices, and
          availability are accurate. However, this information can change
          without notice. We are not responsible for pricing errors or
          availability changes at third-party retailers.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All original content on this site is the property of Squish Toy
          Guide. Product names, logos, and trademarks belong to their
          respective owners. Use of these marks on our site is for
          identification and review purposes only.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Squish Toy Guide provides content &quot;as is&quot; without
          warranties of any kind. We are not liable for any damages arising
          from the use of this website or reliance on its content.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Changes will
          be posted on this page with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a href="mailto:hello@squishtoyguide.com">
            hello@squishtoyguide.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
