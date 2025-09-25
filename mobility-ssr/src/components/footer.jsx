// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-gray-300 pt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-700">

        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">Matrika<span className="text-amber-400">Mobilities</span></h2>
          <p className="text-gray-400 text-sm mb-4">
            Your trusted partner for premium car rentals — Reliable, Professional, and Affordable.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-amber-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-400"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400"><FaLinkedin /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/our-fleet" className="hover:text-amber-400">Our Fleet</Link></li>
            <li><Link to="/corporate" className="hover:text-amber-400">Corporate</Link></li>
            <li><Link to="/about-us" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/our-fleet" className="hover:text-amber-400">City Drive</Link></li>
            <li><Link to="/corporate" className="hover:text-amber-400">Corporate Service</Link></li>
            <li><Link to="/airport-transfer" className="hover:text-amber-400"> Airport Transfer</Link></li>
            <li><Link to="/out-station" className="hover:text-amber-400">Outstation Services</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-amber-400" />
              <span> F 61, Jawahar Park, Khanpur Deoli Road, New Delhi 110062. <br /></span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-400" />
              <a href="tel:+917011438890" className="hover:text-amber-400">+91 7011438890</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <a href="mailto: sales@matrikamobilities.com" className="hover:text-amber-400"> sales@matrikamobilities.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()}Matrika Mobilities. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policies" className="hover:text-amber-400">Privacy Policy</Link>
            <Link to="/term-condition" className="hover:text-amber-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
