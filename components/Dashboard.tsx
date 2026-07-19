"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Building2,
  GraduationCap,
  CalendarDays,
  MapPinned,
  Briefcase,
  Bot,
  Bell,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    title: "Departments",
    value: "11",
    icon: Building2,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Faculty",
    value: "220+",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Placements",
    value: "94%",
    icon: Briefcase,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Events",
    value: "25+",
    icon: CalendarDays,
    color: "from-orange-500 to-red-500",
  },
];

const features = [
  {
    title: "Departments",
    desc: "Explore all academic departments",
    href: "/departments",
    icon: Building2,
  },
  {
    title: "Faculty",
    desc: "Search faculty members",
    href: "/faculty",
    icon: GraduationCap,
  },
  {
    title: "Campus Map",
    desc: "Navigate the campus",
    href: "/map",
    icon: MapPinned,
  },
  {
    title: "Events",
    desc: "Latest college events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    title: "Placements",
    desc: "Placement statistics",
    href: "/placements",
    icon: Briefcase,
  },
  {
    title: "AI Buddy",
    desc: "Ask Gemini anything",
    href: "/ai",
    icon: Bot,
  },
];

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Welcome */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10"
        >

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div>

              <p className="text-cyan-400 font-semibold">

                Welcome to

              </p>

              <h1 className="text-5xl font-black mt-3">

                OneHub Dashboard

              </h1>

              <p className="text-gray-400 mt-6 max-w-2xl leading-8">

                Your AI-powered Smart Campus Companion for
                Saranathan College of Engineering.

              </p>

            </div>

            <div className="flex items-start">
              <div className="rounded-full bg-cyan-500/20 p-5">
                <Bell size={32} className="text-cyan-400" />
              </div>
            </div>

          </div>

        </motion.div>        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >

                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                >
                  <Icon size={30} />
                </div>

                <h2 className="mt-6 text-4xl font-bold">
                  {item.value}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Quick Access */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8">

            Quick Access

          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (

                <Link
                  href={feature.href}
                  key={feature.title}
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 cursor-pointer hover:border-cyan-500/40 transition"
                  >

                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                      <Icon size={30} />

                    </div>

                    <h3 className="text-2xl font-bold mt-8">

                      {feature.title}

                    </h3>

                    <p className="text-gray-400 mt-3 leading-7">

                      {feature.desc}

                    </p>

                    <div className="mt-8 flex items-center gap-2 text-cyan-400 font-semibold">

                      Open

                      <ArrowRight size={18} />

                    </div>

                  </motion.div>

                </Link>

              );

            })}

          </div>

        </div>        {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Recent Notices */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <h2 className="text-2xl font-bold mb-6">
              📢 Recent Notices
            </h2>

            <div className="space-y-5">

              {[
                "Freshers Day Celebration - August 10",
                "Hackathon Registration Open",
                "Semester Examination Schedule Released",
                "Library Digital Access Available",
              ].map((notice, index) => (

                <div
                  key={index}
                  className="rounded-xl bg-white/5 p-4 border border-white/5"
                >
                  <p className="text-gray-300">
                    {notice}
                  </p>
                </div>

              ))}

            </div>

          </motion.div>

          {/* Upcoming Events */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <h2 className="text-2xl font-bold mb-6">
              🎉 Upcoming Events
            </h2>

            <div className="space-y-5">

              {[
                {
                  title: "Freshers Day 2026",
                  date: "10:00 AM • Auditorium",
                },
                {
                  title: "AI Workshop",
                  date: "CSE Seminar Hall",
                },
                {
                  title: "Campus Recruitment Drive",
                  date: "Placement Cell",
                },
                {
                  title: "Cultural Fest",
                  date: "Open Air Theatre",
                },
              ].map((event) => (

                <div
                  key={event.title}
                  className="rounded-xl bg-white/5 p-4 border border-white/5"
                >

                  <h3 className="font-semibold">

                    {event.title}

                  </h3>

                  <p className="text-gray-400 mt-2">

                    {event.date}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}