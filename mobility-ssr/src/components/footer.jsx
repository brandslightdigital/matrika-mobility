// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-gray-300 pt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-700">

        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center space-x-3 group mb-3">
            <img
              src="/logo.png"
              alt="Taxi Tribe"
              className="h-14 w-auto group-hover:opacity-90 transition-opacity duration-300"
            />
          </Link>
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

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-amber-400">Contact</Link></li>
            <li><Link to="/blogs" className="hover:text-amber-400">Blogs</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/corporate-protocol" className="hover:text-amber-400">Corporate Protocol</Link></li>
            <li><Link to="/our-fleet" className="hover:text-amber-400">Our Fleet</Link></li>
            <li><Link to="/services" className="hover:text-amber-400">Our Services</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-400" />
              <a href="tel:+917011438890" className="hover:text-amber-400">+91 7011438890</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <a href="mailto:sales@taxitribe.in" className="hover:text-amber-400">sales@taxitribe.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Location Cards Section */}
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Our Locations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Head Office Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg p-6 hover:border-amber-400 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-400 p-2 rounded-full">
                <FaMapMarkerAlt className="text-black text-lg" />
              </div>
              <h4 className="text-xl font-bold text-white">Head Office</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              E-169, East of Kailash<br />
              New Delhi 110065
            </p>
          </div>

          {/* Gurgaon Hub Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg p-6 hover:border-amber-400 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-400 p-2 rounded-full">
                <FaMapMarkerAlt className="text-black text-lg" />
              </div>
              <h4 className="text-xl font-bold text-white">Gurgaon Hub</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              FF-7, Vyapari Kendal<br />
              Tusnt Lok 1<br />
              Gurugram 122002
            </p>
          </div>

          {/* Noida Hub Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg p-6 hover:border-amber-400 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-400 p-2 rounded-full">
                <FaMapMarkerAlt className="text-black text-lg" />
              </div>
              <h4 className="text-xl font-bold text-white">Noida Hub</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sector 143<br />
              Opposite Metro Station<br />
              Noida 201303
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Taxi Tribe. All rights reserved.</p>
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