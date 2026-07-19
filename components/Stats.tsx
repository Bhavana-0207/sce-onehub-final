"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Users,
  Building2,
} from "lucide-react";

const stats = [
  {
    number: "104+",
    title: "Top Recruiters",
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    number: "753",
    title: "Students Placed",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "220+",
    title: "Faculty Members",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "11",
    title: "Departments",
    icon: Building2,
    color: "from-orange-500 to-red-500",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#030712] px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">

            Campus at a Glance

          </h2>

          <p className="text-gray-400 mt-4 text-lg">

            Everything about SCE in one intelligent dashboard.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: .3,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${item.color}`}
                >

                  <Icon size={30} className="text-white" />

                </div>

                <h3 className="mt-8 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                  {item.number}

                </h3>

                <p className="mt-3 text-gray-300 text-lg">

                  {item.title}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}