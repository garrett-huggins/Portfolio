import { TechType } from ".";
import {
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiNestjs,
  SiSpringboot,
  SiPrisma,
} from "react-icons/si";

export const BACKEND: TechType[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    bgColor: "bg-[#339933]",
  },
  {
    name: "Express",
    icon: SiExpress,
    bgColor: "bg-[#000000]",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    bgColor: "bg-[#47a248]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    bgColor: "bg-[#336791]",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    bgColor: "bg-[#009688]",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    bgColor: "bg-[#e0234e]",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    bgColor: "bg-[#6db33f]",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    bgColor: "bg-[#2d3748]",
  },
];
