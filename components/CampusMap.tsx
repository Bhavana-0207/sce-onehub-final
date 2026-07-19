"use client";

import { MapPin, Navigation, Building2 } from "lucide-react";

const locations = [
  {
    name: "Main Block",
    description: "Principal Office, Admin Office, CSE Department",
  },
  {
    name: "Library",
    description: "Central Library and Reading Hall",
  },
  {
    name: "Auditorium",
    description: "Events, Seminars and Cultural Programs",
  },
  {
    name: "Cafeteria",
    description: "Food Court and Snacks",
  },
  {
    name: "Placement Cell",
    description: "Training & Placement Office",
  },
  {
    name: "Boys Hostel",
    description: "Student Accommodation",
  },
  {
    name: "Girls Hostel",
    description: "Student Accommodation",
  },
];

export default function CampusMap() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-8">
          <Navigation className="w-8 h-8 text-cyan-400" />
          <div>
            <h1 className="text-4xl font-bold">Campus Navigation</h1>
            <p className="text-gray-300">
              Explore important locations inside Saranathan College of Engineering.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
              <Building2 className="text-cyan-400" />
              Campus Locations
            </h2>

            <div className="space-y-4">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="bg-white/5 p-4 rounded-lg hover:bg-cyan-500/20 transition"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="text-red-400 mt-1" />
                    <div>
                      <h3 className="font-semibold">{location.name}</h3>
                      <p className="text-gray-300 text-sm">
                        {location.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-xl border border-white/20 flex items-center justify-center p-8">

            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-dashed border-cyan-400 flex flex-col justify-center items-center">

              <Navigation className="w-20 h-20 text-cyan-400 mb-4" />

              <h2 className="text-2xl font-bold">
                Interactive Campus Map
              </h2>

              <p className="text-center text-gray-300 mt-3 max-w-sm">
                Future enhancement:
                Interactive building navigation,
                classroom finder,
                shortest path,
                GPS guidance and accessibility support.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}