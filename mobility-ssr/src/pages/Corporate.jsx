import React, { useState } from 'react';
import { Briefcase, Users, Globe, BarChart, ArrowRight, Heart } from 'lucide-react';
import BookingDialog from '../components/BookingCar'; // Importing the BookingDialog component
import {
  FaHandshake,
  FaCogs,
  FaTachometerAlt,
  FaFileInvoice,
  FaCalendarAlt,
  FaUsers,
} from 'react-icons/fa';
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
  title: "Executive Corporate Travel",
  description: "Flexible rentals and chauffeured rides for business, leisure, or family travel. 24x7 availability, Meet-and-greet service, Real-time flight tracking, Confidentiality guaranteed",
  image: '/cars/corporate.webp',
  features: [
    "Hourly, daily & multi-day rental options",
    "Local & outstation trips",
    "Sedans, SUVs, luxury cars & tempo travellers",
    "Transparent pricing, no hidden charges"
  ]
},
{
  icon: <Users className="h-8 w-8 text-amber-500" />,
  title: "Event and Conference Transportation",
  description: "Coordinated fleet solutions for delegates, conferences, and large groups.",
  image: '/cars/7i.webp',
  features: [
    "Professional, multilingual chauffeurs",
    "On-time pickups & multi-venue drops",
    "Luxury sedans, SUVs & minibuses",
    "Dedicated event logistics team"
  ]
},
{
  icon: <Heart className="h-8 w-8 text-amber-500" />,
  title: "Wedding & Special Occasion Cars",
  description: "Luxury and vintage vehicles tailored for your special day.",
  image: '/cars/mercedes.avif',
  features: [
    "Premium luxury & vintage classics",
    "Chauffeured rides for bride, groom & guests",
    "Custom-decorated vehicles to match themes",
    "24x7 availability for ceremonies"
  ]
},
{
  icon: <Globe className="h-8 w-8 text-amber-500" />,
  title: "Airport Transfers",
  description: "Seamless transfers with personalized meet-and-greet service.",
  image: '/cars/Fortuner.avif',
  features: [
    "24x7 availability",
    "Real-time flight tracking",
    "Meet-and-greet at terminals",
    "Wide vehicle options: sedans to SUVs"
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-amber-500">Tailored </span>Solutions for <span className='text-amber-500'>Corporate </span>Mobility
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Premium transportation services designed for businesses that value reliability, safety, security, and transparent exceptional service.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1480')] bg-cover bg-center"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-black via-neutral-900 to-black py-4">
          <div className="mx-auto max-w-6xl px-6">
            {/* Value Proposition */}
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-amber-500">Why</span> Corporations Choose Us
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gray-800 rounded-xl p-8">
                  <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaHandshake className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Service Level Agreements (SLAs)</h3>
                  <p className="text-gray-400">
                    We provide tailored SLAs ensuring high-quality services for your business needs.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-8">
                  <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaCogs className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Dedicated Account Managers</h3>
                  <p className="text-gray-400">
                    Our dedicated account managers provide personalized support for all your requirements.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-8">
                  <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaTachometerAlt className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Real-Time Tracking Dashboards</h3>
                  <p className="text-gray-400">
                    Track vehicles in real-time, keeping you updated and in control at all times.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-8">
                  <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaFileInvoice className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">MIS Reporting for Finance Teams</h3>
                  <p className="text-gray-400">
                    Customizable MIS reports that provide finance teams with accurate and detailed billing information.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-8">
                  <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaCalendarAlt className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Specialization in Bulk Bookings/Event and VIP Transfers</h3>
                  <p className="text-gray-400">
                    Expertise in handling large-scale bookings for events and VIP transfers, ensuring a smooth experience.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-xl p-8">
                  <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <FaUsers className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Dedicated Team</h3>
                  <p className="text-gray-400">
                    A skilled and experienced team that ensures high-quality service at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                      
                      <p className="text-amber-500 mb-5">{service.subtitle}</p>
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
                    Request a Corporate Proposal
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SOPsSection />
        <BestPracticesSection />
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel</h2>
              <p className="text-lg mb-8">
                “Guaranteed 10% savings on your current annual spends”
              </p>
              <button onClick={() => setDialogOpen(true)} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                Request a Corporate Proposal
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
