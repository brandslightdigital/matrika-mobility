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
    <section
      className="relative min-h-[80vh] md:min-h-[100vh] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[900ms] ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== current}
          >
            <img
              src={s.image}
              alt={s.title}
              className="h-full md:h-full w-full object-cover"
              draggable={false}
            />
            {/* Stronger overlay for long copy readability */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-16">
        <div className="w-full">
          {/* Heading */}
          <h1 className="mb-3 leading-tight text-white">
            <span className="block text-[clamp(28px,6vw,64px)] font-semibold">
              {slides[current].title}
            </span>
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-[clamp(26px,5vw,56px)] font-bold text-transparent">
              {slides[current].subtitle}
            </span>
          </h1>

          {/* Description – roomy for slide 1 */}
          <p className="mb-8 max-w-3xl text-[clamp(16px,2.3vw,22px)] leading-relaxed text-gray-200 md:max-w-4xl">
            {slides[current].description}
          </p>

          {/* Trust Indicators */}
          <div className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span>Corporate and Expat Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              <span>24x7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
              <span>Instant Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span>Police verified drivers</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
              <span>Instant Booking</span>
            </div> */}
          </div>

          {/* CTA */}
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row">
            <button
              onClick={handleBookNowClick}
              className="group flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:from-amber-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <FaCar className="group-hover:animate-bounce" />
              <span>Get Quote</span>
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            {/* Optional secondary CTA
            <Link
              to="/our-fleet"
              className="group flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
              <FaPlay className="group-hover:animate-pulse" />
              <span>View Fleet</span>
            </Link> */}
          </div>

          {/* Stats row */}
          {/* <div className="grid max-w-3xl grid-cols-2 gap-6 text-gray-200 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <s.icon className="text-amber-400" />
                <div>
                  <div className="text-xl font-extrabold text-white">{s.number}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3">
        {/* <button
          onClick={prev}
          aria-label="Previous slide"
          className="pointer-events-auto hidden rounded-full bg-white/15 px-3 py-2 text-white backdrop-blur hover:bg-white/25 sm:block"
        >
          Prev
        </button> */}

        {/* Dots */}
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goto(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`pointer-events-auto h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}

        {/* <button
          onClick={next}
          aria-label="Next slide"
          className="pointer-events-auto hidden rounded-full bg-white/15 px-3 py-2 text-white backdrop-blur hover:bg-white/25 sm:block"
        >
          Next
        </button> */}
      </div>
    </section>
  );
}
