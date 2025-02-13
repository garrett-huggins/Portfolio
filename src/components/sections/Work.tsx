import { WORK } from "@/data/work";
import { WorkCard } from "@/components/cards/work-card";

export default function Work() {
  return (
    <section id="work" className="scroll-m-48 sm:scroll-m-0">
      <div className="h-10 w-full"></div>
      <div className="container text-body-1">
        <h2 className="text-heading-2 font-medium underline decoration-secondary">
          Work
        </h2>
        <p className="text-body-1">
          Startup MVPs I have worked on while at{" "}
          <a
            className="text-accent underline decoration-secondary hover:text-[#9611b4]"
            href="https://www.youngstown.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev Youngstown
          </a>
          :
        </p>
        <div className="h-10 w-full"></div>
        <ul className="list-none space-y-10">
          {WORK.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </ul>
      </div>
    </section>
  );
}
