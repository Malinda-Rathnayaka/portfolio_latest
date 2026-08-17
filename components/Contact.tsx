"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Copy, Check, ExternalLink } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rathnayakamalinda14@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Interactive Particle Network & Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-950/20 rounded-full blur-[150px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-cyan-400/60" />
          
        </motion.div>

        {/* Headline & Description */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 tracking-tight text-white uppercase"
        >
          LET'S BUILD SOMETHING
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-slate-300/90 text-base sm:text-lg leading-relaxed font-normal"
        >
          I'm currently looking for opportunities to grow as a software engineer and contribute to real-world projects.
        </motion.p>

        {/* Grid Layout: Contact Info Cards + Form */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#0b0e1e]/80 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" /> EMAIL
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1 text-[11px] font-mono"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href="mailto:rathnayakamalinda14@gmail.com"
                className="text-base sm:text-lg font-semibold text-slate-100 hover:text-cyan-300 transition-colors break-all flex items-center gap-2"
              >
                rathnayakamalinda14@gmail.com
              </a>
            </motion.div>

            {/* LINKEDIN CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#0b0e1e]/80 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-cyan-400" /> LINKEDIN
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <a
                href="https://www.linkedin.com/in/malinda-rathnayaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors"
              >
                Malinda Rathnayaka
              </a>
            </motion.div>

            {/* GITHUB CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-[#0b0e1e]/80 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyan-400" /> GITHUB
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <a
                href="https://github.com/Malinda-Rathnayaka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors"
              >
                Malinda-Rathnayaka
              </a>
            </motion.div>

          </div>

          {/* Right Side: Interactive "SEND MESSAGE" Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-[#0b0e1e]/90 border border-slate-800/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all font-sans text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all font-sans text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Malinda, I'd like to discuss an opportunity..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all font-sans text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] disabled:opacity-80 cursor-pointer"
              >
                {formSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    MESSAGE SENT
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}