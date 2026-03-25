import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-primary">
                <span className={i < items.length - 2 ? "hidden sm:inline" : ""}>
                  {item.label}
                </span>
                {i < items.length - 2 && (
                  <span className="sm:hidden">&hellip;</span>
                )}
              </Link>
            ) : (
              <span className="font-medium text-text">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
