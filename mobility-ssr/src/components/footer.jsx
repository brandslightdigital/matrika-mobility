// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-gray-300 pt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-700">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">Mobility<span className="text-amber-400">Drive</span></h2>
          <p className="text-gray-400 text-sm mb-4">
            Your trusted partner for premium car rentals — reliable, professional, and affordable.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-amber-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-400"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-amber-400">Home</a></li>
            <li><a href="/book" className="hover:text-amber-400">Book Now</a></li>
            <li><a href="/fleet" className="hover:text-amber-400">Our Fleet</a></li>
            <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-amber-400">Corporate Rentals</a></li>
            <li><a href="#" className="hover:text-amber-400">Airport Pickup</a></li>
            <li><a href="#" className="hover:text-amber-400">Luxury Chauffeur</a></li>
            <li><a href="#" className="hover:text-amber-400">Self Drive Cars</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-amber-400" />
              <span>Delhi, India 10001 <br /></span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-amber-400" />
              <a href="tel:+15551234567" className="hover:text-amber-400">+1 (555) 123-4567</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <a href="mailto:info@mobilitydrive.com" className="hover:text-amber-400">info@mobilitydrive.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MobilityDrive. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
