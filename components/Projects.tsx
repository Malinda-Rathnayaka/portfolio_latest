// components/Projects.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
import ProjectCard, { Project } from "./ProjectCard";

// SVG Data URI Image Previews
const DEMO_IMAGES = {
  estate:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><path d='M250 320 L400 180 L550 320 Z' fill='none' stroke='%2338bdf8' stroke-width='4'/><rect x='340' y='250' width='120' height='70' fill='none' stroke='%2338bdf8' stroke-width='3'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>MERN Estate Preview</text></svg>",
  university:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><path d='M250 200 L400 130 L550 200 L400 270 Z' fill='none' stroke='%2338bdf8' stroke-width='4'/><rect x='320' y='240' width='160' height='80' fill='none' stroke='%2338bdf8' stroke-width='3'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Smart University System Preview</text></svg>",
  tourvana:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><circle cx='400' cy='220' r='80' fill='none' stroke='%2322d3ee' stroke-width='4'/><path d='M320 220 Q400 140 480 220' fill='none' stroke='%2322d3ee' stroke-width='3'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Tourvana Travel Preview</text></svg>",
  rental:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><rect x='330' y='140' width='140' height='220' rx='20' fill='none' stroke='%23f472b6' stroke-width='4'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Vehicle Rental App Preview</text></svg>",
  staff:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><rect x='280' y='180' width='240' height='120' rx='12' fill='none' stroke='%2334d399' stroke-width='4'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>Staff Member MVC Preview</text></svg>",
  chatbot:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230f172a'/><rect x='280' y='180' width='240' height='100' rx='15' fill='none' stroke='%23818cf8' stroke-width='4'/><circle cx='340' cy='280' r='20' fill='%23818cf8'/><circle cx='460' cy='280' r='20' fill='%23818cf8'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'>AI Chatbot Assistant Preview</text></svg>",
};

const PROJECTS: Project[] = [
  {
    id: "mern-estate",
    number: "01",
    title: "MERN Estate",
    subtitle: "Real Estate Marketplace",
    description:
      "A full-stack real estate platform where users can browse, create, and manage property listings with real-time search filters and secure authentication.",
    image: DEMO_IMAGES.estate,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/Malinda-Rathnayaka/mern-state.git",
    liveUrl: "https://github.com/Malinda-Rathnayaka/MERN-Estate",
    caseStudy: {
      problem:
        "Finding and managing property listings can be difficult when information is scattered across unoptimized platforms.",
      solution:
        "Engineered a full-stack real estate platform allowing users to search, create, and manage property listings with persistent state and image handling.",
      roles: ["Full Stack Developer", "Database Architecture", "Authentication"],
      architecture: ["React UI", "↓", "REST API", "↓", "Express Server", "↓", "MongoDB"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase"],
      challenges:
        "Implementing secure token-based authentication and handling multi-file cloud image uploads while ensuring optimal site speed.",
      learned:
        "Full-stack web application structure, JWT session security, and state management optimization.",
    },
  },
  {
    id: "smart-university-system",
    number: "02",
    title: "Smart University System",
    subtitle: "University Management System",
    description:
      "An integrated university management system designed to streamline student registration, course tracking, and administrative records.",
    image: DEMO_IMAGES.university,
    tags: ["Java", "MySQL", "JDBC", "HTML/CSS", "Servlets"],
    githubUrl: "https://github.com/Malinda-Rathnayaka/smart-university-system.git",
    liveUrl: "https://github.com/Malinda-Rathnayaka/smart-university-system",
    caseStudy: {
      problem:
        "Academic institutions require central database solutions to manage student enrollment and course records without data duplication.",
      solution:
        "Built a relational university portal allowing administrators to manage academic schedules and student files efficiently.",
      roles: ["Backend Developer", "Database Architect"],
      architecture: ["Frontend Interface", "↓", "Java Servlets", "↓", "MySQL Database"],
      technologies: ["Java", "MySQL", "JDBC", "Servlets", "Bootstrap"],
      challenges:
        "Designing normalized database schemas to hold complex relations between students, modules, and instructors.",
      learned:
        "Relational database design, enterprise Java development, and multi-tier system architecture.",
    },
  },
  {
    id: "tourvana",
    number: "03",
    title: "Tourvana",
    subtitle: "Travel & Tourism Web App",
    description:
      "An interactive web platform for discovering travel destinations, satellite maps, itineraries, and live weather conditions.",
    image: DEMO_IMAGES.tourvana,
    tags: ["React", "JavaScript", "REST API", "CSS3", "HTML5"],
    githubUrl: "https://github.com/Malinda-Rathnayaka/Tourvana_All.git",
    liveUrl: "https://github.com/Malinda-Rathnayaka/Tourvana_All",
    caseStudy: {
      problem:
        "Travelers lack centralized platforms that combine country details, interactive geographic maps, and weather updates in one place.",
      solution:
        "Developed a responsive travel application that integrates multiple third-party APIs to deliver real-time destination insights.",
      roles: ["Frontend Developer", "API Integration Specialist"],
      architecture: ["React Client", "↓", "Asynchronous Fetch Layer", "↓", "Public APIs"],
      technologies: ["React", "JavaScript", "REST APIs", "CSS3", "HTML5"],
      challenges:
        "Orchestrating concurrent asynchronous REST API calls while ensuring smooth UI rendering and fallback error states.",
      learned:
        "Asynchronous JavaScript handling, state management using hooks, and responsive layout strategies.",
    },
  },
  {
    id: "vehicle-rental-app",
    number: "04",
    title: "Vehicle Rental Mobile App",
    subtitle: "Android Mobile Application",
    description:
      "Native Android mobile application providing vehicle search, reservation date selection, and real-time booking updates.",
    image: DEMO_IMAGES.rental,
    tags: ["Kotlin", "Android SDK", "Firebase", "XML"],
    githubUrl: "https://github.com/Malinda-Rathnayaka/ApplicatioVecle_Rental_Mobile_Application.git",
    liveUrl: "https://github.com/Malinda-Rathnayaka/Vehicle_Rental_Mobile_Application",
    caseStudy: {
      problem:
        "Traditional rental booking processes are often slow and lack mobile-first accessibility for users on the move.",
      solution:
        "Constructed a native Android application enabling instant vehicle scheduling and live status synchronization.",
      roles: ["Mobile Developer", "UI/UX Designer"],
      architecture: ["Android Layout (XML)", "↓", "Kotlin Business Logic", "↓", "Firebase Realtime DB"],
      technologies: ["Kotlin", "Android SDK", "Firebase", "XML Layouts"],
      challenges:
        "Adapting responsive native layouts across various screen dimensions and managing device lifecycle states.",
      learned:
        "Android lifecycle mechanics, Kotlin event handlers, and cloud backend synchronization.",
    },
  },
  {
    id: "staff-member-mvc",
    number: "05",
    title: "Staff Member System",
    subtitle: "MVC Management Module",
    description:
      "Staff management module built with MVC architecture for handling employee data, roles, and school information system records.",
    image: DEMO_IMAGES.staff,
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "MVC"],
    githubUrl: "https://github.com/Malinda-Rathnayaka/StaffMember-MVC.git",
    liveUrl: "https://github.com/Malinda-Rathnayaka/StaffMember-MVC",
    caseStudy: {
      problem:
        "Unstructured management code leads to difficult maintenance when updating administrative tools.",
      solution:
        "Implemented a modular staff management system enforcing clear separation of logic, presentation, and control layers.",
      roles: ["Software Engineer", "Architecture Designer"],
      architecture: ["View Interface", "↓", "Controller Layer", "↓", "Data Model"],
      technologies: ["JavaScript", "HTML5", "Bootstrap", "MySQL", "MVC Architecture"],
      challenges:
        "Maintaining strict layer separation between frontend DOM events and backend query handlers.",
      learned:
        "Model-View-Controller design pattern principles and modular codebase organization.",
    },
  },
  {
    id: "vehicle-fault-chatbot",
    number: "06",
    title: "Vehicle Fault Assistant",
    subtitle: "AI Diagnostic Chatbot",
    description:
      "An AI chatbot interpreting vehicle fault symptoms in natural language and generating detailed troubleshooting steps using Gemini API.",
    image: DEMO_IMAGES.chatbot,
    tags: ["JavaScript", "Gemini API", "HTML5", "Bootstrap"],
    githubUrl: "https://github.com/Malinda-Rathnayaka/chatbot.git",
    liveUrl: "https://malinda-rathnayaka.github.io/chatbot/",
    caseStudy: {
      problem:
        "Drivers struggle to diagnose unexpected mechanical sounds or warning symbols without immediate expert assistance.",
      solution:
        "Created an interactive conversational assistant that parses issue descriptions and provides diagnostic insights.",
      roles: ["Frontend Developer", "AI Prompt Engineer"],
      architecture: ["User Prompt Interface", "↓", "Client API Request Handler", "↓", "Google Gemini API"],
      technologies: ["JavaScript", "Gemini API", "HTML5", "Bootstrap 5"],
      challenges:
        "Designing structured system prompts to consistently return accurate, safe, and readable diagnostic responses.",
      learned:
        "LLM API integration, prompt engineering techniques, and handling streaming responses.",
    },
  },
];

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full py-28 bg-[#020617] text-white overflow-hidden z-10"
    >
      {/* Background Interactive Particle Network */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleNetwork />
        <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-blue-950/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-950/20 rounded-full blur-[150px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 font-mono text-xs uppercase tracking-[0.25em]"
        >
          // PROJECTS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white uppercase"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal"
        >
          A showcase of full-stack, mobile, system architecture, and AI projects from my GitHub repository.
        </motion.p>

        {/* 3-Column Visual Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={(selected) => setSelectedCaseStudy(selected)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-10 text-white shadow-2xl z-10 custom-scrollbar"
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-slate-800 pb-6 mb-6">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold block">
                  CASE STUDY // PROJECT {selectedCaseStudy.number}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold mt-1 text-white">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-slate-400 text-sm font-mono mt-1">
                  {selectedCaseStudy.subtitle}
                </p>

                {/* GitHub Link Action */}
                {selectedCaseStudy.githubUrl && (
                  <div className="mt-4">
                    <a
                      href={selectedCaseStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>View Source Code</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                    </a>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                    [ THE PROBLEM ]
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    {selectedCaseStudy.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                    [ THE SOLUTION ]
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    {selectedCaseStudy.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    [ MY ROLE ]
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.caseStudy.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    [ ARCHITECTURE ]
                  </h4>
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center gap-2 font-mono text-sm text-cyan-300">
                    {selectedCaseStudy.caseStudy.architecture.map((step, index) => (
                      <span
                        key={index}
                        className={
                          step === "↓"
                            ? "text-slate-500 font-bold text-base"
                            : "px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 w-full sm:w-auto text-center"
                        }
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    [ TECHNOLOGIES ]
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                      CHALLENGES
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedCaseStudy.caseStudy.challenges}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">
                      WHAT I LEARNED
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedCaseStudy.caseStudy.learned}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}