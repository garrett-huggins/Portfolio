import { motion } from "framer-motion";
import { useRef } from "react";
import waveSvg from "@/assets/images/wave.svg";
import { SOCIALS } from "@/data/socials";
import { SocialLink } from "@/components/cards/social-link";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      // Delay before animating
      staggerChildren: 0.5, // Time between animations of children
    },
  },
};

const childVariants = {
  hidden: {
    backgroundPosition: 0,
  },
  visible: {
    backgroundPosition: "-100%",
    transition: { duration: 0.5 },
  },
};

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      style={{
        backgroundSize: "200%",
        backgroundImage: "linear-gradient(90deg, transparent 50%, #FFFF00 50%)",
      }}
      variants={childVariants}
    >
      {children}
    </motion.span>
  );
};

export default function About() {
  const ref = useRef(null); // Create a ref for the section

  return (
    <section ref={ref} id="about">
      <div className="container px-8 text-black">
        <h2 className="relative inline-block text-heading-2 font-medium">
          About Me
          <span
            className="absolute bottom-0 left-0 h-full w-full animate-wavey-scroll text-heading-1 text-transparent"
            style={{
              backgroundImage: `url(${waveSvg})`, // Wave SVG
              backgroundRepeat: "repeat-x", // Repeat only horizontally
            }}
          ></span>
        </h2>
        <div className="mt-4 space-y-4">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={containerVariants}
            className="text-body-1"
          >
            I am a passionate <Highlight>Software Developer</Highlight> with a{" "}
            <Highlight>degree in Information Technology</Highlight> and over{" "}
            <Highlight>4 years</Highlight> of industry experience in{" "}
            <Highlight>fullstack application development</Highlight>. My
            expertise lies in crafting innovative, scalable software solutions
            using <Highlight>modern technologies</Highlight> such as{" "}
            <Highlight>React, Next.js, and FastAPI.</Highlight>
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={containerVariants}
            className="text-body-1"
          >
            Throughout my career, I have{" "}
            <Highlight>led impactful projects</Highlight> and{" "}
            <Highlight>collaborated with cross-functional teams</Highlight> to
            deliver <Highlight>quality software products.</Highlight> I thrive
            on designing <Highlight>user-friendly applications</Highlight> that
            address <Highlight>real-world challenges</Highlight> and deliver
            meaningful value to users.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-body-1"
          >
            Driven by a commitment to continuous learning, I actively seek
            opportunities to grow as a developer. I am particularly inspired by
            projects that challenge me to broaden my skill set, embrace emerging
            technologies, and ultimately lead to me learning something new.
          </motion.p>
        </div>
        <div className="flex justify-center py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={{
              hidden: { opacity: 1 }, // Parent animation for hidden state
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2, // Apply staggerChildren here
                },
              },
            }}
            className="flex flex-wrap justify-center gap-4 rounded-xl border border-accent/40 p-2 shadow-lg"
          >
            {SOCIALS.map((social) => (
              <SocialLink key={social.name} social={social} />
            ))}
          </motion.div>
        </div>
      </div>
      {/* divider with linear gradient from white to black */}
      <div className="h-32 w-full bg-gradient-to-b from-white to-background"></div>
    </section>
  );
}
