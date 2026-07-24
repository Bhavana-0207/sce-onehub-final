"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { faculty } from "@/data/faculty";
import { Mail, GraduationCap, Search } from "lucide-react";

export default function FacultyDirectory() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedFaculty, setSelectedFaculty] = useState<(typeof faculty)[number] | null>(null);
  const departments = [
    "All",
    ...Array.from(new Set(faculty.map((item) => item.department))),
  ];

  const filteredFaculty = useMemo(() => {
    return faculty.filter((member) => {
      const matchesDepartment =
        department === "All" || member.department === department;

      const query = search.toLowerCase();

      const matchesSearch =
        member.name.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query);

      return matchesDepartment && matchesSearch;
    });
  }, [search, department]);

  return (
    <section className="py-24 bg-[#020617] px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold text-white">
            Meet Our Faculty
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Experienced educators shaping future innovators.
          </p>

          <p className="text-cyan-400 mt-3 font-medium">
            {filteredFaculty.length} Faculty Members
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">

          <div className="relative">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search faculty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400"
            />

          </div>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
          >
            {departments.map((dept) => (
              <option
                key={dept}
                value={dept}
                className="bg-slate-900"
              >
                {dept}
              </option>
            ))}
          </select>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredFaculty.map((member) => (

            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white">

                  {member.name.charAt(0)}

                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-bold text-white">

                    {member.name}

                  </h3>

                  {member.isHOD && (
                    <span className="inline-block mt-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 font-medium">
                      🏆 HOD
                    </span>
                  )}

                  <p className="mt-3 text-cyan-300">

                    {member.designation}

                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3 text-gray-300">

                  <GraduationCap
                    size={20}
                    className="text-cyan-400"
                  />

                  <span>{member.department}</span>

                </div>

                <div className="flex items-center gap-3 text-gray-300">

                  <Mail
                    size={20}
                    className="text-cyan-400"
                  />

                  <span className="break-all">

                    {member.email || "Email Not Available"}

                  </span>

                </div>

              </div>

              <button
                onClick={() => setSelectedFaculty(member)}
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-105"
              >
                View Profile
              </button>

            </motion.div>

          ))}

        </div>
              {selectedFaculty && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-5"
          onClick={() => setSelectedFaculty(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl"
          >
            <div className="flex flex-col items-center">

              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white">
                {selectedFaculty.name.charAt(0)}
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white text-center">
                {selectedFaculty.name}
              </h2>

              {selectedFaculty.isHOD && (
                <span className="mt-3 rounded-full bg-cyan-500/20 text-cyan-300 px-4 py-1 text-sm font-medium">
                  🏆 Head of Department
                </span>
              )}

              <p className="mt-5 text-cyan-300 text-lg">
                {selectedFaculty.designation}
              </p>

              <div className="mt-6 w-full space-y-4">

                <div className="flex items-center gap-3 text-gray-300">

                  <GraduationCap
                    className="text-cyan-400"
                    size={20}
                  />

                  <span>{selectedFaculty.department}</span>

                </div>

                <div className="flex items-center gap-3 text-gray-300">

                  <Mail
                    className="text-cyan-400"
                    size={20}
                  />

                  <span className="break-all">
                    {selectedFaculty.email || "Email Not Available"}
                  </span>

                </div>

              </div>

              <button
                onClick={() => setSelectedFaculty(null)}
                className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-105"
              >
                Close
              </button>

            </div>
          </motion.div>
        </div>
      )}

      </div>
    </section>
  );
}
        