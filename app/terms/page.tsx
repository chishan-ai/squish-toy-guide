import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Squish Toy Guide.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: March 25, 2026
      </p>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using squishtoyguide.com, you agree to be bound by
            these Terms of Use. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Use of Content</h2>
          <p>
            All content on Squish Toy Guide — including text, images, reviews,
            and scorecards — is for informational purposes only. Reviews reflect
            our honest opinions based on hands-on testing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Affiliate Disclosure
          </h2>
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
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Accuracy of Information
          </h2>
          <p>
            We make every effort to ensure product information, prices, and
            availability are accurate. However, this information can change
            without notice. We are not responsible for pricing errors or
            availability changes at third-party retailers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Intellectual Property
          </h2>
          <p>
            All original content on this site is the property of Squish Toy
            Guide. Product names, logos, and trademarks belong to their
            respective owners. Use of these marks on our site is for
            identification and review purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Limitation of Liability
          </h2>
          <p>
            Squish Toy Guide provides content &quot;as is&quot; without
            warranties of any kind. We are not liable for any damages arising
            from the use of this website or reliance on its content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to update these terms at any time. Changes will
            be posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
            <a
              href="mailto:hello@squishtoyguide.com"
              className="text-purple-600 hover:text-purple-700"
            >
              hello@squishtoyguide.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
