import { useState } from "react";

export default function About() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  return (
    <section id="about" className="px-6 md:px-20 py-24">

      {/* TITLE */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Full-stack developer building scalable and modern web applications with a focus on user experience.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* IMAGE */}
        <div 
          onClick={handleClick}
          className={`relative flex-shrink-0 cursor-pointer transition duration-300 
                      ${clicked ? "scale-95" : "hover:scale-105"}`}
        >

          {/* OUTER GLOW */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 blur-lg opacity-30"></div>

          {/* THINNER BORDER */}
          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500">
            <div className="bg-black rounded-full p-[2px]">
              <img
                src="/profile.png"
                alt="profile"
                className="w-64 h-65 object-cover rounded-full"
              />
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-xl text-center md:text-left">

          <h3 className="text-2xl font-semibold mb-4">
            MERN Stack Developer
          </h3>

          <p className="text-gray-400 mb-10 leading-relaxed">
            B.Tech Computer Science student focused on building real-world web
            applications using React, Node.js and MongoDB.
          </p>

          {/* CARDS */}
          <div className="space-y-4">

            {[
              { icon: "💼", text: "Internship at Vislona", color: "from-indigo-500/10 to-purple-500/10", border: "border-indigo-500/20", hover: "hover:bg-indigo-500/10" },
              { icon: "🚀", text: "10+ Projects Built", color: "from-pink-500/10 to-indigo-500/10", border: "border-pink-500/20", hover: "hover:bg-pink-500/10" },
              { icon: "💻", text: "MERN Stack Developer", color: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-500/20", hover: "hover:bg-emerald-500/10" },
              { icon: "🏆", text: "Student of the Year (2022-2026)", color: "from-amber-500/10 to-orange-500/10", border: "border-amber-500/20", hover: "hover:bg-amber-500/10" }
            ].map((item, i) => (
              <div 
                key={i}
                className={`bg-gradient-to-r ${item.color} ${item.border} border backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${item.hover} group cursor-default`}
              >
                <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">{item.text}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}