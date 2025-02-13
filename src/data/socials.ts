import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import { IconType } from "react-icons";

export interface Social {
  name: string;
  url: string;
  Icon: IconType;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/garrett-huggins",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/garretthuggins/",
    Icon: FaLinkedinIn,
  },
  {
    name: "Email",
    url: "mailto:garrett@slanted.dev",
    Icon: FaEnvelope,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/slanted_dev",
    Icon: FaXTwitter,
  },
];
