import { IconType } from "react-icons";
import {
  SiFastapi,
  SiExpo,
  SiReact,
  SiMapbox,
  SiPostgresql,
} from "react-icons/si";
import paveroutes from "@/assets/images/logo/pave-routes.png";
import trukem from "@/assets/images/logo/trukem.png";
import uavistas from "@/assets/images/logo/uavistas.jpg";

export interface WorkProject {
  title: string;
  description: string;
  img: string;
  url: string;
  tags: {
    name: string;
    Icon: IconType;
    bgColor: string;
  }[];
}

export const WORK: WorkProject[] = [
  {
    title: "Pavé Routes",
    description:
      "A cross-platform mobile application designed to help student athletes tack their progress and generate dynamic running routes based on their location and geographical preferences.",
    img: paveroutes,
    url: "https://paveroutes.com",
    tags: [
      {
        name: "React Native",
        Icon: SiReact,
        bgColor: "bg-[#61dbfb]",
      },
      {
        name: "Expo",
        Icon: SiExpo,
        bgColor: "bg-[#000020]",
      },
      {
        name: "FastAPI",
        Icon: SiFastapi,
        bgColor: "bg-[#009688]",
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        bgColor: "bg-[#336791]",
      },
    ],
  },
  {
    title: "Trukem",
    description:
      "A platform designed to connect local businesses with a network of delivery services to streamline the delivery process and reduce costs.",
    img: trukem,
    url: "https://trukem.com",
    tags: [
      {
        name: "React",
        Icon: SiReact,
        bgColor: "bg-[#61dbfb]",
      },
      {
        name: "FastAPI",
        Icon: SiFastapi,
        bgColor: "bg-[#009688]",
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        bgColor: "bg-[#336791]",
      },
    ],
  },
  {
    title: "Uavistas",
    description:
      "Quantum Aerial: A software platform for AI-enhanced image management and analysis for drone operators.",
    img: uavistas,
    url: "https://uavistas.com",
    tags: [
      {
        name: "React",
        Icon: SiReact,
        bgColor: "bg-[#61dbfb]",
      },
      {
        name: "FastAPI",
        Icon: SiFastapi,
        bgColor: "bg-[#009688]",
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        bgColor: "bg-[#336791]",
      },
      {
        name: "Mapbox",
        Icon: SiMapbox,
        bgColor: "bg-[#000000]",
      },
    ],
  },
];
