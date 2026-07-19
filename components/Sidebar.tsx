"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Bot,
  GraduationCap,
  CalendarDays,
  MapPinned,
  Briefcase,
  Building2,
  BookOpen,
  Bus,
  Calculator,
  Megaphone,
  Clock,
} from "lucide-react";

const menu = [
  { title: "Home", icon: LayoutDashboard, href: "/" },
  { title: "AI Buddy", icon: Bot, href: "/ai" },
  { title: "Departments", icon: Building2, href: "/department" },
  { title: "Faculty", icon: GraduationCap, href: "/faculty" },
  { title: "Events", icon: CalendarDays, href: "/events" },
  { title: "Campus Map", icon: MapPinned, href: "/map" },
  { title: "Placements", icon: Briefcase, href: "/placement" },
  { title: "Study Materials", icon: BookOpen, href: "/materials" },
  { title: "Bus Routes", icon: Bus, href: "/bus" },
  { title: "GPA Calculator", icon: Calculator, href: "/cgpa" },
  { title: "Announcements", icon: Megaphone, href: "/announcements" },
  { title: "Timetable", icon: Clock, href: "/timetable" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-[#06111d] p-6 hidden lg:block">
      <h2 className="text-3xl font-black text-white mb-10">
        OneHub
      </h2>

      <div className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-gray-300 hover:bg-cyan-500/20 hover:text-white transition"
            >
              <Icon size={22} />
              {item.title}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}