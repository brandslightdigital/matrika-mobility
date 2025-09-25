import React, { useState } from 'react';
import { Shield, Globe, Briefcase, ArrowRight } from 'lucide-react';
import BookingDialog from '../components/BookingCar'; // Importing the BookingDialog component

export default function AirportTransferPage() {
  const [dialogOpen, setDialogOpen] = useState(false); // state to control BookingDialog visibility
  const [model, setModel] = useState('Airport Transfer Inquiry'); // model for the booking dialog

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-amber-500" />,
      title: "VIP Airport Service",
      description: "Experience utmost comfort with VIP terminal access, fast-track security, baggage assistance, and dedicated chauffeurs.",
      image: '/cars/mercedes.avif',
      features: [
        "VIP terminal access",
        "Dedicated chauffeur",
        "Real-time flight tracking",
        "Baggage assistance"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-amber-500" />,
      title: "Group Transfers",
      description: "Luxury buses and vans for group travel, with flexible scheduling, group discounts, and custom itineraries.",
      image: '/cars/7i.webp',
      features: [
        "Luxury buses and vans",
        "Flexible scheduling",
        "Group discounts",
        "Custom itinerary planning"
      ]
    }
  ];

  const handlePopup = () => {
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-black py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airport <span className="text-amber-500">Transfer</span> Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Seamless, reliable airport transfers tailored to your schedule and needs.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553640828-d6d2f978b2fc?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
        </div>
      </div>

      {/* Service Description */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Premium Airport Transfers Tailored for You
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
                <button
                  onClick={handlePopup}
                  className="text-amber-500 hover:text-amber-400 font-medium flex items-center group"
                >
                  Request a Corporate Proposal
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-4">Ready for a Seamless Airport Experience?</h2>
            <p className="text-lg mb-8">
              Our team is ready to provide seamless and comfortable airport transfers for you and your team.
            </p>
            <button
              onClick={handlePopup}
              className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            >
              Request a Quote
            </button>
          </div>
          <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1561800839-75ed8b80a10b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjU0OXwwfDF8c2VhcmNofDIyfHxiYXNlJTIwb2YlMjBsaWZlJTIwYmFya2luZyUyMHZhbnxlbnwwfDB8fHwxNjg1NzkwMzA5&ixlib=rb-1.2.1&q=80&w=1080')] bg-cover bg-center"></div>
        </div>
      </div>

      {/* Booking Dialog for Airport Transfer */}
      <BookingDialog
        open={dialogOpen}
        model={model}
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log('Airport Transfer Booking Payload:', payload);
          setDialogOpen(false);
        }}
      />
    </div>
  );
}
