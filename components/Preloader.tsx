"use client";

import { useState, useEffect } from "react";

const LOADING_TEXT = ["L", "O", "A", "D", "I", "N", "G", ".", ".", "."];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Guaranteed minimum display duration for animation
    const minTimer = new Promise((resolve) => setTimeout(resolve, 4600));

    const pageLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        window.addEventListener("load", () => resolve(true), { once: true });
      }
    });

    Promise.all([minTimer, pageLoad]).then(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 600);
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-600 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <style jsx>{`
        /* --- CHIP LOADER STYLES --- */
        .main-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 480px;
        }

        .loader-svg {
          width: 100%;
          height: auto;
        }

        .trace-bg {
          stroke: #262626;
          stroke-width: 1.8;
          fill: none;
        }

        .trace-flow {
          stroke-width: 1.8;
          fill: none;
          stroke-dasharray: 40 400;
          stroke-dashoffset: 438;
          filter: drop-shadow(0 0 6px currentColor);
          animation: flow 2.8s cubic-bezier(0.5, 0, 0.9, 1) infinite;
        }

        .yellow { stroke: #ffea00; color: #ffea00; }
        .blue { stroke: #00ccff; color: #00ccff; }
        .green { stroke: #00ff15; color: #00ff15; }
        .purple { stroke: #9900ff; color: #9900ff; }
        .red { stroke: #ff3300; color: #ff3300; }

        @keyframes flow {
          to { stroke-dashoffset: 0; }
        }

        .chip-body {
          fill: #09090b;
          stroke: #3f3f46;
          stroke-width: 1.5;
          rx: 16px;
          ry: 16px;
        }

        .chip-text {
          font-family: var(--font-jetbrains), monospace;
          font-weight: bold;
          font-size: 13px;
          fill: #ffffff;
          letter-spacing: 2px;
          text-anchor: middle;
          dominant-baseline: middle;
        }

        .chip-pin {
          fill: #52525b;
          stroke: #18181b;
          stroke-width: 0.5;
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.6));
        }

        /* --- TEXT STREAK LOADER STYLES --- */
        .loader-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          width: auto;
          margin-top: 1rem;
          font-family: var(--font-jetbrains), monospace;
          font-size: 1.2em;
          font-weight: 600;
          user-select: none;
          color: #fff;
          scale: 1.3;
        }

        .text-loader-mask {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;
          background-color: transparent;
          mask: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 6px,
            black 7px,
            black 8px
          );
        }

        .text-loader-mask::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
            radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
            radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
            radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
          mask: radial-gradient(
            circle at 50% 50%,
            transparent 0%,
            transparent 10%,
            black 25%
          );
          animation:
            transform-animation 2s infinite alternate,
            opacity-animation 4s infinite;
          animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
        }

        @keyframes transform-animation {
          0% { transform: translate(-55%); }
          100% { transform: translate(55%); }
        }

        @keyframes opacity-animation {
          0%, 100% { opacity: 0; }
          15% { opacity: 1; }
          65% { opacity: 0; }
        }

        .loader-letter {
          display: inline-block;
          opacity: 0;
          animation: loader-letter-anim 4s infinite linear;
          z-index: 2;
        }

        .loader-letter:nth-child(1) { animation-delay: 0.1s; }
        .loader-letter:nth-child(2) { animation-delay: 0.205s; }
        .loader-letter:nth-child(3) { animation-delay: 0.31s; }
        .loader-letter:nth-child(4) { animation-delay: 0.415s; }
        .loader-letter:nth-child(5) { animation-delay: 0.521s; }
        .loader-letter:nth-child(6) { animation-delay: 0.626s; }
        .loader-letter:nth-child(7) { animation-delay: 0.731s; }
        .loader-letter:nth-child(8) { animation-delay: 0.837s; }
        .loader-letter:nth-child(9) { animation-delay: 0.942s; }
        .loader-letter:nth-child(10) { animation-delay: 1.047s; }

        @keyframes loader-letter-anim {
          0% { opacity: 0; }
          5% {
            opacity: 1;
            text-shadow: 0 0 4px #fff;
            transform: scale(1.1) translateY(-2px);
          }
          20% { opacity: 0.2; }
          100% { opacity: 0; }
        }

        /* --- BOTTOM RIGHT ROLLING LOADER STYLES --- */
        .bottom-right-container {
          position: absolute;
          bottom: 2.5rem;
          right: 9rem;
          pointer-events: none;
        }

        .rolling-loader {
          --ballcolor: #f2f2f2;
          --shadow: 0px 0 #ffffff00;
          --shadowcolor: #ffffff00;
          width: 10px;
          height: 10px;
          left: -120px;
          border-radius: 50%;
          position: relative;
          color: var(--ballcolor);
          animation: shadowRolling 2s linear infinite;
        }

        @keyframes shadowRolling {
          0% {
            box-shadow: var(--shadow),
                var(--shadow),
                var(--shadow),
                var(--shadow);
          }

          12% {
            box-shadow: 100px 0 var(--ballcolor),
                var(--shadow),
                var(--shadow), 
                var(--shadow);
          }

          25% {
            box-shadow: 110px 0 var(--ballcolor),
                100px 0 var(--ballcolor),
                var(--shadow), 
                var(--shadow);
          }

          36% {
            box-shadow: 120px 0 var(--ballcolor), 
                110px 0 var(--ballcolor), 
                100px 0 var(--ballcolor), 
                var(--shadow);
          }

          50% {
            box-shadow: 130px 0 var(--ballcolor),
                120px 0 var(--ballcolor),
                110px 0 var(--ballcolor),
                100px 0 var(--ballcolor);
          }

          62% {
            box-shadow: 200px 0 var(--shadowcolor),
                130px 0 var(--ballcolor), 
                120px 0 var(--ballcolor), 
                110px 0 var(--ballcolor);
          }

          75% {
            box-shadow: 200px 0 var(--shadowcolor),
                200px 0 var(--shadowcolor),
                130px 0 var(--ballcolor), 
                120px 0 var(--ballcolor);
          }

          87% {
            box-shadow: 200px 0 var(--shadowcolor), 
                200px 0 var(--shadowcolor), 
                200px 0 var(--shadowcolor), 
                130px 0 var(--ballcolor);
          }

          100% {
            box-shadow: 200px 0 var(--shadowcolor), 
                200px 0 var(--shadowcolor),
                200px 0 var(--shadowcolor),
                200px 0 var(--shadowcolor);
          }
        }
      `}</style>

      {/* 1. Main Chip Circuit Loader */}
      <div className="main-container px-6">
        <svg viewBox="0 0 500 350" className="loader-svg">
          {/* Microchip Pins */}
          <g>
            <rect x="150" y="140" width="25" height="8" rx="2" className="chip-pin" />
            <rect x="150" y="171" width="25" height="8" rx="2" className="chip-pin" />
            <rect x="150" y="202" width="25" height="8" rx="2" className="chip-pin" />

            <rect x="325" y="140" width="25" height="8" rx="2" className="chip-pin" />
            <rect x="325" y="171" width="25" height="8" rx="2" className="chip-pin" />
            <rect x="325" y="202" width="25" height="8" rx="2" className="chip-pin" />

            <rect x="205" y="100" width="8" height="25" rx="2" className="chip-pin" />
            <rect x="246" y="100" width="8" height="25" rx="2" className="chip-pin" />
            <rect x="287" y="100" width="8" height="25" rx="2" className="chip-pin" />

            <rect x="205" y="225" width="8" height="25" rx="2" className="chip-pin" />
            <rect x="246" y="225" width="8" height="25" rx="2" className="chip-pin" />
            <rect x="287" y="225" width="8" height="25" rx="2" className="chip-pin" />
          </g>

          {/* Trace Backgrounds */}
          <path d="M 30,30 L 160,30 L 209,100" className="trace-bg" />
          <path d="M 30,175 L 120,175 L 150,175" className="trace-bg" />
          <path d="M 470,30 L 340,30 L 291,100" className="trace-bg" />
          <path d="M 470,320 L 340,320 L 291,250" className="trace-bg" />
          <path d="M 30,320 L 160,320 L 209,250" className="trace-bg" />

          {/* Glowing Trace Flows */}
          <path d="M 30,30 L 160,30 L 209,100" className="trace-flow yellow" />
          <path d="M 30,175 L 120,175 L 150,175" className="trace-flow blue" />
          <path d="M 470,30 L 340,30 L 291,100" className="trace-flow green" />
          <path d="M 470,320 L 340,320 L 291,250" className="trace-flow purple" />
          <path d="M 30,320 L 160,320 L 209,250" className="trace-flow red" />

          {/* Central Chip */}
          <rect x="170" y="120" width="160" height="110" className="chip-body" />
          <text x="250" y="175" className="chip-text">
            INITIALIZING
          </text>
        </svg>
      </div>

      {/* 2. Text Scanline Loader Underneath */}
      <div className="loader-wrapper">
        <div className="text-loader-mask"></div>
        {LOADING_TEXT.map((char, index) => (
          <span key={index} className="loader-letter">
            {char}
          </span>
        ))}
      </div>

      {/* 3. Rolling Shadow Ball Loader (Bottom Right) */}
      <div className="bottom-right-container">
        <div className="rolling-loader"></div>
      </div>
    </div>
  );
}