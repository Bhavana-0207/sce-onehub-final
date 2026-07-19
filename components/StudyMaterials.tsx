"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Download,
  Eye,
} from "lucide-react";

import { materials } from "@/data/materials";

export default function StudyMaterials() {

  const [search, setSearch] = useState("");

  const [semester, setSemester] = useState("All");

  const semesters = [
    "All",
    ...new Set(materials.map((m) => String(m.semester))),
  ];

  const filtered = useMemo(() => {

    return materials.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSemester =
        semester === "All" ||
        String(item.semester) === semester;

      return matchesSearch && matchesSemester;

    });

  }, [search, semester]);

  return (

    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 backdrop-blur-xl p-8"
        >

          <div className="flex items-center gap-4">

            <BookOpen
              size={40}
              className="text-cyan-400"
            />

            <div>

              <h1 className="text-4xl font-bold text-white">
                Study Materials
              </h1>

              <p className="text-gray-300 mt-2">
                Access notes, lab manuals and previous year question papers.
              </p>

            </div>

          </div>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="relative">

            <Search
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search materials..."
              className="w-full rounded-xl bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white outline-none"
            />

          </div>

          <select
            value={semester}
            onChange={(e) =>
              setSemester(e.target.value)
            }
            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
          >

            {semesters.map((sem) => (

              <option
                key={sem}
                value={sem}
                className="bg-slate-900"
              >
                Semester {sem}
              </option>

            ))}

          </select>

        </div>
                {/* Materials List */}

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

                    <h2 className="text-2xl font-bold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-gray-400">
                      {item.subject}
                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      item.type === "Notes"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : item.type === "Question Paper"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {item.type}
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">

                  <div className="rounded-xl bg-slate-900/40 border border-white/10 p-4">

                    <p className="text-sm text-gray-400">
                      Subject
                    </p>

                    <p className="text-white mt-1">
                      {item.subject}
                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-900/40 border border-white/10 p-4">

                    <p className="text-sm text-gray-400">
                      Semester
                    </p>

                    <p className="text-white mt-1">
                      Semester {item.semester}
                    </p>

                  </div>

                </div>

                <div className="flex gap-4 mt-8">

                  <button
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition py-3 text-white font-semibold"
                  >
                    <Eye size={18} />
                    View
                  </button>

                  <button
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 transition py-3 font-semibold"
                  >
                    <Download size={18} />
                    Download
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

              <BookOpen
                size={60}
                className="mx-auto text-gray-500"
              />

              <h2 className="mt-6 text-3xl font-bold text-white">
                No Study Materials Found
              </h2>

              <p className="mt-3 text-gray-400">
                Try changing the search term or semester filter.
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
              Total Materials
            </p>

            <h2 className="mt-2 text-4xl font-bold text-cyan-300">
              {materials.length}
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Notes
            </p>

            <h2 className="mt-2 text-4xl font-bold text-green-300">
              {materials.filter(item => item.type === "Notes").length}
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Question Papers
            </p>

            <h2 className="mt-2 text-4xl font-bold text-yellow-300">
              {materials.filter(item => item.type === "Question Paper").length}
            </h2>

          </div>

        </motion.div>

        {/* Featured Material */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-8"
        >

          <p className="text-cyan-300 uppercase tracking-widest text-sm">
            Featured Material
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Data Structures Complete Notes
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            A comprehensive collection of class notes, important concepts,
            solved examples, and previous university questions to help you
            prepare effectively for exams.
          </p>

        </motion.div>
                {/* Student Tip */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-xl p-8"
        >

          <h2 className="text-2xl font-bold text-yellow-300">
            💡 Study Tip
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Download your notes in advance, revise after every lecture,
            and practice previous year question papers regularly.
            Consistent preparation is more effective than last-minute studying.
          </p>

        </motion.div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
        >

          <h3 className="text-2xl font-bold text-white">
            📚 Learn Smart. Score Better.
          </h3>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            SCE OneHub provides easy access to notes, question papers,
            lab manuals, and other academic resources to support your
            learning journey.
          </p>

        </motion.div>

      </div>

    </section>

  );
}