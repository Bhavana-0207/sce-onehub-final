"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const places = [
  {
    title: "KS Block",
    image: "/ksblock.jpg",
    desc: "Smart classrooms, modern laboratories and innovation spaces.",
  },
  {
    title: "Boys Hostel",
    image: "/boys-hostel.jpg",
    desc: "Comfortable accommodation with Wi-Fi, study halls and dining.",
  },
  {
    title: "Temple",
    image: "/temple.jpg",
    desc: "A peaceful place where students begin every day with positivity.",
  },
];

export default function CampusHighlights() {
  return (
    <section className="py-24 bg-[#020617] px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Explore Our Campus
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Discover the beautiful spaces that make SCE a vibrant place to learn.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {places.map((place) => (

            <motion.div
              key={place.title}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={place.image}
                  alt={place.title}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-white flex items-center justify-between">

                  {place.title}

                  <ArrowUpRight
                    className="text-cyan-400"
                    size={22}
                  />

                </h3>

                <p className="mt-4 text-gray-400 leading-7">

                  {place.desc}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}