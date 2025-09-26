import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// Data for the locations
const locations = [
  { name: "USA", lat: 37.0902, lng: -95.7129 },
  { name: "Europe", lat: 48.8566, lng: 2.3522 }, // Example coordinates for Europe (Paris)
  { name: "UK", lat: 51.5074, lng: -0.1278 },  // Example coordinates for UK (London)
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Malaysia", lat: 4.2105, lng: 101.9758 },
];

const GlobalAvailabilitySection = () => {
  // State to check if component is mounted on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true after the component mounts (this ensures it's only executed on the client side)
    setIsClient(true);
  }, []);

  return (
    <div className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl font-bold mb-8">Now Serving Globally</h2>
        <p className="text-gray-300 mb-10">
          "Our premium mobility solutions are now available across key international markets."
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-10">
          {["USA", "Europe", "UK", "Singapore", "Malaysia"].map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 py-6 px-4 hover:bg-white/10 transition"
            >
              <span className="text-lg font-semibold">{region}</span>
            </motion.div>
          ))}
        </div>

        {/* Only render the map if we are on the client-side */}
        {isClient && (
          <MapContainer center={[20, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, i) => (
              <Marker key={i} position={[location.lat, location.lng]}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default GlobalAvailabilitySection;
