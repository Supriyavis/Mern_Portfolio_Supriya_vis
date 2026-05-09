export default function Projects() {

  const projects = [
    {
      title: "Smart AI Autofill",
      desc: "AI Chrome extension for autofilling forms",
      img: "./Smart_Ai_Autofill.png",
      live: "https://your-live-link.com",
      github: "https://github.com/Supriyavis/Smart-AI-Autofill"
    },
    {
      title: "Intrusion Detection System",
      desc: "ML-based network security system",
      img: "./IDS.png",
      live: "#",
      github: "#"
    },
    {
      title: "Foodie",
      desc: "A Food Website",
      img: "/foodie.png",
      live: "https://foodie-nu-sepia.vercel.app/",
      github: "https://github.com/Supriyavis/FOODIE"
    },
    {
      title: "AI Interviewer",
      desc: "Mern-stack AI interview system",
      img: "./Ai-InterViewer.png",
      live: "https://ai-interviewer-frontend-ynp3.onrender.com",
      github: "https://github.com/Supriyavis/Ai_Interviewer"
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-20 py-20">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        My <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
      </h2>
      <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
        A showcase of my recent work, side projects, and open-source contributions.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {projects.map((p, i) => (
          
          // ✅ Gradient Border Wrapper
          <div 
            key={i}
            className="group p-[1.5px] rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 hover:from-fuchsia-500 hover:to-indigo-500 transition-all duration-500"
          >
            
            {/* INNER CARD */}
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-slate-900/60 group-hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]">

              {/* IMAGE WITH OVERLAY */}
              <div className="relative overflow-hidden aspect-video">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{p.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{p.desc}</p>

                {/* BUTTONS */}
                <div className="flex gap-4 pt-2">
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(192,38,211,0.5)] hover:brightness-110 active:scale-95"
                  >
                    Live Demo
                  </a>

                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-white/5 border border-white/10 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

        ))}

      </div>
    </section>
  );
}