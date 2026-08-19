"use client";

import { motion } from "framer-motion";

const PROFILE_DETAILS = [
  {
    title: "LOCATION",
    rotation: -15,
    items: ["Sri Lanka"],
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "EDUCATION",
    rotation: -5,
    items: ["BSc (Hons) IT", "SLIIT"],
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "FOCUS",
    rotation: 5,
    items: ["Full-Stack", "Backend Eng."],
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "LEARNING",
    rotation: 15,
    items: ["Spring Boot", "Next.js"],
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 bg-transparent text-white overflow-hidden z-10 selection:bg-blue-500/30 selection:text-blue-200 cursor-default"
    >
      {/* Styles for Dark/Black Glass Deck */}
      <style jsx global>{`
        .glass-deck {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 0;
        }

        .glass-deck .glass-card {
          position: relative;
          width: 170px;
          height: 210px;
          background: rgba(0, 0, 0, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease, margin 0.5s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
          margin: 0 -35px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transform: rotate(calc(var(--r) * 1deg));
          cursor: pointer;
        }

        .glass-deck:hover .glass-card {
          transform: rotate(0deg);
          margin: 0 10px;
        }

        .glass-deck .glass-card:hover {
          background: rgba(37, 99, 235, 0.08);
          border-color: rgba(96, 165, 250, 0.5);
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);
        }

        .glass-deck .glass-card::before {
          content: attr(data-text);
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 42px;
          background: rgba(0, 0, 0, 0.9);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #60a5fa;
          font-family: monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }

        @media (max-width: 640px) {
          .glass-deck {
            flex-wrap: wrap;
            gap: 16px;
          }
          .glass-deck .glass-card {
            margin: 0 !important;
            transform: none !important;
            width: 140px;
            height: 180px;
          }
        }
      `}</style>

      {/* Background Interactive Particle Network & Blue Glow Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-[150px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-blue-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-blue-400/60" />
         
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white uppercase"
        >
          About me
        </motion.h2>

        {/* Narrative Transparent Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-300 text-base leading-relaxed"
        >
          <div className="p-6 rounded-2xl bg-black border border-neutral-800 backdrop-blur-md shadow-2xl hover:border-blue-500/40 transition-all duration-300">
            <p>
              I&apos;m <span className="text-white font-semibold">Malinda Rathnayaka</span>, an Information Technology undergraduate at <span className="text-white font-semibold underline decoration-blue-500/50">SLIIT</span> specializing in full-stack development.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black border border-neutral-800 backdrop-blur-md shadow-2xl hover:border-blue-500/40 transition-all duration-300">
            <p>
              I enjoy turning complex ideas into practical software solutions, building RESTful APIs, modern web platforms, and mobile application backend services.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-black border border-neutral-800 backdrop-blur-md shadow-2xl hover:border-blue-500/40 transition-all duration-300">
            <p>
              My primary focus is mastering backend development with <span className="text-white font-semibold">Java</span> and <span className="text-white font-semibold">Spring Boot</span> alongside <span className="text-white font-semibold">React</span> and <span className="text-white font-semibold">Next.js</span>.
            </p>
          </div>
        </motion.div>

        {/* Interactive Rotating Glass Card Deck */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-xs font-mono text-blue-400/80 uppercase tracking-widest mb-4">
            [ HOVER OVER DECK TO EXPAND ]
          </p>

          <div className="glass-deck">
            {PROFILE_DETAILS.map((card) => (
              <div
                key={card.title}
                className="glass-card"
                data-text={card.title}
                style={{ "--r": card.rotation } as React.CSSProperties}
              >
                <div className="mb-8 flex flex-col items-center">
                  {card.icon}
                  <ul className="mt-3 text-center space-y-0.5">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="text-xs font-medium text-zinc-300 font-sans">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}