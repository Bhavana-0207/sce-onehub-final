"use client";

import Link from "next/link";
import {
  GraduationCap,
  Users,
  CalendarDays,
  Bell,
  MapPinned,
  BookOpen,
  Bot,
  Briefcase,
  Calculator,
  Clock3,
} from "lucide-react";

const cards = [
  {
    title: "Departments",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-500",
    href: "/department",
  },
  {
    title: "Faculty",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    href: "/faculty",
  },
  {
    title: "Events",
    icon: CalendarDays,
    color: "from-orange-500 to-red-500",
    href: "/events",
  },
  {
    title: "Notices",
    icon: Bell,
    color: "from-green-500 to-emerald-500",
    href: "/announcements",
  },
  {
    title: "Campus Map",
    icon: MapPinned,
    color: "from-indigo-500 to-cyan-500",
    href: "/map",
  },
  {
    title: "Resources",
    icon: BookOpen,
    color: "from-yellow-500 to-orange-500",
    href: "/materials",
  },
  {
    title: "AI Buddy",
    icon: Bot,
    color: "from-blue-500 to-purple-500",
    href: "/ai-buddy",
  },
  {
    title: "Placements",
    icon: Briefcase,
    color: "from-pink-500 to-rose-500",
    href: "/placements",
  },
  {
    title: "CGPA Calculator",
    icon: Calculator,
    color: "from-emerald-500 to-teal-500",
    href: "/cgpa",
  },
  {
    title: "Timetable",
    icon: Clock3,
    color: "from-violet-500 to-fuchsia-500",
    href: "/timetable",
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

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                href={card.href}
                key={card.title}
                className="group rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition duration-300 cursor-pointer block"
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}