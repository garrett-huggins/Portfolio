import tcliDemo from "/src/assets/images/tcli-demo.gif";
import cardletDemo from "/src/assets/images/cardlet-demo.png";
import LinkBadge from "../ui/linkBadge";

const Projects = () => {
  return (
    <section id="projects" className="bg-background px-8">
      <h2 className="text-heading-3 font-medium">Projects</h2>
      <div className="h-[20px] w-full"></div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-3xl font-medium">tcli</p>
          <p>
            A locally installed CLI package for starting projects the quick way.
            Create your own project templates and use them to start new projects
            with ease. This package also includes a utility function to create
            template inputs for your{" "}
            <code className="rounded-[5px] bg-primary px-1">package.json</code>.{" "}
            Built using Node.js and TypeScript.
          </p>
          <div className="mt-2">
            <LinkBadge
              link="https://github.com/garrett-huggins/tcli"
              title="Code"
            />
          </div>
        </div>
        <img src={tcliDemo} alt="tcli demo" className="rounded-xl" />
        <div>
          <p className="text-3xl font-medium">Cardlet</p>
          <p>
            A website for creating virtual flashcards to help students study.
            Students can create a custom deck of flashcards and study them using
            the spaced repetition technique. Decks can be shared with others by
            providing a unique link. Built using React, TypeScript, and
            Supabase.
          </p>
          <div className="mt-2 space-x-2">
            <LinkBadge
              link="https://github.com/garrett-huggins/cardlet"
              title="Code"
            />
            <LinkBadge link="https://cardlet.slanted.dev/" title="Demo" />
          </div>
        </div>
        <img src={cardletDemo} alt="Cardlet demo" className="rounded-xl" />
        <p className="text-3xl font-medium">More on the way!</p>
      </div>
      <div className="h-[40px] w-full"></div>
    </section>
  );
};

export default Projects;
