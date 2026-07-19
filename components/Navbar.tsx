"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Bot,
  Search,
  Bell,
} from "lucide-react";

const links = [
  { name: "Home", href: "/home" },
  { name: "Faculty", href: "/faculty" },
  { name: "Departments", href: "departments" },
  { name: "Events", href: "events" },
  { name: "Resources", href: "resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4">
      <nav className="max-w-7xl mx-auto mt-5">

        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-2xl shadow-2xl">

          <div className="flex items-center justify-between px-7 py-4">

            {/* Logo */}

            <Link href="/" className="flex items-center gap-3">

              <Image
                src="/logo.jpg"
                alt="logo"
                width={48}
                height={48}
                className="rounded-full border border-cyan-400"
              />

              <div>

                <h1 className="text-xl font-bold text-white">
                  SCE OneHub
                </h1>

                <p className="text-xs text-cyan-300">
                  AI Powered Campus
                </p>

              </div>

            </Link>

            {/* Desktop */}

            <div className="hidden lg:flex items-center gap-8">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}

            </div>

            {/* Right Side */}

            <div className="hidden lg:flex items-center gap-3">

              <button className="p-3 rounded-xl bg-white/10 hover:bg-cyan-500 transition">

                <Search size={18} />

              </button>

              <button className="p-3 rounded-xl bg-white/10 hover:bg-cyan-500 transition">

                <Bell size={18} />

              </button>

              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold hover:scale-105 transition">

                <Bot size={18} />

                AI Buddy

              </button>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

          {open && (

            <div className="lg:hidden border-t border-white/10 px-6 py-5 space-y-4">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300"
                >
                  {item.name}
                </Link>
              ))}

              <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold">

                AI Buddy

              </button>

            </div>

          )}

        </div>

      </nav>
    </header>
  );
}