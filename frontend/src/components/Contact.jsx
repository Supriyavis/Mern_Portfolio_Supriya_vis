import { useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaUser, FaEnvelope, FaCommentAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      }

    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-20">

      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Contact <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
      </h2>
      <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Let's talk and build something amazing together.
      </p>
      {/* ✅ IMPORTANT FIX */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT FORM */}
        <div className="group p-[1.5px] rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-violet-600/20 hover:from-fuchsia-500 hover:to-violet-500 transition">
          
          {/* ✅ h-full added */}
          <form onSubmit={handleSubmit} className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl h-full flex flex-col justify-between transition duration-300 group-hover:bg-slate-900/80 group-hover:shadow-xl">
            
            <div className="space-y-6">
              <div className="relative group/input transition-all duration-500 focus-within:-translate-y-2">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-fuchsia-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:bg-white/15 transition-all placeholder:text-gray-500 text-white shadow-lg focus:shadow-fuchsia-500/20"
                />
              </div>

              <div className="relative group/input transition-all duration-500 focus-within:-translate-y-2">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-fuchsia-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:bg-white/15 transition-all placeholder:text-gray-500 text-white shadow-lg focus:shadow-fuchsia-500/20"
                />
              </div>

              <div className="relative group/input transition-all duration-500 focus-within:-translate-y-2">
                <FaCommentAlt className="absolute left-4 top-4 text-gray-400 group-focus-within/input:text-fuchsia-400 transition-colors" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl h-40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:bg-white/15 transition-all placeholder:text-gray-500 text-white shadow-lg focus:shadow-fuchsia-500/20 resize-none"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-white/5 border border-white/20 rounded-xl font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95 mt-6"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* EMAIL */}
          <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
            <div className="bg-black/40 backdrop-blur-md p-5 rounded-xl h-full transition duration-300 group-hover:-translate-y-1">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">supriyavishwakarma974@email.com</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
            <div className="bg-black/40 backdrop-blur-md p-5 rounded-xl h-full transition duration-300 group-hover:-translate-y-1">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-400">India</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="group p-[1.5px] rounded-xl bg-gradient-to-r from-fuchsia-600/40 to-violet-600/40 hover:from-fuchsia-500 hover:to-violet-500 transition">
            <div className="bg-black/40 backdrop-blur-md p-5 rounded-xl h-full transition duration-300 group-hover:-translate-y-1">
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+919026559766</p>
            </div>
          </div>

          {/* FOLLOW ME */}
          <div className="group p-[1.5px] rounded-2xl bg-gradient-to-r from-fuchsia-600/20 to-indigo-600/20 hover:from-fuchsia-500 hover:to-indigo-500 transition">
            <div className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl h-full transition duration-300 group-hover:bg-slate-900/60">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Follow Me</h3>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Supriyavis", color: "group-hover:text-white" },
                  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/supriya-vishwakarma-937b8b288", color: "group-hover:text-blue-400" },
                  { name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/u/cCWwZAv3bJ/", color: "group-hover:text-orange-400" },
                  { name: "Telegram", icon: <FaTelegram />, link: "https://t.me/supriya_dev", color: "group-hover:text-sky-400" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 hover:translate-x-2 group/social"
                  >
                    <span className={`text-2xl text-gray-500 transition-colors ${social.color}`}>{social.icon}</span>
                    <span className="font-semibold text-gray-400 group-hover/social:text-white transition-colors">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}