"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Pin,
  Calendar,
  User,
  Tag,
} from "lucide-react";

import { announcements } from "@/data/announcements";

export default function Announcements() {
  const [search, setSearch] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(
    announcements[0]
  );

  const categories = [
    "All",
    ...new Set(announcements.map((item) => item.category)),
  ];

  const [category, setCategory] = useState("All");

  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <Bell
            size={48}
            className="mx-auto mb-4 text-cyan-400"
          />

          <h1 className="text-5xl font-bold text-white">
            Announcements
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Stay updated with the latest campus notices and important announcements.
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
                placeholder="Search announcements..."
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
                Latest Announcements
              </h2>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">

                {filteredAnnouncements.map((item) => (

                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedAnnouncement(item)}
                    className={`cursor-pointer rounded-2xl border p-5 transition ${
                      selectedAnnouncement.id === item.id
                        ? "border-cyan-400 bg-cyan-500/10"
                        : "border-white/10 bg-white/5 hover:border-cyan-500/40"
                    }`}
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>

                        <div className="mt-3 flex flex-wrap items-center gap-2">

                          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">

                            {item.category}

                          </span>

                          {item.important && (

                            <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300 flex items-center gap-1">

                              <Pin size={14} />

                              Important

                            </span>

                          )}

                        </div>

                      </div>

                    </div>

                    <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-400">

                      <div className="flex items-center gap-2">

                        <Calendar size={16} />

                        {item.date}

                      </div>

                      <div className="flex items-center gap-2">

                        <User size={16} />

                        {item.author}

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
            className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <div className="flex flex-wrap items-center gap-3 mb-5">

              <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-300 font-medium">

                <Tag className="inline mr-2" size={16} />

                {selectedAnnouncement.category}

              </span>

              {selectedAnnouncement.important && (

                <span className="rounded-full bg-red-500/20 px-4 py-1 text-red-300 font-medium">

                  📌 Important Notice

                </span>

              )}

            </div>

            <h2 className="text-4xl font-bold text-white mb-8">

              {selectedAnnouncement.title}

            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

                <Calendar
                  className="text-cyan-400 mb-3"
                  size={24}
                />

                <h3 className="font-semibold text-white">
                  Published On
                </h3>

                <p className="mt-2 text-gray-400">

                  {selectedAnnouncement.date}

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

                <User
                  className="text-cyan-400 mb-3"
                  size={24}
                />

                <h3 className="font-semibold text-white">
                  Posted By
                </h3>

                <p className="mt-2 text-gray-400">

                  {selectedAnnouncement.author}

                </p>

              </div>

            </div>
                        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

              <h3 className="text-2xl font-semibold text-white mb-4">
                Announcement Details
              </h3>

              <p className="text-gray-300 leading-8">
                {selectedAnnouncement.description}
              </p>

            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <div className="flex items-center gap-3 mb-5">

                <Pin className="text-cyan-300" size={22} />

                <h3 className="text-2xl font-semibold text-white">
                  Important Notices
                </h3>

              </div>

              <div className="space-y-4">

                {announcements
                  .filter((item) => item.important)
                  .map((item) => (

                    <div
                      key={item.id}
                      onClick={() => setSelectedAnnouncement(item)}
                      className="cursor-pointer rounded-xl border border-white/10 bg-slate-900/40 p-4 transition hover:border-cyan-400"
                    >

                      <div className="flex items-center justify-between">

                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <span className="text-sm text-red-300">
                          Important
                        </span>

                      </div>

                      <p className="mt-2 text-sm text-gray-400">
                        {item.date}
                      </p>

                    </div>

                  ))}

              </div>

            </div>

          </motion.div>

        </div>

        {filteredAnnouncements.length === 0 && (

          <div className="mt-12 text-center">

            <Bell
              size={52}
              className="mx-auto text-gray-500"
            />

            <h2 className="mt-4 text-2xl font-semibold text-white">
              No Announcements Found
            </h2>

            <p className="mt-2 text-gray-400">
              Try changing your search keyword or category.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}