import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava, FaPython, FaBrain, FaMicrochip
} from "react-icons/fa";

import {
  SiJavascript, SiExpress, SiMongodb, SiPostman,
  SiGithub, SiTensorflow, SiPandas, SiC
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-20">

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        My <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
      </h2>

      <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
        Technologies and tools I use to bring ideas to life with precision and modern best practices.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* FRONTEND */}
        <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl h-full transition group-hover:-translate-y-1">

            <h3 className="mb-6 font-semibold text-lg">Frontend</h3>

            <div className="grid grid-cols-2 gap-4">

              {[
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all duration-300 group/skill">
                  <span className="group-hover/skill:drop-shadow-[0_0_8px_rgba(232,121,249,0.8)] transition-all">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 group-hover/skill:text-white transition-colors">{item.name}</span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl h-full transition group-hover:-translate-y-1">

            <h3 className="mb-6 font-semibold text-lg">Backend</h3>

            <div className="grid grid-cols-2 gap-4">

              {[
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
                { name: "REST API", icon: <FaNodeJs className="text-blue-400" /> },
                { name: "API Integration", icon: <FaNodeJs className="text-indigo-400" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 group/skill">
                  <span className="group-hover/skill:drop-shadow-[0_0_8px_rgba(129,140,248,0.8)] transition-all">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 group-hover/skill:text-white transition-colors">{item.name}</span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* DATABASE */}
        <div className="group rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 p-[1.5px] transition">

  <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

    <h3 className="mb-6 font-semibold text-lg">Database</h3>

    {/* FIXED GRID */}
    <div className="grid grid-cols-2 gap-4">

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group/skill">
        <span className="text-gray-300 group-hover/skill:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all">🗄️</span>
        <span className="text-gray-300 group-hover/skill:text-white transition-colors">SQL</span>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group/skill">
        <span className="text-green-400 group-hover/skill:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all">🍃</span>
        <span className="text-gray-300 group-hover/skill:text-white transition-colors">MongoDB</span>
      </div>

    </div>

  </div>

</div>
        {/* TOOLS */}
        <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl h-full transition group-hover:-translate-y-1">

            <h3 className="mb-6 font-semibold text-lg">Tools</h3>

            <div className="grid grid-cols-2 gap-4">

              {[
                { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
                { name: "GitHub", icon: <SiGithub className="text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
                { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all duration-300 group/skill">
                  <span className="group-hover/skill:drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 group-hover/skill:text-white transition-colors">{item.name}</span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl h-full transition group-hover:-translate-y-1">
            <h3 className="mb-6 font-semibold text-lg">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Python", icon: <FaPython className="text-blue-400" /> },
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "C", icon: <SiC className="text-blue-600" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group/skill">
                  <span className="group-hover/skill:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 group-hover/skill:text-white transition-colors">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI & DATA SCIENCE */}
        <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl h-full transition group-hover:-translate-y-1">
            <h3 className="mb-6 font-semibold text-lg">AI & Data Science</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Data Science", icon: <FaBrain className="text-pink-400" /> },
                { name: "Machine Learning", icon: <FaMicrochip className="text-purple-400" /> },
                { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
                { name: "Pandas", icon: <SiPandas className="text-indigo-400" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group/skill">
                  <span className="group-hover/skill:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 group-hover/skill:text-white transition-colors">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}