import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaCar,
  FaStar,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { usePopup } from "./PopupContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const { setShowPopup } = usePopup();

  const slides = [
    // Content-heavy first slide
    {
      title: "Corporate Car Rentals Across India",
      subtitle: "Reliable, Safe & Tech-Enabled",
      description:
        "Taxi Tribe provides premium chauffeur-driven cars for corporates, events, and airport transfers, backed by cutting-edge technology and exceptional service.",
      image: "/banner/banner1.jpeg",
    },
    {
      title: "Luxury Fleet",
      subtitle: "Premium Experience",
      description:
        "Drive in style with our collection of luxury sedans, SUVs, and sports cars.",
      image: "/banner/banner2.jpeg",
    },
    {
      title: "24x7 Service",
      subtitle: "And Support",
      description:
        "Round-the-clock support with instant booking and emergency assistance.",
      image: "/banner/banner3.jpeg",
    },
  ];

  const stats = [
    { icon: FaCar, number: "500+", label: "Premium Cars" },
    { icon: FaUsers, number: "10K+", label: "Happy Clients" },
    { icon: FaStar, number: "4.9", label: "Rating" },
    { icon: FaCalendarAlt, number: "24x7", label: "Support" },
  ];

  // autoplay (pause on hover)
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      5000
    );
    return () => clearInterval(timerRef.current);
  }, [paused, slides.length]);

  const goto = (i) => setCurrent((i + slides.length) % slides.length);
  const next = () => goto(current + 1);
  const prev = () => goto(current - 1);

  const handleBookNowClick = () => {
    setShowPopup(true);
    // removed setOpen(false) — that variable never existed
  };

  return (
<section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-black pt-20">

  {/* Background Slides */}
  <div className="absolute inset-0">
    {slides.map((s, i) => (
      <div
        key={i}
        className={`absolute inset-0 transition-opacity duration-900 ${
          i === current ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={s.image}
          alt={s.title}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/40 to-black/20" />
      </div>
    ))}
  </div>

  {/* HERO MAIN GRID */}
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto min-h-[90vh] items-center px-6 py-10 gap-10">

    {/* LEFT CONTENT ALWAYS CENTERED */}
    <div className="flex flex-col justify-center">
      <h1 className="mb-3 leading-tight text-white">
        <span className="block text-[clamp(28px,6vw,64px)] font-semibold">
          {slides[current].title}
        </span>
        <span className="block bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-[clamp(26px,5vw,56px)] font-bold text-transparent">
          {slides[current].subtitle}
        </span>
      </h1>

      <p className="mb-8 max-w-3xl text-[clamp(16px,2vw,22px)] text-gray-200 leading-relaxed">
        {slides[current].description}
      </p>

      {/* Trust Indicators */}
      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-300">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span>Corporate and Expat Solutions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span>24x7 Customer Support</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <span>Instant Booking</span>
        </div>
      </div>

    </div>

    {/* RIGHT FIXED ENQUIRY FORM */}
    <div className="w-full flex justify-center lg:justify-end">
      <div className="w-full max-w-md rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
        <h2 className="text-xl text-center font-bold text-white mb-5">
          Quick Enquiry
        </h2>

        <div className="space-y-4">
          <input className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300" placeholder="Your Name" />
          <input className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300" placeholder="Phone Number" />
          <input className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300" placeholder="Email" />
          <input className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300" placeholder="City" />
          <textarea rows="3" className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-300" placeholder="Your Requirements"></textarea>

          <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded">
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>

  </div>

  {/* DOTS */}
  <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => goto(i)}
        className={`h-2 rounded-full transition-all ${
          i === current ? "w-6 bg-amber-400" : "w-2 bg-white/40"
        }`}
      />
    ))}
  </div>

</section>


  );
}
