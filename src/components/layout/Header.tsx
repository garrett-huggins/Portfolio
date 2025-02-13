import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

const tabs = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "stack", label: "Stack" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <DesktopNav tabs={tabs} />
      <MobileNav tabs={tabs} />
    </header>
  );
}
