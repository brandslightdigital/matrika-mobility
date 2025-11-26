// src/components/SafetySection.jsx
import React from "react";

export const SafetySection = () => {
  const images = [
    {
      src: "1.jpeg",
      alt: "Driver handing over keys - professional handover",
      caption: "Vetted & trained chauffeurs",
    },
    {
      src: "2.jpeg",
      alt: "GPS navigation on the phone",
      caption: "Real-time GPS tracking",
    },
    {
      src: "3.jpeg",
      alt: "Car emergency kit and fire extinguisher",
      caption: "Prepared for emergencies",
    },
    {
      src: "4.jpeg",
      alt: "Sanitizer and clean car interior",
      caption: "Hygiene & periodic sanitisation",
    },
  ];

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "#FFFAFA" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Safety for <span className="text-amber-600">All</span>
            </h2>

            <div className="w-20 h-1 bg-amber-500 mb-6 rounded-full" />

            <div className="space-y-5 text-gray-700 text-base md:text-lg">
              <p>
                At Taxi Tribe, your safety is paramount. Our fleet is equipped with
                advanced GPS tracking, allowing us to monitor your journey in
                real-time for added security and efficiency. Every vehicle also
                carries a fire extinguisher for all-scenario preparedness. We place
                a special emphasis on women's safety, with a discreet push-button
                SOS system in every car that instantly alerts our 24x7 support team,
                ensuring immediate assistance is just a click away.
              </p>

              <p>
                Our professional drivers are meticulously vetted and trained,
                providing a secure, comfortable, and stress-free experience for every
                passenger.
              </p>

              <p>
                For us, our philosophy of a Tribe represents a trusted community — a
                network of people bound by shared values of care, accountability,
                and vigilance. This network extends deep into Tier 2 and Tier 3
                cities, where personal connection and human empathy still define
                service. Our aim is to create a mobility ecosystem where a woman
                travelling in a smaller city feels as safe and supported as she
                would in a Tier 1 environment.
              </p>

              <p>
                To achieve this, we ensure that our driver and support community is
                trained on the same safety and service parameters as those in
                metropolitan cities. This means consistent training, behavioural
                standards, and response systems across all operational geographies —
                ensuring that every passenger, regardless of city or region,
                experiences the same high standards of safety and professionalism.
              </p>

              <p>
                At Taxi Tribe, safety is not just a protocol — it’s a culture. One
                that travels with every passenger, strengthened by empathy, powered
                by technology, and rooted in a community that moves together as one
                Tribe.
              </p>
            </div>
          </div>

          {/* 4-Image Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <figure
                  key={idx}
                  className="relative overflow-hidden rounded-2xl shadow-lg bg-white"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 sm:h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* subtle overlay and caption */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <figcaption className="absolute left-4 bottom-3 text-sm">
                    <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-md shadow-sm">
                      {idx + 1}
                    </span>
                    {/* <div className="mt-2 text-gray-100 text-sm font-medium drop-shadow-sm">
                      {img.caption}
                    </div> */}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* small trust strip under images */}
            <div className="mt-6 flex flex-wrap gap-3 items-center text-sm text-gray-700">
              <span className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4" /></svg>
                GPS Tracking
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
                24×7 Support
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M6 9l6 6 6-6" /></svg>
                Emergency Kits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
