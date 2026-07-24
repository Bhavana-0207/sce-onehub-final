"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  AlertTriangle,
  Search,
  Plus,
  MapPin,
  CalendarDays,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { complaints } from "@/data/complaints";

export default function ComplaintPortal() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return complaints.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const total = complaints.length;

  const pending = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const progress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-500/20 to-cyan-500/20 backdrop-blur-xl p-8"
        >

          <div className="flex items-center gap-4">

            <AlertTriangle
              size={42}
              className="text-red-400"
            />

            <div>

              <h1 className="text-4xl font-bold text-white">
                Complaint Portal
              </h1>

              <p className="mt-2 text-gray-300">
                Report campus issues and track their resolution.
              </p>

            </div>

          </div>

        </motion.div>
                <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-4xl font-bold text-cyan-400">
              {total}
            </p>
            <p className="mt-2 text-gray-400">
              Total Complaints
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-4xl font-bold text-red-400">
              {pending}
            </p>
            <p className="mt-2 text-gray-400">
              Pending
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-4xl font-bold text-yellow-400">
              {progress}
            </p>
            <p className="mt-2 text-gray-400">
              In Progress
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-4xl font-bold text-green-400">
              {resolved}
            </p>
            <p className="mt-2 text-gray-400">
              Resolved
            </p>
          </div>

        </div>
                {/* Complaint Form */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Plus className="text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">
              Raise a Complaint
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Complaint Title */}

            <div>
              <label className="mb-2 block text-gray-300">
                Complaint Title
              </label>

              <input
                type="text"
                placeholder="Enter complaint title"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* Category */}

            <div>
              <label className="mb-2 block text-gray-300">
                Category
              </label>

              <select
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-white outline-none focus:border-cyan-400"
              >
                <option className="bg-slate-900">Classroom</option>
                <option className="bg-slate-900">Electrical</option>
                <option className="bg-slate-900">Water</option>
                <option className="bg-slate-900">Wi-Fi</option>
                <option className="bg-slate-900">Library</option>
                <option className="bg-slate-900">Hostel</option>
                <option className="bg-slate-900">Bus</option>
                <option className="bg-slate-900">Canteen</option>
                <option className="bg-slate-900">Others</option>
              </select>
            </div>

            {/* Location */}

            <div>
              <label className="mb-2 block text-gray-300">
                Location
              </label>

              <input
                type="text"
                placeholder="Example: CSE Block Room 302"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* Priority */}

            <div>
              <label className="mb-2 block text-gray-300">
                Priority
              </label>

              <select
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-white outline-none focus:border-cyan-400"
              >
                <option className="bg-slate-900">Low</option>
                <option className="bg-slate-900">Medium</option>
                <option className="bg-slate-900">High</option>
              </select>
            </div>

          </div>

          {/* Description */}

          <div className="mt-6">
            <label className="mb-2 block text-gray-300">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Describe the issue..."
              className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* Upload */}

          <div className="mt-6">
            <label className="mb-2 block text-gray-300">
              Upload Image
            </label>

            <input
              type="file"
              className="w-full rounded-2xl border border-dashed border-cyan-400/40 bg-slate-900/60 p-4 text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-white hover:file:bg-cyan-400"
            />
          </div>

          {/* Submit */}

          <div className="mt-8 flex justify-end">

            <button
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Submit Complaint
            </button>

          </div>

        </motion.div>
                {/* Search & Filter */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search complaints..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
            />

          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white"
          >
            <option className="bg-slate-900">All</option>
            <option className="bg-slate-900">Pending</option>
            <option className="bg-slate-900">In Progress</option>
            <option className="bg-slate-900">Resolved</option>
          </select>

        </div>
                {/* Complaint Cards */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {filtered.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <div className="flex items-start justify-between">

                  <h2 className="text-2xl font-bold text-white">
                    {item.title}
                  </h2>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      item.status === "Resolved"
                        ? "bg-green-500/20 text-green-300"
                        : item.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

                <div className="mt-5 flex flex-wrap gap-3">

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                    {item.category}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 ${
                      item.priority === "High"
                        ? "bg-red-500/20 text-red-300"
                        : item.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {item.priority} Priority
                  </span>

                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-gray-300">

                    <MapPin
                      size={18}
                      className="text-cyan-400"
                    />

                    {item.location}

                  </div>

                  <div className="flex items-center gap-3 text-gray-300">

                    <CalendarDays
                      size={18}
                      className="text-cyan-400"
                    />

                    {item.date}

                  </div>

                </div>

                <p className="mt-6 leading-7 text-gray-300">
                  {item.description}
                </p>

                <button
                  className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-105"
                >
                  View Details
                </button>

              </div>

            </motion.div>

          ))}

        </div>
              </div>
    </section>
  );
}