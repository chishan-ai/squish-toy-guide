import Link from "next/link";

const brandLinks = [
  { label: "Needoh", href: "/needoh" },
];

const guideLinks = [
  { label: "Best Needoh Toys", href: "/guides/best-needoh-toys" },
  { label: "Where to Buy Needoh", href: "/guides/where-to-buy-needoh" },
  { label: "What Is Needoh?", href: "/guides/what-is-needoh" },
];

const browseLinks = [
  { label: "All Needoh Toys", href: "/needoh" },
  { label: "Cleaning Guide", href: "/guides/how-to-clean-needoh" },
  { label: "Needoh Near Me", href: "/guides/needoh-near-me" },
];

const legalLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-text">Brands</h4>
            <ul className="space-y-2">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-text">Guides</h4>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-text">Browse</h4>
            <ul className="space-y-2">
              {browseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-text">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} Squish Toy Guide. All rights reserved.</p>
          <p className="mt-1">
            We are a participant in the Amazon Services LLC Associates Program.
          </p>
        </div>
      </div>
    </footer>
  );
}
