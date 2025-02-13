import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface DesktopNavProps {
  tabs: Tab[];
}

export const DesktopNav = ({ tabs }: DesktopNavProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(tabs[0].id);
  const [hoverTab, setHoverTab] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<string | null>(tabs[0].id);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -30% 0px" },
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) {
        sectionRefs.current[tab.id] = section;
        observer.observe(section);
      }
    });

    const currentRefs = { ...sectionRefs.current };

    return () => {
      tabs.forEach((tab) => {
        const section = currentRefs[tab.id];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [tabs]);

  // Synchronize `currentTab` with `hoverTab` or fallback to `activeTab`
  useEffect(() => {
    if (hoverTab) {
      setCurrentTab(hoverTab);
    } else {
      const timeout = setTimeout(() => setCurrentTab(activeTab), 100); // Delay to prevent flickering
      return () => clearTimeout(timeout);
    }
  }, [hoverTab, activeTab]);

  return (
    <div className="hidden px-8 backdrop-blur-sm md:block">
      <div className="mx-auto flex w-full items-center justify-center py-4">
        <nav className="my-2 flex space-x-4 rounded-full bg-neutral-600/60 p-2 sm:mx-auto md:mx-0 md:my-0 md:mt-0">
          {tabs.map((tab) => (
            <a
              href={`#${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => {
                setHoverTab(tab.id);
              }}
              onMouseLeave={() => {
                setHoverTab(null);
              }}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/90"
              } relative rounded-full px-3 py-1.5 font-medium text-white transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {currentTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-background mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
