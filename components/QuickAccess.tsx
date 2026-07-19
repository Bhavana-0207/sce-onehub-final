"use client";

import {
  GraduationCap,
  Users,
  CalendarDays,
  Bell,
  MapPinned,
  BookOpen,
  Bot,
  Briefcase,
} from "lucide-react";

const cards = [
  {
    title: "Departments",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Faculty",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Events",
    icon: CalendarDays,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Notices",
    icon: Bell,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Campus Map",
    icon: MapPinned,
    color: "from-indigo-500 to-cyan-500",
  },
  {
    title: "Resources",
    icon: BookOpen,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "AI Buddy",
    icon: Bot,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Placements",
    icon: Briefcase,
    color: "from-pink-500 to-rose-500",
  },
];

export default function QuickAccess() {
  return (
    <section className="py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Quick Access
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Everything you need in one place.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          {cards.map((card) => {

            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${card.color}`}
                >
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mt-6">
                  {card.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  Click to explore
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}