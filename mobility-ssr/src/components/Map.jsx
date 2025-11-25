import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GlobalAvailabilitySection = () => {
  const [Map, setMap] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import the map component only on client side
    const loadMap = async () => {
      const { default: DynamicMap } = await import("./DynamicMap");
      setMap(() => DynamicMap);
    };
    loadMap();
  }, []);

  const countries = [
    { name: "India" },
    { name: "USA" },
    { name: "Europe" },
    { name: "UK" },
    { name: "Singapore" },
    { name: "Malaysia" },
  ];

  return (
    <div style={{ backgroundColor: "#FFFAFA" }} className="py-16">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <div className="flex items-center justify-center mb-6 gap-4">
          {/* Using your uploaded logo path - tooling will convert local path to URL */}
          <img src="/mnt/data/logo.png" alt="Taxi Tribe" className="h-10 object-contain" />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-gray-900">Now Serving Globally</h2>
        <p className="text-gray-600 mb-10 text-lg">
          "Our premium mobility solutions are now available across key international markets."
        </p>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl border border-gray-200 bg-white py-4 px-3 hover:bg-amber-50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-semibold text-amber-600">{country.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Map Container */}
        <div className="relative bg-white rounded-2xl p-6 border border-gray-200 min-h-[420px] shadow-sm">
          {isClient && Map ? (
            <Map />
          ) : (
            // Fallback loading state
            <div className="flex flex-col items-center justify-center h-64">
              <div className="text-amber-600 text-lg font-medium">Loading map...</div>
              <div className="mt-3 text-sm text-gray-500">Interactive map will appear here shortly.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalAvailabilitySection;
