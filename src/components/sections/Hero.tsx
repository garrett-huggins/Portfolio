import avatar from "/src/assets/images/avatar.webp";
import LinkBadge from "../ui/linkBadge";

const Hero = () => {
  return (
    <div id="home" className="bg-background px-8 pt-10">
      <div className="">
        <div className="grid-cols-2 sm:grid">
          <div>
            <h2 className="bg-gradient-to-r from-accent to-[#999999] bg-clip-text text-heading-1 font-medium text-transparent">
              Welcome
            </h2>
            <p className="text-body-1">
              Hello! I'm Garrett Huggins and I like to build things. I'm a
              software developer with a passion for bringing ideas to life.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3 text-sm">
              <LinkBadge
                link="https://github.com/garrett-huggins"
                title="GitHub"
              />
              <LinkBadge
                link="https://www.linkedin.com/in/garretthuggins/"
                title="LinkedIn"
              />
              <LinkBadge
                link="https://twitter.com/slanted_dev"
                title="Twitter"
              />
              <LinkBadge link="mailto:garrett@slanted.dev" title="Email" />
            </div>
          </div>
          <div className="mx-auto mt-10 flex items-center justify-center sm:mt-0">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-accent to-background">
              <img src={avatar} alt="avatar" className=" h-60 w-60 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
