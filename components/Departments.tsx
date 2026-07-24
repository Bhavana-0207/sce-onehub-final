"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaMicrochip,
  FaBolt,
  FaBuilding,
  FaCogs,
  FaIndustry,
  FaBriefcase,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const departments = [
  {
    name: "Computer Science Engineering",
    short: "CSE",
    icon: FaLaptopCode,
    desc: "Software Development, AI and Modern Computing.",
  },
  {
    name: "Information Technology",
    short: "IT",
    icon: FaNetworkWired,
    desc: "Networking, Cloud Computing and Cyber Security.",
  },
  {
    name: "Artificial Intelligence & Data Science",
    short: "AI & DS",
    icon: FaRobot,
    desc: "Artificial Intelligence and Data Analytics.",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    short: "AI & ML",
    icon: FaBrain,
    desc: "Machine Learning and Intelligent Systems.",
  },
  {
    name: "Computer Science & Business Systems",
    short: "CSBS",
    icon: FaChartLine,
    desc: "Technology with Business Innovation.",
  },
  {
    name: "Electronics & Communication",
    short: "ECE",
    icon: FaMicrochip,
    desc: "Communication, Embedded Systems and VLSI.",
  },
  {
    name: "Electrical & Electronics",
    short: "EEE",
    icon: FaBolt,
    desc: "Electrical Power and Automation.",
  },
  {
    name: "Civil Engineering",
    short: "Civil",
    icon: FaBuilding,
    desc: "Infrastructure and Smart Construction.",
  },
  {
    name: "Mechanical Engineering",
    short: "Mechanical",
    icon: FaCogs,
    desc: "Design, Manufacturing and Robotics.",
  },
  {
    name: "Instrumentation & Control",
    short: "ICE",
    icon: FaIndustry,
    desc: "Industrial Automation and Sensors.",
  },
  {
    name: "MBA",
    short: "MBA",
    icon: FaBriefcase,
    desc: "Business Leadership and Entrepreneurship.",
  },
];

export default function Departments() {
  return (
    <section
      id="departments"
      className="py-24 bg-[#030712] px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">

            Academic Departments

          </h2>

          <p className="text-gray-400 mt-4 text-lg">

            Explore the diverse academic programs offered at SCE.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {departments.map((dept) => {

            const Icon = dept.icon;

            return (

              <motion.div
                key={dept.short}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: .3,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <div className="flex items-center justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                    <Icon
                      className="text-white text-3xl"
                    />

                  </div>

                  <ArrowUpRight
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">

                  {dept.short}

                </h3>

                <h4 className="mt-2 text-lg font-semibold text-cyan-300">

                  {dept.name}

                </h4>

                <p className="mt-4 text-gray-400 leading-7">

                  {dept.desc}

                </p>

                <Link
                  href="/faculty"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold hover:scale-105 transition"
                >
                  View Faculty
                </Link>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}