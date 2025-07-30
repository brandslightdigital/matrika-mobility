// src/components/SafetySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const SafetySection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Text Content */}
        <div>
          <h2 className="text-6xl font-extrabold text-black mb-4">
            Safety for <span className="text-amber-400">All</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mb-6 rounded-full"></div>
          <p className="text-black-300 text-xl mb-6">
            At MobilityDrive, your safety is our top priority. Our vehicles are regularly sanitized, and all drivers are trained to ensure a safe and secure ride for every passenger.
          </p>
          <p className="text-black-300 text-xl mb-6">
At MobilityDrive, your safety is our top priority. Our vehicles are regularly sanitized, and all drivers are trained to ensure a safe and secure ride for every passenger.
          </p>
          <Link
            to="/about-us"
            className="inline-block font-bold text-amber-400 hover:text-black transition-all duration-300 group"
          >
            Know More
            <span className="ml-1 group-hover:ml-2 transition-all duration-300">›</span>
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://media.istockphoto.com/id/1053485392/photo/car-dealership-young-man-receiving-car-key-from-saleswoman.jpg?s=612x612&w=0&k=20&c=jLrwDGuc8F3oyegNu5AH3ZIAsuevt2MzjijNvl9rxjA=" // Replace with your image if needed
            alt="Safety First"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
