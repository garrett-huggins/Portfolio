export const LinkBadge = ({ link, title }: { link: string; title: string }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="bg-primary hover:bg-accent/30 rounded-full px-3 py-1 text-sm transition-colors"
    >
      {title}
    </a>
  );
};

export default LinkBadge;
