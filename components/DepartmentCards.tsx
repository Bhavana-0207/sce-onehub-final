"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  MonitorSmartphone,
  BrainCircuit,
  CircuitBoard,
  Zap,
  Building2,
  Wrench,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const departments = [
  {
    name: "Computer Science & Engineering",
    short: "CSE",
    hod: "Dr. R. Kumar",
    labs: "8 Labs",
    icon: Cpu,
  },
  {
    name: "Information Technology",
    short: "IT",
    hod: "Dr. S. Priya",
    labs: "6 Labs",
    icon: MonitorSmartphone,
  },
  {
    name: "Artificial Intelligence & Data Science",
    short: "AI & DS",
    hod: "Dr. M. Devi",
    labs: "5 Labs",
    icon: BrainCircuit,
  },
  {
    name: "Electronics & Communication",
    short: "ECE",
    hod: "Dr. V. Ravi",
    labs: "7 Labs",
    icon: CircuitBoard,
  },
  {
    name: "Electrical & Electronics",
    short: "EEE",
    hod: "Dr. P. Kumar",
    labs: "6 Labs",
    icon: Zap,
  },
  {
    name: "Civil Engineering",
    short: "Civil",
    hod: "Dr. S. Kumar",
    labs: "5 Labs",
    icon: Building2,
  },
  {
    name: "Mechanical Engineering",
    short: "Mech",
    hod: "Dr. K. Raj",
    labs: "8 Labs",
    icon: Wrench,
  },
  {
    name: "MBA",
    short: "MBA",
    hod: "Dr. R. Meena",
    labs: "Business Lab",
    icon: Briefcase,
  },
];

export default function DepartmentCards() {
  return (
    <section className="min-h-screen bg-[#020617] py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-white mb-4"
        >
          Departments
        </motion.h1>

        <p className="text-gray-400 mb-12">
          Explore all academic departments at Saranathan College of Engineering.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {departments.map((dept) => {
            const Icon = dept.icon;

            return (
              <motion.div
                key={dept.short}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>

                <h2 className="text-xl font-bold text-white">
                  {dept.short}
                </h2>

                <p className="text-gray-400 mt-2">
                  {dept.name}
                </p>

                <div className="mt-6 space-y-2 text-sm text-gray-300">
                  <p>👨‍🏫 {dept.hod}</p>
                  <p>🧪 {dept.labs}</p>
                </div>

                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 flex items-center justify-center gap-2 hover:scale-105 transition">
                  View Details
                  <ArrowRight size={18} />
                </button>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}