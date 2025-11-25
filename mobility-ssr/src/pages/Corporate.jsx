import React, { useState } from 'react';
import { Briefcase, Users, Globe, ArrowRight, Heart } from 'lucide-react';
import BookingDialog from '../components/BookingCar';
import {
  FaHandshake,
  FaCogs,
  FaTachometerAlt,
  FaFileInvoice,
  FaCalendarAlt,
  FaUsers as FaUsersAlt,
} from 'react-icons/fa';
import SOPsSection from './SOPsSection';
import BestPracticesSection from '../components/BestPractise';
import { Helmet } from "react-helmet-async";

export default function CorporatePage() {
  const [dialogOpen, setDialogOpen] = useState(false);

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
      icon: <Briefcase className="h-8 w-8 text-amber-600" />,
      title: "Executive Corporate Travel",
      description:
        "Flexible rentals and chauffeured rides for business, leisure, or family travel. 24x7 availability., Meet-and-greet service, Real-time flight tracking, Confidentiality guaranteed",
      image: '/corporate/ect.webp',
      features: [
        "Hourly, daily & multi-day rental options",
        "Local & outstation trips",
        "Sedans, SUVs, luxury cars & tempo travellers",
        "Transparent pricing, no hidden charges"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Event and Conference Transportation",
      description: "Coordinated fleet solutions for delegates, conferences, and large groups.",
      image: '/corporate/eact.jpg',
      features: [
        "Professional, multilingual chauffeurs",
        "On-time pickups & multi-venue drops",
        "Luxury sedans, SUVs & minibuses",
        "Dedicated event logistics team"
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Wedding & Special Occasion Cars",
      description: "Luxury and vintage vehicles tailored for your special day.",
      image: '/corporate/wsoc.jpg',
      features: [
        "Premium luxury & vintage classics",
        "Chauffeured rides for bride, groom & guests",
        "Custom-decorated vehicles to match themes",
        "24x7 availability for ceremonies"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      title: "Airport Transfers",
      description: "Seamless transfers with personalized meet-and-greet service.",
      image: '/corporate/at.jpg',
      features: [
        "24x7 availability",
        "Real-time flight tracking",
        "Meet-and-greet at terminals",
        "Wide vehicle options: sedans to SUVs"
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFAFA' }} className="min-h-screen text-gray-900">
      <Helmet>
        <title>Best Corporate Car Rental in India | Daily Office & Business Travel</title>
        <meta name="description" content="Reliable office cab and corporate taxi services for seamless business travel. Trusted by top companies—book your corporate ride today!" />
        <link rel="canonical" href="https://taxitribe.in/corporate-protocol" />
      </Helmet>

      {/* HERO */}
      <div className="relative py-20 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1480')] bg-cover bg-center filter brightness-75"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                {/* uploaded logo path; tooling will convert it */}
                <img src="/mnt/data/logo.png" alt="Taxi Tribe" className="h-12 object-contain" />
                <span className="text-sm text-gray-600">Trusted Corporate Mobility</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                <span className="text-amber-600">Tailored</span> Solutions for <span className="text-amber-600">Corporate</span> Mobility
              </h1>
              <p className="text-gray-700 text-lg">
                "Premium Transportation Services Designed for Businesses that Value Reliability, Safety, Security, and Transparent Exceptional Services"
              </p>
            </div>

            <div className="hidden md:flex flex-col items-end gap-3">
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm text-right">
                <div className="text-xs text-gray-500">Top clients</div>
                <div className="mt-1 text-sm font-semibold text-gray-900">{clients.join(' · ')}</div>
              </div>
              <button
                onClick={() => setDialogOpen(true)}
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Value Proposition */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="text-amber-600">Why</span> Corporations Choose Us
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Tailored SLAs, dedicated teams, and technology-backed delivery for enterprise mobility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-amber-50 mx-auto">
                <FaHandshake className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Service Level Agreements (SLAs)</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">Tailored SLAs ensuring high-quality services for your business needs.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-amber-50 mx-auto">
                <FaCogs className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Dedicated Account Managers</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">Personalized support and a single point of contact for your corporate program.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-amber-50 mx-auto">
                <FaTachometerAlt className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Real-Time Tracking Dashboards</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">Track vehicles live, monitor KPIs, and get detailed MIS for finance teams.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-amber-50 mx-auto">
                <FaFileInvoice className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">MIS Reporting</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">Customizable reports and accurate billing to help your finance team reconcile quickly.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-amber-50 mx-auto">
                <FaCalendarAlt className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Bulk & Event Expertise</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">Shuttle loops, VIP protocols, and dedicated event logistics for conferences & large gatherings.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-amber-50 mx-auto">
                <FaUsersAlt className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Skilled & Dedicated Team</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">Experienced operations & account teams to ensure consistent delivery.</p>
            </div>
          </div>
        </section>

        {/* Tailored Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-amber-600">Tailored</span> Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-amber-600">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>

                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="text-amber-600 mt-1">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-100">
                  <span className="text-sm text-gray-600">Custom solutions available</span>
                  <button onClick={() => setDialogOpen(true)} className="text-amber-600 hover:text-amber-500 font-medium flex items-center group">
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOPs & Best Practices (light) */}
        <SOPsSection />
        <BestPracticesSection />

        {/* CTA Section */}
        <div className="mt-12">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to elevate your corporate travel?</h2>
                <p className="text-gray-700 mb-6">Guaranteed 10% savings on your current annual spends</p>
                <button onClick={() => setDialogOpen(true)} className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition">
                  Get Quote
                </button>
              </div>
              <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
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
