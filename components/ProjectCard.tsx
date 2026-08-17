"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface CaseStudy {
  problem: string;
  solution: string;
  roles: string[];
  architecture: string[];
  technologies: string[];
  challenges: string;
  learned: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: CaseStudy;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpenCaseStudy,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between p-5 rounded-2xl bg-[#0b0e1e]/80 border border-slate-800/80 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
    >
      <div>
        {/* Top Preview Image Container */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e1e]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mt-5 tracking-tight group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Project Subtitle / Category */}
        <p className="font-mono text-xs text-cyan-400 mt-1 uppercase tracking-wider font-medium">
          {project.subtitle}
        </p>

        {/* Detailed Description */}
        <p className="mt-3 text-slate-300/80 text-sm leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons Bar */}
        <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-slate-800/60">
          {/* Live Demo Button */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/80 text-slate-200 hover:text-cyan-300 font-mono text-[11px] uppercase tracking-wider font-semibold text-center transition-all duration-200 shadow-sm cursor-pointer"
            >
              LIVE DEMO
            </a>
          ) : (
            <button
              disabled
              className="flex-1 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-500 font-mono text-[11px] uppercase tracking-wider font-semibold cursor-not-allowed text-center"
              title="Live demo link unavailable"
            >
              LIVE DEMO
            </button>
          )}

          {/* GitHub Code Button */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/80 text-slate-200 hover:text-cyan-300 font-mono text-[11px] uppercase tracking-wider font-semibold text-center transition-all duration-200 shadow-sm cursor-pointer"
            >
              CODE
            </a>
          ) : (
            <button
              disabled
              className="flex-1 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-500 font-mono text-[11px] uppercase tracking-wider font-semibold cursor-not-allowed text-center"
              title="Repository link unavailable"
            >
              CODE
            </button>
          )}

          {/* Case Study Modal Trigger */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 font-mono text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 text-center cursor-pointer"
          >
            CASE STUDY
          </button>
        </div>
      </div>
    </motion.div>
  );
}