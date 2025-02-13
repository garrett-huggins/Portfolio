import tcliDemo from "/src/assets/images/demo/tcli.gif";
import cardletDemo from "/src/assets/images/demo/cardlet.png";
import noteDemo from "/src/assets/images/demo/note.png";
import etfDemo from "/src/assets/images/demo/etf.png";

export interface ProjectType {
  title: string;
  description: string[];
  links: { link: string; title: string }[];
  img: {
    src: string;
    type: "mobile" | "desktop";
  };
}

export const PROJECTS: ProjectType[] = [
  {
    title: "Empty The Fridge",
    description: [
      "🏆 1st Place Winner of the Kent Hack Enough 2024 Hackathon.",
      "A PWA designed to help users find recipes based on the ingredients they already have, reducing food waste and saving money. Users can take a picture of their open fridge and pantry, and the app will use image recognition to identify the ingredients, suggesting recipes based on what's available.",
    ],
    links: [
      {
        link: "https://github.com/garrett-huggins/empty-the-fridge",
        title: "Code",
      },
      {
        link: "https://devpost.com/software/emptythefridge",
        title: "Devpost",
      },
    ],
    img: {
      src: etfDemo,
      type: "mobile",
    },
  },
  {
    title: "NestJS + Expo Template",
    description: [
      "A pre-configured setup designed to streamline the creation of scalable, type-safe applications using NestJS for backend services and Expo for React Native mobile applications. The backend utilizes OpenAPI to generate types and API methods for the frontend, providing a seamless integration between the two and reducing the potential for errors.",
    ],
    links: [
      {
        link: "https://github.com/garrett-huggins/note-template",
        title: "Code",
      },
    ],
    img: {
      src: noteDemo,
      type: "mobile",
    },
  },
  {
    title: "Template CLI (tcli)",
    description: [
      "A CLI tool designed to streamline the creation of new projects using a predefined template. Users can specify the project name, description, and technologies to include, and the tool will generate a new project directory with the specified files and configurations.",
    ],
    links: [
      {
        link: "https://github.com/garrett-huggins/tcli",
        title: "Code",
      },
    ],
    img: {
      src: tcliDemo,
      type: "desktop",
    },
  },
  {
    title: "Cardlet",
    description: [
      "A digital flashcard application designed to help users study more effectively. Users can create custom decks of flashcards, complete questions and multiple choice answers, and review them using the spaced repetition technique to optimize memory retention.",
    ],
    links: [
      {
        link: "https://github.com/garrett-huggins/cardlet",
        title: "Code",
      },
      {
        link: "https://cardlet.slanted.dev/",
        title: "Demo",
      },
    ],
    img: {
      src: cardletDemo,
      type: "desktop",
    },
  },
];
