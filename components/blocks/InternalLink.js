import Link from "next/link";
import { resolveLink } from "lib/utils";

export default function InternalLink({
  children,
  element,
  label,
  className,
  locale,
  slug = null,
}) {
  return (
    <Link href={resolveLink(element, locale, slug)}>
      <a title={label} className={className}>
        {children}
      </a>
    </Link>
  );
}
