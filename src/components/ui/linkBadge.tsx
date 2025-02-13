export const LinkBadge = ({ link, title }: { link: string; title: string }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-colors hover:bg-secondary/60"
    >
      {title}
    </a>
  );
};

export default LinkBadge;
