import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-slate-900 text-white min-h-screen scroll-smooth relative z-0">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;