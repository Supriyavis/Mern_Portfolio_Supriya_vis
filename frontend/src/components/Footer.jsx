// import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-800 px-6 md:px-20 py-10 mt-10">

//       <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

//         {/* ABOUT */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">Supriya</h2>
//           <p className="text-gray-400">
//             Full Stack Developer building modern web applications.
//           </p>
//         </div>

//         {/* LINKS */}
//         <div>
//           <h3 className="font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li><a href="#">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#education">Education</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//           </ul>
//         </div>

//         {/* CONNECT */}
//         <div>
//           <h3 className="font-semibold mb-3">Connect</h3>

//           <ul className="space-y-2 text-gray-400">

//             <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
//               <FaGithub /> 
//               <a href="https://github.com/Supriyavis" target="_blank">GitHub</a>
//             </li>

//             <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
//               <FaLinkedin /> 
//               <a href="https://www.linkedin.com/in/supriya-vishwakarma-937b8b288" target="_blank">LinkedIn</a>
//             </li>

//             <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
//               <SiLeetcode /> 
//               <a href="https://leetcode.com/u/cCWwZAv3bJ/" target="_blank">LeetCode</a>
//             </li>

//             <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
//               <FaTelegram /> 
//               <a href="https://t.me/supriya_dev" target="_blank">Telegram</a>
//             </li>

//           </ul>
//         </div>

//       </div>

//       <p className="text-center text-gray-500 mt-8">
//         © 2026 Supriya Vishwakarma
//       </p>

//     </footer>
//   );
// }
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiHome, HiUser, HiAcademicCap, HiCode, HiBriefcase, HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative bg-fuchsia-950/20 backdrop-blur-xl border-t border-white/5 text-white px-6 md:px-20 py-16 mt-24 overflow-hidden">
      
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left relative z-10">

        {/* ABOUT SECTION */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(192,38,211,0.3)]">
            Supriya
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
            Passionate Full Stack Developer creating high-performance, beautiful and scalable web applications with modern technologies.
          </p>
        </div>

        {/* LINKS SECTION */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-[2px] bg-fuchsia-500 rounded-full"></span>
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-400">
            {[
              { name: "Home", icon: <HiHome /> },
              { name: "About", icon: <HiUser /> },
              { name: "Education", icon: <HiAcademicCap /> },
              { name: "Skills", icon: <HiCode /> },
              { name: "Projects", icon: <HiBriefcase /> },
              { name: "Contact", icon: <HiMail /> }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.name.toLowerCase() === "home" ? "" : item.name.toLowerCase()}`}
                  className="hover:text-fuchsia-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group text-sm"
                >
                  <span className="text-lg text-fuchsia-500/50 group-hover:text-fuchsia-400 group-hover:drop-shadow-[0_0_8px_rgba(192,38,211,0.8)] transition-all duration-300">
                    {item.icon}
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* CONNECT SECTION */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-[2px] bg-indigo-500 rounded-full"></span>
            Connect
          </h3>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
            {[
              { icon: <FaGithub />, link: "https://github.com/Supriyavis", color: "hover:bg-gray-800" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/supriya-vishwakarma-937b8b288", color: "hover:bg-[#0077b5]" },
              { icon: <SiLeetcode />, link: "https://leetcode.com/u/cCWwZAv3bJ/", color: "hover:bg-[#ffa116]" },
              { icon: <FaTelegram />, link: "https://t.me/supriya_dev", color: "hover:bg-[#229ED9]" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`p-3 bg-white/5 border border-white/10 rounded-xl text-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(162,28,175,0.4)] hover:text-white ${social.color} hover:border-fuchsia-500/50 group`}
              >
                <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p className="hover:text-gray-300 transition-colors">
          © 2026 <span className="text-fuchsia-400 font-medium">Supriya Vishwakarma</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          Made with <span className="text-pink-500 animate-bounce mx-1">❤️</span> by <span className="text-indigo-400 font-medium ml-1 cursor-pointer hover:underline decoration-fuchsia-500 underline-offset-4">Supriya</span>
        </div>
      </div>

    </footer>
  );
}