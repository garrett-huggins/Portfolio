import logo from "/src/assets/icons/logo.png";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "stack", label: "Stack" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsMenuOpen(false));

  return (
    <header className="sticky top-0 z-10 bg-background px-8">
      <div className="mx-auto flex w-full items-center justify-between sm:justify-normal">
        <img
          src={logo}
          alt="Task Tracker"
          className="w-[200px] sm:mr-8 sm:hidden sm:w-fit md:block"
        />
        <div className="my-2 hidden space-x-4 rounded-full bg-primary p-2 sm:mx-auto sm:flex md:mx-0 md:my-0 md:mt-0">
          {tabs.map((tab) => (
            <a
              href={`#${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-1.5 font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </a>
          ))}
        </div>
        <div ref={ref} className="sm:hidden">
          <Hamburger toggled={isMenuOpen} size={20} toggle={setIsMenuOpen} />
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="shadow-4xl fixed left-0 right-0 top-[3rem] border-b border-b-white/20 bg-neutral-950 p-5 pt-0"
            >
              <ul className="grid gap-2">
                {tabs.map((tab, idx) => {
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={tab.id}
                      className="w-full rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 p-[0.08rem]"
                    >
                      <a
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className={
                          "flex w-full items-center justify-between rounded-xl bg-neutral-950 p-5"
                        }
                        href={`#${tab.id}`}
                      >
                        <span className="flex gap-1 text-lg">{tab.label}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
