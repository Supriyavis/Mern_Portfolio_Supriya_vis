import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      {/* NAME */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I am{" "}
        <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
          Supriya Vishwakarma
        </span>
      </h1>

      {/* TYPING TEXT */}
      <h2 className="text-xl md:text-2xl text-gray-300">
        I am a{" "}
        <span className="text-indigo-400 font-semibold">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "React Developer"
            
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </span>
      </h2>

      {/* OPTIONAL DESCRIPTION */}
      <p className="mt-6 max-w-xl text-gray-400">
        Building fast, responsive, and impactful web experiences with the MERN stack.
Passionate about turning ideas into real, functional digital products.
      </p>
      {/* BUTTONS */}
      <div className="flex gap-4 mt-10">
        <a
          href="#contact"
          className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] active:scale-95"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-8 py-3 bg-white/5 border border-white/20 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95"
        >
          View Resume
        </a>
      </div>

      {/* FLOATING DECORATION */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '2s' }}></div>

    </section>
  );
}