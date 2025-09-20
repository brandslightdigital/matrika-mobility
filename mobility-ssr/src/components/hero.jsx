import React, { useState, useEffect } from 'react';
import { FaPlay, FaCar, FaStar, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { usePopup } from './PopupContext';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setShowPopup } = usePopup();

  const slides = [
    {
      title: "Corporate",
      subtitle: "Car Rentals",
      description: "Premium fleet for business meetings, airport transfers, and family adventures",
      image: "/banner/banner1.jpeg"
    },
    {
      title: "Luxury Fleet",
      subtitle: "Premium Experience",
      description: "Drive in style with our collection of luxury sedans, SUVs, and sports cars",
      image: "/banner/banner2.jpeg"
    },
    {
      title: "24/7 Service",
      subtitle: "And Support",
      description: "Round-the-clock support with instant booking and emergency assistance",
      image: "/banner/banner3.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: FaCar, number: "500+", label: "Premium Cars" },
    { icon: FaUsers, number: "10K+", label: "Happy Clients" },
    { icon: FaStar, number: "4.9", label: "Rating" },
    { icon: FaCalendarAlt, number: "24/7", label: "Support" }
  ];
  const handleBookNowClick = () => {
    setShowPopup(true);
    setOpen(false); // Close mobile menu if open
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-40' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div> */}
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="w-full">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-amber-400/20 text-amber-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <FaStar className="mr-2" />
              Rated #1 Car Rental Service
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 leading-tight">
              <span className="text-white block">
                {slides[currentSlide].title}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 block">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Trusted by 10,000+ customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span>Instant Booking</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={handleBookNowClick}
                className="group bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center space-x-2">
                <FaCar className="group-hover:animate-bounce" />
                <span>Book a Ride</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <Link to="/our-fleet" className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2">
                <FaPlay className="group-hover:animate-pulse" />
                <span>View Fleet</span>
              </Link>
            </div>
          </div>


        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-amber-400 w-8'
                : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Quick Booking Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-t border-white/10 p-6 z-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-white">
              <FaMapMarkerAlt className="text-amber-400" />
              <span className="font-medium">Pick up location: Delhi, India</span>
            </div>
            <div className="flex items-center space-x-4">
              <input 
                type="date" 
                className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-amber-400 backdrop-blur-sm"
              />
              <input 
                type="time" 
                className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-amber-400 backdrop-blur-sm"
              />
              <button className="bg-amber-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-amber-500 transition-colors duration-300">
                Quick Book
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}