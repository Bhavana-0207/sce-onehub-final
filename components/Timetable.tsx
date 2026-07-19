"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Search,
  Clock,
  MapPin,
  User,
} from "lucide-react";

import { timetable } from "@/data/timetable";

const days = Object.keys(timetable);

export default function Timetable() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [search, setSearch] = useState("");

  const classes = useMemo(() => {
    return timetable[selectedDay as keyof typeof timetable].filter((item) =>
      item.subject.toLowerCase().includes(search.toLowerCase())
    );
  }, [selectedDay, search]);

  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-r from-cyan-600/20 to-blue-700/20 border border-white/10 p-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <CalendarDays className="text-cyan-400" size={40} />

            <div>
              <h1 className="text-4xl font-bold text-white">
                Weekly Timetable
              </h1>

              <p className="text-gray-300 mt-2">
                View your classes for the week.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-3 mt-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-xl transition ${
                selectedDay === day
                  ? "bg-cyan-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-300"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="relative mt-8">
          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={20}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subject..."
            className="w-full rounded-xl bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white outline-none"
          />
        </div>

        <div className="mt-10 space-y-6">

          {classes.length > 0 ? (

            classes.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  <div className="space-y-4 flex-1">

                    <div className="flex items-center gap-3 flex-wrap">

                      <h2 className="text-2xl font-bold text-white">
                        {item.subject}
                      </h2>

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.type === "Lab"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-cyan-500/20 text-cyan-300"
                        }`}
                      >
                        {item.type}
                      </span>

                    </div>

                    <div className="grid md:grid-cols-3 gap-5">

                      <div className="flex items-center gap-3">
                        <Clock className="text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Time</p>
                          <p className="text-white">{item.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Room</p>
                          <p className="text-white">{item.room}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <User className="text-cyan-400" />
                        <div>
                          <p className="text-gray-400 text-sm">Faculty</p>
                          <p className="text-white">{item.faculty}</p>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))

          ) : (

            <div className="rounded-3xl bg-white/5 border border-dashed border-white/10 p-12 text-center">

              <CalendarDays
                size={60}
                className="mx-auto text-gray-500"
              />

              <h2 className="text-3xl font-bold text-white mt-5">
                No Classes Scheduled
              </h2>

              <p className="text-gray-400 mt-3">
                There are no classes available for {selectedDay}.
              </p>

            </div>

          )}

        </div>

      </div>
    </section>
  );
}