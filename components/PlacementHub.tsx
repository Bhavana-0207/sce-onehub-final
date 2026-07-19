"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Search,
  Calendar,
  MapPin,
  Briefcase,
  IndianRupee,
} from "lucide-react";

import { placements } from "@/data/placements";

export default function PlacementHub() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {

    return placements.filter((item) => {

      const matchSearch =
        item.company.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "All" || item.type === filter;

      return matchSearch && matchFilter;

    });

  }, [search, filter]);

  return (

    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-xl p-8"
        >

          <div className="flex items-center gap-4">

            <Building2
              size={44}
              className="text-cyan-400"
            />

            <div>

              <h1 className="text-4xl font-bold text-white">
                Placement Hub
              </h1>

              <p className="text-gray-300 mt-2">
                Discover internships and placement opportunities.
              </p>

            </div>

          </div>

        </motion.div>

        {/* Search & Filter */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search company..."
              className="w-full rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 py-4 text-white outline-none focus:border-cyan-400"
            />

          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4 text-white outline-none focus:border-cyan-400"
          >
            <option className="bg-slate-900">All</option>
            <option className="bg-slate-900">Dream</option>
            <option className="bg-slate-900">Super Dream</option>
            <option className="bg-slate-900">Internship</option>
          </select>

        </div>
                {/* Placement Cards */}

        <div className="mt-10 grid lg:grid-cols-2 gap-6">

          {filtered.length > 0 ? (

            filtered.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-3xl font-bold text-white">
                      {item.company}
                    </h2>

                    <p className="mt-2 text-gray-400">
                      {item.role}
                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      item.type === "Dream"
                        ? "bg-green-500/20 text-green-300"
                        : item.type === "Super Dream"
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-cyan-500/20 text-cyan-300"
                    }`}
                  >
                    {item.type}
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="rounded-xl bg-slate-900/40 border border-white/10 p-4">

                    <div className="flex items-center gap-2 text-cyan-300">

                      <Briefcase size={18} />

                      <span className="text-sm">
                        Role
                      </span>

                    </div>

                    <p className="mt-2 text-white">
                      {item.role}
                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-900/40 border border-white/10 p-4">

                    <div className="flex items-center gap-2 text-green-300">

                      <IndianRupee size={18} />

                      <span className="text-sm">
                        Package
                      </span>

                    </div>

                    <p className="mt-2 text-white">
                      {item.ctc}
                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-900/40 border border-white/10 p-4">

                    <div className="flex items-center gap-2 text-yellow-300">

                      <Calendar size={18} />

                      <span className="text-sm">
                        Drive Date
                      </span>

                    </div>

                    <p className="mt-2 text-white">
                      {item.date}
                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-900/40 border border-white/10 p-4">

                    <div className="flex items-center gap-2 text-pink-300">

                      <MapPin size={18} />

                      <span className="text-sm">
                        Venue
                      </span>

                    </div>

                    <p className="mt-2 text-white">
                      {item.venue}
                    </p>

                  </div>

                </div>
                                {/* Eligibility */}

                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

                  <h3 className="text-lg font-semibold text-cyan-300">
                    Eligibility
                  </h3>

                  <div className="mt-4 space-y-3">

                    <div className="flex justify-between">

                      <span className="text-gray-400">
                        Minimum CGPA
                      </span>

                      <span className="text-white font-semibold">
                        {item.cgpa}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-gray-400">
                        Arrears
                      </span>

                      <span className="text-white font-semibold text-right">
                        {item.arrears}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Registration */}

                <div className="mt-6 flex items-center justify-between rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

                  <div>

                    <p className="text-sm text-yellow-300">
                      Registration Deadline
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white">
                      {item.deadline}
                    </h3>

                  </div>

                  <Calendar
                    size={32}
                    className="text-yellow-300"
                  />

                </div>

                {/* Actions */}

                <div className="mt-8 flex gap-4">

                  <button
                    className="flex-1 rounded-2xl bg-cyan-500 py-3 text-white font-semibold hover:bg-cyan-600 transition"
                  >
                    Apply Now
                  </button>

                  <button
                    className="flex-1 rounded-2xl border border-cyan-500 py-3 text-cyan-300 font-semibold hover:bg-cyan-500/10 transition"
                  >
                    View Details
                  </button>

                </div>

              </motion.div>

            ))

          ) : (
                        <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-full rounded-3xl border border-dashed border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center"
            >

              <Building2
                size={60}
                className="mx-auto text-gray-500"
              />

              <h2 className="mt-6 text-3xl font-bold text-white">
                No Placements Found
              </h2>

              <p className="mt-3 text-gray-400">
                Try changing the search keyword or filter.
              </p>

            </motion.div>

          )}

        </div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Total Companies
            </p>

            <h2 className="mt-2 text-4xl font-bold text-cyan-300">
              {placements.length}
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Dream Companies
            </p>

            <h2 className="mt-2 text-4xl font-bold text-green-300">
              {
                placements.filter(
                  (item) => item.type === "Dream"
                ).length
              }
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Super Dream
            </p>

            <h2 className="mt-2 text-4xl font-bold text-purple-300">
              {
                placements.filter(
                  (item) => item.type === "Super Dream"
                ).length
              }
            </h2>

          </div>

        </motion.div>

        {/* Featured Company */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl p-8"
        >

          <p className="text-cyan-300 uppercase tracking-widest text-sm">
            Featured Opportunity
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Zoho – Software Developer
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            A Super Dream opportunity with an excellent package and exciting
            software development projects. Make sure you satisfy the eligibility
            criteria and complete your registration before the deadline.
          </p>

        </motion.div>
                {/* Placement Tips */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 backdrop-blur-xl p-8"
        >

          <h2 className="text-2xl font-bold text-green-300">
            💡 Placement Preparation Tips
          </h2>

          <ul className="mt-5 space-y-3 text-gray-300 list-disc list-inside leading-7">
            <li>Maintain a strong CGPA throughout your course.</li>
            <li>Practice aptitude, coding, and communication skills regularly.</li>
            <li>Keep your resume updated with projects and certifications.</li>
            <li>Prepare for technical and HR interview questions.</li>
            <li>Register before the deadline and verify eligibility.</li>
          </ul>

        </motion.div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
        >

          <h3 className="text-2xl font-bold text-white">
            🚀 Your Career Starts Here
          </h3>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Stay updated with placement drives, internships, and career
            opportunities through SCE OneHub. Prepare consistently and grab
            your dream offer with confidence.
          </p>

        </motion.div>

      </div>

    </section>

  );
}