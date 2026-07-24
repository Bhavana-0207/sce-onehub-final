"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  Tag,
} from "lucide-react";

import { events } from "@/data/events";

export default function EventsHub() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const categories = [
    "All",
    ...new Set(events.map((event) => event.category)),
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || event.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-white">
            Campus Events
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Stay updated with technical, cultural and sports events happening at SCE.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Panel */}

          <div className="space-y-6">

            <div className="relative">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#0f172a] py-3 px-4 text-white outline-none focus:border-cyan-400"
            >
              {categories.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <h2 className="text-xl font-semibold text-white mb-5">
                Upcoming Events
              </h2>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">

                {filteredEvents.map((event) => (

                  <motion.div
                    key={event.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedEvent(event)}
                    className={`cursor-pointer rounded-2xl border p-5 transition ${
                      selectedEvent.id === event.id
                        ? "border-cyan-400 bg-cyan-500/10"
                        : "border-white/10 bg-white/5 hover:border-cyan-500/40"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="text-lg font-semibold text-white">
                          {event.title}
                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-gray-400">

                          <Tag size={16} />

                          <span>{event.category}</span>

                        </div>

                      </div>

                      <div className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-300">

                        {new Date(event.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

          {/* Right Panel */}

          <motion.div
            layout
            className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <div className="flex flex-wrap items-center gap-3 mb-5">

                <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-300 font-medium">

                  {selectedEvent.category}

                </span>

              </div>

              <h2 className="text-4xl font-bold text-white mb-6">

                {selectedEvent.title}

              </h2>

              <div className="grid md:grid-cols-3 gap-4 mb-8">

                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">

                  <Calendar
                    size={24}
                    className="text-cyan-400 mb-3"
                  />

                  <h3 className="text-white font-semibold">
                    Date
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {new Date(selectedEvent.date).toLocaleDateString(
                      "en-IN",
                      {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">

                  <Clock
                    size={24}
                    className="text-cyan-400 mb-3"
                  />

                  <h3 className="text-white font-semibold">
                    Time
                  </h3>

                  <p className="text-gray-400 mt-2">

                    {selectedEvent.time}

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">

                  <MapPin
                    size={24}
                    className="text-cyan-400 mb-3"
                  />

                  <h3 className="text-white font-semibold">
                    Venue
                  </h3>

                  <p className="text-gray-400 mt-2">

                    {selectedEvent.venue}

                  </p>

                </div>

              </div>
                            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

                <h3 className="text-2xl font-semibold text-white mb-4">
                  About the Event
                </h3>

                <p className="text-gray-300 leading-8">
                  {selectedEvent.description}
                </p>

              </div>

              <div className="grid md:grid-cols-4 gap-4 mt-8">

                {(() => {
                  const now = new Date().getTime();
                  const eventDate = new Date(selectedEvent.date).getTime();
                  const difference = Math.max(eventDate - now, 0);

                  const days = Math.floor(
                    difference / (1000 * 60 * 60 * 24)
                  );

                  const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) /
                      (1000 * 60 * 60)
                  );

                  const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) /
                      (1000 * 60)
                  );

                  const seconds = Math.floor(
                    (difference % (1000 * 60)) / 1000
                  );

                  return (
                    <>
                      <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5 text-center">

                        <h2 className="text-4xl font-bold text-cyan-300">
                          {days}
                        </h2>

                        <p className="text-gray-400 mt-2">
                          Days
                        </p>

                      </div>

                      <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5 text-center">

                        <h2 className="text-4xl font-bold text-cyan-300">
                          {hours}
                        </h2>

                        <p className="text-gray-400 mt-2">
                          Hours
                        </p>

                      </div>

                      <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5 text-center">

                        <h2 className="text-4xl font-bold text-cyan-300">
                          {minutes}
                        </h2>

                        <p className="text-gray-400 mt-2">
                          Minutes
                        </p>

                      </div>

                      <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5 text-center">

                        <h2 className="text-4xl font-bold text-cyan-300">
                          {seconds}
                        </h2>

                        <p className="text-gray-400 mt-2">
                          Seconds
                        </p>

                      </div>
                    </>
                  );
                })()}

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition hover:scale-105">

                  Register Now

                </button>

                <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-500/10">

                  Add to Calendar

                </button>

              </div>
                            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-2xl font-semibold text-white mb-5">
                  Event Highlights
                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  <div className="rounded-xl bg-slate-900/40 p-4">
                    <p className="text-cyan-300 font-semibold">
                      🎤 Guest Speakers
                    </p>
                    <p className="text-gray-400 mt-2">
                      Industry experts and faculty members will share their knowledge.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-900/40 p-4">
                    <p className="text-cyan-300 font-semibold">
                      🏆 Exciting Prizes
                    </p>
                    <p className="text-gray-400 mt-2">
                      Win certificates, trophies and exciting goodies.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-900/40 p-4">
                    <p className="text-cyan-300 font-semibold">
                      🤝 Networking
                    </p>
                    <p className="text-gray-400 mt-2">
                      Meet students, faculty and industry professionals.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-900/40 p-4">
                    <p className="text-cyan-300 font-semibold">
                      📸 Memories
                    </p>
                    <p className="text-gray-400 mt-2">
                      Capture unforgettable moments with friends and classmates.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {filteredEvents.length === 0 && (

          <div className="mt-12 text-center">

            <Calendar
              size={52}
              className="mx-auto text-gray-500"
            />

            <h2 className="mt-4 text-2xl font-semibold text-white">
              No Events Found
            </h2>

            <p className="mt-2 text-gray-400">
              Try changing the search term or category.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}