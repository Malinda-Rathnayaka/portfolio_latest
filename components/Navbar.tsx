"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowUpRight, Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("About");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV.find((n) => n.toLowerCase() === entry.target.id);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setMobileMenuOpen(false);
    const targetId = id.toLowerCase();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 md:py-4" : "py-5 md:py-7"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Brand / Terminal Identity Badge */}
        <button
          onClick={() => go("about")}
          className="group relative flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/80 border border-slate-800/80 backdrop-blur-2xl hover:border-cyan-500/40 transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-400/60 transition-colors">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-xs font-bold tracking-widest text-slate-100 uppercase group-hover:text-cyan-300 transition-colors">
              MALINDA.DEV
            </span>
          </div>

          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
        </button>

        {/* Center Floating Senior Glass Dock */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-950/80 border border-slate-800/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(34,211,238,0.05)]">
          {NAV.map((item) => {
            const isActive = active === item;
            return (
              <button
                key={item}
                onClick={() => go(item)}
                className={`relative px-4 py-2 rounded-full font-mono text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer ${
                  isActive ? "text-cyan-300" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {/* Smooth Animated Active Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="seniorNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.25)] -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" />
                  )}
                  {item}
                </span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full bg-slate-950/80 border border-slate-800/80 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/60 backdrop-blur-2xl transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)] group"
        >
          <span>CONTACT</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white backdrop-blur-2xl"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Glass Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden max-w-sm mx-auto mt-3 px-6 py-5 rounded-3xl bg-slate-950/95 border border-slate-800/90 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col gap-2">
              {NAV.map((item) => {
                const isActive = active === item;
                return (
                  <button
                    key={item}
                    onClick={() => go(item)}
                    className={`w-full text-left px-4 py-3 rounded-2xl font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-cyan-500/15 border border-cyan-500/30 text-cyan-300"
                        : "text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
                    }`}
                  >
                    <span>{item}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                    ) : (
                      <span className="text-slate-600 font-mono text-[10px]">//</span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}