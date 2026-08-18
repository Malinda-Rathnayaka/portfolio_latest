"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        {/* Transparent Logo Button */}
        <button
          onClick={() => go("hero")}
          className="group relative flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl flex items-center justify-center font-black text-lg text-white tracking-tighter shadow-lg transition-all duration-300">
            MR
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-black uppercase hidden sm:inline-block">
            MALINDA
          </span>
        </button>

        {/* Center Floating Glass Dock */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          {NAV.map((item) => {
            const isActive = active.toLowerCase() === item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => go(item)}
                className={`relative px-5 py-2 rounded-full font-mono text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Active Frosted Glass Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}

                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </nav>

        {/* Transparent CTA Button */}
        <button
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white backdrop-blur-xl shadow-lg active:scale-95 transition-all duration-300 cursor-pointer group"
        >
          <span>CONTACT ME</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Transparent Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white backdrop-blur-xl active:scale-95 transition-all"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Transparent Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden max-w-sm mx-auto mt-3 px-6 py-5 rounded-3xl bg-black/60 border border-white/20 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV.map((item) => {
                const isActive = active.toLowerCase() === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => go(item)}
                    className={`w-full text-left px-4 py-3 rounded-2xl font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-white/20 border border-white/30 text-white backdrop-blur-md"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{item}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    )}
                  </button>
                );
              })}

              <button
                onClick={() => go("contact")}
                className="w-full mt-2 text-center px-4 py-3 rounded-2xl font-mono text-xs font-bold tracking-widest uppercase bg-white/15 hover:bg-white/25 border border-white/30 text-white backdrop-blur-xl active:scale-95 transition-all"
              >
                CONTACT ME
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}