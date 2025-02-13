import LinkBadge from "@/components/ui/linkBadge";
import { ProjectType } from "@/data/projects";

interface ProjectProps {
  project: ProjectType;
  isLast: boolean;
}

export const ProjectCard = ({ project, isLast }: ProjectProps) => {
  const { title, description, links, img } = project;
  return (
    <li
      className={
        "grid gap-x-6 py-5 md:grid-cols-2" +
        (isLast ? "" : " border-b border-secondary")
      }
    >
      <div className="">
        <p className="text-heading-3 font-medium">{title}</p>
        {description.map((paragraph, idx) => (
          <p key={paragraph[0] + idx} className="py-2 text-body-1">
            {paragraph}
          </p>
        ))}
        <div className="space-x-2 py-2">
          {links.map((link) => (
            <LinkBadge key={link.title} link={link.link} title={link.title} />
          ))}
        </div>
      </div>
      <img
        src={img.src}
        alt={`${title} demo`}
        className={
          "mx-auto w-full rounded-xl" +
          (img.type === "mobile" ? " max-w-[300px]" : "")
        }
      />
    </li>
  );
};
