import React, { useState } from 'react';
import { Briefcase, Users, Clock, Shield, Globe, BarChart, ArrowRight, Train } from 'lucide-react';
import BookingDialog from '../components/BookingCar'; // Importing the BookingDialog component
import { FaDisplay, FaPeopleGroup } from 'react-icons/fa6';
import { FaCar } from 'react-icons/fa';
import SOPsSection from './SOPsSection';
import BestPracticesSection from '../components/BestPractise';

export default function CorporatePage() {
  const [dialogOpen, setDialogOpen] = useState(false); // state to control BookingDialog visibility

  // Define the clients array
  const clients = [
    "Tech Giants Inc.",
    "Global Financial Partners",
    "Premier Consulting Group",
    "Summit Healthcare",
    "Horizon Energy Solutions",
    "Apex Legal Associates"
  ];

  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-amber-500" />,
      title: "Executive Transportation",
      description: "Discreet, reliable chauffeured services for C-level executives and business leaders.",
      image: '/cars/mercedes.avif',
      features: [
        "24/7 availability",
        "Meet-and-greet service",
        "Real-time flight tracking",
        "Confidentiality guaranteed"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: "Team Transfers",
      description: "Comfortable group transportation for corporate events and employee mobilities.",
      image: '/cars/7i.webp',
      features: [
        "Luxury vans & coaches",
        "Uniformed chauffeurs",
        "Bulk booking discounts",
        "Custom pickup schedules"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-500" />,
      title: "Airport Solutions",
      description: "Seamless airport transfers with flight monitoring and wait time flexibility.",
      image: '/cars/Fortuner.avif',
      features: [
        "Global airport coverage",
        "VIP terminal access",
        "Baggage assistance",
        "Corporate billing"
      ]
    },
    {
      icon: <BarChart className="h-8 w-8 text-amber-500" />,
      title: "Event Transportation",
      description: "Large-scale transportation solutions for conferences and corporate events.",
      image: '/cars/mercedes.avif',
      features: [
        "Dedicated event coordinators",
        "Branded vehicles available",
        "Attendee tracking system",
        "Multi-day rate packages"
      ]
    }
  ];

  const handlePopup = () => {
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative bg-gradient-to-r from-gray-900 to-black py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-500">Corporate</span> mobilities Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Premium transportation services designed for businesses that value reliability, discretion, and exceptional service.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1480')] bg-cover bg-center"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Value Proposition */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-amber-500">Why</span> Corporations Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaPeopleGroup className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Team</h3>
              <p className="text-gray-400">
                70 Employees , 300 Drivers , Pan india network Partners.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaDisplay className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Technology</h3>
              <p className="text-gray-400">
                Mobile Application , GPS and Mapping , Data Analytics, Live driver tracking
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaCar className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Trainers</h3>
              <p className="text-gray-400">
                5 Trainers exclusive for driver and partner training Pan India
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-amber-500">Tailored</span> Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="mr-6">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-5">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-amber-500 mr-2 mt-1">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 px-8 py-4 flex justify-between items-center">
                  <span className="text-sm text-gray-400">Custom solutions available</span>
                  <button onClick={() => setDialogOpen(true)} className="text-amber-500 hover:text-amber-400 font-medium flex items-center group">
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SOPsSection />
        <BestPracticesSection/>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to elevate your corporate travel?</h2>
              <p className="text-lg mb-8">
                Our mobilities specialists will design a custom solution for your organization.
              </p>
              <button onClick={() => setDialogOpen(true)} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                Request Corporate Proposal
              </button>
            </div>
            <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>

      {/* Booking Dialog for Corporate Service */}
      <BookingDialog
        open={dialogOpen}
        model="Corporate Service Inquiry"
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log('Corporate Service Booking Payload:', payload);
          setDialogOpen(false);
        }}
      />
    </div>
  );
}
