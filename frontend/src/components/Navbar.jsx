import { useState, useEffect } from "react";
import { HiMenu, HiX, HiHome, HiUser, HiAcademicCap, HiCode, HiBriefcase, HiMail } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", icon: <HiHome /> },
    { name: "About", href: "#about", icon: <HiUser /> },
    { name: "Education", href: "#education", icon: <HiAcademicCap /> },
    { name: "Skills", href: "#skills", icon: <HiCode /> },
    { name: "Projects", href: "#projects", icon: <HiBriefcase /> },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled 
      ? "bg-slate-900/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/10" 
      : "bg-transparent py-5"
    }`}>
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="#" className="relative group">

          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
            Supriya
          </h1>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-link flex items-center gap-2 text-sm font-medium hover:text-fuchsia-400"
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className="group relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-full text-white font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] overflow-hidden"
            >
              <HiMail className="text-lg group-hover:animate-bounce" />
              Contact
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
            </a>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-3xl text-gray-300 focus:outline-none transition-colors hover:text-fuchsia-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
      }`}>
        <ul className="flex flex-col gap-4 px-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="flex items-center gap-4 text-gray-300 hover:text-fuchsia-400 py-2 border-b border-white/5 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                <span className="p-2 bg-white/5 rounded-lg text-xl">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-2xl text-white font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              <HiMail className="text-2xl" />
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}