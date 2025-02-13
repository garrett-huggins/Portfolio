import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
}

const variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "auto",
  },
};

export const MobileNav = ({ tabs }: { tabs: Tab[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white pt-4 shadow-lg sm:hidden">
      <button
        className="flex w-full items-center justify-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <SlMenu className="h-6 w-6" color="black" />
      </button>
      <motion.nav
        initial="hidden"
        variants={variants}
        animate={open ? "visible" : "hidden"}
        className="m-4 flex flex-col space-y-2 overflow-hidden text-black"
      >
        {tabs.map((tab) => (
          <a
            href={`#${tab.id}`}
            key={tab.id}
            onClick={() => setOpen(false)}
            className="w-full bg-gray-100 px-4 py-2 text-center"
          >
            {tab.label}
          </a>
        ))}
      </motion.nav>
    </div>
  );
};
