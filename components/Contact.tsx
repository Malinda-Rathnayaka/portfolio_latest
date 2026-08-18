"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative w-full min-h-screen py-24 bg-neutral-950 text-white flex flex-col justify-center items-center overflow-hidden selection:bg-white/20 selection:text-white">
      {/* Custom Styles for Transparent E-Card Waves and Animated Glowing Borders */}
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

      <div className="relative z-10 max-w-6xl w-full px-6 md:px-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            // Get In Touch
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-2 text-white uppercase">
            Contact Me
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-base sm:text-lg max-w-xl mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send a message below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card */}
            <div className="card-wrapper">
              <div className="spin spin-blur" />
              <div className="spin spin-intense" />
              <div className="spin spin-inside" />

              <a
                href="mailto:hello@example.com"
                className="e-card p-6 flex items-center justify-between group transition-all duration-300 block"
              >
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />

                <div className="relative z-10">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                    Email
                  </span>
                  <p className="text-lg font-semibold text-white group-hover:text-neutral-200">
                    hello@example.com
                  </p>
                </div>

                <div className="relative z-10 p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="card-wrapper">
              <div className="spin spin-blur" />
              <div className="spin spin-intense" />
              <div className="spin spin-inside" />

              <div className="e-card p-6 flex items-center justify-between">
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />

                <div className="relative z-10">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                    Location
                  </span>
                  <p className="text-lg font-semibold text-white">
                    Colombo, Sri Lanka
                  </p>
                </div>

                <div className="relative z-10 p-3 rounded-full bg-white/5 border border-white/10">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="card-wrapper">
              <div className="spin spin-blur" />
              <div className="spin spin-intense" />
              <div className="spin spin-inside" />

              <div className="e-card p-6">
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />

                <div className="relative z-10">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-4">
                    Social Channels
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 transition-all"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="card-wrapper">
              <div className="spin spin-blur" />
              <div className="spin spin-intense" />
              <div className="spin spin-inside" />

              <div className="e-card p-8 sm:p-10">
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />

                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white/20 active:scale-[0.99] transition-all"
                  >
                    {submitted ? "Message Sent!" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}