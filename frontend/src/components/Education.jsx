
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-20 py-20">

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        My <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Education</span>
      </h2>

      <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
        Academic background and progress timeline throughout my engineering journey.
      </p>

      {/* CENTER CONTAINER */}
      <div className="max-w-4xl mx-auto space-y-6">

        {/* BTECH */}
        <div className="group p-[1.5px] rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 hover:from-fuchsia-500 hover:to-indigo-500 transition-all duration-500">
          <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start gap-6 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">Babu Banarasi Das University</h3>
              <p className="text-indigo-300 font-medium text-lg">B.Tech in CSE — <span className="text-white">CGPA: 9.17</span></p>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <FaMapMarkerAlt className="text-fuchsia-500" />
                <span>Lucknow, India</span>
              </div>
            </div>
            <div className="md:text-right flex flex-col md:items-end gap-3 w-full md:w-auto">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider">09 2022 — 05 2026</span>
              <div className="flex items-center gap-2 text-gray-400 italic text-sm">
                <HiAcademicCap className="text-indigo-400 text-lg" />
                <span>Academic Milestone</span>
              </div>
            </div>
          </div>
        </div>

        {/* 12TH */}
        <div className="group p-[1.5px] rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 hover:from-fuchsia-500 hover:to-indigo-500 transition-all duration-500">
          <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start gap-6 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">S.S. DJ School</h3>
              <p className="text-indigo-300 font-medium text-lg">Class XII — <span className="text-white">Percentage: 84%</span></p>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <FaMapMarkerAlt className="text-fuchsia-500" />
                <span>India</span>
              </div>
            </div>
            <div className="md:text-right flex flex-col md:items-end gap-3 w-full md:w-auto">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider">2021 — 2022</span>
              <div className="flex items-center gap-2 text-gray-400 italic text-sm">
                <HiAcademicCap className="text-indigo-400 text-lg" />
                <span>Academic Milestone</span>
              </div>
            </div>
          </div>
        </div>

        {/* 10TH */}
        <div className="group p-[1.5px] rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 hover:from-fuchsia-500 hover:to-indigo-500 transition-all duration-500">
          <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start gap-6 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">Sarvodya Inter College</h3>
              <p className="text-indigo-300 font-medium text-lg">Class X (UP Board) — <span className="text-white">Percentage: 84%</span></p>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <FaMapMarkerAlt className="text-fuchsia-500" />
                <span>India</span>
              </div>
            </div>
            <div className="md:text-right flex flex-col md:items-end gap-3 w-full md:w-auto">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider">2020</span>
              <div className="flex items-center gap-2 text-gray-400 italic text-sm">
                <HiAcademicCap className="text-indigo-400 text-lg" />
                <span>Academic Milestone</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}