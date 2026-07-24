"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  Star,
  X,
  Calendar,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { mentors } from "@/data/mentors";

export default function MentorHub() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [question, setQuestion] = useState("");

  const [selectedMentor, setSelectedMentor] = useState<
    (typeof mentors)[number] | null
  >(null);

  const filtered = useMemo(() => {
    return mentors.filter((mentor) => {
      const matchesSearch =
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.department.toLowerCase().includes(search.toLowerCase()) ||
        mentor.category.toLowerCase().includes(search.toLowerCase()) ||
        mentor.skills.some((skill) =>
          skill.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        category === "All" || mentor.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const recommendedMentor = useMemo(() => {
    if (!question.trim()) return null;

    const query = question.toLowerCase();

    return (
      mentors.find(
        (mentor) =>
          mentor.skills.some((skill) =>
            query.includes(skill.toLowerCase())
          ) ||
          query.includes(mentor.category.toLowerCase()) ||
          query.includes(mentor.department.toLowerCase())
      ) || null
    );
  }, [question]);

  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 backdrop-blur-xl p-8"
        >
          <div className="flex items-center gap-4">
            <Users size={42} className="text-cyan-400" />

            <div>
              <h1 className="text-4xl font-bold text-white">
                SCE Mentor Connect
              </h1>

              <p className="mt-2 text-gray-300">
                Connect with seniors for coding, placements,
                academics and campus guidance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI Mentor Match */}

        <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6">

          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-cyan-400" />

            <h2 className="text-2xl font-bold text-white">
              AI Mentor Match
            </h2>
          </div>

          <p className="text-gray-400">
            Tell us what you need help with and we'll
            recommend the best mentor.
          </p>

          <textarea
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: I need help with Python, DSA and Placements..."
            className="mt-5 w-full rounded-2xl bg-slate-900/70 border border-white/10 p-4 text-white outline-none focus:border-cyan-400"
          />
                    {recommendedMentor && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-6"
            >
              <p className="text-green-300 font-semibold">
                🎯 Best Mentor Match
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {recommendedMentor.name}
                  </h3>

                  <p className="mt-1 text-gray-400">
                    {recommendedMentor.year} •{" "}
                    {recommendedMentor.department}
                  </p>

                  <p className="mt-2 text-cyan-300">
                    {recommendedMentor.category}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setSelectedMentor(recommendedMentor)
                  }
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
                >
                  View Mentor
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Search & Filter */}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="relative">
            <Search
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search mentors or skills..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white"
          >
            <option className="bg-slate-900">
              All
            </option>

            <option className="bg-slate-900">
              Coding
            </option>

            <option className="bg-slate-900">
              Placement
            </option>

            <option className="bg-slate-900">
              AI/ML
            </option>

            <option className="bg-slate-900">
              Campus Guide
            </option>
          </select>
        </div>

        {/* Statistics */}

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-4xl font-bold text-cyan-400">
              {mentors.length}
            </p>

            <p className="mt-2 text-gray-400">
              Active Mentors
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-4xl font-bold text-green-400">
              {mentors.reduce(
                (sum, mentor) => sum + mentor.helped,
                0
              )}
            </p>

            <p className="mt-2 text-gray-400">
              Students Helped
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-4xl font-bold text-yellow-400">
              4.9★
            </p>

            <p className="mt-2 text-gray-400">
              Average Rating
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-4xl font-bold text-violet-400">
              24/7
            </p>

            <p className="mt-2 text-gray-400">
              Student Support
            </p>
          </div>

        

        {/* Mentor Cards */}
        </div>

<div className="mt-10 grid gap-6 lg:grid-cols-2">
  {filtered.length > 0 ? (
  filtered.map((mentor, index) => (
    

    <motion.div
      key={mentor.id}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-2xl font-bold text-white">

            {mentor.name.charAt(0)}

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              {mentor.name}
            </h2>

            <p className="mt-1 text-gray-400">
              {mentor.year} • {mentor.department}
            </p>

          </div>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            mentor.status === "Online"
              ? "bg-green-500/20 text-green-300"
              : "bg-gray-500/20 text-gray-300"
          }`}
        >
          {mentor.status}
        </span>

      </div>

      {/* About */}

      <p className="mt-6 leading-7 text-gray-300">
        {mentor.about}
      </p>

      {/* Skills */}

      <div className="mt-6 flex flex-wrap gap-3">

        {mentor.skills.map((skill) => (

          <span
            key={skill}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 text-center">

          <Star
            className="mx-auto text-yellow-400"
            size={20}
          />

          <p className="mt-2 text-2xl font-bold text-white">
            {mentor.rating}
          </p>

          <p className="text-sm text-gray-400">
            Rating
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 text-center">

          <Users
            className="mx-auto text-cyan-400"
            size={20}
          />

          <p className="mt-2 text-2xl font-bold text-white">
            {mentor.helped}
          </p>

          <p className="text-sm text-gray-400">
            Helped
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 text-center">

          <Calendar
            className="mx-auto text-green-400"
            size={20}
          />

          <p className="mt-2 text-lg font-bold text-white">
            {mentor.response}
          </p>

          <p className="text-sm text-gray-400">
            Response
          </p>

        </div>

      </div>

      {/* Company */}

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          💼 {mentor.company}
        </span>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          🎯 {mentor.category}
        </span>

      </div>

      <div className="my-8 border-t border-white/10" />

      {/* Buttons */}

      <div className="grid gap-4 md:grid-cols-3">

        <button
          onClick={() => setSelectedMentor(mentor)}
          className="rounded-xl bg-cyan-500 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
        >
          💬 Ask Mentor
        </button>

        <a
          href={`tel:${mentor.phone}`}
          className="flex items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 py-3 font-semibold text-green-300 transition hover:bg-green-500/20"
        >
          <Phone size={18} className="mr-2" />
          Call
        </a>

        <a
          href={`https://wa.me/${mentor.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
        >
          <MessageCircle size={18} className="mr-2" />
          WhatsApp
        </a>

      </div>

    </motion.div>

  ))

) : (

  <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

    <div className="text-6xl">
      🔍
    </div>

    <h2 className="mt-4 text-3xl font-bold text-white">
      No mentors found
    </h2>

    <p className="mt-3 text-gray-400">
      Try searching for Python, AI, Placement or Campus Guide.
    </p>

  </div>

)}

</div>
      {/* Mentor Details Modal */}

      <AnimatePresence>
        {selectedMentor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 p-8"
            >
              <button
                onClick={() => setSelectedMentor(null)}
                className="absolute right-5 top-5 rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <X className="text-white" />
              </button>

              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-3xl font-bold text-white">
                  {selectedMentor.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedMentor.name}
                  </h2>

                  <p className="text-gray-400">
                    {selectedMentor.year} • {selectedMentor.department}
                  </p>

                  <div className="mt-2 flex gap-3">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">
                      {selectedMentor.category}
                    </span>

                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-violet-300">
                      {selectedMentor.company}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-8 leading-7 text-gray-300">
                {selectedMentor.about}
              </p>

              {/* Skills */}

              <h3 className="mt-8 text-xl font-bold text-white">
                Skills
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {selectedMentor.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Reviews */}

              <h3 className="mt-10 text-xl font-bold text-white">
                Student Reviews
              </h3>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-white/5 p-4">
                  ⭐⭐⭐⭐⭐ Excellent mentor. Explained concepts very clearly.
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  ⭐⭐⭐⭐⭐ Helped me crack my placement interview.
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  ⭐⭐⭐⭐⭐ Very friendly and responds quickly.
                </div>
              </div>

              {/* Slots */}

              <h3 className="mt-10 text-xl font-bold text-white">
                Available Slots
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-xl bg-green-500/20 px-4 py-2 text-green-300">
                  Today • 6 PM
                </button>

                <button className="rounded-xl bg-green-500/20 px-4 py-2 text-green-300">
                  Tomorrow • 5 PM
                </button>

                <button className="rounded-xl bg-green-500/20 px-4 py-2 text-green-300">
                  Saturday • 11 AM
                </button>
              </div>

              {/* Contact */}

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <button
                  className="rounded-xl bg-cyan-500 py-3 font-semibold text-slate-900 hover:bg-cyan-400"
                >
                  Start Chat
                </button>

                <a
                  href={`tel:${selectedMentor.phone}`}
                  className="flex items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 py-3 text-green-300"
                >
                  <Phone size={18} className="mr-2" />
                  Call
                </a>

                <a
                  href={`https://wa.me/${selectedMentor.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-emerald-300"
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
  );
}