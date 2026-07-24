"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Calculator } from "lucide-react";

import {
  gradeOptions,
  gradePoints,
  creditOptions,
} from "@/utils/grades";

type Subject = {
  id: number;
  name: string;
  grade: keyof typeof gradePoints;
  credit: number;
};

export default function CgpaCalculator() {

  const [subjects, setSubjects] = useState<Subject[]>([
  {
    id: 1,
    name: "",
    grade: "O",
    credit: 3,
  },
]);

  const addSubject = () => {

    setSubjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        grade: "O",
        credit: 3,
      },
    ]);

  };

  const removeSubject = (id: number) => {

    setSubjects((prev) =>
      prev.filter((s) => s.id !== id)
    );

  };

  const updateSubject = (
    id: number,
    field: keyof Subject,
    value: string | number
  ) => {

    setSubjects((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, [field]: value }
          : s
      )
    );

  };

  const gpa = useMemo(() => {

    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((s) => {

      totalCredits += s.credit;

      totalPoints +=
        gradePoints[s.grade] * s.credit;

    });

    if (!totalCredits) return 0;

    return (
      totalPoints / totalCredits
    ).toFixed(2);

  }, [subjects]);

  return (

    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 p-8 backdrop-blur-xl"
        >

          <div className="flex items-center gap-4">

            <Calculator
              size={42}
              className="text-cyan-400"
            />

            <div>

              <h1 className="text-4xl font-bold text-white">
                GPA Calculator
              </h1>

              <p className="text-gray-300 mt-2">
                Calculate your GPA instantly.
              </p>

            </div>

          </div>

        </motion.div>
                {/* Subject List */}

        <div className="mt-10 space-y-6">

          {subjects.map((subject, index) => (

            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-xl font-bold text-white">
                  Subject {index + 1}
                </h2>

                {subjects.length > 1 && (

                  <button
                    onClick={() => removeSubject(subject.id)}
                    className="rounded-xl bg-red-500/20 p-3 text-red-400 hover:bg-red-500/30 transition"
                  >
                    <Trash2 size={20} />
                  </button>

                )}

              </div>

              <div className="grid md:grid-cols-3 gap-5">

                {/* Subject Name */}

                <div>

                  <label className="block text-gray-300 mb-2">
                    Subject Name
                  </label>

                  <input
                    type="text"
                    value={subject.name}
                    onChange={(e) =>
                      updateSubject(
                        subject.id,
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="Enter subject"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  />

                </div>

                {/* Grade */}

                <div>

                  <label className="block text-gray-300 mb-2">
                    Grade
                  </label>

                  <select
                    value={subject.grade}
                    onChange={(e) =>
                      updateSubject(
                        subject.id,
                        "grade",
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >

                    {gradeOptions.map((grade) => (

                      <option
                        key={grade}
                        value={grade}
                        className="bg-slate-900"
                      >
                        {grade}
                      </option>

                    ))}

                  </select>

                </div>

                {/* Credits */}

                <div>

                  <label className="block text-gray-300 mb-2">
                    Credits
                  </label>

                  <select
                    value={subject.credit}
                    onChange={(e) =>
                      updateSubject(
                        subject.id,
                        "credit",
                        Number(e.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  >

                    {creditOptions.map((credit) => (

                      <option
                        key={credit}
                        value={credit}
                        className="bg-slate-900"
                      >
                        {credit}
                      </option>

                    ))}

                  </select>

                </div>

              </div>

            </motion.div>

          ))}

          {/* Add Subject Button */}

          <button
            onClick={addSubject}
            className="w-full rounded-2xl border-2 border-dashed border-cyan-500 bg-cyan-500/10 py-4 text-cyan-300 font-semibold hover:bg-cyan-500/20 transition flex items-center justify-center gap-3"
          >

            <Plus size={22} />

            Add Subject

          </button>

        </div>
                {/* GPA Summary */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >
          {/* GPA Card */}

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Current GPA
            </p>

            <h2 className="mt-3 text-5xl font-bold text-cyan-300">
              {gpa}
            </h2>

          </div>

          {/* Total Credits */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Total Credits
            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">
              {subjects.reduce(
                (sum, subject) => sum + subject.credit,
                0
              )}
            </h2>

          </div>

          {/* Performance */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <p className="text-gray-400">
              Performance
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {Number(gpa) >= 9 ? (
                <span className="text-green-400">
                  🌟 Excellent
                </span>
              ) : Number(gpa) >= 8 ? (
                <span className="text-cyan-400">
                  🎯 Very Good
                </span>
              ) : Number(gpa) >= 7 ? (
                <span className="text-yellow-400">
                  👍 Good
                </span>
              ) : (
                <span className="text-red-400">
                  📘 Needs Improvement
                </span>
              )}
            </h2>

          </div>

        </motion.div>

        {/* GPA Formula */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >

          <h2 className="text-2xl font-bold text-white">
            📖 GPA Formula
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            GPA is calculated using the formula:
          </p>

          <div className="mt-5 rounded-2xl bg-slate-900/50 border border-white/10 p-5 text-center">

            <p className="text-xl font-semibold text-cyan-300">
              GPA = Σ (Grade Point × Credit) ÷ Σ Credits
            </p>

          </div>

        </motion.div>
                {/* Actions */}

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button
            onClick={() => {
              localStorage.setItem(
                "sce-onehub-gpa",
                JSON.stringify(subjects)
              );
              alert("GPA details saved successfully!");
            }}
            className="flex-1 rounded-2xl bg-cyan-500 py-4 text-white font-semibold hover:bg-cyan-600 transition"
          >
            💾 Save GPA
          </button>

          <button
            onClick={() =>
              setSubjects([
                {
                  id: 1,
                  name: "",
                  grade: "O",
                  credit: 3,
                },
              ])
            }
            className="flex-1 rounded-2xl border border-red-500 text-red-400 py-4 font-semibold hover:bg-red-500/10 transition"
          >
            🔄 Reset Calculator
          </button>

        </div>

        {/* Study Tip */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-xl p-8"
        >

          <h2 className="text-2xl font-bold text-yellow-300">
            💡 GPA Improvement Tip
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Focus on high-credit subjects first, attend classes regularly,
            revise every week, and solve previous year question papers.
            Small, consistent efforts every semester lead to a higher CGPA.
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
            🎓 Track Your Academic Progress
          </h3>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Use the GPA Calculator every semester to monitor your
            performance and set realistic academic goals.
          </p>

        </motion.div>

      </div>

    </section>

  );
}