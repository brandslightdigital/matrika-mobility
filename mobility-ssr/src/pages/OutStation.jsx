import React, { useState } from 'react';
import { Shield, Globe, Briefcase, ArrowRight } from 'lucide-react';
import BookingDialog from '../components/BookingCar'; // Importing the BookingDialog component

export default function OutstationTransferPage() {
  const [dialogOpen, setDialogOpen] = useState(false); // state to control BookingDialog visibility
  const [model, setModel] = useState('Outstation Transfer Inquiry'); // model for the booking dialog

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-amber-500" />,
      title: "Long-Distance Transfers",
      description: "Travel in comfort and style with our long-distance outstation services. Whether it's a business trip or a family getaway, we offer seamless transfers.",
      image: '/cars/7i.webp',
      features: [
        "Luxury vehicles",
        "Flexible departure timings",
        "Comfortable seating",
        "Real-time tracking"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-amber-500" />,
      title: "Weekend Getaways",
      description: "Escape the city with our weekend getaway packages. Enjoy scenic rides and worry-free travel to popular outstation destinations.",
      image: '/cars/mercedes.avif',
      features: [
        "Custom itineraries",
        "Experienced chauffeurs",
        "Door-to-door service",
        "Comfortable air-conditioning"
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
            Outstation <span className="text-amber-500">Transfer</span> Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comfortable, convenient, and reliable outstation transfers for your long-distance travel needs.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563244583-0d0bc1db83a1?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
        </div>
      </div>

      {/* Service Description */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience Premium Outstation Transfers
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
                  Get Quote
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
            <h2 className="text-3xl font-bold mb-4">Ready for Your Outstation Journey?</h2>
            <p className="text-lg mb-8">
              Let us take care of the logistics while you enjoy a relaxing and comfortable journey to your destination.
            </p>
            <button
              onClick={handlePopup}
              className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            >
              Request a Quote
            </button>
          </div>
          <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1569346691-2ad8d249ed3a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjU0OXwwfDF8c2VhcmNofDJ8fG91dHN0YXRpb258ZW58MHx8fHwxNjg1NzkwMzA5&ixlib=rb-1.2.1&q=80&w=1080')] bg-cover bg-center"></div>
        </div>
      </div>

      {/* Booking Dialog for Outstation Transfer */}
      <BookingDialog
        open={dialogOpen}
        model={model}
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log('Outstation Transfer Booking Payload:', payload);
          setDialogOpen(false);
        }}
      />
    </div>
  );
}
