import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="pt-16 text-gray-700"
      style={{ backgroundColor: "#FFFAFA" }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-300">

        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center space-x-3 group mb-3">
            <img
              src="/logo-black.png"
              alt="Taxi Tribe"
              className="h-14 w-auto group-hover:opacity-80 transition-opacity duration-300"
            />
          </Link>

          <p className="text-gray-600 text-sm mb-4">
            Your trusted partner for premium car rentals — Reliable, Professional, and Affordable.
          </p>

          <div className="flex space-x-4 mt-4 text-gray-700">
            <a href="#" className="hover:text-amber-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-600"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-600"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-600"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-amber-600">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-amber-600">Contact</Link></li>
            <li><Link to="/blogs" className="hover:text-amber-600">Blogs</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/corporate-protocol" className="hover:text-amber-600">Corporate Protocol</Link></li>
            <li><Link to="/our-fleet" className="hover:text-amber-600">Our Fleet</Link></li>
            <li><Link to="/services" className="hover:text-amber-600">Our Services</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-600" />
              <a href="tel:+917011438890" className="hover:text-amber-600">+91 7011438890</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-600" />
              <a href="mailto:sales@taxitribe.in" className="hover:text-amber-600">sales@taxitribe.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Locations Section */}
      <div className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Locations</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Head Office */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Head Office</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              E-169, East of Kailash<br />
              New Delhi 110065
            </p>
          </div>

          {/* Gurgaon */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Gurgaon Hub</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              FF-7, Vyapar Kendra<br />
              Shushant Lok - I<br />
              Gurugram 122002
            </p>
          </div>

          {/* Noida */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Noida Hub</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Sector 143<br />
              Opposite Metro Station<br />
              Noida 201303
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-6">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Taxi Tribe. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policies" className="hover:text-amber-600">Privacy Policy</Link>
            <Link to="/term-condition" className="hover:text-amber-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
