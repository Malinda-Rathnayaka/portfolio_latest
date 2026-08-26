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
      id="journey"
      className="relative w-full py-28 bg-transparent text-white overflow-hidden z-10 selection:bg-white/20 selection:text-white"
    >
      {/* Exact Custom Styles for E-Card Waves and Animated Glowing Borders from ContactPage */}
      <style jsx>{`
        .card-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          padding: 1.5px;
          isolation: isolate;
        }

        .e-card {
          background: rgba(17, 18, 21, 0.85);
          box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.5);
          position: relative;
          border-radius: 14.5px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          height: 100%;
          width: 100%;
        }

        /* Animated Border Effects from SelfMadeSystem */
        .spin {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          border-radius: inherit;
        }

        .spin-blur {
          filter: blur(2em);
          opacity: 0.7;
        }

        .spin-intense {
          inset: -1px;
          filter: blur(0.5em);
        }

        .spin-inside {
          inset: -1px;
          filter: blur(2px);
          z-index: 0;
        }

        .spin::before {
          content: "";
          position: absolute;
          inset: -60%;
          animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
        }

        .spin-blur::before {
          background: linear-gradient(-45deg, #f50, transparent 46% 54%, #05f);
        }

        .spin-intense::before {
          background: linear-gradient(-45deg, #f95, transparent 35% 65%, #59f);
        }

        .spin-inside::before {
          background: linear-gradient(-45deg, #fc9, transparent 35% 65%, #9cf);
        }

        @keyframes speen {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Ambient Card Waves */
        .wave {
          position: absolute;
          width: 540px;
          height: 700px;
          opacity: 0.15;
          left: 0;
          top: 0;
          margin-left: -50%;
          margin-top: -70%;
          background: linear-gradient(
            744deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.02) 60%,
            rgba(255, 255, 255, 0.08)
          );
          border-radius: 40%;
          animation: wave 25s infinite linear;
          pointer-events: none;
        }

        .wave:nth-child(2) {
          top: 180px;
          opacity: 0.1;
          animation-duration: 30s;
        }

        .wave:nth-child(3) {
          top: 220px;
          opacity: 0.05;
          animation-duration: 35s;
        }

        .e-card:hover .wave {
          animation-duration: 6000ms;
          opacity: 0.25;
        }

        .e-card:hover .wave:nth-child(2) {
          animation-duration: 8000ms;
        }

        .e-card:hover .wave:nth-child(3) {
          animation-duration: 10000ms;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-neutral-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-neutral-400" />
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
          className="mt-4 max-w-2xl text-neutral-400 text-base sm:text-lg leading-relaxed font-light"
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
                <div className="px-4 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white font-mono text-xl font-bold shadow-md">
                  {yearGroup.year}
                </div>
                {yearGroup.badge && (
                  <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-xs font-medium uppercase tracking-wider">
                    {yearGroup.badge}
                  </span>
                )}
                <div className="flex-1 h-[1px] bg-neutral-800" />
              </motion.div>

              {/* Timeline Vertical Bar & Items Container */}
              <div className="relative ml-4 sm:ml-6 pl-6 sm:pl-8 border-l-2 border-neutral-800 space-y-8">
                {yearGroup.items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Dot Indicator */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 z-30 ${
                        item.isCurrent
                          ? "bg-white border-zinc-300 shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse"
                          : "bg-neutral-950 border-neutral-600 group-hover:border-white group-hover:bg-neutral-800"
                      }`}
                    />

                    {/* Exact Card Structure from ContactPage */}
                    <div className="card-wrapper">
                      <div className="spin spin-blur" />
                      <div className="spin spin-intense" />
                      <div className="spin spin-inside" />

                      <div className="e-card p-6 sm:p-8">
                        <div className="wave" />
                        <div className="wave" />
                        <div className="wave" />

                        {/* Card Content Body */}
                        <div className="relative z-10 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                              {item.title}
                            </h3>
                            {item.isCurrent && (
                              <span className="w-fit px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px] uppercase font-semibold border border-white/20">
                                Active
                              </span>
                            )}
                          </div>

                          <p className="font-mono text-xs text-neutral-400 mt-1 font-medium">
                            {item.subtitle}
                          </p>

                          {item.description && (
                            <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          )}

                          {/* Tech / Topic Tags */}
                          {item.tags && item.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 font-mono text-[11px]"
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