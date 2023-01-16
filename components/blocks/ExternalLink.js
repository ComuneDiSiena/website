import t from "lib/locales";

export default function ExternalLink({
  children,
  url,
  title,
  className,
  locale,
}) {
  return (
    <a
      href={url}
      className={className}
      rel="noreferrer"
      target="_blank"
      title={`${t("externaLink", locale)} ${title}`}
    >
      {children}
    </a>
  );
}
