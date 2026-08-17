"use client";

import {
  Youtube,
  Github,
  MessageSquare,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#030014] text-white py-16 px-6 md:px-16 overflow-hidden z-10">
      
      {/* 1. TOP HORIZON DIVIDER LINE (Signals Page Ending / Footer Start) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-20" />
      
      {/* 2. MATCHING BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Interactive Particle Network */}
        <ParticleNetwork />

        {/* Top Glow Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[120px] bg-cyan-500/10 blur-[100px] rounded-full" />

        {/* Ambient Bottom Radial Glows */}
        <div className="absolute bottom-[-50px] left-10 w-[350px] h-[250px] bg-indigo-950/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-50px] right-10 w-[350px] h-[250px] bg-cyan-950/25 rounded-full blur-[140px]" />
      </div>

      {/* 3. FOOTER CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 justify-items-start sm:justify-items-center">
          
          {/* Column 1: Community */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base md:text-lg mb-2 tracking-wide">
              Community
            </h3>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal group"
            >
              <Youtube className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
              <span>YouTube</span>
            </a>

            <a
              href="https://github.com/Malinda-Rathnayaka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal group"
            >
              <Github className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
              <span>GitHub</span>
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal group"
            >
              <MessageSquare className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
              <span>Discord</span>
            </a>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base md:text-lg mb-2 tracking-wide">
              Social Media
            </h3>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal group"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
              <span>Instagram</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal group"
            >
              <Twitter className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
              <span>Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/malinda-rathnayaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal group"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
              <span>Linkedin</span>
            </a>
          </div>

          {/* Column 3: About */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-base md:text-lg mb-2 tracking-wide">
              About
            </h3>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal cursor-pointer"
            >
              Become Sponsor
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal cursor-pointer"
            >
              Learning about me
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-slate-300 hover:text-cyan-400 transition-colors text-sm font-normal cursor-pointer"
            >
              Contact Me
            </button>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-16 pt-8 border-t border-slate-800/40 text-center text-slate-400 text-sm font-medium tracking-wide">
          © Malinda Rathnayaka 2026 Inc. All rights reserved.
        </div>

      </div>
    </footer>
  );
}