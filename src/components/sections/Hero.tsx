import { FaHand, FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/hero-bg.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Time between animations of children
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, translateY: -20 },
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <div className="sticky top-0 z-0 min-h-[400px]">
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
        className="flex min-h-screen flex-col items-center justify-center space-y-4"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-[75%] justify-center overflow-hidden rounded-2xl border-2 border-[#7C7C7C] bg-card p-8"
        >
          <motion.h1
            variants={childVariants}
            className="text-center text-heading-1 font-bold text-white"
          >
            Hello!
            <motion.div
              className="mx-4 inline-flex"
              variants={{
                hidden: { rotate: 0 },
                visible: {
                  rotate: [0, -10, 90, 20, 45],
                  transition: { duration: 0.7, delay: 0.5 },
                },
              }}
            >
              <FaHand />
            </motion.div>
            I'm Garrett Huggins
          </motion.h1>
          <motion.p
            className="text-center text-heading-3"
            variants={childVariants}
          >
            Software Developer
          </motion.p>
        </motion.div>
        <Button variant="outline" className="rounded-[0.35rem]" asChild>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, translateY: -20 },
              visible: {
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.5, delay: 1 },
              },
            }}
            href="#about"
          >
            <FaArrowDown className="mr-2 animate-bounce" />
            Learn More
          </motion.a>
        </Button>
      </div>
    </div>
  );
}
