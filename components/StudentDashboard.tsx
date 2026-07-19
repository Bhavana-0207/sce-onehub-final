"use client";

import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  Bell,
  Calendar,
  TrendingUp,
} from "lucide-react";

import {
  attendance,
  notifications,
  todayClasses,
} from "@/data/dashboard";

export default function StudentDashboard() {
  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 backdrop-blur-xl p-8"
        >

          <div className="flex flex-col md:flex-row justify-between items-center">

            <div>

              <h1 className="text-4xl font-bold text-white">

                👋 Welcome Back

              </h1>

              <p className="text-gray-300 mt-3 text-lg">

                Here's your academic dashboard.

              </p>

            </div>

            <div className="mt-6 md:mt-0 w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center">

              <User
                size={48}
                className="text-white"
              />

            </div>

          </div>

        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          {[
            {
              title: "Attendance",
              value: "92%",
              icon: TrendingUp,
            },
            {
              title: "Today's Classes",
              value: todayClasses.length,
              icon: BookOpen,
            },
            {
              title: "Notifications",
              value: notifications.length,
              icon: Bell,
            },
            {
              title: "Upcoming Events",
              value: "3",
              icon: Calendar,
            },
          ].map((card) => (

            <motion.div
              whileHover={{ scale: 1.04 }}
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >

              <card.icon
                size={34}
                className="text-cyan-400 mb-4"
              />

              <h2 className="text-3xl font-bold text-white">

                {card.value}

              </h2>

              <p className="text-gray-400 mt-2">

                {card.title}

              </p>

            </motion.div>

          ))}

        </div>
                {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Today's Classes */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <h2 className="text-2xl font-bold text-white mb-6">
              📚 Today's Classes
            </h2>

            <div className="space-y-5">

              {todayClasses.map((item) => (

                <motion.div
                  whileHover={{ x: 5 }}
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <h3 className="text-xl font-semibold text-white">
                        {item.subject}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        {item.room}
                      </p>

                    </div>

                    <div className="text-right">

                      <span className="rounded-xl bg-cyan-500/20 px-4 py-2 text-cyan-300 font-semibold">
                        {item.time}
                      </span>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Attendance */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <h2 className="text-2xl font-bold text-white mb-6">
              📊 Attendance Overview
            </h2>

            <div className="space-y-6">

              {attendance.map((item) => (

                <div key={item.subject}>

                  <div className="flex justify-between mb-2">

                    <span className="text-white font-medium">
                      {item.subject}
                    </span>

                    <span className="text-cyan-300 font-semibold">
                      {item.percentage}%
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${item.percentage}%`,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>
                {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Notifications */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <div className="flex items-center gap-3 mb-6">

              <Bell
                className="text-yellow-400"
                size={28}
              />

              <h2 className="text-2xl font-bold text-white">
                Notifications
              </h2>

            </div>

            <div className="space-y-4">

              {notifications.map((note, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"
                >

                  <p className="text-gray-300">
                    {note}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Quick Actions */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <h2 className="text-2xl font-bold text-white mb-6">
              🚀 Quick Actions
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

              {[
                {
                  title: "AI Chat",
                  icon: "🤖",
                },
                {
                  title: "Faculty",
                  icon: "👨‍🏫",
                },
                {
                  title: "Bus",
                  icon: "🚌",
                },
                {
                  title: "Events",
                  icon: "🎉",
                },
                {
                  title: "Announcements",
                  icon: "📢",
                },
                {
                  title: "Canteen",
                  icon: "🍽️",
                },
              ].map((item) => (

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  key={item.title}
                  className="cursor-pointer rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-center transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
                >

                  <div className="text-4xl mb-3">
                    {item.icon}
                  </div>

                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>
                {/* Upcoming Event */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-8"
        >

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>

              <p className="text-cyan-300 uppercase tracking-widest text-sm">
                Upcoming Event
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                SCE Tech Symposium 2026
              </h2>

              <p className="text-gray-300 mt-4 max-w-2xl">
                Join exciting technical events, coding contests, paper
                presentations, workshops and networking opportunities with
                students from various colleges.
              </p>

            </div>

            <div className="text-center">

              <div className="rounded-3xl bg-cyan-500/20 border border-cyan-400/30 px-8 py-6">

                <h3 className="text-5xl font-bold text-cyan-300">
                  02
                </h3>

                <p className="text-white mt-2">
                  Days Left
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
        >

          <h3 className="text-2xl font-semibold text-white">
            Have a productive day! 🚀
          </h3>

          <p className="text-gray-400 mt-3">
            Stay updated with your classes, announcements, events and campus
            activities through SCE OneHub.
          </p>

        </motion.div>

      </div>

    </section>
  );
}