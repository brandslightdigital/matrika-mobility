// src/components/SafetySection.jsx
import React from "react";
import { Link } from "react-router-dom";

export const SafetySection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Safety for <span className="text-amber-400">All</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mb-6 rounded-full"></div>
          <p className="text-black-300 text-lg md:text-xl mb-6 text-white">
            At Taxi Tribe, your safety is paramount. Our fleet is equipped with
            advanced GPS tracking, allowing us to monitor your journey in
            real-time for added security and efficiency. Every vehicle also
            carries a fire extinguisher for all-scenario preparedness. We place
            a special emphasis on women's safety, with a discreet push-button
            SOS system in every car that instantly alerts our 24x7 support team,
            ensuring immediate assistance is just a click away.
          </p>
          <p className="text-black-300 text-xl mb-6 text-white">
            Our professional drivers are meticulously vetted and trained, providing a secure, comfortable, and stress-free experience for every passenger.


          </p>
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
