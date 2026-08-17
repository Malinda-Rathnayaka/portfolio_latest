"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillsBackground from "./SkillsBackground";

const SKILL_ROWS = [
  // Row 1 (11 Skills)
  [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertOnDark: true },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ],
  // Row 2 (8 Skills)
  [
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertOnDark: true },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invertOnDark: true },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ],
  // Row 3 (5 Skills)
  [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
  // Row 4 (1 Skill)
  [
    { name: "Go Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  ],
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-[#020617] text-white py-28 px-4 overflow-hidden z-10 flex flex-col items-center justify-center"
    >
      {/* Interactive Cursor-Reactive Particle Network */}
      <SkillsBackground />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-6 h-[1px] bg-slate-700" />
            TECHNICAL STACK
            <span className="w-6 h-[1px] bg-slate-700" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white"
          >
            Engineering with{" "}
            <span className="text-slate-100 font-extrabold">
              modern technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            The frameworks, languages, and infrastructure tools I use to build scalable products.
          </motion.p>
        </div>

        {/* Funnel Skill Grid Layout */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-4 sm:gap-5 w-full relative z-10">
          {SKILL_ROWS.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl"
            >
              {row.map((skill, skillIndex) => {
                const floatOffset = (rowIndex + skillIndex) % 2 === 0 ? -4 : 4;

                return (
                  <motion.div
                    key={skill.name}
                    animate={{ y: [0, floatOffset, 0] }}
                    transition={{
                      duration: 4 + ((rowIndex + skillIndex) % 3) * 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.18,
                      y: -6,
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      backgroundColor: "rgba(30, 41, 59, 0.95)",
                    }}
                    className="group relative p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 text-slate-200 text-xs font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-xl z-40">
                      {skill.name}
                    </div>

                    {/* True Unfiltered Original Brand Color Icon */}
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className={`w-full h-full object-contain ${
                          skill.invertOnDark ? "invert" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}