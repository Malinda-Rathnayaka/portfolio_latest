"use client";

import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

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
        description: "Specializing in Information Technology with coursework focusing on software development, data structures, algorithms, database systems, and enterprise IT architecture.",
        tags: ["Information Technology", "Software Development", "OOP", "DBMS", "Data Structures"],
      },
      {
        title: "Full-Stack Development Focus",
        subtitle: "Modern Web Ecosystem",
        description: "Building responsive, user-focused web applications with real-time capabilities and clean component architectures.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      },
      {
        title: "Backend Development Focus",
        subtitle: "Enterprise & RESTful Architecture",
        description: "Designing structured backend systems, database schemas, and robust APIs following MVC design patterns.",
        tags: ["Java", "Spring Boot", "REST API", "MySQL", "MVC"],
      },
      {
        title: "Currently",
        subtitle: "Active Projects & Continuous Learning",
        description: "Developing full-stack web and mobile software projects, exploring AI API integrations, and actively preparing for software engineering internship roles.",
        isCurrent: true,
      },
    ],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Glow & Particle Network */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />
        <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-950/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[150px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest"
        >
          <span className="w-8 h-[1px] bg-cyan-400/60" />
          
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
          className="mt-4 max-w-2xl text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal"
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
                <div className="px-4 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-mono text-xl font-bold">
                  {yearGroup.year}
                </div>
                {yearGroup.badge && (
                  <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-400 font-mono text-xs font-medium uppercase tracking-wider">
                    {yearGroup.badge}
                  </span>
                )}
                <div className="flex-1 h-[1px] bg-slate-800/80" />
              </motion.div>

              {/* Timeline Vertical Bar & Items Container */}
              <div className="relative ml-4 sm:ml-6 pl-6 sm:pl-8 border-l-2 border-slate-800/80 space-y-8">
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
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        item.isCurrent
                          ? "bg-cyan-400 border-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-pulse"
                          : "bg-slate-950 border-cyan-500/60 group-hover:border-cyan-400 group-hover:bg-cyan-500/20"
                      }`}
                    />

                    {/* Timeline Card Content */}
                    <div className="p-6 rounded-2xl bg-[#0b0e1e]/80 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                        {item.isCurrent && (
                          <span className="w-fit px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] uppercase font-semibold border border-cyan-500/30">
                            Active
                          </span>
                        )}
                      </div>

                      <p className="font-mono text-xs text-cyan-400 mt-1 font-medium">
                        {item.subtitle}
                      </p>

                      {item.description && (
                        <p className="mt-3 text-slate-300/80 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Tech/Topic Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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