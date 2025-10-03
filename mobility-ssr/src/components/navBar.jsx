import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaCar,
  FaPhone,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { usePopup } from "./PopupContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowPopup } = usePopup();
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setOpen(false);
    navigate(to); // Use the navigate function to change routes
  };

  const handleBookNowClick = () => {
    setShowPopup(true);
    setOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled
          ? "bg-black/95 backdrop-blur-sm shadow-2xl"
          : "bg-gradient-to-r from-gray-900 to-black"
          }`}
      >
        <div className="container mx-auto px-2 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Blue pulsing dot */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>

            {/* Logo image */}
            <img
              src="/logo.png" // apna logo ka path yahan daalna (public folder me)
              alt="Taxi Tribe"
              className="h-14 w-auto group-hover:opacity-90 transition-opacity duration-300"
            />
          </Link>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/corporate-protocol"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Corporate Protocol
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/our-fleet"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Our Fleet
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* <Link
              to="/airport-transfer"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Airport Transfer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link> */}
            {/* <Link
              to="/out-station"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Out Station
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link> */}
            <Link
              to="/about-us"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/blogs"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Our Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <FaPhoneAlt className="text-amber-400" />
                <span>+91 7011438890</span>
              </div>
              {/* <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="text-amber-400" />
                <span> F 61, Jwahar Park, Khanpu,r Deoli Road, New Delhi 110062.</span>
              </div> */}
            </div>

            <button
              onClick={handleBookNowClick}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-3 rounded-lg font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-amber-400 transition-colors duration-300 focus:outline-none"
            >
              {open ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${open
          ? "bg-black/70 backdrop-blur-sm opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <FaCar className="text-2xl text-amber-400" />
                <div className="text-xl font-black">
                  <span className="text-amber-400">Taxi</span>
                  <span className="text-white">Tribe</span>
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-amber-400 transition-colors duration-300"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => handleNavClick("/")}
              >
                Home
              </Link>
              <Link
                to="/corporate"
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => handleNavClick("/corporate")}
              >
                Corporate
              </Link>
              <Link
                to="/our-fleet"
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => handleNavClick("/cars")}
              >
                Our Fleet
              </Link>

              <Link
                to="/services"
                onClick={() => handleNavClick("/services")}
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
              >
                Our Services
              </Link>
              <Link
                to="/about-us"
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => handleNavClick("/about-us")}
              >
                About
              </Link>
              <Link
                to="/blogs"
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => handleNavClick("/about-us")}
              >
                Our Blog
              </Link>
              <Link
                to="/about-us"
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => handleNavClick("/about-us")}
              >
                About
              </Link>
              <Link
                to="/contact-us"
                className="block text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => handleNavClick("/contact-us")}
              >
                Contact
              </Link>

              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-700 space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <FaPhoneAlt className="text-amber-400" />
                  <span>+91 7011438890</span>
                </div>
                {/* <div className="flex items-center space-x-3 text-gray-400">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>Delhi, India</span>
                </div> */}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBookNowClick}
                className="block bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-4 rounded-lg font-bold text-center hover:from-amber-500 hover:to-amber-600 transition-all duration-300 mt-8"
              >
                Contact Us
              </button>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700">
              <p className="text-gray-500 text-sm text-center">
                Premium Car Rental Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
