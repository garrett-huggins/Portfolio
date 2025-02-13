import Header from "@/components/layout/Header";
import WaveDivider from "@/components/wave-divider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Stack from "@/components/sections/Stack";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="font-poppins">
      <Hero />
      {/* BODY */}
      <div className="relative z-10 bg-white">
        <div className="absolute -top-[64px] left-0 w-full">
          <WaveDivider />
        </div>
        <Header />
        <About />
        <div className="bg-background">
          <Work />
          <Projects />
          <Blog />
          <Stack />
          <Footer />
        </div>
      </div>
    </main>
  );
}
