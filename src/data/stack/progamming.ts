import { TechType } from ".";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export const PROGRAMMING: TechType[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    bgColor: "bg-[#f7df1e]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    bgColor: "bg-[#007acc]",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    bgColor: "bg-[#00599c]",
  },
  {
    name: "Python",
    icon: SiPython,
    bgColor: "bg-[#3776ab]",
  },
  {
    name: "Java",
    icon: FaJava,
    bgColor: "bg-[#007396]",
  },
];
