"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";

const PHRASES = [
  "IT Undergraduate",
  "Full-Stack Developer",
  "Software Engineer",
];

const FULL_NAME = "MALINDA RATHNAYAKA";

function ProfessionalAnimatedName() {
  const words = FULL_NAME.split(" ");

  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none select-none flex flex-wrap gap-x-4 my-2">
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-flex overflow-hidden py-1">
          {word.split("").map((char, charIdx) => {
            const letterIndex = wordIdx * 8 + charIdx;
            return (
              <span
                key={charIdx}
                style={{ animationDelay: `${letterIndex * 0.035 + 0.1}s` }}
                className="name-char inline-block transition-transform duration-300 ease-out hover:-translate-y-1 hover:text-neutral-600"
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Advanced 3D Scroll State
  const [scrollProgress, setScrollProgress] = useState({
    opacity: 1,
    translateY: 0,
    scale: 1,
    rotateX: 0,
    blur: 0,
  });

  // Calculate 3D Perspective Tilt & Depth-of-Field Blur on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (scrollY <= heroHeight) {
        const progress = scrollY / heroHeight;
        
        setScrollProgress({
          opacity: Math.max(0, 1 - progress * 1.3),
          translateY: scrollY * 0.4,
          scale: Math.max(0.88, 1 - progress * 0.12),
          rotateX: Math.min(15, progress * 15), // Tilts hero back in 3D space
          blur: Math.min(12, progress * 16), // Adds depth-of-field blur
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("about") || document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  // Typewriter Loop
  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex] || "";
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timer = setTimeout(() => setCharIndex((prev) => prev + 1), 85);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((prev) => prev - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const displayedText = PHRASES[phraseIndex]?.slice(0, charIndex) ?? "";

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-center [perspective:1200px]"
    >
      <style jsx>{`
        .name-char {
          opacity: 0;
          transform: translateY(110%) rotateX(-20deg);
          filter: blur(8px);
          animation: professionalReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          background: linear-gradient(135deg, #09090b 0%, #3f3f46 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes professionalReveal {
          0% {
            opacity: 0;
            transform: translateY(110%) rotateX(-20deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            filter: blur(0px);
          }
        }

        /* Mouse Wheel Animation */
        @keyframes scrollDot {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.4;
            transform: translateY(10px);
          }
          100% {
            opacity: 0;
            transform: translateY(18px);
          }
        }

        .animate-scroll-dot {
          animation: scrollDot 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        /* Pulse Ring for Scroll Icon */
        @keyframes pulseRing {
          0% {
            transform: scale(0.85);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.25);
            opacity: 0;
          }
          100% {
            transform: scale(0.85);
            opacity: 0;
          }
        }

        .pulse-ring {
          animation: pulseRing 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        /* Liquid Masked Resume Button */
        .liquid-resume-btn {
          border: none;
          position: relative;
          width: 200px;
          height: 73px;
          padding: 0;
          z-index: 2;
          display: inline-block;
          -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
          mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
          -webkit-mask-size: 100%;
          mask-size: 100%;
          cursor: pointer;
          background-color: transparent;
          transform: translateY(8px);
          text-decoration: none;
        }

        .liquid-resume-btn::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: 0px 0 0 0 white;
          transition: all 1.5s ease;
        }

        .liquid-resume-btn:hover::after {
          box-shadow: 0px -13px 56px 12px #ffffffa6;
        }

        .liquid-resume-btn span {
          position: absolute;
          width: 100%;
          font-size: 15px;
          font-weight: 500;
          left: 50%;
          top: 39%;
          letter-spacing: 3px;
          text-align: center;
          transform: translate(-50%, -50%);
          color: black;
          transition: all 1.5s ease;
          z-index: 10;
        }

        .liquid-resume-btn:hover span {
          color: white;
        }

        .liquid-resume-btn::before {
          content: '';
          position: absolute;
          width: 0;
          height: 100%;
          background-color: black;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.8s ease;
        }

        .liquid-resume-btn:hover::before {
          width: 100%;
        }
      `}</style>

      {/* Hero Canvas with 3D Transform & Blur */}
      <div 
        className="relative w-full flex-1 flex items-center transition-all duration-75 ease-out origin-center"
        style={{
          opacity: scrollProgress.opacity,
          transform: `translateY(${scrollProgress.translateY}px) scale(${scrollProgress.scale}) rotateX(${scrollProgress.rotateX}deg)`,
          filter: `blur(${scrollProgress.blur}px)`,
        }}
      >
        {/* Diagonal Background */}
        <div 
          className="absolute inset-y-0 left-0 w-full lg:w-[62%] bg-[#d9d9d9] z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full py-12">
          
          <div className="lg:col-span-7 flex flex-col justify-center text-black pt-6 lg:pt-0">
            <span className="text-sm font-mono font-semibold uppercase tracking-widest text-neutral-500 mb-1">
              Hi, I am
            </span>

            <ProfessionalAnimatedName />

            <p className="mt-3 text-lg sm:text-xl font-medium text-neutral-600 h-8 flex items-center gap-1">
              <span>{displayedText}</span>
              <span className="w-0.5 h-5 bg-neutral-800 animate-pulse inline-block" />
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-resume-btn"
                aria-label="View Resume"
              >
                <span>RESUME</span>
              </a>

              <a
                href="mailto:rathnayakamalinda14@gmail.com"
                aria-label="Email"
                className="w-12 h-12 rounded-xl bg-[#d0d0d0] flex items-center justify-center text-black shadow-[3px_3px_6px_rgba(0,0,0,0.16),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:scale-95 transition-all duration-200"
              >
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </a>

              <a
                href="https://github.com/Malinda-Rathnayaka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl bg-[#d0d0d0] flex items-center justify-center text-black shadow-[3px_3px_6px_rgba(0,0,0,0.16),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:scale-95 transition-all duration-200"
              >
                <Github className="w-5 h-5 stroke-[2.2]" />
              </a>

              <a
                href="https://www.linkedin.com/in/malinda-rathnayaka-988887331/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl bg-[#d0d0d0] flex items-center justify-center text-black shadow-[3px_3px_6px_rgba(0,0,0,0.16),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.2)] hover:scale-95 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5 stroke-[2.2]" />
              </a>
            </div>
          </div>

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

      {/* Pill Track & Ambient Pulse Scroll Indicator */}
      <div
        onClick={handleScrollToNext}
        style={{ opacity: scrollProgress.opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer group flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-800 group-hover:text-neutral-500 font-bold transition-colors">
          Scroll Down
        </span>

        <div className="relative flex items-center justify-center">
          {/* Glowing Outer Pulse Ring */}
          <div className="absolute w-10 h-10 rounded-full bg-black/10 border border-black/20 pulse-ring pointer-events-none" />

          {/* Glass Mouse Pill */}
          <div className="w-6 h-10 rounded-full border-2 border-neutral-900/80 bg-white/10 backdrop-blur-sm flex justify-center p-1 group-hover:border-neutral-600 transition-colors shadow-sm">
            {/* Animated Inner Wheel Dot */}
            <div className="w-1.5 h-2.5 rounded-full bg-neutral-900 animate-scroll-dot" />
          </div>
        </div>
      </div>

    </section>
  );
}