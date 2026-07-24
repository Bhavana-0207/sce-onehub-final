"use client";

import { timetable, subjects } from "@/data/timetableData";

export default function TimeTable() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-center">
            📅 Class Timetable
          </h1>

          <p className="text-center text-slate-400 mt-3">
            Saranathan College of Engineering
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-6">

            <div className="bg-slate-900 px-5 py-3 rounded-xl border border-slate-700">
              <span className="text-slate-400">Class</span>
              <h3 className="font-bold text-xl">
                {timetable.className}
              </h3>
            </div>

            <div className="bg-slate-900 px-5 py-3 rounded-xl border border-slate-700">
              <span className="text-slate-400">Semester</span>
              <h3 className="font-bold text-xl">
                {timetable.semester}
              </h3>
            </div>

            <div className="bg-slate-900 px-5 py-3 rounded-xl border border-slate-700">
              <span className="text-slate-400">Hall</span>
              <h3 className="font-bold text-xl">
                {timetable.hall}
              </h3>
            </div>

          </div>

        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-700">

          <table className="w-full border-collapse">

            <thead className="bg-cyan-700">

              <tr>

                <th className="p-4">Day</th>

                {timetable.timings.map((time) => (
                  <th key={time} className="p-4 whitespace-nowrap">
                    {time}
                  </th>
                ))}

              </tr>

            </thead>

            <tbody>

              {timetable.days.map((day) => (

                <tr
                  key={day.day}
                  className="border-b border-slate-700 hover:bg-slate-900"
                >

                  <td className="font-bold p-4 bg-slate-900">
                    {day.day}
                  </td>

                  {day.periods.map((subjectCode, index) => {

                    const info =
                      subjects[
                        subjectCode.split(" ")[0] as keyof typeof subjects
                      ];

                    return (
                      <td
                        key={index}
                        className="p-3 text-center border border-slate-800"
                      >

                        <div className="font-semibold text-cyan-300">
                          {subjectCode}
                        </div>

                        <div className="text-sm mt-2">
                          {info?.title || ""}
                        </div>

                        <div className="text-xs text-slate-400 mt-1">
                          {info?.faculty || ""}
                        </div>

                      </td>
                    );
                  })}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}