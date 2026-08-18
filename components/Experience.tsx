"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  subtitle: string;
  description?: string;
  tags?: string[];
  isCurrent?: boolean;
}

interface TimelineYear {
  year: string;
  badge?: string;
  items: TimelineItem[];
}

const JOURNEY_DATA: TimelineYear[] = [
  {
    year: "2026",
    badge: "PRESENT",
    items: [
      {
        title: "BSc (Hons) Information Technology",
        subtitle: "SLIIT (Sri Lanka Institute of Information Technology)",
        description:
          "Specializing in Information Technology with coursework focusing on software development, data structures, algorithms, database systems, and enterprise IT architecture.",
        tags: [
          "Information Technology",
          "Software Development",
          "OOP",
          "DBMS",
          "Data Structures",
        ],
      },
      {
        title: "Full-Stack Development Focus",
        subtitle: "Modern Web Ecosystem",
        description:
          "Building responsive, user-focused web applications with real-time capabilities and clean component architectures.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      },
      {
        title: "Backend Development Focus",
        subtitle: "Enterprise & RESTful Architecture",
        description:
          "Designing structured backend systems, database schemas, and robust APIs following MVC design patterns.",
        tags: ["Java", "Spring Boot", "REST API", "MySQL", "MVC"],
      },
      {
        title: "Currently",
        subtitle: "Active Projects & Continuous Learning",
        description:
          "Developing full-stack web and mobile software projects, exploring AI API integrations, and actively preparing for software engineering internship roles.",
        isCurrent: true,
      },
    ],
  },
];

export default function Journey() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 bg-black text-white overflow-hidden z-10 selection:bg-white/20 selection:text-white"
    >
      {/* Custom Styles for Spacious74's Light Ray Card */}
      <style jsx>{`
        .experience-outer {
          width: 100%;
          border-radius: 12px;
          padding: 1px;
          background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
          position: relative;
        }

        .experience-dot {
          width: 5px;
          aspect-ratio: 1;
          position: absolute;
          background-color: #fff;
          box-shadow: 0 0 10px #ffffff;
          border-radius: 100px;
          z-index: 2;
          right: 10%;
          top: 10%;
          animation: moveDot 6s linear infinite;
        }

        @keyframes moveDot {
          0%,
          100% {
            top: 10%;
            right: 10%;
          }
          25% {
            top: 10%;
            right: calc(100% - 20px);
          }
          50% {
            top: calc(100% - 20px);
            right: calc(100% - 20px);
          }
          75% {
            top: calc(100% - 20px);
            right: 10%;
          }
        }

        .experience-card {
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 11px;
          border: solid 1px #202222;
          background-size: 20px 20px;
          background: radial-gradient(circle 350px at 0% 0%, #3a3a3a, #0c0d0d);
          display: flex;
          position: relative;
          flex-direction: column;
          color: #fff;
          padding: 1.75rem;
          overflow: hidden;
        }

        .experience-ray {
          width: 220px;
          height: 45px;
          border-radius: 100px;
          position: absolute;
          background-color: #c7c7c7;
          opacity: 0.25;
          box-shadow: 0 0 50px #fff;
          filter: blur(10px);
          transform-origin: 10%;
          top: 0%;
          left: 0;
          transform: rotate(40deg);
          pointer-events: none;
        }

        .experience-line {
          position: absolute;
          background-color: #2c2c2c;
          pointer-events: none;
        }

        .topl {
          top: 8px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
        }

        .bottoml {
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 1px;
        }

        .leftl {
          left: 8px;
          top: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg, #747474 30%, #222424 70%);
        }

        .rightl {
          right: 8px;
          top: 0;
          width: 1px;
          height: 100%;
        }
      `}</style>

      {/* Ambient Background Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-zinc-800/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-zinc-900/40 rounded-full blur-[150px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-zinc-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-zinc-400" />
          // ACADEMIC & PROFESSIONAL TIMELINE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white uppercase"
        >
          My Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed font-normal"
        >
          An overview of my academic foundation, core technical focuses, and growth as an aspiring Software Engineer.
        </motion.p>

        {/* Timeline Structure */}
        <div className="mt-16 relative">
          {JOURNEY_DATA.map((yearGroup) => (
            <div key={yearGroup.year} className="mb-12">
              
              {/* Year Header Marker */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="px-4 py-1.5 rounded-xl bg-zinc-950 border border-zinc-700 text-white font-mono text-xl font-bold shadow-md">
                  {yearGroup.year}
                </div>
                {yearGroup.badge && (
                  <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs font-medium uppercase tracking-wider">
                    {yearGroup.badge}
                  </span>
                )}
                <div className="flex-1 h-[1px] bg-zinc-800" />
              </motion.div>

              {/* Timeline Vertical Bar & Items Container */}
              <div className="relative ml-4 sm:ml-6 pl-6 sm:pl-8 border-l-2 border-zinc-800 space-y-8">
                {yearGroup.items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing Node Dot on Timeline */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 z-30 ${
                        item.isCurrent
                          ? "bg-white border-zinc-300 shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse"
                          : "bg-black border-zinc-600 group-hover:border-white group-hover:bg-zinc-800"
                      }`}
                    />

                    {/* Spacious74 Light Ray Card Container */}
                    <div className="experience-outer">
                      <div className="experience-dot" />
                      <div className="experience-card">
                        <div className="experience-ray" />
                        
                        {/* Decorative Grid Lines */}
                        <div className="experience-line topl" />
                        <div className="experience-line bottoml" />
                        <div className="experience-line leftl" />
                        <div className="experience-line rightl" />

                        {/* Card Content Body */}
                        <div className="relative z-10 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                              {item.title}
                            </h3>
                            {item.isCurrent && (
                              <span className="w-fit px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px] uppercase font-semibold border border-white/20">
                                Active
                              </span>
                            )}
                          </div>

                          <p className="font-mono text-xs text-zinc-300 mt-1 font-medium">
                            {item.subtitle}
                          </p>

                          {item.description && (
                            <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          )}

                          {/* Tech / Topic Tags */}
                          {item.tags && item.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-700/60 text-zinc-300 font-mono text-[11px]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}