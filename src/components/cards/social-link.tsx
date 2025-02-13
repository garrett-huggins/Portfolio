import { Social } from "@/data/socials";
import { motion } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const SocialLink = ({ social }: { social: Social }) => {
  const { url, Icon } = social;
  return (
    <motion.a
      variants={linkVariants}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.2 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 rounded-xl bg-accent/40 p-2"
    >
      <Icon size={40} />
    </motion.a>
  );
};
