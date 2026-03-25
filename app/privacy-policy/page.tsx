import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Squish Toy Guide. How we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: March 25, 2026
      </p>

      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900">Introduction</h2>
          <p>
            Squish Toy Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates squishtoyguide.com. This page informs you of our policies
            regarding the collection, use, and disclosure of personal
            information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Information We Collect
          </h2>
          <p>
            We do not directly collect personal information. However, our
            third-party service providers may collect data as described below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Analytics & Cookies
          </h2>
          <p>
            We use analytics services to understand how visitors use our site.
            These services may use cookies (small data files stored on your
            device) to track usage patterns. You can control cookies through
            your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Advertising
          </h2>
          <p>
            We display advertisements through Google AdSense and may use other
            ad networks in the future. These services use cookies and similar
            technologies to serve ads based on your prior visits to our site or
            other sites. You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-purple-600 hover:text-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ad Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Affiliate Links
          </h2>
          <p>
            Our site contains affiliate links to third-party retailers including
            Amazon. When you click these links, the retailer may place cookies on
            your device. Please refer to each retailer&apos;s privacy policy for
            details on their data practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Children&apos;s Privacy
          </h2>
          <p>
            Our website is not directed at children under 13. We do not knowingly
            collect personal information from children. If you believe a child
            has provided us with personal information, please contact us so we
            can delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, contact us at{" "}
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
