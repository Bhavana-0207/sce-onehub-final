"use client";

import Link from "next/link";
import { Bot, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#01040F] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                <Bot className="text-white" />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  SCE OneHub
                </h2>

                <p className="text-cyan-400 text-sm">
                  AI Powered Campus
                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-7">
              A modern AI-powered smart campus platform designed to simplify
              academics, events, faculty access and student life.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link
                href="/"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                Home
              </Link>

              <Link
                href="/faculty"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                Faculty
              </Link>

              <Link
                href="#departments"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                Departments
              </Link>

              <Link
                href="events"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                Events
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">

                <MapPin size={18} className="text-cyan-400" />

                <span>Trichy, Tamil Nadu</span>

              </div>

              <div className="flex items-center gap-3">

                <Phone size={18} className="text-cyan-400" />

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={18} className="text-cyan-400" />

                <span>info@sce.ac.in</span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500 transition flex items-center justify-center"
              >
                <FaGithub size={22} className="text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500 transition flex items-center justify-center"
              >
                <FaLinkedin size={22} className="text-white" />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">

          © 2026 SCE OneHub • Built with ❤️ using Next.js & Gemini AI

        </div>

      </div>

    </footer>
  );
}