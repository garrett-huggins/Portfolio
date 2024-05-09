import blockPattern from "/src/assets/images/block-pattern.png";

const About = () => {
  return (
    <section
      className="bg-accent px-8 pb-[140px] text-black"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(217,217,217,0.8) 0%, rgba(217,217,217,0.8) 100%), url(${blockPattern})`,
      }}
      id="about"
    >
      <div
        className="rounded-xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%,rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))",
        }}
      >
        <h2 className="text-heading-3 font-medium">About</h2>
        <ul className="space-y-4 text-body-1">
          <li>
            I'm a Software Developer with a degree in Information Technology and
            3+ years of experience in full-stack development. My work
            specializes in creating innovative and scalable software solutions
            using cutting-edge technologies like React, Next.js, and FastAPI.
          </li>
          <li>
            I've had the opportunity to lead impactful projects and collaborate
            with cross-functional teams to deliver high-quality software
            products. I'm passionate about creating user-friendly applications
            that solve real-world problems and provide value to users.
          </li>
          <li>
            I'm always looking for new opportunities to learn and grow as a
            developer. I enjoy working on challenging projects that push me to
            expand my skill set and explore new technologies.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
