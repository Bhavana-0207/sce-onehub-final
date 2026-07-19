"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, PlayCircle, ExternalLink } from "lucide-react";
import { campusLocations } from "@/data/campus";

export default function CampusNavigation() {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    campusLocations[0]
  );

  const filteredLocations = useMemo(() => {
    return campusLocations.filter((location) =>
      location.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-white">
            Campus Navigation
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Find departments, facilities and explore the SCE campus.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Panel */}

          <div className="space-y-6">

            <div className="relative">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <div className="flex items-center gap-3 mb-5">

                <PlayCircle className="text-red-500" />

                <h2 className="text-xl font-semibold text-white">
                  Campus Tour
                </h2>

              </div>

              <div className="aspect-video overflow-hidden rounded-2xl">

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/zKRpvXnhyCQ"
                  title="SCE Campus Tour"
                  allowFullScreen
                />

              </div>

              <a
                href="https://www.youtube.com/watch?v=zKRpvXnhyCQ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-500 transition"
              >
                <ExternalLink size={18} />
                Watch on YouTube
              </a>

            </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <h2 className="text-xl font-semibold text-white mb-5">
                Campus Locations
              </h2>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">

                {filteredLocations.map((location) => (

                  <motion.button
                    key={location.id}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedLocation(location)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      selectedLocation.id === location.id
                        ? "border-cyan-400 bg-cyan-500/10"
                        : "border-white/10 bg-white/5 hover:border-cyan-500/40"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <MapPin
                        className="text-cyan-400"
                        size={20}
                      />

                      <div>

                        <h3 className="font-semibold text-white">
                          {location.name}
                        </h3>

                        <p className="text-sm text-gray-400 mt-1">
                          {location.description}
                        </p>

                      </div>

                    </div>

                  </motion.button>

                ))}

              </div>

            </div>

          </div>

          {/* Right Panel */}

          <motion.div
            layout
            className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <div className="flex items-center gap-3 mb-6">

              <MapPin
                className="text-cyan-400"
                size={26}
              />

              <h2 className="text-3xl font-bold text-white">
                {selectedLocation.name}
              </h2>

            </div>

            <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-6">

              <p className="text-gray-300 leading-8 text-lg">

                {selectedLocation.description}

              </p>

            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                  About this Location
                </h3>

                <p className="text-gray-400 leading-7">
                  This location is part of the Saranathan College of Engineering campus.
                  Students, faculty and visitors can use this page to quickly
                  identify important buildings and facilities.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                  Navigation
                </h3>

                <p className="text-gray-400 mb-5">
                  Open this location in Google Maps for directions.
                </p>

                <a
                  href={selectedLocation.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white hover:scale-105 transition"
                >
                  <ExternalLink size={18} />

                  Open in Google Maps

                </a>

              </div>

            </div>
                        <div className="mt-10">

              <h3 className="text-2xl font-semibold text-white mb-6">
                Quick Access
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {[
                  "Library",
                  "Canteen",
                  "Auditorium",
                  "Sports Ground",
                ].map((place) => (
                  <motion.button
                    key={place}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      const location = campusLocations.find(
                        (item) => item.name === place
                      );
                      if (location) {
                        setSelectedLocation(location);
                      }
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition"
                  >
                    <MapPin
                      className="mx-auto mb-3 text-cyan-400"
                      size={26}
                    />

                    <p className="font-medium text-center">
                      {place}
                    </p>
                  </motion.button>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}