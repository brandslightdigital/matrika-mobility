import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlobalAvailabilitySection = () => {
  const [Map, setMap] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import the map component only on client side
    const loadMap = async () => {
      const { default: DynamicMap } = await import('./DynamicMap');
      setMap(() => DynamicMap);
    };
    loadMap();
  }, []);

  const countries = [
    { name: "India", color: "bg-green-500" },
    { name: "USA", color: "bg-green-500" },
    { name: "Europe", color: "bg-green-500" },
    { name: "UK", color: "bg-green-500" },
    { name: "Singapore", color: "bg-green-500" },
    { name: "Malaysia", color: "bg-green-500" },
  ];

  return (
    <div className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Now Serving Globally</h2>
        <p className="text-gray-300 mb-10 text-lg">
          "Our premium mobility solutions are now available across key international markets."
        </p>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-yellow-500/30 bg-green-500/10 py-4 px-3 hover:bg-green-500/20 transition-all duration-300 hover:scale-105"
            >
              <span className="text-base font-semibold text-yellow-400">{country.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Map Container */}
        <div className="relative bg-gray-900 rounded-2xl p-8 border border-yellow-500/30 min-h-[400px]">
          {isClient && Map ? (
            <Map />
          ) : (
            // Fallback loading state
            <div className="flex items-center justify-center h-64">
              <div className="text-yellow-400 text-lg">Loading map...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalAvailabilitySection;