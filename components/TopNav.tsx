"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { title: "Depts", icon: Building2, href: "/department" },
  { title: "Faculty", icon: GraduationCap, href: "/faculty" },
  { title: "Events", icon: CalendarDays, href: "/events" },
  { title: "Map", icon: MapPinned, href: "/map" },
  { title: "Placements", icon: Briefcase, href: "/placement" },
  { title: "Materials", icon: BookOpen, href: "/materials" },
  { title: "Bus", icon: Bus, href: "/bus" },
  { title: "GPA", icon: Calculator, href: "/cgpa" },
  { title: "Notices", icon: Megaphone, href: "/announcements" },
  { title: "Timetable", icon: Clock, href: "/timetable" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06111d]/95 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3">
        <div className="flex items-center justify-center mb-2">
          <Link
            href="/"
            className="text-lg sm:text-xl font-black text-white tracking-tight"
          >
            SCE One Hub
          </Link>
        </div>

        <nav className="grid grid-cols-6 gap-1 sm:gap-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-center transition ${
                  active
                    ? "bg-cyan-500/20 text-white"
                    : "text-gray-300 hover:bg-cyan-500/10 hover:text-white"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                <span className="text-[9px] sm:text-[11px] leading-tight line-clamp-2">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
