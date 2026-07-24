"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bot, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {

  const prompts = [
    "Show today's timetable",
    "Find CSE Faculty",
    "Upcoming Hackathons",
    "Campus Navigation",
    "Placement Statistics",
    "Academic Calendar",
    "Show today's events",
    "Locate Library",
  ];

  const [placeholder, setPlaceholder] = useState(prompts[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % prompts.length;
      setPlaceholder(prompts[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#01040F]/80 via-[#020617]/60 to-[#01040F]/90" />

      {/* Center Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Side Glows */}

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Animated Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Floating Badge */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-xl px-6 py-3 text-cyan-300 mb-8"
        >

          <Sparkles size={18} />

          AI Powered Smart Campus Companion

        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight drop-shadow-[0_0_35px_rgba(59,130,246,.4)]"
        >          <span className="text-white">
            One Platform.
          </span>

          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Infinite Possibilities.
          </span>

        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8"
        >
          AI Powered Smart Campus Companion for
          Saranathan College of Engineering.

          <br />

          Faculty • Timetable • Placements • Events • Campus Navigation
        </motion.p>

        {/* AI Search */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="mt-14 max-w-3xl mx-auto"
        >

          <div className="rounded-3xl border border-cyan-400/20 bg-white/10 backdrop-blur-2xl p-2 shadow-2xl">

            <div className="flex flex-col md:flex-row gap-3">

              <input
                placeholder={placeholder}
                className="flex-1 bg-transparent px-6 py-5 outline-none text-lg text-white placeholder:text-gray-400"
              />

              <Link href="/ai">

  <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:scale-110 active:scale-95 transition">

    <Bot size={20} />

    Ask AI

  </button>

</Link>

            </div>

          </div>

        </motion.div>

        {/* Suggestion Chips */}

        <div className="mt-6 flex flex-wrap justify-center gap-3">

          {[
            "Timetable",
            "Faculty",
            "Placements",
            "Campus Map",
            "Events",
            "AI Buddy",
          ].map((item) => (

            <button
              key={item}
              className="rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm text-gray-300 hover:bg-cyan-500/20 transition"
            >
              {item}
            </button>

          ))}

        </div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >

          <Link href="/ai">

  <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold flex items-center gap-2 hover:scale-110 active:scale-95 transition">

    Explore AI

    <ArrowRight size={18} />

  </button>

</Link>

          <button className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-4 hover:bg-white/20 transition">            View Departments

          </button>

        </motion.div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >

          {[
            ["11+", "Departments"],
            ["220+", "Faculty"],
            ["94%", "Placement"],
            ["100%", "Student Support"],
          ].map(([number, label]) => (

            <motion.div
              key={label}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-xl"
            >

              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                {number}

              </h2>

              <p className="mt-2 text-gray-300">

                {label}

              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#01040F] to-transparent" />

    </section>
  );
}