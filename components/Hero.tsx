"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";

const PHRASES = [
  "IT Undergraduate",
  "Full-Stack Developer",
  "Software Engineer",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!PHRASES || PHRASES.length === 0) return;

    const currentPhrase = PHRASES[phraseIndex] || "";
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timer = setTimeout(() => setCharIndex((prev) => prev + 1), 85);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((prev) => prev - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  // Fallback string prevents undefined errors
  const displayedText = PHRASES[phraseIndex]?.slice(0, charIndex) ?? "";

  return (
    <section id="hero" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      
      {/* 1. TOP NAVIGATION BAR */}
      <header className="relative z-30 max-w-7xl w-full mx-auto px-6 sm:px-12 py-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-xl bg-black border-2 border-black flex items-center justify-center font-black text-xl text-white tracking-tighter shadow-md">
            MR
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-white">
          <a href="#about" className="hover:text-gray-300 transition-colors">About me</a>
          <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Portfolio</a>
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-white text-black font-bold uppercase text-xs tracking-wider shadow-md hover:bg-gray-100 transition-all active:scale-95"
          >
            CONTACT ME
          </a>
        </nav>
      </header>

      {/* 2. MAIN SPLIT SECTION */}
      <div className="relative w-full flex-1 flex items-center">
        
        {/* DIAGONAL LIGHT GREY BACKGROUND */}
        <div 
          className="absolute inset-y-0 left-0 w-full lg:w-[62%] bg-[#d9d9d9] z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
          }}
        />

        {/* CONTENT CONTAINER */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full py-12">
          
          {/* LEFT COLUMN: Text & Social Icons */}
          <div className="lg:col-span-7 flex flex-col justify-center text-black pt-6 lg:pt-0">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-800 mb-2">
              Hi, I am
            </h3>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black uppercase leading-none">
              Malinda Rathnayaka
            </h1>

            {/* Typewriter Role Subtitle */}
            <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-500 h-8 flex items-center gap-1">
              <span>{displayedText}</span>
              <span className="w-0.5 h-6 bg-gray-600 animate-pulse inline-block" />
            </p>

            {/* Embossed Social Icon Buttons */}
            <div className="mt-12 flex items-center gap-4">
              <a
                href="mailto:rathnayakamalinda14@gmail.com"
                aria-label="Email"
                className="w-12 h-12 rounded-xl bg-[#d0d0d0] flex items-center justify-center text-black shadow-[3px_3px_6px_rgba(0,0,0,0.16),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:scale-95 transition-all duration-200"
              >
                <Mail className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="https://github.com/Malinda-Rathnayaka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl bg-[#d0d0d0] flex items-center justify-center text-black shadow-[3px_3px_6px_rgba(0,0,0,0.16),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:scale-95 transition-all duration-200"
              >
                <Github className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="https://www.linkedin.com/in/malinda-rathnayaka/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl bg-[#d0d0d0] flex items-center justify-center text-black shadow-[3px_3px_6px_rgba(0,0,0,0.16),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:scale-95 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Profile Photo */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end h-full">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[450px] md:w-[380px] md:h-[500px]">
              <Image
                src="/profile_3.png"
                alt="Malinda Rathnayaka"
                fill
                priority
                className="object-cover object-top filter contrast-[1.05]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}