const About = () => {
  return (
    <section
      className="bg-accent px-8 pb-[140px] text-black"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(217,217,217,0.8) 0%, rgba(217,217,217,0.8) 100%), url('/src/assets/images/block-pattern.png')",
      }}
      id="about"
    >
      <div>
        <h2 className="text-heading-3 font-medium">About</h2>
        <ul className="text-body-1 space-y-4">
          <li>
            I'm a software developer with 3+ years of experience and I enjoy
            working with the latest technologies.
          </li>
          <li>
            I'm currently pursuing my undergraduate degree in Information
            Technology with a concentration in application development.
          </li>
          <li>
            Besides working in the web, I'm also passionate about game
            development and music.
          </li>
          <li>
            I spend most of my time in the terminal or rummaging through
            documentation.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
