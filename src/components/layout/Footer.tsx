import { FaCodeBranch } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative h-32 bg-background">
      <div className="container flex h-full items-center justify-center">
        <a
          href="https://github.com/garrett-huggins/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-accent hover:cursor-pointer hover:underline"
        >
          <FaCodeBranch className="inline" />
          <span className="ml-2">View on GitHub</span>
        </a>
      </div>
    </footer>
  );
}
