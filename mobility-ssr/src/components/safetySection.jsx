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
          <p className="text-black-300 text-xl mb-6 text-white">
            For us our philosophy of  a Tribe represents a trusted community — a network of people bound by shared values of care, accountability, and vigilance. This network extends deep into Tier 2 and Tier 3 cities, where personal connection and human empathy still define service. Our aim is to create a mobility ecosystem where a woman travelling in a smaller city feels as safe and supported as she would in a Tier 1 environment.

          </p>
          <p className="text-black-300 text-xl mb-6 text-white">
         To achieve this, we ensure that our driver and support community is trained on the same safety and service parameters as those in metropolitan cities. This means consistent training, behavioural standards, and response systems across all operational geographies — ensuring that every passenger, regardless of city or region, experiences the same high standards of safety and professionalism.
          </p>
          <p className="text-black-300 text-xl mb-6 text-white">
At Taxi Tribe, safety is not just a protocol — it’s a culture. One that travels with every passenger, strengthened by empathy, powered by technology, and rooted in a community that moves together as one Tribe.
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
