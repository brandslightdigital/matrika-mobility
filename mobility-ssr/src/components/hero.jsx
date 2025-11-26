import React, { useEffect, useRef, useState } from "react";
import {
  FaCar,
  FaStar,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { usePopup } from "./PopupContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const { setShowPopup } = usePopup(); // agar popup kahin aur use ho raha ho

  // ---- FORM STATE (PopupForm se liya hua) ----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    corporateName: "",
    selectCity: "",
    selectCountry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const slides = [
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
  };

  // ---- FORM HANDLERS (PopupForm se) ----
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_goe734o",      // EmailJS Service ID
        "template_1p60xx7",     // EmailJS Template ID
        formData,
        "lc85WOgfXS2GGvIlW"     // EmailJS User/Public Key
      );

      console.log("Success:", result.text);
      setIsSubmitting(false);
      setSubmitted(true);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        corporateName: "",
        selectCity: "",
        selectCountry: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 2500);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
    }
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
        {/* LEFT CONTENT */}
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
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>Whatsapp sos button for real human response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Pro women safety complaint travel</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span>24x7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>ESG complaint</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
              <span>Instant Booking</span>
            </div>
          </div>
        </div>

        {/* RIGHT: EMAILJS BOOKING FORM (PopupForm style) */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-2xl bg-white text-gray-800 shadow-2xl overflow-hidden">
            {/* Top gradient strip */}
            <div className="bg-linear-to-r from-yellow-400 via-amber-500 to-yellow-500 h-2" />

            <div className="p-6 md:p-7">
              {!submitted ? (
                <>
                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="corporateName"
                          value={formData.corporateName}
                          onChange={handleInputChange}
                          placeholder="Corporate Name"
                          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="selectCountry"
                        value={formData.selectCountry}
                        onChange={handleInputChange}
                        placeholder="Enter Country"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="selectCity"
                        value={formData.selectCity}
                        onChange={handleInputChange}
                        placeholder="Enter City"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Special requirements or questions..."
                        rows={3}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-linear-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white py-3 md:py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        "Get Quote"
                      )}
                    </button>
                  </form>

                  {/* small trust line */}
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-center text-gray-500">
                      Quick response · Secure & Private · Best Prices Guaranteed
                    </p>
                  </div>
                </>
              ) : (
                // Success State
                <div className="text-center py-6 md:py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-green-400 to-green-500 rounded-full mb-4 md:mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Thanks for your interest! We'll call you back within 15
                    minutes to discuss your car rental needs.
                  </p>
                </div>
              )}
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
