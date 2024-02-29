import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Borders from "./components/Borders";
import Projects from "./components/sections/Projects";
import Blog from "./components/sections/Blog";
import Stack from "./components/sections/Stack";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <main
      className="font-poppins"
      style={{
        backgroundImage: "url('/src/assets/images/plus-pattern.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div id="screen-container" className="relative mx-auto max-w-screen-xl">
        <Borders />
        <Header />
        <Hero />
        <div className="bg-gradient-to-b from-background to-[#D9D9D9]">
          <div
            className="h-[200px] w-full bg-repeat"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(217,217,217,0.8) 0%, rgba(115,115,115,0) 50%, rgba(11,10,10,1) 100%), url('/src/assets/images/block-pattern.png')",
            }}
          ></div>
        </div>
        <About />
        <div
          className="h-[40px] bg-accent"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(217,217,217,0.8) 0%, rgba(217,217,217,0.8) 100%), url('/src/assets/images/block-pattern.png')",
          }}
        >
          <div className="h-[40px] rounded-t-full bg-background"></div>
        </div>
        <Projects />
        <div className="h-[40px] bg-accent">
          <div className="h-[40px] rounded-b-full bg-background"></div>
        </div>
        <Blog />
        <div className="bg-accent">
          <Stack />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
