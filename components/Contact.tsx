"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusText("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rathnayakamalinda14@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setStatusText("Failed to send message. Please try again.");
      }
    } catch {
      setStatusText("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const defaultText = "SEND MESSAGE".split("");
  const sentText = "SENT".split("");

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 bg-transparent text-white flex flex-col justify-center items-center overflow-hidden selection:bg-white/20 selection:text-white"
    >
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

        .plane-btn {
          --primary: #38bdf8;
          --neutral-1: #22252a;
          --neutral-2: #121316;
          --radius: 12px;

          cursor: pointer;
          border-radius: var(--radius);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
          border: none;
          box-shadow: 0 0.5px 0.5px 1px rgba(255, 255, 255, 0.1),
            0 10px 20px rgba(0, 0, 0, 0.5), 0 4px 5px 0px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
          width: 100%;
          height: 56px;
          font-family: inherit;
          font-style: normal;
          font-size: 14px;
          font-weight: 600;
          background: transparent;
          color: #ffffff;
        }

        .plane-btn:hover {
          transform: scale(1.01);
          box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.2),
            0 15px 30px rgba(0, 0, 0, 0.6);
        }

        .plane-btn:active {
          transform: scale(0.99);
        }

        .plane-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: var(--radius);
          border: 1.5px solid transparent;
          background: linear-gradient(var(--neutral-1), var(--neutral-2))
              padding-box,
            linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0.05)
              )
              border-box;
          z-index: 0;
          transition: all 0.4s ease;
        }

        .plane-btn:hover::after {
          transform: scale(1.02, 1.05);
          box-shadow: inset 0 -1px 3px 0 rgba(255, 255, 255, 0.4);
        }

        .plane-btn::before {
          content: "";
          inset: 4px;
          position: absolute;
          background: linear-gradient(
            to top,
            var(--neutral-1),
            var(--neutral-2)
          );
          border-radius: 10px;
          filter: blur(0.5px);
          z-index: 2;
        }

        .state p {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }

        .state .icon {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          transform: scale(1.1);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .state .icon svg {
          overflow: visible;
        }

        .outline {
          position: absolute;
          border-radius: inherit;
          overflow: hidden;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.4s ease;
          inset: -2px -3.5px;
        }

        .outline::before {
          content: "";
          position: absolute;
          inset: -100%;
          background: conic-gradient(
            from 180deg,
            transparent 60%,
            rgba(255, 255, 255, 0.8) 80%,
            transparent 100%
          );
          animation: spin 2s linear infinite;
          animation-play-state: paused;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .plane-btn:hover .outline {
          opacity: 1;
        }

        .plane-btn:hover .outline::before {
          animation-play-state: running;
        }

        .state p span {
          display: inline-block;
          opacity: 0;
          animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
        }

        .plane-btn:hover p span {
          opacity: 1;
          animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
        }

        .plane-btn.is-sent p span {
          opacity: 1;
          animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
        }

        @keyframes wave {
          30% {
            opacity: 1;
            transform: translateY(3px);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px);
            color: var(--primary);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px) rotate(-90deg);
            color: var(--primary);
            filter: blur(5px);
          }
          30% {
            opacity: 1;
            transform: translateY(3px) rotate(0);
            filter: blur(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px) rotate(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }

        @keyframes disapear {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            transform: translateX(5px) translateY(20px);
            color: var(--primary);
            filter: blur(5px);
          }
        }

        .state--default .icon svg {
          animation: land 0.6s ease forwards;
        }

        .plane-btn:hover .state--default .icon {
          transform: rotate(45deg) scale(1.15);
        }

        .plane-btn.is-sent .state--default svg {
          animation: takeOff 0.8s linear forwards;
        }

        .plane-btn.is-sent .state--default .icon {
          transform: rotate(0) scale(1.15);
        }

        @keyframes takeOff {
          0% {
            opacity: 1;
          }
          60% {
            opacity: 1;
            transform: translateX(70px) rotate(45deg) scale(2);
          }
          100% {
            opacity: 0;
            transform: translateX(160px) rotate(45deg) scale(0);
          }
        }

        @keyframes land {
          0% {
            transform: translateX(-60px) translateY(30px) rotate(-50deg)
              scale(2);
            opacity: 0;
            filter: blur(3px);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0);
            opacity: 1;
            filter: blur(0);
          }
        }

        .state--default .icon::before {
          content: "";
          position: absolute;
          top: 50%;
          height: 2px;
          width: 0;
          left: -5px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.7)
          );
        }

        .plane-btn.is-sent .state--default .icon::before {
          animation: contrail 0.8s linear forwards;
        }

        @keyframes contrail {
          0% {
            width: 0;
            opacity: 1;
          }
          8% {
            width: 15px;
          }
          60% {
            opacity: 0.7;
            width: 80px;
          }
          100% {
            opacity: 0;
            width: 160px;
          }
        }

        .state {
          padding-left: 29px;
          z-index: 3;
          display: flex;
          position: relative;
        }

        .state--sent {
          display: none;
        }

        .state--sent svg {
          transform: scale(1.15);
          margin-right: 8px;
        }

        .plane-btn.is-sent .state--default {
          position: absolute;
        }

        .plane-btn.is-sent .state--sent {
          display: flex;
        }

        .plane-btn.is-sent .state--sent span {
          opacity: 0;
          animation: slideDown 0.8s ease forwards calc(var(--i) * 0.15s);
        }

        .plane-btn.is-sent .state--sent .icon svg {
          opacity: 0;
          animation: appear 1.2s ease forwards 0.6s;
        }

        @keyframes appear {
          0% {
            opacity: 0;
            transform: scale(3) rotate(-40deg);
            color: var(--primary);
            filter: blur(4px);
          }
          30% {
            opacity: 1;
            transform: scale(0.8);
            filter: blur(1px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            // Get In Touch
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-2 text-white uppercase">
            Contact Me
          </h2>
          <p className="mt-4 text-neutral-400 font-light text-base sm:text-lg max-w-xl mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to
            connect? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="card-wrapper">
              <div className="spin spin-blur" />
              <div className="spin spin-intense" />
              <div className="spin spin-inside" />

              <a
                href="mailto:rathnayakamalinda14@gmail.com"
                className="e-card p-6 flex items-center justify-between group transition-all duration-300 block"
              >
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />

                <div className="relative z-10">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                    Email
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:text-neutral-200">
                    rathnayakamalinda14@gmail.com
                  </p>
                </div>

                <div className="relative z-10 p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>
            </div>

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
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

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
                      href="https://github.com/Malinda-Rathnayaka"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/malinda-rathnayaka-988887331/"
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

          <div className="lg:col-span-7">
            <div className="card-wrapper">
              <div className="spin spin-blur" />
              <div className="spin spin-intense" />
              <div className="spin spin-inside" />

              <div className="e-card p-8 sm:p-10">
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />

                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 flex flex-col gap-6"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  {statusText && (
                    <p className="text-xs font-mono text-red-400">
                      {statusText}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`plane-btn ${submitted ? "is-sent" : ""}`}
                  >
                    <div className="outline" />

                    <div className="state state--default">
                      <div className="icon">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 8L17 1L10 15L8 9L1 8Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p>
                        {defaultText.map((char, index) => (
                          <span
                            key={index}
                            style={{ "--i": index } as React.CSSProperties}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div className="state state--sent">
                      <div className="icon">
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 7.5L6.5 12.5L16.5 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p>
                        {sentText.map((char, index) => (
                          <span
                            key={index}
                            style={{ "--i": index } as React.CSSProperties}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </p>
                    </div>
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