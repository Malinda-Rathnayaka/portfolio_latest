"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

const PROFILE_DETAILS = [
  {
    title: "LOCATION",
    items: ["Sri Lanka"],
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "EDUCATION",
    items: ["BSc (Hons) Information Technology", "SLIIT"],
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "FOCUS",
    items: ["Full-Stack Development", "Backend Engineering"],
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "CURRENTLY LEARNING",
    items: ["Spring Boot", "REST APIs", "Next.js", "System Design"],
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Layer with Interactive Cursor Particle Network */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-950/20 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-cyan-400/60" />
          
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white"
        >
          About me
        </motion.h2>

        {/* Main Grid: Narrative Bio + Developer Profile Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Bio Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-300/90 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
              I&apos;m <span className="text-white font-semibold">Malinda Rathnayaka</span>, an Information Technology undergraduate at <span className="text-cyan-400 font-medium">SLIIT</span> with a strong interest in full-stack development and backend engineering.
            </p>

            <p className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
              I enjoy turning ideas into practical software solutions, from REST APIs and database-driven applications to modern web and mobile applications.
            </p>

            <p className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
              My current focus is strengthening my backend development skills with <span className="text-cyan-400 font-medium">Java</span> and <span className="text-cyan-400 font-medium">Spring Boot</span> while expanding my capabilities in modern frontend technologies such as <span className="text-cyan-400 font-medium">React</span> and <span className="text-cyan-400 font-medium">Next.js</span>.
            </p>
          </motion.div>

          {/* Right Side: Developer Profile Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {PROFILE_DETAILS.map((card, idx) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    {card.title}
                  </h3>
                </div>

                <ul className="space-y-1 pl-1">
                  {card.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-white font-medium text-sm sm:text-base flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}