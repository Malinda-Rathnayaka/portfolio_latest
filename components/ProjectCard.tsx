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
      className="github-card-container group relative w-full rounded-2xl p-[2px] overflow-hidden"
    >
      {/* Component Styles */}
      <style jsx>{`
        .github-card-container {
          background: #000;
          position: relative;
        }

        .spin-layer {
          position: absolute;
          inset: -50%;
          z-index: 0;
          pointer-events: none;
        }

        .spin-blur {
          filter: blur(2.5em);
          opacity: 0.7;
        }

        .spin-intense {
          filter: blur(0.75em);
          opacity: 0.9;
        }

        .spin-layer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            -45deg,
            #22d3ee,
            transparent 40% 60%,
            #3b82f6
          );
          animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
        }

        .repo-link::before {
          content: "";
          position: absolute;
          inset: -2px -6px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.07);
          opacity: 0;
          transition: 0.3s;
        }

        .repo-link:hover::before {
          opacity: 1;
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
      `}</style>

      {/* Animated Glowing Gradient Borders */}
      <div className="spin-layer spin-blur" />
      <div className="spin-layer spin-intense" />

      {/* Main Card Body */}
      <div className="relative z-10 w-full h-full bg-[#111215] text-white rounded-[14px] flex flex-col overflow-hidden border border-[#1d1f23] shadow-2xl">
        {/* GitHub Header Bar */}
        <div className="bg-[#0b0d10] border-b border-[#1d1f23] flex flex-col gap-2">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 pt-3 text-sm">
            <div className="flex items-center gap-2 font-mono text-xs text-[#bebebe]">
              {/* GitHub Icon */}
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="repo-link relative cursor-pointer hover:text-white">
                  project-{project.number}
                </span>
                <span className="text-[#56585c] pointer-events-none">/</span>
                <span className="repo-link relative cursor-pointer font-semibold text-white">
                  {project.id}
                </span>
              </div>
            </div>

            {/* Quick Link Icons */}
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-[#181a1e] border border-[#303236] text-[#797d86] hover:text-white hover:bg-white/10 transition-all"
                  title="View Source Code"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-[#181a1e] border border-[#303236] text-[#797d86] hover:text-white hover:bg-white/10 transition-all"
                  title="Visit Live Site"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.75.75 0 0 1 .75.75v4.146a.75.75 0 0 1-1.28.53l-1.12-1.12-3.88 3.88a.75.75 0 1 1-1.06-1.06l3.88-3.88-1.12-1.12a.75.75 0 0 1 .53-1.28z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* IDE Sub-Header Tabs */}
          <div className="flex items-center gap-1 px-3 pt-1 text-xs text-[#797d86]">
            <div className="px-3 py-1.5 border-b-2 border-[#e98463] text-white flex items-center gap-2 font-medium cursor-pointer">
              <svg className="w-3.5 h-3.5 fill-[#e98463]" viewBox="0 0 16 16">
                <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-11H4.5a1 1 0 00-1 1v12a1 1 0 001 1h4a.75.75 0 010 1.5h-4A2.5 2.5 0 012 13.5v-11z" />
              </svg>
              Overview
            </div>
            <div className="px-3 py-1.5 hover:text-white flex items-center gap-2 cursor-pointer transition-colors">
              <svg className="w-3.5 h-3.5 fill-[#797d86]" viewBox="0 0 16 16">
                <path d="M1.5 3.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 01-1.75 1.75h-9.5a1.75 1.75 0 01-1.75-1.75v-9.5z" />
              </svg>
              Stack
            </div>
          </div>
        </div>

        {/* Card Main Content */}
        <div className="p-5 flex flex-col justify-between flex-1 gap-5">
          <div>
            {/* Image Preview Container */}
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-[#343539] bg-[#0b0d10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111215]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-bold mt-4 tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="font-mono text-xs text-cyan-400 mt-0.5 uppercase tracking-wider">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="mt-2.5 text-xs text-[#bebebe] leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Bottom Section: Tech Stack & Actions */}
          <div className="flex flex-col gap-4">
            {/* Tech Stack Pills */}
            <div className="p-2 bg-[#0b0d10] border border-[#343539] rounded-md flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[#1d1f23] border border-[#343539] text-[#bebebe] font-mono text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons styled with 0xnihilism Uiverse Style */}
            <div className="flex items-center gap-2 pt-2 border-t border-[#1d1f23]">
              {/* LIVE DEMO */}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-1 flex-col items-center justify-center h-[44px] no-underline transition-transform active:scale-95 cursor-pointer outline-none rounded-lg p-0 border-none bg-white/5 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                      filter: "blur(15px)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                      filter: "blur(18px)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  />
                  <div className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px] bg-black" />
                  <div className="relative z-20 flex flex-col items-center justify-center">
                    <p
                      className="m-0 p-0 font-sans text-xs font-semibold text-white tracking-wider uppercase"
                      style={{
                        WebkitFontSmoothing: "antialiased",
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      LIVE DEMO
                    </p>
                  </div>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="group relative flex flex-1 flex-col items-center justify-center h-[44px] opacity-40 cursor-not-allowed outline-none rounded-lg p-0 border-none bg-white/5 overflow-hidden"
                >
                  <div className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px] bg-black" />
                  <div className="relative z-20 flex flex-col items-center justify-center">
                    <p className="m-0 p-0 font-sans text-xs font-semibold text-white/50 tracking-wider uppercase">
                      LIVE DEMO
                    </p>
                  </div>
                </button>
              )}

              {/* CODE */}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-1 flex-col items-center justify-center h-[44px] no-underline transition-transform active:scale-95 cursor-pointer outline-none rounded-lg p-0 border-none bg-white/5 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                      filter: "blur(15px)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                      filter: "blur(18px)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  />
                  <div className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px] bg-black" />
                  <div className="relative z-20 flex flex-col items-center justify-center">
                    <p
                      className="m-0 p-0 font-sans text-xs font-semibold text-white tracking-wider uppercase"
                      style={{
                        WebkitFontSmoothing: "antialiased",
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      CODE
                    </p>
                  </div>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="group relative flex flex-1 flex-col items-center justify-center h-[44px] opacity-40 cursor-not-allowed outline-none rounded-lg p-0 border-none bg-white/5 overflow-hidden"
                >
                  <div className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px] bg-black" />
                  <div className="relative z-20 flex flex-col items-center justify-center">
                    <p className="m-0 p-0 font-sans text-xs font-semibold text-white/50 tracking-wider uppercase">
                      CODE
                    </p>
                  </div>
                </button>
              )}

              {/* CASE STUDY */}
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="group relative flex flex-1 flex-col items-center justify-center h-[44px] transition-transform active:scale-95 cursor-pointer outline-none rounded-lg p-0 border-none bg-white/5 overflow-hidden"
              >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg"
                  style={{
                    background:
                      "radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                    filter: "blur(15px)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg"
                  style={{
                    background:
                      "radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                    filter: "blur(18px)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg"
                  style={{
                    background:
                      "radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg"
                  style={{
                    background:
                      "radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                />
                <div className="absolute inset-[1px] pointer-events-none z-10 rounded-[7px] bg-black" />
                <div className="relative z-20 flex flex-col items-center justify-center">
                  <p
                    className="m-0 p-0 font-sans text-xs font-semibold text-white tracking-wider uppercase"
                    style={{
                      WebkitFontSmoothing: "antialiased",
                      textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                    }}
                  >
                    CASE STUDY
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}