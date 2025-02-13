import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";

export default function Projects() {
  return (
    <section id="projects" className="scroll-m-48 sm:scroll-m-0">
      <div className="h-10 w-full"></div>
      <div className="container">
        <h2 className="text-heading-2 font-medium underline decoration-secondary">
          Projects
        </h2>
        <div className="h-10 w-full"></div>
        <ul className="list-none space-y-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isLast={project === PROJECTS[PROJECTS.length - 1]}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
