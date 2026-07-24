"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bus,
  Clock,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import { busRoutes } from "@/data/busRoutes";

export default function BusRoutes() {
  const [search, setSearch] = useState("");
  const [selectedRoute, setSelectedRoute] = useState(busRoutes[0]);
  const [favorite, setFavorite] = useState<number | null>(null);

  const filteredRoutes = useMemo(() => {
    return busRoutes.filter((route) =>
      route.route.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="min-h-screen bg-[#020617] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-white">
            College Bus Routes
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Find your college bus, timings and boarding points.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT PANEL */}

          <div className="space-y-6">

            <div className="relative">

              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search Route..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-400"
              />

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <div className="flex items-center gap-3 mb-6">

                <Bus className="text-cyan-400" />

                <h2 className="text-xl font-semibold text-white">
                  Available Routes
                </h2>

              </div>
                            <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2">

                {filteredRoutes.map((route) => (

                  <motion.div
                    key={route.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedRoute(route)}
                    className={`cursor-pointer rounded-2xl border p-5 transition ${
                      selectedRoute.id === route.id
                        ? "border-cyan-400 bg-cyan-500/10"
                        : "border-white/10 bg-white/5 hover:border-cyan-500/40"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="text-lg font-semibold text-white">
                          {route.route}
                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-gray-400">

                          <Clock size={16} />

                          <span>{route.departure}</span>

                        </div>

                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFavorite(route.id);
                        }}
                      >

                        <Star
                          size={22}
                          className={
                            favorite === route.id
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-400"
                          }
                        />

                      </button>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <motion.div
            layout
            className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <div className="flex items-center gap-3 mb-8">

              <Bus
                size={30}
                className="text-cyan-400"
              />

              <h2 className="text-3xl font-bold text-white">

                {selectedRoute.route}

              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

                <h3 className="text-cyan-300 font-semibold mb-4">
                  Bus Timing
                </h3>

                <div className="space-y-3">

                  <div className="flex justify-between text-gray-300">

                    <span>Departure</span>

                    <span>{selectedRoute.departure}</span>

                  </div>

                  <div className="flex justify-between text-gray-300">

                    <span>Arrival</span>

                    <span>{selectedRoute.arrival}</span>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

                <h3 className="text-cyan-300 font-semibold mb-4">
                  Driver Details
                </h3>

                <p className="text-gray-300 mb-3">

                  {selectedRoute.driver}

                </p>

                <a
                  href={`tel:${selectedRoute.contact}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-400 transition"
                >
                  <Phone size={18} />

                  Call Driver

                </a>

              </div>

            </div>
                        <div className="mt-10">

              <h3 className="text-2xl font-semibold text-white mb-6">
                Boarding Points
              </h3>

              <div className="space-y-4">

                {selectedRoute.stops.map((stop, index) => (

                  <motion.div
                    key={stop}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4"
                  >

                    <div className="flex flex-col items-center">

                      <div className="w-4 h-4 rounded-full bg-cyan-400"></div>

                      {index !== selectedRoute.stops.length - 1 && (
                        <div className="w-1 h-10 bg-cyan-500/40"></div>
                      )}

                    </div>

                    <div className="pb-6">

                      <div className="flex items-center gap-2">

                        <MapPin
                          size={18}
                          className="text-cyan-400"
                        />

                        <span className="text-white font-medium">
                          {stop}
                        </span>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    Current Favourite
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {favorite === selectedRoute.id
                      ? `${selectedRoute.route} is marked as your favourite route.`
                      : "Tap the ⭐ icon on any route to save it as your favourite."}
                  </p>

                </div>

                <Star
                  size={36}
                  className={
                    favorite === selectedRoute.id
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-500"
                  }
                />

              </div>

            </div>

          </motion.div>

        </div>

        {filteredRoutes.length === 0 && (

          <div className="mt-12 text-center">

            <Bus
              size={48}
              className="mx-auto text-gray-500"
            />

            <h2 className="mt-4 text-2xl font-semibold text-white">
              No Bus Route Found
            </h2>

            <p className="mt-2 text-gray-400">
              Try searching with another route name.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}