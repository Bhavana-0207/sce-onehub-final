"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";

export default function FreshersBanner() {
  return (
    <section className="relative py-20 bg-[#020617] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl"
        >

          {/* Poster */}

          <div className="relative">
            


            <img
  src="/freshers-poster.jpg"
  alt="Freshers Day"
  className="w-full h-full object-cover lg:h-[520px]"
/>
            

            <div className="absolute top-5 left-5 rounded-full bg-cyan-500 text-white px-5 py-2 font-semibold flex items-center gap-2 shadow-lg">
              <Sparkles size={18} />
              Freshers 2026
            </div>

          </div>

          {/* Content */}

          <div className="p-10">

            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-sm">
              Welcome to Saranathan College of Engineering
            </span>

            <h2 className="mt-6 text-5xl font-black text-white leading-tight">
              Freshers Day
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                2026
              </span>
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-8">
              Celebrate the beginning of an unforgettable journey with fun
              games, cultural performances, exciting competitions and
              interactive sessions specially planned for our new students.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-300">
                <CalendarDays className="text-cyan-400" size={20} />
                10:00 AM – 5:00 PM
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-cyan-400" size={20} />
                Saranathan College of Engineering, Trichy
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold hover:scale-105 transition">
                View Schedule
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 hover:bg-white/20 transition">
                Explore Events
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}