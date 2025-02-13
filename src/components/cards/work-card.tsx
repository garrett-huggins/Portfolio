import { WorkProject } from "@/data/work";

export function WorkCard({ work }: { work: WorkProject }) {
  return (
    <li>
      <div className="space-y-4 rounded-xl bg-accent/20 p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <img
            className="h-12 w-12 rounded-xl bg-white object-contain"
            src={work.img}
            alt={work.title}
          />
          <p className="text-heading-3 font-medium underline">{work.title}</p>
        </div>
        <p className="text-body-1">{work.description}</p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <div
              key={tag.name}
              className={
                "flex items-center space-x-1 rounded-[8px] px-2 " + tag.bgColor
              }
            >
              <tag.Icon />
              <span className="text-body-2">{tag.name}</span>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
